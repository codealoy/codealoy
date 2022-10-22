import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { GithubIcon } from '../components/icons/GithubIcon';
import { Logo } from '../components/Logo';
import { MobileNavigation } from '../components/MobileNavigation';
import { Search } from '../components/Search';
import { ThemeSelector } from '../components/ThemeSelector';
import { ThemeContext } from '../contexts/ThemeContext';

interface HeaderProps {
  navigation: any;
}

export const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useContext(ThemeContext);

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
      <div className="mr-6 lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/">
          <a className="block w-10 overflow-hidden lg:w-auto">
            <span className="sr-only">Home page</span>
            <Logo variant={theme.isDarkTheme ? 'dark' : 'light'} />
          </a>
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex basis-0 justify-end space-x-6 sm:space-x-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <Link href="https://github.com">
          <a className="group">
            <span className="sr-only">GitHub</span>
            <GithubIcon />
          </a>
        </Link>
      </div>
    </header>
  );
};
