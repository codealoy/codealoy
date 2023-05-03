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
      return db.query
        .select({
          id: db.models.solution.id,
        })
        .from(db.models.solution)
        .where(
          db.exp.eq(db.models.solution.solutionMaskId, input.solutionMaskId),
        );
    }),
  submitSolutionTags: publicProcedure
    .input(
      z.object({
        tagMaskId: z.string(),
        title: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      await db.query.insert(db.models.tag).values({
        tagMaskId: input.tagMaskId,
        title: input.title,
      });
      return db.query
        .select({
          id: db.models.tag.id,
        })
        .from(db.models.tag)
        .where(db.exp.eq(db.models.tag.tagMaskId, input.tagMaskId));
    }),

  submitSolutionTagRelations: publicProcedure
    .input(
      z.object({
        solutionId: z.number(),
        tagId: z.number(),
      }),
    )
    .mutation(async ({ input }) => {
      await db.query.insert(db.models.solutionTag).values({
        solutionId: input.solutionId,
        tagId: input.tagId,
      });
      return db.query
        .select({
          id: db.models.solutionTag.id,
        })
        .from(db.models.solutionTag)
        .where(db.exp.eq(db.models.solutionTag.solutionId, input.solutionId));
    }),
});
