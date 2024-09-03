import React from 'react';

import { CourseLayout } from '@/components/layouts/CourseLayout';

export default async function CoursePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CourseLayout>{children}</CourseLayout>;
}
