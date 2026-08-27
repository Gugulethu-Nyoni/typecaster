import EnumCaster from './Enum.js';

const EnumListCaster = {
  formToDb(value, metadata = {}, context) {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        'EnumListCaster.formToDb() expected an array of enum values.'
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

    return value.map((item) =>
      EnumCaster.dbToForm(item, metadata, context)
    );
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
