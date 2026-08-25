const IntType = {

    name: 'Int',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new Error('Int cannot be an empty string');
        }

        const number = Number(value);

        if (!Number.isInteger(number)) {
            throw new Error(`Invalid Int value: ${value}`);
        }

        return number;
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (!Number.isInteger(Number(value))) {
            throw new Error(`Invalid Int database value: ${value}`);
        }

        return String(value);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default IntType;
