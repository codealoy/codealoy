import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import { getNavigationItems } from '../utils/getNavigationItems';

const navigationItems = getNavigationItems({
  scope: 'PRIMARY',
});

export const PrimaryNavItems = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      {navigationItems.map((navigationItem, index) => (
        <li key={navigationItem.title}>
          <Link href={navigationItem.href!}>
            <span
              onClick={() => setActive(index)}
              className={clsx([
                'hover:text-sky-500 dark:hover:text-sky-400',
                active === index && 'text-sky-500',
              ])}
            >
              {navigationItem.title}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};
