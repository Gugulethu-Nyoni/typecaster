function unsupported(typeName = 'unknown') {
  throw new TypeError(
    `Unsupported TypeCaster type: "${typeName}".`
  );
}

const UnsupportedCaster = {
  formToDb(value, metadata = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    const typeName =
      metadata.type ||
      metadata.name ||
      'unknown';

    return unsupported(typeName);
  },

  dbToForm(value, metadata = {}) {
    if (value === null || value === undefined) {
      return value;
    }

    const typeName =
      metadata.type ||
      metadata.name ||
      'unknown';

    return unsupported(typeName);
  },

  assert(value, metadata = {}) {
    if (value === null || value === undefined) {
      return true;
    }

    const typeName =
      metadata.type ||
      metadata.name ||
      'unknown';

    return unsupported(typeName);
  },
};

export default UnsupportedCaster;
