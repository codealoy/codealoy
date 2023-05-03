import {
  datetime,
  int,
  mysqlTable,
  serial,
  text,
  varchar,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm/sql';

export const schemaMigration = mysqlTable('schemaMigration', {
  version: varchar('version', { length: 128 }).primaryKey().notNull(),
  createdAt: datetime('createdAt', { mode: 'date' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

export const solution = mysqlTable(
  'solution',
  {
    id: serial('id').primaryKey().notNull(),
    solutionMaskId: varchar('solutionMaskId', { length: 30 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    repositoryUrl: varchar('repositoryUrl', { length: 255 }).notNull(),
    liveUrl: varchar('liveUrl', { length: 255 }).notNull(),
    questions: text('questions').notNull(),
    createdAt: datetime('createdAt', { mode: 'date' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'date' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniSolutionMaskId: uniqueIndex('idx_uni_solutionMaskId').on(
        table.solutionMaskId,
      ),
    };
  },
);

export const tag = mysqlTable(
  'tag',
  {
    id: serial('id').primaryKey().notNull(),
    tagMaskId: varchar('tagMaskId', { length: 30 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    createdAt: datetime('createdAt', { mode: 'date' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'date' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniTagMaskId: uniqueIndex('idx_uni_tagMaskId').on(table.tagMaskId),
    };
  },
);

export const solutionTag = mysqlTable(
  'solutionTag',
  {
    id: serial('id').primaryKey().notNull(),
    solutionId: int('solutionId').notNull(),
    tagId: int('tagId').notNull(),
    createdAt: datetime('createdAt', { mode: 'date' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'datetime' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxSolutionId: index('idx_solutionId').on(table.solutionId),
      idxTagId: index('idx_tagId').on(table.tagId),
    };
  },
);
