import React from 'react';

import { CourseHeroPattern } from '@/components/patterns';

export const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-h-[90dvh]">
      <CourseHeroPattern />
      {children}
    </div>
  );
};
