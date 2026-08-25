class TypeCaster {

    constructor(typeRegistry, modelRegistry = null) {
        if (!typeRegistry) {
            throw new Error('TypeRegistry is required');
        }

        this.typeRegistry = typeRegistry;
        this.modelRegistry = modelRegistry;
    }

    cast(value, type, options = {}) {
        if (!type) {
            throw new Error('Type is required');
        }

        const definition = this.typeRegistry.resolve(type);

        if (!definition) {
            throw new Error(`Unknown type "${type}"`);
        }

        if (typeof definition.cast !== 'function') {
            throw new Error(`Type "${type}" does not provide a cast function`);
        }

        return definition.cast(value, options);
    }

    formToDb(value, type, options = {}) {
        if (value === null || value === undefined) {
            if (options.nullable) {
                return value;
            }

            if (options.default !== undefined) {
                return options.default;
            }

            if (options.required) {
                throw new Error(`Required ${type} value is missing`);
            }

            return value;
        }

        const definition = this.typeRegistry.resolve(type);

        if (!definition) {
            throw new Error(`Unknown type "${type}"`);
        }

        if (typeof definition.formToDb === 'function') {
            return definition.formToDb(value, options);
        }

        if (typeof definition.cast === 'function') {
            return definition.cast(value, options);
        }

        throw new Error(
            `Type "${type}" does not provide a formToDb or cast function`
        );
    }

    dbToForm(value, type, options = {}) {
        if (value === null || value === undefined) {
            if (options.nullable) {
                return value;
            }

            if (options.default !== undefined) {
                return options.default;
            }

            return value;
        }

        const definition = this.typeRegistry.resolve(type);

        if (!definition) {
            throw new Error(`Unknown type "${type}"`);
        }

        if (typeof definition.dbToForm === 'function') {
            return definition.dbToForm(value, options);
        }

        return value;
    }

    buildFieldOptions(field) {
        return {
            nullable: field.nullable,
            required: field.required,
            default: field.default,
            metadata: field.metadata,
            ...(field.metadata || {})
        };
    }

    formToDbField(value, field) {
        if (!field || typeof field !== 'object') {
            throw new Error('Field definition is required');
        }

        return this.formToDb(
            value,
            field.type,
            this.buildFieldOptions(field)
        );
    }

    dbToFormField(value, field) {
        if (!field || typeof field !== 'object') {
            throw new Error('Field definition is required');
        }

        return this.dbToForm(
            value,
            field.type,
            this.buildFieldOptions(field)
        );
    }

    formToDbModel(data, modelName) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            throw new Error('Model data must be an object');
        }

        const model = this.resolveModel(modelName);
        const fields = model.fields || {};
        const result = {};

        for (const [name, value] of Object.entries(data)) {
            const field = fields[name];

            if (!field) {
                result[name] = value;
                continue;
            }

            result[name] = this.formToDbField(value, field);
        }

        return result;
    }

    dbToFormModel(data, modelName) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            throw new Error('Model data must be an object');
        }

        const model = this.resolveModel(modelName);
        const fields = model.fields || {};
        const result = {};

        for (const [name, value] of Object.entries(data)) {
            const field = fields[name];

            if (!field) {
                result[name] = value;
                continue;
            }

            result[name] = this.dbToFormField(value, field);
        }

        return result;
    }

    resolveModel(modelName) {
        if (!this.modelRegistry) {
            throw new Error('ModelRegistry is required for model operations');
        }

        if (!modelName) {
            throw new Error('Model name is required');
        }

        const model = this.modelRegistry.resolve(modelName);

        if (!model) {
            throw new Error(`Unknown model "${modelName}"`);
        }

        return model;
    }

    registerType(name, definition) {
        return this.typeRegistry.register(name, definition);
    }

    hasType(name) {
        return this.typeRegistry.has(name);
    }

    getType(name) {
        return this.typeRegistry.resolve(name);
    }

    setModelRegistry(modelRegistry) {
        if (!modelRegistry) {
            throw new Error('ModelRegistry is required');
        }

        this.modelRegistry = modelRegistry;

        return this;
    }
}

export default TypeCaster;
