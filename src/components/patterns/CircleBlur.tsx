import React from 'react';

import { cn } from '@/lib/utils';

export const CircleBlur = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={cn(
        'bg-primary md:bg-primary/20 h-96 w-28 rounded-full blur-[150px] lg:h-80 lg:w-80 xl:h-[500px] xl:w-[500px]',
        className,
      )}
      {...props}
    ></div>
  );
};
