'use client';

import React from 'react';
import { useWhileInView } from '@/hooks/useWhileInView';
import { AnimatePresence, motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

import { fadeUpAnimation } from '@/config/animation';
import { faqData } from '@/config/data';

import { SectionContent } from '@/components/common/SectionContent';
import { SectionHeading } from '@/components/common/SectionHeading';

export default function Faq() {
  const ref = React.useRef<HTMLDivElement>(null!);
  const controlAnimation = useWhileInView(ref);
  const [openId, setOpenId] = React.useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-12 lg:py-16">
      <SectionContent>
        <SectionHeading
          heading="সাধারণ জিজ্ঞাসা"
          title="প্রশ্ন ও উত্তর"
          tagline="কোডালয় শুরু করার আগে যে প্রশ্নগুলো প্রায়ই মনে আসে"
        />
        <motion.div
          className="mx-auto max-w-3xl space-y-4"
          initial="initial"
          animate={controlAnimation}
          variants={fadeUpAnimation}
          ref={ref}
        >
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-primary/30 dark:border-primary/15 bg-card overflow-hidden rounded-lg border shadow-sm"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                    {item.question}
                  </span>
                  <HiChevronDown
                    className={`text-primary h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </SectionContent>
    </section>
  );
}
