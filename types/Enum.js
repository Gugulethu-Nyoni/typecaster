const EnumType = {

    name: 'Enum',

    formToDb(value, options = {}) {

        if (value === null || value === undefined) {
            return value;
        }

        const values = options.values;

        if (!Array.isArray(values) || values.length === 0) {
            throw new TypeError('Enum values must be a non-empty array');
        }

        if (!values.includes(value)) {
            throw new TypeError(
                `Invalid Enum value "${value}". Expected one of: ${values.join(', ')}`
            );
        }

        return value;
    },

    dbToForm(value, options = {}) {

        if (value === null || value === undefined) {
            return value;
        }

        const values = options.values;

        if (!Array.isArray(values) || values.length === 0) {
            throw new TypeError('Enum values must be a non-empty array');
        }

        if (!values.includes(value)) {
            throw new TypeError(
                `Invalid Enum database value "${value}". Expected one of: ${values.join(', ')}`
            );
        }

        return value;
    },

    cast(value, options = {}) {
        return this.formToDb(value, options);
    }

};

export default EnumType;
