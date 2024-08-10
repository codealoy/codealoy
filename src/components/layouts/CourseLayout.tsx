import { CourseNavbar } from '@/components/course/CourseNavbar';
import { CourseHeroPattern } from '@/components/patterns';

export const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto">
      <CourseHeroPattern />
      <section className="flex">
        <CourseNavbar />
        <div className="prose flex-auto dark:prose-invert">{children}</div>
      </section>
    </div>
  );
};
