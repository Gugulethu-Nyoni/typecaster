module.exports = {
    name: 'Enum',

    cast(value, options = {}) {
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
    }
};
