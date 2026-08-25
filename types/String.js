const StringCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'string') {
      return value;
    }

    if (
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'bigint'
    ) {
      return String(value);
    }

    throw new TypeError(
      'StringCaster.formToDb() received a value that cannot be cast to String.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value !== 'string') {
      return String(value);
    }

    return value;
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'string') {
      throw new TypeError(
        'StringCaster.assert() expected a string value.'
      );
    }

    return true;
  },
};

export default StringCaster;
