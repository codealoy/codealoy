import '@/styles/globals.css';
import '@/styles/codeblocks.css';

import type { Metadata, Viewport } from 'next';
import { Baloo_Da_2 } from 'next/font/google';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';
import { Providers } from '@/components/providers';
import { SITE_METADATA_GLOBAL, SITE_VIEWPORT_GLOBAL } from '@/config/site';
import { cn } from '@/lib/utils';

const fontBengali = Baloo_Da_2({
  variable: '--font-bengali',
  subsets: ['bengali'],
});

export const metadata: Metadata = SITE_METADATA_GLOBAL;
export const viewport: Viewport = SITE_VIEWPORT_GLOBAL;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={cn(
          'relative overflow-x-hidden bg-white text-base text-slate-600 dark:bg-dark-deep dark:text-slate-300',
          fontBengali.className,
        )}
      >
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
