'use client';

import React from 'react';

import { ProgressBar } from '@/components/default/ProgressBar';

export const ProgressBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <ProgressBar />
    </>
  );
};
