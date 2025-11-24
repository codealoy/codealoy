import type { CollectionEntry } from 'astro:content';
import {
  BookOpen,
  Clock,
  Image as ImageIcon,
  Play,
  Trophy,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface CourseCardProps {
  course: CollectionEntry<'courses'>;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { data, id } = course;
  // Extract course slug from id (e.g., "learn-problem-solving-basic/index" -> "learn-problem-solving-basic")
  const courseSlug = id.replace('/index', '');
  const courseUrl = `/courses/${courseSlug}`;

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-xl">
      {/* Course Cover Image */}
      {data.coverImage ? (
        <div className="bg-muted aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={data.coverImage}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative h-48 overflow-hidden rounded-t-lg bg-linear-to-br from-teal-400 to-yellow-200">
          <div className="flex h-full items-center justify-center">
            <ImageIcon className="h-16 w-16 text-white/80" />
          </div>
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10"></div>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
            {data.level}
          </span>
          <span className="text-muted-foreground flex items-center text-sm">
            <Clock className="mr-1 h-4 w-4" />
            {data.estimation}
          </span>
        </div>
        <CardTitle className="text-xl leading-tight font-bold text-slate-700 dark:text-slate-200">
          {data.title}
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400">
          {data.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <BookOpen className="text-primary mr-2 h-4 w-4" />
            <span className="text-muted-foreground">{data.lessons}</span>
          </div>
          <div className="flex items-center">
            <Trophy className="text-primary mr-2 h-4 w-4" />
            <span className="text-muted-foreground">{data.challenges}</span>
          </div>
          <div className="flex items-center">
            <Play className="text-primary mr-2 h-4 w-4" />
            <span className="text-muted-foreground">{data.playgrounds}</span>
          </div>
          <div className="flex items-center">
            <ImageIcon className="text-primary mr-2 h-4 w-4" />
            <span className="text-muted-foreground">{data.illustrations}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          asChild
          className="w-full transition-transform duration-200 group-hover:scale-105"
        >
          <a href={courseUrl}>কোর্স শুরু করুন</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
