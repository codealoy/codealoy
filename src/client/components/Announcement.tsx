import { XMarkIcon } from '@heroicons/react/24/outline';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { api } from '~/server/api';

interface Announcement {
  id: number;
  message: string;
  button: string;
  link: string;
  priority: number;
  isActive: boolean;
}

export const Announcement: React.FC<{
  hideAnnouncement: () => void;
}> = ({ hideAnnouncement }) => {
  const announcementQuery = api.edge.announcement.getAnnouncements.useQuery();
  const [announcement, setAnnouncement] = React.useState<
    Announcement | undefined
  >();

  useEffect(() => {
    const res = announcementQuery.data || [];
    if (isEmpty(res)) return;
    setAnnouncement(res[0]);
  }, [announcementQuery]);

  return (
    <div className="z-50 bg-gradient-to-r from-[#3c1ea0] via-[#681462] to-[#3c1ea0]">
      <div className="mr-4 flex">
        <div className="mx-auto max-w-7xl py-2">
          <div className="flex flex-wrap items-center justify-center space-x-2">
            <div className="flex items-center space-x-1">
              <p className="truncate text-sm font-medium text-white md:text-base">
                <span className="md:hidden">
                  কোডালয় গিটহাব কোডবেস - এ ⭐ দিন।
                </span>
                <span className="hidden md:inline">
                  {announcement?.message}
                </span>
              </p>
              <Link href={announcement?.link || ''} target="_blank">
                <span className="text-sm font-medium text-white underline underline-offset-2 hover:decoration-2 md:text-base">
                  {announcement?.button}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="order-2 flex flex-shrink-0 items-center sm:order-3 sm:ml-3">
          <button
            type="button"
            className="font-medium text-white underline underline-offset-2 hover:decoration-2 "
            onClick={hideAnnouncement}
          >
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
