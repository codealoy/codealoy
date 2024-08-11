'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { MDXContent } from '@content-collections/mdx/react';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'fumadocs-core/link';
import { useSetAtom } from 'jotai';
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from 'react-icons/tb';
import slugify from 'slugify';

import { getPage, pageTree } from '@/lib/mdx/source';
import { coursePageNavigationAtom } from '@/lib/store/atom';
import { cn } from '@/lib/utils';

import { CourseNavbar } from '@/components/course/CourseNavbar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/ScrollArea';

// FIX: page type
const getCoursePageNavigationTree = (page: any) => {
  const folderName = page.file.dirname || '';

  if (!folderName) {
    return null;
  }

  console.log('pageTree', JSON.stringify(pageTree));

  const navigationTree = pageTree.children.find(
    (item) =>
      item.type === 'folder' &&
      typeof item.name === 'string' &&
      slugify(item.name.toLowerCase()) === folderName,
  );

  return navigationTree;
};

export default function CoursePage({
  params,
}: {
  params: { courseSlugs?: string[] };
}) {
  const { width } = useWindowSize();
  const [isCourseNavbarOpen, setIsCourseNavbarOpen] = React.useState(true);
  const page = getPage(params.courseSlugs);

  console.log('page', JSON.stringify(page));

  if (!page) {
    notFound();
  }

  React.useEffect(() => {
    if (width && width < 1024) {
      setIsCourseNavbarOpen(false);
    }
  }, [width]);

  const coursePageNavigationtree = getCoursePageNavigationTree(page) as any;

  const setCoursePageNavigationTree = useSetAtom(coursePageNavigationAtom);

  if (coursePageNavigationtree) {
    setCoursePageNavigationTree(coursePageNavigationtree);
  }

  return (
    <section
      className={cn(
        'grid max-w-full transition-all duration-500',
        isCourseNavbarOpen ? 'grid-cols-[300px,1fr]' : 'grid-cols-[0,1fr]',
      )}
    >
      <div className="relative">
        <CourseNavbar />
        <div
          className={cn(
            'absolute top-2 z-30 flex size-10 cursor-pointer items-center justify-center rounded transition-all duration-500',
            isCourseNavbarOpen ? 'right-0' : '-right-9',
          )}
        >
          <Button
            aria-label="Toggle sidebar"
            variant="icon"
            size="icon"
            onClick={() => setIsCourseNavbarOpen(!isCourseNavbarOpen)}
          >
            {isCourseNavbarOpen ? (
              <TbLayoutSidebarLeftCollapse className="size-8 stroke-1 text-primary" />
            ) : (
              <TbLayoutSidebarLeftExpand className="size-8 stroke-1 text-primary" />
            )}
          </Button>
        </div>
      </div>

      <ScrollArea className="max-h-[90dvh]">
        <div className="max-w-[100dvw] px-4 py-16 md:max-w-full lg:px-8 xl:px-16">
          <article>
            <header className="mb-9 space-y-4">
              <h1 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl dark:text-slate-200">
                {page?.data.title}
              </h1>
              <p className="text-base">{page?.data.description}</p>
            </header>
            <hr className="my-12 border-t border-dashed border-primary/25" />
            <div className="prose dark:prose-invert">
              <MDXContent
                code={page?.data.body}
                components={{
                  Link,
                }}
              />
            </div>
          </article>
        </div>
      </ScrollArea>
    </section>
  );
}
