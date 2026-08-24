module.exports = {
    name: 'String',

    cast(value) {
        if (value === null || value === undefined) {
            return value;
        }

        return String(value);
    }
};
