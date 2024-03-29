/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import superjson from 'superjson';
import { getBaseUrl } from '~/client/utils/getBaseUrl';

import { AppEdgeRouter, type AppNodeRouter } from '~/server/api/routers/root';

/** A set of type-safe react-query hooks for your tRPC API. */
const apiEdgeClient = createTRPCNext<AppEdgeRouter>({
  config({ ctx: _ }) {
    return {
      /**
       * Transformer used for data de-serialization from the server.
       *
       * @see https://trpc.io/docs/data-transformers
       */
      transformer: superjson,

      /**
       * Links used to determine request flow from client to server.
       *
       * @see https://trpc.io/docs/links
       */
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/edge`,
        }),
      ],
    };
  },
  /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
   */
  ssr: false,
});

const apiNodeClient = createTRPCProxyClient<AppNodeRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/node`,
    }),
  ],
});

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type EdgeRouterInputs = inferRouterInputs<AppEdgeRouter>;
export type NodeRouterInputs = inferRouterInputs<AppNodeRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type EdgeRouterOutputs = inferRouterOutputs<AppEdgeRouter>;
export type NodeRouterOutputs = inferRouterOutputs<AppNodeRouter>;

export const api = {
  edge: apiEdgeClient,
  node: apiNodeClient,
};
