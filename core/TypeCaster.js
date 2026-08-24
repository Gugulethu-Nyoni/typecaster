class TypeCaster {
    constructor(typeRegistry) {
        if (!typeRegistry) {
            throw new Error('TypeRegistry is required');
        }

        this.typeRegistry = typeRegistry;
    }

    cast(value, type, options = {}) {
        if (!type) {
            throw new Error('Type is required');
        }

        if (value === null || value === undefined) {
            if (options.nullable) {
                return value;
            }

            if (options.default !== undefined) {
                return options.default;
            }
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

    castField(value, field) {
        if (!field || typeof field !== 'object') {
            throw new Error('Field definition is required');
        }

        return this.cast(value, field.type, {
            nullable: field.nullable,
            required: field.required,
            default: field.default,
            metadata: field.metadata
        });
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
}

module.exports = TypeCaster;
