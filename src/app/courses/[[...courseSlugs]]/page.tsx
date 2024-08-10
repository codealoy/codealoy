'use client';

import { notFound } from 'next/navigation';
import { MDXContent } from '@content-collections/mdx/react';
import Link from 'fumadocs-core/link';
import { useSetAtom } from 'jotai';
import slugify from 'slugify';

import { getPage, pageTree } from '@/lib/mdx/source';
import { coursePageNavigationAtom } from '@/lib/store/atom';

import { CourseNavbar } from '@/components/course/CourseNavbar';
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
  const page = getPage(params.courseSlugs);

  console.log('page', JSON.stringify(page));

  if (!page) {
    notFound();
  }

  const coursePageNavigationtree = getCoursePageNavigationTree(page) as any;

  const setCoursePageNavigationTree = useSetAtom(coursePageNavigationAtom);

  if (coursePageNavigationtree) {
    setCoursePageNavigationTree(coursePageNavigationtree);
  }

  return (
    <section className="grid max-w-full grid-cols-1 lg:grid-cols-[300px_1fr]">
      <div className="hidden lg:block">
        <CourseNavbar />
      </div>

      <ScrollArea className="max-h-[90dvh]">
        <div className="max-w-[100dvw] px-4 py-16 md:max-w-full lg:px-8 xl:px-16">
          <article>
            <header className="mb-9 space-y-4">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
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
