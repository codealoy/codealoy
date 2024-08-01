import clsx from 'clsx';

import { HiOutlineMenuAlt2 } from 'react-icons/hi';

import { Logo } from '@/components/default/Logo';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Link from 'next/link';
import { HiOutlineXMark } from 'react-icons/hi2';
import { PrimaryNavItems } from './PrimaryNavItems';

interface MobileNavbarProps {
  display?: string;
  className?: string;
}

export function MobileNavbar({
  display = 'md:hidden',
  className,
  ...props
}: MobileNavbarProps) {
  return (
    <div className={clsx(className, display)} {...props}>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="icon" size="icon" className="group relative z-50">
            <span className="sr-only">Open main menu</span>
            <HiOutlineMenuAlt2 className="h-5 w-5 text-slate-400 group-hover:text-primary" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="top-0 my-1 max-w-xs rounded-r-lg bg-gray/90 p-6 text-base font-semibold text-slate-900 shadow-2xl dark:bg-dark/95 dark:text-slate-400">
          <div className="mx-auto flex w-full items-center justify-between">
            <Link href="/">
              <Logo varient="text" className="h-7" />
            </Link>
            <DrawerClose asChild>
              <Button variant="icon" size="icon">
                <span className="sr-only">Open main menu</span>
                <HiOutlineXMark className="h-6 w-6 cursor-pointer text-slate-400 group-hover:text-primary" />
              </Button>
            </DrawerClose>
          </div>
          <div className="mt-6">
            <ul className="space-y-6">
              <PrimaryNavItems />
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
