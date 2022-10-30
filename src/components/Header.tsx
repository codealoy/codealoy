import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '../components/Logo';
import { Search } from '../components/Search';
import { ThemeSelector } from '../components/ThemeSelector';
import { ThemeContext } from '../contexts/ThemeContext';
import { GithubIcon } from './icons/GithubIcon';
import { NavItems } from './NavItems';
import { MobileNavbar } from './MobileNavbar';

export const Header: React.FC<any> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useContext(ThemeContext);
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        {
          'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75':
            isScrolled,
          'dark:bg-transparent': !isScrolled,
        },
      )}
    >
      <div className="relative top-1 flex flex-grow basis-0 items-center">
        <Link href="/">
          <a className="block w-auto overflow-hidden lg:w-auto">
            <Logo variant={theme.isDarkTheme ? 'dark' : 'light'} />
          </a>
        </Link>
      </div>
      <div
        className={clsx('relative ml-auto hidden items-center lg:flex', {
          'md:flex': isHomePage,
        })}
      >
        <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
          <ul className="flex space-x-8">
            <NavItems />
          </ul>
        </nav>
        <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
          <ThemeSelector />
          <a
            href="https://github.com/codealoy/codealoy"
            target="_blank"
            className="group ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Codealoy on GitHub</span>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div
        className={clsx('relative ml-auto  items-center lg:hidden', {
          'md:hidden': isHomePage,
        })}
      >
        <Search />
      </div>
      <MobileNavbar
        className="-my-1 ml-2"
        display={clsx('lg:hidden', { 'md:hidden': isHomePage })}
      />
    </header>
  );
};
