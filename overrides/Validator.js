class Validator {
    constructor() {
        this.validators = new Map();
    }

    register(name, validator) {
        if (!name) {
            throw new Error('Validator name is required');
        }

        if (typeof validator !== 'function') {
            throw new Error(`Validator "${name}" must be a function`);
        }

        this.validators.set(name, validator);

        return validator;
    }

    resolve(name) {
        return this.validators.get(name);
    }

    has(name) {
        return this.validators.has(name);
    }

    validate(name, value, options = {}) {
        const validator = this.resolve(name);

        if (!validator) {
            throw new Error(`Unknown validator "${name}"`);
        }

        return Boolean(validator(value, options));
    }

    assert(name, value, options = {}) {
        if (!this.validate(name, value, options)) {
            throw new TypeError(
                options.message || `Validation failed for "${name}"`
            );
        }

        return true;
    }

    getAll() {
        return Array.from(this.validators.keys());
    }

    remove(name) {
        return this.validators.delete(name);
    }

    clear() {
        this.validators.clear();
    }

    size() {
        return this.validators.size;
    }
}

module.exports = Validator;
