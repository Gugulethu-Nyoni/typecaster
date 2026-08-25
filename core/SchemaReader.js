class SchemaReader {

    constructor(schema = {}) {
        this.schema = schema;
        this.models = new Map();

        this.load(schema);
    }

    load(schema) {
        if (!schema || typeof schema !== 'object') {
            throw new Error('Schema must be an object');
        }

        this.schema = schema;
        this.models.clear();

        const models = schema.models || {};

        if (Array.isArray(models)) {
            for (const model of models) {
                if (!model || typeof model !== 'object') {
                    continue;
                }

                if (!model.name) {
                    throw new Error('Model name is required');
                }

                this.models.set(model.name, {
                    ...model
                });
            }

            return this;
        }

        for (const [name, definition] of Object.entries(models)) {
            if (!definition || typeof definition !== 'object') {
                throw new Error(
                    `Model definition for "${name}" must be an object`
                );
            }

            this.models.set(name, {
                name,
                ...definition
            });
        }

        return this;
    }

    getModel(name) {
        return this.models.get(name);
    }

    hasModel(name) {
        return this.models.has(name);
    }

    getModels() {
        return Array.from(this.models.values());
    }

    getSchema() {
        return this.schema;
    }
}

export default SchemaReader;
