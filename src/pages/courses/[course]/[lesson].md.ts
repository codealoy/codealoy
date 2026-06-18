import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';

import { buildContentMarkdown, markdownResponse } from '@/lib/agentReadable';
import { getLessonPaths } from '@/lib/courses';

// Clean-markdown endpoint for lessons, e.g.
// /courses/learn-problem-solving-basic/1-welcome.md
export async function getStaticPaths() {
  return await getLessonPaths();
}

export const GET: APIRoute = async ({ props }) => {
  const { courseSlug, lessonSlug } = props as {
    courseSlug: string;
    lessonSlug: string;
  };

  const course = await getEntry('courses', courseSlug);
  const lesson = await getEntry('lessons', `${courseSlug}/${lessonSlug}`);

  if (!lesson) {
    return new Response('Not found', { status: 404 });
  }

  const markdown = buildContentMarkdown({
    title: lesson.data.title,
    description: lesson.data.description,
    body: lesson.body ?? '',
    canonicalPath: `/courses/${courseSlug}/${lessonSlug}`,
    meta: {
      কোর্স: course?.data.title,
    },
  });

  return markdownResponse(markdown);
};
