import { db } from '~/server/database';
import { createTRPCRouter, publicProcedure } from '~/server/utils/trpc';

export const announcementRouter = createTRPCRouter({
  getAnnouncements: publicProcedure.query(async () => {
    return await db.query
      .select()
      .from(db.models.announcements)
      .where(db.exp.eq(db.models.announcements.isActive, true));
  }),
});
