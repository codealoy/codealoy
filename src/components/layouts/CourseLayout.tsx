import { CourseNavbar } from '@/components/course/CourseNavbar';
import { CourseHeroPattern } from '@/components/patterns';
import { ScrollArea } from '@/components/ui/ScrollArea';

export const CourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto">
      <CourseHeroPattern />
      <section className="flex">
        <CourseNavbar />
        <ScrollArea className="max-h-[90dvh]">
          <div className=" prose flex-auto dark:prose-invert">{children}</div>
        </ScrollArea>
      </section>
    </div>
  );
};
