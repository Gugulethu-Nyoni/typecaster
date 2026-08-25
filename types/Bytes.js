const HEX_PATTERN = /^(?:[0-9a-fA-F]{2})+$/;

function isBuffer(value) {
  return (
    typeof Buffer !== 'undefined' &&
    Buffer.isBuffer(value)
  );
}

const BytesCaster = {
  formToDb(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (isBuffer(value)) {
      return value;
    }

    if (value instanceof Uint8Array) {
      return Buffer.from(value);
    }

    if (value instanceof ArrayBuffer) {
      return Buffer.from(value);
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (normalized === '') {
        return Buffer.alloc(0);
      }

      if (!HEX_PATTERN.test(normalized)) {
        throw new TypeError(
          'BytesCaster.formToDb() expected a hexadecimal string.'
        );
      }

      return Buffer.from(normalized, 'hex');
    }

    if (Array.isArray(value)) {
      if (
        !value.every(
          (item) =>
            Number.isInteger(item) &&
            item >= 0 &&
            item <= 255
        )
      ) {
        throw new TypeError(
          'BytesCaster.formToDb() expected an array of byte values.'
        );
      }

      return Buffer.from(value);
    }

    throw new TypeError(
      'BytesCaster.formToDb() received a value that cannot be cast to Bytes.'
    );
  },

  dbToForm(value) {
    if (value === null || value === undefined) {
      return value;
    }

    if (isBuffer(value)) {
      return value;
    }

    if (value instanceof Uint8Array) {
      return Buffer.from(value);
    }

    if (value instanceof ArrayBuffer) {
      return Buffer.from(value);
    }

    if (typeof value === 'string') {
      const normalized = value.trim();

      if (normalized === '') {
        return Buffer.alloc(0);
      }

      if (!HEX_PATTERN.test(normalized)) {
        throw new TypeError(
          'BytesCaster.dbToForm() expected a hexadecimal string.'
        );
      }

      return Buffer.from(normalized, 'hex');
    }

    throw new TypeError(
      'BytesCaster.dbToForm() received a value that cannot be represented as Bytes.'
    );
  },

  assert(value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (!isBuffer(value)) {
      throw new TypeError(
        'BytesCaster.assert() expected a Buffer value.'
      );
    }

    return true;
  },
};

export default BytesCaster;
