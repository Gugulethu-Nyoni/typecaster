module.exports = {
    name: 'Float',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            throw new TypeError('Cannot cast boolean to Float');
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new TypeError('Cannot cast empty string to Float');
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            throw new TypeError(`Cannot cast "${value}" to Float`);
        }

        return number;
    }
};
