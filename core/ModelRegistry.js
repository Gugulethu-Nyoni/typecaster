class ModelRegistry {
  constructor(options = {}) {
    this.models = new Map();

    if (options.models) {
      this.registerMany(options.models);
    }
  }

  normalizeName(name, label = 'Model') {
    if (typeof name !== 'string') {
      throw new TypeError(
        `${label} name must be a non-empty string.`
      );
    }

    const normalized = name.trim();

    if (!normalized) {
      throw new TypeError(
        `${label} name must be a non-empty string.`
      );
    }

    return normalized;
  }

  validateModel(modelName, model) {
    if (!model || typeof model !== 'object') {
      throw new TypeError(
        `Invalid model metadata for "${modelName}".`
      );
    }

    if (
      model.fields !== undefined &&
      (
        !model.fields ||
        typeof model.fields !== 'object' ||
        Array.isArray(model.fields)
      )
    ) {
      throw new TypeError(
        `Invalid fields metadata for model "${modelName}".`
      );
    }
  }

  normalizeModel(modelName, model) {
    this.validateModel(
      modelName,
      model
    );

    const fields = model.fields || {};

    return {
      ...model,
      name: model.name || modelName,
      fields: new Map(
        Object.entries(fields).map(
          ([fieldName, metadata]) => {
            const normalizedFieldName =
              this.normalizeName(
                fieldName,
                'Field'
              );

            if (
              !metadata ||
              typeof metadata !== 'object' ||
              Array.isArray(metadata)
            ) {
              throw new TypeError(
                `Invalid metadata for field ` +
                `"${modelName}.${normalizedFieldName}".`
              );
            }

            return [
              normalizedFieldName,
              {
                ...metadata,
                name:
                  metadata.name ||
                  normalizedFieldName,
              },
            ];
          }
        )
      ),
    };
  }

  register(modelName, model, options = {}) {
    const normalizedModelName =
      this.normalizeName(
        modelName
      );

    const normalizedModel =
      this.normalizeModel(
        normalizedModelName,
        model
      );

    const replace =
      options.replace === true;

    if (
      this.models.has(normalizedModelName) &&
      !replace
    ) {
      throw new Error(
        `Model "${normalizedModelName}" is already registered.`
      );
    }

    this.models.set(
      normalizedModelName,
      normalizedModel
    );

    return this;
  }

  registerMany(models, options = {}) {
    if (!models) {
      return this;
    }

    if (models instanceof Map) {
      for (
        const [modelName, model] of models
      ) {
        this.register(
          modelName,
          model,
          options
        );
      }

      return this;
    }

    if (
      typeof models !== 'object' ||
      Array.isArray(models)
    ) {
      throw new TypeError(
        'ModelRegistry.registerMany() expects an object or Map.'
      );
    }

    for (
      const [modelName, model] of Object.entries(models)
    ) {
      this.register(
        modelName,
        model,
        options
      );
    }

    return this;
  }

  has(modelName) {
    const normalizedModelName =
      this.normalizeName(
        modelName
      );

    return this.models.has(
      normalizedModelName
    );
  }

  get(modelName) {
    const normalizedModelName =
      this.normalizeName(
        modelName
      );

    const model =
      this.models.get(
        normalizedModelName
      );

    if (!model) {
      throw new Error(
        `Unknown TypeCaster model: "${normalizedModelName}".`
      );
    }

    return model;
  }

  getField(modelName, fieldName) {
    const model =
      this.get(modelName);

    const normalizedFieldName =
      this.normalizeName(
        fieldName,
        'Field'
      );

    const field =
      model.fields.get(
        normalizedFieldName
      );

    if (!field) {
      throw new Error(
        `Unknown TypeCaster field: ` +
        `"${model.name}.${normalizedFieldName}".`
      );
    }

    return field;
  }

  hasField(modelName, fieldName) {
    const model =
      this.get(modelName);

    const normalizedFieldName =
      this.normalizeName(
        fieldName,
        'Field'
      );

    return model.fields.has(
      normalizedFieldName
    );
  }

  getFields(modelName) {
    const model =
      this.get(modelName);

    return model.fields;
  }

  assertKnown(modelName) {
    this.get(modelName);

    return true;
  }

  assertField(modelName, fieldName) {
    this.getField(
      modelName,
      fieldName
    );

    return true;
  }

  clear() {
    this.models.clear();

    return this;
  }
}

export default ModelRegistry;
