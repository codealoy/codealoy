import Link from 'next/link';

import { BottomSkewBoxPattern } from '@/components/patterns/BottomSkewBoxPattern';
import { TopSkewBoxPattern } from '@/components/patterns/TopSkewBoxPattern';
import { Button } from '@/components/ui/button';

export const HomeCta = () => {
  return (
    <section className="relative overflow-hidden bg-gray py-36 dark:bg-dark">
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <TopSkewBoxPattern />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <BottomSkewBoxPattern />
      </div>
      <div className="container relative z-10">
        <div className="mx-auto text-center">
          <h2 className="text-5xl font-semibold">
            Start Your Free <br />
            Trial Today.
          </h2>
          <p className="mx-auto mt-5 max-w-sm">
            By creating a custom Web design for your business, we can bring your
            vision to life.
          </p>
          <div className="mt-10">
            <Button variant="default" size="lg">
              Get started
            </Button>
          </div>
          <ul className="mx-auto mt-20 flex max-w-[815px] items-center justify-between max-lg:mt-5 max-md:flex-col max-md:gap-5">
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>No Credit Card Required</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Free For 30 Day Trial.</p>
            </li>
            <li className="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3"
              >
                <path
                  d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke=""
                  className="stroke-paragraph dark:stroke-primary"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Money Back Guarente.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
