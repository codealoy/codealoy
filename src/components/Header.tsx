import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { Dialog } from '@headlessui/react';
import { Logo } from '../components/Logo';
import { Search } from '../components/Search';
import { ThemeSelector } from '../components/ThemeSelector';
import { ThemeContext } from '../contexts/ThemeContext';

export function NavPopover({ display = 'lg:hidden', className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    function handleRouteChange() {
      setIsOpen(false);
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [isOpen]);

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        className={clsx('fixed inset-0 z-50', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />

        <div className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400">
          <button
            type="button"
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="h-2.5 w-2.5 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
            <li>
              <a
                href="https://github.com/codealoy/codealoy"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="mt-6 flex justify-between border-t border-slate-200 pt-6 dark:border-slate-200/10">
            <span> Select Theme</span> <ThemeSelector />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
export function NavItems() {
  return (
    <>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Docs</a>
        </Link>
      </li>
      <li>
        <a
          href="https://tailwindui.com/?ref=top"
          className="hover:text-sky-500 dark:hover:text-sky-400"
        >
          Components
        </a>
      </li>
      <li>
        <Link href="/blog">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/showcase">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">
            Showcase
            <span className="ml-2 rounded-full bg-sky-400/10 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600  dark:text-sky-400">
              New
            </span>
          </a>
        </Link>
      </li>
    </>
  );
}
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
      <div className="relative flex flex-grow basis-0 items-center">
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
          <ThemeSelector panelClassName="mt-8" />
          <a
            href="https://github.com/codealoy/codealoy"
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <span className="sr-only"> GitHub</span>
            <svg
              viewBox="0 0 16 16"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
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
      <NavPopover
        className="-my-1 ml-2"
        display={clsx('lg:hidden', { 'md:hidden': isHomePage })}
      />
    </header>
  );
};
