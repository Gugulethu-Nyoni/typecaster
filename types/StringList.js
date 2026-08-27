import StringCaster from './String.js';

const StringListCaster = {

  formToDb(value, metadata, context) {
    if (value === null || value === undefined) {
      return value;
    }

    /*
     * Frontend form representation.
     *
     * String[] fields are represented by the editor as
     * comma-separated text.
     *
     * Accept both a comma-separated string and an array.
     * The canonical value returned by this caster is always
     * an array.
     */
    if (typeof value === 'string') {
      value = value
        .split(',')
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'StringListCaster.formToDb() expected an array or comma-separated string.'
      );
    }

    return value.map((item) =>
      StringCaster.formToDb(item, metadata, context)
    );
  },

  dbToForm(value, metadata, context) {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'StringListCaster.dbToForm() expected an array of strings.'
      );
    }

    return value
      .map((item) =>
        StringCaster.dbToForm(item, metadata, context)
      )
      .join(',');
  },

  assert(value, metadata, context) {
    if (value === null || value === undefined) {
      return true;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'StringListCaster.assert() expected an array of strings.'
      );
    }

    for (const item of value) {
      StringCaster.assert(item, metadata, context);
    }

    return true;
  },

};

export default StringListCaster;
