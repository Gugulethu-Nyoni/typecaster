module.exports = {
    name: 'Decimal',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            throw new TypeError('Cannot cast boolean to Decimal');
        }

        if (typeof value === 'number') {
            if (!Number.isFinite(value)) {
                throw new TypeError(`Cannot cast "${value}" to Decimal`);
            }

            return String(value);
        }

        if (typeof value === 'bigint') {
            return value.toString();
        }

        if (typeof value !== 'string') {
            throw new TypeError(`Cannot cast "${value}" to Decimal`);
        }

        const decimal = value.trim();

        if (decimal === '') {
            throw new TypeError('Cannot cast empty string to Decimal');
        }

        if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(decimal)) {
            throw new TypeError(`Cannot cast "${value}" to Decimal`);
        }

        return decimal;
    }
};
