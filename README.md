# @semantq/typecaster

`@semantq/typecaster` is the **schema-aware type system and frontend metadata primitive** built into **Semantq QL**.

Its purpose is deliberately focused:

> **TypeCaster converts external values into schema-compatible typed values, converts database values into application/form representations, verifies prepared data before persistence, and derives reduced metadata for frontend editors.**


# Table of Contents

* [@semantq/typecaster](#semantqtypecaster)
* [What TypeCaster Is](#what-typecaster-is)
* [TypeCaster Is Native to Semantq QL](#typecaster-is-native-to-semantq-ql)
* [Core Architecture](#core-architecture)
* [TypeCaster's Two Architectural Responsibilities](#typecasters-two-architectural-responsibilities)

  * [Schema-Aware Data Casting](#schema-aware-data-casting)
  * [Frontend and Editor Metadata Projection](#frontend-and-editor-metadata-projection)
* [Persistence Schema vs Frontend Metadata](#persistence-schema-vs-frontend-metadata)
* [Schema Generation Workflow](#schema-generation-workflow)

  * [Updating the Prisma Schema](#updating-the-prisma-schema)
  * [Running `--generate`](#running---generate)
  * [Inspecting Metadata](#inspecting-metadata)
  * [Validating the Schema](#validating-the-schema)
* [Running TypeCaster](#running-typecaster)
* [The TypeCaster Data Lifecycle](#the-typecaster-data-lifecycle)

  * [`formToDbModel()`](#formtodbmodel)
  * [Business Logic](#business-logic)
  * [`assert()`](#assert)
  * [`dbToFormModel()`](#dbtoformmodel)
* [Supported Types](#supported-types)
* [Structural Validation](#structural-validation)
* [TypeCaster Is Not a Business-Rule Engine](#typecaster-is-not-a-business-rule-engine)
* [Model Metadata](#model-metadata)
* [Editor Metadata](#editor-metadata)
* [Metadata Projection Examples](#metadata-projection-examples)
* [Relations and Relational Metadata](#relations-and-relational-metadata)

  * [Relations Are Distinct from Scalar Fields](#relations-are-distinct-from-scalar-fields)
  * [Foreign Keys and Relation Scalars](#foreign-keys-and-relation-scalars)
  * [Why IDs Are Not Editor Fields](#why-ids-are-not-editor-fields)
* [Nested Relational Data](#nested-relational-data)

  * [Fetch-Driven Nestedness](#fetch-driven-nestedness)
  * [Nestedness Depth](#nestedness-depth)
  * [Example: Resident with Relations](#example-resident-with-relations)
* [Metadata and the Frontend Contract](#metadata-and-the-frontend-contract)
* [Metadata and the Backend Data Architecture](#metadata-and-the-backend-data-architecture)
* [MCSR and TypeCaster](#mcsr-and-typecaster)
* [Generated Service Pattern](#generated-service-pattern)
* [Type Handlers](#type-handlers)
* [Schema Contract Protection](#schema-contract-protection)
* [TypeCaster and Semantq QL Services](#typecaster-and-semantq-ql-services)
* [Package Structure](#package-structure)
* [CLI Reference](#cli-reference)
* [Developer Workflow](#developer-workflow)
* [Design Principles](#design-principles)
* [Architectural Summary](#architectural-summary)




TypeCaster does **not** contain business rules.

It also does **not** ship the complete Prisma/database architecture to the frontend.

Instead, TypeCaster establishes a deliberate boundary:

```text
                 SERVER
┌──────────────────────────────────────────────┐
│                                              │
│  Prisma / Database Schema                    │
│              │                               │
│              ▼                               │
│        SchemaReader                          │
│              │                               │
│              ▼                               │
│      Normalized Metadata                     │
│              │                               │
│              ▼                               │
│          TypeCaster                          │
│         /         \                          │
│        /           \                         │
│       ▼             ▼                        │
│  Typed Service    Editor Metadata            │
│      Data              │                     │
│       │                │                     │
│       ▼                ▼                     │
│  Business Logic    Frontend Editor            │
│       │                                      │
│       ▼                                      │
│     assert()                                 │
│       │                                      │
│       ▼                                      │
│    Database                                  │
│                                              │
└──────────────────────────────────────────────┘
```

The central architectural principle is:

> **The frontend receives a projection of the schema, not the schema itself.**



# TypeCaster is native to Semantq QL

TypeCaster is not a separate application dependency that developers need to install.

It is part of the Semantq QL server stack:

```text
semantqQL/
└── packages/
    └── @semantq/
        └── typecaster/
```

The application-level configured instance is exposed through:

```text
semantqQL/lib/typecaster.js
```

Services normally consume it with:

```js
import typeCaster from '../lib/typecaster.js';
```

The underlying implementation lives at:

```text
semantqQL/packages/@semantq/typecaster/
```

The application adapter configures TypeCaster against the project's schema and generated registry.



# The complete TypeCaster lifecycle

TypeCaster participates in both **write** and **read** flows.

## Write flow

```text
REQUEST / FORM DATA
        │
        ▼
formToDbModel()
        │
        ▼
TYPED APPLICATION DATA
        │
        ▼
BUSINESS LOGIC
        │
        ▼
assert()
        │
        ▼
DATABASE
```

The invariant is:

```text
CAST
  ↓
BUSINESS LOGIC
  ↓
ASSERT
  ↓
PERSIST
```

## Read flow

```text
DATABASE
    │
    ▼
dbToFormModel()
    │
    ▼
APPLICATION / FORM REPRESENTATION
```

## Editor metadata flow

```text
PRISMA SCHEMA
     │
     ▼
SchemaReader
     │
     ▼
Normalized Metadata
     │
     ▼
TypeCaster
     │
     ▼
Editor Metadata
     │
     ▼
FRONTEND EDITOR
```

These are related flows, but they are not the same contract.



# TypeCaster does not expose the backend data architecture

This is one of the most important design decisions in TypeCaster.

A Prisma schema can contain much more information than a frontend editor needs:

```text
models
fields
relations
foreign keys
provider-specific attributes
database mappings
indexes
internal structural details
server-side relationships
persistence concerns
```

That information belongs to the backend.

The frontend generally needs a much smaller representation:

```text
field name
value
editor type
required / optional
nullable
enum options
simple structural characteristics
```

Therefore TypeCaster deliberately separates:

```text
BACKEND SCHEMA
     ≠
INTERNAL METADATA
     ≠
EDITOR METADATA
```

The complete schema remains a server-side concern.

The frontend receives a **purpose-specific projection**.

This gives Semantq QL a strong architectural boundary:

```text
             COMPLETE SCHEMA
                    │
                    ▼
             SchemaReader
                    │
                    ▼
          INTERNAL METADATA
                    │
                    ▼
               TypeCaster
                    │
                    ▼
          EDITOR METADATA
                    │
                    ▼
                FRONTEND
```

The frontend therefore does not need to know how the database is architected in order to edit a resource.



# Why metadata projection matters

## Information minimisation

The frontend is not given internal persistence information that it does not need.

## Reduced coupling

Frontend editors depend on a purpose-specific metadata contract instead of the Prisma schema.

## Better separation of concerns

Database architecture remains server-side.

Editor behaviour remains frontend-oriented.

## Smaller contracts

Only metadata necessary for the consuming application is projected.

## Schema-aware editors

Editors can still be generated dynamically because the metadata remains derived from the authoritative schema.

The principle is:

> **Hide backend architecture without hiding the information required to operate the frontend.**



# Schema changes and TypeCaster generation

Whenever the Prisma schema changes, TypeCaster metadata must be regenerated.

This is an important part of the development lifecycle.

The workflow is:

```text
EDIT prisma/schema.prisma
        │
        ▼
Prisma generation / migration
        │
        ▼
npm run typecaster --generate
        │
        ▼
Updated TypeCaster registry
        │
        ▼
Application
```

For example:

```bash
npx prisma generate
npm run typecaster --generate
```

If the schema change affects the database, run the appropriate Prisma migration workflow as well.

Then regenerate TypeCaster:

```bash
npm run typecaster --generate
```

The complete development sequence is therefore:

```bash
# Change the schema
vim prisma/schema.prisma

# Update Prisma-generated artifacts
npx prisma generate

# Regenerate TypeCaster metadata
npm run typecaster --generate
```

If tests are available:

```bash
npm test
```



# Why `--generate` is important

TypeCaster uses schema-derived metadata through its generated registry.

Conceptually:

```text
prisma/schema.prisma
        │
        ▼
TypeCaster generation
        │
        ▼
typecaster.registry.js
        │
        ▼
TypeCaster runtime
```

If the Prisma schema changes but TypeCaster is not regenerated, the application can end up with:

```text
CURRENT DATABASE / PRISMA SCHEMA
              │
              │
              X
              │
STALE TYPECASTER METADATA
```

This can produce stale:

```text
field definitions
type information
enum information
relations
relation metadata
editor metadata
```

Therefore:

> **A Prisma schema change should be followed by TypeCaster generation.**



# Running TypeCaster

After the Semantq QL server has been set up, TypeCaster is already available.

Run:

```bash
npm run typecaster
```

The CLI is located at:

```text
packages/@semantq/typecaster/cli/typecaster.js
```



# Generate TypeCaster metadata

The most important schema lifecycle command is:

```bash
npm run typecaster --generate
```

Run this after Prisma schema changes and the relevant Prisma generation/migration step.

This updates the TypeCaster registry used by the application.

Conceptually:

```text
Prisma schema
     │
     ▼
SchemaReader
     │
     ▼
MetadataBuilder
     │
     ▼
Generated registry
     │
     ▼
TypeCaster
```



# Inspect the schema

The CLI can inspect schema metadata:

```bash
npm run typecaster -- inspect ./prisma/schema.prisma
```

This is useful for examining:

```text
models
fields
types
nullability
lists
enums
relations
relation metadata
```



# Validate the schema

The schema can also be validated/loaded through the CLI:

```bash
npm run typecaster -- validate ./prisma/schema.prisma
```

The CLI is intentionally lightweight.

Resource generation and MCSR remain responsible for generating application resources and services.



# Supported types

TypeCaster currently supports:

| Type          | Purpose                                |
| - | -- |
| `String`      | String values                          |
| `Int`         | Integer values                         |
| `BigInt`      | Arbitrary-size integer values          |
| `Float`       | Floating-point values                  |
| `Decimal`     | Precision-sensitive decimal values     |
| `Boolean`     | Boolean values                         |
| `DateTime`    | Date/time values                       |
| `Json`        | JSON-compatible values                 |
| `Bytes`       | Binary values                          |
| `Enum`        | Schema-defined enum values             |
| `Unsupported` | Explicit failure for unsupported types |

It also understands structural characteristics such as:

```text
required
nullable
list
non-list
enum membership
relations
relation scalar fields
```



# `formToDbModel()`

Use `formToDbModel()` when external data enters a service.

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);
```

It:

* resolves the model schema
* resolves field types
* casts compatible input values
* rejects invalid primitive values
* handles basic nullability and structural constraints
* validates schema-defined enum values
* returns typed application/database data

For example, a request may contain:

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

Instead of:

```js
const data = {
  quantity: Number(req.body.quantity),
  active: req.body.active === 'true',
  price: req.body.price,
  deliveryDate: new Date(req.body.deliveryDate)
};
```

the service uses:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);
```

The result is structurally typed:

```js
data.quantity;      // 25
data.active;        // true
data.price;         // Decimal representation
data.deliveryDate;  // Date
```

This removes repetitive field-by-field casting from generated services.



# TypeCaster knows types, not business meaning

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

The service understands:

```text
A customer must be over 18.

A completed order cannot be cancelled.

A manager must approve orders above a threshold.

A discharged resident requires a discharge date.
```

For example:

```js
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
```

The architectural boundary is:

```text
TypeCaster
    ↓
structural/type rules

Service
    ↓
business/domain rules
```

TypeCaster should not become a business-rule engine.



# `assert()`

`assert()` verifies that prepared data still conforms to the model contract.

```js
typeCaster.assert(
  data,
  'Order'
);
```

It does not:

```text
cast
repair
transform
execute business rules
```

Its responsibility is verification.

For example:

```js
const data = typeCaster.formToDbModel(
  req.body,
  'Order'
);

// Business logic
data.quantity = 'invalid';

typeCaster.assert(
  data,
  'Order'
);
```

The assertion catches the structural violation before persistence.

Therefore:

```text
formToDbModel()
    = construct typed data

assert()
    = verify prepared data
```



# `dbToFormModel()`

`dbToFormModel()` performs the reverse application-facing transformation.

```js
const order =
  await OrderModel.findById(id);

return typeCaster.dbToFormModel(
  order,
  'Order'
);
```

Its role is broader than primitive conversion.

It establishes the boundary:

```text
DATABASE / INTERNAL REPRESENTATION
             │
             ▼
        TypeCaster
             │
             ▼
APPLICATION / FORM REPRESENTATION
```

This is especially important when relational data is involved.



# Relational metadata

Relations are part of the TypeCaster metadata contract.

However:

> **Relations remain distinct from scalar field typing.**

A model conceptually contains:

```text
Model
├── scalar fields
├── enum fields
└── relations
```

For example:

```text
Resident
├── id
├── organizationId
├── firstName
├── lastName
├── preferredName
├── status
├── dateOfBirth
├── externalRef
├── organization
├── behaviorEpisodes
├── behaviorDailyLogs
├── carePlans
├── representatives
└── assessments
```

Here:

```text
organizationId
```

is a scalar field.

While:

```text
organization
```

is a relation.

They must not be treated as the same thing.



# Relation scalar fields

Consider a Prisma relationship:

```prisma
model Resident {
  id             String       @id @default(uuid())
  organizationId Int
  organization   Organization @relation(
    fields: [organizationId],
    references: [id]
  )

  firstName      String
  lastName       String
}
```

The relation descriptor is attached to:

```text
organization
```

not:

```text
organizationId
```

TypeCaster therefore marks the scalar foreign-key field explicitly:

```js
{
  name: 'organizationId',
  type: 'Int',
  isRelation: false,
  isRelationScalar: true
}
```

while the relation remains:

```js
{
  name: 'organization',
  type: 'Organization',
  isRelation: true
}
```

This allows downstream consumers to distinguish:

```text
relation field
relation scalar / foreign key
ordinary scalar field
```

This is metadata normalisation, not editor-specific filtering.



# IDs are no longer part of editor metadata

A major architectural rule is that **identifier fields are not exposed as editable frontend fields**.

For example, a `Resident` persistence model may contain:

```text
id
organizationId
firstName
lastName
preferredName
status
dateOfBirth
externalRef
```

The editor metadata can instead expose:

```text
firstName
lastName
preferredName
status
dateOfBirth
externalRef
```

It does not expose:

```text
id
organizationId
```

The distinction is deliberate.

`id` is a persistence identity.

`organizationId` is a relation scalar/foreign key.

Neither is an ordinary user-editable field.

Therefore:

```text
DATABASE MODEL
      │
      ├── id                  → internal identity
      ├── organizationId      → relation scalar
      ├── firstName           → editable
      ├── lastName            → editable
      ├── preferredName       → editable
      ├── status              → editable
      └── dateOfBirth         → editable
```

becomes:

```text
EDITOR METADATA
      │
      ├── firstName
      ├── lastName
      ├── preferredName
      ├── status
      └── dateOfBirth
```

The frontend therefore does not need to know or manipulate persistence identifiers simply to render an editor.



# Relational nestedness

TypeCaster supports relational metadata, but an important distinction must be made:

> **The depth of relational data is determined by the data actually fetched, not by blindly exposing the entire schema graph.**

Suppose the schema contains:

```text
Resident
   │
   ├── Organization
   │
   ├── BehaviorEpisode
   │        │
   │        ├── BehaviorEvent
   │        │
   │        └── BehaviorIntervention
   │
   └── CarePlan
```

The schema describes possible relationships.

It does **not** mean every response should contain:

```text
Resident
 └── Organization
      └── Residents
           └── BehaviorEpisodes
                └── ...
```

That would expose unnecessary backend structure and could create enormous recursive graphs.

Instead, the fetched data determines the actual representation.



# Fetch depth determines representation depth

Consider a shallow query:

```js
const resident =
  await prisma.resident.findUnique({
    where: { id },
    include: {
      organization: true
    }
  });
```

The result may conceptually be:

```text
Resident
└── Organization
```

TypeCaster works with the data actually returned.

If the query fetches:

```js
const resident =
  await prisma.resident.findUnique({
    where: { id },
    include: {
      organization: true,
      behaviorEpisodes: true
    }
  });
```

the returned structure becomes:

```text
Resident
├── Organization
└── BehaviorEpisodes
```

If the query goes deeper:

```js
const resident =
  await prisma.resident.findUnique({
    where: { id },
    include: {
      behaviorEpisodes: {
        include: {
          events: true,
          interventions: true
        }
      }
    }
  });
```

the representation becomes:

```text
Resident
└── BehaviorEpisode
     ├── BehaviorEvent
     └── BehaviorIntervention
```

The key principle is:

```text
SCHEMA
  = possible relationship graph

FETCH
  = selected relationship graph

DATA
  = actual nested representation
```

Therefore TypeCaster should not assume that every possible relation is present.



# Why fetch-driven nestedness matters

This keeps the runtime representation proportional to the actual resource request.

For example:

```text
FETCH ONLY RESIDENT
        ↓
Resident
```

```text
FETCH RESIDENT + ORGANIZATION
        ↓
Resident
└── Organization
```

```text
FETCH RESIDENT + EPISODES
        ↓
Resident
└── BehaviorEpisodes
```

```text
FETCH RESIDENT + EPISODES + EVENTS
        ↓
Resident
└── BehaviorEpisodes
     └── BehaviorEvents
```

The database schema describes what **can** exist.

The fetch describes what **was requested**.

The returned data determines what **does** exist in the application representation.

This is particularly important for Semantq QL because resource responses should not automatically become complete database graph serialisations.



# Metadata versus fetched data

These two concepts should remain distinct.

Metadata can say:

```text
Resident
├── organization → Organization
├── behaviorEpisodes → BehaviorEpisode[]
├── carePlans → CarePlan[]
└── assessments → ResidentAssessment[]
```

But the actual response might contain only:

```js
{
  id: 'resident-001',
  firstName: 'Jane',
  lastName: 'Doe'
}
```

or:

```js
{
  id: 'resident-001',
  firstName: 'Jane',
  lastName: 'Doe',
  organization: {
    id: 10,
    name: 'Example Organisation'
  }
}
```

or:

```js
{
  id: 'resident-001',
  firstName: 'Jane',
  lastName: 'Doe',
  behaviorEpisodes: [
    {
      id: 'episode-001',
      events: [
        {
          id: 'event-001'
        }
      ]
    }
  ]
}
```

TypeCaster must operate on the actual returned structure.

It should not invent nested data simply because the schema permits the relationship.



# Editor metadata for a model

A reduced editor projection might look like:

```js
{
  Resident: {
    fields: {
      firstName: {
        editor: 'text',
        required: true,
        nullable: false
      },

      lastName: {
        editor: 'text',
        required: true,
        nullable: false
      },

      preferredName: {
        editor: 'text',
        required: false,
        nullable: true
      },

      status: {
        editor: 'text',
        required: true,
        nullable: false
      },

      dateOfBirth: {
        editor: 'datetime-local',
        required: false,
        nullable: true
      },

      externalRef: {
        editor: 'text',
        required: false,
        nullable: true
      }
    }
  }
}
```

Notice what is absent:

```text
id
organizationId
organization
behaviorEpisodes
behaviorDailyLogs
carePlans
representatives
assessments
```

This is intentional.

The editor metadata represents the **editable surface**, not the complete persistence architecture.



# Editor metadata is frontend-focused

Editor metadata exists to answer questions such as:

```text
What fields can the editor display?

Which editor should be used?

Is the field required?

Can the field be null?

What enum options are available?

What value should be displayed?
```

It is not intended to answer:

```text
How is this database table indexed?

What is the complete relational graph?

What database foreign keys exist?

What provider-specific database mapping is being used?

What internal persistence structures exist?
```

Those remain backend concerns.



# Field projection examples

## String

Internal:

```js
{
  name: 'firstName',
  type: 'String',
  nullable: false,
  isList: false
}
```

Editor projection:

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

## Int

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

## Boolean

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

## DateTime

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

## Enum

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

The frontend receives what it needs to render and operate the field.



# Enum metadata

A schema-defined enum may internally be represented as:

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

The editor projection can then become:

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

The editor does not need the complete Prisma enum declaration.

It needs the usable options.



# TypeCaster and metadata architecture

TypeCaster has several distinct metadata layers.

```text
                 PRISMA
                   │
                   ▼
             SchemaReader
                   │
                   ▼
           MetadataBuilder
                   │
                   ▼
        NORMALIZED METADATA
                   │
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
   Runtime TypeCaster   Editor Builder
          │                 │
          ▼                 ▼
   Typed application     Editor metadata
       data                   │
                              ▼
                          FRONTEND
```

The normalized metadata may contain information such as:

```text
field name
field type
required
nullable
isList
isRelation
relation
attributes
isRelationScalar
enum information
```

The editor builder then reduces this into the frontend-facing contract.

This is important:

> **Editor metadata is derived from normalized metadata, but it is not the normalized metadata itself.**



# `MetadataBuilder`

`MetadataBuilder` is responsible for normalising schema-derived metadata.

It handles:

```text
models
fields
enums
relations
relation scalar identification
nullability
required state
list state
```

For example, a relation scalar can be marked:

```js
{
  name: 'organizationId',
  type: 'Int',
  isRelationScalar: true
}
```

while a relation remains:

```js
{
  name: 'organization',
  type: 'Organization',
  isRelation: true
}
```

This gives downstream consumers enough information to make their own purpose-specific decisions.



# `SchemaReader`

`SchemaReader` is responsible for reading/parsing the schema representation.

The conceptual pipeline is:

```text
Prisma schema
     │
     ▼
SchemaReader
     │
     ▼
Raw schema metadata
     │
     ▼
MetadataBuilder
     │
     ▼
Normalized metadata
```

TypeCaster operates on the normalized representation rather than embedding Prisma parsing logic throughout the runtime.



# `ModelRegistry`

The model registry resolves models by name.

Conceptually:

```js
typeCaster.getModel('Resident');
```

returns the registered model metadata.

A model can contain fields such as:

```text
Resident
├── id
├── organizationId
├── firstName
├── lastName
├── preferredName
├── status
├── dateOfBirth
├── externalRef
├── organization
├── behaviorEpisodes
├── behaviorDailyLogs
├── carePlans
├── representatives
├── assessments
└── CarePlanProgress
```

The registry is an internal runtime concern.

It should not be confused with the frontend editor metadata.



# Type handlers

Each supported type follows a common conceptual contract:

```js
formToDb(value, metadata)
dbToForm(value, metadata)
assert(value, metadata)
```

The registry resolves the appropriate handler from metadata.

For example:

```text
Int
  ↓
Int handler

Boolean
  ↓
Boolean handler

DateTime
  ↓
DateTime handler

Enum
  ↓
Enum handler
```

This keeps the core generic.

The TypeCaster core does not need domain-specific knowledge about:

```text
Resident
Order
Customer
Product
Invoice
Organization
```

It needs structural metadata.



# Structural validation versus business validation

These are deliberately separate.

## TypeCaster asks:

```text
Is this an Int?

Is this a Boolean?

Is this a valid DateTime?

Is this a valid enum value?

Is this required field null?

Is this value structurally a list?
```

## The service asks:

```text
Can this resident be discharged?

Can this order be cancelled?

Can this user modify the organization?

Does this business process permit this transition?

Does this value satisfy the organization's policy?
```

This separation keeps TypeCaster reusable across domains.



# Service pattern

A Semantq QL service can follow:

```js
async create(req) {
  const data = typeCaster.formToDbModel(
    req.body,
    'Order'
  );

  // =========================================================
  // BUSINESS LOGIC
  // =========================================================

  // Basic mutation:
  // data.someIntField += 1;
  // data.someStringField =
  //   data.someStringField.trim();

  // Extended business logic:
  //
  // if (
  //   data.status === 'DISCHARGED' &&
  //   !data.dischargeDate
  // ) {
  //   throw new Error(
  //     'A discharge date is required.'
  //   );
  // }

  typeCaster.assert(
    data,
    'Order'
  );

  const result =
    await OrderModel.create(data);

  return typeCaster.dbToFormModel(
    result,
    'Order'
  );
}
```

The service developer focuses on the business logic.

TypeCaster handles the structural type boundary.



# Update pattern

Updates follow the same lifecycle:

```js
async update(id, input) {
  const data =
    typeCaster.formToDbModel(
      input,
      'Order'
    );

  // =========================================================
  // BUSINESS LOGIC
  // =========================================================

  // Domain-specific transformations and rules go here.

  typeCaster.assert(
    data,
    'Order'
  );

  const result =
    await OrderModel.update(
      id,
      data
    );

  return typeCaster.dbToFormModel(
    result,
    'Order'
  );
}
```

The invariant remains:

```text
external input
      ↓
formToDbModel()
      ↓
typed data
      ↓
business logic
      ↓
assert()
      ↓
persistence
      ↓
dbToFormModel()
```



# TypeCaster and MCSR

TypeCaster is particularly useful within Semantq's MCSR/resource-generation architecture.

Generated services can automatically establish:

```js
const typedData =
  typeCaster.formToDbModel(
    data,
    'Order'
  );

// BUSINESS LOGIC

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

This means MCSR does not need to generate repetitive:

```js
Number(...)
Boolean(...)
new Date(...)
```

operations for every field.

The division of responsibility becomes:

```text
TypeCaster
    ↓
"What type is this data?"

MCSR
    ↓
"Where does the structural lifecycle go?"

Developer
    ↓
"What does this data mean?"
```



# Generated editor architecture

The same schema-aware foundation can support editor generation.

Conceptually:

```text
Prisma Schema
      │
      ▼
Normalized Metadata
      │
      ▼
EditorMetadataBuilder
      │
      ▼
Reduced Editor Contract
      │
      ▼
Semantq Frontend
```

The editor contract can describe:

```text
editable fields
editor type
required state
nullable state
enum options
values
```

while deliberately excluding:

```text
database IDs
foreign keys
relations
database implementation details
```

unless a specific frontend feature explicitly requires a separate relation-aware contract.



# The important distinction: schema versus editable surface

A database model might contain:

```text
Resident
├── id
├── organizationId
├── firstName
├── lastName
├── preferredName
├── status
├── dateOfBirth
├── externalRef
├── organization
├── behaviorEpisodes
├── behaviorDailyLogs
├── carePlans
├── representatives
└── assessments
```

The editable surface might be:

```text
Resident Editor
├── firstName
├── lastName
├── preferredName
├── status
├── dateOfBirth
└── externalRef
```

The two representations serve different purposes.

```text
DATABASE MODEL
    = persistence architecture

EDITOR MODEL
    = user-editable representation
```

TypeCaster provides the machinery for deriving the second from the first without exposing the first wholesale.



# Nested resources and editor boundaries

Relations may exist in the backend without becoming editable fields.

For example:

```text
Resident
├── organization
├── behaviorEpisodes
├── carePlans
└── assessments
```

does not mean the Resident editor should contain:

```text
organizationId
behaviorEpisodeIds
carePlanIds
assessmentIds
```

as ordinary text fields.

Instead, relation-aware interfaces can be handled as separate resource operations.

This keeps the ordinary editor contract clean:

```text
Scalar editor fields
        │
        ▼
ordinary form editing
```

while relations remain:

```text
resource relationships
        │
        ▼
fetch / nested resources / dedicated relation UI
```



# Fetch data controls relational depth

The schema defines relationships.

The query determines which relationships are fetched.

The returned data determines the nested representation.

Therefore:

```text
SCHEMA GRAPH
    ↓
possible relationships

FETCH GRAPH
    ↓
requested relationships

RESULT GRAPH
    ↓
actual nested data
```

This is the correct model for relational nestedness in Semantq QL.

A query that fetches:

```text
Resident
```

does not automatically become:

```text
Resident
 └── Organization
      └── Residents
           └── Episodes
                └── Events
                     └── ...
```

Instead, nestedness is explicit and controlled by the resource/data fetch.

This protects:

```text
performance
payload size
frontend simplicity
security boundaries
query predictability
```



# Database representation versus frontend representation

The complete architecture can therefore be visualised as:

```text
                         DATABASE
                            │
                            ▼
                     Prisma Model
                            │
                            ▼
                      SchemaReader
                            │
                            ▼
                  Normalized Metadata
                            │
                ┌───────────┴───────────┐
                │                       │
                ▼                       ▼
           TypeCaster          Editor Metadata Builder
                │                       │
                │                       ▼
                │                Frontend Contract
                │                       │
                │                       ▼
                │                  UI / Editor
                │
                ▼
        Typed Application Data
                │
                ▼
          Business Logic
                │
                ▼
             assert()
                │
                ▼
             Database
```

This is the core TypeCaster architecture.



# Complete example

Suppose Prisma defines:

```prisma
model Resident {
  id             String       @id @default(uuid())
  organizationId Int
  firstName      String
  lastName       String
  preferredName  String?
  status         ResidentStatus
  dateOfBirth    DateTime?
  externalRef    String?

  organization   Organization @relation(
    fields: [organizationId],
    references: [id]
  )

  behaviorEpisodes BehaviorEpisode[]
  carePlans        CarePlan[]
}
```

The internal metadata can distinguish:

```text
id
    persistence identity

organizationId
    scalar relation field

firstName
    ordinary scalar

lastName
    ordinary scalar

preferredName
    nullable scalar

status
    enum scalar

dateOfBirth
    nullable DateTime

externalRef
    nullable scalar

organization
    relation

behaviorEpisodes
    relation list

carePlans
    relation list
```

The editor projection can become:

```js
{
  Resident: {
    fields: {
      firstName: {
        editor: 'text',
        required: true,
        nullable: false
      },

      lastName: {
        editor: 'text',
        required: true,
        nullable: false
      },

      preferredName: {
        editor: 'text',
        required: false,
        nullable: true
      },

      status: {
        editor: 'select',
        required: true,
        nullable: false
      },

      dateOfBirth: {
        editor: 'datetime-local',
        required: false,
        nullable: true
      },

      externalRef: {
        editor: 'text',
        required: false,
        nullable: true
      }
    }
  }
}
```

The frontend does not need:

```text
id
organizationId
```

as editable fields.

It also does not need the complete relation graph simply to render the Resident editor.



# Runtime example

A database query may fetch:

```js
const resident =
  await prisma.resident.findUnique({
    where: {
      id: residentId
    },
    include: {
      organization: true,
      behaviorEpisodes: {
        include: {
          events: true
        }
      }
    }
  });
```

The resulting data might conceptually be:

```text
Resident
├── firstName
├── lastName
├── status
├── Organization
│
└── BehaviorEpisodes
     └── Events
```

The nestedness exists because it was fetched.

The schema merely made those relationships possible.

This distinction is fundamental:

> **TypeCaster understands the relational metadata, but it does not invent relational data.**



# Recommended development workflow

For normal schema-driven development:

```text
1. Edit Prisma schema
          ↓
2. Run Prisma generation
          ↓
3. Run database migration if required
          ↓
4. Run TypeCaster generation
          ↓
5. Inspect generated metadata if necessary
          ↓
6. Run tests
          ↓
7. Run the application
```

Commands:

```bash
npx prisma generate

npm run typecaster --generate

npm run typecaster -- inspect ./prisma/schema.prisma

npm test
```

The exact Prisma migration command depends on the environment and whether the schema change affects the database.

The critical TypeCaster rule is:

```text
PRISMA SCHEMA CHANGE
        ↓
npm run typecaster --generate
```



# Package structure

The TypeCaster package is structured as:

```text
semantqQL/
├── packages/
│   └── @semantq/
│       └── typecaster/
│           ├── package.json
│           ├── README.md
│           ├── index.js
│           │
│           ├── cli/
│           │   └── typecaster.js
│           │
│           ├── core/
│           │   ├── TypeCaster.js
│           │   ├── TypeRegistry.js
│           │   ├── SchemaReader.js
│           │   ├── ModelRegistry.js
│           │   ├── MetadataBuilder.js
│           │   └── EditorMetadataBuilder.js
│           │
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
│           │
│           └── providers/
│               └── PostgreSQL.js
│
└── lib/
    └── typecaster.js
```

The exact implementation may evolve, but the architectural boundaries should remain.



# Design principles

## 1. Schema-driven

The schema is the authoritative source of structural type information.

## 2. Boundary-oriented

External values are cast when entering the application.

Prepared values are asserted before persistence.

## 3. Business-logic independent

TypeCaster does not contain domain rules.

## 4. Metadata-aware

TypeCaster operates from normalized schema metadata.

## 5. Frontend-focused metadata

Editor metadata is a reduced projection designed for frontend consumers.

## 6. Backend architecture remains backend architecture

The complete Prisma/database schema is not automatically exposed to the frontend.

## 7. Relations remain distinct from scalar typing

A relation such as:

```text
organization
```

is not the same metadata concept as:

```text
organizationId
```

## 8. Foreign keys are not ordinary editor fields

Relation scalar fields can be identified internally without exposing them as editable UI fields.

## 9. IDs are not editor fields

Persistence identity belongs to the backend/resource layer, not the ordinary frontend editor contract.

## 10. Nestedness is fetch-driven

The schema describes possible relationships.

The fetch determines which relationships are present.

The actual data determines the runtime nested structure.

## 11. Explicit lifecycle

The normal service lifecycle is:

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

## 12. Native to Semantq QL

TypeCaster is part of the Semantq QL server architecture and does not require separate installation.



# The central TypeCaster contract

TypeCaster can ultimately be understood through four boundaries.

### Input boundary

```text
EXTERNAL DATA
      ↓
formToDbModel()
      ↓
TYPED APPLICATION DATA
```

### Business boundary

```text
TYPED APPLICATION DATA
      ↓
BUSINESS LOGIC
      ↓
PREPARED DATA
```

### Persistence boundary

```text
PREPARED DATA
      ↓
assert()
      ↓
DATABASE
```

### Frontend boundary

```text
DATABASE / FETCHED DATA
      ↓
dbToFormModel()
      ↓
APPLICATION REPRESENTATION

SCHEMA METADATA
      ↓
EDITOR METADATA PROJECTION
      ↓
FRONTEND
```

The complete architectural principle is:

> **TypeCaster knows what data is. The service decides what the data means.**

And for the frontend:

> **The frontend receives a purpose-specific projection of the schema, not the backend schema itself.**

And for relational data:

> **The schema defines possible relationships; the fetch determines relational depth; the returned data determines the actual nested representation.**

And for schema lifecycle:

> **When the Prisma schema changes, regenerate TypeCaster metadata with `npm run typecaster --generate`.**
