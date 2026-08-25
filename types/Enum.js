function getEnumValues(metadata = {}) {
  const values =
    metadata.values ||
    metadata.enumValues ||
    metadata.options;

  if (!Array.isArray(values) || values.length === 0) {
    throw new TypeError(
      'EnumCaster requires enum values in field metadata.'
    );
  }

  return values;
}

const EnumCaster = {
  formToDb(value, metadata = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    const enumValues = getEnumValues(metadata);

    if (!enumValues.includes(value)) {
      throw new TypeError(
        `EnumCaster.formToDb() received invalid enum value: "${value}". ` +
        `Expected one of: ${enumValues.join(', ')}.`
      );
    }

    return value;
  },

  dbToForm(value, metadata = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    const enumValues = getEnumValues(metadata);

    if (!enumValues.includes(value)) {
      throw new TypeError(
        `EnumCaster.dbToForm() received invalid enum value: "${value}". ` +
        `Expected one of: ${enumValues.join(', ')}.`
      );
    }

    return value;
  },

  assert(value, metadata = {}) {
    if (value === null || value === undefined) {
      return true;
    }

    const enumValues = getEnumValues(metadata);

    if (!enumValues.includes(value)) {
      throw new TypeError(
        `EnumCaster.assert() received invalid enum value: "${value}". ` +
        `Expected one of: ${enumValues.join(', ')}.`
      );
    }

    return true;
  },
};

export default EnumCaster;
