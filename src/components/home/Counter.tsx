'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';
import { counterData } from '@/config/data';
import { useWhileInView } from '@/hooks/useWhileInView';
import { cn } from '@/lib/utils';

export const Counter = () => {
  const ref = React.useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <motion.section
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}
      ref={ref}
      className="relative z-10 mx-5 -mb-20"
    >
      <div className="mx-auto h-40 max-w-screen-md rounded-3xl border border-primary/30 bg-white/90 p-3 shadow-lg dark:border-primary/15 dark:bg-dark-light/80">
        <div
          className={cn(
            'grid h-full grid-cols-3 items-center gap-y-10 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600',
            '[&>*:not(:last-child)]:border-r [&>*:not(:last-child)]:border-dashed [&>*:not(:last-child)]:border-primary',
          )}
          id="counter"
        >
          {counterData.map((item) => (
            <div
              className="flex flex-col items-center justify-center space-y-1"
              key={item.id}
            >
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {item.subText}
              </p>
              <h2 className="text-5xl font-bold text-primary">
                <span>{item.number}</span>
                <span>+</span>
              </h2>
              <p className="text-slate-700 dark:text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
