import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { CourseMeta } from '@/lib/types/course';

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
    console.error(
      `Failed to read meta.json for course ${courseSlug}:`,
      error,
    );
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

