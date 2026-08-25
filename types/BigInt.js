const BigIntCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'bigint') {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isSafeInteger(value)) {
        throw new TypeError(
          'BigIntCaster.formToDb() expected a safe integer value.'
        );
      }

      return BigInt(value);
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!/^[+-]?\d+$/.test(normalized)) {
        throw new TypeError(
          'BigIntCaster.formToDb() expected an integer-compatible string.'
        );
      }

      try {
        return BigInt(normalized);
      } catch (error) {
        throw new TypeError(
          'BigIntCaster.formToDb() could not convert the value to BigInt.'
        );
      }
    }

    throw new TypeError(
      'BigIntCaster.formToDb() received a value that cannot be cast to BigInt.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'bigint') {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isSafeInteger(value)) {
        throw new TypeError(
          'BigIntCaster.dbToForm() expected a safe integer value.'
        );
      }

      return BigInt(value);
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!/^[+-]?\d+$/.test(normalized)) {
        throw new TypeError(
          'BigIntCaster.dbToForm() expected an integer-compatible value.'
        );
      }

      try {
        return BigInt(normalized);
      } catch (error) {
        throw new TypeError(
          'BigIntCaster.dbToForm() could not convert the value to BigInt.'
        );
      }
    }

    throw new TypeError(
      'BigIntCaster.dbToForm() received a value that cannot be represented as BigInt.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'bigint') {
      throw new TypeError(
        'BigIntCaster.assert() expected a bigint value.'
      );
    }

    return true;
  },
};

export default BigIntCaster;
