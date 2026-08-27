const DECIMAL_PATTERN = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;

function decimalToString(value, method) {
  if (value === null || value === undefined) {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.trim();

    if (!DECIMAL_PATTERN.test(normalized)) {
      throw new TypeError(
        `DecimalCaster.${method}() expected a valid decimal value.`
      );
    }

    return normalized;
  }

  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      throw new TypeError(
        `DecimalCaster.${method}() expected a finite number.`
      );
    }

    return String(value);
  }

  if (typeof value === 'bigint') {
    return value.toString();
  }

  /*
   * Prisma Decimal and compatible Decimal implementations
   * expose their value through toString().
   *
   * Do not require a specific Decimal class here.
   * TypeCaster should remain provider/runtime agnostic.
   */
  if (
    typeof value === 'object' &&
    typeof value.toString === 'function'
  ) {
    const normalized = value.toString().trim();

    if (!DECIMAL_PATTERN.test(normalized)) {
      throw new TypeError(
        `DecimalCaster.${method}() expected a valid decimal value.`
      );
    }

    return normalized;
  }

  throw new TypeError(
    `DecimalCaster.${method}() received a value that cannot be represented as Decimal.`
  );
}

const DecimalCaster = {

  formToDb(value) {
    return decimalToString(value, 'formToDb');
  },

  dbToForm(value) {
    return decimalToString(value, 'dbToForm');
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    const normalized = decimalToString(value, 'assert');

    if (!DECIMAL_PATTERN.test(normalized.trim())) {
      throw new TypeError(
        'DecimalCaster.assert() expected a valid decimal value.'
      );
    }

    return true;
  },

};

export default DecimalCaster;
