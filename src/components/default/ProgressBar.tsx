import React from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

export const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#22E087"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
