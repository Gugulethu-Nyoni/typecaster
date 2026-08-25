const DecimalType = {

    name: 'Decimal',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'number') {
            if (!Number.isFinite(value)) {
                throw new Error(`Invalid Decimal value: ${value}`);
            }

            return String(value);
        }

        if (typeof value !== 'string') {
            throw new Error(`Invalid Decimal value: ${value}`);
        }

        const normalized = value.trim();

        if (normalized === '') {
            throw new Error('Decimal cannot be an empty string');
        }

        if (!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(normalized)) {
            throw new Error(`Invalid Decimal value: ${value}`);
        }

        return normalized;
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'number') {
            if (!Number.isFinite(value)) {
                throw new Error(`Invalid Decimal database value: ${value}`);
            }

            return String(value);
        }

        if (typeof value === 'bigint') {
            return value.toString();
        }

        if (typeof value === 'object' && typeof value.toString === 'function') {
            return value.toString();
        }

        if (typeof value === 'string') {
            const normalized = value.trim();

            if (!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(normalized)) {
                throw new Error(`Invalid Decimal database value: ${value}`);
            }

            return normalized;
        }

        throw new Error(`Invalid Decimal database value: ${value}`);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default DecimalType;
