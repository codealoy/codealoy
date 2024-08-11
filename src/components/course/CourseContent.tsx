import React from 'react';
import { MDXContent } from '@content-collections/mdx/react';
import Link from 'fumadocs-core/link';

import { CourseHeader } from '@/components/course/CourseHeader';
import { ScrollArea } from '@/components/ui/ScrollArea';

export const CourseContent = (props: {
  page: any;
  coursePageGroupSeparatorName: string;
}) => {
  const { page, coursePageGroupSeparatorName } = props;

  return (
    <ScrollArea className="max-h-[90dvh]">
      <div className="max-w-[100dvw] px-4 py-16 md:max-w-full lg:px-8 xl:px-16">
        <article>
          <CourseHeader
            page={page}
            coursePageGroupSeparatorName={coursePageGroupSeparatorName}
          />
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
  );
};