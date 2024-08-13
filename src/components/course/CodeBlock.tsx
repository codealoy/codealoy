'use client';

import React from 'react';
import { useCopyToClipboard, useHover } from '@uidotdev/usehooks';
import { LuClipboardCheck, LuClipboardList } from 'react-icons/lu';

import { extractCodeTextFromRawObject } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const CodeBlock = (props: {
  children: React.ReactNode;
  icon: JSX.IntrinsicElements['svg'];
}) => {
  const { children, icon: _icon, ...restProps } = props;

  const [ref, hovering] = useHover();
  const [isCopied, setIsCopied] = React.useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip delayDuration={0} open={hovering || isCopied}>
          <TooltipTrigger asChild={true}>
            <Button
              ref={ref}
              variant="icon"
              size="icon"
              className="absolute right-3 top-4"
              onClick={() => {
                if (isCopied) return;

                // copy the text content of the code block from children
                const codeString = extractCodeTextFromRawObject(
                  children as any,
                );

                if (!codeString) return;

                copyToClipboard(codeString);

                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 2000);
              }}
            >
              {isCopied ? (
                <LuClipboardCheck className="h-6 w-auto stroke-2 text-primary" />
              ) : (
                <LuClipboardList className="h-6 w-auto stroke-1 text-primary/90 hover:stroke-2 hover:text-primary dark:text-primary/60" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="not-prose rounded-sm px-2 py-0 text-slate-600 ring-1 ring-primary/25 dark:text-slate-200 dark:ring-primary/50"
          >
            <p>{isCopied ? 'Copied' : 'Copy'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <pre {...restProps}>{children}</pre>
    </div>
  );
};
