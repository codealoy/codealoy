/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useEffect, createContext } from 'react';

const DEFAULT_THEME = 'light';

interface ThemeContext {
  currentTheme: string;
  isDarkTheme: boolean;
  setTheme: (themeType: string) => void;
}

export const ThemeContext = createContext<ThemeContext>({
  currentTheme: DEFAULT_THEME,
  isDarkTheme: false,
  setTheme: () => {},
});

const isSystemPreferenceDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme:dark)').matches;
};

const getCurrentThemePreference = () => {
  if (window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme') as string;
  } else if (isSystemPreferenceDarkMode()) {
    return 'dark';
  } else {
    return DEFAULT_THEME;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    setTheme(getCurrentThemePreference());
  }, []);

  const setThemeHandler = (themeType: string) => {
    setTheme(themeType);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        isDarkTheme: theme === 'dark',
        setTheme: setThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
