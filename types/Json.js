const JsonType = {

    name: 'Json',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string') {

            if (value.trim() === '') {
                throw new Error('Json cannot be an empty string');
            }

            try {
                return JSON.parse(value);
            } catch {
                throw new Error(`Invalid Json value: ${value}`);
            }
        }

        if (typeof value === 'object') {
            return value;
        }

        throw new Error(`Invalid Json value: ${value}`);
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string') {

            try {
                JSON.parse(value);
                return value;
            } catch {
                throw new Error(`Invalid Json database value: ${value}`);
            }
        }

        if (typeof value === 'object') {

            try {
                return JSON.stringify(value);
            } catch {
                throw new Error('Invalid Json database value');
            }
        }

        throw new Error(`Invalid Json database value: ${value}`);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default JsonType;
