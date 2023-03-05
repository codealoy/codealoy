import Head from 'next/head';

import { CTA } from '../components/home/CTA';
// import { FAQ } from '../components/home/FAQ';
import { Divider } from '../components/Divider';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { HighlightedFeatures } from '../components/home/HighlightedFeatures';
import { LatestBlogPosts } from '../components/home/LatestBlogPosts';
import { Team } from '../components/home/Team';
import { SITE_TITLE } from '../constants/site-settings';
import { Hero } from '../components/home/Hero';
import { LatestCourses } from '../components/home/LatestCourses';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>

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
