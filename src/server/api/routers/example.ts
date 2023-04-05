import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
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

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),
});
