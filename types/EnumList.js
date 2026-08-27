import EnumCaster from './Enum.js';

const EnumListCaster = {

  formToDb(value, metadata = {}, context) {

    if (value === null || value === undefined) {
      return value;
    }

    /*
     * Frontend form representation.
     *
     * Enum[] fields are represented by the editor as
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
        'EnumListCaster.formToDb() expected an array or comma-separated string.'
      );
    }

    return value.map((item) =>
      EnumCaster.formToDb(item, metadata, context)
    );
  },

  dbToForm(value, metadata = {}, context) {

    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'EnumListCaster.dbToForm() expected an array of enum values.'
      );
    }

    return value
      .map((item) =>
        EnumCaster.dbToForm(item, metadata, context)
      )
      .join(',');
  },

  assert(value, metadata = {}, context) {

    if (value === null || value === undefined) {
      return true;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'EnumListCaster.assert() expected an array of enum values.'
      );
    }

    for (const item of value) {
      EnumCaster.assert(item, metadata, context);
    }

    return true;
  },

};

export default EnumListCaster;
