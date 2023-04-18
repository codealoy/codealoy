import { ResourceList } from '~/client/components/ResourceList';

const ProjectPage = () => {
  return (
    <div className=" mt-10 relative mx-auto mb-20 min-h-screen max-w-8xl bg-white px-4 dark:bg-slate-900 sm:px-6 lg:px-8 xl:px-12">
      <h1 className=" dark:text-white text-center text-xl font-extrabold tracking-widest">
        LEARNING
      </h1>
      <div className=" mt-12 flex items-center justify-between">
        <h2 className=" dark:text-white text-2xl font-medium tracking-wider">
          Online Courses
        </h2>
        <hr className=" dark:bg-gray-700 dark:text-gray-600 w-10/12" />
      </div>
      <ResourceList />
    </div>
  );
};

export default ProjectPage;
