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

        const fields = model.fields || {};

        return {
            name: model.name,
            fields: this.buildFields(fields)
        };
    }

    buildFields(fields) {
        if (!fields || typeof fields !== 'object') {
            throw new Error('Fields must be an object');
        }

        const metadata = {};

        for (const [name, definition] of Object.entries(fields)) {
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

        return {
            name,
            type,
            nullable: Boolean(definition.nullable),
            required: definition.required !== false,
            default: definition.default,
            metadata: definition.metadata || {}
        };
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
}

export default MetadataBuilder;
