module.exports = {
    name: 'Boolean',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            return value;
        }

        if (typeof value === 'number') {
            if (value === 1) {
                return true;
            }

            if (value === 0) {
                return false;
            }

            throw new TypeError(`Cannot cast "${value}" to Boolean`);
        }

        if (typeof value === 'string') {
            const normalized = value.trim().toLowerCase();

            if (['true', '1', 'yes', 'on'].includes(normalized)) {
                return true;
            }

            if (['false', '0', 'no', 'off'].includes(normalized)) {
                return false;
            }
        }

        throw new TypeError(`Cannot cast "${value}" to Boolean`);
    }
};
