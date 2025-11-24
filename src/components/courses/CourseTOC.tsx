import type { LessonSection } from '@/lib/types/course';
import { cn } from '@/lib/utils';

interface CourseTOCProps {
  sections: LessonSection[];
  courseSlug: string;
  currentLessonSlug: string;
}

export default function CourseTOC({
  sections,
  courseSlug,
  currentLessonSlug,
}: CourseTOCProps) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-20 max-h-full overflow-y-auto">
        <div className="pr-4">
          <h2 className="text-muted-foreground text-md mb-4 font-semibold tracking-wide uppercase">
            সূচিপত্র
          </h2>
          <nav className="space-y-1">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-1">
                <div className="text-foreground px-3 py-2 text-sm font-medium">
                  {section.title}
                </div>
                {section.lessons.map((lesson) => {
                  const isActive = lesson.slug === currentLessonSlug;
                  return (
                    <div
                      className={cn(
                        'ml-4 space-y-1 border-l pl-4',
                        isActive ? 'border-primary' : 'border-border',
                      )}
                    >
                      <a
                        key={lesson.slug}
                        href={`/courses/${courseSlug}/${lesson.slug}`}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm transition-colors',
                          isActive
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        )}
                      >
                        {lesson.title}
                      </a>
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
