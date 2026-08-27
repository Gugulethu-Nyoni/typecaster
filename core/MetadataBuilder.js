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

    const enums = this.normalizeEnums(
      schema.enums || {}
    );

    const models = this.normalizeModels(
      schema.models || {},
      enums
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

  normalizeModels(models, enums = {}) {
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
        models,
        enums
      );
    }

    const normalized = {};

    for (
      const [modelName, model] of Object.entries(models)
    ) {
      normalized[modelName] =
        this.normalizeModel(
          modelName,
          model,
          enums
        );
    }

    return normalized;
  }

  normalizeModelMap(models, enums = {}) {
    const normalized = new Map();

    for (
      const [modelName, model] of models
    ) {
      normalized.set(
        modelName,
        this.normalizeModel(
          modelName,
          model,
          enums
        )
      );
    }

    return normalized;
  }

  normalizeModel(modelName, model, enums = {}) {
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

    const normalizedFields =
      this.normalizeFields(
        fields,
        enums
      );

    /*
     * Relation scalar fields are the scalar FK fields that
     * back Prisma relation fields.
     *
     * Example:
     *
     *   organizationId Int
     *   organization   Organization @relation(
     *     fields: [organizationId],
     *     references: [id]
     *   )
     *
     * The registry stores the relation descriptor on
     * "organization", not on "organizationId".
     *
     * Mark the scalar field here so downstream consumers,
     * such as EditorMetadataBuilder, can distinguish:
     *
     *   relation field
     *   relation scalar / foreign key
     *   ordinary scalar field
     *
     * This is metadata normalisation, not editor-specific
     * filtering.
     */
    this.markRelationScalarFields(
      normalizedFields
    );

    return {
      ...model,
      name:
        model.name ||
        modelName,
      fields:
        normalizedFields,
    };
  }

  markRelationScalarFields(fields) {

    const entries =
      fields instanceof Map
        ? [...fields.entries()]
        : Object.entries(fields);

    for (
      const [, field] of entries
    ) {

      if (
        !field ||
        typeof field !== 'object' ||
        field.isRelation !== true
      ) {
        continue;
      }

      const relationAttributes =
        Array.isArray(field.attributes)
          ? field.attributes
          : [];

      for (
        const attribute of relationAttributes
      ) {

        if (
          !attribute ||
          attribute.name !== 'relation' ||
          typeof attribute.arguments !== 'string'
        ) {
          continue;
        }

        const match =
          attribute.arguments.match(
            /fields\s*:\s*\[([^\]]*)\]/
          );

        if (!match) {
          continue;
        }

        const relationScalarNames =
          match[1]
            .split(',')
            .map(
              name =>
                name
                  .trim()
                  .replace(/^["']|["']$/g, '')
            )
            .filter(Boolean);

        for (
          const scalarFieldName of
          relationScalarNames
        ) {

          if (
            fields instanceof Map
          ) {

            const scalarField =
              fields.get(
                scalarFieldName
              );

            if (
              scalarField &&
              typeof scalarField === 'object'
            ) {
              fields.set(
                scalarFieldName,
                {
                  ...scalarField,
                  isRelationScalar: true,
                }
              );
            }

          } else if (
            fields[scalarFieldName] &&
            typeof fields[scalarFieldName] === 'object'
          ) {

            fields[scalarFieldName] = {
              ...fields[scalarFieldName],
              isRelationScalar: true,
            };

          }
        }
      }
    }

    return fields;
  }

  normalizeFields(fields, enums = {}) {
    if (fields instanceof Map) {
      return this.normalizeFieldMap(
        fields,
        enums
      );
    }

    const normalized = {};

    for (
      const [fieldName, field] of Object.entries(fields)
    ) {
      normalized[fieldName] =
        this.normalizeField(
          fieldName,
          field,
          enums
        );
    }

    return normalized;
  }

  normalizeFieldMap(fields, enums = {}) {
    const normalized = new Map();

    for (
      const [fieldName, field] of fields
    ) {
      normalized.set(
        fieldName,
        this.normalizeField(
          fieldName,
          field,
          enums
        )
      );
    }

    return normalized;
  }

  normalizeField(fieldName, field, enums = {}) {
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

    const normalized = {
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

    if (
      Object.prototype.hasOwnProperty.call(
        enums,
        type
      )
    ) {
      normalized.enumValues = [
        ...enums[type]
      ];
    }

    return normalized;
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
