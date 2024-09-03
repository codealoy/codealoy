import React from 'react';

import {
  Counter,
  FeatureGrid,
  Hero,
  HighlightedFeatures,
  HomeCta,
  Team,
} from '@/components/home';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <Counter />
      <HighlightedFeatures />
      <Team />
      <HomeCta />
    </>
  );
}
