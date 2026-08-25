# @semantq/typecaster

`@semantq/typecaster` is the schema-aware type system primitive for Semantq QL.

Its purpose is deliberately narrow:

> **Convert external values into schema-compatible typed values, convert database values for application use, and verify that prepared data still conforms to the schema before persistence.**

TypeCaster does **not** contain business rules.



## Architecture

The fundamental Semantq QL service flow is:

```text
REQUEST
   │
   ▼
typeCaster.formToDbModel()
   │
   ▼
TYPED / STRUCTURALLY VALID DATA
   │
   ▼
BUSINESS LOGIC
   │
   ├── rules
   ├── validations
   └── transformations
   │
   ▼
PREPARED DATA
   │
   ▼
typeCaster.assert()
   │
   ▼
DATABASE
````

For reads:

```text
DATABASE
   │
   ▼
typeCaster.dbToFormModel()
   │
   ▼
FORM / API DATA
```

The principle is:

> **Cast on entry. Apply business logic to typed data. Assert before persistence.**



## Why TypeCaster exists

HTTP requests, forms and other external sources commonly deliver values in representations that do not match the database schema.

For example:

```js
{
  age: "25",
  active: "true"
}
```

while the model expects:

```text
age    → Int
active → Boolean
```

TypeCaster establishes the typed boundary:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Resident'
);
```

After this operation, the service works with schema-compatible values:

```js
data.age;    // 25
data.active; // true
```

The service can then perform business logic without continually dealing with raw request representations.



# TypeCaster is not a business-rule engine

TypeCaster knows:

```text
String
Int
BigInt
Float
Decimal
Boolean
DateTime
Json
Bytes
Enum
```

TypeCaster does not know:

```text
Person
age must be <= 25
YOUTHs  have special rules
```

Those are application/business concerns.

For example:

```js
async create(req) {
  const data = typeCaster.formToDbModel(
    req.body,
    'Resident'
  );

  if (data.age > 25) {
    throw new Error(
      'Resident age cannot exceed 25.'
    );
  }

  typeCaster.assert(
    data,
    'Resident'
  );

  const res = await ResidentModel.create(
    data
  );

  return typeCaster.dbToFormModel(
    res,
    'Resident'
  );
}
```

TypeCaster establishes that `age` is an `Int`.

The service decides whether `26` is a valid Resident age.



# `formToDbModel()`

Use this at the boundary where external data enters the service.

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Resident'
);
```

It:

* resolves the model schema
* resolves each field type
* casts compatible input values
* rejects invalid values
* enforces structural/nullability constraints
* returns database-compatible typed data

Example:

```text
"25"       → 25
"true"     → true
"12.50"    → Decimal representation
"2026-08-25T08:00:00Z" → Date
```

It does not execute business rules.



# Business logic belongs after casting

Once TypeCaster has finished, the service has a reliable structural type boundary.

This is where application logic belongs:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Resident'
);

// Business logic.

if (data.age > 25) {
  throw new Error(
    'Resident age cannot exceed 25.'
  );
}
```

The business layer can safely access typed fields:

```js
data.age
data.status
data.admissionDate
data.metadata
```

without first repeating primitive type checks.



# `assert()`

`assert()` verifies that prepared data still conforms to the model's persistence contract.

```js
typeCaster.assert(
  data,
  'Resident'
);
```

It does **not** cast.

It does **not** repair values.

It does **not** execute business validation.

Consider:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Resident'
);

// Business transformation accidentally breaks the schema.
data.age = 'not-an-int';

typeCaster.assert(
  data,
  'Resident'
);
```

`assert()` rejects the prepared value.

This protects the persistence boundary.

The important distinction is:

```text
formToDbModel()
    = construct typed data

assert()
    = verify existing prepared data
```



# `dbToFormModel()`

Use this when returning database data to the application/API:

```js
const resident =
  await ResidentModel.findById(id);

return typeCaster.dbToFormModel(
  resident,
  'Resident'
);
```

It performs the reverse representation conversion needed by the application's form/API layer.



# A complete service example

A generated Semantq QL service should follow this pattern:

```js
async create(req) {
  const data = typeCaster.formToDbModel(
    req.body,
    'Resident'
  );

  // =========================================================
  // BUSINESS LOGIC
  // =========================================================

  // BASIC MUTATION
  // data.someIntField = data.someIntField + 1;
  // data.someStringField = data.someStringField.trim();

  // EXTENDED BUSINESS LOGIC
  // if (data.someStatusField === 'DISCHARGED' && !data.someDateField) {
  //   throw new Error(
  //     'A date is required when status is DISCHARGED.'
  //   );
  // }
  //
  // if (data.someIntField > 25) {
  //   throw new Error(
  //     'Value cannot exceed 25.'
  //   );
  // }

  typeCaster.assert(
    data,
    'Resident'
  );

  const res = await ResidentModel.create(
    data
  );

  return typeCaster.dbToFormModel(
    res,
    'Resident'
  );
}
```

The developer normally only needs to add or change the business logic section.



# Type handlers

TypeCaster currently supports:

| Type          | Purpose                                |
| - | -- |
| `String`      | String values                          |
| `Int`         | 32-bit integer values                  |
| `BigInt`      | Arbitrary-size integer values          |
| `Float`       | Floating-point values                  |
| `Decimal`     | Precision-sensitive decimal values     |
| `Boolean`     | Boolean values                         |
| `DateTime`    | Date/time values                       |
| `Json`        | JSON-compatible values                 |
| `Bytes`       | Binary values                          |
| `Enum`        | Schema-defined enum values             |
| `Unsupported` | Explicit failure for unsupported types |

Each type exposes the same primitive contract:

```js
formToDb(value, metadata)
dbToForm(value, metadata)
assert(value, metadata)
```

The registry resolves the correct handler from schema metadata.



# Structural validation versus business validation

These are deliberately separate.

### TypeCaster

```text
Is age an Int?
Is status a valid enum member?
Can this value be represented as DateTime?
Is this required field null?
```

### Service/business layer

```text
Can a Resident be older than 25?
Can a DISCHARGED record be edited?
Is a discharge date required?
Does this Resident belong to the current organisation?
```

TypeCaster should never contain application-specific business rules.



# Schema contract protection

The normal write path is:

```text
external data
    ↓
formToDbModel()
    ↓
typed data
    ↓
business logic
    ↓
assert()
    ↓
database
```

This gives the service two important guarantees:

1. Business logic starts with structurally typed data.
2. Business logic cannot silently break the persistence schema without being detected at the boundary.



# Current package structure

```text
typecaster/
├── package.json
├── README.md
├── index.js
├── cli/
│   └── typecaster.js
├── core/
│   ├── TypeCaster.js
│   ├── TypeRegistry.js
│   ├── SchemaReader.js
│   ├── ModelRegistry.js
│   └── MetadataBuilder.js
├── types/
│   ├── String.js
│   ├── Int.js
│   ├── BigInt.js
│   ├── Float.js
│   ├── Decimal.js
│   ├── Boolean.js
│   ├── DateTime.js
│   ├── Json.js
│   ├── Bytes.js
│   ├── Enum.js
│   └── Unsupported.js
└── providers/
    └── PostgreSQL.js
```

The package currently lives inside the Semantq QL project while the architecture is being finalised. It can later be moved to:

```text
packages/@semantq/typecaster/
```

without changing the underlying architectural contract.



# CLI

The current CLI is intentionally small.

Inspect schema metadata:

```bash
typecaster inspect ./prisma/schema.prisma
```

Validate/load a schema:

```bash
typecaster validate ./prisma/schema.prisma
```

The CLI is not yet responsible for intelligent service generation.

That will be addressed later through MCSR when Prisma-aware model-field generation is introduced.



# Design principle

TypeCaster follows one core principle:

> **TypeCaster knows what data is. The service decides what the data means.**

That keeps the primitive reusable, predictable and small while allowing Semantq QL services to express rich business logic without hiding it inside the type system.
EOF

node -e "const fs = require('fs'); const text = fs.readFileSync('typecaster/README.md', 'utf8'); if (!text.trim()) throw new Error('README is empty'); console.log('README.md: verified')"

sed -n '1,360p' typecaster/README.md

```

No Git commands yet.
```
