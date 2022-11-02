import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';
import { Prose } from '../components/Prose';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { getTableOfContent } from '../utils/getTableOfContent';
import { useTableOfContents } from '../hooks/useTableOfContent';
import { Tag } from '../components/Tag';
import { NavigationItem } from '../constants/navigations';
import { Router, useRouter } from 'next/router';
import MobileCourseNav from 'src/components/MobileCourseNav';
import { Dialog } from '@headlessui/react';

interface CourseLayoutProps extends MarkdocNextJsPageProps {
  navigationItems: NavigationItem[];
  children?: React.ReactNode;
}

export const CourseLayout: React.FC<CourseLayoutProps> = ({
  markdoc,
  navigationItems = [],
  children,
}) => {
  const {
    title,
    level,
    estimation,
    lessons,
    challenges,
    playgrounds,
    illustrations,
  } = markdoc?.frontmatter!;

  const [navIsOpen, setNavIsOpen] = useState(false);

  const tableOfContents = getTableOfContent({ markdoc });

  const router = useRouter();

  useEffect(() => {
    if (!navIsOpen) return;
    function handleRouteChange() {
      setNavIsOpen(false);
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [navIsOpen]);

  const allLinks = navigationItems.flatMap((section) => section.links);
  const linkIndex = allLinks.findIndex(
    (link) => link && link.href === router.pathname,
  );
  const previousPage = allLinks[linkIndex - 1];
  const nextPage = allLinks[linkIndex + 1];
  const section: any = navigationItems.find(
    (section) =>
      section.links &&
      section.links.find((link) => link.href === router.pathname),
  );
  const currentSection = useTableOfContents(tableOfContents);

  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      <Header />

      {/* <div className=" flex items-center border-t border-b border-slate-900/10 p-4 dark:border-slate-50/[0.06] lg:hidden">
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
              <li className="flex items-center dark:text-white">
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
      </div> */}
      <MobileCourseNav
        navigationItems={navigationItems}
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
        section={section}
      />

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
            <Navigation
              navigationItems={navigationItems}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {(title || section) && (
              <header className="mb-9 space-y-4">
                {section && (
                  <p className="font-display text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {section.title}
                  </p>
                )}
                {title && (
                  <>
                    <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                      {title}
                    </h1>
                    <div className="space-x-2">
                      {level ? <Tag>{level} Level</Tag> : null}
                      {estimation ? <Tag>{estimation}</Tag> : null}
                      {lessons ? <Tag>{lessons} Lessons</Tag> : null}
                      {challenges ? <Tag>{challenges} Challenges</Tag> : null}
                      {playgrounds ? (
                        <Tag>{playgrounds} Playgrounds</Tag>
                      ) : null}
                      {illustrations ? (
                        <Tag>{illustrations} Illustrations</Tag>
                      ) : null}
                    </div>
                  </>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link href={previousPage.href!}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      &larr; {previousPage.title}
                    </a>
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link href={nextPage.href!}>
                    <a className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      {nextPage.title} &rarr;
                    </a>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-sm font-medium text-slate-900 dark:text-white"
                >
                  On this page
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section: any) => (
                    <li key={section.id}>
                      <h3>
                        <Link href={`#${section.id}`}>
                          <a
                            className={clsx(
                              isActive(section)
                                ? 'text-sky-500'
                                : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                            )}
                          >
                            {section.title}
                          </a>
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link href={`#${subSection.id}`}>
                                <a
                                  className={
                                    isActive(subSection)
                                      ? 'text-sky-500'
                                      : 'hover:text-slate-600 dark:hover:text-slate-300'
                                  }
                                >
                                  {subSection.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
