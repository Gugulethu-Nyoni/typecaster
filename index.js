const TypeCaster = require('./core/TypeCaster');
const TypeRegistry = require('./core/TypeRegistry');
const SchemaReader = require('./core/SchemaReader');
const ModelRegistry = require('./core/ModelRegistry');
const MetadataBuilder = require('./core/MetadataBuilder');

const OverrideRegistry = require('./overrides/OverrideRegistry');
const Validator = require('./overrides/Validator');

const PostgreSQLProvider = require('./providers/PostgreSQL');

const StringType = require('./types/String');
const IntType = require('./types/Int');
const BigIntType = require('./types/BigInt');
const FloatType = require('./types/Float');
const DecimalType = require('./types/Decimal');
const BooleanType = require('./types/Boolean');
const DateTimeType = require('./types/DateTime');
const JsonType = require('./types/Json');
const BytesType = require('./types/Bytes');
const EnumType = require('./types/Enum');
const UnsupportedType = require('./types/Unsupported');

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

function createTypeCaster() {
    return new TypeCaster(createTypeRegistry());
}

module.exports = {
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
