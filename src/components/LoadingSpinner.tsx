import clsx from 'clsx';
import React from 'react';

interface LoadingSpinnerProps {
  height?: number;
  width?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  height = 4,
  width = 4,
}) => (
  <div
    className={clsx([
      'relative animate-spin rounded-full bg-gradient-to-r from-indigo-500 to-sky-500',
      `h-${height}`,
      `w-${width}`,
    ])}
  >
    <div
      className={clsx([
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-50 dark:bg-[#112133]',
        `h-${height <= 5 ? height - 1 : height - 2}`,
        `w-${width <= 5 ? width - 1 : width - 2}`,
      ])}
    />
  </div>
);

export { LoadingSpinner };
