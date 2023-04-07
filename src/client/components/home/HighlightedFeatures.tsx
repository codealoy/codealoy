import { BoltIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import learnFasterImage from '~/client/images/home/codealoy-learn-faster.svg';
import learnFasterImageBlurDataUrl from '~/client/images/home/codealoy-learn-faster.svg.blur';
import codeEditorImage from '~/client/images/home/codealoy-live-editor.svg';
import codeEditorImageBlurDataUrl from '~/client/images/home/codealoy-live-editor.svg.blur';

export const HighlightedFeatures = () => {
  return (
    <div className="relative overflow-hidden bg-white py-32 dark:border-t dark:border-slate-100/5 dark:bg-slate-900">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:py-20">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
              <CommandLineIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                লাইভ কোডিং এডিটর
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                শুধুমাত্র সাঁতার দেখে দেখে যেমন সাঁতার শেখা যায় না, তেমনি কোডিং
                বা প্রোগ্রামিংও শুধু দেখে দেখে শেখা সম্ভব নয়। পরিচিত একটি
                প্রবাদ আছে, &quot;গাইতে গাইতে গায়েন&quot;। শেখার পাশাপাশি তাই
                প্রাকটিস করাটাই বেশি গুরুত্বপূর্ণ।
                <br />
                <br />
                কোডালয় প্ল্যাটফর্মে রয়েছে লাইভ কোডিং এডিটর ফিচার, যেটা যেকোনো
                টপিক শেখার সাথে সাথেই প্রাকটিস করার সুযোগ দিবে। আর লাইভ প্রাকটিস
                করতে পারায় শিক্ষণীয় বিষয়টির উপযুক্ত ব্যবহার সম্পর্কে
                পাকাপোক্ত ধারণা পাওয়া যাবে। তাছাড়া যেকোন কনফিউশনের থাকলে
                সেগুলোর তাৎক্ষণিক সমাধান করা সম্ভব হবে।
              </p>
              <div className="mt-8">
                <Link href="/courses">
                  <span className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-500">
                    শেখা শুরু করুন
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <div className="relative w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-auto lg:w-[1175px] lg:max-w-none">
                <Image
                  className="object-cover"
                  src={codeEditorImage}
                  alt="Codealoy live code editor"
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={codeEditorImageBlurDataUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:py-20">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
              <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="mt-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                দ্বিগুণ গতিতে শেখার সুযোগ
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                ইউটিউব বা অন্য কোন সাইটের ভিডিও টিউটোরিয়ালগুলো দেখে প্রোগ্রামিং
                বা ওয়েব ডেভেলপমেন্ট শেখা তুলনামূলকভাবে বেশি সময় সাপেক্ষ।
                সাধারণত ভিডিও টিউটোরিয়ালগুলোতে গড়ে ১৫০ শব্দ/মিনিট গতিতে কথা
                বলে, যেখানে আমরা গড়ে ~৩০০ শব্দ/মিনিট এর বেশি গতিতে পড়তে পারি।
                তাছাড়া বাংলা ভাষাতে মানসম্পন্ন টিউটোরিয়ালের রয়েছে অভাব।
                <br />
                <br />
                একারণে আমাদের কোর্সগুলোতে লিখিত কনটেন্টের উপর বেশি জোর দেওয়া
                হয়েছে, যেটা কমপক্ষে দ্বিগুণ গতিতে দ্রুত শেখায় সহায়তা করবে।
              </p>
              <div className="mt-8">
                <Link href="/courses">
                  <span className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:hover:bg-indigo-500">
                    শেখা শুরু করুন
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <div className="w-full overflow-hidden rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-auto lg:w-[1175px] lg:max-w-none">
                <Image
                  src={learnFasterImage}
                  alt="Codealoy learn 2x faster"
                  placeholder="blur"
                  loading="lazy"
                  blurDataURL={learnFasterImageBlurDataUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
