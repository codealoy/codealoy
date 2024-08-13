'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';

import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <section className="my-32">
      <motion.div
        className="relative px-5"
        initial="initial"
        animate="animate"
        variants={fadeUpAnimation}
      >
        <div className="mx-auto max-w-full space-y-10 text-center md:max-w-[700px]">
          <h1 className="from-0 -mb-32 bg-gradient-to-b from-primary to-primary/0 to-90% bg-clip-text text-9xl font-bold leading-tight text-transparent md:-mb-44 md:text-[14rem] dark:text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold leading-tight text-slate-700 md:text-5xl dark:text-slate-200">
            দুর্ভাগ্যবশত <br />
            এই পৃষ্ঠা খুঁজে পাওয়া যায়নি
          </h2>
          <p className="text-md text-slate-500 md:text-xl dark:text-slate-300">
            আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান না।
            <br />
            হোম পেজে ফিরে যেতে পারেন অথবা বাকি পেজগুলো ঘুরে দেখতে পারেন।
          </p>
          <div>
            <Link href="/">
              <Button variant="default" size="lg">
                হোম পেজে ফিরে যান
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;
