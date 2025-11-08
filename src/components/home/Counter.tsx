'use client';

import React from 'react';
import { useWhileInView } from '@/hooks/useWhileInView';
import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';
import { counterData } from '@/config/data';

import { cn } from '@/lib/utils';

export default function Counter() {
  const ref = React.useRef<HTMLDivElement>(null!);
  const controlAnimation = useWhileInView(ref);

  return (
    <motion.section
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}
      ref={ref}
      className="relative z-10 mx-5 -mb-20"
    >
      <div className="border-primary/30 dark:border-primary/15 bg-card mx-auto h-40 max-w-3xl rounded-3xl border p-3 shadow-lg">
        <div
          className={cn(
            'grid h-full grid-cols-3 items-center gap-y-10 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600',
            '[&>*:not(:last-child)]:border-primary [&>*:not(:last-child)]:border-r [&>*:not(:last-child)]:border-dashed',
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
              <p className="text-primary text-5xl font-bold">
                <span>{item.number}</span>
                <span>+</span>
              </p>
              <h4 className="text-slate-700 dark:text-slate-300">
                {item.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
