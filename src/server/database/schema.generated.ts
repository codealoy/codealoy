import {
  datetime,
  index,
  int,
  mysqlTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm/sql';

export const account = mysqlTable(
  'account',
  {
    id: serial('id').primaryKey().notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    accessToken: text('accessToken'),
    expiresIn: int('expiresIn'),
    idToken: text('idToken'),
    refreshToken: text('refreshToken'),
    refreshTokenExpiresIn: int('refreshTokenExpiresIn'),
    scope: varchar('scope', { length: 255 }),
    tokenType: varchar('tokenType', { length: 255 }),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniProviderProviderAccountId: uniqueIndex(
        'idx_uni_provider_providerAccountId',
      ).on(table.provider, table.providerAccountId),
      idxUserId: index('idx_userId').on(table.userId),
    };
  },
);

export const profileUser = mysqlTable(
  'profileUser',
  {
    id: serial('id').primaryKey().notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    emailVerified: datetime('emailVerified', { mode: 'string' }),
    image: varchar('image', { length: 255 }),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedUt: datetime('updatedUt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniUserId: uniqueIndex('idx_uni_userId').on(table.userId),
      idxUniEmail: uniqueIndex('idx_uni_email').on(table.email),
    };
  },
);

export const schemaMigration = mysqlTable('schemaMigration', {
  version: varchar('version', { length: 128 }).primaryKey().notNull(),
  createdAt: datetime('createdAt', { mode: 'string' })
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
});

export const session = mysqlTable(
  'session',
  {
    id: serial('id').primaryKey().notNull(),
    sessionToken: varchar('sessionToken', { length: 255 }).notNull(),
    userId: varchar('userId', { length: 255 }).notNull(),
    expires: datetime('expires', { mode: 'string' }).notNull(),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniSessionToken: uniqueIndex('idx_uni_sessionToken').on(
        table.sessionToken,
      ),
      idxUserId: index('idx_userId').on(table.userId),
    };
  },
);

export const solution = mysqlTable(
  'solution',
  {
    id: serial('id').primaryKey().notNull(),
    solutionMaskId: varchar('solutionMaskId', { length: 30 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    repositoryUrl: varchar('repositoryUrl', { length: 255 }).notNull(),
    liveUrl: varchar('liveUrl', { length: 255 }).notNull(),
    questions: text('questions').notNull(),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
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

export const solutionTag = mysqlTable(
  'solutionTag',
  {
    id: serial('id').primaryKey().notNull(),
    solutionId: int('solutionId').notNull(),
    tagId: int('tagId').notNull(),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniSolutionTag: uniqueIndex('idx_uni_solutionTag').on(
        table.solutionId,
        table.tagId,
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
    createdAt: datetime('createdAt', { mode: 'string' })
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniTagMaskId: uniqueIndex('idx_uni_tagMaskId').on(table.tagMaskId),
    };
  },
);

export const verificationToken = mysqlTable(
  'verificationToken',
  {
    id: serial('id').primaryKey().notNull(),
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: datetime('expires', { mode: 'string' }).notNull(),
    createdAt: datetime('createdAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
    updatedAt: datetime('updatedAt', { mode: 'string' })
      .default('CURRENT_TIMESTAMP')
      .notNull(),
  },
  (table) => {
    return {
      idxUniToken: uniqueIndex('idx_uni_token').on(table.token),
    };
  },
);
