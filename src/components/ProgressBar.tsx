import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const ProgressBar = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, [router]);
  return null;
};

export default ProgressBar;
