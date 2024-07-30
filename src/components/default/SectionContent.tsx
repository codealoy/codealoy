import React, { Children } from 'react';

export const SectionContent = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:px-8 md:py-32">
      {children}
    </div>
  );
};
