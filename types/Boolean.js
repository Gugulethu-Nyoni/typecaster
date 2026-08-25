const TRUE_VALUES = new Set([
  'true',
  '1',
]);

const FALSE_VALUES = new Set([
  'false',
  '0',
]);

const BooleanCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'number') {
      if (value === 1) {
        return true;
      }

      if (value === 0) {
        return false;
      }

      throw new TypeError(
        'BooleanCaster.formToDb() expected 0 or 1 for numeric input.'
      );
    }

    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();

      if (TRUE_VALUES.has(normalized)) {
        return true;
      }

      if (FALSE_VALUES.has(normalized)) {
        return false;
      }

      throw new TypeError(
        'BooleanCaster.formToDb() expected true, false, 1, or 0.'
      );
    }

    throw new TypeError(
      'BooleanCaster.formToDb() received a value that cannot be cast to Boolean.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'number') {
      if (value === 1) {
        return true;
      }

      if (value === 0) {
        return false;
      }

      throw new TypeError(
        'BooleanCaster.dbToForm() expected 0 or 1 for numeric input.'
      );
    }

    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();

      if (TRUE_VALUES.has(normalized)) {
        return true;
      }

      if (FALSE_VALUES.has(normalized)) {
        return false;
      }

      throw new TypeError(
        'BooleanCaster.dbToForm() expected true, false, 1, or 0.'
      );
    }

    throw new TypeError(
      'BooleanCaster.dbToForm() received a value that cannot be represented as Boolean.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'boolean') {
      throw new TypeError(
        'BooleanCaster.assert() expected a boolean value.'
      );
    }

    return true;
  },
};

export default BooleanCaster;
