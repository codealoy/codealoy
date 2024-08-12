import React from 'react';
import { notFound } from 'next/navigation';

import { getPage, pageTree } from '@/lib/mdx';
import {
  getCoursePageGroupSeparatorName,
  getCoursePageNavigationTree,
} from '@/lib/utils';

import { CourseContent, CourseNavbar } from '@/components/course';

export default function CoursePage({
  params,
}: {
  params: { courseSlugs?: string[] };
}) {
  const page = getPage(params.courseSlugs);

  console.log(`🐞🐞🐞 courseSlugs`, params.courseSlugs);

  if (!page) {
    notFound();
  }

  const coursePageNavigationTree = getCoursePageNavigationTree({
    page,
    pageTree,
  }) as any;

  const coursePageGroupSeparatorName = getCoursePageGroupSeparatorName({
    coursePageNavigationTree: coursePageNavigationTree,
    pageTitle: page?.data.title,
  });

  return (
    <section className="grid max-w-full auto-cols-auto grid-flow-col">
      <CourseNavbar coursePageNavigationTree={coursePageNavigationTree} />
      <CourseContent
        page={page}
        coursePageGroupSeparatorName={coursePageGroupSeparatorName}
      />
    </section>
  );
}
