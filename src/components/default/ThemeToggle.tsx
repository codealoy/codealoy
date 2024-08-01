'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LuMoonStar, LuSun } from 'react-icons/lu';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="icon"
      size="icon"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      onClick={() => setTheme(otherTheme)}
    >
      <LuSun className="hidden h-5 w-5 text-slate-400 hover:text-primary dark:block" />
      <LuMoonStar className="h-5 w-5 text-slate-400 hover:text-primary dark:hidden" />
    </Button>
  );
}
