const BooleanType = {

    name: 'Boolean',

    formToDb(value) {

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
        }

        if (typeof value === 'string') {

            const normalized = value.trim().toLowerCase();

            if (['true', '1', 'on', 'yes'].includes(normalized)) {
                return true;
            }

            if (['false', '0', 'off', 'no'].includes(normalized)) {
                return false;
            }
        }

        throw new Error(`Invalid Boolean value: ${value}`);
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'boolean') {
            return String(value);
        }

        if (value === 1) {
            return 'true';
        }

        if (value === 0) {
            return 'false';
        }

        if (typeof value === 'string') {

            const normalized = value.trim().toLowerCase();

            if (['true', 'false'].includes(normalized)) {
                return normalized;
            }
        }

        throw new Error(`Invalid Boolean database value: ${value}`);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default BooleanType;
