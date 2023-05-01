import { z } from 'zod';
import { db } from '~/server/database';
import { createTRPCRouter, publicProcedure } from '~/server/utils/trpc';

export const submitSolutionEdgeRouter = createTRPCRouter({
  submitSolution: publicProcedure
    .input(
      z.object({
        id: z.bigint(),
        solutionMaskId: z.string(),
        title: z.string(),
        repositoryUrl: z.string(),
        liveUrl: z.string(),
        questions: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.query
        .insertInto(db.models.solution, {
          solutionMaskId: input.solutionMaskId,
          title: input.title,
          repositoryUrl: input.repositoryUrl,
          liveUrl: input.liveUrl,
          questions: input.questions,
        })
        .run();
    }),
});
