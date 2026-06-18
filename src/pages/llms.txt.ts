import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { BASE_URL, GITHUB_REPO_LINK } from '@/config/site';

import { absoluteUrl, plainTextResponse } from '@/lib/agentReadable';
import {
  createLessonMap,
  extractCourseSlug,
  getCourseLessons,
  getPublishedCourses,
  organizeLessonsIntoSections,
  readCourseMeta,
} from '@/lib/courses';

// llms.txt — an index of the site for AI assistants, following the
// llmstxt.org convention. Generated from the content collections so it stays
// in sync with the published courses, lessons and blog posts.
export const GET: APIRoute = async () => {
  const lines: string[] = [
    '# কোডালয় (Codealoy)',
    '',
    '> বাংলায় প্রোগ্রামিং আর এজেন্টিক AI ডেভেলপমেন্ট শেখার ওপেন-সোর্স ইন্টার‍্যাক্টিভ প্ল্যাটফর্ম। মূল কথা — AI কোড লেখে, ইঞ্জিনিয়ার সিদ্ধান্ত নেয়।',
    '',
    'Codealoy teaches programming and agentic AI development in Bangla (Bengali): prompting, context engineering, agent orchestration and verification. Each lesson and blog post below is also available as clean markdown — append `.md` to its URL for AI-friendly content.',
    '',
    `সাইট: ${BASE_URL}`,
    '',
  ];

  // Courses + their lessons (clean-markdown links).
  const courses = await getPublishedCourses();

  lines.push('## কোর্স (Courses)', '');
  for (const course of courses) {
    const courseSlug = extractCourseSlug(course.id);
    const overviewUrl = absoluteUrl(`/courses/${courseSlug}`);
    lines.push(
      `- [${course.data.title}](${overviewUrl}): ${course.data.description}`,
    );
  }
  lines.push('');

  for (const course of courses) {
    const courseSlug = extractCourseSlug(course.id);
    const meta = readCourseMeta(courseSlug);
    const lessons = await getCourseLessons(courseSlug);
    const sections = organizeLessonsIntoSections(
      meta,
      createLessonMap(lessons),
    );

    lines.push(`### ${course.data.title} — অধ্যায়সমূহ`, '');
    for (const section of sections) {
      for (const lesson of section.lessons) {
        const mdUrl = absoluteUrl(`/courses/${courseSlug}/${lesson.slug}.md`);
        lines.push(`- [${lesson.title}](${mdUrl}): ${section.title}`);
      }
    }
    lines.push('');
  }

  // Blog posts (clean-markdown links).
  const posts = await getCollection(
    'blog',
    ({ data }) => data.status === 'published',
  );
  posts.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  lines.push('## ব্লগ (Blog)', '');
  for (const post of posts) {
    const mdUrl = absoluteUrl(`/blog/${post.data.slug}.md`);
    lines.push(`- [${post.data.title}](${mdUrl}): ${post.data.description}`);
  }
  lines.push('');

  // Skill artifacts.
  lines.push(
    '## স্কিল (Skills)',
    '',
    `- [স্কিল আর্টিফ্যাক্ট তালিকা](${absoluteUrl('/skills.md')}): কোডালয়ের ইনস্টলযোগ্য স্কিল আর্টিফ্যাক্ট`,
    '',
  );

  // Canon that is planned but not published yet.
  lines.push(
    '## আসন্ন (Upcoming canon)',
    '',
    'এই পেজগুলো এখনো প্রকাশিত হয়নি, শিগগিরই আসছে:',
    '',
    '- ম্যানিফেস্টো (Manifesto) — কোডালয়ের অবস্থান ও দর্শন',
    '- এজেন্টিক ৫০ (Agentic 50) — এজেন্টিক ডেভেলপমেন্ট শেখার রোডম্যাপ',
    '- মাসিক AI ডেভ ডাইজেস্ট (Monthly AI Dev Digest)',
    '',
  );

  // Optional — agents with a limited context budget can skip this section.
  lines.push(
    '## Optional',
    '',
    `- [GitHub রিপোজিটরি](${GITHUB_REPO_LINK}): কোডালয়ের সোর্স কোড ও কন্টেন্ট`,
    '',
  );

  return plainTextResponse(lines.join('\n'));
};
