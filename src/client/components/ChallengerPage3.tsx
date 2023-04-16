import { BeakerIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: `আপনার প্রথম সমাধান জমা দিন`,
    description: `সম্প্রদায়ের প্রচেষ্টাকে আনলক করতে এই চ্যালেঞ্জে আপনার নিজস্ব সমাধান জমা দিন। অন্যান্য ব্যক্তির কোড পর্যালোচনা করা আপনাকে দ্রুত শিখতে এবং অন্যান্য লোকেরা কীভাবে একই সমস্যাগুলি মোকাবেলা করেছে তা দেখতে সহায়তা করতে পারে।`,
    icon: BeakerIcon,
  },
];

export default function ChallengePage3() {
  return (
    <div className="mt-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-base font-bold uppercase tracking-wider dark:text-gray-300">
          আমার সমাধান
        </h2>
        <div className="mt-16 w-full">
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="dark:highlight-white/5 flow-root rounded-lg bg-slate-100 px-6 pb-8  dark:bg-slate-800">
                  <div className="-mt-10">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-full p-6 bg-indigo-500 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-3xl font-normal tracking-tight text-slate-900 dark:text-slate-300">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-center text-base max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="my-10">
                    <span className="dark:highlight-white/20 py-3 px-8 h-12 items-center justify-center tracking-[2px] rounded-full bg-indigo-500  hover:bg-indigo-600 dark:bg-indigo-600 font-bold text-base text-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:hover:bg-indigo-500 sm:w-auto">
                      সমাধান জমা দিন
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
