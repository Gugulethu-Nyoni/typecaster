const DECIMAL_PATTERN = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;

const DecimalCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!DECIMAL_PATTERN.test(normalized)) {
        throw new TypeError(
          'DecimalCaster.formToDb() expected a valid decimal value.'
        );
      }

      return normalized;
    }

    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new TypeError(
          'DecimalCaster.formToDb() expected a finite number.'
        );
      }

      return String(value);
    }

    if (typeof value === 'bigint') {
      return value.toString();
    }

    throw new TypeError(
      'DecimalCaster.formToDb() received a value that cannot be cast to Decimal.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!DECIMAL_PATTERN.test(normalized)) {
        throw new TypeError(
          'DecimalCaster.dbToForm() expected a valid decimal value.'
        );
      }

      return normalized;
    }

    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new TypeError(
          'DecimalCaster.dbToForm() expected a finite number.'
        );
      }

      return String(value);
    }

    if (typeof value === 'bigint') {
      return value.toString();
    }

    throw new TypeError(
      'DecimalCaster.dbToForm() received a value that cannot be represented as Decimal.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'string') {
      throw new TypeError(
        'DecimalCaster.assert() expected a string decimal representation.'
      );
    }

    if (!DECIMAL_PATTERN.test(value.trim())) {
      throw new TypeError(
        'DecimalCaster.assert() expected a valid decimal value.'
      );
    }

    return true;
  },
};

export default DecimalCaster;
