module.exports = {
    name: 'Json',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string') {
            const input = value.trim();

            if (input === '') {
                throw new TypeError('Cannot cast empty string to Json');
            }

            try {
                return JSON.parse(input);
            } catch (error) {
                throw new TypeError(`Cannot cast "${value}" to Json`);
            }
        }

        if (
            typeof value === 'object' ||
            typeof value === 'number' ||
            typeof value === 'boolean'
        ) {
            return value;
        }

        throw new TypeError(`Cannot cast "${value}" to Json`);
    }
};
