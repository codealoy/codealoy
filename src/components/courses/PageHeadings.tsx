'use client';

import type { HeadingData } from '@/lib/extractHeadings';
import { cn } from '@/lib/utils';

interface PageHeadingsProps {
  headings: HeadingData[];
}

export default function PageHeadings({ headings }: PageHeadingsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="pl-4">
          <h2 className="text-muted-foreground text-md mb-4 font-semibold tracking-wide uppercase">
            শিরোনাম
          </h2>
          <nav className="space-y-1">
            {headings.map((heading) => {
              const isActive = false;
              const indentClass =
                heading.level === 3
                  ? 'ml-4'
                  : heading.level === 4
                    ? 'ml-8'
                    : '';

              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors',
                    indentClass,
                    isActive
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {heading.text}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
