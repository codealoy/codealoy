import React from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useWhileInView = (ref: React.RefObject<Element>) => {
  const inInView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();

  React.useEffect(() => {
    if (inInView) {
      controlAnimation.start('animate');
    }
  }, [inInView, controlAnimation]);
  return controlAnimation;
};
