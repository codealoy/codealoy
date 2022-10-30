import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
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
