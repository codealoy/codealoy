import { z } from 'zod';
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { db } from '~/server/database';

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        greeting: input?.text ? `Hello ${input?.text}` : `Hello world`,
      };
    }),

  getMigrationList: publicProcedure.query(async () => {
    return await db.query.select().from(db.models.schemaMigration).limit(10);
  }),

  getMigrationByVersion: publicProcedure
    .input(z.object({ migrationVersion: z.string() }))
    .query(async ({ input }) => {
      return await db.query
        .select()
        .from(db.models.schemaMigration)
        .where(
          db.exp.and(
            db.exp.eq(
              db.models.schemaMigration.version,
              input.migrationVersion,
            ),
            db.exp.lte(db.models.schemaMigration.createdAt, new Date()),
          ),
        )
        .limit(1);
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),
});
