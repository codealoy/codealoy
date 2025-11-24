import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import type { CourseMeta, LessonSection } from '@/lib/types/course';

/**
 * Get the file path to a course's meta.json file
 */
export function getCourseMetaPath(courseSlug: string): string {
  return join(
    process.cwd(),
    'src',
    'content',
    'courses',
    courseSlug,
    'meta.json',
  );
}

/**
 * Read and parse a course's meta.json file
 */
export function readCourseMeta(courseSlug: string): CourseMeta | null {
  const metaPath = getCourseMetaPath(courseSlug);

  try {
    const metaContent = readFileSync(metaPath, 'utf-8');
    return JSON.parse(metaContent) as CourseMeta;
  } catch (error) {
    console.error(`Failed to read meta.json for course ${courseSlug}:`, error);
    return null;
  }
}

/**
 * Check if a page is a valid lesson (not a section header or index)
 */
export function isValidLessonPage(page: string): boolean {
  return !page.startsWith('---') && page !== 'index';
}

/**
 * Extract course slug from course id
 * Example: "learn-problem-solving-basic/index" -> "learn-problem-solving-basic"
 */
export function extractCourseSlug(courseId: string): string {
  return courseId.replace('/index', '');
}

/**
 * Find the previous and next lesson slugs for a given lesson
 */
export function findAdjacentLessons(
  courseStructure: CourseMeta,
  lessonSlug: string,
): { prevLesson: string | null; nextLesson: string | null } {
  let prevLesson: string | null = null;
  let nextLesson: string | null = null;

  if (!courseStructure.pages) {
    return { prevLesson, nextLesson };
  }

  const currentIndex = courseStructure.pages.findIndex(
    (page: string) => page === lessonSlug,
  );

  if (currentIndex === -1) {
    return { prevLesson, nextLesson };
  }

  // Find previous non-section page
  if (currentIndex > 0) {
    for (let i = currentIndex - 1; i >= 0; i--) {
      const page = courseStructure.pages[i];
      if (isValidLessonPage(page)) {
        prevLesson = page;
        break;
      }
    }
  }

  // Find next non-section page
  if (currentIndex < courseStructure.pages.length - 1) {
    for (let i = currentIndex + 1; i < courseStructure.pages.length; i++) {
      const page = courseStructure.pages[i];
      if (isValidLessonPage(page)) {
        nextLesson = page;
        break;
      }
    }
  }

  return { prevLesson, nextLesson };
}

/**
 * Get all published courses from the courses collection
 */
export async function getPublishedCourses(): Promise<
  CollectionEntry<'courses'>[]
> {
  return await getCollection('courses', ({ data }) => {
    return data.status === 'published';
  });
}

/**
 * Generate static paths for course index pages ([course]/index.astro)
 * Returns an array of path objects with params and props
 */
export async function getCoursePaths(): Promise<
  Array<{
    params: { course: string };
    props: { courseSlug: string };
  }>
> {
  const courses = await getPublishedCourses();

  return courses.map((course) => {
    const courseSlug = extractCourseSlug(course.id);
    return {
      params: { course: courseSlug },
      props: { courseSlug },
    };
  });
}

/**
 * Generate static paths for lesson pages ([course]/[lesson].astro)
 * Returns an array of path objects with params and props
 */
export async function getLessonPaths(): Promise<
  Array<{
    params: { course: string; lesson: string };
    props: { courseSlug: string; lessonSlug: string };
  }>
> {
  const courses = await getPublishedCourses();
  const paths = [];

  for (const course of courses) {
    const courseSlug = extractCourseSlug(course.id);
    const courseStructure = readCourseMeta(courseSlug);

    if (courseStructure?.pages) {
      for (const page of courseStructure.pages) {
        if (isValidLessonPage(page)) {
          paths.push({
            params: { course: courseSlug, lesson: page },
            props: { courseSlug, lessonSlug: page },
          });
        }
      }
    }
  }

  return paths;
}

/**
 * Get all published lessons for a specific course
 */
export async function getCourseLessons(
  courseSlug: string,
): Promise<CollectionEntry<'lessons'>[]> {
  return await getCollection('lessons', ({ id, data }) => {
    return (
      id.startsWith(courseSlug) &&
      !id.endsWith('/index') &&
      data.status === 'published'
    );
  });
}

/**
 * Create a map of lesson slugs to lesson entries
 */
export function createLessonMap(
  lessons: CollectionEntry<'lessons'>[],
): Map<string, CollectionEntry<'lessons'>> {
  const lessonMap = new Map<string, CollectionEntry<'lessons'>>();
  lessons.forEach((lessonEntry) => {
    const slug = lessonEntry.id.split('/').pop() || '';
    lessonMap.set(slug, lessonEntry);
  });
  return lessonMap;
}

/**
 * Check if a page item is a section header
 */
export function isSectionHeader(item: string): boolean {
  return item.startsWith('---') && item.endsWith('---');
}

/**
 * Extract section title from a section header
 * Example: "---Introduction---" -> "Introduction"
 */
export function extractSectionTitle(header: string): string {
  return header.replace(/---/g, '').trim();
}

/**
 * Organize lessons into sections based on course structure from meta.json
 */
export function organizeLessonsIntoSections(
  courseStructure: CourseMeta | null | undefined,
  lessonMap: Map<string, CollectionEntry<'lessons'>>,
): LessonSection[] {
  const sections: LessonSection[] = [];
  let currentSection: LessonSection | undefined = undefined;

  if (!courseStructure?.pages) {
    return sections;
  }

  for (const item of courseStructure.pages) {
    if (isSectionHeader(item)) {
      // This is a section header
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: extractSectionTitle(item),
        lessons: [],
      };
    } else if (isValidLessonPage(item) && currentSection) {
      // This is a lesson
      const lessonEntry = lessonMap.get(item);
      if (lessonEntry) {
        currentSection.lessons.push({
          slug: item,
          title: lessonEntry.data.title || item,
          entry: lessonEntry,
        });
      }
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}
