import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';

// export const Announcement: React.FC<{
//   hideAnnouncement: () => void;
// }> = ({ hideAnnouncement }) => {

export const Announcement: React.FC<{
  hideAnnouncement: () => void;
}> = ({}) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && (
        <div className="z-50 bg-gradient-to-r from-[#3c1ea0] via-[#681462] to-[#3c1ea0]">
          <div className="mx-auto max-w-7xl py-2">
            <div className="flex flex-wrap items-center justify-center space-x-2">
              <div className="flex items-center space-x-1">
                <p className="truncate text-sm font-medium text-white md:text-base">
                  <span className="md:hidden">
                    কোডালয় গিটহাব কোডবেস - এ ⭐ দিন।
                  </span>
                  <span className="hidden md:inline">
                    কোডালয় প্রজেক্টটি সম্পূর্ণ ফ্রি এবং ওপেনসোর্স। গিটহাব - এ
                    ⭐ দিয়ে সাপোর্ট করুন।
                  </span>
                </p>
                <Link
                  href="https://github.com/codealoy/codealoy"
                  target="_blank"
                >
                  <span className="text-sm font-medium text-white underline underline-offset-2 hover:decoration-2 md:text-base">
                    গিটহাব কোডবেস
                  </span>
                </Link>
              </div>

              <div className="order-2 flex flex-shrink-0 items-center sm:order-3 sm:ml-3">
                <button
                  type="button"
                  className="font-medium text-white underline underline-offset-2 hover:decoration-2 "
                  // onClick={hideAnnouncement}
                  onClick={() => setToggle(!toggle)}
                >
                  <span className="hidden text-sm md:inline md:text-base ">
                    {toggle && 'বন্ধ করুন'}
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
      )}
    </div>
  );
};
