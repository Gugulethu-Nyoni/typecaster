class TypeRegistry {
  constructor(options = {}) {
    this.types = new Map();

    if (options.types) {
      this.registerMany(options.types);
    }
  }

  normalizeTypeName(typeName) {
    if (typeof typeName !== 'string') {
      throw new TypeError(
        'TypeRegistry type name must be a non-empty string.'
      );
    }

    const normalized = typeName.trim();

    if (!normalized) {
      throw new TypeError(
        'TypeRegistry type name must be a non-empty string.'
      );
    }

    return normalized;
  }

  validateCaster(caster, typeName) {
    if (!caster || typeof caster !== 'object') {
      throw new TypeError(
        `Invalid caster registration for "${typeName}". ` +
        'A caster object is required.'
      );
    }

    const requiredMethods = [
      'formToDb',
      'dbToForm',
      'assert',
    ];

    for (const method of requiredMethods) {
      if (typeof caster[method] !== 'function') {
        throw new TypeError(
          `Invalid caster registration for "${typeName}". ` +
          `Caster must implement ${method}().`
        );
      }
    }
  }

  register(typeName, caster, options = {}) {
    const normalizedTypeName =
      this.normalizeTypeName(typeName);

    this.validateCaster(
      caster,
      normalizedTypeName
    );

    const replace = options.replace === true;

    if (
      this.types.has(normalizedTypeName) &&
      !replace
    ) {
      throw new Error(
        `Type "${normalizedTypeName}" is already registered.`
      );
    }

    this.types.set(
      normalizedTypeName,
      caster
    );

    return this;
  }

  registerMany(entries, options = {}) {
    if (!entries) {
      return this;
    }

    if (entries instanceof Map) {
      for (const [typeName, caster] of entries) {
        this.register(
          typeName,
          caster,
          options
        );
      }

      return this;
    }

    if (
      typeof entries !== 'object' ||
      Array.isArray(entries)
    ) {
      throw new TypeError(
        'TypeRegistry.registerMany() expects an object or Map.'
      );
    }

    for (const [typeName, caster] of Object.entries(entries)) {
      this.register(
        typeName,
        caster,
        options
      );
    }

    return this;
  }

  has(typeName) {
    const normalizedTypeName =
      this.normalizeTypeName(typeName);

    return this.types.has(
      normalizedTypeName
    );
  }

  resolve(typeName) {
    const normalizedTypeName =
      this.normalizeTypeName(typeName);

    const caster = this.types.get(
      normalizedTypeName
    );

    if (caster) {
      return caster;
    }

    const unsupported = this.types.get(
      'Unsupported'
    );

    if (unsupported) {
      return unsupported;
    }

    throw new Error(
      `TypeRegistry cannot resolve unknown type ` +
      `"${normalizedTypeName}" because the Unsupported ` +
      'caster is not registered.'
    );
  }

  assertKnown(typeName) {
    const normalizedTypeName =
      this.normalizeTypeName(typeName);

    if (!this.types.has(normalizedTypeName)) {
      throw new Error(
        `Unknown TypeCaster type: "${normalizedTypeName}".`
      );
    }

    return true;
  }
}

export default TypeRegistry;
