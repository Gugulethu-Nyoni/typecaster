module.exports = {
    name: 'DateTime',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (value instanceof Date) {
            if (Number.isNaN(value.getTime())) {
                throw new TypeError('Cannot cast invalid Date to DateTime');
            }

            return new Date(value.getTime());
        }

        if (typeof value === 'boolean') {
            throw new TypeError('Cannot cast boolean to DateTime');
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new TypeError('Cannot cast empty string to DateTime');
        }

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            throw new TypeError(`Cannot cast "${value}" to DateTime`);
        }

        return date;
    }
};
