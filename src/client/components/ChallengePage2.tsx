import { CheckIcon } from '@heroicons/react/24/outline';

export default function ChallengePage2() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* Left Side */}
          <div className=" bg-white shadow-md h-full rounded-lg dark:text-white dark:bg-gray-900 dark:border dark:border-slate-500 py-8 px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Brief
            </h2>
            <p className="mt-3 max-w-3xl ">
              Your challenge is to build out this age calculator app and get it
              looking as close to the design as possible.
            </p>
            <p className="mt-3 max-w-3xl ">
              Your challenge is to build out this age calculator app and get it
              looking as close to the design as possible.
            </p>
            <div className=" mt-3">
              <div className="flex space-x-2">
                <span className=" font-extrabold">.</span>
                <p>
                  View an age in years, months, and days after submitting a
                  valid date through the form
                </p>
              </div>
              {/* second part */}
              <div className="flex space-x-2 ">
                <span className=" font-extrabold">.</span>
                <p>Receive validation errors if:</p>
              </div>
              <ul className=" ml-4">
                <li className="flex space-x-2">
                  <span className=" font-extrabold">.</span>
                  <p>Receive validation errors </p>
                </li>
                <li className="flex space-x-2">
                  <span className=" font-extrabold">.</span>
                  <p>Receive validation errors </p>
                </li>
                <li className="flex space-x-2">
                  <span className=" font-extrabold">.</span>
                  <p>Receive validation errors </p>
                </li>
                <li className="flex space-x-2">
                  <span className=" font-extrabold">.</span>
                  <p>Receive validation errors </p>
                </li>
              </ul>
              {/* */}
              <div className="flex space-x-2">
                <span className=" font-extrabold">.</span>
                <p>
                  View an age in years, months, and days after submitting a
                  valid date through the form
                </p>
              </div>
              <div className="flex space-x-2">
                <span className=" font-extrabold">.</span>
                <p>View an age in years, months, and days after submitting a</p>
              </div>
              <div className="flex space-x-2">
                <span className=" font-extrabold">.</span>
                <p>
                  <span className=" text-xl font-bold">Bonus : </span>an age in
                  years, months, and days after submitting a
                </p>
              </div>
              <div className="mt-3 space-y-2">
                <p>
                  Download the project and go through the README.md file. This
                  will provide further details about the project and help you
                  get set up.
                </p>
                <p>
                  Want some support on the challenge? Join our Slack community
                  and ask questions in the help channel.
                </p>
              </div>
            </div>
          </div>
          {/* end here */}
          <div className="mt-8 grid grid-cols-1 gap-y-8 md:grid-cols-1 lg:mt-0 lg:grid-cols-1">
            {/* First Card */}
            <div className="col-span-1 shadow-md rounded-lg bg-white dark:text-white dark:bg-gray-900 dark:border dark:border-slate-500 h-80 py-8 px-8  space-y-2">
              <div>
                <h1 className=" text-2xl font-medium">Assets provided</h1>
              </div>
              <div className=" mt-4 flex items-center space-x-2">
                <CheckIcon className="dark:text-green-600 h-6 text-indigo-700" />
                <p>
                  Sketch and Figma design file access -
                  <span className=" underline text-lg font-bold">
                    Unlock with Pro
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className=" dark:text-green-600 h-6 text-indigo-700" />
                <p>JPEG design files for mobile & desktop layouts</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="dark:text-green-600 h-6 text-indigo-700" />
                <p>Style guide for fonts, colors, etc.</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="dark:text-green-600 h-6 text-indigo-700" />
                <p>Optimized image assets</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="dark:text-green-600 h-6 text-indigo-700" />
                <p>README file to help you get started</p>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="dark:text-green-600 h-6 text-indigo-700" />
                <p>HTML file with pre-written content</p>
              </div>
            </div>
            {/* Second Card section*/}
            <div className="col-span-1 rounded-lg shadow-md bg-white dark:text-white dark:bg-gray-900 dark:border dark:border-slate-500 h-80 py-8 px-8  space-y-2">
              <div>
                <h1 className=" text-2xl font-medium">
                  Ideas to test yourself
                </h1>
              </div>
              <div className=" mt-4 flex space-x-2">
                <span className="">1.</span>
                <p>
                  Write your styles using a pre-processor,such as
                  <span className=" underline"> Sass</span>,
                  <span className=" underline"> Less</span>
                  or <span className="underline"> Stylus</span>
                </p>
              </div>
              <div className="flex  space-x-2">
                <span className="">2.</span>
                <p>
                  Train your eye for detail by getting your solution as close to
                  the design as you can
                </p>
              </div>
              <div className="flex space-x-2">
                <span className="">3.</span>
                <p>
                  Try estimating the time it will take for you to build the
                  project. Then see if the time taken matches up to your
                  estimate. Project estimations are a skill that is often
                  overlooked but is essential for professional developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
