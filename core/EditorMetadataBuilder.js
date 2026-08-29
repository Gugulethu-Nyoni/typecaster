class EditorMetadataBuilder {

  constructor(options = {}) {
    this.modelRegistry =
      options.modelRegistry || null;

    /*
     * Frontend metadata is a bounded representation of the
     * relational graph.
     *
     * This prevents highly connected schemas from recursively
     * expanding forever while still exposing useful nested
     * editor metadata.
     */
    this.maxRelationDepth =
      Number.isInteger(options.maxRelationDepth) &&
      options.maxRelationDepth >= 0
        ? options.maxRelationDepth
        : 3;
  }

  /*
   * Build frontend editor metadata.
   *
   * Contract:
   *
   * {
   *   fields: {
   *     firstName: {
   *       editor: 'text',
   *       required: true,
   *       nullable: false
   *     }
   *   },
   *
   *   relations: {
   *     representatives: {
   *       type: 'ResidentRepresentative',
   *       isList: true,
   *       nullable: true,
   *       fields: {
   *         firstName: {
   *           editor: 'text',
   *           required: true,
   *           nullable: false
   *         }
   *       },
   *       relations: {}
   *     }
   *   }
   * }
   *
   * Relations are keyed by field name, not model name.
   * No "editor": "relation" — relations are structural, not editable.
   */
    build(
    model,
    record = {},
    recordId = null,
    visited = new Set(),
    depth = 0
  ) {
    if (!model || typeof model !== 'object') {
      throw new TypeError(
        'EditorMetadataBuilder.build() expects model metadata.'
      );
    }

    const modelName =
      model.name || '';

    const sourceRecord =
      record &&
      typeof record === 'object'
        ? record
        : {};

    /*
     * Prevent cyclic model traversal.
     */
    if (
      modelName &&
      visited.has(modelName)
    ) {
      return {
        fields: {}
      };
    }

    const currentVisited =
      new Set(visited);

    if (modelName) {
      currentVisited.add(modelName);
    }

    const fields = {};
    const relations = {};

    // ─── 1. SCALAR FIELDS ────────────────────────

    for (
      const [fieldName, field] of
      this.entries(model.fields)
    ) {
      if (!field || typeof field !== 'object') {
        continue;
      }

      // Skip relation fields — they're handled via model.relations
      if (field.isRelation === true) {
        continue;
      }

      // Identifiers are not frontend-editable
      if (this.isIdentifier(fieldName, field)) {
        continue;
      }

      // Prisma-managed fields are not frontend-editable
      if (this.isManagedField(fieldName, field)) {
        continue;
      }

      // Foreign-key scalar fields are implementation details
      if (this.isRelationScalarField(field)) {
        continue;
      }

      fields[fieldName] = this.buildField(field);
    }

    // ─── 2. RELATION FIELDS ──────────────────────

    const relationFields = model.relations || {};

    for (const [fieldName, relationMeta] of Object.entries(relationFields)) {
      const wasFetched = Object.prototype.hasOwnProperty.call(sourceRecord, fieldName);
      
      // Prevent infinite recursion
      if (depth >= this.maxRelationDepth) {
        relations[fieldName] = {
          type: relationMeta.type,
          isList: relationMeta.isList || false,
          nullable: relationMeta.nullable ?? true,
          fields: {},
          relations: {},
          _truncated: true,
        };
        continue;
      }

      const relatedModelName = relationMeta.type;

      // Prevent cycles
      if (currentVisited.has(relatedModelName)) {
        continue;
      }

      // ✅ Get the related model from registry
      let relatedModel;
      try {
        relatedModel = this.modelRegistry.get(relatedModelName);
      } catch {
        // If model not found, use empty metadata
        relations[fieldName] = {
          type: relatedModelName,
          isList: relationMeta.isList || false,
          nullable: relationMeta.nullable ?? true,
          fields: {},
          relations: {}
        };
        continue;
      }

      // ✅ Build metadata for related model (with or without data)
      const relatedRecord = wasFetched ? sourceRecord[fieldName] : null;
      
      const relatedMetadata = this.build(
        relatedModel,
        relatedRecord,
        recordId,
        currentVisited,
        depth + 1
      );

      relations[fieldName] = {
        type: relatedModelName,
        isList: relationMeta.isList || false,
        nullable: relationMeta.nullable ?? true,
        fields: relatedMetadata.fields || {},
        relations: relatedMetadata.relations || {}
      };
    }

    const metadata = {
      fields
    };

    if (Object.keys(relations).length > 0) {
      metadata.relations = relations;
    }

    return metadata;
  }

  

  /*
   * Resolve metadata for a relation that was actually fetched.
   *
   * For collection relations, the first returned object is enough
   * to discover the nested relation shape. The metadata describes
   * the model structure, not individual records.
   */
  buildFetchedRelation(
    modelName,
    relationRecord,
    recordId,
    visited,
    depth
  ) {
    if (!this.modelRegistry) {
      return null;
    }

    let model;

    try {
      model =
        this.modelRegistry.get(modelName);
    } catch {
      return null;
    }

    if (Array.isArray(relationRecord)) {
      const representativeRecord =
        relationRecord.length > 0
          ? relationRecord[0]
          : {};

      return this.build(
        model,
        representativeRecord,
        recordId,
        visited,
        depth
      );
    }

    if (
      relationRecord &&
      typeof relationRecord === 'object'
    ) {
      return this.build(
        model,
        relationRecord,
        recordId,
        visited,
        depth
      );
    }

    // Null relation: expose scalar metadata only, no deeper relations
    return this.build(
      model,
      {},
      recordId,
      visited,
      depth
    );
  }

  /*
   * Determine whether a scalar field is the foreign-key side of
   * a Prisma relation.
   */
  isRelationScalarField(field) {
    if (!field || typeof field !== 'object') {
      return false;
    }

    if (
      field.isForeignKey === true ||
      field.isRelationScalar === true ||
      field.isRelationField === true
    ) {
      return true;
    }

    const relationArguments =
      typeof field.arguments === 'string'
        ? field.arguments
        : '';

    if (
      relationArguments &&
      /(?:^|[,\s])fields\s*:\s*\[[^\]]*\]/.test(
        relationArguments
      ) &&
      /(?:^|[,\s])references\s*:\s*\[[^\]]*\]/.test(
        relationArguments
      )
    ) {
      return true;
    }

    const relation =
      field.relation ||
      field.relationInfo ||
      field.relationMetadata ||
      null;

    if (
      relation &&
      typeof relation === 'object'
    ) {
      if (
        relation.fields ||
        relation.references
      ) {
        return true;
      }
    }

    return false;
  }

  buildField(field) {
    const metadata = {
      editor: this.getEditor(field),
      required: field.required === true,
      nullable: field.nullable === true
    };

    // 🔥 NEW: Set inputType from attributes
    const inputType = this.getInputTypeFromAttributes(field);
    if (inputType) {
      metadata.inputType = inputType;
    }

    Object.assign(
      metadata,
      this.getEditorProperties(field)
    );

    return metadata;
  }

  getEditor(field) {
    if (
      field.enumValues ||
      field.type === 'Enum'
    ) {
      return 'select';
    }

    const editorAnnotation =
      this.getEditorAnnotation(field);

    if (editorAnnotation) {
      const [editorType] =
        editorAnnotation.split(/\s+/);

      if (
        editorType ===
        'predefined-key-values' ||
        editorType ===
        'custom-key-value'
      ) {
        return 'key-value';
      }
    }

    if (
      typeof field.editor === 'string' &&
      field.editor.trim()
    ) {
      return field.editor;
    }

    if (
      field.isList === true &&
      field.type === 'String'
    ) {
      return 'textarea';
    }

    switch (field.type) {
      case 'String':
        return 'text';
      case 'Int':
      case 'BigInt':
      case 'Float':
      case 'Decimal':
        return 'number';
      case 'Boolean':
        return 'checkbox';
      case 'Date':
        return 'date';
      case 'DateTime':
        return 'datetime-local';
      case 'Json':
        return 'textarea';
      case 'Bytes':
        return 'file';
      default:
        return 'text';
    }
  }

  getEditorProperties(field) {
    const props = {};

    if (field.enumValues) {
      props.options = [...field.enumValues];

      if (
        field.selected !== undefined &&
        field.selected !== null
      ) {
        props.selected = field.selected;
      }

      const selectedAttribute =
        Array.isArray(field.attributes)
          ? field.attributes.find(
              (attribute) =>
                attribute &&
                attribute.name === 'selected' &&
                typeof attribute.arguments === 'string' &&
                attribute.arguments.trim()
            )
          : null;

      if (selectedAttribute) {
        props.selected = selectedAttribute.arguments.trim();
      }
    }

    if (
      field.isList === true &&
      !field.enumValues
    ) {
      props.structure = {
        type: 'comma-separated-values',
        item: this.buildListItemMetadata(field)
      };
    }

    const editorAnnotation =
      this.getEditorAnnotation(field);

    if (editorAnnotation) {
      const [editorType, ...definition] =
        editorAnnotation.split(/\s+/);

      if (editorType === 'predefined-key-values') {
        props.structure = this.buildPredefinedKeyStructure(definition);
        return props;
      }

      if (editorType === 'custom-key-value') {
        props.structure = this.buildCustomKeyStructure(definition);
        return props;
      }
    }

    if (field.type === 'Json') {
      props.structure = this.buildJsonStructure(field);
    }

    this.addNumericProperties(props, field);

    if (field.maxLength !== undefined) {
      props.maxLength = field.maxLength;
    }

    if (field.minLength !== undefined) {
      props.minLength = field.minLength;
    }

    if (field.pattern !== undefined) {
      props.pattern = field.pattern;
    }

    return props;
  }

  buildListItemMetadata(field) {
    const item = {};

    switch (field.type) {
      case 'Int':
      case 'BigInt':
      case 'Float':
      case 'Decimal':
        item.editor = 'number';
        break;
      case 'Boolean':
        item.editor = 'checkbox';
        break;
      case 'Date':
        item.editor = 'date';
        break;
      case 'DateTime':
        item.editor = 'datetime-local';
        break;
      default:
        item.editor = 'text';
    }

    if (field.type === 'String') {
      item.required = true;
    }

    if (field.min !== undefined) {
      item.minimum = field.min;
    }

    if (field.max !== undefined) {
      item.maximum = field.max;
    }

    if (field.step !== undefined) {
      item.step = field.step;
    }

    return item;
  }

  getEditorAnnotation(field) {
    if (
      !field ||
      !Array.isArray(field.attributes)
    ) {
      return null;
    }

    const attribute =
      field.attributes.find(
        (item) =>
          item &&
          item.name === 'editor' &&
          typeof item.arguments === 'string' &&
          item.arguments.trim()
      );

    return attribute
      ? attribute.arguments.trim()
      : null;
  }

  // 🔥 NEW: Generic input type from attributes
  getInputTypeFromAttributes(field) {
    if (!field || !Array.isArray(field.attributes)) {
      return null;
    }

    const attribute = field.attributes.find(
      (item) =>
        item &&
        typeof item.name === 'string' &&
        typeof item.arguments === 'string' &&
        item.arguments.trim() === 'editor'
    );

    if (!attribute) {
      return null;
    }

    return attribute.name.trim() || null;
  }

  buildPredefinedKeyStructure(definition) {
    const fields = {};

    for (const token of definition) {
      const separator = token.indexOf(':');

      if (separator <= 0) {
        continue;
      }

      const key = token.slice(0, separator).trim();
      const editor = token.slice(separator + 1).trim();

      if (!key || !editor) {
        continue;
      }

      fields[key] = { editor };
    }

    return {
      type: 'predefined-key',
      fields
    };
  }

  buildCustomKeyStructure(definition) {
    const structure = {
      type: 'custom-key-value'
    };

    for (const token of definition) {
      const separator = token.indexOf(':');

      if (separator <= 0) {
        continue;
      }

      const key = token.slice(0, separator).trim();
      const editor = token.slice(separator + 1).trim();

      if (!key || !editor) {
        continue;
      }

      if (key === 'key' || key === 'value') {
        structure[key] = { editor };
      }
    }

    return structure;
  }

  buildJsonStructure(field) {
    if (field.jsonStructure) {
      return field.jsonStructure;
    }

    if (field.structure) {
      return field.structure;
    }

    return {
      type: 'json'
    };
  }

  addNumericProperties(props, field) {
    if (field.min !== undefined) {
      props.minimum = field.min;
    }

    if (field.max !== undefined) {
      props.maximum = field.max;
    }

    if (field.step !== undefined) {
      props.step = field.step;
    }

    return props;
  }

  isIdentifier(fieldName, field) {
    return (
      fieldName === 'id' ||
      field.identifier === true
    );
  }

  isManagedField(fieldName, field) {
    return (
      fieldName === 'createdAt' ||
      fieldName === 'updatedAt' ||
      field.updatedAt === true ||
      field.managed === true ||
      field.autoManaged === true
    );
  }

  entries(fields) {
    if (fields instanceof Map) {
      return fields.entries();
    }

    return Object.entries(fields || {});
  }
}

export default EditorMetadataBuilder;