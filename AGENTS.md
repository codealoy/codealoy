# AGENTS.md

## Project

Codealoy is an open-source interactive platform for learning programming in **Bangla (Bengali)**. It is a content-driven, statically-generated Astro site (React islands + MDX) deployed to **Cloudflare Workers**. Most UI strings and all course content are in Bengali.

## Architecture

### Content is the source of truth

Three Astro content collections defined in `src/content.config.ts`, all loaded from the filesystem via the `glob` loader:

- **`courses`** — one per `src/content/courses/<slug>/index.mdx` (course landing metadata)
- **`lessons`** — every `*.{md,mdx}` under `src/content/courses/` (individual lesson bodies)
- **`blog`** — `src/content/blog/*.mdx`

Collection schemas are Zod. `status: 'draft' | 'published'` gates visibility — only `published` entries are built into pages.

### Course ordering lives in `meta.json`, not the collection

Each course folder has a `meta.json` with a `pages` array that defines lesson **order and section grouping**. This file is read directly from disk (`readCourseMeta` in `src/lib/courses.ts`) — it is _not_ part of any content collection.

- Section headers are entries wrapped in dashes: `"---ভূমিকা---"`. They are not lessons.
- Lesson entries are slugs matching a lesson file's basename (e.g. `"2-two-string"`).
- `index` and `---...---` entries are skipped by `isValidLessonPage`.

`src/lib/courses.ts` is the central helper module: it generates static paths (`getCoursePaths`, `getLessonPaths`), builds the sectioned sidebar (`organizeLessonsIntoSections`), and computes prev/next navigation (`findAdjacentLessons`) — all driven by the `meta.json` `pages` array. **Adding a lesson means both creating its MDX file and registering its slug in `meta.json`.**

### Routing

All pages are statically prerendered via `getStaticPaths`:

- `src/pages/courses/[course]/index.astro` — course overview
- `src/pages/courses/[course]/[lesson].astro` — lesson page; renders the MDX `<Content />` inside the `LessonLayout` React island (`client:load`)
- `src/pages/blog/[...slug].astro`

### React islands

UI is React rendered as Astro islands. `astro.config.mjs` sets `vite.resolve.dedupe: ['react', 'react-dom']` to force a single React instance across SSR, islands, and React-dependent libs (framer-motion, radix, tanstack-query) — removing this causes "Invalid hook call" hydration crashes. `src/lib/store.ts` exports a shared TanStack Query `queryClient`.

### Deployment

`@astrojs/cloudflare` adapter with `imageService: 'cloudflare'`. `wrangler.jsonc` serves `dist/` as static assets via the `ASSETS` binding.

## Conventions

- **Content Generation**: Always use `humanizer` skill during writing any content to make it more human-like and natural. Always prefer natural language over technical terms.
- **Mode Rules**: Prefer using plan mode for multi-file architectural changes.
- **Auto commit**: Never automatically commit without approval from user. User will review the code changes manually before commiting.
- **Path alias**: `@/*` → `src/*` (see `tsconfig.json`). Use it for all internal imports.
- **TypeScript**: strict (`astro/tsconfigs/strict`).
- **Imports** are auto-sorted by `@ianvs/prettier-plugin-sort-imports` in this order: `react` → `astro*` → third-party → `@/types` → `@/config/*` → `@/lib/*` → `@/components/*`. Run `pnpm format` rather than hand-ordering.
- **UI components**: shadcn/ui (config in `components.json`, base color `neutral`, lucide icons).
- **Commits**: Conventional Commits, enforced by commitlint via a husky `commit-msg` hook. Precommit hooks are maintained by hasky.
- **PRs** target `main`.
- Bengali default author string `'কোডালয় টিম'` is baked into content schemas — keep new content in Bengali to match the site's voice.
  docs(agents): add domain, issue-tracker, and triage-labels docs

This commit introduces new documentation files for the agents, covering domain concepts, issue tracking conventions, and triage label mappings.

- Add `docs/agents/domain.md` to explain how to consume domain documentation.
- Add `docs/agents/issue-tracker.md` to detail GitHub issue conventions for agent-related tasks.
- Add `docs/agents/triage-labels.md` to map canonical triage roles to specific GitHub label strings.

## Agent skills

### Issue tracker

Issues and PRDs live in the `codealoy/codealoy` GitHub Issues, managed via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical triage roles using their default label names (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
