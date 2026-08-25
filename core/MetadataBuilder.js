class MetadataBuilder {
  constructor(options = {}) {
    this.schemaReader = options.schemaReader || null;
  }

  build(schema) {
    if (!schema || typeof schema !== 'object') {
      throw new TypeError(
        'MetadataBuilder.build() expects schema metadata.'
      );
    }

    const models = this.normalizeModels(
      schema.models || {}
    );

    const enums = this.normalizeEnums(
      schema.enums || {}
    );

    return {
      models,
      enums,
    };
  }

  buildFromReader(...args) {
    if (!this.schemaReader) {
      throw new Error(
        'MetadataBuilder requires a schemaReader to use buildFromReader().'
      );
    }

    const schema =
      typeof this.schemaReader.read === 'function'
        ? this.schemaReader.read(...args)
        : typeof this.schemaReader.parse === 'function'
          ? this.schemaReader.parse(...args)
          : null;

    if (!schema) {
      throw new TypeError(
        'SchemaReader must implement read() or parse().'
      );
    }

    return this.build(schema);
  }

  normalizeModels(models) {
    if (
      !models ||
      typeof models !== 'object' ||
      Array.isArray(models)
    ) {
      throw new TypeError(
        'MetadataBuilder models must be an object or Map.'
      );
    }

    if (models instanceof Map) {
      return this.normalizeModelMap(
        models
      );
    }

    const normalized = {};

    for (
      const [modelName, model] of Object.entries(models)
    ) {
      normalized[modelName] =
        this.normalizeModel(
          modelName,
          model
        );
    }

    return normalized;
  }

  normalizeModelMap(models) {
    const normalized = new Map();

    for (
      const [modelName, model] of models
    ) {
      normalized.set(
        modelName,
        this.normalizeModel(
          modelName,
          model
        )
      );
    }

    return normalized;
  }

  normalizeModel(modelName, model) {
    if (!model || typeof model !== 'object') {
      throw new TypeError(
        `Invalid metadata for model "${modelName}".`
      );
    }

    const fields =
      model.fields || {};

    if (
      !fields ||
      typeof fields !== 'object' ||
      Array.isArray(fields)
    ) {
      throw new TypeError(
        `Invalid fields metadata for model "${modelName}".`
      );
    }

    return {
      ...model,
      name:
        model.name ||
        modelName,
      fields:
        this.normalizeFields(
          fields
        ),
    };
  }

  normalizeFields(fields) {
    if (fields instanceof Map) {
      return this.normalizeFieldMap(
        fields
      );
    }

    const normalized = {};

    for (
      const [fieldName, field] of Object.entries(fields)
    ) {
      normalized[fieldName] =
        this.normalizeField(
          fieldName,
          field
        );
    }

    return normalized;
  }

  normalizeFieldMap(fields) {
    const normalized = new Map();

    for (
      const [fieldName, field] of fields
    ) {
      normalized.set(
        fieldName,
        this.normalizeField(
          fieldName,
          field
        )
      );
    }

    return normalized;
  }

  normalizeField(fieldName, field) {
    if (!field || typeof field !== 'object') {
      throw new TypeError(
        `Invalid metadata for field "${fieldName}".`
      );
    }

    const type =
      typeof field.type === 'string'
        ? field.type.trim()
        : '';

    if (!type) {
      throw new TypeError(
        `Field "${fieldName}" is missing its type metadata.`
      );
    }

    return {
      ...field,
      name:
        field.name ||
        fieldName,
      type,
      nullable:
        field.nullable === true,
      isList:
        field.isList === true,
    };
  }

  normalizeEnums(enums) {
    if (
      !enums ||
      typeof enums !== 'object' ||
      Array.isArray(enums)
    ) {
      throw new TypeError(
        'MetadataBuilder enums must be an object or Map.'
      );
    }

    if (enums instanceof Map) {
      const normalized = new Map();

      for (
        const [enumName, values] of enums
      ) {
        normalized.set(
          enumName,
          this.normalizeEnum(
            enumName,
            values
          )
        );
      }

      return normalized;
    }

    const normalized = {};

    for (
      const [enumName, values] of Object.entries(enums)
    ) {
      normalized[enumName] =
        this.normalizeEnum(
          enumName,
          values
        );
    }

    return normalized;
  }

  normalizeEnum(enumName, values) {
    if (
      !Array.isArray(values)
    ) {
      throw new TypeError(
        `Enum "${enumName}" must define an array of values.`
      );
    }

    return [...values];
  }
}

export default MetadataBuilder;
