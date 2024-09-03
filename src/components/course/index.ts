import dynamic from 'next/dynamic';

export * from './CourseHeader';
export * from './CodeBlock';
export * from './CourseContent';
export * from './CourseNavbar';

// Dynamic exports.
// Learn more: https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#importing-named-exports

const DynamicCodeBlock = dynamic(() =>
  import('./CodeBlock').then((mod) => mod.CodeBlock),
);

export { DynamicCodeBlock };
