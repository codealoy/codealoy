import React from 'react';
import { Disclosure } from '@headlessui/react';

const courseList = [
  {
    title: 'Introduction to HTML',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
  {
    title: 'Introduction to CSS',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
  {
    title: 'Introduction to JavaScript',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
  {
    title: 'Learn NodeJS',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
  {
    title: 'Mastering React',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
  {
    title: 'Git and Github',
    description:
      'এই কোর্সে জাভাস্ক্রিপ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের সাধারণ এবং অ্যাডভ্যান্সড লেভেলের বৈচিত্র্যময় ব্যবহার এবং সাথে বেস্ট প্র্যাকটিস নিয়ে আলোচনা থাকছে',
    courseUrl: '#',
    level: 'হাতেখড়ি',
    chapters: '০৪',
    score: '১০০',
    coverImage: 'https://picsum.photos/400',
  },
];

type searchData = string | null;

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<searchData>('');

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  const searchData = (searchQuery: string | null, courseList: any) => {
    if (searchQuery) {
      return courseList.filter((data: any) => {
        return data.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());
      });
    }
    return courseList;
  };

  const filterData = searchData(searchQuery, courseList);

  return (
    <div className="relative mx-auto mb-20 min-h-screen max-w-8xl bg-white px-4 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12">
      <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Course Catalog
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400">
          Want to learn something new? Don&apos;t get rid of anything, just put
          it in really really nice looking containers.
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
                placeholder="Search course by title"
                required
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  search(e);
                }}
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </Disclosure>

      {/* Course List */}
      <div className="mt-10">
        <ul
          role="list"
          className="mx-6 grid grid-cols-1 gap-8 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3"
        >
          {(searchQuery ? filterData : courseList).map((course) => (
            <li
              key={course.title}
              className="col-span-1 divide-y divide-slate-200 rounded-lg bg-white shadow ring-1 ring-slate-100/80 dark:rounded-lg dark:shadow-lg dark:ring-0"
            >
              <div className="rounded-lg border border-slate-200 bg-white text-center shadow  dark:rounded-lg dark:border-none dark:bg-slate-800 dark:shadow-lg">
                <a href="#">
                  <img
                    className="h-56 w-full rounded-t-lg object-cover grayscale"
                    src={course.coverImage}
                    alt={course.title}
                    loading="lazy"
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold text-slate-700 dark:text-white">
                      {course.title}
                    </h5>
                  </a>

                  <hr className="mx-auto w-16 border-t-4 border-indigo-500" />

                  <div className="flex justify-center space-x-6 pt-4 lg:pt-6">
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">লেভেল</p>
                      <p className="pt-2 text-sm font-bold text-slate-600">
                        {course.level}
                      </p>
                    </span>
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">অধ্যায়</p>
                      <p className="pt-2 text-sm font-bold text-slate-600">
                        {course.chapters}
                      </p>
                    </span>
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">স্কোর</p>
                      <p className="pt-2 text-sm font-bold text-slate-600">
                        {course.score}
                      </p>
                    </span>
                  </div>
                  <p className="m-4 font-normal text-slate-700 dark:text-slate-400">
                    {course.description}
                  </p>

                  <button className="group relative my-3 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                    <span className="relative rounded-md bg-white px-4 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                      বিস্তারিত
                    </span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoursesPage;
