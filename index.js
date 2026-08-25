import TypeCaster from './core/TypeCaster.js';
import TypeRegistry from './core/TypeRegistry.js';
import SchemaReader from './core/SchemaReader.js';
import ModelRegistry from './core/ModelRegistry.js';
import MetadataBuilder from './core/MetadataBuilder.js';
import OverrideRegistry from './overrides/OverrideRegistry.js';
import Validator from './overrides/Validator.js';
import PostgreSQLProvider from './providers/PostgreSQL.js';

import StringType from './types/String.js';
import IntType from './types/Int.js';
import BigIntType from './types/BigInt.js';
import FloatType from './types/Float.js';
import DecimalType from './types/Decimal.js';
import BooleanType from './types/Boolean.js';
import DateTimeType from './types/DateTime.js';
import JsonType from './types/Json.js';
import BytesType from './types/Bytes.js';
import EnumType from './types/Enum.js';
import UnsupportedType from './types/Unsupported.js';

const types = {
    String: StringType,
    Int: IntType,
    BigInt: BigIntType,
    Float: FloatType,
    Decimal: DecimalType,
    Boolean: BooleanType,
    DateTime: DateTimeType,
    Json: JsonType,
    Bytes: BytesType,
    Enum: EnumType,
    Unsupported: UnsupportedType
};

function createTypeRegistry() {
    const registry = new TypeRegistry();

    for (const [name, definition] of Object.entries(types)) {
        registry.register(name, definition);
    }

    return registry;
}

function createTypeCaster(
    modelRegistry = null,
    overrideRegistry = null
) {
    const typeRegistry = createTypeRegistry();

    const metadataBuilder = new MetadataBuilder(
        typeRegistry,
        modelRegistry
    );

    const typeCaster = new TypeCaster(
        typeRegistry,
        modelRegistry,
        overrideRegistry
    );

    typeCaster.metadataBuilder = metadataBuilder;

    return typeCaster;
}

export {
    TypeCaster,
    TypeRegistry,
    SchemaReader,
    ModelRegistry,
    MetadataBuilder,
    OverrideRegistry,
    Validator,
    PostgreSQLProvider,
    types,
    createTypeRegistry,
    createTypeCaster
};
