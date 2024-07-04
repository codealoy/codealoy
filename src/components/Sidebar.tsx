import Link from 'next/link';

import SidebarItems from './SidebarItems';
import { Avatar, AvatarFallback } from './ui/avatar';

import { AuthSession, getUserAuth } from '@/lib/auth/utils';

const Sidebar = async () => {
  const session = await getUserAuth();
  if (session.session === null) return null;

  return (
    <aside className="hidden h-screen min-w-52 border-r border-border bg-muted p-4 pt-8 shadow-inner md:block">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-4">
          <h3 className="ml-4 text-lg font-semibold">Logo</h3>
          <SidebarItems />
        </div>
        <UserDetails session={session} />
      </div>
    </aside>
  );
};

export default Sidebar;

const UserDetails = ({ session }: { session: AuthSession }) => {
  if (session.session === null) return null;
  const { user } = session.session;

  if (!user?.name || user.name.length == 0) return null;

  return (
    <Link href="/account">
      <div className="flex w-full items-center justify-between border-t border-border px-2 pt-4">
        <div className="text-muted-foreground">
          <p className="text-xs">{user.name ?? 'John Doe'}</p>
          <p className="pr-4 text-xs font-light">
            {user.email ?? 'john@doe.com'}
          </p>
        </div>
        <Avatar className="h-10 w-10">
          <AvatarFallback className="border-2 border-border text-muted-foreground">
            {user.name
              ? user.name
                  ?.split(' ')
                  .map((word) => word[0].toUpperCase())
                  .join('')
              : '~'}
          </AvatarFallback>
        </Avatar>
      </div>
    </Link>
  );
};
