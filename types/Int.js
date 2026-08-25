const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

const IntCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isInteger(value)) {
        throw new TypeError(
          'IntCaster.formToDb() expected an integer value.'
        );
      }

      if (value < INT_MIN || value > INT_MAX) {
        throw new RangeError(
          'IntCaster.formToDb() value is outside the valid Int range.'
        );
      }

      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!/^[+-]?\d+$/.test(normalized)) {
        throw new TypeError(
          'IntCaster.formToDb() expected an integer-compatible string.'
        );
      }

      const parsed = Number(normalized);

      if (!Number.isSafeInteger(parsed)) {
        throw new RangeError(
          'IntCaster.formToDb() value is outside the safe integer range.'
        );
      }

      if (parsed < INT_MIN || parsed > INT_MAX) {
        throw new RangeError(
          'IntCaster.formToDb() value is outside the valid Int range.'
        );
      }

      return parsed;
    }

    throw new TypeError(
      'IntCaster.formToDb() received a value that cannot be cast to Int.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isInteger(value)) {
        throw new TypeError(
          'IntCaster.dbToForm() expected an integer value.'
        );
      }

      if (value < INT_MIN || value > INT_MAX) {
        throw new RangeError(
          'IntCaster.dbToForm() value is outside the valid Int range.'
        );
      }

      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!/^[+-]?\d+$/.test(normalized)) {
        throw new TypeError(
          'IntCaster.dbToForm() expected an integer-compatible value.'
        );
      }

      const parsed = Number(normalized);

      if (
        !Number.isSafeInteger(parsed) ||
        parsed < INT_MIN ||
        parsed > INT_MAX
      ) {
        throw new RangeError(
          'IntCaster.dbToForm() value is outside the valid Int range.'
        );
      }

      return parsed;
    }

    throw new TypeError(
      'IntCaster.dbToForm() received a value that cannot be represented as Int.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'number') {
      throw new TypeError(
        'IntCaster.assert() expected a number.'
      );
    }

    if (!Number.isInteger(value)) {
      throw new TypeError(
        'IntCaster.assert() expected an integer.'
      );
    }

    if (value < INT_MIN || value > INT_MAX) {
      throw new RangeError(
        'IntCaster.assert() value is outside the valid Int range.'
      );
    }

    return true;
  },
};

export default IntCaster;
