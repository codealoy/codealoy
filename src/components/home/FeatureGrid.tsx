'use client';

import React from 'react';
import { useWhileInView } from '@/hooks/useWhileInView';
import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';
import { featuresData } from '@/config/data';

import { SectionContent } from '@/components/common/SectionContent';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CircleBlur } from '@/components/patterns/CircleBlur';
import { Card } from '@/components/ui/card';

export default function FeatureGrid() {
  const ref = React.useRef<HTMLDivElement>(null!);
  const controlAnimation = useWhileInView(ref);

  return (
    <section className="relative">
      <SectionContent>
        <SectionHeading
          heading="বৈশিষ্টসমূহ"
          title="প্রোগ্রামিং ক্যারিয়ার গঠনের পূর্ণাঙ্গ গাইডলাইন"
          tagline="সবচেয়ে কম সময়ে প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শিখুন"
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
            {featuresData?.map((featureItem) => (
              <Card
                key={featureItem.id}
                variant="feature"
                data={{
                  title: featureItem.title,
                  description: featureItem.description,
                  icon: featureItem.icon,
                }}
              />
            ))}
          </motion.div>
        </div>
      </SectionContent>
    </section>
  );
}
