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

  const cliVerificationFeatures = [
    {
      name: 'নিজের পছন্দের টুলেই কাজ করুন',
      description:
        'আপনি যে টুলে স্বচ্ছন্দ (VS Code, Cursor, Claude Code কিংবা Codex), সেটাতেই নিজের মেশিনে কাজ করুন। বাস্তব পরিবেশে AI এজেন্টকে অর্কেস্ট্রেট করাই এজেন্টিক ডেভেলপমেন্টের আসল দক্ষতা।',
      icon: HiOutlineComputerDesktop,
    },
    {
      name: 'লোকাল ভেরিফিকেশন',
      description:
        'টাস্ক শেষে শুধু Codealoy CLI টুল চালান, আপনার মেশিনেই টাস্কের ফলাফল যাচাই হয়ে ইনস্ট্যান্ট রিপোর্ট পেয়ে যাবেন। তার সাথে থাকছে প্রোগ্রেস ট্রাক্সিং এর জন্য অনলাইন ড্যাশবোর্ড।',
      icon: HiOutlineTerminal,
    },
    {
      name: 'প্রতিটি প্রজেক্টেই পোর্টফোলিও রেপো',
      description:
        'প্রতিটি প্রজেক্টই একটি পোর্টফোলিও-রেডি গিটহাব রেপো হিসেবে তৈরি হবে, যা ইন্টারভিউ বা ক্লায়েন্টের সামনে আপনার এজেন্টিক ডেভেলপমেন্ট দক্ষতার সরাসরি প্রমাণ হিসেবে কাজ করবে।',
      icon: HiOutlineRocketLaunch,
    },
  ];

  return (
    <section className="relative -mt-40 overflow-hidden py-0 md:py-40 lg:py-60">
      <div
        className="absolute inset-y-0 left-0 hidden h-full w-auto lg:block"
        aria-hidden="true"
      >
        <LeftSkewBoxPattern />
      </div>
      <div
        className="absolute inset-y-0 right-0 hidden h-full w-auto lg:block"
        aria-hidden="true"
      >
        <RightSkewBoxPattern />
      </div>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="border-primary/30 bg-card relative isolate overflow-hidden border px-6 py-48 shadow-lg sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24 dark:border-gray-700/15">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-1 lg:max-w-md">
              <p className="text-primary leading-normal font-medium">
                নিজের টুল, নিজের ডিভাইস
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl dark:text-slate-200">
                নিজের পছন্দের AI টুল ব্যবহার
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                শুধুমাত্র সাঁতার দেখে দেখে যেমন সাঁতার শেখা যায় না, তেমনি AI
                দিয়ে কোডিংও শুধু দেখে দেখে শেখা সম্ভব নয়। তাই দেখে দেখে শেখার
                চেয়ে নিজে করে দেখাটাই বেশি গুরুত্বপূর্ণ।
                <br />
                <br />
                কোডালয়ে আপনি নিজের পছন্দের AI টুল দিয়ে বাস্তব পরিবেশে প্রজেক্ট
                বানাবেন, আর Codealoy CLI সেই কাজের ফলাফল লোকালি যাচাই করবে।
                শুধুমাত্র থিওরি নয়, প্রাকটিক্যাল প্রজেক্ট করবেন, আপনার নিজের
                মেশিনেই।
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
                src="/images/features/codealoy-own-ai-tool-72iqlHqH4Mi1BEgIInqhO.webp"
                alt="Codealoy CLI দিয়ে টাস্ক যাচাই"
                className="ring-primary/15 relative -z-10 max-w-xs min-w-full rounded-xl shadow-xl ring-1 lg:w-5xl lg:max-w-none xl:w-296"
                width={2952}
                height={1856}
              />
            </motion.div>

            <div className="lg:border-priamry/10 max-w-xl border-dashed lg:row-start-2 lg:mt-10 lg:max-w-md lg:border-t lg:pt-10">
              <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {cliVerificationFeatures.map((feature) => (
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
