import Link from 'next/link';

import { BookOpenIcon, HomeIcon, RssIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const links = [
  {
    title: 'হোম',
    description: 'আমাদের সম্পর্কে বিস্তারিত জানুন',
    icon: HomeIcon,
    link: '/',
  },
  {
    title: 'কোর্সসমূহ',
    description: 'আমাদের কোর্সসমূহ সম্পর্কে বিস্তারিত জানুন',
    icon: BookOpenIcon,
    link: '/courses',
  },
  {
    title: 'ব্লগ',
    description: 'আমাদের ব্লগ পোস্ট পড়ুন',
    icon: RssIcon,
    link: '/blog',
  },
];

const ErrorPage = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              এই পৃষ্ঠা খুজে পাওয়া যায়নি
            </h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
              আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান না। নিচে কিছু জনপ্রিয়
              পৃষ্ঠার তালিকা দেওয়া হলো যা আপনি ঘুরে দেখতে পারেন।
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-white">
              জনপ্রিয় পৃষ্ঠাগুলি
            </h2>
            <ul
              role="list"
              className="mt-4 divide-y divide-slate-200 dark:divide-slate-800"
            >
              {links.map((link) => (
                <li
                  key={link.title}
                  className="relative flex items-start space-x-4 py-6"
                >
                  <div className="flex-shrink-0">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-700">
                      <link.icon
                        className="h-6 w-6 text-indigo-700 dark:text-indigo-50"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-slate-900 dark:text-white">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                        <Link href={link.link} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </Link>
                      </span>
                    </h3>
                    <p className="text-base text-slate-700 dark:text-slate-400">
                      {link.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 self-center">
                    <ChevronRightIcon
                      className="h-5 w-5 text-slate-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/">
                <span className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                  অথবা হোম পেইজে ফিরে যান<span aria-hidden="true"> &rarr;</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
