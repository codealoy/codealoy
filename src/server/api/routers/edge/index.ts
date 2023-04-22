import { announcementRouter } from '~/server/api/routers/edge/announcement';
import { exampleEdgeRouter } from '~/server/api/routers/edge/example';

export const edgeRouters = {
  example: exampleEdgeRouter,
  announcement: announcementRouter,
};
