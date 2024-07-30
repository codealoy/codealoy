import React from 'react';

import { cn } from '@/lib/utils';

export const CircleBlur = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={cn(
        'h-96 w-28 rounded-full bg-primary blur-[150px] md:bg-primary/20 lg:h-80 lg:w-80 xl:h-[500px] xl:w-[500px]',
        className,
      )}
      {...props}
    ></div>
  );
};
