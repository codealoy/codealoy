'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeWatcher = () => {
  let { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)');

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light';
      if (resolvedTheme === systemTheme) {
        setTheme('system');
      }
    }

    onMediaChange();
    media.addEventListener('change', onMediaChange);

    return () => {
      media.removeEventListener('change', onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" disableTransitionOnChange>
      <ThemeWatcher />
      {children}
    </NextThemesProvider>
  );
};