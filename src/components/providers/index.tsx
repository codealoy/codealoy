import { AtomProvider } from '@/components/providers/AtomProvider';
import { QueryClientProvider } from '@/components/providers/QueryClientProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AtomProvider>
      <ThemeProvider>
        <QueryClientProvider>{children}</QueryClientProvider>
      </ThemeProvider>
    </AtomProvider>
  );
};
