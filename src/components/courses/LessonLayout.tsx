'use client';

import React from 'react';
import type { CollectionEntry } from 'astro:content';
import CourseNavigation from './CourseNavigation';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

import { SectionContent } from '@/components/common/SectionContent';
import { Button } from '@/components/ui/button';

interface LessonLayoutProps {
  course: CollectionEntry<'courses'>;
  lesson: CollectionEntry<'lessons'>;
  courseSlug: string;
  prevLesson: string | null;
  nextLesson: string | null;
  children: React.ReactNode;
}

export default function LessonLayout({
  course,
  lesson,
  courseSlug,
  prevLesson,
  nextLesson,
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

      {/* Lesson Content */}
      <section>
        <SectionContent>
          <article className="py-12">{children}</article>
        </SectionContent>
      </section>

      {/* Lesson Navigation */}
      <section className="border-border border-t">
        <SectionContent>
          <CourseNavigation
            courseSlug={courseSlug}
            courseBaseUrl={courseBaseUrl}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </SectionContent>
      </section>
    </div>
  );
}
