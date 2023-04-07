import NProgress from 'nprogress';
import React from 'react';

import { useRouter } from 'next/router';

const ProgressBar = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, [router]);
  return null;
};

export { ProgressBar };
