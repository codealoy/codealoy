import React from 'react';
import { IconType } from 'react-icons/lib';
import { z } from 'zod';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VARIENT_ENUM = ['feature', 'course', 'blog'] as const;

const BaseCardDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

const FeatureCardDataSchema = BaseCardDataSchema.extend({
  icon: z.custom<IconType>().optional(),
});

const AdaptiveCardPropsSchema = z.object({
  variant: z.enum(VARIENT_ENUM),
  data: FeatureCardDataSchema,
});

type FeatureCardData = z.infer<typeof FeatureCardDataSchema>;
type AdaptiveCardProps = z.infer<typeof AdaptiveCardPropsSchema>;

export function AdaptiveCard({ variant, data }: AdaptiveCardProps) {
  const result = AdaptiveCardPropsSchema.safeParse({ variant, data });

  if (!result.success) {
    console.log('🚀 ~ AdaptiveCard ~ result.error:', result.error.errors);
  }

  return (
    <>{variant === 'feature' && <FeatureCardLayout {...result.data?.data} />}</>
  );
}

const FeatureCardLayout = ({
  title,
  description,
  icon: Icon,
}: FeatureCardData) => {
  return (
    <Card className="relative scale-100 rounded-lg border border-primary/30 bg-white/10 p-3 shadow-lg transition-transform duration-500 hover:scale-105 dark:border-primary/15 dark:bg-dark-light/30">
      <div className="h-full rounded-md border border-dashed border-gray-300 p-10 text-center lg:p-5 dark:border-gray-700">
        {Icon && (
          <span className="inline-flex items-center justify-center rounded-md bg-slate-100/10 p-3 shadow-lg dark:bg-slate-500/10">
            <Icon
              className="h-6 w-6 fill-primary/30 text-primary"
              aria-hidden="true"
            />
          </span>
        )}
        <CardHeader>
          <CardTitle className="text-xl font-bold text-slate-700 dark:text-slate-200">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-base text-slate-700 dark:text-slate-300">
            {description}
          </p>
        </CardContent>
      </div>
    </Card>
  );
};
