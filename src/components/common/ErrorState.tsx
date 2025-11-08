'use client';

import { motion } from 'framer-motion';

import { fadeUpAnimation } from '@/config/animation';

import GlitchText from '@/components/animated/GlitchText';
import { Button } from '@/components/ui/button';

const errorData = {
  404: {
    code: 404,
    title: (
      <>
        দুর্ভাগ্যবশত <br />
        এই পৃষ্ঠা খুঁজে পাওয়া যায়নি
      </>
    ),
    description: (
      <>
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান না।
        <br />
        হোম পেজে ফিরে যেতে পারেন অথবা বাকি পেজগুলো ঘুরে দেখতে পারেন।
      </>
    ),
    buttonText: 'হোম পেজে ফিরে যান',
    buttonLink: '/',
  },
} as const;

export default function ErrorState({
  errorCode = 404,
}: {
  errorCode?: keyof typeof errorData;
}) {
  const error = errorData[errorCode];
  return (
    <section className="my-32 flex min-h-[80dvh] items-center justify-center">
      <motion.div
        className="relative px-5"
        initial="initial"
        animate="animate"
        variants={fadeUpAnimation}
      >
        <div className="mx-auto flex max-w-full flex-col items-center justify-center space-y-10 text-center md:max-w-7xl">
          <GlitchText
            speed={1.5}
            enableShadows={true}
            enableOnHover={false}
            className="text-primary text-start"
          >
            {error.code}
          </GlitchText>
          <h1 className="text-2xl leading-tight font-bold md:text-5xl">
            {error.title}
          </h1>
          <p className="text-md text-slate-500 md:text-xl dark:text-slate-300">
            {error.description}
          </p>
          <div>
            <a href={error.buttonLink}>
              <Button variant="default" size="lg">
                {error.buttonText}
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
