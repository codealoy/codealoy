/* This example requires Tailwind CSS v3.0+ */
export default function ChallengeDetails() {
  return (
    <div className="">
      <div className=" mx-auto   ">
        <div className=" flex justify-between border border-slate-500 relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl md:pt-24 lg:flex lg:pt-0 lg:gap-x-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <div className="space-x-2">
              <span className="inline-flex items-center rounded-full bg-red-100/5 px-2.5 py-0.5 text-xs font-medium text-yellow-600 border border-slate-600">
                FREE
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100/5 px-2.5 py-0.5 text-xs font-medium text-red-600 border border-slate-600">
                HTML
              </span>
              <span className="inline-flex items-center rounded-full bg-yellow-100/5 px-2.5 py-0.5 text-xs font-medium text-indigo-600 border border-slate-600">
                CSS
              </span>
              <span className="inline-flex items-center rounded-full bg-green-100/5 px-2.5 py-0.5 text-xs font-medium text-green-600 border border-slate-600">
                JS
              </span>
            </div>

            <h2 className="mt-4 text-white font-medium text-2xl">
              Age calculator app
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300 w-[580px]">
              This challenge is designed to sharpen your JavaScript and form
              validation skills. Working with dates in JavaScript can be tricky,
              so this will be a nice test!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md border border-slate-500  px-3.5 py-1.5 text-base font-semibold leading-7 bg-gray-100/5 text-white shadow-sm  focus:border-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1 focus:ring-offset-slate-500"
              >
                চ্যালেঞ্জ শুরু করুন
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className=" mt-16  overflow-hidden lg:mt-8">
            <img
              className=" w-[500px] h-[390px]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
            <div className="mt-4 space-x-2">
              <span className=" cursor-pointer inline-flex items-center rounded-full bg-red-100/5 px-2.5 py-0.5 text-xs font-medium text-green-600 border border-slate-600">
                DESKTOP DESIGN
              </span>
              <span className=" cursor-pointer inline-flex items-center rounded-full bg-yellow-100/5 px-2.5 py-0.5 text-xs font-medium text-indigo-600 border border-slate-600">
                MOBILE DESIGN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
