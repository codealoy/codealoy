import { BlogPosts } from '../../components/home/BlogPosts';

const BlogPage = () => {
  return (
    <div className="relative mx-auto mb-20 min-h-screen max-w-8xl px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-700 dark:text-slate-300">
          Blog Posts
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
          Want to learn something new? Don&apos;t get rid of anything, just put
          it in really really nice looking containers.
        </p>
      </div>
      <div>
        <BlogPosts />
      </div>
    </div>
  );
};
export default BlogPage;
