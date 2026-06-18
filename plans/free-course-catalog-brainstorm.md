# Free Course Catalog Brainstorm — Codealoy Agentic Pivot

## Context

As part of the [Codealoy Pivot Plan v2](./codealoy-pivot-plan-v2.md) (AI-native, text-first Bangla learning), we need a concrete list of **free-tier courses** to seed the agentic-development curriculum. The free layer does double duty: the **mission pillar** ("Bangla-first knowledge for everyone") and the **zero-CAC top-of-funnel** toward paid project courses and cohorts. Today the repo has only one legacy course (`learn-problem-solving-basic`); everything agentic is greenfield.

This document is a **brainstorm artifact**, not an implementation spec. It catalogs candidate free courses, tags each by build form and phase, and sequences them to the founder's ~36 hrs/month capacity floor. No code changes are proposed here.

## Resolved scope (from grilling session)

| Decision        | Outcome                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------- |
| Product tier    | **Free funnel content only** (mission + funnel)                                                            |
| Course form     | **Both** — ship-now MDX on the existing Astro site **and** later CLI interactive tasks; each course tagged |
| Organizing axis | **Concept spine (6 tracks) backbone + thin tool layer on top** (churn isolated to tool guides)             |
| Granularity     | **One named 5–8 lesson mini-course per track**                                                             |
| Tool guides     | **Claude Code, Cursor, GitHub Copilot, Antigravity**                                                       |
| Build priority  | **Intro + Terminal Ready + Prompting Fundamentals** first; rest sequenced behind                           |

**Reference:** the 6-track spine and Agentic 50 live in plan §7 and §5; Terminal Ready in §3; free-tier definition in §9; phase sequencing in §11.

---

## The Catalog (~12 free courses)

Legend — **Form:** `MDX-now` = buildable on current Astro site this phase · `+CLI-later` = also seeds an interactive Agentic Starter task once the `codealoy` CLI exists (Phase D). **Aud:** B = beginner-readable (mission) · WD = working-dev funnel.

### Tier 0 — On-ramp (beginner-readable, frames the thesis)

| #   | Bengali title                | English gloss                | Track           | Form    | Aud    | Priority |
| --- | ---------------------------- | ---------------------------- | --------------- | ------- | ------ | -------- |
| C0  | এজেন্টিক ডেভেলপমেন্ট পরিচিতি | Intro to Agentic Development | — (orientation) | MDX-now | B + WD | **P1**   |
| C1  | টার্মিনাল রেডি               | Terminal Ready (env on-ramp) | — (prereq)      | MDX-now | B      | **P1**   |

- **C0** is the mini-course form of the brand thesis — _"AI কোড লেখে, ইঞ্জিনিয়ার সিদ্ধান্ত নেয়।"_ 4–5 lessons: what agentic dev is, why the doing-loop beats watching, the engineer-as-decision-maker frame, a 10-minute "watch an agent ship something" demo, and a roadmap of the Agentic 50. This is the conceptual sibling of the manifesto (plan §8) and the entry point to the whole canon.
- **C1 (Terminal Ready)** is already specced in plan §3: 5–7 lessons — terminal basics, git, GitHub, Node install, VS Code — **graduation exam = `codealoy doctor`**. Triple duty: shareable artifact, kind prerequisite bar, and the **admission filter for any paid cohort**. Build before the CLI lands (the doctor command is the only CLI touchpoint, scriptable as a stub).

### Tier 1 — Concept spine (one mini-course per track)

| #   | Bengali title              | English gloss                        | Track | Form                   | Aud    | Priority |
| --- | -------------------------- | ------------------------------------ | ----- | ---------------------- | ------ | -------- |
| T1  | প্রম্পটিং ফান্ডামেন্টালস   | Prompting Fundamentals               | 1     | MDX-now **+CLI-later** | B → WD | **P1**   |
| T2  | AI-এর সাথে কোড পড়া ও বোঝা | Reading & Understanding Code with AI | 2     | MDX-now **+CLI-later** | B → WD | P2       |
| T3  | AI দিয়ে ডিবাগিং           | Debugging with AI                    | 3     | MDX-now **+CLI-later** | WD     | P2       |
| T4  | কনটেক্সট ইঞ্জিনিয়ারিং     | Context Engineering                  | 4     | MDX-now **+CLI-later** | WD     | P3       |
| T5  | এজেন্ট অর্কেস্ট্রেশন       | Agent Orchestration                  | 5     | MDX-now **+CLI-later** | WD     | P3       |
| T6  | ভেরিফিকেশন ও টেস্টিং       | Verification & Testing               | 6     | MDX-now **+CLI-later** | WD     | P3       |

Per-track lesson sketches (5–8 lessons each):

- **T1 — Prompting Fundamentals:** clarity, context, examples, output formats; iterating a prompt; common failure patterns; a Bangla prompt-pattern cheatsheet. _Pairs with the first free Agentic Starter CLI tasks (plan §9, tracks 1–2)._
- **T2 — Reading Code with AI:** reading > writing; asking the AI to explain a repo; spotting bugs/hallucinations in AI output; "would I have written this?" review discipline. _Showcases the `/bujhiye-bolo` skill artifact._
- **T3 — Debugging with AI:** error-driven prompting; pasting stack traces well; when to distrust the model; bisecting AI-introduced bugs.
- **T4 — Context Engineering:** repo context, `CLAUDE.md` / `.cursorrules`, managing long sessions, what to include/exclude. _Ships the freelance-web `CLAUDE.md` template (plan §5)._
- **T5 — Agent Orchestration:** single agent → tools → multi-step workflows (Claude Code, Cursor agents); planning vs. acting; when to break a task down.
- **T6 — Verification & Testing:** tests as the contract you hold the AI to; writing tests first; verifying without trusting; the "shipped code you don't understand" trap.

### Tier 2 — Thin tool guides (separately versioned, event-driven)

| #   | Bengali title                                    | English gloss                            | Form    | Aud    | Priority |
| --- | ------------------------------------------------ | ---------------------------------------- | ------- | ------ | -------- |
| G1  | Claude Code দিয়ে এজেন্টিক ডেভেলপমেন্ট           | Getting Started with Claude Code         | MDX-now | WD     | P2       |
| G2  | Cursor দিয়ে এজেন্টিক ডেভেলপমেন্ট                | Agentic Dev with Cursor                  | MDX-now | B → WD | P2       |
| G3  | GitHub Copilot (ফ্রি) দিয়ে এজেন্টিক ডেভেলপমেন্ট | Getting Started with Copilot (free tier) | MDX-now | B      | P3       |
| G4  | Antigravity দিয়ে দিয়ে এজেন্টিক ডেভেলপমেন্ট     | Getting Started with Antigravity         | MDX-now | WD     | P3       |

- Kept deliberately **thin** and in small versioned doc fragments (plan §6 risk: tool churn). Validators/concepts live in Tier 1; these only cover install + workflow + tool-specific quirks.
- These are the **event-driven viral engine**: when a tool ships a breaking change, the relevant guide gets a 6-hour Bangla fix (plan §2). They cost nothing when nothing changes.
- G2 (Cursor) and G3 (Copilot free) are the most beginner-accessible; G1 (Claude Code) and G4 (Antigravity) anchor the CLI/terminal-native thesis. Copilot + free-quota paths matter for card-less BD learners (plan §9 cohort constraint).

---

## How the two forms relate (MDX-now → CLI-later)

The reading mini-course is authored **first** as MDX on the existing Astro site (no infra dependency). When the `codealoy` CLI lands in Phase D, each `+CLI-later` course's exercises become the **free Agentic Starter tasks** (plan §9: 10–12 curated interactive tasks on tracks 1–2). The reading version is the durable canon; the CLI task is the graded practice layer that pairs with it. Tracks 1–2 (T1, T2) convert to CLI tasks first because that's where the free Agentic Starter is concentrated.

## Sequencing against plan phases

- **Phase A:** C0 (Intro) + C1 (Terminal Ready) — both are shareable launch artifacts and align with the manifesto/skill-artifact-first order (plan §8).
- **Phase B:** T1 (Prompting) + the Agentic 50 roadmap doc; begin G1/G2 tool guides.
- **Phase C–D:** T2–T6 rolled out roughly one per available sprint; T1/T2 get their CLI-task versions when the CLI MVP ships; G3/G4 as demand/events warrant.
- Tool guides (G1–G4) are **not** front-loaded — published reactively to ride search demand and tool-change events.

## Open questions to revisit (not blocking the brainstorm)

1. Whether C0 (Intro) should merge into the manifesto or stay a separate completable mini-course (recommend separate — completion/funnel signal).

- Answer: keep it separate.

2. Exact mastery criteria per concept course (feeds the eventual CLI quiz gates, plan §6 validator #4).

- Answer: We'll decide that later.

3. Whether a 7th concept course on **"AI দিয়ে রিফ্যাক্টরিং ও মেইনটেন্যান্স"** (refactoring/maintenance with AI) is warranted, or folded into T3/T6.

- Answer: add as a separate course

4. Naming consistency: keep English tool names (Claude Code, Cursor) untranslated vs. transliterated.

- Answer: keep it untranslated.
