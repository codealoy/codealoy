import { exampleEdgeRouter } from '~/server/api/routers/edge/example';
import { submitSolutionEdgeRouter } from '~/server/api/routers/edge/submitSolution';
import { submitTagsEdgeRouter } from '~/server/api/routers/edge/submitTags';

export const edgeRouters = {
  example: exampleEdgeRouter,
  solution: submitSolutionEdgeRouter,
  submitTags: submitTagsEdgeRouter,
};
