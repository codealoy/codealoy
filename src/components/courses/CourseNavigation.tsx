'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CourseNavigationProps {
  courseSlug: string;
  courseBaseUrl: string;
  prevLesson: string | null;
  nextLesson: string | null;
}

export default function CourseNavigation({
  courseBaseUrl,
  prevLesson,
  nextLesson,
}: CourseNavigationProps) {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {/* Previous Lesson */}
        <div className="flex-1">
          {prevLesson ? (
            <a href={`${courseBaseUrl}/${prevLesson}`}>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 md:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-muted-foreground text-xs">
                    পূর্ববর্তী
                  </span>
                  <span className="font-medium">পূর্ববর্তী অধ্যায়</span>
                </div>
              </Button>
            </a>
          ) : (
            <div className="opacity-50">
              <Button
                variant="outline"
                disabled
                className="w-full justify-start gap-2 md:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span className="text-muted-foreground text-xs">
                    পূর্ববর্তী
                  </span>
                  <span className="font-medium">
                    কোন পূর্ববর্তী অধ্যায় নেই
                  </span>
                </div>
              </Button>
            </div>
          )}
        </div>

        {/* Back to Course */}
        <div className="flex items-center justify-center">
          <a href={courseBaseUrl}>
            <Button variant="ghost" className="gap-2">
              <span>কোর্সের বিষয়বস্তু</span>
            </Button>
          </a>
        </div>

        {/* Next Lesson */}
        <div className="flex flex-1 justify-end">
          {nextLesson ? (
            <a href={`${courseBaseUrl}/${nextLesson}`}>
              <Button
                variant="outline"
                className="w-full justify-end gap-2 md:w-auto"
              >
                <div className="flex flex-col items-end">
                  <span className="text-muted-foreground text-xs">পরবর্তী</span>
                  <span className="font-medium">পরবর্তী অধ্যায়</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <div className="opacity-50">
              <Button
                variant="outline"
                disabled
                className="w-full justify-end gap-2 md:w-auto"
              >
                <div className="flex flex-col items-end">
                  <span className="text-muted-foreground text-xs">পরবর্তী</span>
                  <span className="font-medium">কোন পরবর্তী অধ্যায় নেই</span>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
