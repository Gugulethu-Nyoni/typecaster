function isJsonValue(value, seen = new Set()) {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'boolean'
  ) {
    return true;
  }

  if (typeof value === 'number') {
    return Number.isFinite(value);
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (seen.has(value)) {
    return false;
  }

  seen.add(value);

  if (Array.isArray(value)) {
    for (const item of value) {
      if (!isJsonValue(item, seen)) {
        return false;
      }
    }

    seen.delete(value);

    return true;
  }

  for (const [key, item] of Object.entries(value)) {
    if (typeof key !== 'string') {
      return false;
    }

    if (!isJsonValue(item, seen)) {
      return false;
    }
  }

  seen.delete(value);

  return true;
}

const JsonCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'string') {
      const trimmed = value.trim();

      if (trimmed.includes(',')) {
        return trimmed
          .split(',')
          .map((item) => item.trim())
          .filter((item) => item.length > 0);
      }

      try {
        const parsed = JSON.parse(trimmed);

        if (!isJsonValue(parsed)) {
          throw new TypeError(
            'JsonCaster.formToDb() parsed value is not valid JSON data.'
          );
        }

        return parsed;
      } catch (error) {
        if (
          error instanceof TypeError &&
          error.message.startsWith('JsonCaster')
        ) {
          throw error;
        }

        throw new TypeError(
          'JsonCaster.formToDb() received an invalid JSON string.'
        );
      }
    }

    if (!isJsonValue(value)) {
      throw new TypeError(
        'JsonCaster.formToDb() received a value that is not valid JSON data.'
      );
    }

    return value;
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);

        if (!isJsonValue(parsed)) {
          throw new TypeError(
            'JsonCaster.dbToForm() parsed value is not valid JSON data.'
          );
        }

        return parsed;
      } catch (error) {
        if (
          error instanceof TypeError &&
          error.message.startsWith('JsonCaster')
        ) {
          throw error;
        }

        throw new TypeError(
          'JsonCaster.dbToForm() received an invalid JSON string.'
        );
      }
    }

    if (!isJsonValue(value)) {
      throw new TypeError(
        'JsonCaster.dbToForm() received a value that is not valid JSON data.'
      );
    }

    return value;
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (!isJsonValue(value)) {
      throw new TypeError(
        'JsonCaster.assert() expected valid JSON data.'
      );
    }

    return true;
  },
};

export default JsonCaster;
