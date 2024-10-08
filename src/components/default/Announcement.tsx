'use client';

import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowRight, HiX } from 'react-icons/hi';

import { GITHUB_REPO_LINK } from '@/config/site';

import { Button } from '@/components/ui';

export const Announcement = () => {
  const [hideAnnouncement, setHideAnnouncement] = React.useState(false);

  const handleHideAnnouncement = () => {
    setHideAnnouncement(true);
  };

  return hideAnnouncement ? null : (
    <div className="z-50 flex bg-gradient-to-r from-complimentary to-primary text-white">
      <div className="mx-auto max-w-7xl py-2">
        <div className="flex flex-wrap items-center justify-center space-x-2">
          <div className="flex items-center space-x-1">
            <p className="truncate text-sm font-medium md:text-base">
              <span className="md:hidden">
                কোডালয়{' '}
                <Link
                  href={GITHUB_REPO_LINK}
                  target="_blank"
                  aria-label="Github Link"
                >
                  <span className="text-sm font-medium underline underline-offset-4 hover:text-black md:text-base">
                    গিটহাব কোডবেস
                  </span>
                </Link>{' '}
                - এ ⭐ দিন।
              </span>
              <span className="hidden md:inline">
                কোডালয় প্রজেক্টটি সম্পূর্ণ ফ্রি এবং ওপেনসোর্স। গিটহাব - এ ⭐
                দিয়ে সাপোর্ট করুন{' '}
                <HiOutlineArrowRight className="inline text-base" />{' '}
                <Link
                  href={GITHUB_REPO_LINK}
                  target="_blank"
                  aria-label="Github Link"
                >
                  <span className="text-sm font-medium underline underline-offset-4 hover:text-black md:text-base">
                    গিটহাব লিংক
                  </span>
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="mr-3 flex flex-shrink-0 items-center">
        <Button
          variant="icon"
          size="icon"
          aria-label="Hide Announcement"
          onClick={handleHideAnnouncement}
        >
          <HiX
            className="h-5 w-5 scale-100 transition-all duration-200 hover:scale-125 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary active:scale-90"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};
