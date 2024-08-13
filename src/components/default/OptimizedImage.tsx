import React from 'react';
import Image, { ImageProps } from 'next/image';

import { defaultImageBlurDataUrl } from '@/config/defaultImageBlur';

export const OptimizedImage = ({
  placeholder = 'blur',
  blurDataURL = defaultImageBlurDataUrl,
  loading = 'lazy',
  alt = '',
  ...restProps
}: ImageProps) => {
  return (
    <Image
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      loading={loading}
      alt={alt}
      {...restProps}
    />
  );
};
