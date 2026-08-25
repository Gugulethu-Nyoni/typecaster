const DateTimeType = {

    name: 'DateTime',

    formToDb(value) {

        if (value === null || value === undefined) {
            return value;
        }

        if (value instanceof Date) {

            if (Number.isNaN(value.getTime())) {
                throw new Error(`Invalid DateTime value: ${value}`);
            }

            return value;
        }

        if (typeof value !== 'string' && typeof value !== 'number') {
            throw new Error(`Invalid DateTime value: ${value}`);
        }

        if (typeof value === 'string' && value.trim() === '') {
            throw new Error('DateTime cannot be an empty string');
        }

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            throw new Error(`Invalid DateTime value: ${value}`);
        }

        return date;
    },

    dbToForm(value) {

        if (value === null || value === undefined) {
            return value;
        }

        const date = value instanceof Date
            ? value
            : new Date(value);

        if (Number.isNaN(date.getTime())) {
            throw new Error(`Invalid DateTime database value: ${value}`);
        }

        return date.toISOString();
    },

    cast(value) {
        return this.formToDb(value);
    }

};

export default DateTimeType;
