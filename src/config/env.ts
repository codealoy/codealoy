import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const ENV_ENUMS = ['development', 'production', 'testing', 'ci'] as const;

export const env = createEnv({
  isServer: typeof window === 'undefined',
  server: {
    NODE_ENV: z.enum(ENV_ENUMS),
    DATABASE_URL: z.string().url(),
    RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_RUNTIME_ENV: z.enum(ENV_ENUMS),
  },

  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_RUNTIME_ENV: process.env.NEXT_PUBLIC_RUNTIME_ENV,
  },
});
