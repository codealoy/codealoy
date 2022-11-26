import React from 'react';
import { BlogPosts } from '../BlogPosts';

export const LatestBlogPosts = () => {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 dark:border-t dark:border-slate-100/5 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-slate-900 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-300 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12">
          <BlogPosts limit={3} />
        </div>
      </div>
    </div>
  );
};
