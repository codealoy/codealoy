# Codealoy's codebase and curriculum

[![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=flat-square&up_color=green&up_message=online&url=https%3A%2F%2Fwww.codealoy.com%2F)](https://www.codealoy.com/)
[![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/codealoy/codealoy/lint-build-test.yml?style=flat-square)](https://github.com/codealoy/codealoy/actions)
[![GitHub contributors](https://img.shields.io/github/contributors/codealoy/codealoy?style=flat-square)](https://github.com/codealoy/codealoy/graphs/contributors)
[![GitHub Repo stars](https://img.shields.io/github/stars/codealoy/codealoy?style=flat-square)](https://github.com/codealoy/codealoy/stargazers)
[![GitHub](https://img.shields.io/github/license/codealoy/codealoy?style=flat-square)](https://github.com/codealoy/codealoy/blob/main/LICENSE)

Codealoy is a free and open-source platform for learning **agentic AI development** in **Bangla** (Bengali). The goal is to build the first complete, trustworthy Bangla knowledge base for the AI-native era of software engineering, so a Bengali-speaking developer can learn to build with AI agents without English being the barrier.

## What makes it different

Watching tutorials teaches you to watch. Agentic engineering: prompting, context engineering, reading and reviewing AI output, verifying results, is a skill you only build by doing. So Codealoy is text-first and hands-on rather than video-led.

- **Bring your own agent.** You work in the tools you already like (VS Code, Cursor, Claude Code, Codex) on your own machine. There's no browser sandbox, because orchestrating an AI agent in a _real_ environment is the actual skill.
- **Local verification via the Codealoy CLI.** Finish a task, run the CLI, and it checks your work locally and gives you an instant pass/fail report. Your code stays on your machine.
- **Every task is a real project.** Each completed task leaves you a portfolio-ready GitHub repo, direct proof of your agentic skills for an interview or a first client.
- **Content with a short half-life.** AI tools change every month. Text updates in hours, not the months a video re-shoot takes, and because everything is open-source the community can help keep it current.

## Tech Stack

This repository is the Codealoy website and curriculum: a content-driven, statically generated [Astro](https://astro.build) site with React islands and MDX, deployed to Cloudflare Workers. The stack is chosen for simplicity, modularity, and full-stack type safety.

- [Astro](https://astro.build)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [MDX](https://mdxjs.com)
- [TanStack Query](https://tanstack.com/query)
- [Framer Motion](https://www.framer.com/motion/)
- [Zod](https://zod.dev)
- [TypeScript](https://typescriptlang.org)
- [Cloudflare](https://cloudflare.com)

> The `codealoy` CLI (upcoming) that learners use to scaffold and verify tasks locally lives in a separate package and is under active development.

## Reporting Bugs, Issues or Feedbacks

If you find any bug/issue or have any feedback/feature request, please feel free to create a new [GitHub issue](https://github.com/codealoy/codealoy/issues). If it's a bug, please make sure to include as much information as possible so we can reproduce the bug.

## Social Media Links

- [Facebook Page](https://www.facebook.com/codealoy)
- [Facebook Group](https://www.facebook.com/groups/codealoy/)
- [Twitter Page](https://twitter.com/codealoy)

## Contributing

We 💖 contributors! Feel free to contribute to this project but **please read the [Contributing Guidelines](CONTRIBUTING.md) before opening an issue or PR** so you understand the branching strategy and local development environment. We also welcome you to join our [Facebook community group](https://www.facebook.com/groups/codealoy/) for either support or contributing guidance.

## License

Codealoy is [MIT licensed](./LICENSE).
