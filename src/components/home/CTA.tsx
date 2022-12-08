import Link from 'next/link';
import React from 'react';

export const CTA = () => {
  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">আজ থেকেই শুরু হোক নতুন পথচলা</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          সফটওয়্যার ডেভেলপার হিসাবে ক্যারিয়ার গড়ে তোলার এখনই উপযুক্ত সময়
        </p>
        <Link href="/courses">
          <span className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto">
            শেখা শুরু করুন
          </span>
        </Link>
      </div>
    </div>
  );
};
