'use client';

import React from 'react';
import { useWhileInView } from '@/hooks/useWhileInView';
import { motion } from 'framer-motion';
import { HiOutlineTerminal } from 'react-icons/hi';
import {
  HiOutlineComputerDesktop,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

import { fadeFromRightAnimation } from '@/config/animation';

import { LeftSkewBoxPattern, RightSkewBoxPattern } from '@/components/patterns';
import { BottomWavePattern } from '@/components/patterns/BottomWavePattern';

export default function HighlightedFeatures() {
  const ref = React.useRef<HTMLDivElement>(null!);

  const controlAnimation = useWhileInView(ref);

  const liveCodingEditorFeatures = [
    {
      name: 'লোকাল মেশিনের চেয়ে দ্রুত ডেভেলপমেন্ট',
      description:
        'ধীরগতির বিল্ড টাইম এবং কনটেক্সট-সুইচিংয়ে সময় অপচয় থেকে মুক্তি পান। আমাদের শক্তিশালী VM-গুলি আপনার কোডকে লোকাল মেশিনের তুলনায় ২০০ গুণ দ্রুত গতিতে চালাতে পারে এবং মুহূর্তের মধ্যে যেকোনো প্রজেক্ট সেটআপ করে ফেলতে পারে।',
      icon: HiOutlineRocketLaunch,
    },
    {
      name: 'রেডিমেড কোডিং টেমপ্লেটস',
      description:
        'আমরা ডেভ কন্টেইনার ব্যবহার করে আপনার কোডিং-এর সমস্ত প্রয়োজনীয় টুল, লাইব্রেরি এবং ডিপেন্ডেন্সি অটোমেটিক্যালি ইনস্টল করি, যাতে আপনি সেটআপ এড়িয়ে ইনস্ট্যান্টলি কোডিং শুরু করতে পারেন।',
      icon: HiOutlineTerminal,
    },
    {
      name: 'যেকোনো কম্পিউটারে কাজ করে',
      description:
        'আপনার কম্পিউটারটি পুরাতন হোক বা নতুন, অপারেটিং সিস্টেম উইন্ডোস, ম্যাক বা লিনাক্স হোক, আমাদের ক্লাউড বেইজড এডিটর যেকোনো কম্পিউটারে কাজ করতে পারে।',
      icon: HiOutlineComputerDesktop,
    },
  ];

  return (
    <section className="relative overflow-hidden py-48">
      <div
        className="absolute top-1/2 left-0 max-w-[1612px] -translate-y-1/2 max-md:hidden"
        aria-hidden="true"
      >
        <LeftSkewBoxPattern />
      </div>
      <div
        className="absolute top-1/2 right-0 max-w-[1612px] -translate-y-1/2 max-md:hidden"
        aria-hidden="true"
      >
        <RightSkewBoxPattern />
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="border-primary/30 dark:bg-dark-light/30 relative isolate overflow-hidden border bg-white/10 px-6 py-20 shadow-lg sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 dark:border-gray-700/15">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-1 lg:max-w-md">
              <p className="text-primary leading-normal font-medium">
                ক্লাউড বেইজড
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl dark:text-slate-200">
                লাইভ কোডিং এডিটর
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                শুধুমাত্র সাঁতার দেখে দেখে যেমন সাঁতার শেখা যায় না, তেমনি কোডিং
                বা প্রোগ্রামিংও শুধু দেখে দেখে শেখা সম্ভব নয়। শেখার পাশাপাশি
                তাই প্রাকটিস করাটাই বেশি গুরুত্বপূর্ণ।
                <br />
                <br />
                কোডালয় প্ল্যাটফর্মে রয়েছে ক্লাউড বেইজড লাইভ কোডিং এডিটর ফিচার,
                যেটা যেকোনো টপিক শেখার সাথে সাথেই প্রাকটিস করার সুযোগ দিবে।
              </p>
            </div>

            <motion.div
              className="lg:row-span-2"
              ref={ref}
              initial="initial"
              animate={controlAnimation}
              variants={fadeFromRightAnimation}
            >
              <img
                src="/images/features/codealoy-live-coding-editor-2K6qzfcYzU9t.webp"
                alt="Live coding editor"
                className="ring-primary/15 relative -z-10 max-w-xs min-w-full rounded-xl shadow-xl ring-1 lg:w-5xl lg:max-w-none xl:w-296"
                width={2360}
                height={1321}
              />
            </motion.div>

            <div className="lg:border-priamry/10 max-w-xl border-dashed lg:row-start-2 lg:mt-10 lg:max-w-md lg:border-t lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {liveCodingEditorFeatures.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="ml-8 inline-block font-semibold text-slate-700 dark:text-slate-200">
                      <feature.icon
                        className="text-primary absolute top-1 left-0 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                    <br />
                    <dd className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <BottomWavePattern />
        </div>
      </div>
    </section>
  );
}
