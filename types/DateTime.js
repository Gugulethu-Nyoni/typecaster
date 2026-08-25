const DateTimeCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (value instanceof Date) {
      if (Number.isNaN(value.getTime())) {
        throw new TypeError(
          'DateTimeCaster.formToDb() received an invalid Date.'
        );
      }

      return value;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
        throw new TypeError(
          'DateTimeCaster.formToDb() received a value that cannot be converted to DateTime.'
        );
      }

      return date;
    }

    throw new TypeError(
      'DateTimeCaster.formToDb() received a value that cannot be cast to DateTime.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (value instanceof Date) {
      if (Number.isNaN(value.getTime())) {
        throw new TypeError(
          'DateTimeCaster.dbToForm() received an invalid Date.'
        );
      }

      return value;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      const date = new Date(value);

      if (Number.isNaN(date.getTime())) {
        throw new TypeError(
          'DateTimeCaster.dbToForm() received a value that cannot be converted to DateTime.'
        );
      }

      return date;
    }

    throw new TypeError(
      'DateTimeCaster.dbToForm() received a value that cannot be represented as DateTime.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (!(value instanceof Date)) {
      throw new TypeError(
        'DateTimeCaster.assert() expected a Date value.'
      );
    }

    if (Number.isNaN(value.getTime())) {
      throw new TypeError(
        'DateTimeCaster.assert() received an invalid Date.'
      );
    }

    return true;
  },
};

export default DateTimeCaster;
