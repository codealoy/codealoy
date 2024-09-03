import React from 'react';

import { AtomProvider } from '@/components/providers/AtomProvider';
import { ProgressBarProvider } from '@/components/providers/ProgressBarProvider';
import { QueryClientProvider } from '@/components/providers/QueryClientProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AtomProvider>
      <ProgressBarProvider>
        <ThemeProvider>
          <QueryClientProvider>{children}</QueryClientProvider>
        </ThemeProvider>
      </ProgressBarProvider>
    </AtomProvider>
  );
};
