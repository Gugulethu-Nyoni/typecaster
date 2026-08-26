#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import SchemaReader from '../core/SchemaReader.js';
import TypeCaster from '../core/TypeCaster.js';

function printHelp() {
  console.log(`
@semantq/typecaster

Usage:

  typecaster <command> [options]

Commands:

  generate              Generate TypeCaster registry
  inspect <schema>      Read and display schema metadata
  validate <schema>     Load schema and verify TypeCaster metadata
  help                  Show this help message

Options:

  --output <path>       Registry output path

Examples:

  typecaster generate
  typecaster generate --output ./generated/typecaster.js
  typecaster inspect ./prisma/schema.prisma
  typecaster validate ./prisma/schema.prisma
  `);
}

function requireSchemaPath(command, args) {
  const schemaPath = args[1];

  if (!schemaPath || schemaPath.startsWith('--')) {
    throw new Error(
      `"${command}" requires a Prisma schema path.`
    );
  }

  return schemaPath;
}

function getDefaultSchemaPath() {
  const schemaPath =
    path.resolve('prisma/schema.prisma');

  if (!fs.existsSync(schemaPath)) {
    throw new Error(
      `Prisma schema not found: ${schemaPath}`
    );
  }

  return schemaPath;
}

function getOutputPath(args) {
  const outputIndex = args.indexOf('--output');

  if (outputIndex === -1) {
    return path.resolve(
      'packages/@semantq/typecaster/lib/typecaster.registry.js'
    );
  }

  const outputPath = args[outputIndex + 1];

  if (!outputPath || outputPath.startsWith('--')) {
    throw new Error(
      '"--output" requires a file path.'
    );
  }

  return path.resolve(outputPath);
}

function generateRegistry(schemaPath, outputPath) {
  const reader = new SchemaReader({
    schemaPath,
  });

  const metadata = reader.read();

  const output = [
    'export default ',
    JSON.stringify(metadata, null, 2),
    ';\n',
  ].join('');

  fs.mkdirSync(
    path.dirname(outputPath),
    { recursive: true }
  );

  fs.writeFileSync(
    outputPath,
    output,
    'utf8'
  );

  const modelCount =
    metadata.models
      ? Object.keys(metadata.models).length
      : 0;

  const enumCount =
    metadata.enums
      ? Object.keys(metadata.enums).length
      : 0;

  console.log(
    `TypeCaster registry generated: ${outputPath}`
  );

  console.log(
    `${modelCount} model(s), ${enumCount} enum(s).`
  );
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
    case 'generate': {
      const schemaPath =
        getDefaultSchemaPath();

      const outputPath =
        getOutputPath(args);

      generateRegistry(
        schemaPath,
        outputPath
      );

      break;
    }

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
