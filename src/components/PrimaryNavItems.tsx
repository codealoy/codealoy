import Link from 'next/link';
import { getNavigationItems } from '../utils/getNavigationItems';

const navigationItems = getNavigationItems({
  scope: 'PRIMARY',
});

export const PrimaryNavItems = () => {
  return (
    <>
      {navigationItems.map((navigationItem) => (
        <li key={navigationItem.title}>
          <Link href={navigationItem.href!}>
            <a className="hover:text-sky-500 dark:hover:text-sky-400">
              {navigationItem.title}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
};
