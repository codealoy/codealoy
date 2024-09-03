import React from 'react';

interface SectionHeadingProps {
  heading: string;
  title: string;
  tagline: string;
}

export const SectionHeading = (props: SectionHeadingProps) => {
  const { heading, title, tagline } = props;
  return (
    <div className="mx-auto mb-16 max-w-xl space-y-4 text-center md:max-w-2xl">
      <p className="font-medium leading-normal text-primary">{heading}</p>
      <h2 className="text-2xl font-bold leading-normal text-slate-700 md:text-3xl lg:text-4xl dark:text-slate-200">
        {title}
      </h2>
      <p className="text-md text-slate-600 md:text-lg dark:text-slate-400">
        {tagline}
      </p>
    </div>
  );
};
