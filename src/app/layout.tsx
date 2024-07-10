import '@/styles/globals.css';

import { type Metadata } from 'next';
import { Baloo_Da_2 } from 'next/font/google';

import { Providers } from '@/app/providers';
import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { cn } from '@/lib/utils';

const fontBengali = Baloo_Da_2({
  variable: '--font-bengali',
  subsets: ['bengali'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Codealoy',
    default:
      'Codealoy - Programming and Web Development Learning Platform in Bangla',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-full bg-white antialiased dark:bg-zinc-900',
          fontBengali.className,
        )}
      >
        <Providers>
          <div className="w-full">
            {/* <DefaultLayout>{children}</DefaultLayout> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
