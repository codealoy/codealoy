export default function ChallengePage2() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Left Side */}
          <div className="col-span-1 drop-shadow rounded-lg bg-white dark:text-white dark:bg-gray-900 dark:border dark:border-slate-500 h-[300px] py-8 px-8">
            <div>
              <h1 className=" text-2xl font-normal">Download starter files</h1>
            </div>
            <div className=" mt-6 flex items-center space-x-2">
              <p className=" text-base font-normal leading-6	">
                Includes assets, JPG images of the design files, and a basic
                style guide. There’s also a README to help you get started.
              </p>
            </div>
            <div className="mt-8">
              <span className="dark:highlight-white/20 py-3 px-8 h-12 items-center justify-center tracking-[2px] rounded-full bg-[#495eac] font-bold text-base text-white hover:bg-[#29376b]/80 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:hover:bg-indigo-500 sm:w-auto">
                DOWNLOAD STARTER
              </span>
            </div>
          </div>
          {/* end here */}
          <div className="mt-8 grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:mt-0 lg:grid-cols-1">
            {/* First Card */}
            <div className="col-span-1 drop-shadow rounded-lg bg-white dark:text-white dark:bg-gray-900 dark:border dark:border-slate-500 h-[300px] py-8 px-8">
              <div>
                <h1 className=" text-2xl font-normal">
                  Download starter files
                </h1>
              </div>
              <div className=" mt-6 flex items-center space-x-2">
                <p className=" text-base font-normal leading-6	">
                  Includes assets, JPG images of the design files, and a basic
                  style guide. There’s also a README to help you get started.
                </p>
              </div>
              <div className="mt-8 space-x-4">
                <span className="dark:highlight-white/20 py-3 px-8 h-12 items-center justify-center rounded-full tracking-[2px] bg-gray-500 font-bold text-base text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:hover:bg-[#6d7079] sm:w-auto">
                  FIGMA
                </span>
                <span className="dark:highlight-white/20 py-3 px-8 h-12 items-center justify-center rounded-full tracking-[2px] bg-gray-500 font-bold text-base text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:hover:bg-[#6d7079] sm:w-auto">
                  SKETCH
                </span>
              </div>
              <div className="mt-10">
                <p>
                  Become a
                  <span className=" bg-[#3e54a3] m-2 px-2 text-white text-sm rounded-sm tracking-widest">
                    PRO
                  </span>
                  member to get design file access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
