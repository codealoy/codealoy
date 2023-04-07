import { datetime, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm/sql';

export const schemaMigration = mysqlTable('schemaMigration', {
  version: varchar('version', { length: 128 }).primaryKey().notNull(),
  createdAt: datetime('createdAt', { mode: 'string' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
