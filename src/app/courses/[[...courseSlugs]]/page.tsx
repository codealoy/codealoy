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
    <article className="min-h-full px-6 py-12">
      <MDXContent
        code={page?.data.body}
        components={{
          Link,
        }}
      />
    </article>
  );
}
