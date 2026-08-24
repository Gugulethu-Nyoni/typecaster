class ModelRegistry {
    constructor() {
        this.models = new Map();
    }

    register(name, definition) {
        if (!name) {
            throw new Error('Model name is required');
        }

        if (!definition || typeof definition !== 'object') {
            throw new Error(`Model definition for "${name}" must be an object`);
        }

        const model = {
            name,
            ...definition
        };

        this.models.set(name, model);

        return model;
    }

    registerAll(models) {
        if (!models || typeof models !== 'object') {
            throw new Error('Models must be an object or array');
        }

        if (Array.isArray(models)) {
            for (const model of models) {
                if (!model || typeof model !== 'object') {
                    continue;
                }

                this.register(model.name, model);
            }

            return this;
        }

        for (const [name, definition] of Object.entries(models)) {
            this.register(name, definition);
        }

        return this;
    }

    resolve(name) {
        return this.models.get(name);
    }

    has(name) {
        return this.models.has(name);
    }

    getAll() {
        return Array.from(this.models.values());
    }

    remove(name) {
        return this.models.delete(name);
    }

    clear() {
        this.models.clear();
    }

    size() {
        return this.models.size;
    }
}

module.exports = ModelRegistry;
