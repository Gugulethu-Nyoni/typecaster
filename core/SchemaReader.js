import fs from 'node:fs';
import path from 'node:path';

class SchemaReader {
  constructor(options = {}) {
    this.schemaPath = options.schemaPath || null;
  }

  read(schemaPath = this.schemaPath) {
    if (!schemaPath) {
      throw new TypeError(
        'SchemaReader requires a Prisma schema path.'
      );
    }

    const absolutePath = path.resolve(
      schemaPath
    );

    if (!fs.existsSync(absolutePath)) {
      throw new Error(
        `Prisma schema not found: "${absolutePath}".`
      );
    }

    const source = fs.readFileSync(
      absolutePath,
      'utf8'
    );

    return this.parse(source);
  }

  parse(source) {
    if (typeof source !== 'string') {
      throw new TypeError(
        'SchemaReader.parse() expects Prisma schema source as a string.'
      );
    }

    const models = {};
    const enums = {};

    this.parseEnums(
      source,
      enums
    );

    this.parseModels(
      source,
      models
    );

    return {
      models,
      enums,
    };
  }

  parseModels(source, models) {
    const modelPattern =
      /model\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}/g;

    let match;

    while (
      (match = modelPattern.exec(source)) !== null
    ) {
      const modelName = match[1];
      const body = match[2];

      models[modelName] = {
        name: modelName,
        fields: this.parseFields(body),
      };
    }
  }

  parseFields(body) {
    const fields = {};

    const lines =
      body
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

    for (const line of lines) {
      if (
        line.startsWith('//') ||
        line.startsWith('///') ||
        line.startsWith('@@') ||
        line.startsWith('@')
      ) {
        continue;
      }

      const match =
        line.match(
          /^([A-Za-z_][A-Za-z0-9_]*)\s+([A-Za-z_][A-Za-z0-9_]*)(\[\])?(\?)?(.*)$/
        );

      if (!match) {
        continue;
      }

      const [
        ,
        name,
        type,
        listMarker,
        nullableMarker,
        attributes,
      ] = match;

      const isList = Boolean(
        listMarker
      );

      const nullable = Boolean(
        nullableMarker
      );

      fields[name] = {
        name,
        type,
        nullable,
        isList,
        attributes:
          this.parseAttributes(
            attributes
          ),
      };
    }

    return fields;
  }

  parseAttributes(attributes) {
    if (!attributes || !attributes.trim()) {
      return [];
    }

    const results = [];

    const attributePattern =
      /@([A-Za-z_][A-Za-z0-9_]*)(?:\s*\(([^)]*)\))?/g;

    let match;

    while (
      (match = attributePattern.exec(attributes)) !== null
    ) {
      results.push({
        name: match[1],
        arguments:
          match[2] !== undefined
            ? match[2].trim()
            : null,
      });
    }

    return results;
  }

  parseEnums(source, enums) {
    const enumPattern =
      /enum\s+([A-Za-z_][A-Za-z0-9_]*)\s*\{([\s\S]*?)\}/g;

    let match;

    while (
      (match = enumPattern.exec(source)) !== null
    ) {
      const enumName = match[1];
      const body = match[2];

      const values = body
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .filter(
          (line) =>
            !line.startsWith('//') &&
            !line.startsWith('///') &&
            !line.startsWith('@')
        )
        .map((line) => {
          const valueMatch =
            line.match(
              /^([A-Za-z_][A-Za-z0-9_]*)/
            );

          return valueMatch
            ? valueMatch[1]
            : null;
        })
        .filter(Boolean);

      enums[enumName] = values;
    }
  }
}

export default SchemaReader;
