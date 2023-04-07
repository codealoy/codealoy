import React from 'react';

import { Footer } from '~/client/components/Footer';
import { Header } from '~/client/components/Header';

interface LayoutProps {
  navigation?: any;
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
