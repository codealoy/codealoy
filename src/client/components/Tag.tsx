import clsx from 'clsx';
import React from 'react';

interface TagProps {
  className?: string;
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children, className }) => (
  <span
    className={clsx([
      'inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100',
      className,
    ])}
  >
    <svg
      className="mr-1.5 h-2 w-2 text-indigo-400"
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
    {children}
  </span>
);

export { Tag };
