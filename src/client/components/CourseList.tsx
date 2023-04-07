import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import coverImageBlurDataUrl from '~/client/images/common/cover-image-blur';

const DEFAULT_COURSE_COVER =
  'https://images.unsplash.com/photo-1556037757-40496ad2fbc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80';
const DEFAULT_COURSE_DESCRIPTION = 'কোর্স বিবরণ শীঘ্রই আসছে';

interface CourseListProps {
  limit?: number;
  searchQuery?: string | any;
}

const courseList = [
  {
    title: 'প্রোগ্রামিং সমস্যা সমাধানের হাতেখড়ি',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '/courses/learn-problem-solving-basic',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
  {
    title: 'সফটওয়্যার ইঞ্জিনিয়ারিং ক্যারিয়ার গাইডলাইন',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '#',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
  {
    title: 'ইন্টারভিউ প্রস্তুতি গাইডলাইন',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '#',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
  {
    title: 'ওয়েব ডেভলপমেন্ট হাতেখড়ি',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '#',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
  {
    title: 'মাস্টারিং (ReactJS)',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '#',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
  {
    title: 'গিট, গিটহাব এবং ওপেনসোর্স',
    description: DEFAULT_COURSE_DESCRIPTION,
    href: '#',
    level: '০১',
    chapters: '০০',
    score: '১০০',
    coverImage: DEFAULT_COURSE_COVER,
    isPublished: false,
  },
];
const CourseList: React.FC<CourseListProps> = ({ searchQuery, limit }) => {
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
    <div className="mt-10">
      <ul
        role="list"
        className="mx-6 grid grid-cols-1 gap-8 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3"
      >
        {(limit ? filterData.slice(0, limit) : filterData).map((course) => (
          <li
            key={course.title}
            className="col-span-1 divide-y divide-slate-200 rounded-lg bg-white shadow ring-1 ring-slate-100/80 dark:rounded-lg dark:shadow-lg dark:ring-0"
          >
            <div className="rounded-lg border border-slate-200 bg-white text-center shadow  dark:rounded-lg dark:border-none dark:bg-slate-800 dark:shadow-lg">
              <Link href={course.href}>
                <div className="w-full overflow-hidden rounded-t-lg object-cover">
                  <Image
                    src={course.coverImage}
                    alt={course.title}
                    width={500}
                    height={250}
                    placeholder="blur"
                    loading="lazy"
                    blurDataURL={coverImageBlurDataUrl}
                  />
                </div>
              </Link>
              <div className="h-80 p-5">
                <Link href={course.href}>
                  <h5 className="mb-2 text-xl font-bold text-slate-700 dark:text-white">
                    {course.title}
                  </h5>
                </Link>
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
                <p className="m-4 text-center font-normal text-slate-700 dark:text-slate-400">
                  {course.description}
                </p>

                <Link href={course.href}>
                  <span className="group relative my-3 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-slate-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
                    <span className="relative rounded-md bg-white px-4 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-900">
                      {course.isPublished ? 'বিস্তারিত' : 'শীঘ্রই আসছে'}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CourseList };
