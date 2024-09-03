import React from 'react';
import { MDXContent } from '@content-collections/mdx/react';

import { CoursePage } from '@/types';

import { MDX_COMPONENT_MAP } from '@/lib/mdx';

import { CourseHeader } from '@/components/course/CourseHeader';
import { ScrollArea } from '@/components/ui';

export const CourseContent = (props: {
  page: CoursePage;
  coursePageGroupSeparatorName: string;
}) => {
  const { page, coursePageGroupSeparatorName } = props;

  if (!page?.data.title || !page?.data.description || !page?.data.body) {
    return null;
  }

  return (
    <ScrollArea className="max-h-[90dvh]">
      <div className="max-w-[100dvw] px-4 py-16 md:max-w-full lg:px-8 xl:px-16">
        <article>
          <CourseHeader
            pageTitle={page.data.title}
            pageDescription={page.data.description}
            coursePageGroupSeparatorName={coursePageGroupSeparatorName}
          />
          <hr className="my-12 border-t border-dashed border-primary/25" />
          <div className="prose dark:prose-invert">
            <MDXContent
              code={page?.data.body}
              components={MDX_COMPONENT_MAP as any}
            />
          </div>
        </article>
      </div>
    </ScrollArea>
  );
};
