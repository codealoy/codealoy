import { Dialog } from '@headlessui/react';
import React from 'react';
import { Navigation } from './Navigation';

export const MobileCourseNav = ({
  navigationItems,
  navIsOpen,
  setNavIsOpen,
  section,
}) => {
  return (
    <div className="fixed z-10 flex w-full items-center border-t border-b border-slate-900/10 bg-white p-4 dark:border-slate-50/[0.06] dark:bg-slate-900/95 dark:backdrop-blur lg:hidden">
      <button
        type="button"
        onClick={() => setNavIsOpen(!navIsOpen)}
        className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span className="sr-only">Navigation</span>
        <svg width="24" height="24">
          <path
            d="M5 6h14M5 12h14M5 18h14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <Dialog
        as="div"
        open={navIsOpen}
        onClose={() => setNavIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto lg:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
        <div className="relative w-80 max-w-[calc(100%-3rem)] bg-white p-6 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setNavIsOpen(false)}
            className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          >
            <span className="sr-only">Close navigation</span>
            <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 overflow-visible">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Navigation navigationItems={navigationItems} />
        </div>
      </Dialog>

      <>
        <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
          {section && (
            <li className="flex items-center dark:text-slate-400">
              {section.title}
              <svg
                width="3"
                height="6"
                aria-hidden="true"
                className="mx-3 overflow-visible text-slate-400"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </li>
          )}

          <li className="truncate font-semibold text-slate-900 dark:text-slate-200">
            {section.links[0].title}
          </li>
        </ol>
      </>
    </div>
  );
};
