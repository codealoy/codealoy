import React from 'react';

// TODO: fix type
//
export const CourseHeader = ({ page, coursePageGroupSeparatorName }: any) => (
  <header className="mb-9 space-y-4">
    <p className="text-sm font-medium text-primary">
      {coursePageGroupSeparatorName}
    </p>
    <h1 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl dark:text-slate-200">
      {page?.data.title}
    </h1>
    <p className="text-base">{page?.data.description}</p>
  </header>
);
