module.exports = {
    name: 'BigInt',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            throw new TypeError('Cannot cast boolean to BigInt');
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new TypeError('Cannot cast empty string to BigInt');
        }

        try {
            return BigInt(value);
        } catch (error) {
            throw new TypeError(`Cannot cast "${value}" to BigInt`);
        }
    }
};
