import { mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const schemaMigration = mysqlTable('schemaMigration', {
  version: varchar('version', { length: 128 }).primaryKey().notNull(),
  createdAt: timestamp('createdAt', { fsp: 2 }).notNull().defaultNow(),
});
