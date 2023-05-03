import { z } from 'zod';
import { db } from '~/server/database';
import { createTRPCRouter, publicProcedure } from '~/server/utils/trpc';

export const submitTagsEdgeRouter = createTRPCRouter({
  submitTags: publicProcedure
    .input(
      z.object({
        tagMaskId: z.string(),
        title: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.query
        .insert(db.models.tag, {
          tagMaskId: input.tagMaskId,
          title: input.title,
        })
        .run();
    }),
});
