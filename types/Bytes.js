module.exports = {
    name: 'Bytes',

    cast(value, options = {}) {
        if (value === null || value === undefined) {
            return value;
        }

        if (Buffer.isBuffer(value)) {
            return Buffer.from(value);
        }

        if (value instanceof Uint8Array) {
            return Buffer.from(value);
        }

        if (typeof value === 'string') {
            const input = value.trim();

            if (input === '') {
                throw new TypeError('Cannot cast empty string to Bytes');
            }

            const encoding = options.encoding || 'utf8';

            if (!['utf8', 'hex', 'base64'].includes(encoding)) {
                throw new TypeError(`Unsupported Bytes encoding "${encoding}"`);
            }

            if (encoding === 'hex' && !/^(?:[0-9a-fA-F]{2})*$/.test(input)) {
                throw new TypeError(`Cannot cast "${value}" to Bytes as hex`);
            }

            try {
                return Buffer.from(input, encoding);
            } catch (error) {
                throw new TypeError(`Cannot cast "${value}" to Bytes`);
            }
        }

        if (Array.isArray(value)) {
            if (!value.every((item) => Number.isInteger(item) && item >= 0 && item <= 255)) {
                throw new TypeError('Byte array values must be integers between 0 and 255');
            }

            return Buffer.from(value);
        }

        throw new TypeError(`Cannot cast "${value}" to Bytes`);
    }
};
