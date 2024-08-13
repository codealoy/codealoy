import React from 'react';
import UserSettings from './UserSettings';

import { checkAuth, getUserAuth } from '@/lib/auth/utils';

export default async function Account() {
  await checkAuth();
  const { session } = await getUserAuth();

  return (
    <main>
      <h1 className="my-4 text-2xl font-semibold">Account</h1>
      <div className="space-y-4">
        <UserSettings session={session} />
      </div>
    </main>
  );
}
