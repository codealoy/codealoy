'use client';

import Link from 'next/link';

import { BottomSkewBoxPattern, TopSkewBoxPattern } from '@/components/patterns';
import { Button } from '@/components/ui/button';
import { GITHUB_REPO_LINK } from '@/config/site';

export const Hero = () => {
  return (
    <section className="relative flex min-h-[90dvh] items-center justify-center overflow-hidden bg-gray dark:bg-dark">
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <TopSkewBoxPattern />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <BottomSkewBoxPattern />
      </div>

      <div className="relative z-10 flex items-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl dark:text-slate-200">
            কোড + বিদ্যালয় = <span className="text-primary">কোডালয়</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
            মাতৃভাষা বাংলায় প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শেখার
            <br />
            <span className="font-medium text-primary"> সম্পূর্ণ ফ্রি</span>,
            এবং{' '}
            <span className="font-medium text-primary hover:underline hover:underline-offset-4">
              <a
                href={GITHUB_REPO_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                ওপেনসোর্স
              </a>
            </span>{' '}
            প্লাটফর্ম
          </p>
          <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
            <Link href="/courses">
              <Button variant="default" size="lg">
                শেখা শুরু করুন
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
