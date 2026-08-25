const FloatType = {

    name: 'Float',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new Error('Float cannot be an empty string');
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            throw new Error(`Invalid Float value: ${value}`);
        }

        return number;
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        const number = Number(value);

        if (!Number.isFinite(number)) {
            throw new Error(`Invalid Float database value: ${value}`);
        }

        return String(number);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default FloatType;
