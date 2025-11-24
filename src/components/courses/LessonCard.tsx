import React from 'react';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LessonItem {
  slug: string;
  title: string;
  entry: any | null;
}

interface LessonCardProps {
  lesson: LessonItem;
  courseSlug: string;
  courseBaseUrl: string;
  lessonNumber: number;
}

export default function LessonCard({
  lesson,
  courseSlug,
  courseBaseUrl,
  lessonNumber,
}: LessonCardProps) {
  const lessonUrl = `${courseBaseUrl}/${lesson.slug}`;
  const hasContent = lesson.entry !== null;

  return (
    <a
      href={hasContent ? lessonUrl : '#'}
      onClick={(e) => {
        if (!hasContent) {
          e.preventDefault();
        }
      }}
      className={cn(
        'group bg-card hover:bg-muted/50 flex items-center gap-4 rounded-lg border px-6 py-4 transition-all',
        hasContent ? 'cursor-pointer' : 'cursor-not-allowed opacity-60',
      )}
    >
      {/* Number Badge */}
      <div className="bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors">
        {lessonNumber}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-foreground group-hover:text-primary truncate text-base font-medium transition-colors">
          {lesson.title}
        </h3>
        {lesson.entry?.data?.description && (
          <p className="text-muted-foreground mt-0.5 truncate text-sm">
            {lesson.entry.data.description}
          </p>
        )}
        {!hasContent && (
          <p className="text-muted-foreground mt-0.5 text-xs">শীঘ্রই আসছে</p>
        )}
      </div>

      {/* Arrow */}
      {hasContent && (
        <ArrowRight className="text-muted-foreground group-hover:text-foreground h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </a>
  );
}
