import { z } from 'zod';
import { db } from '~/server/database';
import { createTRPCRouter, publicProcedure } from '~/server/utils/trpc';

export const solutionTagsEdgeRouter = createTRPCRouter({
  solutionTags: publicProcedure
    .input(
      z.object({
        id: z.bigInt(),
        solutionId: z.bigInt(),
        tagId: z.bigInt(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.query
        .insertInto(db.models.solutionTag, {
          solutionId: input.solutionId,
          tagId: input.tagId,
        })
        .run();
    }),
});
