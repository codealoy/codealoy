import type { CollectionEntry } from 'astro:content';

export type CourseMeta = {
  title: string;
  root: boolean;
  pages: string[];
  coverImage?: string;
};

export type LessonItem = {
  slug: string;
  title: string;
  entry: CollectionEntry<'lessons'> | null;
};

export type LessonSection = {
  title: string;
  lessons: LessonItem[];
};
