import {
  boolean,
  datetime,
  mysqlTable,
  serial,
  varchar,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm/sql';

export const schemaMigration = mysqlTable('schemaMigration', {
  version: varchar('version', { length: 128 }).primaryKey().notNull(),
  createdAt: datetime('createdAt', { mode: 'date' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

export const announcements = mysqlTable('announcements', {
  id: serial('id').primaryKey().notNull(),
  message: varchar('message', { length: 255 }).notNull(),
  button: varchar('button', { length: 255 }).notNull(),
  link: varchar('link', { length: 255 }).notNull(),
  priority: serial('priority').notNull(),
  isActive: boolean('isActive').notNull().default(true),
  createdAt: datetime('createdAt', { mode: 'string' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: datetime('updatedAt', { mode: 'string' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});
