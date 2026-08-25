import Validator from '../overrides/Validator.js';

class TypeCaster {

    constructor(
        typeRegistry,
        modelRegistry = null,
        overrideRegistry = null
    ) {
        if (!typeRegistry) {
            throw new Error('TypeRegistry is required');
        }

        this.typeRegistry = typeRegistry;
        this.modelRegistry = modelRegistry;
        this.overrideRegistry = overrideRegistry;
        this.validator = new Validator();
        this.metadataBuilder = null;
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

    formToDbField(value, field, modelName = null) {
        if (!field || typeof field !== 'object') {
            throw new Error('Field definition is required');
        }

        const options = this.buildFieldOptions(field);

        const result = field.metadata?.list === true
            ? this.formToDbList(value, field, options)
            : this.formToDb(
                value,
                field.type,
                options
            );

        this.validateOverride(
            result,
            modelName,
            field.name
        );

        return result;
    }

    dbToFormField(value, field, modelName = null) {
        if (!field || typeof field !== 'object') {
            throw new Error('Field definition is required');
        }

        const options = this.buildFieldOptions(field);

        const result = field.metadata?.list === true
            ? this.dbToFormList(value, field, options)
            : this.dbToForm(
                value,
                field.type,
                options
            );

        this.validateOverride(
            result,
            modelName,
            field.name
        );

        return result;
    }

    formToDbList(value, field, options = {}) {
        if (value === null || value === undefined) {
            return this.formToDb(
                value,
                field.type,
                options
            );
        }

        if (typeof value === 'string') {
            if (value.trim() === '') {
                return [];
            }

            try {
                const parsed = JSON.parse(value);

                if (Array.isArray(parsed)) {
                    value = parsed;
                } else {
                    value = value
                        .split(',')
                        .map(item => item.trim())
                        .filter(Boolean);
                }
            } catch {
                value = value
                    .split(',')
                    .map(item => item.trim())
                    .filter(Boolean);
            }
        }

        if (!Array.isArray(value)) {
            throw new Error(
                `Expected an array value for field "${field.name}"`
            );
        }

        return value.map(item =>
            this.formToDb(
                item,
                field.type,
                options
            )
        );
    }

    dbToFormList(value, field, options = {}) {
        if (value === null || value === undefined) {
            return value;
        }

        if (!Array.isArray(value)) {
            if (typeof value === 'string') {
                try {
                    const parsed = JSON.parse(value);

                    if (Array.isArray(parsed)) {
                        value = parsed;
                    } else {
                        value = value
                            .split(',')
                            .map(item => item.trim())
                            .filter(Boolean);
                    }
                } catch {
                    value = value
                        .split(',')
                        .map(item => item.trim())
                        .filter(Boolean);
                }
            } else {
                throw new Error(
                    `Expected an array value for field "${field.name}"`
                );
            }
        }

        return value.map(item =>
            this.dbToForm(
                item,
                field.type,
                options
            )
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
            // metadata is TypeCaster transport metadata, never model data.
            if (name === 'metadata') {
                continue;
            }

            const field = fields[name];

            if (!field) {
                result[name] = value;
                continue;
            }

            result[name] = this.formToDbField(
                value,
                {
                    ...field,
                    name
                },
                modelName
            );
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

            result[name] = this.dbToFormField(
                value,
                {
                    ...field,
                    name
                },
                modelName
            );
        }

        result.metadata = this.buildEditorMetadata(model);

        return result;
    }

    validateOverride(value, modelName, fieldName) {
        if (!this.overrideRegistry) {
            return true;
        }

        if (!modelName || !fieldName) {
            return true;
        }

        const override = this.overrideRegistry.resolve(
            modelName,
            fieldName
        );

        if (!override) {
            return true;
        }

        return this.validator.validateOverride(
            value,
            override,
            `${modelName}.${fieldName}`
        );
    }

    buildEditorMetadata(model) {
        if (!model || typeof model !== 'object') {
            throw new Error('Model definition is required');
        }

        if (!this.metadataBuilder) {
            return {
                fields: {}
            };
        }

        return this.metadataBuilder.buildModel({
            name: model.name,
            fields: model.fields || {}
        });
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
