# @semantq/typecaster

`@semantq/typecaster` is the schema-aware type system primitive built into **Semantq QL**.

Its purpose is deliberately narrow:

> **Convert external values into schema-compatible typed values, convert database values into application/form representations, and verify that prepared data still conforms to the schema before persistence.**

TypeCaster does **not** contain business rules.

A second architectural responsibility is equally important:

> **TypeCaster does not expose the complete Prisma/database schema to the frontend. It derives reduced, purpose-specific metadata for forms, editors and other application-facing consumers.**

This creates a clear separation between the persistence schema and the frontend contract.



# TypeCaster is native to Semantq QL

TypeCaster is not a separate application dependency that developers need to install.

It is part of the Semantq QL server stack and is located at:

```text
semantqQL/
└── packages/
    └── @semantq/
        └── typecaster/
```

The application-level TypeCaster instance is exposed through:

```text
semantqQL/lib/typecaster.js
```

Services therefore normally use:

```js
import typeCaster from '../lib/typecaster.js';
```

The application adapter configures TypeCaster against the project's schema and provides a single application-level TypeCaster instance.

The underlying implementation is:

```text
semantqQL/packages/@semantq/typecaster/
```



# Running TypeCaster

After the Semantq QL server has been initially set up, TypeCaster is already available.

Run:

```bash
npm run typecaster
````

This invokes:

```text
packages/@semantq/typecaster/cli/typecaster.js
```

The CLI currently provides lightweight schema inspection and validation utilities.

Inspect Prisma schema metadata:

```bash
npm run typecaster -- inspect ./prisma/schema.prisma
````

Validate/load the schema:

```bash
npm run typecaster -- validate ./prisma/schema.prisma
````

No separate TypeCaster installation is required.



# The fundamental architecture

The fundamental Semantq QL write flow is:

```text
REQUEST / FORM DATA
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
```

For reads:

```text
DATABASE
   │
   ▼
typeCaster.dbToFormModel()
   │
   ▼
APPLICATION / FORM / API REPRESENTATION
```

The central Semantq QL principle is:

> **Cast on entry. Apply business logic to typed data. Assert before persistence.**



# TypeCaster removes repetitive form-payload casting

HTTP requests, forms and other external sources commonly deliver values in transport representations that do not match the model schema.

A form may submit:

```json
{
  "quantity": "25",
  "active": "true",
  "price": "149.95",
  "deliveryDate": "2026-08-25T08:00:00Z"
}
```

while the model expects:

```text
quantity      → Int
active        → Boolean
price         → Decimal
deliveryDate  → DateTime
```

Without TypeCaster, services repeatedly perform primitive conversions:

```js
const data = {
  quantity: Number(req.body.quantity),
  active: req.body.active === 'true',
  price: req.body.price,
  deliveryDate: new Date(req.body.deliveryDate),
};
```

TypeCaster removes that repetitive work.

Instead:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);
```

The raw form/request payload can be submitted directly.

TypeCaster resolves the model schema, identifies the field types, performs the relevant primitive conversions and applies basic schema-level structural constraints.

The service receives typed application data:

```js
data.quantity;      // 25
data.active;        // true
data.price;         // Decimal representation
data.deliveryDate;  // Date
```

This is a central purpose of TypeCaster:

> **Developers do not need to manually type-cast individual form-payload fields. TypeCaster performs schema-driven casting and basic structural validation at the application boundary.**



# What TypeCaster validates

TypeCaster handles **basic schema-level structural constraints**.

It currently supports:

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

It also understands structural characteristics such as:

```text
nullable / required
list / non-list
enum membership
```

For example:

```text
quantity
    expected → Int
    input    → "25"
    result   → 25
```

or:

```text
active
    expected → Boolean
    input    → "false"
    result   → false
```

or:

```text
status
    expected → Enum
    input    → "ACTIVE"
    result   → "ACTIVE"
```

The purpose is to establish a reliable structural type boundary.



# TypeCaster is not a business-rule engine

TypeCaster knows what a value **is**.

It does not know what a value **means in a particular business domain**.

TypeCaster understands:

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

The service/application layer understands:

```text
A customer must be over 18.
An order cannot be cancelled after shipment.
A manager must approve an order above a certain value.
A completed record cannot be reopened.
```

For example:

```js
async create(req) {
  const data = typeCaster.formToDbModel(
    req.body,
    'Order'
  );

  if (
    data.status === 'CANCELLED' &&
    data.shippedAt
  ) {
    throw new Error(
      'A shipped order cannot be cancelled.'
    );
  }

  typeCaster.assert(
    data,
    'Order'
  );

  const result = await OrderModel.create(
    data
  );

  return typeCaster.dbToFormModel(
    result,
    'Order'
  );
}
```

TypeCaster establishes the structural contract.

The service establishes the business contract.

These concerns remain deliberately separate.



# `formToDbModel()`

Use `formToDbModel()` when external data enters the service.

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);
```

It:

* resolves the model schema
* resolves each field type
* casts compatible input values
* rejects invalid primitive values
* applies basic structural and nullability constraints
* validates schema-defined enum values
* returns database-ready typed data

For example:

```text
"25"
    ↓
25
```

```text
"true"
    ↓
true
```

```text
"149.95"
    ↓
Decimal representation
```

```text
"2026-08-25T08:00:00Z"
    ↓
Date
```

The important architectural consequence is that generated services do not need repetitive field-by-field type conversions.



# Business logic belongs after casting

Once TypeCaster has finished, the service has a schema-conforming structural representation.

Business logic operates on that typed state:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);

// Business logic.

if (data.quantity > 1000) {
  throw new Error(
    'Order quantity exceeds the allowed limit.'
  );
}
```

The service can reason directly about:

```js
data.quantity
data.status
data.deliveryDate
data.metadata
```

without first repeating primitive type checks.



# `assert()`

`assert()` verifies that prepared data still conforms to the model's persistence contract.

```js
typeCaster.assert(
  data,
  'Order'
);
```

It does **not** cast.

It does **not** repair values.

It does **not** execute business validation.

This matters because business logic is allowed to transform typed data.

For example:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);

// Business transformation accidentally breaks
// the structural type contract.
data.quantity = 'not-an-int';

typeCaster.assert(
  data,
  'Order'
);
```

The assertion fails before persistence.

The distinction is:

```text
formToDbModel()
    = construct typed data

assert()
    = verify existing prepared data
```

This creates an explicit persistence boundary.



# `dbToFormModel()`

`dbToFormModel()` performs the reverse representation flow.

Use it when database data leaves the persistence layer:

```js
const order =
  await OrderModel.findById(id);

return typeCaster.dbToFormModel(
  order,
  'Order'
);
```

The function should not be understood merely as:

```text
database value → JavaScript value
```

Its broader purpose is:

```text
DATABASE / INTERNAL REPRESENTATION
           +
       MODEL METADATA
              │
              ▼
      TypeCaster projection
              │
              ▼
APPLICATION / FORM REPRESENTATION
```

The database and Prisma layer may contain considerably more structural information than a frontend editor needs.

TypeCaster creates an application-facing representation without exposing the complete persistence schema.



# Metadata projection

A critical TypeCaster responsibility is **metadata projection**.

The complete Prisma/database schema belongs on the server.

The frontend does not need the complete schema graph.

A persistence schema may contain information such as:

```text
relations
foreign keys
database mappings
provider-specific attributes
indexes
internal model relationships
migration information
server-side structural details
```

Most of this information is not appropriate or necessary as a frontend contract.

TypeCaster therefore acts as a metadata boundary:

```text
COMPLETE PRISMA / DATABASE SCHEMA
             │
             ▼
        SchemaReader
             │
             ▼
    NORMALIZED INTERNAL
        METADATA
             │
             ▼
        TypeCaster
             │
             ▼
     METADATA PROJECTION
             │
             ▼
      FORM / EDITOR
```

The principle is:

> **The frontend receives a projection of the schema, not the schema itself.**

This provides a separation between:

```text
Persistence schema
       ≠
Application metadata
       ≠
Editor metadata
```



# Why metadata projection matters

The complete schema is an internal server concern.

A form editor generally needs only information required to:

```text
render a field
display a value
select an appropriate editor
determine basic required/optional behaviour
display available enum choices
understand simple structural characteristics
```

It does not need the entire Prisma schema.

This provides several architectural benefits.

### Information minimisation

The frontend is not given internal persistence details that it does not need.

### Reduced coupling

The frontend depends on a purpose-specific metadata representation rather than the internal Prisma schema.

### Performance

The client receives only the metadata necessary for its operation rather than an entire schema graph.

### Clear boundaries

Database concerns remain server-side while editor concerns are represented explicitly for the UI.



# Editor metadata examples

A schema-aware application can project a field into a reduced editor representation.

For example, an enum field:

```js
{
  name: 'status',
  value: 'ACTIVE',
  editor: {
    type: 'select',
    options: [
      'ACTIVE',
      'INACTIVE',
      'DISCHARGED'
    ],
    required: true
  }
}
```

The editor does not need the complete Prisma definition of the model.

It needs the projected information required to render and operate the field.

A text field might be represented as:

```js
{
  name: 'firstName',
  value: 'Jane',
  editor: {
    type: 'text',
    required: true
  }
}
```

A numeric field:

```js
{
  name: 'quantity',
  value: 25,
  editor: {
    type: 'number',
    required: true
  }
}
```

A decimal field:

```js
{
  name: 'price',
  value: '149.95',
  editor: {
    type: 'decimal',
    required: true
  }
}
```

A date/time field:

```js
{
  name: 'deliveryDate',
  value: '2026-08-25T08:00:00.000Z',
  editor: {
    type: 'datetime',
    required: false
  }
}
```

A boolean field:

```js
{
  name: 'active',
  value: true,
  editor: {
    type: 'checkbox',
    required: true
  }
}
```

A JSON field:

```js
{
  name: 'metadata',
  value: {
    priority: 'high'
  },
  editor: {
    type: 'json'
  }
}
```

These are **editor-oriented projections**, not representations of the complete Prisma schema.



# Metadata is schema-derived

A simplified internal field description may look like:

```js
{
  name: 'quantity',
  type: 'Int',
  nullable: false,
  isList: false
}
```

An enum field may carry additional structural metadata:

```js
{
  name: 'status',
  type: 'OrderStatus',
  nullable: false,
  isList: false,
  values: [
    'PENDING',
    'ACTIVE',
    'COMPLETED',
    'CANCELLED'
  ]
}
```

That internal metadata can then be projected into a UI-facing representation:

```js
{
  name: 'status',
  value: 'ACTIVE',
  editor: {
    type: 'select',
    options: [
      'PENDING',
      'ACTIVE',
      'COMPLETED',
      'CANCELLED'
    ],
    required: true
  }
}
```

The important distinction is:

```text
Internal schema metadata
        ↓
TypeCaster
        ↓
Purpose-specific metadata projection
```

The projected representation is intentionally smaller and more application-oriented.



# Different type projections

The same principle applies across primitive types.

### String

Internal:

```js
{
  name: 'firstName',
  type: 'String',
  nullable: false,
  isList: false
}
```

Projected:

```js
{
  name: 'firstName',
  value: 'Jane',
  editor: {
    type: 'text',
    required: true
  }
}
```

### Int

Internal:

```js
{
  name: 'quantity',
  type: 'Int',
  nullable: false,
  isList: false
}
```

Projected:

```js
{
  name: 'quantity',
  value: 25,
  editor: {
    type: 'number',
    required: true
  }
}
```

### Boolean

Internal:

```js
{
  name: 'active',
  type: 'Boolean',
  nullable: false,
  isList: false
}
```

Projected:

```js
{
  name: 'active',
  value: true,
  editor: {
    type: 'checkbox',
    required: true
  }
}
```

### DateTime

Internal:

```js
{
  name: 'deliveryDate',
  type: 'DateTime',
  nullable: true,
  isList: false
}
```

Projected:

```js
{
  name: 'deliveryDate',
  value: '2026-08-25T08:00:00.000Z',
  editor: {
    type: 'datetime',
    required: false
  }
}
```

### Enum

Internal:

```js
{
  name: 'status',
  type: 'OrderStatus',
  nullable: false,
  isList: false,
  values: [
    'PENDING',
    'ACTIVE',
    'COMPLETED',
    'CANCELLED'
  ]
}
```

Projected:

```js
{
  name: 'status',
  value: 'ACTIVE',
  editor: {
    type: 'select',
    options: [
      'PENDING',
      'ACTIVE',
      'COMPLETED',
      'CANCELLED'
    ],
    required: true
  }
}
```

The frontend receives what the editor needs, not what the database happens to know.



# The metadata-driven `dbToFormModel()` flow

`dbToFormModel()` is therefore schema-aware.

Conceptually:

```text
Model metadata
      │
      ├── field name
      ├── field type
      ├── nullable
      ├── list
      └── enum metadata
      │
      ▼
dbToFormModel()
      │
      ▼
field/type resolution
      │
      ▼
type handler
      │
      ▼
application/form representation
```

The model metadata allows TypeCaster to resolve the correct transformation for each field.

For a model such as:

```text
Order
├── id            → String
├── quantity      → Int
├── total         → Decimal
├── active        → Boolean
├── deliveryDate  → DateTime
└── status        → Enum
```

TypeCaster can resolve:

```js
{
  id:        StringCaster,
  quantity:  IntCaster,
  total:     DecimalCaster,
  active:    BooleanCaster,
  deliveryDate: DateTimeCaster,
  status:    EnumCaster
}
```

The TypeCaster therefore does not require application-specific conversion code for every model.

The schema provides the metadata.

The registry resolves the type.

The type handler performs the representation conversion.



# A complete service example

A generated Semantq QL service follows this pattern:

```js
async create(req) {
  const data = typeCaster.formToDbModel(
    req.body,
    'Order'
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
    'Order'
  );

  const result =
    await OrderModel.create(
      data
    );

  return typeCaster.dbToFormModel(
    result,
    'Order'
  );
}
```

The developer normally adds or changes the business logic section rather than writing primitive casting code.



# The same pattern applies to updates

Updates follow the same structural lifecycle:

```js
async update(id, data) {
  const dbData =
    typeCaster.formToDbModel(
      data,
      'Order'
    );

  // =========================================================
  // BUSINESS LOGIC
  // =========================================================

  // BASIC MUTATION
  // dbData.someIntField = dbData.someIntField + 1;
  // dbData.someStringField = dbData.someStringField.trim();

  // EXTENDED BUSINESS LOGIC
  // if (dbData.someStatusField === 'CANCELLED' && dbData.someDateField) {
  //   throw new Error(
  //     'A shipped order cannot be cancelled.'
  //   );
  // }

  typeCaster.assert(
    dbData,
    'Order'
  );

  const result =
    await OrderModel.update(
      id,
      dbData
    );

  return typeCaster.dbToFormModel(
    result,
    'Order'
  );
}
```

The invariant is:

```text
cast
  ↓
business logic
  ↓
assert
  ↓
persist
```



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
Is quantity an Int?
Is status a valid enum member?
Can this value be represented as DateTime?
Is this required field null?
Is this list structurally valid?
```

### Service/business layer

```text
Can an order contain more than 1,000 items?
Can a completed order be cancelled?
Does this customer have permission to modify the order?
Does this order satisfy the organisation's business policy?
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

The architecture therefore creates two explicit certification points:

```text
INPUT CERTIFICATION

external representation
        ↓
formToDbModel()
        ↓
schema-conforming application data
```

and:

```text
PERSISTENCE CERTIFICATION

business-transformed data
        ↓
assert()
        ↓
schema-conforming persistence data
```



# Model metadata

TypeCaster works from normalized model metadata.

At a conceptual level:

```js
{
  models: {
    Order: {
      name: 'Order',
      fields: {
        quantity: {
          name: 'quantity',
          type: 'Int',
          nullable: false,
          isList: false
        },

        active: {
          name: 'active',
          type: 'Boolean',
          nullable: false,
          isList: false
        }
      }
    }
  }
}
```

This metadata allows TypeCaster to remain generic.

The TypeCaster core does not need to know what an `Order`, `Customer`, `Invoice`, `Product`, or any other domain model means.

It needs only the structural model metadata.



# TypeCaster and metadata projection are different layers

The internal metadata exists to support TypeCaster itself.

The projected metadata exists to support the editor/application.

They should not be treated as the same object.

```text
PERSISTENCE METADATA
        │
        ├── internal type information
        ├── schema structure
        ├── nullability
        ├── list information
        ├── enum information
        └── server-side details
        │
        ▼
      TypeCaster
        │
        ▼
EDITOR / APPLICATION METADATA
        │
        ├── editor type
        ├── value
        ├── options
        ├── required
        └── other UI-relevant flags
```

This distinction allows the server to retain rich schema knowledge without making the entire persistence model part of the frontend contract.



# MCSR and TypeCaster

TypeCaster is particularly useful to Semantq's MCSR/resource-generation architecture.

The generator can automatically provide:

```js
const typedData =
  typeCaster.formToDbModel(
    data,
    'Order'
  );

// =========================================================
// BUSINESS LOGIC
// =========================================================

// BASIC MUTATION
// typedData.someIntField = typedData.someIntField + 1;
// typedData.someStringField = typedData.someStringField.trim();

// EXTENDED BUSINESS LOGIC
// ...

typeCaster.assert(
  typedData,
  'Order'
);

const result =
  await OrderModel.create(
    typedData
  );

return typeCaster.dbToFormModel(
  result,
  'Order'
);
```

This means MCSR does not need to generate repetitive field-level casts.

Instead, the generated service establishes the structural boundary and gives developers a clear place to implement domain behaviour.

The division is:

```text
TypeCaster
    ↓
"What type is this data?"

MCSR / generated service
    ↓
"Where does business logic go?"

Developer
    ↓
"What does this data mean in this domain?"
```



# Current package structure

Inside Semantq QL:

```text
semantqQL/
├── packages/
│   └── @semantq/
│       └── typecaster/
│           ├── package.json
│           ├── README.md
│           ├── index.js
│           ├── cli/
│           │   └── typecaster.js
│           ├── core/
│           │   ├── TypeCaster.js
│           │   ├── TypeRegistry.js
│           │   ├── SchemaReader.js
│           │   ├── ModelRegistry.js
│           │   └── MetadataBuilder.js
│           ├── types/
│           │   ├── String.js
│           │   ├── Int.js
│           │   ├── BigInt.js
│           │   ├── Float.js
│           │   ├── Decimal.js
│           │   ├── Boolean.js
│           │   ├── DateTime.js
│           │   ├── Json.js
│           │   ├── Bytes.js
│           │   ├── Enum.js
│           │   └── Unsupported.js
│           └── providers/
│               └── PostgreSQL.js
│
└── lib/
    └── typecaster.js
```

The package is part of the Semantq QL server stack.

The application adapter exposes the configured instance:

```text
semantqQL/lib/typecaster.js
```

Services import it through:

```js
import typeCaster from '../lib/typecaster.js';
```



# CLI

The TypeCaster CLI is intentionally small.

Run:

```bash
npm run typecaster
````

Inspect schema metadata:

```bash
npm run typecaster -- inspect ./prisma/schema.prisma
````

Validate/load the schema:

```bash
npm run typecaster -- validate ./prisma/schema.prisma
````

The TypeCaster CLI is primarily an inspection and validation utility.

Service generation is handled by Semantq's resource-generation/MCSR tooling, which generates the TypeCaster-aware service structure.



# Design principles

TypeCaster follows several core principles.

### 1. Schema-driven

The model schema is the source of structural type information.

### 2. Boundary-oriented

Type casting happens when external data enters the service and structural verification happens before persistence.

### 3. Business-logic independent

TypeCaster does not contain domain rules.

### 4. Metadata-aware

TypeCaster uses model metadata to drive both conversion directions.

### 5. Metadata-minimising

The frontend receives a projection of the schema rather than the complete persistence schema.

### 6. Native to Semantq QL

TypeCaster is part of the Semantq QL server stack and requires no separate installation.

### 7. Explicit

The generated service makes the lifecycle visible:

```text
CAST
  ↓
BUSINESS LOGIC
  ↓
ASSERT
  ↓
PERSIST
  ↓
FORM / API REPRESENTATION
```

The central principle remains:

> **TypeCaster knows what data is. The service decides what the data means.**

And at the frontend boundary:

> **The frontend receives a projection of the schema, not the schema itself.**
