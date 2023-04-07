import { Disclosure } from '@headlessui/react';
import React from 'react';

import CourseList from '~/client/components/CourseList';

type searchData = string | null;

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<searchData>('');

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative mx-auto mb-20 min-h-screen max-w-8xl bg-white px-4 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12">
      <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          কোর্সসমূহ
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400">
          কোডালয়ের সর্বশেষ কোর্সসমূহ
        </p>
      </div>

      {/* Search */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="flex items-center justify-center border-t border-b border-slate-200 py-4 dark:border-slate-800"
      >
        <div className="w-full sm:w-10/12 lg:w-1/2">
          <form>
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-slate-900 dark:text-slate-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-500 dark:text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-4 pl-10 text-sm text-slate-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="কোর্স টাইটেল দিয়ে সার্চ করুন"
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  search(e);
                }}
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                সার্চ করুন
              </button>
            </div>
          </form>
        </div>
      </Disclosure>

      {/* Course List */}
      <CourseList searchQuery={searchQuery} />
    </div>
  );
};

export default CoursesPage;
