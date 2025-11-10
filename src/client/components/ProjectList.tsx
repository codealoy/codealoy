import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import coverImageBlurDataUrl from '~/client/images/common/cover-image-blur';
interface ProjectListProps {
  limit?: number;
  searchQuery?: string | any;
}

const projectList = [
  {
    title: 'Age calculator app',
    description:
      "A If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    href: '/courses/learn-problem-solving-basic',

    isPublished: false,
  },
  {
    title: 'Workit landing page',
    description:
      "B If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
    href: '#',

    isPublished: false,
  },
  {
    title: 'Result summary component',
    description:
      ' An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.',
    href: '#',

    isPublished: false,
  },
  {
    title: 'Multi-step form',
    description:
      "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
    href: '#',

    isPublished: false,
  },
  {
    title: 'Advice generator app',
    description:
      'A perfect project for newbies who are starting to build confidence with layouts!',
    href: '#',

    isPublished: false,
  },
  {
    title: 'IP Address Tracker',
    description:
      'An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.',
    href: '#',

    isPublished: false,
  },
];
const ProjectList: React.FC<ProjectListProps> = ({ searchQuery, limit }) => {
  const searchData = (searchQuery: string | null, projectList: any) => {
    if (searchQuery) {
      return projectList.filter((data: any) => {
        return data.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim());
      });
    }
    return projectList;
  };

  const filterData = searchData(searchQuery, projectList);

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
            <div className="rounded-lg border border-slate-200 bg-white text-center shadow dark:rounded-lg dark:border-none dark:bg-slate-800 dark:shadow-lg">
              <Link href={course.href}>
                <div className="w-full overflow-hidden rounded-t-lg object-cover">
                  <Image
                    className=" w-[500px] h-[250px]"
                    src={
                      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                    }
                    alt={course.title}
                    width={500}
                    height={200}
                    placeholder="blur"
                    loading="lazy"
                    blurDataURL={coverImageBlurDataUrl}
                  />
                </div>
              </Link>
              <div className="h-64 p-5 text-left">
                <Link href={course.href}>
                  <h5 className="mb-2 text-xl font-bold text-slate-700 dark:text-white">
                    {course.title}
                  </h5>
                </Link>
                <div className="flex justify-between items-center lg:pt-6">
                  <div className="flex space-x-6">
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">HTML</p>
                    </span>
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">CSS</p>
                    </span>
                    <span className="">
                      <p className="text-sm font-bold text-slate-400">Js</p>
                    </span>
                  </div>

                  <div className="flex">
                    <span className="h-5 mr-0.5 text-center flex ring-1 ring-blue-400 px-2 bg-blue-400 text-white dark:text-white dark:bg-blue-400 rounded-l-sm group-hover:bg-opacity-0">
                      2
                    </span>
                    <button className="ring-1 h-5 w-15  px-2 flex dark:text-white items-center justify-center text-xs font-medium">
                      Advanced
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-left font-normal text-slate-700 dark:text-slate-400">
                  {course.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProjectList };
