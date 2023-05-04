import { z } from 'zod';
import { db } from '~/server/database';
import { createTRPCRouter, publicProcedure } from '~/server/utils/trpc';

export const submitSolutionEdgeRouter = createTRPCRouter({
  submitSolution: publicProcedure
    .input(
      z.object({
        solutionMaskId: z.string(),
        title: z.string(),
        repositoryUrl: z.string(),
        liveUrl: z.string(),
        questions: z.string(),
        tags: z.array(
          z.object({
            id: z.number().optional(),
            tagMaskId: z.string(),
            title: z.string(),
          }),
        ),
      }),
    )
    .mutation(async ({ input }) => {
      await db.query.insert(db.models.solution).values({
        solutionMaskId: input.solutionMaskId,
        title: input.title,
        repositoryUrl: input.repositoryUrl,
        liveUrl: input.liveUrl,
        questions: input.questions,
      });
      const solutionIdResponse = await db.query
        .select({
          id: db.models.solution.id,
        })
        .from(db.models.solution)
        .where(
          db.exp.eq(db.models.solution.solutionMaskId, input.solutionMaskId),
        );

      const solutionId = solutionIdResponse[0]?.id;

      const { tags } = input;

      tags.forEach(async (tag): void => {
        if (tag.id !== undefined) {
          await db.query.insert(db.models.solutionTag).values({
            solutionId: solutionId,
            tagId: tag.id,
          });
        } else {
          await db.query.insert(db.models.tag).values({
            tagMaskId: tag.tagMaskId,
            title: tag.title,
          });

          const tagIdResponse = await db.query
            .select({
              id: db.models.tag.id,
            })
            .from(db.models.tag)
            .where(db.exp.eq(db.models.tag.tagMaskId, tag.tagMaskId));

          const tagId = tagIdResponse[0]?.id;

          await db.query.insert(db.models.solutionTag).values({
            solutionId: solutionId,
            tagId: tagId,
          });
        }
      });
    }),

  getAllTags: publicProcedure.query(async () => {
    return await db.query.select().from(db.models.tag);
  }),
});
