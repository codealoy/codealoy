export default function SubmitPage() {
  return (
    <form className=" shadow-md border-t dark:border-none p-6 rounded-lg max-w-[800px] mx-auto dark:bg-gray-800/60">
      <div>
        <div>
          <label
            htmlFor="photo"
            className=" mt-2 block text-sm font-semibold text-gray-700 dark:text-white tracking-widest"
          >
            Solution title <span className="text-red-600"> *</span>
          </label>
          <p className="mt-1 text-sm text-gray-500 dark:text-white italic">
            Include some of the tools and techniques you used to complete the
            challenge.
          </p>
        </div>

        <div className="mt-1 grid grid-cols-1 gap-y-6 sm:grid-cols-1">
          <div className=" sm:col-span-4 space-y-4">
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full flex-auto rounded-md border border-gray-300 dark:border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder=" e.g. Responsive landing page using CSS Grid"
              />
              <p className=" text-[12px] mt-2 text-gray-500 dark:text-white text-right">
                Characters remaining: 70
              </p>
            </div>
            <div className="secondCard">
              <div>
                <label
                  htmlFor="photo"
                  className=" block text-sm font-semibold text-gray-700 dark:text-white tracking-widest"
                >
                  Repository URL <span className="text-red-600"> *</span>
                </label>
              </div>

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full mt-2  flex-auto rounded-md border border-gray-300 dark:border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>

            <div className="thirdCard  pt-4">
              <div>
                <label
                  htmlFor="photo"
                  className=" block text-sm font-semibold text-gray-700 dark:text-white tracking-widest"
                >
                  Live site URL <span className="text-red-600"> *</span>
                </label>
                <p className="mt-1 text-sm text-gray-500 dark:text-white italic">
                  Include some of the tools and techniques you used to complete
                  the challenge.
                </p>
              </div>

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full mt-2 flex-auto rounded-md border border-gray-300 dark:border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
            {/* Third card end here */}

            <div className="forthCard pt-4">
              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm font-semibold text-gray-700 dark:text-white tracking-widest"
                >
                  Tags
                </label>
                <p className="mt-1 text-sm text-gray-500 dark:text-white italic">
                  Add up to 5 tags based on your tools and approaches for this
                  project. We don’t require HTML, CSS, and JavaScript tags, as
                  they are the foundational front-end languages. Don’t see the
                  tag you want? Request it by emailing
                  <span className=" underline"> hi@frontendmentor.io.</span>
                </p>
              </div>

              <div className=" mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-0 bg-white/5 text-gray-400 bg-white dark:bg-gray-800 ring-white/10 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Turkey</option>
                  <option>Bangladesh</option>
                  <option>Australia</option>
                  <option>India</option>
                </select>
              </div>
            </div>

            <div className="fifthCard pt-4">
              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm font-semibold text-gray-700 dark:text-white tracking-widest"
                >
                  Questions for the community
                </label>
                <p className="mt-1 text-sm text-gray-500 dark:text-white italic">
                  Please ensure you add specific questions you'd like people to
                  answer if you want feedback. Specific questions are more
                  likely to receive helpful feedback than general statements
                  like "Feedback welcome". Things to consider when asking for
                  specific feedback include:
                  {/* <span className=" underline"> hi@frontendmentor.io.</span> */}
                </p>
              </div>
              <ul className=" mt-2 ml-3">
                <li className="flex space-x-2 items-center">
                  <span className=" text-gray-500 dark:text-white">.</span>
                  <p className=" text-sm text-gray-500 dark:text-white italic">
                    What did you find difficult while building the project?
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <span className=" text-gray-500 dark:text-white">.</span>
                  <p className=" text-sm text-gray-500 dark:text-white italic">
                    Which areas of your code are you unsure of?
                  </p>
                </li>
                <li className="flex space-x-2 items-center">
                  <span className=" text-gray-500 dark:text-white">.</span>
                  <p className=" text-sm text-gray-500 dark:text-white italic">
                    Do you have any questions about best practices?
                  </p>
                </li>
              </ul>
              <div className="mt-4 bg-[#f0f4f4] dark:bg-gray-500/10 p-4">
                <div className=" mt-4 flex justify-between items-center mb-2">
                  <div className=" text-sm text-gray-500 dark:text-white space-x-4">
                    <span className="">Write</span>
                    <span>Preview</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-white">
                    MARKDOWN HELP
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full flex-auto rounded-md border border-gray-300 dark:border-0 mb-6 bg-white/5 px-3.5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  // className="block w-full rounded-md border border-gray-300 py-3 px-4 mb-6 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  aria-describedby="message-max"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            SUBMIT SOLUTION
          </button>
        </div>
      </div>
    </form>
  );
}
