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
   *   Resident: {
   *     fields: {
   *       firstName: {
   *         editor: 'text',
   *         required: true,
   *         nullable: false
   *       }
   *     },
   *
   *     relations: {
   *       CarePlan: {
   *         fields: {
   *           name: {
   *             editor: 'text',
   *             required: true,
   *             nullable: false
   *           }
   *         },
   *
   *         relations: {
   *           CarePlanGoal: {
   *             fields: {
   *               title: {
   *                 editor: 'text',
   *                 required: true,
   *                 nullable: false
   *               }
   *             }
   *           }
   *         }
   *       }
   *     }
   *   }
   * }
   *
   * Backend relation implementation details are deliberately
   * excluded from the frontend contract.
   */

  /*
   * Build frontend editor metadata from the ACTUAL fetched record.
   *
   * The fetched record determines which relations exist.
   *
   * ModelRegistry is used only to resolve metadata for relations
   * that are actually present in the fetched data.
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

    for (
      const [fieldName, field] of
      this.entries(model.fields)
    ) {
      if (!field || typeof field !== 'object') {
        continue;
      }

      /*
       * RELATION HANDLING
       *
       * A relation is included ONLY if the relation property
       * actually exists on the fetched record.
       *
       * This is the critical distinction:
       *
       * ModelRegistry tells us what a relation IS.
       * The fetched record tells us whether it was FETCHED.
       */
      if (field.isRelation === true) {
        if (
          depth >=
          this.maxRelationDepth
        ) {
          continue;
        }

        /*
         * Do not expose relations merely because Prisma defines
         * them on the model.
         */
        if (
          !Object.prototype.hasOwnProperty.call(
            sourceRecord,
            fieldName
          )
        ) {
          continue;
        }

        const relatedModelName =
          this.getRelatedModelName(field);

        if (!relatedModelName) {
          continue;
        }

        /*
         * Prevent cycles such as:
         *
         * Resident
         *   -> Organization
         *      -> Resident
         */
        if (
          currentVisited.has(
            relatedModelName
          )
        ) {
          continue;
        }

        const relatedRecord =
          sourceRecord[fieldName];

        const relatedMetadata =
          this.buildFetchedRelation(
            relatedModelName,
            relatedRecord,
            recordId,
            currentVisited,
            depth + 1
          );

        if (relatedMetadata) {
          relations[relatedModelName] =
            relatedMetadata;
        }

        continue;
      }

      /*
       * Identifiers are not frontend-editable.
       */
      if (
        this.isIdentifier(
          fieldName,
          field
        )
      ) {
        continue;
      }

      /*
       * Prisma-managed fields are not frontend-editable.
       */
      if (
        this.isManagedField(
          fieldName,
          field
        )
      ) {
        continue;
      }

      /*
       * Foreign-key scalar fields are implementation details of
       * Prisma relations and are not independent frontend editors.
       *
       * Examples:
       *
       *   organizationId
       *   residentId
       *   createdById
       *   updatedById
       *   currentVersionId
       *
       * The relation itself is represented through metadata.relations
       * when that relation was actually included in the fetched record.
       */
      if (
        this.isRelationScalarField(field)
      ) {
        continue;
      }

      fields[fieldName] =
        this.buildField(field);
    }

    const metadata = {
      fields
    };

    if (
      Object.keys(relations).length > 0
    ) {
      metadata.relations =
        relations;
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

    /*
     * Null relation:
     *
     * The relation itself was fetched, so expose its scalar
     * editor metadata, but there is no nested fetched object
     * from which to discover deeper relations.
     */
    return this.build(
      model,
      {},
      recordId,
      visited,
      depth
    );
  }

  getRelatedModelName(field) {

    return (
      field.modelName ||
      field.relatedModel ||
      field.targetModel ||
      field.type ||
      null
    );
  }

  /*
   * Determine whether a scalar field is the foreign-key side of
   * a Prisma relation.
   *
   * TypeCaster metadata may expose Prisma relation arguments in
   * several representations. We intentionally inspect only the
   * relation metadata already present on the field.
   */
  isRelationScalarField(field) {
    if (!field || typeof field !== 'object') {
      return false;
    }

    /*
     * Explicit metadata flags take precedence when available.
     */
    if (
      field.isForeignKey === true ||
      field.isRelationScalar === true ||
      field.isRelationField === true
    ) {
      return true;
    }

    /*
     * Some registry representations preserve Prisma's
     * @relation(...) arguments as a string.
     *
     * Example:
     *
     *   fields: [organizationId], references: [id]
     */
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

    /*
     * Also support structured relation arguments should the
     * registry expose them as objects in future.
     */
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
      editor:
        this.getEditor(field),

      required:
        field.required === true,

      nullable:
        field.nullable === true
    };

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

    /*
     * Semantq schema editor annotation.
     *
     * Example:
     *
     * contactData Json?
     *   /// @editor predefined-key-values email:text mobile:text url:url
     *
     * The annotation describes the frontend editor rather
     * than changing the underlying Prisma field type.
     */
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

    /*
     * Explicit frontend editor override.
     */
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

    /*
     * Enum options.
     */
    if (field.enumValues) {

      props.options =
        [...field.enumValues];

      if (
        field.selected !== undefined &&
        field.selected !== null
      ) {
        props.selected =
          field.selected;
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
        props.selected =
          selectedAttribute.arguments.trim();
      }
    }

    /*
     * Scalar lists.
     */
    if (
      field.isList === true &&
      !field.enumValues
    ) {

      props.structure = {
        type:
          'comma-separated-values',

        item:
          this.buildListItemMetadata(
            field
          )
      };
    }

    /*
     * Semantq schema editor annotation.
     */
    const editorAnnotation =
      this.getEditorAnnotation(field);

    if (editorAnnotation) {
      const [editorType, ...definition] =
        editorAnnotation.split(/\s+/);

      if (
        editorType ===
        'predefined-key-values'
      ) {
        props.structure =
          this.buildPredefinedKeyStructure(
            definition
          );

        return props;
      }

      if (
        editorType ===
        'custom-key-value'
      ) {
        props.structure =
          this.buildCustomKeyStructure(
            definition
          );

        return props;
      }
    }

    /*
     * JSON.
     */
    if (field.type === 'Json') {

      props.structure =
        this.buildJsonStructure(
          field
        );
    }

    /*
     * Numeric constraints.
     *
     * Frontend contract uses minimum/maximum.
     */
    this.addNumericProperties(
      props,
      field
    );

    /*
     * Text constraints.
     */
    if (
      field.maxLength !== undefined
    ) {
      props.maxLength =
        field.maxLength;
    }

    if (
      field.minLength !== undefined
    ) {
      props.minLength =
        field.minLength;
    }

    if (
      field.pattern !== undefined
    ) {
      props.pattern =
        field.pattern;
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

  buildPredefinedKeyStructure(definition) {

    const fields = {};

    for (const token of definition) {
      const separator = token.indexOf(':');

      if (separator <= 0) {
        continue;
      }

      const key =
        token.slice(0, separator).trim();

      const editor =
        token.slice(separator + 1).trim();

      if (!key || !editor) {
        continue;
      }

      fields[key] = {
        editor
      };
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

      const separator =
        token.indexOf(':');

      if (separator <= 0) {
        continue;
      }

      const key =
        token.slice(0, separator).trim();

      const editor =
        token.slice(separator + 1).trim();

      if (!key || !editor) {
        continue;
      }

      if (
        key === 'key' ||
        key === 'value'
      ) {
        structure[key] = {
          editor
        };
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

  addNumericProperties(
    props,
    field
  ) {

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

  isIdentifier(
    fieldName,
    field
  ) {

    return (
      fieldName === 'id' ||
      field.identifier === true
    );
  }

  isManagedField(
    fieldName,
    field
  ) {

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

    return Object.entries(
      fields || {}
    );
  }
}

export default EditorMetadataBuilder;
