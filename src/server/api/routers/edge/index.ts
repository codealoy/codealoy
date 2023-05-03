import { exampleEdgeRouter } from '~/server/api/routers/edge/example';
import { submitSolutionEdgeRouter } from '~/server/api/routers/edge/submitSolution';

export const edgeRouters = {
  example: exampleEdgeRouter,
  solution: submitSolutionEdgeRouter,
};
