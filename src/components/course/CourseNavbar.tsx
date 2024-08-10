'use client';

import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import {
  coursePageNavigationAtom,
  CoursePageNavigationTreeItem,
} from '@/lib/store/atom';
import { cn } from '@/lib/utils';

import { ScrollArea } from '@/components/ui/ScrollArea';

const LinkItem = ({ item }: { item: CoursePageNavigationTreeItem }) => {
  const pathname = usePathname();

  return (
    <Link href={item.url} target={item.external ? '_blank' : '_self'}>
      <span
        className={cn(
          'inline-block w-full pl-5 text-sm text-primary before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold hover:before:block',
          pathname === item.url
            ? 'text-primary before:block before:bg-primary'
            : 'before:hidden text-slate-500 before:bg-slate-400 hover:text-slate-600 dark:text-slate-300 dark:before:bg-slate-300 dark:hover:text-slate-200',
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};

const SeparatorItem = ({ item }: { item: CoursePageNavigationTreeItem }) => (
  <h3 className="font-bold text-sm px-4 py-2 -ml-2 my-0">{item.name}</h3>
);

const CourseNavbarList = () => {
  const coursePageNavigationTree = useAtomValue(coursePageNavigationAtom);

  // TODO: add loading component
  if (
    !coursePageNavigationTree ||
    !coursePageNavigationTree?.name ||
    coursePageNavigationTree.children?.length === 0
  ) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-10 px-6">
      <ul className="mt-2 space-y-2 border-l border-primary/25 border-dashed p-0 lg:mt-4 lg:space-y-4">
        {coursePageNavigationTree.children?.map((item) => (
          <li className="relative list-none" key={item.name}>
            {item.type === 'separator' ? (
              <SeparatorItem item={item} />
            ) : (
              <LinkItem item={item} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CourseNavbar = () => {
  return (
    <aside className="sticky border-r border-dashed border-primary/15">
      <ScrollArea className="relative h-[90dvh]">
        <nav className="w-64 lg:text-sm xl:w-72">
          <CourseNavbarList />
        </nav>
      </ScrollArea>
    </aside>
  );
};
