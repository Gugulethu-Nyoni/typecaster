class MetadataBuilder {

    constructor(typeRegistry = null, modelRegistry = null) {
        this.typeRegistry = typeRegistry;
        this.modelRegistry = modelRegistry;
    }

    buildModel(model) {
        if (!model || typeof model !== 'object') {
            throw new Error('Model definition is required');
        }

        if (!model.name) {
            throw new Error('Model name is required');
        }

        return {
            fields: this.buildFields(model.fields || {})
        };
    }

    buildFields(fields) {
        if (!fields || typeof fields !== 'object') {
            throw new Error('Fields must be an object');
        }

        const metadata = {};

        for (const [name, definition] of Object.entries(fields)) {
            if (definition?.metadata?.relation === true) {
                continue;
            }

            metadata[name] = this.buildField(name, definition);
        }

        return metadata;
    }

    buildField(name, definition = {}) {
        if (!name) {
            throw new Error('Field name is required');
        }

        if (!definition || typeof definition !== 'object') {
            throw new Error(
                `Field definition for "${name}" must be an object`
            );
        }

        const type = definition.type || 'Unsupported';
        const editor = this.resolveEditor(type, definition);

        const result = {
            editor
        };

        const options = this.resolveOptions(type, definition);

        if (options !== undefined) {
            result.options = options;
        }

        return result;
    }

    resolveEditor(type, definition = {}) {
        const normalized = String(type || '')
            .trim()
            .toLowerCase();

        if (definition.editor) {
            return definition.editor;
        }

        if (definition.metadata?.list === true) {
            return 'array';
        }

        if (
            normalized === 'int' ||
            normalized === 'integer' ||
            normalized === 'bigint' ||
            normalized === 'float' ||
            normalized === 'decimal'
        ) {
            return 'number';
        }

        if (
            normalized === 'boolean' ||
            normalized === 'bool'
        ) {
            return 'boolean';
        }

        if (
            normalized === 'datetime' ||
            normalized === 'date'
        ) {
            return 'datetime';
        }

        if (normalized === 'enum') {
            return 'select';
        }

        if (normalized === 'json') {
            return 'json';
        }

        if (
            normalized === 'array' ||
            normalized.endsWith('[]')
        ) {
            return 'array';
        }

        if (
            normalized === 'bytes' ||
            normalized === 'unsupported'
        ) {
            return 'text';
        }

        return 'text';
    }

    resolveOptions(type, definition = {}) {
        const normalized = String(type || '')
            .trim()
            .toLowerCase();

        if (normalized !== 'enum') {
            return undefined;
        }

        if (
            definition.metadata &&
            Array.isArray(definition.metadata.values)
        ) {
            return definition.metadata.values;
        }

        if (Array.isArray(definition.values)) {
            return definition.values;
        }

        return [];
    }

    buildAll(models = null) {
        const source = models || (
            this.modelRegistry
                ? this.modelRegistry.getAll()
                : []
        );

        if (!Array.isArray(source)) {
            throw new Error('Models must be an array');
        }

        return source.map((model) => this.buildModel(model));
    }

    buildModelMetadata(modelName) {
        if (!this.modelRegistry) {
            throw new Error(
                'ModelRegistry is required for metadata operations'
            );
        }

        const model = this.modelRegistry.resolve(modelName);

        if (!model) {
            throw new Error(`Unknown model "${modelName}"`);
        }

        return {
            fields: this.buildFields(model.fields || {})
        };
    }
}

export default MetadataBuilder;
