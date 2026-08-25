const StringType = {

    name: 'String',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        return String(value);
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        return String(value);
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default StringType;
