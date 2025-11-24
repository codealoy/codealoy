'use client';

import React from 'react';
import type { CollectionEntry } from 'astro:content';
import CourseCard from './CourseCard';
import { useWhileInView } from '@/hooks/useWhileInView';
import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';

import { SectionContent } from '@/components/common/SectionContent';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CircleBlur } from '@/components/patterns/CircleBlur';

interface CoursesListProps {
  courses: CollectionEntry<'courses'>[];
}

export default function CoursesList({ courses }: CoursesListProps) {
  const ref = React.useRef<HTMLDivElement>(null!);
  const controlAnimation = useWhileInView(ref);

  return (
    <section className="bg-muted/50 relative py-36 md:py-24 lg:py-32">
      <SectionContent>
        <SectionHeading
          heading="কোর্স সমূহ"
          title="প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শিখুন"
          tagline="বাংলা ভাষায় সহজ এবং বোধগম্য কোর্সগুলির মাধ্যমে আপনার প্রোগ্রামিং দক্ষতা উন্নত করুন"
        />
        <div className="relative z-10">
          <div className="absolute top-1/2 left-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2">
            <CircleBlur />
            <CircleBlur className="lg:-ml-44" />
          </div>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="initial"
            animate={controlAnimation}
            variants={fadeUpAnimation}
            ref={ref}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </div>
      </SectionContent>
    </section>
  );
}
