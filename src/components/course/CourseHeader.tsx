import React from 'react';

export const CourseHeader = ({
  pageTitle,
  pageDescription,
  coursePageGroupSeparatorName,
}: {
  pageTitle: string;
  pageDescription: string;
  coursePageGroupSeparatorName: string;
}) => (
  <header className="mb-9 space-y-4">
    <p className="text-sm font-medium text-primary">
      {coursePageGroupSeparatorName}
    </p>
    <h1 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl dark:text-slate-200">
      {pageTitle}
    </h1>
    <p className="text-base">{pageDescription}</p>
  </header>
);
