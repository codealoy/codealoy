'use client';

import React from 'react';
import UpdateEmailCard from './UpdateEmailCard';
import UpdateNameCard from './UpdateNameCard';

import { AuthSession } from '@/lib/auth/utils';

export default function UserSettings({
  session,
}: {
  session: AuthSession['session'];
}) {
  return (
    <>
      <UpdateNameCard name={session?.user.name ?? ''} />
      <UpdateEmailCard email={session?.user.email ?? ''} />
    </>
  );
}
