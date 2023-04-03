import Link from 'next/link';
import { getNavigationItems } from '../utils/getNavigationItems';

import { useState } from 'react';

const navigationItems = getNavigationItems({
  scope: 'PRIMARY',
});

export const PrimaryNavItems = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      {navigationItems.map((navigationItem, i) => (
        <li key={navigationItem.title}>
          <Link href={navigationItem.href!}>
            <span
              onClick={() => setActive(i)}
              className={`${
                active === i ? 'text-sky-500' : 'none'
              }  hover:text-sky-500 dark:hover:text-sky-400`}
            >
              {navigationItem.title}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};
