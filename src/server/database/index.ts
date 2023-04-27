import { connect } from '@planetscale/database';
import * as expressions from 'drizzle-orm/expressions';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { schemaMigration, solution, solutionTag, tag } from './schema';

// create the connection
const connection = connect({
  url: process.env['DATABASE_URL'],
});

const drizzleClient = drizzle(connection, {
  logger: process.env['NODE_ENV'] === 'development',
});

const db = {
  query: drizzleClient,
  models: {
    schemaMigration,
    tag,
    solution,
    solutionTag,
  },
  exp: expressions,
};

export { db };
