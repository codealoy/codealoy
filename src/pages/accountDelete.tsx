const AccountDelete = () => {
  return (
    <>
      <div className="md:w-3/5  w-1/2 flex justify-center flex-col m-auto mt-10 border rounded-xl p-5  dark:bg-slate-800 dark:border-slate-600 mb-5">
        <div className="space-y-5">
          <p className="text-black font-bold tracking-widest dark:text-slate-50">
            REVOKE GITHUB OAUTH ACCESS
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            This will revoke all access to your Frontend Mentor account through
            GitHub OAuth. You will need to go through the authentication process
            again to access your account.
          </p>
          <button className="dark:highlight-white/20 flex h-10 w-full items-center justify-center rounded-lg bg-red-600 px-6 font-medium italic tracking-wider text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-40 dark:hover:bg-red-500 sm:w-auto">
            REVOKE GITHUB ACCESS
            <span className="">
              <svg
                className="ml-3 color: white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {' '}
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  fill="white"
                ></path>{' '}
              </svg>
            </span>
          </button>
        </div>
        <div className="space-y-5 mt-5 bg-red-100 p-5 rounded-lg border-s-8 border-red-600 ">
          <h2 className="text-sm text-red-700 font-bold tracking-widest">
            DANGER ZONE
          </h2>
          <h1 className="text-black font-bold text-xl tracking-wider">
            Delete Codealoy account
          </h1>
          <p>
            This will delete all of your personal information from our database.
            This includes all of your solutions and your mentor score.
          </p>
          <p>
            Your feedback and comments made on other user solutions will remain,
            but will appear as being posted by a Deleted user
          </p>
          <p className="text-black font-bold">
            Once you click the button below there is no going back!
          </p>

          <button className="dark:highlight-white/20 flex h-10 w-full items-center justify-center rounded-lg bg-red-600 px-6 font-medium italic tracking-wider text-white hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-40 dark:hover:bg-red-500 sm:w-auto">
            {' '}
            DELETE ACCOUNT
            <span className="">
              <svg
                className="color: red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M368 128C368 172.4 342.6 211.5 304 234.4V256C304 273.7 289.7 288 272 288H175.1C158.3 288 143.1 273.7 143.1 256V234.4C105.4 211.5 79.1 172.4 79.1 128C79.1 57.31 144.5 0 223.1 0C303.5 0 368 57.31 368 128V128zM167.1 176C185.7 176 199.1 161.7 199.1 144C199.1 126.3 185.7 112 167.1 112C150.3 112 135.1 126.3 135.1 144C135.1 161.7 150.3 176 167.1 176zM280 112C262.3 112 248 126.3 248 144C248 161.7 262.3 176 280 176C297.7 176 312 161.7 312 144C312 126.3 297.7 112 280 112zM3.378 273.7C11.28 257.9 30.5 251.5 46.31 259.4L223.1 348.2L401.7 259.4C417.5 251.5 436.7 257.9 444.6 273.7C452.5 289.5 446.1 308.7 430.3 316.6L295.6 384L430.3 451.4C446.1 459.3 452.5 478.5 444.6 494.3C436.7 510.1 417.5 516.5 401.7 508.6L223.1 419.8L46.31 508.6C30.5 516.5 11.28 510.1 3.378 494.3C-4.526 478.5 1.881 459.3 17.69 451.4L152.4 384L17.69 316.6C1.881 308.7-4.526 289.5 3.378 273.7V273.7z"
                  fill="red"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default AccountDelete;
