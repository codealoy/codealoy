import Link from 'next/link';

import CourseList from '~/client/components/CourseList';

export const LatestCourses = () => {
  return (
    <div className="relative bg-white px-4 pt-16 pb-20 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-slate-900 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            কোর্সসমূহ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-slate-500 dark:text-slate-300 sm:mt-4">
            এক নজরে কোডালয়ের সর্বশেষ কোর্সসমূহ
          </p>
        </div>
        <div className="mt-12">
          <CourseList limit={3} />
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/courses">
            <div className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-500">
              সব কোর্সগুলো দেখুন
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
