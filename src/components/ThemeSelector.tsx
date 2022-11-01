import clsx from 'clsx';

import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

interface ThemeSelectorProps {
  iconOnly?: boolean;
}

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
];

const ThemeSelectorIcon = () => (
  <>
    <span className="dark:hidden">
      <SunIcon className="h-6 w-6" selected={true} />
    </span>
    <span className="hidden dark:inline">
      <MoonIcon className="h-6 w-6" selected={true} />
    </span>
  </>
);

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  iconOnly = true,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<typeof themes[0]>();
  const siteTheme = useContext(ThemeContext);

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value);
    } else {
      const selectedTheme = themes.find(
        (theme) =>
          theme.value === document.documentElement.getAttribute('data-theme'),
      );

      setSelectedTheme(selectedTheme);
    }
  }, [selectedTheme]);

  const selectThemeHandler = (selectedTheme: typeof themes[0]) => {
    setSelectedTheme(selectedTheme);
    siteTheme.setTheme(selectedTheme.value);
  };

  return (
    <div className="relative">
      <Listbox value={selectedTheme} onChange={selectThemeHandler}>
        <Listbox.Label className="sr-only">Theme</Listbox.Label>
        <Listbox.Button type="button">
          {iconOnly ? (
            <ThemeSelectorIcon />
          ) : (
            <div className="dark:highlight-white/5 flex items-center rounded-lg py-1 px-2 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10 dark:bg-slate-600 dark:text-slate-200 dark:ring-0">
              <ThemeSelectorIcon />
              <p className="ml-3 capitalize">{siteTheme.currentTheme}</p>
              <span className="ml-2 h-4 w-4">
                <ChevronDownIcon />
              </span>
            </div>
          )}
        </Listbox.Button>
        <Listbox.Options className="dark:highlight-white/5 absolute right-0 top-14 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-2 md:top-10">
          {themes.map((theme) => (
            <Listbox.Option key={theme.value} value={theme}>
              {({ active, selected }) => (
                <span
                  className={clsx(
                    'flex cursor-pointer items-center py-1 px-3',
                    selected && 'text-sky-500',
                    active && 'bg-slate-50 dark:bg-slate-600/30',
                  )}
                >
                  <theme.icon
                    className={clsx('h-6 w-6')}
                    selected={theme.value === siteTheme.currentTheme}
                  />
                  <p className="ml-3">{theme.name}</p>
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
