import type { NextApiRequest, NextApiResponse } from 'next';
import { renderTrpcPanel } from 'trpc-panel';

import { getBaseUrl } from '~/client/utils/getBaseUrl';
import { env } from '~/configs/env.mjs';
import { appEdgeRouter } from '~/server/api/routers/root';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  env.NODE_ENV !== 'development'
    ? res.redirect(301, '/404')
    : res.status(200).send(
        renderTrpcPanel(appEdgeRouter, {
          url: `${getBaseUrl()}/api/edge`,
          transformer: 'superjson',
        }),
      );
}
