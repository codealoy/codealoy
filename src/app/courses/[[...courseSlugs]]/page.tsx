'use client';

import { MDXContent } from '@content-collections/mdx/react';
import Link from 'fumadocs-core/link';
import { useSetAtom } from 'jotai';
import { notFound } from 'next/navigation';
import slugify from 'slugify';

import { getPage, pageTree } from '@/lib/mdx/source';
import { coursePageNavigationAtom } from '@/lib/store/atom';

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

const getSeparatorName = (navTree: any) => {};

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
    <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article>
        <header className="mb-9 space-y-4">
          <h1 className="font-display text-3xl tracking-tight">
            {page?.data.title}
          </h1>
          <p className="text-base">{page?.data.description}</p>
        </header>
        <hr className="border-t border-primary/25 border-dashed my-12" />
        <MDXContent
          code={page?.data.body}
          components={{
            Link,
          }}
        />
      </article>
    </div>
  );
}
