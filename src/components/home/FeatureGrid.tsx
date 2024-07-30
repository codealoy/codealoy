'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { SectionContent } from '@/components/default/SectionContent';
import { SectionHeading } from '@/components/default/SectionHeading';
import { CircleBlur } from '@/components/patterns/CircleBlur';
import { fadeUpAnimation } from '@/config/animation';
import { featuresData } from '@/config/data';
import { useWhileInView } from '@/hooks/useWhileInView';

export const FeatureGrid = () => {
  const ref = React.useRef(null);
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
          <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2">
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
              <div
                className="relative scale-100 rounded-lg border border-primary/30 bg-white/10 p-3 shadow-lg transition-transform duration-500 hover:scale-105 dark:border-primary/15 dark:bg-dark-light/30"
                key={featureItem.id}
              >
                <div className="h-full rounded-md border border-dashed border-gray-300 p-10 text-center lg:p-5 dark:border-gray-700">
                  <span className="inline-flex items-center justify-center rounded-md bg-slate-100/10 p-3 shadow-lg dark:bg-slate-500/10">
                    <featureItem.icon
                      className="h-6 w-6 fill-primary/30 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mt-8 text-xl font-bold text-slate-700 dark:text-slate-200">
                    {featureItem.title}
                  </h3>
                  <p className="mt-5 text-base text-slate-700 dark:text-slate-300">
                    {featureItem.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionContent>
    </section>
  );
};
