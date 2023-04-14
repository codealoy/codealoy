import React from 'react';

import ChallengeDetails from '~/client/components/ChallengeDetails';
import ChallengePage2 from '~/client/components/ChallengePage2';
import ChallengePage3 from '~/client/components/ChallengePage3';

type searchData = string | null;

const DetailsPage = () => {
  const [searchQuery, setSearchQuery] = React.useState<searchData>('');

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className=" mt-20 relative mx-auto mb-20 min-h-screen max-w-7xl bg-white px-4 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12">
      <ChallengeDetails />
      <ChallengePage2 />
      <ChallengePage3 />
    </div>
  );
};

export default DetailsPage;
