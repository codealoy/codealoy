import Head from 'next/head';

import { type NextPage } from 'next';

// import { FAQ } from '~/components/home/FAQ';
import { Divider } from '~/client/components/Divider';
import { CTA } from '~/client/components/home/CTA';
import { FeatureGrid } from '~/client/components/home/FeatureGrid';
import { Hero } from '~/client/components/home/Hero';
import { HighlightedFeatures } from '~/client/components/home/HighlightedFeatures';
import { LatestBlogPosts } from '~/client/components/home/LatestBlogPosts';
import { LatestCourses } from '~/client/components/home/LatestCourses';
import { Team } from '~/client/components/home/Team';
import { SITE_TITLE } from '~/configs/client.configs';

const IndexPage: NextPage = () => {
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
