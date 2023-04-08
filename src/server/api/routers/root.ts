import { edgeRouters } from '~/server/api/routers/edge';
import { nodeRouters } from '~/server/api/routers/node';
import { createTRPCRouter } from '~/server/utils/trpc';

/**
 * This is the primary router for your server. It is used to create both the edge and node routers.
 */
export const appEdgeRouter = createTRPCRouter(edgeRouters);

export const appNodeRouter = createTRPCRouter(nodeRouters);

// export type definition of API
export type AppEdgeRouter = typeof appEdgeRouter;
export type AppNodeRouter = typeof appNodeRouter;
