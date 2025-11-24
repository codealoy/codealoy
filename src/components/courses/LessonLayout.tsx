'use client';

import type { CollectionEntry } from 'astro:content';
import CourseNavigation from './CourseNavigation';
import CourseTOC from './CourseTOC';
import PageHeadings from './PageHeadings';
import { ArrowLeft, BookOpen } from 'lucide-react';

import type { HeadingData } from '@/lib/extractHeadings';
import type { LessonSection } from '@/lib/types/course';

import { SectionContent } from '@/components/common/SectionContent';

interface LessonLayoutProps {
  course: CollectionEntry<'courses'>;
  lesson: CollectionEntry<'lessons'>;
  courseSlug: string;
  prevLesson: string | null;
  nextLesson: string | null;
  sections: LessonSection[];
  currentLessonSlug: string;
  headings: HeadingData[];
  children: React.ReactNode;
}

export default function LessonLayout({
  course,
  lesson,
  courseSlug,
  prevLesson,
  nextLesson,
  sections,
  currentLessonSlug,
  headings,
  children,
}: LessonLayoutProps) {
  const courseUrl = `/courses/${courseSlug}`;
  const courseBaseUrl = `/courses/${courseSlug}`;

  return (
    <div className="bg-background min-h-screen">
      {/* Lesson Header */}
      <section className="bg-muted/50 border-border border-b">
        <SectionContent>
          <div className="py-8 md:py-12">
            <div className="mb-6 flex items-center gap-4">
              <a
                href={courseUrl}
                className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                কোর্সের বিষয়বস্তু
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/courses"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                সব কোর্স
              </a>
            </div>

            <div className="mb-4">
              <a
                href={courseUrl}
                className="text-primary hover:text-primary/80 inline-flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                {course.data.title}
              </a>
            </div>

            <h1 className="mb-4 text-3xl leading-tight font-bold text-slate-900 md:text-4xl dark:text-slate-100">
              {lesson.data.title}
            </h1>

            {lesson.data.description && (
              <p className="max-w-3xl text-lg text-slate-600 md:text-xl dark:text-slate-400">
                {lesson.data.description}
              </p>
            )}
          </div>
        </SectionContent>
      </section>

      {/* Three Column Layout: ToC | Content | Page Headings */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Course ToC */}
            <CourseTOC
              sections={sections}
              courseSlug={courseSlug}
              currentLessonSlug={currentLessonSlug}
            />

            {/* Center - Main Content */}
            <main className="min-w-0 flex-1">
              <article className="prose prose-base lg:prose-lg dark:prose-invert prose-a:text-primary prose-a:no-underline prose-img:rounded-lg prose-headings:scroll-mt-40 max-w-none">
                {children}
              </article>

              {/* Lesson Navigation */}
              <div className="border-border mt-12 border-t pt-8">
                <CourseNavigation
                  courseSlug={courseSlug}
                  courseBaseUrl={courseBaseUrl}
                  prevLesson={prevLesson}
                  nextLesson={nextLesson}
                />
              </div>
            </main>

            {/* Right Sidebar - Page Headings */}
            <PageHeadings headings={headings} />
          </div>
        </div>
      </section>
    </div>
  );
}
