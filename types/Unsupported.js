const UnsupportedType = {
    name: 'Unsupported',

    cast(value) {
        return value;
    },

    formToDb(value) {
        return value;
    },

    dbToForm(value) {
        return value;
    }
};

export default UnsupportedType;
