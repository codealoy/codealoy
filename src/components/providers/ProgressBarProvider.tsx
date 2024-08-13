'use client';

import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const ProgressBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#22E087"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
