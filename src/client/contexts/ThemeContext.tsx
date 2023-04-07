/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { DEFAULT_THEME } from '~/configs/client.configs';

interface ThemeContextType {
  currentTheme: string;
  isDarkTheme: boolean;
  setTheme: (themeType: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: DEFAULT_THEME,
  isDarkTheme: true,
  setTheme: () => {},
});

const getCurrentThemePreference = () => {
  if (window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme') as string;
  } else {
    return DEFAULT_THEME;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(DEFAULT_THEME);

  React.useEffect(() => {
    setTheme(getCurrentThemePreference());
  }, []);

  const setThemeHandler = (themeType: string) => {
    setTheme(themeType);
  };

  const themeContextValue = React.useMemo(
    () => ({
      currentTheme: theme,
      isDarkTheme: theme === 'dark',
      setTheme: setThemeHandler,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider };
