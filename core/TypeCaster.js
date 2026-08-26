import path from 'node:path';
import { pathToFileURL } from 'node:url';

import SchemaReader from './SchemaReader.js';
import TypeRegistry from './TypeRegistry.js';
import ModelRegistry from './ModelRegistry.js';
import MetadataBuilder from './MetadataBuilder.js';

import StringCaster from '../types/String.js';
import IntCaster from '../types/Int.js';
import BigIntCaster from '../types/BigInt.js';
import FloatCaster from '../types/Float.js';
import DecimalCaster from '../types/Decimal.js';
import BooleanCaster from '../types/Boolean.js';
import DateTimeCaster from '../types/DateTime.js';
import JsonCaster from '../types/Json.js';
import BytesCaster from '../types/Bytes.js';
import EnumCaster from '../types/Enum.js';
import UnsupportedCaster from '../types/Unsupported.js';

class TypeCaster {

  static async fromRegistry(registryPath) {
    const resolvedPath = registryPath
      ? pathToFileURL(
          path.resolve(process.cwd(), registryPath)
        ).href
      : pathToFileURL(
          path.resolve(
            path.dirname(new URL(import.meta.url).pathname),
            '../lib/typecaster.registry.js'
          )
        ).href;

    const module = await import(resolvedPath);

    if (!module.default) {
      throw new Error(
        `TypeCaster registry "${registryPath || '../lib/typecaster.registry.js'}" does not export default metadata.`
      );
    }

    return new TypeCaster({
      metadata: module.default,
    });
  }

  constructor(options = {}) {
    this.schemaReader =
      options.schemaReader ||
      new SchemaReader({
        schemaPath: options.schemaPath,
      });

    this.metadataBuilder =
      options.metadataBuilder ||
      new MetadataBuilder();

    this.typeRegistry =
      options.typeRegistry ||
      new TypeRegistry();

    this.modelRegistry =
      options.modelRegistry ||
      new ModelRegistry();

    this.metadata = null;

    this.registerBuiltIns();

    if (options.metadata) {
      this.loadMetadata(
        options.metadata
      );
    } else if (options.schemaPath) {
      this.loadSchema(
        options.schemaPath
      );
    } else if (options.registry) {
      this.loadMetadata(
        options.registry
      );
    }
  }

  registerBuiltIns() {
    const builtIns = {
      String: StringCaster,
      Int: IntCaster,
      BigInt: BigIntCaster,
      Float: FloatCaster,
      Decimal: DecimalCaster,
      Boolean: BooleanCaster,
      DateTime: DateTimeCaster,
      Json: JsonCaster,
      Bytes: BytesCaster,
      Enum: EnumCaster,
      Unsupported: UnsupportedCaster,
    };

    for (
      const [typeName, caster] of
      Object.entries(builtIns)
    ) {
      if (this.typeRegistry.has(typeName)) {
        continue;
      }

      this.typeRegistry.register(
        typeName,
        caster
      );
    }
  }

  loadSchema(schemaPath) {
    const schema =
      this.schemaReader.read(
        schemaPath
      );

    return this.loadMetadata(
      schema
    );
  }

  loadMetadata(metadata) {
    this.metadata =
      this.metadataBuilder.build(
        metadata
      );

    this.modelRegistry.clear();

    this.modelRegistry.registerMany(
      this.metadata.models
    );

    return this.metadata;
  }

  getModel(modelName) {
    return this.modelRegistry.get(
      modelName
    );
  }

  getField(modelName, fieldName) {
    return this.modelRegistry.getField(
      modelName,
      fieldName
    );
  }

  getEnumValues(enumName) {
    if (!this.metadata) {
      throw new Error(
        'TypeCaster metadata has not been loaded.'
      );
    }

    const enums =
      this.metadata.enums || {};

    if (enums instanceof Map) {
      const values =
        enums.get(enumName);

      if (!values) {
        throw new Error(
          `Unknown TypeCaster enum: "${enumName}".`
        );
      }

      return values;
    }

    const values =
      enums[enumName];

    if (!values) {
      throw new Error(
        `Unknown TypeCaster enum: "${enumName}".`
      );
    }

    return values;
  }

  isRelation(field) {
    return (
      this.modelRegistry.has(
        field.type
      ) &&
      field.isList !== undefined
    );
  }

  isEnum(field) {
    if (!this.metadata) {
      return false;
    }

    const enums =
      this.metadata.enums || {};

    if (enums instanceof Map) {
      return enums.has(
        field.type
      );
    }

    return Object.prototype.hasOwnProperty.call(
      enums,
      field.type
    );
  }

  resolveCaster(field) {
    if (this.isRelation(field)) {
      return null;
    }

    if (this.isEnum(field)) {
      return this.typeRegistry.resolve(
        'Enum'
      );
    }

    return this.typeRegistry.resolve(
      field.type
    );
  }

  getFieldContext(
    modelName,
    field,
    direction,
    data
  ) {
    return {
      model: modelName,
      field: field.name,
      type: field.type,
      direction,
      data,
      metadata: field,
    };
  }

  castValue(
    value,
    field,
    modelName,
    direction
  ) {
    if (
      value === null ||
      value === undefined
    ) {
      if (
        value === null &&
        field.nullable !== true
      ) {
        throw new TypeError(
          `"${modelName}.${field.name}" ` +
          'does not allow null.'
        );
      }

      return value;
    }

    const caster =
      this.resolveCaster(field);

    if (!caster) {
      return undefined;
    }

    const context =
      this.getFieldContext(
        modelName,
        field,
        direction,
        null
      );

    if (field.isList) {
      if (!Array.isArray(value)) {
        throw new TypeError(
          `"${modelName}.${field.name}" ` +
          'expects a list value.'
        );
      }

      return value.map(
        (item) =>
          direction === 'formToDb'
            ? caster.formToDb(
                item,
                {
                  ...field,
                  ...(this.isEnum(field)
                    ? {
                        values:
                          this.getEnumValues(
                            field.type
                          ),
                      }
                    : {}),
                },
                context
              )
            : caster.dbToForm(
                item,
                {
                  ...field,
                  ...(this.isEnum(field)
                    ? {
                        values:
                          this.getEnumValues(
                            field.type
                          ),
                      }
                    : {}),
                },
                context
              )
      );
    }

    const metadata = {
      ...field,
      ...(this.isEnum(field)
        ? {
            values:
              this.getEnumValues(
                field.type
              ),
          }
        : {}),
    };

    if (direction === 'formToDb') {
      return caster.formToDb(
        value,
        metadata,
        context
      );
    }

    return caster.dbToForm(
      value,
      metadata,
      context
    );
  }

  assertValue(
    value,
    field,
    modelName
  ) {
    if (
      value === undefined
    ) {
      return true;
    }

    if (
      value === null &&
      field.nullable !== true
    ) {
      throw new TypeError(
        `"${modelName}.${field.name}" ` +
        'does not allow null.'
      );
    }

    if (
      value === null
    ) {
      return true;
    }

    const caster =
      this.resolveCaster(field);

    if (!caster) {
      return true;
    }

    const metadata = {
      ...field,
      ...(this.isEnum(field)
        ? {
            values:
              this.getEnumValues(
                field.type
              ),
          }
        : {}),
    };

    if (field.isList) {
      if (!Array.isArray(value)) {
        throw new TypeError(
          `"${modelName}.${field.name}" ` +
          'expects a list value.'
        );
      }

      for (
        const item of value
      ) {
        caster.assert(
          item,
          metadata
        );
      }

      return true;
    }

    caster.assert(
      value,
      metadata
    );

    return true;
  }

  formToDbModel(
    data,
    modelName,
    options = {}
  ) {
    if (
      !data ||
      typeof data !== 'object' ||
      Array.isArray(data)
    ) {
      throw new TypeError(
        'TypeCaster.formToDbModel() expects an object.'
      );
    }

    const model =
      this.getModel(
        modelName
      );

    const result = {};

    for (
      const [fieldName, field] of
      model.fields
    ) {
      if (
        !Object.prototype.hasOwnProperty.call(
          data,
          fieldName
        )
      ) {
        continue;
      }

      const value =
        data[fieldName];

      result[fieldName] =
        this.castValue(
          value,
          field,
          modelName,
          'formToDb'
        );
    }

    if (
      options.includeUnknown === true
    ) {
      for (
        const [key, value] of
        Object.entries(data)
      ) {
        if (
          !model.fields.has(key)
        ) {
          result[key] = value;
        }
      }
    }

    return result;
  }

  dbToFormModel(
    data,
    modelName
  ) {
    if (
      !data ||
      typeof data !== 'object' ||
      Array.isArray(data)
    ) {
      throw new TypeError(
        'TypeCaster.dbToFormModel() expects an object.'
      );
    }

    const model =
      this.getModel(
        modelName
      );

    const result = {};

    for (
      const [fieldName, field] of
      model.fields
    ) {
      if (
        !Object.prototype.hasOwnProperty.call(
          data,
          fieldName
        )
      ) {
        continue;
      }

      const value =
        data[fieldName];

      const converted =
        this.castValue(
          value,
          field,
          modelName,
          'dbToForm'
        );

      if (converted !== undefined) {
        result[fieldName] =
          converted;
      }
    }

    return result;
  }

  assert(
    data,
    modelName,
    options = {}
  ) {
    if (
      !data ||
      typeof data !== 'object' ||
      Array.isArray(data)
    ) {
      throw new TypeError(
        'TypeCaster.assert() expects an object.'
      );
    }

    const model =
      this.getModel(
        modelName
      );

    for (
      const [fieldName, field] of
      model.fields
    ) {
      if (
        !Object.prototype.hasOwnProperty.call(
          data,
          fieldName
        )
      ) {
        continue;
      }

      this.assertValue(
        data[fieldName],
        field,
        modelName
      );
    }

    if (
      options.rejectUnknown === true
    ) {
      for (
        const fieldName of
        Object.keys(data)
      ) {
        if (
          !model.fields.has(fieldName)
        ) {
          throw new Error(
            `Unknown field "${modelName}.${fieldName}".`
          );
        }
      }
    }

    return true;
  }
}

export default TypeCaster;
