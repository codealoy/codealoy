import React from 'react';

import { AtomProvider } from '@/components/providers/AtomProvider';
import { QueryClientProvider } from '@/components/providers/QueryClientProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AtomProvider>
      <ThemeProvider>
        <QueryClientProvider>{children}</QueryClientProvider>
      </ThemeProvider>
    </AtomProvider>
  );
};
