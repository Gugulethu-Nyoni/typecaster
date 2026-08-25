import fs from 'node:fs/promises';
import path from 'node:path';

class PrismaSchemaReader {

    constructor(options = {}) {
        this.schemaPath = options.schemaPath || 'prisma/schema.prisma';
    }

    async read() {
        const schemaPath = path.resolve(this.schemaPath);
        const source = await fs.readFile(schemaPath, 'utf8');

        return this.parse(source);
    }

    parse(source) {
        if (!source || typeof source !== 'string') {
            throw new Error('Prisma schema source is required');
        }

        const enums = this.parseEnums(source);
        const models = this.parseModels(source, enums);

        return {
            models,
            enums
        };
    }

    parseEnums(source) {
        const enums = {};

        const enumPattern =
            /enum\s+(\w+)\s*\{([\s\S]*?)\}/g;

        let match;

        while ((match = enumPattern.exec(source)) !== null) {
            const [, name, body] = match;

            const values = body
                .split('\n')
                .map(line => line.trim())
                .filter(line => {
                    return line &&
                        !line.startsWith('//') &&
                        !line.startsWith('@@');
                })
                .map(line => line.split(/\s+/)[0])
                .filter(Boolean);

            enums[name] = values;
        }

        return enums;
    }

    parseModels(source, enums) {
        const models = {};

        const modelPattern =
            /model\s+(\w+)\s*\{([\s\S]*?)\}/g;

        let match;

        while ((match = modelPattern.exec(source)) !== null) {
            const [, name, body] = match;

            models[name] = {
                name,
                fields: this.parseFields(body, enums)
            };
        }

        return models;
    }

    parseFields(body, enums) {
        const fields = {};

        const lines = body.split('\n');

        for (const rawLine of lines) {
            let line = rawLine.trim();

            if (!line) {
                continue;
            }

            if (
                line.startsWith('//') ||
                line.startsWith('@@')
            ) {
                continue;
            }

            line = line.replace(/\/\/.*$/, '').trim();

            const match = line.match(
                /^(\w+)\s+([\w\[\]]+)(\?)?(?:\s+(.+))?$/
            );

            if (!match) {
                continue;
            }

            const [
                ,
                name,
                rawType,
                nullableMarker,
                attributes = ''
            ] = match;

            const isList = rawType.endsWith('[]');
            const baseType = rawType.replace(/\[\]$/, '');

            const nullable = Boolean(nullableMarker);

            let type = this.mapType(
                baseType,
                enums
            );

            const defaultValue =
                this.parseDefault(attributes);

            fields[name] = {
                name,
                type,
                nullable,
                required: !nullable,
                default: defaultValue,
                metadata: {
                    prismaType: baseType,
                    list: isList,
                    relation: this.isRelationType(
                        baseType,
                        enums
                    )
                }
            };

            if (type === 'Enum') {
                fields[name].metadata.values =
                    enums[baseType] || [];
            }
        }

        return fields;
    }

    mapType(type, enums) {
        if (enums[type]) {
            return 'Enum';
        }

        const mappings = {
            String: 'String',
            Int: 'Int',
            BigInt: 'BigInt',
            Float: 'Float',
            Decimal: 'Decimal',
            Boolean: 'Boolean',
            DateTime: 'DateTime',
            Json: 'Json',
            Bytes: 'Bytes'
        };

        return mappings[type] || 'Unsupported';
    }

    isRelationType(type, enums) {
        const scalarTypes = new Set([
            'String',
            'Int',
            'BigInt',
            'Float',
            'Decimal',
            'Boolean',
            'DateTime',
            'Json',
            'Bytes'
        ]);

        return !scalarTypes.has(type) && !enums[type];
    }

    parseDefault(attributes) {
        if (!attributes) {
            return undefined;
        }

        const match = attributes.match(
            /@default\(([^)]*)\)/
        );

        if (!match) {
            return undefined;
        }

        const value = match[1].trim();

        if (
            value === 'true' ||
            value === 'false'
        ) {
            return value === 'true';
        }

        if (
            /^-?\d+$/.test(value)
        ) {
            return Number(value);
        }

        if (
            /^-?\d+\.\d+$/.test(value)
        ) {
            return Number(value);
        }

        if (
            /^["'].*["']$/.test(value)
        ) {
            return value.slice(1, -1);
        }

        return value;
    }
}

export default PrismaSchemaReader;
