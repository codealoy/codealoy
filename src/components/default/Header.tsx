import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FaGithub } from 'react-icons/fa';

import { Logo } from '@/components/default/Logo';
import { PrimaryNavItems } from '@/components/default/PrimaryNavItems';
import { ThemeToggle } from '@/components/default/ThemeToggle';
import { GITHUB_REPO_LINK } from '@/config/site';
// import { MobileNavbar } from '@/components/default/MobileNavbar';

export const Header: React.FC<any> = () => {
  const isHomePage = true;

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white/10 px-4 py-3 shadow-md shadow-slate-900/5 backdrop-blur-lg transition-all duration-500 sm:px-6 lg:px-8 dark:bg-dark/95 dark:shadow-white/5 dark:[@supports(backdrop-filter:blur(0))]:bg-dark/75',
      )}
    >
      <div className="relative flex flex-grow basis-0 items-center overflow-hidden">
        <Link href="/">
          <Logo varient="text" className="h-7" />
        </Link>
      </div>
      <div
        className={clsx('relative ml-auto hidden items-center lg:flex', {
          'md:flex': isHomePage,
        })}
      >
        <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-10">
            <PrimaryNavItems />
          </ul>
        </nav>
        <div className="ml-6 flex items-center border-l border-gray-200 pl-6 dark:border-gray-800">
          {/* <ThemeSelector iconOnly={true} /> */}
          <ThemeToggle />
          <Link
            href={GITHUB_REPO_LINK}
            target="_blank"
            className="group flex h-10 w-10 items-center justify-center text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            rel="noreferrer"
          >
            <span className="sr-only">Codealoy on GitHub</span>
            <FaGithub className="h-5 w-5 fill-slate-400 group-hover:fill-primary" />
          </Link>
        </div>
      </div>
      <div
        className={clsx('relative ml-auto items-center lg:hidden', {
          'md:hidden': isHomePage,
        })}
      >
        {/* <Search /> */}
      </div>
      {/* <MobileNavbar
        className="-my-1 ml-2"
        display={clsx('lg:hidden', { 'md:hidden': isHomePage })}
      /> */}
    </header>
  );
};
