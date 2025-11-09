# AGENTS.md for Codealoy

This file provides guidance for AI coding agents to work effectively on the Codealoy project.

## Project Overview

Codealoy is an open-source interactive learning web platform designed to make learning programming and web development easier in the Bangla (Bengali) language.

- **Framework**: Astro
- **UI**: React, Tailwind CSS, Shadcn UI
- **Content**: MDX
- **TypeScript**: Strict mode is enabled.
- **Backend**: Hono, Drizzle ORM, PostgreSQL
- **Deployment**: Cloudflare

## Setup Commands

The project uses `pnpm` as the package manager.

- **Node.js version**: >= 22
- **pnpm version**: >= 10

1.  **Install dependencies**:

    ```bash
    pnpm install
    ```

2.  **Set up environment variables**:
    Copy the example environment file.

    ```bash
    cp .env.example .env
    ```

    You may need to fill in required values in `.env`.

3.  **Start the development server**:
    ```bash
    pnpm dev
    ```
    The server will be available at `http://localhost:3000`.

## Build and Test Commands

- **Build the project**:

  ```bash
  pnpm run build
  ```

  This command also runs linting and TypeScript checks before building.

- **Lint the code**:

  ```bash
  pnpm run lint
  ```

- **Fix linting errors**:

  ```bash
  pnpm run lint:fix
  ```

- **Format the code**:

  ```bash
  pnpm run format
  ```

- **Type checking**:
  The `build` script runs `astro check` for type checking. There is no standalone test command.

## Code Style

- **Formatting**: We use Prettier for code formatting. Key styles include:
- **Linting**: We use ESLint with `eslint-plugin-astro`. The configuration is in `eslint.config.js`.
- **TypeScript**: The project uses TypeScript in strict mode. See `tsconfig.json` for details.

## Database

The project uses Drizzle ORM. Here are some useful commands:

- **Generate migrations**:
  ```bash
  pnpm run db:generate
  ```
- **Apply migrations**:
  ```bash
  pnpm run db:migrate
  ```
- **Push schema changes (for development)**:
  ```bash
  pnpm run db:push
  ```
- **Open Drizzle Studio**:
  ```bash
  pnpm run db:studio
  ```

## Content Management

- **Content**: Course content is stored in `src/content/courses/` as MDX files
- **Blog**: Blog content is stored in `src/content/blog/` as MDX files
- **Content Schema**: Defined in `src/content.config.ts`

## Project Structure

- `src/components/`: Reusable React components
  - `ui/`: Shadcn UI components
  - `common/`: Shared components (Header, Footer, etc.)
  - `home/`: Homepage-specific components
  - `patterns/`: Design pattern components
- `src/pages/`: Astro pages and API routes
- `src/layouts/`: Layout components
- `src/content/`: MDX content (courses, blog posts)
- `src/config/`: Configuration files
- `src/lib/`: Utility functions and shared logic
- `src/styles/`: Global styles and CSS files
- `public/`: Static assets

## Environment Variables

Key environment variables (see GitHub Actions for reference):

- `NODE_ENV`: Environment (development/production/ci)
- `DATABASE_URL`: Database connection string
- `API_URL`: Optional API URL for client-side requests
- `PORT`: Server port (default: 3000)

## Development Tips

- **Path Aliases**: Use `@/` prefix for imports from `src/` directory
- **Import Order**: Follow the Prettier import sorting configuration
- **Components**: Use Shadcn UI components when possible, located in `src/components/ui/`

## Testing Instructions

- Run `pnpm run lint` to check for linting issues
- Run `pnpm run build` to verify the project builds successfully
- The build process includes TypeScript checking via `astro check`
- Manual functional testing is required for changes

## Pull Request (PR) Instructions

1.  Before starting work, it's recommended to open an issue to discuss the proposed changes.
2.  All pull requests should target the `main` branch.
3.  Ensure that `pnpm run lint` and `pnpm run build` passes before submitting a PR.
4.  Commit messages and PR titles must follow the **Conventional Commits** specification.
    - Examples: `feat: add user authentication`, `fix: correct typo in hero section`, `docs: update contribution guide`.

## Deployment

- **Platform**: Cloudflare Workers
- **Preview**: Use `pnpm run preview:cloudflare` for local Cloudflare preview
- **Wrangler**: Configuration in `wrangler.jsonc`
- **Build Output**: Static files in `dist/` directory

## Special Considerations

- **Language**: Primary language is Bangla (Bengali), with some English
- **Font**: Uses `@fontsource-variable/baloo-da-2` for Bengali text support
- **SEO**: Includes comprehensive meta tags and schema markup
- **Theme**: Supports dark/light theme switching
- **Animations**: Uses Framer Motion for animations
- **Code Editor**: Integrates Sandpack for interactive code examples
