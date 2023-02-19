import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export const Announcement: React.FC<{
  hideAnnouncement: () => void;
}> = ({ hideAnnouncement }) => {
  return (
    <div className="z-50 bg-gradient-to-r from-[#3c1ea0] via-[#681462] to-[#3c1ea0]">
      <div className="mx-auto max-w-7xl py-2">
        <div className="flex flex-wrap items-center justify-center space-x-2">
          <div className="flex items-center space-x-1">
            <p className="truncate text-sm font-medium text-white md:text-base">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Big news! We&apos;re excited to announce a brand new product!
              </span>
            </p>
            <Link href="#">
              <span className="text-sm font-medium text-white underline underline-offset-2 hover:decoration-2 md:text-base">
                Read More.
              </span>
            </Link>
          </div>
          <div className="order-2 flex flex-shrink-0 items-center sm:order-3 sm:ml-3">
            <button
              type="button"
              className="font-medium text-white underline underline-offset-2 hover:decoration-2 "
              onClick={hideAnnouncement}
            >
              <span className="hidden text-sm md:inline md:text-base ">
                Dismiss
              </span>
              <XMarkIcon
                className="h-6 w-6 text-white md:hidden"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
