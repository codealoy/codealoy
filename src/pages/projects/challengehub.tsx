import ChallengePage from '~/client/components/ChallengePage';
import ChallengePage2 from '~/client/components/ChallengePage2';
import ChallengePage3 from '~/client/components/ChallengerPage3';
import ChallengePage4 from '~/client/components/ChallengerPage4';

const challengehub = () => {
  return (
    <div className=" relative mx-auto mb-20 min-h-screen  bg-white dark:bg-slate-900  ">
      <ChallengePage />
      <ChallengePage2 />
      <ChallengePage3 />
      <ChallengePage4 />
    </div>
  );
};

export default challengehub;
