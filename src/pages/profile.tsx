import Image from 'next/image';
import ProfileImage from '../client/images/profile-image.jpg';
import portfolioImage from '../client/images/protfolio-Image.webp';
const Profile = () => {
  return (
    <>
      <div
        className="flex space-x-6 mx-6 my-10 justify-center md:mx-0 
      "
      >
        <div className="h-auto w-1/4 md:w-1/4">
          <div className="border p-5 rounded-lg  dark:bg-slate-800 dark:border-slate-600 md:p-2 ">
            <div className="flex justify-center items-center flex-col pb-5 md:pb-2 ">
              <Image src={ProfileImage} alt="" className="w-24 rounded-full" />
              <h1 className="text-2xl dark:text-gray-300 md:text-xl">
                Md Meshkat Hossain Himu
              </h1>
            </div>

            <div className="flex justify-center items-center flex-col bg-slate-100 pt-5 rounded-lg dark:bg-slate-700 md:px-2 md:pt-2 ">
              <p className="border p-2 rounded flex text-slate-500 bg-white dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300 md:text-sm  ">
                <span></span>
                <span className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-briefcase mr-2 text-slate-950 dark:text-gray-300"
                    viewBox="0 0 16 16"
                  >
                    {' '}
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />{' '}
                  </svg>
                </span>
                Unavailable for work
              </p>
              <div className="flex w-5/6 flex-col justify-center items-center mt-3 mb-5 dark:text-slate-300 md:w-full ">
                <p className="md:text-sm">
                  <span className="font-extrabold dark:text-slate-300 md:text-sm">
                    30
                  </span>{' '}
                  of 150 points
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200 md:w-5/6">
                  <div className="bg-blue-600 h-2.5 rounded-full w-1/3 "></div>
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-between md:mt-2">
              <p className="text-slate-500 dark:text-slate-300">Mentor Score</p>
              <p className="dark:text-slate-300">30</p>
            </div>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">Solution</p>
              <p className="dark:text-slate-300">1</p>
            </div>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">Comments</p>
              <p className="dark:text-slate-300">0</p>
            </div>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">
                Helpful comments
              </p>
              <p className="dark:text-slate-300">0</p>
            </div>
          </div>
          <div className="border rounded-lg mt-5  p-5 dark:border-gray-500 dark:bg-slate-800">
            <h3 className="font-extrabold text-xl dark:text-slate-200  tracking-widest">
              Credits
            </h3>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">Design</p>
              <p className="dark:text-slate-300">0</p>
            </div>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">Premium</p>
              <p className="dark:text-slate-300">1</p>
            </div>
            <div className="flex mt-5 md:mt-2 justify-between">
              <p className="text-slate-500 dark:text-slate-300">Screenshoot</p>
              <p className="dark:text-slate-300">5</p>
            </div>
          </div>
        </div>
        <div className="w-3/5 pl-5 md:w-2/3 md:pl-0">
          <div className="feed-head flex justify-between">
            <div className="">
              <button className="px-3 mr-3 rounded text-xl active:text-slate-700 focus:outline-none focus:ring focus:ring-sky-500 dark:text-slate-300 md:text-base">
                My feed
              </button>
              <button className="px-2 mr-3 rounded active:text-slate-700 focus:outline-none focus:ring focus:ring-sky-500 text-xl dark:text-slate-300 md:text-base">
                Latest feedback
              </button>
              <hr className="mt-2"></hr>
            </div>
            <div className="">
              <a
                // className="text-lg px-5 py-3 rounded-full bg-sky-500 hover:bg-sky-700 hover:rounded-full text-white italic font-bold tracking-widest font-mono md:text-base md:px-3 md:py-2 md:tracking-normal"
                className="dark:highlight-white/20 flex h-10 w-full items-center justify-center rounded-lg bg-indigo-600 px-6 font-medium italic tracking-wider text-white hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-40 dark:hover:bg-indigo-500 sm:w-auto"
                href=""
              >
                SUBMIT A SOLUTION
              </a>
            </div>
          </div>
          <div className="border rounded-lg p-5 mt-5 dark:bg-slate-800 dark:border-slate-500">
            <p className="text-slate-500 text-sm mb-5 dark:text-slate-300">
              You’ve also completed this challenge
            </p>

            <ul>
              <li className="bg-slate-100 p-5 rounded-xl dark:bg-slate-700 ">
                <div className="flex">
                  <div className="main">
                    <Image
                      src={ProfileImage}
                      alt=""
                      className="w-14 rounded-full"
                    />
                  </div>
                  <div className="ml-5">
                    <h5 className="font-bold font-mono dark:text-slate-300">
                      Henry Fleitas Mezquia •{' '}
                      <span className="text-sky-500 font-bold">50</span>
                    </h5>
                    <div className="flex text-sm text-slate-500">
                      <p className="mr-4 dark:text-slate-400">@henryfm1994 </p>
                      <span className="italic dark:text-slate-400">
                        Submitted about 7 hours ago
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg flex mt-5 dark:border-slate-400 ">
                  <div className="image w-3/5 ">
                    <Image
                      className="rounded-lg"
                      src={portfolioImage}
                      alt="Portfolio Image of user"
                    />
                  </div>
                  <div className="flex flex-col justify-center pl-5 gap-2">
                    <h2 className="font-medium text-lg dark:text-slate-200">
                      Landing Page using Flexbox
                    </h2>
                    <p className="text-sky-500">
                      #react{' '}
                      <span className="text-sky-500 ml-3">#sass/scss</span>
                    </p>

                    <div className="flex gap-3 item-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-chat-left text-slate-400 dark:text-slate-100"
                          viewBox="0 0 16 16"
                        >
                          {' '}
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />{' '}
                        </svg>
                      </span>
                      <span className="dark:text-slate-300 -mt-1">0</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-heart text-slate-400 dark:text-slate-100"
                          viewBox="0 0 16 16"
                        >
                          {' '}
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{' '}
                        </svg>
                      </span>
                      <span className="dark:text-slate-300 -mt-1">2</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-bookmark text-slate-400 dark:text-slate-100"
                          viewBox="0 0 16 16"
                        >
                          {' '}
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />{' '}
                        </svg>
                      </span>
                      <span className="dark:text-slate-300 -mt-1">0</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
