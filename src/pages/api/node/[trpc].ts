import { createNextApiHandler } from '@trpc/server/adapters/next';

import { env } from '~/configs/env.mjs';
import { appNodeRouter } from '~/server/api/routers/root';
import { createTRPCContext } from '~/server/utils/trpc';

export const config = {
  runtime: 'nodejs',
};

// export API handler
export default createNextApiHandler({
  router: appNodeRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          );
        }
      : undefined,
});
