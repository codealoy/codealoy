import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NAVIGATION_LIST } from "../constants/navigations";

interface LayoutProps {
  navigation?: any;
  children?: React.ReactNode;
}

const navigation = NAVIGATION_LIST.GUIDES;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header navigation={navigation} />
      {children}
      <Footer />
    </>
  );
};
