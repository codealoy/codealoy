import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { PRIMARY_NAV_ITEMS } from '@/config/navigations/primary';

const navigationItems = PRIMARY_NAV_ITEMS;

export const PrimaryNavItems = () => {
  const [active, setActive] = React.useState(0);

  return (
    <>
      {navigationItems.map((navigationItem, index) => (
        <li key={navigationItem.title}>
          <Link href={navigationItem.href as string}>
            <span
              onClick={() => setActive(index)}
              className={clsx([
                'hover:text-primary',
                active === index && 'text-primary',
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
