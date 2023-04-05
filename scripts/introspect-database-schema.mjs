#!/usr/bin/env zx
import * as dotenv from 'dotenv';
import 'zx/globals';
dotenv.config();

// introspect the database schema
console.log(chalk.green('🚀 Introspect the database schema...'));

await $`npx drizzle-kit introspect:mysql --out=drizzle/ --connectionString=${process.env.DATABASE_URL}`;

// copy the generated schema to the server folder
if (fs.existsSync('./drizzle/schema.ts')) {
  console.log(
    chalk.green('\n\n🚀 Copy the generated schema to the server folder...'),
  );
  await $`cp ./drizzle/schema.ts ./src/server/database/schema.generated.ts`;
}

// format the schema file with prettier

console.log(chalk.green('\n🚀 Format the schema file with prettier...'));
await $`npx prettier --write ./src/server/database/schema.generated.ts --loglevel=silent`;

// delete the drizzle folder if it exists
console.log(chalk.green('\n🚀 Delete the drizzle folder...'));
if (fs.existsSync('./drizzle')) {
  await $`rm -rf ./drizzle`;
}

// done
console.log(chalk.green('\n\n✅ Done!'));
