import Image from 'next/image';
import ProfileImage from '../client/images/profile-image.jpg';

const ProfileSettings = () => {
  return (
    <>
      <form className="sm:w-5/6 md:w-1/2 lg:w-3/5  xl:w-1/2 border rounded-lg p-5 flex flex-col m-auto mt-10 dark:bg-slate-800 dark:border-slate-600 mb-5">
        <div className=" ">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="">
              <div className="mb-5">
                <h2 className="text-lg font-bold tracking-wider leading-7 text-gray-900 dark:text-gray-300 sm:text-slate-800">
                  Personal
                </h2>
              </div>
              <div className="flex ">
                <div className="">
                  <Image
                    src={ProfileImage}
                    alt="Profile Image"
                    className="w-40 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center ml-5">
                  <p className="text-lg font-bold dark:text-gray-300">Avatar</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-500">
                    Image cannot be more than 250KB
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Name */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="sm:col-span-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>

              {/* Slack User Name */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Slack username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Location
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    autoComplete="Location"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>

              <h3 className="font-bold dark:text-gray-300">BIO</h3>
              {/* Website */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Website
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Location"
                    id="Location"
                    autoComplete="Location"
                    placeholder="e.g https://www.youtube..com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Bio */}
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 dark:text-gray"
                >
                  Bio
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={7}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                    defaultValue={
                      'Love to learn new skills. Now learning React Js. Full and fresh code is my power .'
                    }
                  />
                </div>
                <p className="mt-3 text-md leading-6 text-gray-900 flex justify-end dark:text-gray-300">
                  Characters remaining:<span className="font-bold">300</span>
                </p>
              </div>
              {/* currently learning */}

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 "
                >
                  Currently Learning
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={7}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-md leading-6 text-gray-900 flex justify-end dark:text-gray-300">
                  Characters remaining:<span className="font-bold">300</span>
                </p>
              </div>

              {/* Links */}
              <h3 className="font-bold text-lg tracking-wide text-black dark:text-gray-300">
                Links
              </h3>
              {/* Codepen */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  CodePen URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="codepen"
                    id="codepen"
                    autoComplete="codepen"
                    placeholder="e.g https://www.codepen.io"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Codewars URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Codewars URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="codewars"
                    id="codewars"
                    autoComplete="codewars"
                    placeholder="e.g https://www.codewars.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Dev.to URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Dev.to URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="dev"
                    id="dev"
                    autoComplete="dev"
                    placeholder="e.g https://www.dev.to/username"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* freeCodeCamp URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  freeCodeCamp URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="freecodecamp"
                    id="freecodecamp"
                    autoComplete="freecodecamp"
                    placeholder="e.g https://www.freecodecamp.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* GitHub URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  GitHub URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="github"
                    id="github"
                    autoComplete="github"
                    placeholder="e.g https://www.github.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* GitLab URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  GitLab URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="gitlab"
                    id="gitlab"
                    autoComplete="gitlab"
                    placeholder="e.g https://www.gitlab.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Hashnode URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Hashnode URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="hashnode"
                    id="hashnode"
                    autoComplete="hashnode"
                    placeholder="e.g https://www.hashnode.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* LinkedIn URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  LinkedIn URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="linkdin"
                    id="linkdin"
                    autoComplete="linkdin"
                    placeholder="e.g https://www.linkdin.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Medium URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Medium URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="medium"
                    id="medium"
                    autoComplete="medium"
                    placeholder="e.g https://www.medium.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* StackOverflow URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  StackOverflow URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="stackoverflow"
                    id="stackoverflow"
                    autoComplete="stackoverflow"
                    placeholder="e.g https://www.stackoverflow.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Twitch URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Twitch URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="twitch"
                    id="twitch"
                    autoComplete="twitch"
                    placeholder="e.g https://www.twitch.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* Twitter URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  Twitter URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="twitter"
                    id="twitter"
                    autoComplete="twitter"
                    placeholder="e.g https://www.twitter.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
              {/* YouTube URL */}
              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  YouTube URL
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="youtube"
                    id="youtube"
                    autoComplete="youtube"
                    placeholder="e.g https://www.youtube.com"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 dark:bg-slate-700 dark:border-none dark:ring-gray-600 dark:text-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-medium active:text-slate-700 focus:outline-none focus:ring focus:ring-sky-500 rounded leading-6 text-gray-900 dark:text-gray-300 px-3 py-2 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="dark:highlight-white/20 flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-6 font-medium italic tracking-wider text-white hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-40 dark:hover:bg-indigo-500 sm:w-1/2 sm:text-sm sm:tracking-tight sm:px-2 "
          >
            UPDATE PROFILE
          </button>
        </div>
      </form>
    </>
  );
};
export default ProfileSettings;
