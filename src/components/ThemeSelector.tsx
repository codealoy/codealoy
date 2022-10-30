import clsx from 'clsx';
import { Listbox } from '@headlessui/react';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const themes: any = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
];

export function ThemeSelector(props) {
  const [selectedTheme, setSelectedTheme] = useState<typeof themes[0]>();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value);
    } else {
      const t: any = themes.find(
        (theme) =>
          theme.value === document.documentElement.getAttribute('data-theme'),
      );

      setSelectedTheme(t);
    }
  }, [selectedTheme]);

  const selectThemeHandler = (selectedTheme: typeof themes[0]) => {
    setSelectedTheme(selectedTheme);
    theme.setTheme(selectedTheme.value);
  };

  return (
    <Listbox value={selectedTheme} onChange={selectThemeHandler} {...props}>
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button type="button">
        <span className="dark:hidden">
          <SunIcon className="h-6 w-6" selected={true} />
        </span>
        <span className="hidden dark:inline">
          <MoonIcon className="h-6 w-6" selected={true} />
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={clsx(
          'dark:highlight-white/5 absolute right-0 top-14 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-4 md:top-10',
        )}
      >
        {themes.map((theme) => (
          <Listbox.Option key={theme.value} value={theme}>
            {({ active, selected }) => (
              <li
                className={clsx(
                  'flex cursor-pointer items-center py-1 px-3',
                  selected && 'text-sky-500',
                  active && 'bg-slate-50 dark:bg-slate-600/30',
                )}
              >
                <theme.icon
                  className={clsx('h-4 w-4', {
                    'fill-sky-400 dark:fill-sky-400': selected,
                    'fill-slate-400': !selected,
                  })}
                />

                <div className="ml-3">{theme.name}</div>
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
