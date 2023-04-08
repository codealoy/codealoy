import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';
import { appEdgeRouter } from '~/server/api/routers/root';

export const config = {
  runtime: 'edge',
  regions: ['sin1'],
};

// export API handler
export default async function handler(req: NextRequest) {
  return fetchRequestHandler({
    endpoint: '/api/edge',
    router: appEdgeRouter,
    req,
    createContext: () => ({}),
    responseMeta({ ctx, errors }) {
      if (errors.length) {
        // propagate http first error from API calls
        return {
          status: 500,
        };
      }
      // cache request for 1 day + revalidate once every second
      return {
        headers: {
          'cache-control': 'max-age=0, s-maxage=60',
        },
      };
    },
  });
}
