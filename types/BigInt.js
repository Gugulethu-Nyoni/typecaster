const BIGINT_PATTERN = /^[+-]?\d+$/;

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

      if (!BIGINT_PATTERN.test(normalized)) {
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


  /*
   * Database → application/form boundary.
   *
   * BigInt cannot be serialized by JSON.stringify().
   * Therefore dbToForm() deliberately returns a string.
   *
   * This preserves the complete integer without risking
   * JavaScript Number precision loss.
   */
  dbToForm(value) {

    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'bigint') {
      return value.toString();
    }

    if (typeof value === 'number') {

      if (!Number.isSafeInteger(value)) {
        throw new TypeError(
          'BigIntCaster.dbToForm() expected a safe integer value.'
        );
      }

      return String(value);
    }

    if (typeof value === 'string') {

      const normalized = value.trim();

      if (!BIGINT_PATTERN.test(normalized)) {
        throw new TypeError(
          'BigIntCaster.dbToForm() expected an integer-compatible value.'
        );
      }

      /*
       * Keep the form representation as a string.
       *
       * Do not convert it to Number because BigInt values may
       * exceed JavaScript's safe integer range.
       */
      return normalized;
    }

    throw new TypeError(
      'BigIntCaster.dbToForm() received a value that cannot be represented as a JSON-safe BigInt.'
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
