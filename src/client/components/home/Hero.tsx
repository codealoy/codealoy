import clsx from 'clsx';
import Link from 'next/link';
import styles from '~/client/styles/index.module.css';

export const Hero = () => {
  return (
    <div
      className={clsx(
        '-mt-[76px] flex h-screen items-center justify-center space-y-20 overflow-hidden sm:space-y-32 md:space-y-40',
        styles.beams,
      )}
    >
      <div className="relative mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          কোড + বিদ্যালয় = কোডালয়
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
          মাতৃভাষা বাংলায় প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শেখার
          <span className="font-medium text-sky-500 dark:text-sky-400">
            {' '}
            সম্পূর্ণ ফ্রি
          </span>
          , এবং{' '}
          <span className="font-medium text-sky-500 dark:text-sky-400">
            ওপেনসোর্স
          </span>{' '}
          প্লাটফর্ম
        </p>
        <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
          <Link href="/courses">
            <span className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-indigo-600 px-6 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:hover:bg-indigo-500 sm:w-auto">
              শেখা শুরু করুন
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
