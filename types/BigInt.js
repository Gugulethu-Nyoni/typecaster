const BigIntType = {

    name: 'BigInt',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new Error('BigInt cannot be an empty string');
        }

        try {
            return BigInt(value);
        } catch {
            throw new Error(`Invalid BigInt value: ${value}`);
        }
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        try {
            return BigInt(value).toString();
        } catch {
            throw new Error(`Invalid BigInt database value: ${value}`);
        }
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default BigIntType;
