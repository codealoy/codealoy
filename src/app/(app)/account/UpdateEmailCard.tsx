'use client';

import React from 'react';
import { AccountCard, AccountCardBody, AccountCardFooter } from './AccountCard';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'sonner';

import { updateUser } from '@/lib/actions/users';

import { Button, Input } from '@/components/ui';

export default function UpdateEmailCard({ email }: { email: string }) {
  const [state, formAction] = useFormState(updateUser, {
    error: '',
  });

  React.useEffect(() => {
    if (state.success == true) toast.success('Updated Email');
    if (state.error) toast.error('Error', { description: state.error });
  }, [state]);

  return (
    <AccountCard
      params={{
        header: 'Your Email',
        description:
          'Please enter the email address you want to use with your account.',
      }}
    >
      <form action={formAction}>
        <AccountCardBody>
          <Input defaultValue={email ?? ''} name="email" />
        </AccountCardBody>
        <AccountCardFooter description="We will email vou to verify the change.">
          <Submit />
        </AccountCardFooter>
      </form>
    </AccountCard>
  );
}

const Submit = () => {
  const { pending } = useFormStatus();
  return <Button disabled={pending}>Update Email</Button>;
};
