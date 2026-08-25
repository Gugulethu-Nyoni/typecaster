#!/usr/bin/env node

import SchemaReader from '../core/SchemaReader.js';
import TypeCaster from '../core/TypeCaster.js';

function printHelp() {
  console.log(`
@semantq/typecaster

Usage:
  typecaster <command> [options]

Commands:
  inspect <schema>     Read and display schema metadata
  validate <schema>    Load schema and verify TypeCaster metadata
  help                 Show this help message

Examples:
  typecaster inspect ./prisma/schema.prisma
  typecaster validate ./prisma/schema.prisma
  `);
}

function requireSchemaPath(command, args) {
  const schemaPath = args[1];

  if (!schemaPath) {
    throw new Error(
      `"${command}" requires a Prisma schema path.`
    );
  }

  return schemaPath;
}

function inspectSchema(schemaPath) {
  const reader = new SchemaReader({
    schemaPath,
  });

  const metadata = reader.read();

  console.log(
    JSON.stringify(
      metadata,
      null,
      2
    )
  );
}

function validateSchema(schemaPath) {
  const typeCaster = new TypeCaster({
    schemaPath,
  });

  if (!typeCaster.metadata) {
    throw new Error(
      'TypeCaster metadata could not be loaded.'
    );
  }

  const modelCount =
    typeCaster.metadata.models
      ? Object.keys(
          typeCaster.metadata.models
        ).length
      : 0;

  const enumCount =
    typeCaster.metadata.enums
      ? Object.keys(
          typeCaster.metadata.enums
        ).length
      : 0;

  console.log(
    `TypeCaster schema validation passed. ` +
    `${modelCount} model(s), ` +
    `${enumCount} enum(s) loaded.`
  );
}

function main() {
  const args =
    process.argv.slice(2);

  const command =
    args[0] || 'help';

  switch (command) {
    case 'inspect': {
      const schemaPath =
        requireSchemaPath(
          command,
          args
        );

      inspectSchema(
        schemaPath
      );

      break;
    }

    case 'validate': {
      const schemaPath =
        requireSchemaPath(
          command,
          args
        );

      validateSchema(
        schemaPath
      );

      break;
    }

    case 'help':
    case '--help':
    case '-h':
      printHelp();
      break;

    default:
      throw new Error(
        `Unknown TypeCaster command: "${command}".`
      );
  }
}

try {
  main();
} catch (error) {
  console.error(
    `TypeCaster CLI error: ${error.message}`
  );

  process.exitCode = 1;
}
