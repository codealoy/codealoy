import { connect } from '@planetscale/database';
import * as expressions from 'drizzle-orm/expressions';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { announcements, schemaMigration } from './schema';

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
    announcements,
  },
  exp: expressions,
};

export { db };
