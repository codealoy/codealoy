'use client';

import type { CollectionEntry } from 'astro:content';
import LessonCard from './LessonCard';
import { BookOpen, Clock, FileText, Trophy } from 'lucide-react';

import { SectionContent } from '@/components/common/SectionContent';

interface LessonItem {
  slug: string;
  title: string;
  entry: CollectionEntry<'lessons'> | null;
}

interface LessonSection {
  title: string;
  lessons: LessonItem[];
}

interface CourseOverviewProps {
  course: CollectionEntry<'courses'>;
  sections: LessonSection[];
  courseSlug: string;
}

export default function CourseOverview({
  course,
  sections,
  courseSlug,
}: CourseOverviewProps) {
  const { data } = course;
  const courseBaseUrl = `/courses/${courseSlug}`;

  // Calculate total lessons count
  const totalLessons = sections.reduce(
    (sum, section) => sum + section.lessons.length,
    0,
  );

  // Pre-calculate start indices for continuous numbering
  const sectionStartIndices = sections.reduce((acc, _, index) => {
    const prevTotal =
      index > 0 ? acc[index - 1] + sections[index - 1].lessons.length : 0;
    acc.push(prevTotal);
    return acc;
  }, [] as number[]);

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Course Header */}
      <section className="bg-muted/30 border-border border-b">
        <SectionContent>
          <div className="py-12 md:py-16">
            <div className="mb-8">
              <a
                href="/courses"
                className="text-muted-foreground hover:text-primary inline-flex items-center text-sm font-medium transition-colors"
              >
                ← সব কোর্স
              </a>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
              <div>
                <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                  {data.title}
                </h1>
                <p className="text-muted-foreground max-w-3xl text-lg md:text-xl">
                  {data.description}
                </p>
              </div>

              {/* Course Metadata */}
              <div className="border-border flex flex-wrap items-center gap-4 border-t pt-6 text-sm md:gap-8">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                    {data.level}
                  </span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{data.estimation}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{totalLessons} অধ্যায়</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <span>{data.challenges}</span>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </section>

      {/* Course Content Sections */}
      <section>
        <SectionContent>
          <div className="py-12">
            <h2 className="sr-only">কোর্সের বিষয়বস্তু</h2>

            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-card rounded-xl border p-6 shadow-sm md:p-8"
                >
                  {/* Section Header */}
                  <div className="mb-8">
                    <h3 className="text-foreground mb-3 text-2xl font-bold">
                      {section.title}
                    </h3>
                    <div className="text-muted-foreground flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{section.lessons.length} অধ্যায়</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {Math.ceil(section.lessons.length * 5)} মিনিট পড়ার
                          সময়
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lessons List */}
                  <div className="space-y-3">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <LessonCard
                        key={lesson.slug}
                        lesson={lesson}
                        courseSlug={courseSlug}
                        courseBaseUrl={courseBaseUrl}
                        lessonNumber={
                          sectionStartIndices[sectionIndex] + lessonIndex + 1
                        }
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </section>
    </div>
  );
}
