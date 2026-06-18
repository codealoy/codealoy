# Codealoy Pivot Plan v2: AI-Native, Text-First Interactive Learning Ecosystem

> **Document purpose:** Updated reference output following a strategy/grilling session (June 2026) that stress-tested the v1 plan. This version supersedes v1 on every point where they conflict. Intended for future planning and as a context-loading document for AI agents continuing this work. Implementation details (CLI architecture, task manifest spec) remain intentionally deferred — see "Open Threads."
>
> **What changed from v1 (summary):** persona sharpened to working devs (beginners served by free layer); monetization restructured to free tasks + per-course paid ownership + cohorts (NO monthly subscription, time-boxed pass deferred); piracy posture made explicit; founder positioning resolved as demonstration-based; roadmap re-sized to a part-time (~36 hrs/month) founder; free Agentic 50 split into ~12 hand-built tasks + community-built remainder; decision gates added. Details below, with rationale inline.

---

## 1. Context & Founder Constraints

- **Codealoy** (codealoy.com, github.com/codealoy/codealoy): established Bangla programming-learning brand, currently **early-stage / rebuilding from scratch**.
- **Founder is the face** of the content (AI Hero / Learn-with-Sumit style personality-led trust, which is how BD edtech brands win).
- **Founder skill reality (clarified this session):** the founder has **already built and shipped real-world projects using agentic development** — the core skill is real. The founder is **new to teaching**, which is treated as a real risk to manage, not a footnote (see §5 and §8).
- **Founder availability (new, load-bearing):** this is a **side project alongside a day job**. Realistic capacity floor: **8–10 hours/week (~36 hours/month)**, sized to the _worst_ week, not the best. **Every decision in this plan is sized to that floor.** Goal: build a community + brand and establish an alternative income source — not a full-time venture (yet).
- **Budget: under $200/month** for the first 6 months (infra + LLM APIs + content tooling). Real constraint is **founder time**, not money.
- **Hard product decision (settled):** NO browser-based code execution platform. Learners use their own tools (VS Code, Cursor, Antigravity IDE, Claude Code, Codex, etc.). Codealoy verifies **task outcomes** via a local CLI + validators. Browser sandboxes are pedagogically wrong for agentic learning — the skill is orchestrating AI in a _real_ environment.
- **CLI name:** **`codealoy`** (renamed from `aloy` in v1).

## 2. Strategic Thesis

**Brand thesis (Bangla):** "AI কোড লেখে, ইঞ্জিনিয়ার সিদ্ধান্ত নেয়।" (AI writes the code; the engineer makes the decisions.)

- Video-first incumbents teach _watching_; agentic engineering is a _doing_ skill (prompting, context engineering, reviewing AI output, verification). Text + interactive exercises are the native medium.
- Text content has a short update cycle (hours vs. months for video) — structural advantage given monthly AI-tool churn. **Important reframe (this session):** this is an advantage _as a capability_, NOT as a fixed-frequency publishing promise. Sell responsiveness ("when Cursor shipped breaking change X, Codealoy had the Bangla fix up in 6 hours" — event-driven, viral, costs nothing when nothing changes), not a weekly drumbeat that becomes a fragility when the founder has a hard week at the day job.
- Text-first works on low bandwidth / old hardware → expands reach beyond Dhaka.
- Being the **first credible Bangla-language canon for agentic development** is an open first-mover position. Programming Hero markets "AI-driven" but delivers a traditional video-spine curriculum.
- One-line strategy: _Incumbents sell the promise of AI-era skills in a pre-AI format; Codealoy sells the practice of them in the format the skill demands._

## 3. Target Audience (resolved this session)

**Primary / beachhead persona: the working developer → AI-native developer.**

- Junior dev or freelancer with ~6–24 months experience, who already earns (often in USD via Upwork/remote) and whose fear of obsolescence is **acute and current**.
- Has terminal tolerance → the CLI friction is acceptable for this group.
- Converts on outcome stories the founder can actually generate in 90 days ("doubled my Upwork throughput", "shipped a feature live with AI in a screening").
- **This persona is who the paid funnel targets for the first 9–12 months.** Rationale: they have money, tolerate the tooling, feel the pain now, and aren't Programming Hero's hand-holding-heavy turf.

**The Bangla-accessibility pillar is preserved — via the free layer, not by forcing beginners into the paid funnel.**

- Codealoy remains a **Bangla-first learning platform** for learners with limited English. This is a core, non-negotiable pillar.
- Mechanism: **the entire free canon is genuinely beginner-readable** (articles, monthly digest, the Agentic 50 roadmap doc + briefs, skill artifacts). A beginner can learn enormously without ever installing the CLI.
- Positioning sentence: _"Bangla-first knowledge for everyone; paid practice for those ready to build."_ Mission intact, unit economics intact.
- **Beginners are NOT pushed into paid/CLI before they're ready** — because support time is the founder's scarcest resource, and a beginner hitting `codealoy doctor` errors on a Windows laptop, blaming the platform, and posting in the same Facebook groups that are the zero-CAC funnel is a real failure mode.

**The beginner on-ramp: "টার্মিনাল রেডি" (Terminal Ready) — new this session.**

- A standalone, free, named **5–7 lesson Bangla mini-course**: terminal basics, git, GitHub, Node install, VS Code, ending with `codealoy doctor` as the graduation exam.
- Pulled OUT of the Agentic 50 entirely (v1 had env-setup as tasks #0–5). The Agentic 50 numbering stays clean (1–50, all real agentic tasks).
- Does triple duty: (1) shareable marketing artifact, (2) an honest, kind prerequisite bar ("finish Terminal Ready first" beats "this isn't for you"), and (3) **a free filter** — completing it becomes the admission requirement for any paid cohort, protecting cohort quality from environment-hell students.
- Future: the planned web-based AI tutor is the _right_ beginner-grade paid product (infinitely patient, in Bangla) — but it doesn't exist yet and is deferred to month 12+, funded by working-dev revenue.

## 4. Competitive Landscape (Bangladesh)

| Player               | Model                                                                                                         | Structural weakness in agentic era                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Programming Hero** | Large cohort bootcamps, video spine, ~500–1000 staff; already markets "AI-driven Full Stack" 7-month bootcamp | High content inertia; AI is a topic layer, not the learning mode; learner watches others use AI                                    |
| **Learn with Sumit** | Creator-led YouTube + paid courses (React/Next.js)                                                            | Product = the person; no interactive infra; no scalable feedback loop                                                              |
| **Ostad**            | Live classes (Shark Tank–funded; reported ~৳7.5 crore revenue, ~৳35 lakh profit/yr)                           | Most expensive feedback loop per student; live lectures poorly suited to tool-iteration skills; thin margins show ceiling of model |

**Market read:** 400+ BD edtech startups, few funded; a top-3 skills player earns ~$650K/yr. This is a niche-domination, unit-economics game. Realistic 24-month target: ৳1–2 crore ARR from ~1,500–3,000 paying users.

**Exploitable blind spots:** (1) doing-loop vs. watching, (2) content half-life, (3) bandwidth/data cost, (4) AI-scaled feedback at near-zero marginal cost, (5) English-gated frontier knowledge → Bangla translation layer.

## 5. Reference Models (and what we copy)

### AI Hero (Matt Pocock) — top & bottom of funnel

- **Contrarian confidence-giving thesis** anchoring all content (his: "fundamentals matter more than ever"; ours: the thesis above).
- **Skills as viral artifacts:** installable agent skill files / templates as free, GitHub-hosted marketing (his `/grill-me` went viral). Codealoy equivalents: `/bujhiye-bolo` Bangla code-explainer skill, `CLAUDE.md` template for freelance web projects, BD-interview-prep skill, `.cursorrules` packs.
- **Changelog/newsletter habit:** **monthly** Bangla digest of AI-tooling changes ("মাসিক AI Dev ডাইজেস্ট"). _(Changed from weekly — see §7 rationale: reliability beats frequency for trust.)_
- **Agent-readable site:** `llms.txt`, clean markdown URLs, `skills.md` — so AI assistants surface Codealoy as the Bangla source.
- Funnel: free canon → email list → paid courses/cohorts.

### GreatFrontEnd + LeetCode + Hello Interview — the product/monetization layer (researched this session)

Key findings from researching these text-first paid platforms:

- **Nobody pays for "learning" — they pay for proximity to a money event** (an interview, a job switch, a client). Subscriptions there are episodic by design; people subscribe during the hunt and churn after.
- **The strongest paid asset is often crowdsourced intelligence, not authored content** (LeetCode's company-tagged questions come from candidates reporting back — its single most-cited reason to subscribe).
- **Gated content works despite leakage** (GFE/HI/LeetCode all run profitably on paywalled solutions) — defended by continuous freshness and account-bound interactivity.
- **GFE runs two products: Interviews (question bank) + Projects (build real things).** Codealoy's adopted shape maps onto this: free skill bank + paid project-building courses.
- **Caution flags:** these convert ~3–5% of _millions_; Codealoy's TAM is thousands. Hello Interview **wound down its human mock-interview/mentorship program (last sessions May 2026)** — a warning that human-time services don't scale even for funded teams. bKash/Nagad don't do clean auto-renew → "monthly subscription" operationally means chasing renewals (a reason the model below avoids it).

### Codealoy's flagship product asset

- **Named, finite, completable list:** the **"Agentic 50"** (50 exercises, working dev → AI-native engineer). Published first as a free roadmap _document_; interactive subset built incrementally (see §6, §9).
- **Question bank + verification + expert solution** loop. AI-era twist on "official solutions": **annotated expert prompt transcripts** (how a senior engineer prompted/corrected/verified the same task) — exists nowhere yet, in any language. Also serves as the founder's teaching-skill scaffold (§8).
- **Outcome framing:** local job interviews (Dhaka software houses), first Upwork contract, "build a feature live with AI" screenings.

**Fusion:** AI Hero layer (free, top of funnel) → paid product layer (per-course ownership, then pass) → AI Hero layer (high-ticket cohorts at the bottom). The ladder: free → ৳2–3.5K course → ৳8–12K cohort, each tier marketing the next.

## 6. Product Architecture: BYO-Agent + CLI Verification

**Pattern precedent:** Exercism CLI, rustlings, Epic Web workshop app — none exist for agentic workflows or in Bangla.

**Core tool — `codealoy` CLI:**

```
npm i -g @codealoy/cli
codealoy login                 # device-code auth
codealoy start agentic-50/12   # scaffold task repo locally (git, README.bn.md, .codealoy/ manifest)
codealoy verify                # run task validators locally, pass/fail report
codealoy submit                # sync result/artifacts to profile
codealoy doctor                # diagnose env issues (esp. Windows)
```

**Key property:** the learner's machine is the compute. Server only stores task definitions, progress, entitlements, and does the minimal AI judging that can't run locally. Fits the <$200/mo budget by design.

**Validator toolbox** (declared per-task in a `.codealoy/task.yaml` manifest):

1. **Test harness** (~60% of tasks): hidden/read-only test suite run via learner's local runtime. Implicitly teaches "tests are the contract you hold the AI to."
2. **Visual comparison (frontend):** Playwright screenshot + pixelmatch/odiff with tolerance, **gated by structural DOM/accessibility assertions**. Diff image as feedback.
3. **API/contract:** boot learner's server per manifest, fire request suite, validate against JSON Schema/OpenAPI; same pattern for CLI-output diffs and data-file schema checks.
4. **Quiz/comprehension gates:** 3–5 "why" questions after the build passes; defense against "shipped code you don't understand."
5. **Process/transcript grading:** submit agent session transcript; cheap LLM (Haiku-class) grades against rubric. **Note (this session):** transcript grading is NOT a standalone Pro feature — the audience can replicate "an LLM call + a rubric" themselves, so it fails the paid-value filter. It is repositioned as **infrastructure**: a feedback layer inside tasks/courses and a teaching scaffold for the founder, not a headline SKU.
6. **Repo-state checks:** commit hygiene, required files, no secrets. Every completed task = a portfolio-ready GitHub repo by construction.

**Paid courses are delivered THROUGH the `codealoy` CLI (decided this session).** Each paid course chapter's checkpoint is a server-entitled task manifest, verified locally, progress synced. Consequence accepted: entitlement/auth infrastructure is needed for paid courses, and **paying customers are committed to terminal-readiness** (Terminal Ready graduation gates any paid purchase, not just cohorts). This is the central anti-piracy mechanism (§10).

**IDE extension:** later (months 6–12+), as a _thin wrapper_ over the CLI for VS Code + Cursor. The CLI is the engine; the extension is sugar.

**Known risks & mitigations:**

- _Beginner friction:_ addressed by the standalone Terminal Ready mini-course (§3), not by burying setup inside Agentic 50. Budget serious **Windows QA** (paths, PowerShell policy, antivirus).
- _Cheating:_ don't over-engineer early; quizzes + transcript grading are the integrity layer once certificates matter.
- _Tool version churn:_ keep tool-specific instructions in small versioned doc fragments; validators check output, never the tool.

## 7. Curriculum Spine (Bangla)

1. প্রম্পটিং ফান্ডামেন্টালস — clarity, context, examples, output formats
2. AI-এর সাথে কোড পড়া ও বোঝা — reading > writing; spot bugs in AI output
3. AI দিয়ে ডিবাগিং — error-driven prompting; when to distrust the model
4. কনটেক্সট ইঞ্জিনিয়ারিং — repo context, CLAUDE.md / .cursorrules, long sessions
5. এজেন্ট অর্কেস্ট্রেশন — single agent → tools → multi-step workflows (Claude Code, Cursor agents)
6. ভেরিফিকেশন ও টেস্টিং — tests as the agent contract

All Agentic 50 exercises map onto these tracks. Cohort and paid-course curricula reuse the same spine in project form.

## 8. Founder Positioning & Teaching On-Ramp (resolved this session)

**Positioning: authority by demonstration, not declaration.**

- The founder is from-scratch as a _brand_ and new to _teaching_, so the manifesto cannot lean on credentials or on results not yet produced. A contrarian thesis from an unknown can read as "sour grapes from someone who can't make video" — same words, opposite effect, depending on the speaker's standing.
- The available and credible stance: **"learn in public, from ahead."** Agentic engineering is ~18 months old; nobody in Bangla has long credentials. The founder _is_ genuinely ahead (ships real agentic work), so authority comes from **visible artifacts and shown work**, not a title.
- Positioning line direction (final wording = Open Thread): something like _"I'm a working developer who rebuilt how I code around AI agents — and I'm documenting the whole playbook in Bangla so you don't have to figure it out alone."_
- **Hard guardrail:** the founder teaches **only the band they're genuinely ahead in**, and says so. "I've shipped X with agents; I'm still figuring out Y" is the credibility mechanism, not a weakness. Never teach past actual practice to fill a curriculum slot.

**Teaching on-ramp (the v1 plan had no mechanism for this; added this session).**
The risk isn't being wrong — it's the expert blind spot: skipping the invisible-judgment steps (why this context, why distrust the model here, what the dead-ends were) that the learner is actually paying to see. Raw Bangla text exposes thin pedagogy nakedly (no production value to hide behind). Mitigations:

1. **Reverse Phase A's internal order: skill artifact + small teardown posts FIRST, manifesto SECOND** (end of month 1, not day 1). Low-stakes reps build teaching skill and feedback _before_ the highest-stakes, most-shared artifact is written.
2. **Make "show the dead-ends" structural:** every expert prompt transcript must show ≥1 correction cycle, ≥1 "I distrusted the output here and why," ≥1 verification step. The template _is_ the hard part, so a first-time teacher can't accidentally skip it.
3. **Borrow audience teaching skill:** post a real agentic session, ask "where would you have done this differently," teach in the replies. Dialogue teaching suits a first-timer and matches how BD dev Facebook groups already work.

## 9. Monetization Stack (restructured this session)

**Core principles set this session:**

- **NO monthly subscription.** Doesn't fit bKash/Nagad rails (no clean auto-renew) or BD price psychology, and the obvious Pro candidates failed the value filter.
- **The paid-value filter:** any paid feature that is "an LLM call you could run yourself" is dead for this audience — they're the very people being trained to replicate prompts + rubrics with their own tools.
- **Stage the model:** per-course ownership first; time-boxed pass later.

| Stream                                                                                            | Pricing                             | When                                                                 | Notes                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Free tier**                                                                                     | ৳0                                  | From day 1                                                           | Full Bangla canon (articles, monthly digest, Agentic 50 roadmap doc + all briefs), Terminal Ready mini-course, skill artifacts, the free `codealoy` CLI + local validators, and a curated **~10–12 interactive "Agentic Starter" tasks** (curriculum tracks 1–2). This is the funnel and the mission pillar.                                                          |
| **Paid project courses** (per-course, **own-it-forever**, includes future updates to that course) | **৳2,000–3,500 / course, one-time** | Later phase (the first course ships in/after Phase D, CLI-delivered) | End-to-end, build-a-real-project courses = practical application of the theory. Each is a discrete SKU you can launch and sell as an _event_, matching the Facebook funnel. "Own it forever + free updates" is the anti-rot and anti-piracy promise (§10). Realistically 2–3 courses in year one, not a library.                                                      |
| **Cohort bootcamps** ("Build-in-Public", 6–8 wk, ship 3 AI-accelerated portfolio projects)        | ৳8,000–12,000 / seat                | From Phase C (micro-cohort), full price from Phase D                 | Highest WTP: freelancers earning USD. Light video (live reviews only). Curriculum must run on free tool tiers (Copilot free, free Claude/Gemini quotas, Ollama fallback) — USD card friction in BD is real. Cohort buys what no competitor has: AI-graded process feedback + expert transcripts + live review. **Terminal Ready graduation = admission requirement.** |
| **3/6/12-month "Pro pass"** (time-boxed bundle access to the course library)                      | TBD                                 | **Deferred until 4+ courses exist (~month 12–15)**                   | A time-boxed pass only makes sense against a _library_. Launching it against one course is just a confusing one-time purchase with a resented countdown timer. When it launches, existing course owners get credited in.                                                                                                                                              |
| **B2B/institutional** (agency upskilling workshops, university clubs)                             | large tickets                       | Later (months 6–12)                                                  | Agencies double as hiring partners.                                                                                                                                                                                                                                                                                                                                   |
| **Discount linkage (both directions)**                                                            | —                                   | —                                                                    | Course/Pro buyers get cohort discounts; **cohort alumni get the next course free/cheap** (alumni are highest-trust repeat buyers and courses are the way to monetize them between cohorts).                                                                                                                                                                           |
| **Avoid**                                                                                         | —                                   | —                                                                    | Monthly subscriptions; ads (trust); pure pay-per-course video (incumbents' turf); verified-profile + local-company-hiring layer (founder lacks the employer relationships — explicitly dropped this session).                                                                                                                                                         |

**Explicitly considered and rejected as Pro features this session:** transcript grading as a paid SKU (self-replicable); AI tutor chat (wraps free models); standalone certificates (BD employers don't trust them yet); premium Discord alone; verified AI-dev profile + job connections (no employer network); bKash-billed managed AI quota (parked as a _researched option_, not a commitment — explosive demand but wrong risk profile for a solo pre-revenue founder: provider ToS risk, abuse risk, budget-eating).

## 10. Piracy & Account-Sharing Posture (new section, decided this session)

**Premise:** In BD, course rips circulate in Telegram/Facebook within days; assuming content won't leak is fatal. The design goal is **not "prevent piracy" (impossible for text) but "make the pirated copy a worse product than the purchased one, at every moment."** Spend ~zero extra founder-hours fighting it.

- **Threat 1 — content ripping:** The architecture is the answer. If a paid course's spine runs through the CLI, the rippable text is only the _narration_; the pirate copy is a book missing its exercises, feedback, and checkpoints. Defenses stack: **server-side entitlement on task manifests** (access control, not crackable client DRM); **the domain's churn is the DRM** (a ripped agentic course is stale in 6–8 weeks — "পাইরেটেড কপি ২ মাসেই পুরনো" is a real marketing line, and the "free updates" promise is the thing Telegram can't pirate); **light invisible watermarking** (per-account zero-width / paragraph fingerprinting to identify and ban leakers). **Do NOT** use PDF DRM, copy-protection JS, or video-style encryption — every hour there punishes paying developers who will resent it.
- **Threat 2 — account sharing:** Partly _tolerable_ (the friend cluster sharing today is the cohort pipeline tomorrow). Proportionate measures: soft device/session caps (2–3), CLI auth bound to machine via device-code flow, and the elegant one — **progress, verification history, and certificates are per-account and name-bound**, so shared accounts produce one incoherent trail and a wrong-name certificate. Value is individualized even when content isn't.
- **Threat 3 — the social layer (the real decider in BD):** People buy from creators they trust to _support them_ and _belong_. Price within bKash impulse range (৳2–3.5K is right), celebrate buyers publicly (shipped wall, recognition), and treat pirate channels as a funnel symptom, not a war — the 19-year-old pirating today with no income is the 22-year-old customer with an Upwork account, if the brand relationship stays warm.

## 11. Roadmap (re-sized to ~36 hrs/month)

**Sizing rule (new):** every commitment must pass "can I do this in week 1 of a brutal sprint at my day job?" Reliability of a kept smaller promise beats the brand damage of a publicly broken larger one.

### Phase A — Month 1: Thesis, skeleton, first artifacts (AI Hero mode)

- Static site (Astro/Next on free hosting); markdown-fast on mobile data. Platform rebuild deferred.
- **Internal order reversed (see §8):** ship **one skill artifact (`/bujhiye-bolo`) + 2–3 small teardown posts FIRST**, then the **manifesto SECOND** (end of month, informed by 3 weeks of real audience feedback). Launch **monthly digest #1**.
- Pick ONE flagship for the phase, not a content stream. (Flagship here = the manifesto.)
- **Blocked by Open Thread:** the founder positioning line (§8) must be settled before the manifesto.
- KPI: 300 email subs; one post with 1K+ organic reach in dev Facebook groups.

### Phase B — Month 2: The named list + cadence

- Publish **Agentic 50 as a roadmap document** (50 named exercises, one-para Bangla descriptions, mastery criteria) — a write-once, viral, ~18h asset; this is the phase flagship.
- Cadence: monthly digest + event-driven posts (when a tool changes). Add `llms.txt` + clean markdown URLs.
- KPI: 800–1,000 subs; Agentic 50 = top URL.

### Phase C — Month 3: Manual interactivity + paid validation (pick ONE)

- **Either** weekly prompt-teardowns **or** the paid micro-cohort — **not both** (one is a weekly sink, the other is live synchronous hours; capacity doesn't allow both).
- Recommended: run the **paid micro-cohort** (2 weeks, ৳2,000–3,000, 15–20 seats, "Cursor/Claude Code দিয়ে আপনার প্রথম প্রজেক্ট" over Discord/Meet) — it directly tests willingness-to-pay (the Gate 2 signal, §12), ~৳40K self-funds the next quarter, and doubles as the CLI beta cohort. Don't start recurring teardowns until the funnel has proven it converts.
- KPI: 1,500 subs; sold-out micro-cohort; 3 public learner outcomes.

### Phase D — Months 4–7 (stretched from v1's 1 month): `codealoy` CLI MVP + first paid course

- **The capacity crux.** The full interactive Agentic 50 is arithmetically impossible solo (~2–4 hrs/task × 50 = 100–200 hrs = 3–6 months of total capacity, for the _free_ tier). Therefore:
  - **Founder hours go into the spec and the engine, not hand-authoring 50 of anything.** Build: CLI MVP (scaffolding, test-harness validator, quiz gate, progress sync on free-tier Postgres + serverless, ~$0 infra), entitlement/auth, and **~10–12 reference interactive tasks** (the free "Agentic Starter").
  - The other ~38 Agentic 50 tasks remain the **public roadmap doc** (famous + completable with the CLI scaffold) and become a **community build** via the manifest spec (recognition/leaderboard credit). The viral "complete the famous list" asset survives because the _list_ is public.
- Visual-diff validator next. First **paid project course** authored and shipped CLI-delivered (per-course ownership).
- Run micro-cohorts / first full cohort; publish outcome stories.
- KPI: ৳3–5 lakh/month revenue trajectory by month 9; CAC ≈ 0 (organic funnel).

### Phase E — Months 6–12: Deepen & defend

- VS Code/Cursor extension (thin CLI wrapper). Community-contributed tasks (manifest spec enables this) with recognition/revenue share. First B2B workshop. Dhaka demo-day meetup. 3/6/12-month Pro pass launches once 4+ courses exist. Begin AI-tutor beta (the future beginner-grade paid product).
- Moat = always-current Bangla agentic canon + BYO-agent interactive product + ship-in-public community. Incumbents can't copy the combination quickly.

### Explicit NOT-do list (before month 4)

No custom LMS, no auth-heavy platform (beyond what paid-course entitlement strictly needs), no video production, no mobile app, no paid ads, no multi-track curriculum, no monthly subscription, **no browser code-execution sandbox (permanently)**.

## 12. Decision Gates (new — Option B: signal-gates, continue-by-default)

The founder chose **continue-by-default signal-gates**: the default is to keep going; missing a KPI triggers a _change to the variable that gate tests_, not an automatic stop. Stop only if the _same_ gate fails twice _after_ a real adjustment. Purpose: make "keep going" an active monthly decision backed by a number, not inertia.

- **Gate 1 — Month 2 — "Does the message land?"** Hit (300+ subs, 1 post with 1K+ reach) → proceed. Partial (100–300) → rewrite the thesis/message, retry one month. Flat (<100, no reach) → rethink thesis; stop only if still flat after a genuine message change.
- **Gate 2 — Month 3–4 — "Will they pay?" — THE HARD FLOOR (imported from Option A).** This is the one non-soft gate. **If ~15 people will not pay _anything_ for a cohort, that is the market telling you the paid thesis is wrong — not a message-tweak signal.** Willingness-to-pay is the least-foolable signal in the whole plan. Outcome: either deliberately reprice/re-segment, or accept that Codealoy is a free brand-building hobby (a legitimate outcome) rather than the alternative income source the founder set out to build.
- **Gate 3 — Month 7 — "Does it compound?"** Repeat cohorts fill + CAC stays ≈0 (organic funnel works) → commit harder. Stuck without paid acquisition → reassess time-vs-return honestly.

## 13. Community Strategy

- GitHub-first contribution (docs/task PRs as on-ramp; contributor leaderboard). **The manifest spec makes community-built Agentic 50 tasks the mechanism for reaching all 50** (founder can't hand-build them solo).
- Weekly "prompt golf" contests (fewest-token solutions); upazila/university leaderboards.
- Public "shipped wall" of learner projects; monthly demo nights; cohort alumni → referral/hiring pipeline.
- Translate-a-thons for key English agentic resources.

## 14. Open Threads (next working sessions)

1. **Task manifest spec** (`.codealoy/task.yaml`) — **now on the critical path** (the CLI, free tasks, paid courses, AND community contribution all consume it as their contract). Likely the _first_ Phase D deliverable, before CLI auth, since everything downstream is shaped by it. Draft schema + 3 worked example tasks.
2. **Founder positioning line** — the one-sentence authority claim for the manifesto's opening (direction settled in §8; exact wording TBD). **Blocks Phase A's manifesto.**
3. Agentic 50 full list authoring (50 titles + briefs mapped to the 6 curriculum tracks) — write-once, Phase B.
4. Transcript-collection formats per tool (Claude Code logs, Cursor chat export, paste fallback) + privacy/secret-stripping design.
5. bKash/Nagad **one-time** payment mechanics (per-course ownership); pass billing deferred with the pass itself.
6. `codealoy` CLI technical architecture (deferred by founder — not this session).
7. First paid project course topic selection (chosen via Phase C signal).

---

_Session participants: Codealoy founder + AI strategy consultant. v1 last updated 12 June 2026; v2 (this grilling session) 13 June 2026._
