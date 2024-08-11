'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { useWindowSize } from '@uidotdev/usehooks';
import { useSetAtom } from 'jotai';

import { getPage, pageTree } from '@/lib/mdx/source';
import { coursePageNavigationAtom } from '@/lib/store/atom';
import {
  cn,
  getCoursePageGroupSeparatorName,
  getCoursePageNavigationTree,
} from '@/lib/utils';

import { CourseContent, CourseNavbar } from '@/components/course';

export default function CoursePage({
  params,
}: {
  params: { courseSlugs?: string[] };
}) {
  const { width } = useWindowSize();
  const [isCourseNavbarOpen, setIsCourseNavbarOpen] = React.useState(true);
  const page = getPage(params.courseSlugs);

  if (!page) {
    notFound();
  }

  React.useEffect(() => {
    if (width && width < 1024) {
      setIsCourseNavbarOpen(false);
    }
  }, [width]);

  const coursePageNavigationtree = getCoursePageNavigationTree({
    page,
    pageTree,
  }) as any;

  const setCoursePageNavigationTree = useSetAtom(coursePageNavigationAtom);

  if (coursePageNavigationtree) {
    setCoursePageNavigationTree(coursePageNavigationtree);
  }

  const coursePageGroupSeparatorName = getCoursePageGroupSeparatorName({
    coursePageNavigationtree,
    pageTitle: page?.data.title,
  });

  return (
    <section
      className={cn(
        'grid max-w-full transition-all duration-500',
        isCourseNavbarOpen ? 'grid-cols-[300px,1fr]' : 'grid-cols-[0,1fr]',
      )}
    >
      <CourseNavbar
        isCourseNavbarOpen={isCourseNavbarOpen}
        setIsCourseNavbarOpen={setIsCourseNavbarOpen}
      />
      <CourseContent
        page={page}
        coursePageGroupSeparatorName={coursePageGroupSeparatorName}
      />
    </section>
  );
}
