import clsx from 'clsx';

import { Listbox } from '@headlessui/react';
import { useEffect, useState, useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

const themes: any = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
];

function SunIcon({ selected, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        className={
          selected
            ? 'fill-sky-400/20 stroke-sky-500'
            : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
      <path
        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
        className={
          selected ? 'stroke-sky-500' : 'stroke-slate-400 dark:stroke-slate-500'
        }
      />
    </svg>
  );
}

function MoonIcon({ selected, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
        className={selected ? 'fill-sky-400/20' : 'fill-transparent'}
      />
      <path
        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
        className={
          selected ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500'
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
        className={
          selected ? 'fill-sky-500' : 'fill-slate-400 dark:fill-slate-500'
        }
      />
    </svg>
  );
}

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
          'dark:highlight-white/5 absolute top-full right-0 z-50 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0',
        )}
      >
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-sky-500': selected,
                  'text-slate-900 dark:text-white': active && !selected,
                  'text-slate-700 dark:text-slate-400': !active && !selected,
                  'bg-slate-100 dark:bg-slate-900/40': active,
                },
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx('h-4 w-4', {
                      'fill-sky-400 dark:fill-sky-400': selected,
                      'fill-slate-400': !selected,
                    })}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
