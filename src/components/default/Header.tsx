import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import { GITHUB_REPO_LINK } from '@/config/site';

import { Logo } from '@/components/default/Logo';
import { MobileNavbar } from '@/components/default/MobileNavbar';
import { PrimaryNavItems } from '@/components/default/PrimaryNavItems';
import { ThemeToggle } from '@/components/default/ThemeToggle';

export const Header: React.FC<any> = () => {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white/90 px-3 py-3 shadow-md shadow-primary/10 backdrop-blur-lg transition-all duration-500 md:px-6 lg:px-8 dark:bg-dark/95 dark:[@supports(backdrop-filter:blur(0))]:bg-dark/75">
      <MobileNavbar className="absolute left-2" />
      <div className="relative flex flex-grow basis-0 items-center justify-center overflow-hidden md:ml-0 md:justify-start">
        <Link href="/">
          <Logo variant="text" className="h-7" />
        </Link>
      </div>
      <div className="relative ml-auto hidden items-center md:flex lg:flex">
        <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-10">
            <PrimaryNavItems />
          </ul>
        </nav>
      </div>
      <div className="absolute right-2 flex items-center border-gray-200 md:relative md:ml-6 md:border-l md:pl-3 dark:border-dark-light">
        <ThemeToggle />
        <Link
          href={GITHUB_REPO_LINK}
          target="_blank"
          className="group flex h-10 w-10 items-center justify-center rounded-md text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary dark:hover:text-slate-300"
          rel="noreferrer"
        >
          <span className="sr-only">Codealoy on GitHub</span>
          <FaGithub className="h-5 w-5 fill-slate-400 group-hover:fill-primary" />
        </Link>
      </div>
    </header>
  );
};
