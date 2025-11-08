import { FaRegCircleCheck } from 'react-icons/fa6';

import { BottomSkewBoxPattern } from '@/components/patterns/BottomSkewBoxPattern';
import { TopSkewBoxPattern } from '@/components/patterns/TopSkewBoxPattern';
import { Button } from '@/components/ui/button';

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden py-44 lg:py-56">
      <div
        className="absolute top-0 left-1/2 w-[240%] -translate-x-1/2 sm:w-[150%] lg:w-screen"
        aria-hidden="true"
      >
        <TopSkewBoxPattern />
      </div>
      <div
        className="absolute bottom-0 left-1/2 w-[240%] -translate-x-1/2 sm:w-[150%] lg:w-screen"
        aria-hidden="true"
      >
        <BottomSkewBoxPattern />
      </div>
      <div className="relative z-10 px-5">
        <div className="mx-auto text-center">
          <h2 className="mx-auto max-w-[17ch] text-4xl leading-tight font-semibold text-slate-700 lg:text-5xl lg:leading-tight dark:text-slate-200">
            আজ থেকেই শুরু হোক নতুন পথচলা
          </h2>
          <p className="mx-auto mt-6 max-w-sm lg:max-w-full">
            সফটওয়্যার ডেভেলপার হিসাবে ক্যারিয়ার গড়ে তোলার এখনই উপযুক্ত সময়
          </p>
          <div className="mt-10 lg:mt-14">
            <a href="/courses">
              <Button variant="default" size="lg">
                শেখা শুরু করুন
              </Button>
            </a>
          </div>
          <ul className="mx-auto mt-10 flex max-w-screen-sm flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 lg:mt-20 lg:max-w-3xl">
            <li className="flex items-center">
              <FaRegCircleCheck className="text-primary mr-3 h-5 w-5" />
              <p>বাস্তবসম্মত প্রজেক্টস</p>
            </li>
            <li className="flex items-center">
              <FaRegCircleCheck className="text-primary mr-3 h-5 w-5" />
              <p>হাতে কলমে শিক্ষা</p>
            </li>
            <li className="flex items-center">
              <FaRegCircleCheck className="text-primary mr-3 h-5 w-5" />
              <p>ফ্রি এবং ওপেনসোর্স</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
