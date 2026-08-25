const FloatCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new TypeError(
          'FloatCaster.formToDb() expected a finite number.'
        );
      }

      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!normalized) {
        throw new TypeError(
          'FloatCaster.formToDb() expected a numeric value.'
        );
      }

      const parsed = Number(normalized);

      if (!Number.isFinite(parsed)) {
        throw new TypeError(
          'FloatCaster.formToDb() expected a finite numeric value.'
        );
      }

      return parsed;
    }

    throw new TypeError(
      'FloatCaster.formToDb() received a value that cannot be cast to Float.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'number') {
      if (!Number.isFinite(value)) {
        throw new TypeError(
          'FloatCaster.dbToForm() expected a finite number.'
        );
      }

      return value;
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (!normalized) {
        throw new TypeError(
          'FloatCaster.dbToForm() expected a numeric value.'
        );
      }

      const parsed = Number(normalized);

      if (!Number.isFinite(parsed)) {
        throw new TypeError(
          'FloatCaster.dbToForm() expected a finite numeric value.'
        );
      }

      return parsed;
    }

    throw new TypeError(
      'FloatCaster.dbToForm() received a value that cannot be represented as Float.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value !== 'number') {
      throw new TypeError(
        'FloatCaster.assert() expected a number.'
      );
    }

    if (!Number.isFinite(value)) {
      throw new TypeError(
        'FloatCaster.assert() expected a finite number.'
      );
    }

    return true;
  },
};

export default FloatCaster;
