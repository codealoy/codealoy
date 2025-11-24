'use client';

import React from 'react';

import type { HeadingData } from '@/lib/extractHeadings';
import { cn } from '@/lib/utils';

interface PageHeadingsProps {
  headings: HeadingData[];
}

export default function PageHeadings({ headings }: PageHeadingsProps) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is most visible (highest intersection ratio)
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by intersection ratio and get the most visible one
        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev,
        );
        setActiveId(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all heading elements
    const elements: Element[] = [];
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    // Set initial active heading based on scroll position
    const updateActiveOnScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header
      let currentActive = headings[0]?.id || '';

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i]?.id || '');
        if (element && element.offsetTop <= scrollPosition) {
          currentActive = headings[i]?.id || '';
          break;
        }
      }

      setActiveId(currentActive);
    };

    // Set initial active heading
    updateActiveOnScroll();

    // Listen to scroll events as fallback
    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveOnScroll);
    };
  }, [headings]);

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
              const isActive = activeId === heading.id;
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
