import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

import { HiOutlineUserGroup } from 'react-icons/hi';

const navigation = {
  main: [
    { name: 'কোর্সসমুহ', href: '/courses' },
    { name: 'ব্লগ', href: '/blog' },
    {
      name: 'ফোরাম',
      href: 'https://github.com/codealoy/codealoy/discussions',
      target: '_blank',
    },
    {
      name: 'যোগাযোগ',
      href: 'mailto:support@codealoy.com',
      target: '_blank',
    },
  ],
  social: [
    {
      name: 'ফেসবুক পেইজ',
      href: 'https://www.facebook.com/codealoy',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'ফেসবুক গ্রুপ',
      href: 'https://www.facebook.com/groups/codealoy',
      icon: HiOutlineUserGroup,
    },
    {
      name: 'টুইটার',
      href: 'https://twitter.com/codealoy',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'গিঁটহাব',
      href: 'https://github.com/codealoy/codealoy',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-white dark:border-t dark:border-slate-100/5 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                title={item.name}
                href={item.href}
                target={item.target ? item.target : '_self'}
                className="text-base text-slate-500 hover:text-indigo-700 dark:text-white dark:hover:text-indigo-400"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              title={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-slate-400">
          কপিরাইট © {dayjs().year()} কোডালয় - সর্বস্বত্ব সংরক্ষিত
          <br />
          পরিচালনায় <span className="text-red-600">♥</span> এর সাথে{' '}
          {/* this a tag is required to enable smooth scrolling */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/#meet-team"
            className="hosver:text-sky-500 dark:hover:text-sky-400"
          >
            কোডালয় টিম
          </a>
        </p>
      </div>
    </footer>
  );
};
