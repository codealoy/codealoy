import Link from 'next/link';
import React from 'react';

import { PRIMARY_NAV_ITEMS } from '@/config/navigations/primary';
import { cn } from '@/lib/utils';

const navigationItems = PRIMARY_NAV_ITEMS;

export const PrimaryNavItems = () => {
  const [active, setActive] = React.useState(0);

  return (
    <>
      {navigationItems.map((navigationItem, index) => (
        <li
          key={navigationItem.title}
          onClick={() => setActive(index)}
          className={cn([
            'hover:text-primary',
            active === index && 'text-primary',
          ])}
        >
          <Link href={navigationItem.href as string}>
            <span className="inline-block w-full">{navigationItem.title}</span>
          </Link>
        </li>
      ))}
    </>
  );
};
