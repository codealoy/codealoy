import Image from 'next/image';
import codealoyLogo from '../images/Codealoy.png';

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-screen -mt-[124px] flex-col items-center justify-center">
        <Image
          src={codealoyLogo}
          alt="Codealoy-Logo"
          className="mb-5 h-20 w-20 rounded-full"
        />
        <p className="text-2xl font-bold text-slate-700 dark:text-slate-100">
          লগইন অথবা রেজিস্ট্রেশন করুন
        </p>
        <p className="mt-4 font-light text-slate-700 dark:text-slate-400">
          আপনার আকাউন্টে লগইন করুন, যদি আপনার কোন আকাউন্ট না থাকে তাহলে আকাউন্ট
          রেজিস্ট্রেশন করুন
        </p>
        <div className="mt-5 flex flex-col">
          <button className="text-l focus:shadow-outline m-2 mt-2 flex h-12 w-80 select-none items-center justify-center rounded border p-2 font-bold text-slate-500 shadow hover:bg-violet-600 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
            <span className="mr-5 inline-flex">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            গিটহাব অ্যাকাউন্ট ব্যবহার করুন
          </button>

          <button className="focus:shadow-outline m-2 flex h-12 w-80 select-none items-center justify-center rounded border p-2 font-bold text-slate-500 shadow hover:bg-violet-600 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 text-l">
            <span className="mr-5 inline-flex">
              <svg
                className="h-4 w-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
            গুগল অ্যাকাউন্ট ব্যবহার করুন
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
