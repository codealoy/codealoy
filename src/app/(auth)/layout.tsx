import React from 'react';
import { redirect } from 'next/navigation';

import { getUserAuth } from '@/lib/auth/utils';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect('/dashboard');

  return <div className="h-screen bg-muted pt-8">{children}</div>;
}
