class PostgreSQLProvider {
  constructor(options = {}) {
    this.options = options;
  }

  getName() {
    return 'PostgreSQL';
  }

  normalizeDbValue(value, field = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    /*
     * PostgreSQL drivers may return BIGINT values as strings.
     * TypeCaster's BigInt caster is responsible for converting
     * the value into the application's typed representation.
     *
     * The provider therefore does not perform scalar casting here.
     */
    if (
      field.type === 'BigInt' &&
      typeof value === 'string'
    ) {
      return value;
    }

    /*
     * PostgreSQL DECIMAL / NUMERIC values are commonly returned
     * as strings to preserve precision.
     *
     * DecimalCaster remains responsible for interpreting them.
     */
    if (
      field.type === 'Decimal' &&
      typeof value === 'string'
    ) {
      return value;
    }

    return value;
  }

  prepareDbValue(value, field = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    /*
     * PostgreSQL-specific preparation belongs here only when
     * the database driver requires it.
     *
     * Do not perform business transformations here.
     */
    return value;
  }
}

export default PostgreSQLProvider;
