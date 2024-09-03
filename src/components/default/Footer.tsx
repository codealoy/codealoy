import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import { footerNavigationData } from '@/config/data';

import { Logo } from '@/components/default/Logo';
import { CircleBlur } from '@/components/patterns/CircleBlur';

export const Footer = () => {
  return (
    <div className="shadow-inner shadow-primary/10">
      <footer className="relative mx-auto w-full max-w-screen-xl space-y-10 overflow-hidden pb-16 lg:max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <Logo variant="icon" className="h-16" />
            </div>
            <nav
              className="mt-8 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {footerNavigationData.links.map((item) => (
                <div key={item.name} className="px-5 py-2">
                  <Link
                    title={item.name}
                    href={item.href}
                    target={item.target ? item.target : '_self'}
                    className="text-base text-slate-500 hover:text-primary dark:text-white"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
            <div className="mt-8 flex justify-center space-x-6">
              {footerNavigationData.social.map((item) => (
                <Link
                  key={item.name}
                  title={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-slate-400 hover:text-primary"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-base text-slate-400">
              কপিরাইট © {dayjs().year()} কোডালয় - সর্বস্বত্ব সংরক্ষিত
              <br />
              পরিচালনায়{' '}
              <a
                href="/#meet-team"
                className="font-bold text-primary hover:underline hover:underline-offset-4"
              >
                কোডালয় টিম
              </a>
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 translate-y-2/3">
          <CircleBlur />
        </div>
      </footer>
    </div>
  );
};
