import React from 'react';

import { Announcement } from '@/components/default/Announcement';
import { Footer } from '@/components/default/Footer';
import { Header } from '@/components/default/Header';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Announcement />
      <Header />
      <main className="flex-auto overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
