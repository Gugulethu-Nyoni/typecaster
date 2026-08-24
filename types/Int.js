module.exports = {
    name: 'Int',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            throw new TypeError('Cannot cast boolean to Int');
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new TypeError('Cannot cast empty string to Int');
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            throw new TypeError(`Cannot cast "${value}" to Int`);
        }

        return Math.trunc(number);
    }
};
