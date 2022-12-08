import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { MobileCourseNav } from '../components/MobileCourseNav';
import { Navigation } from '../components/Navigation';
import { Prose } from '../components/Prose';
import { Tag } from '../components/Tag';
import { NavigationItem } from '../constants/navigations';
import { useTableOfContents } from '../hooks/useTableOfContent';
import { getTableOfContent } from '../utils/getTableOfContent';

interface CourseLayoutProps extends MarkdocNextJsPageProps {
  navigationItems: NavigationItem[];
  children?: React.ReactNode;
}

const CourseContent: React.FC<{ content: any }> = ({ content }) => {
  const router = useRouter();

  const [lastScrolledPath, setLastScrolledPath] = useState(router.pathname);

  useEffect(() => {
    const shouldScrollToSubSection = router.asPath.includes('#');
    if (!shouldScrollToSubSection) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1);
    }
  }, [lastScrolledPath, router.asPath]);

  useEffect(() => {
    const currentFilePath = router.pathname;
    if (currentFilePath !== lastScrolledPath) {
      setLastScrolledPath(currentFilePath);
    }
  }, [lastScrolledPath, router.pathname]);

  return (
    <div style={{ overflowAnchor: 'none' }}>
      <Prose>{content}</Prose>;
    </div>
  );
};

const CourseTags: React.FC<{ tags: Record<string, any> }> = ({ tags }) => {
  const { level, estimation, lessons, challenges, playgrounds, illustrations } =
    tags;

  const tagList = [
    level,
    lessons,
    estimation,
    playgrounds,
    challenges,
    illustrations,
  ].filter(Boolean);

  return (
    <div className="mr-2">
      {tagList.map((tag, index) => (
        <Tag
          key={index}
          className={index !== tagList.length - 1 ? 'mr-2' : ''}
        >{`${tag}`}</Tag>
      ))}
    </div>
  );
};

export const CourseLayout: React.FC<CourseLayoutProps> = ({
  markdoc,
  navigationItems = [],
  children,
}) => {
  const { title } = markdoc?.frontmatter!;

  const tableOfContents = getTableOfContent({ markdoc });

  const router = useRouter();

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
    <div>
      <Header />
      <div className="sticky top-[75.5px] z-10 dark:backdrop-blur md:top-[84px]">
        <MobileCourseNav navigationItems={navigationItems} section={section} />
      </div>
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
                    <CourseTags tags={markdoc?.frontmatter! || {}} />
                  </>
                )}
              </header>
            )}
            <CourseContent content={children} />
          </article>
          <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link href={previousPage.href!}>
                    <span className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      &larr; {previousPage.title}
                    </span>
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
                    <span className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                      {nextPage.title} &rarr;
                    </span>
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
                        <a
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'text-sky-500'
                              : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                          )}
                        >
                          {section.title}
                        </a>
                      </h3>
                      {section.children.length > 0 && (
                        <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <a
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? 'text-sky-500'
                                    : 'hover:text-slate-600 dark:hover:text-slate-300'
                                }
                              >
                                {subSection.title}
                              </a>
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
    </div>
  );
};
