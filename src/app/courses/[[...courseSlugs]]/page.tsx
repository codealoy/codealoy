import React from 'react';
import { notFound } from 'next/navigation';

import { getPage } from '@/lib/mdx';
import {
  getAllCoursePagesSlugs,
  getCoursePageGroupSeparatorName,
  getCoursePageNavigationTree,
} from '@/lib/utils';

import { CourseContent, CourseNavbar } from '@/components/course';

// Get all course pages slugs on build time to generate static pages
export function generateStaticParams() {
  return getAllCoursePagesSlugs();
}

export default function CoursePage({
  params,
}: {
  params: { courseSlugs?: string[] };
}) {
  const page = getPage(params.courseSlugs);

  if (!page) {
    notFound();
  }

  const coursePageNavigationTree = getCoursePageNavigationTree({
    page,
  });

  if (!coursePageNavigationTree) {
    throw new Error('Course page navigation tree not found');
  }

  const coursePageGroupSeparatorName = getCoursePageGroupSeparatorName({
    coursePageNavigationTree,
    pageTitle: page?.data.title,
  });

  return (
    <section className="grid max-w-full grid-flow-col grid-cols-[auto_1fr]">
      <CourseNavbar coursePageNavigationTree={coursePageNavigationTree} />
      <CourseContent
        page={page}
        coursePageGroupSeparatorName={coursePageGroupSeparatorName}
      />
    </section>
  );
}
