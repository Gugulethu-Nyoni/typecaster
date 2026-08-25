class Validator {

    validate(value, definition = {}) {
        if (value === null || value === undefined) {
            if (definition.nullable) {
                return true;
            }

            if (definition.required) {
                throw new TypeError(
                    `Required field "${definition.name || 'value'}" is missing`
                );
            }

            return true;
        }

        if (definition.validate) {
            if (typeof definition.validate !== 'function') {
                throw new TypeError(
                    'Field validator must be a function'
                );
            }

            const result = definition.validate(value);

            if (result === false) {
                throw new TypeError(
                    `Validation failed for "${definition.name || 'value'}"`
                );
            }
        }

        return true;
    }

    validateField(value, field) {
        if (!field || typeof field !== 'object') {
            throw new TypeError('Field definition is required');
        }

        return this.validate(value, field);
    }

    validateModel(data, model) {
        if (!data || typeof data !== 'object' || Array.isArray(data)) {
            throw new TypeError('Model data must be an object');
        }

        if (!model || typeof model !== 'object') {
            throw new TypeError('Model definition is required');
        }

        const fields = model.fields || {};

        for (const [name, field] of Object.entries(fields)) {
            this.validateField(data[name], {
                ...field,
                name
            });
        }

        return true;
    }
}

export default Validator;
