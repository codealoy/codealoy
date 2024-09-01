import * as React from 'react';
import { IconType } from 'react-icons/lib';
import { z } from 'zod';

import { cn } from '@/lib/utils';

const VARIANT_ENUM = ['feature'] as const;

const baseCardDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

const featureCardDataSchema = baseCardDataSchema.extend({
  icon: z.custom<IconType>().optional(),
});

const cardPropsSchema = z.object({
  variant: z.enum(VARIANT_ENUM).optional(),
  data: featureCardDataSchema.optional(),
});

type FeatureCardData = z.infer<typeof featureCardDataSchema>;

type InferredCardProps = z.infer<typeof cardPropsSchema>;

type CardProps = InferredCardProps & React.HTMLAttributes<HTMLDivElement>;

const FeatureCardLayout = ({
  title,
  description,
  icon: Icon,
}: FeatureCardData) => {
  return (
    <CardInnerBorder>
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
    </CardInnerBorder>
  );
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, data, children, ...props }, ref) => {
    const result = cardPropsSchema.safeParse({ variant, data });

    if (!result.success) {
      console.error('🚀 Card:', result.error.errors);
    }

    const renderCardLayout = () => {
      switch (variant) {
        case 'feature':
          return <FeatureCardLayout {...data} />;

        default:
          return children;
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative scale-100 rounded-lg border border-primary/30 bg-white/10 p-3 shadow-lg transition-transform duration-500 hover:scale-105 dark:border-primary/15 dark:bg-dark-light/30',
          className,
        )}
        {...props}
      >
        {renderCardLayout()}
      </div>
    );
  },
);

Card.displayName = 'Card';

const CardInnerBorder = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'h-full rounded-md border border-dashed border-gray-300 p-10 text-center lg:p-5 dark:border-gray-700',
      className,
    )}
    {...props}
  />
));
CardInnerBorder.displayName = 'CardInnerBorder';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardInnerBorder,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
