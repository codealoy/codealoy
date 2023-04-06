#!/usr/bin/env zx
import * as dotenv from 'dotenv';
import ora from 'ora';
import 'zx/globals';
dotenv.config();

const steps = {
  1: 'Introspect the database schema',
  2: 'Copy the generated schema file to the server/database folder',
  3: 'Format the schema file',
  4: 'Delete the unnecessary generated schema folder',
};

// introspect the database schema
const spinner = ora(steps[1]).start();
await $`npx drizzle-kit introspect:mysql --out=drizzle/ --connectionString=${process.env.DATABASE_URL} > /dev/null`.quiet();

spinner.succeed(steps[1]);

// copy the generated schema to the server folder
spinner.text = steps[2];
if (fs.existsSync('./drizzle/schema.ts')) {
  await $`cp ./drizzle/schema.ts ./src/server/database/schema.generated.ts`.quiet();
  spinner.succeed(steps[2]);
} else {
  spinner.fail(steps[2]);
  console.log(chalk.red('\n❌ Failed! The schema file does not exist'));
  process.exit(1);
}

// format the schema file with prettier
spinner.text = steps[3];
await $`npx prettier --write ./src/server/database/schema.generated.ts --loglevel=silent`.quiet();
spinner.succeed(steps[3]);

// delete the drizzle folder if it exists
spinner.text = steps[4];
if (fs.existsSync('./drizzle')) {
  await $`rm -rf ./drizzle`.quiet();
}
spinner.succeed(steps[4]).stop();

// done
console.log(chalk.green('\n✅ Done!'));
