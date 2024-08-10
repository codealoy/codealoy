'use client';

import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import React from 'react';

export const AtomProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Provider>
      {children}
      <DevTools isInitialOpen={false} theme="dark" position="bottom-right" />
    </Provider>
  );
};
