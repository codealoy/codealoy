'use client';

import React from 'react';
import { LuMoonStar, LuSun } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    // Check initial theme - prioritize localStorage theme value if it exists
    const checkTheme = () => {
      let isDarkMode = true; // default to dark

      if ('theme' in localStorage) {
        // Use localStorage value if it exists
        isDarkMode = localStorage.theme === 'dark';
      }

      setIsDark(isDarkMode);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    if (isCurrentlyDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDark(!isCurrentlyDark);
  };

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="hover:text-primary shrink-0 hover:bg-transparent dark:hover:bg-transparent"
    >
      <span className="text-muted-foreground hover:text-accent-foreground ml-20 block text-base opacity-75 duration-150 md:hidden">
        থিম পরিবর্তন
      </span>
      {isDark ? (
        <LuSun className="size-4" />
      ) : (
        <LuMoonStar className="size-4 opacity-60" />
      )}
    </Button>
  );
}
