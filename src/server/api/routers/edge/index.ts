import { exampleEdgeRouter } from '~/server/api/routers/edge/example';
import { solutionTagsEdgeRouter } from '~/server/api/routers/edge/solutionTags';
import { submitSolutionEdgeRouter } from '~/server/api/routers/edge/submitSolution';
import { submitTagsEdgeRouter } from '~/server/api/routers/edge/submitTags';

export const edgeRouters = {
  example: exampleEdgeRouter,
  submitSolution: submitSolutionEdgeRouter,
  submitTags: submitTagsEdgeRouter,
  solutionTags: solutionTagsEdgeRouter,
};
