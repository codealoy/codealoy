import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as expressions from 'drizzle-orm/expressions';

import { schemaMigration } from './schema';

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
  },
  exp: expressions,
};

export { db };
