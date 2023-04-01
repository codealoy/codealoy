import Head from 'next/head';

import { CTA } from '../components/home/CTA';
// import { FAQ } from '../components/home/FAQ';
import { useEffect, useState } from 'react';
import Joyride from 'react-joyride';
import { Divider } from '../components/Divider';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { Hero } from '../components/home/Hero';
import { HighlightedFeatures } from '../components/home/HighlightedFeatures';
import { LatestBlogPosts } from '../components/home/LatestBlogPosts';
import { LatestCourses } from '../components/home/LatestCourses';
import { Team } from '../components/home/Team';
import { SITE_TITLE } from '../constants/site-settings';

const IndexPage = () => {
  const [mount, setMount] = useState(false);
  const [steps, setSteps] = useState([
    {
      target: '.step-1',
      content: 'These are our super awesome projects!',
      title: 'Our projects',
    },
  ]);

  useEffect(() => {
    setMount(true);
    return () => {
      setMount(false);
    };
  }, []);

  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content={SITE_TITLE} />
        <meta key="og:title" property="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>

      {mount && (
        <Joyride
          steps={steps}
          run={true}
          continuous
          hideCloseButton
          showProgress
          showSkipButton
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
      )}

      <Hero />

      <FeatureGrid />

      <Divider />

      <HighlightedFeatures />

      <Divider />

      <LatestCourses />

      {/* <FAQ /> */}

      <Divider />

      <LatestBlogPosts />

      <Divider />

      <Team />

      <CTA />
    </>
  );
};

export default IndexPage;
