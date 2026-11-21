# IMPLEMENTATION_PROMPT — hckerson.com

**Product:** hckerson.com (served at `hckerson.vercel.app`) · **Version:** 1.0 · **Date:** 2026-11-21

Entry point: [START_HERE](START_HERE.md) · Overview: [README](README.md) · Index: [ARTIFACT_INDEX](ARTIFACT_INDEX.md) · Setup: [SETUP-CHECKLIST](SETUP-CHECKLIST.md) · Master index: [DESIGN-OS-COMPLETE](DESIGN-OS-COMPLETE.md)

This is a self-contained engineering prompt. Copy it into a new session to build the product. It brings the nine phases together into ordered, verifiable actions. When this prompt and a phase file disagree, the phase file wins for **what** the product does, and `.claude/CLAUDE.md` wins for **how code is written**.

## Contents

1. [Overview](#1-overview)
2. [Required Reading](#2-required-reading)
3. [Visual Design Hand-off](#3-visual-design-hand-off)
4. [Operating Rules for the Build Session](#4-operating-rules-for-the-build-session)
5. [Phase 7 Implementation — Architecture Setup](#5-phase-7-implementation--architecture-setup)
6. [Phase 8 Implementation — Sprint Breakdown](#6-phase-8-implementation--sprint-breakdown)
7. [Phase 9 Implementation — QA Checklist](#7-phase-9-implementation--qa-checklist)
8. [Code Patterns and Standards](#8-code-patterns-and-standards)
9. [Testing Strategy](#9-testing-strategy)
10. [Pre-merge Checklist](#10-pre-merge-checklist)
11. [Deployment Readiness](#11-deployment-readiness)
12. [Reference Map](#12-reference-map)

---

## 1. Overview

### What this prompt does

It turns the design OS into a build order. That covers:

- the files to create;
- the order to create them in;
- the gates where the owner approves;
- the checks that prove each item is done.

### How to use it

1. Read the phases listed in [§2](#2-required-reading).
2. Work through the sprints in [§6](#6-phase-8-implementation--sprint-breakdown) in order. Never start a page before the look gate (M-3) has passed.
3. After each item, update its status in [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) using the fixed vocabulary: Specified, Scheduled, In progress, Built, Verified, Deferred. Status lives there and nowhere else.
4. Before calling the product done, run [§7](#7-phase-9-implementation--qa-checklist) and [§10](#10-pre-merge-checklist).

### What the product is, in one paragraph

A personal engineering portfolio that turns a shared link into a hiring conversation for Aderibigbe Emmanuel (Hckerson), a full-stack engineer in Lagos.

- **Pages:** seven pages and one document (P-01 to P-07, D-01).
- **Content:** typed data, rendered statically.
- **The one server mutation:** delivering a message to the owner's email.
- **Home:** carries a scroll-driven narrative built on the repo's existing stage engine, and it degrades without losing content.
- **North Star:** qualified hiring messages per month ([Phase 1](phase-1-product-vision.md#success-metrics-kpis-north-star)).

### Fixed facts the build must honour

| Fact | Source |
|---|---|
| Public channels: email `emmanueladeribigbe415@gmail.com`, X `@theHckerson`, phone `+234 913 246 3467`, LinkedIn `/in/hckerson`, GitHub `Hckerson` | BR-06 |
| Production URL `https://hckerson.vercel.app` | Phase 1 › Placeholder Resolution |
| Keyhold live link `https://keyhol.me` | BR-09, A-2 |
| Vouchmark and Tekcify are named | BR-05 |
| The education platform is "Client Education Platform": client unnamed, source never linked | BR-04 |
| Only facts from the owner's résumé data and repos. Retracted claims never appear | BR-01 |
| No accounts, no stored inbox, no pricing | Phase 1 › Non-goals |

---

## 2. Required Reading

Read these before writing any code. Each later section assumes them.

| Order | File | Why |
|---|---|---|
| 1 | [Phase 1 — Product Vision](phase-1-product-vision.md) | Goals (G-), personas (PER-), jobs (JTBD-), business rules (BR-01 to BR-12), principles, non-goals |
| 2 | [Phase 2 — Experience Maps](phase-2-experience-maps.md) | Flows F-01 to F-12, with failure and recovery paths |
| 3 | [Phase 3 — Information Architecture](phase-3-information-architecture.md) | Sitemap (P-, D-), slugs, taxonomy, labels, cross-links, SEO, fallback routes |
| 4 | [Phase 4 — Page Blueprints](phase-4-page-blueprints.md) | Per-page purpose, data, device needs and states |
| 5 | [Phase 5 — Section Blueprints](phase-5-section-blueprints.md) | S-01 to S-24: one job each, behaviour only |
| 6 | [Phase 6 — Interaction Contracts](phase-6-interaction-contracts.md) | IC-01 to IC-18: states, keyboard, ARIA, errors |
| 7 | [Phase 7 — Frontend Architecture](phase-7-frontend-architecture.md) | Exact paths, providers, hooks, services |
| 8 | [Phase 8 — Implementation Roadmap](phase-8-implementation-roadmap.md) | Sprints, milestones, risks, the build-status table |
| 9 | [Phase 9 — QA Checklist](phase-9-qa-checklist.md) | QA-001 to QA-120 |
| Host | `.claude/CLAUDE.md`, `docs/UI_LAYERS.md`, `eslint.config.ts` | Rules that bind every edit |

---

## 3. Visual Design Hand-off

This design OS defines what each page must do, not how it looks. The look of each page is decided when it is built: before coding a page, run a visual concept for it with the repo's UI skills, present it to the owner, and build only after approval. Review the rendered page before marking it Built.

### The repo's UI skills

| Skill | Owns | In this product |
|---|---|---|
| **pagecraft** (`.claude/skills/pagecraft`) | Tokens and every visual role, primitives, patterns, chrome, the layout and typography of copy: every layer in `docs/UI_LAYERS.md` | Every page and every layer, P-01 to P-07, S-01 to S-24 except the stage itself |
| **stagecraft** (`.claude/skills/stagecraft`) | Concept, script, actors, materials, light, set, camera, motion, simulation, render, posters, fallbacks | The S-04 scroll narrative on P-01 (IC-12, IC-13) |

The handoff between the two skills is two things only: per-shot tones (ground and ink) and copy slots. Nothing else is shared.

### Sector

The skill matches the client to the economy coverage map. The match is **Consulting**: "Engagements, deliverables, case studies", world `printed-page`, from `docs/economy-coverage-map.md`. Pass it to both skills' `draw.mjs` as `--sector "Consulting"`. Record it in `docs/DESIGN_BRIEF.md` and `docs/STAGE_BRIEF.md`.

### The gates (Sprints 2–3)

Each skill runs its own workflow. The owner approves before anything is built.

| Step | pagecraft | stagecraft |
|---|---|---|
| 1. Truth sheet | Five lines: what it is, what it replaces, the moment of use, the moment of action, the feeling. Shared with stagecraft | Same truth sheet |
| 2. Directions | `node .claude/skills/pagecraft/tools/draw.mjs --sector "Consulting"` deals three directions. Recommend one | `node .claude/skills/stagecraft/tools/draw.mjs --sector "Consulting"` deals three concept cards. Each becomes a storyboard, logline, failure sentence and swap test. Recommend one |
| 3. Brief | `docs/DESIGN_BRIEF.md` from the skill's brief template | Script as data in `lib/home/script.ts`. `docs/STAGE_BRIEF.md` with world rules, signature move, shot list and asset manifest |
| 4. Styleframes | Three key screens at final quality, graded **blind by a separate critic agent** | Two or three key shots at final quality, captured headless, graded **blind by a separate critic agent** |
| 5. Owner approval | Only frames graded Fifth, or Fifth with named gaps, go to the owner, with the critic tables. **End the turn and wait** | Same. **End the turn and wait** |
| 6. Build | Only after approval (M-3) | Asset production and motion pass, only after approval (M-3) |

Milestones M-2 (direction approved) and M-3 (look approved) are hard gates: no page and no stage motion is built before them.

### What this design OS deliberately does not contain

- Colours, type, spacing, sizes, imagery, motion design or layout.
- Placement of anything.
- Inventories of fields, buttons, links or headings.
- Component looks.

Every one of those is a build-time decision, made under the skills with the owner. If a phase file seems to imply a look, treat that as an error in the phase file and raise it. It is not an instruction.

---

## 4. Operating Rules for the Build Session

These are the owner's global rules. They apply to every step of this prompt.

| Rule | What it means here |
|---|---|
| **Analyse → Plan → Present → (approval) → Execute** | When a request says "tell me first", "plan for it" or similar, present the plan and stop. Once approved, execute fully |
| **Fix before drop** | When something is broken, recommend the fix first. Dropping (deleting, skipping, stubbing, deferring) is recommended only when the fix is blocked, and the blocker is named |
| **Heavy jobs: one at a time, across all sessions** | Before `tsc --noEmit`, `vitest`, `next build`, project-wide `eslint`, `pnpm install`/`add`/`dlx`, or any headless browser: check running heavy jobs (`pgrep -fl ...` per the global rule) and headroom (`uptime; memory_pressure \| tail -1`). If one is running, the 1-minute load is above 32, or free memory is below 20 %, wait, and say which job is running. Never run two heavy jobs in parallel. Scope narrowly (one test file, not the suite) |
| **Browsers run headless** | Screenshots and page checks use headless Chrome through a CDP script or the skills' capture tools. Never use a visible browser window. Close every headless browser you start |
| **No dev server without asking** | If the server you need is down, tell the owner and wait. Stop every server you started |
| **No dependency without approval** | Never hand-edit `package.json`. Propose the package and the reason, then wait for approval before `pnpm add` (Library Selection Policy) |
| **Never delete unbuilt features** | Starter code (auth, proxy, contract, tools) stays untouched. Removal needs an explicit instruction naming the feature (`.claude/CLAUDE.md` rule 6, Scope Preservation) |
| **Never touch `.claude/skills/`** | Skill files and their reference images are the owner's tooling, not project content |
| **Git** | Commit and push only when the owner asks. Never list commit or push as a remaining task |
| **Status answers** | When asked for status, answer with one table: item, state (✅ / ❌), who it waits on, a clickable file or link |

---

## 5. Phase 7 Implementation — Architecture Setup

The full specification is in [Phase 7](phase-7-frontend-architecture.md). This section is the build order.

### 5.1 Folder structure (exact paths)

New paths are marked **+**.

```
app/
  layout.tsx                         root: metadata, fonts, QueryProvider
+ not-found.tsx                      P-06
+ error.tsx                          P-07
+ global-error.tsx                   P-07 last resort
+ robots.ts
+ sitemap.ts
+ opengraph-image.tsx
+ (site)/
+   layout.tsx                       S-01, S-02, main landmark, skip target
+   error.tsx
+   page.tsx                         P-01
+   opengraph-image.tsx
+   work/page.tsx                    P-02
+   work/opengraph-image.tsx
+   work/[slug]/page.tsx             P-03
+   work/[slug]/opengraph-image.tsx
+   about/page.tsx                   P-04
+   about/opengraph-image.tsx
+   contact/page.tsx                 P-05
+   contact/opengraph-image.tsx
components/
  providers/  + query-provider.tsx   stage-scroll-provider.tsx (exists)
  wrappers/   stage-canvas.tsx and scene wrappers (exist)
+ ui/ + common/ + brand/ + patterns/ + features/ + sections/ + layout/
lib/
  actions/    + send-message.ts
  hooks/      + use-send-message.ts  + use-copy-to-clipboard.ts
+ data/       profile.ts case-studies.ts roles.ts education.ts skills.ts
+ portfolio/  constants.ts structured-data.ts get-*.ts (one selector per file)
+ home/       script.ts
+ services/   logger.ts mailer.ts rate-limit.ts
  types/      + portfolio.ts  + message.ts   (re-exported from index.ts)
  validations/ + portfolio.ts + message.ts
  utils/      + format-period.ts  + client-ip.ts
  constants.ts                       gains routes, SITE_CONFIG, MAIN_CONTENT_ID, MESSAGE_LIMITS
+ public/
+   aderibigbe-emmanuel-resume.pdf
+   images/headshot.webp
+   work/<slug>/
+   stage/home/
```

### 5.2 Route structure (exact routes)

| Route | File | ID | Rendering | Must have |
|---|---|---|---|---|
| `/` | `app/(site)/page.tsx` | P-01 | Static | `Person` JSON-LD. Stage lazy and client-only |
| `/work` | `app/(site)/work/page.tsx` | P-02 | Static | Order from data |
| `/work/[slug]` | `app/(site)/work/[slug]/page.tsx` | P-03 | SSG | `generateStaticParams`, `dynamicParams = false`, `generateMetadata`, `CreativeWork` and `BreadcrumbList` JSON-LD |
| `/about` | `app/(site)/about/page.tsx` | P-04 | Static | `Person` JSON-LD |
| `/contact` | `app/(site)/contact/page.tsx` | P-05 | Static and Server Action | `?type=` preselection |
| unknown | `app/not-found.tsx` | P-06 | Static | 404, `noindex` |
| failure | `app/error.tsx`, `app/(site)/error.tsx`, `app/global-error.tsx` | P-07 | Client | Logs through `lib/services/logger.ts` |
| `/robots.txt` | `app/robots.ts` | — | Static | Points at the sitemap |
| `/sitemap.xml` | `app/sitemap.ts` | — | Static | P-01 to P-05 plus every slug |
| `/aderibigbe-emmanuel-resume.pdf` | `public/` | D-01 | Static | Path in `RESUME_PATH` |

Redirects go in `next.config.ts › redirects()`, are permanent, and take their paths from constants:

| Source | Destination |
|---|---|
| `/resume`, `/cv` | `RESUME_PATH` |
| `/projects` | `/work` |
| `/projects/:slug` | `/work/:slug` |

Initial slugs are `keyhold`, `client-education-platform` and `starter-system` ([Phase 3 › Sitemap](phase-3-information-architecture.md#sitemap)).

### 5.3 Layouts

| Layout | Owns |
|---|---|
| `app/layout.tsx` | `<html lang="en">`, global CSS, `next/font` (chosen at build), site-wide `metadata` with `metadataBase: new URL(SITE_CONFIG.url)`, `QueryProvider`, analytics mount once approved |
| `app/(site)/layout.tsx` | S-01, S-02, the `main` landmark with `id={MAIN_CONTENT_ID}` |

P-06 and P-07 sit outside `(site)` and compose the same `layout/` components directly, so recovery works when the group layout itself failed.

### 5.4 Providers and contexts

| Provider | File | Scope |
|---|---|---|
| `QueryProvider` | `components/providers/query-provider.tsx` (new) | Root. One `QueryClient` per browser session, created in `useState` |
| `StageScrollProvider` | `components/providers/stage-scroll-provider.tsx` (exists) | P-01 only, mounted by `sections/home-stage.tsx`. It already bypasses itself under reduced motion |

There are no other contexts and no global store ([Phase 7 › Contexts and Stores](phase-7-frontend-architecture.md#contexts-and-stores)).

### 5.5 Hooks organisation

| Hook | Status | Contract |
|---|---|---|
| `lib/hooks/use-send-message.ts` | New | IC-05 |
| `lib/hooks/use-copy-to-clipboard.ts` | New | IC-08 |
| `lib/hooks/use-stage-timeline.ts` | Exists | IC-12 |
| `lib/hooks/use-render-pipeline.ts`, `use-pointer-sway.ts`, `use-baked-rigid.ts` | Exist | IC-12 internals |
| Auth and starter hooks | Exist, unused, preserved | — |

Components never import `@/lib/api-client`. They consume hooks (`starter/api-access-boundary`).

**One reconciliation.** [Phase 6 › IC-05](phase-6-interaction-contracts.md) names `useActionState` as the driver of the client states, while [Phase 7](phase-7-frontend-architecture.md#messaging) names `useSendMessage`. The repo's async rule is that components use hooks in `lib/hooks/`. So the build does this:

- The native `<form action={sendMessage}>` is the no-JS path.
- After hydration, `onSubmit` calls `useSendMessage().mutate(formData)`.
- `useActionState` is not used.

### 5.6 Component organisation

The full mapping is in [Phase 7 › Component Organisation](phase-7-frontend-architecture.md#component-organisation). Build order follows `docs/UI_LAYERS.md`, smallest layer first:

| Layer | Folder | Files | Serves |
|---|---|---|---|
| Primitive | `ui/` | `button`, `text-link`, `text-field`, `text-area`, `radio-group` (compound), `dialog` (compound), `disclosure` (compound), `visually-hidden`, `live-region` | All |
| Brand | `brand/` | `wordmark` | S-01 |
| Shared composition | `common/` | `skip-link`, `external-link`, `copy-button`, `resume-link`, `json-ld`, `retry-button` | S-01, S-02, S-22, S-24 |
| Pattern | `patterns/` | `fact-list`, `period-label`, `status-label`, `capability-list`, `field-error` | S-03, S-10, S-14, S-18, S-21 |
| Feature | `features/` | `availability-mark`, `case-study-row`, `role-row`, `education-row`, `skill-row`, `decision-row`, `channel-row`, `case-study-pager`, `media-viewer` | S-05, S-06, S-09, S-12, S-15, S-16, S-18 to S-20, S-22 |
| Section | `sections/` | One per section, S-03 to S-24 | Pages |
| Chrome | `layout/` | `site-nav`, `site-nav-disclosure`, `site-contact-path` | S-01, S-02 |
| Wrapper | `wrappers/` | `stage-canvas` and scene wrappers (exist) | S-04 |

**Section file map:**

| ID | File | ID | File |
|---|---|---|---|
| S-03 | `site-introduction.tsx` | S-14 | `case-study-stack.tsx` |
| S-04 | `home-stage.tsx` | S-15 | `case-study-media.tsx` |
| S-05 | `selected-work.tsx` | S-16 | `case-study-continue.tsx` |
| S-06 | `current-roles.tsx` | S-17 | `profile-summary.tsx` |
| S-07 | `home-invitation.tsx` | S-18 | `experience.tsx` |
| S-08 | `work-introduction.tsx` | S-19 | `education.tsx` |
| S-09 | `case-study-list.tsx` | S-20 | `skills.tsx` |
| S-10 | `case-study-overview.tsx` | S-21 | `message-composer.tsx` |
| S-11 | `case-study-problem.tsx` | S-22 | `direct-channels.tsx` |
| S-12 | `case-study-decisions.tsx` | S-23 | `not-found-recovery.tsx` |
| S-13 | `case-study-outcome.tsx` | S-24 | `error-recovery.tsx` |

Client islands are S-04, S-21 and S-24, plus the disclosure, copy, dialog and pager controls. Everything else is a Server Component.

### 5.7 Data, services and environment

| Unit | File | Responsibility |
|---|---|---|
| Portfolio schemas | `lib/validations/portfolio.ts` | `profileSchema`, `caseStudySchema`, `roleSchema`, `educationSchema`, `skillSchema`. Types via `z.infer` in `lib/types/portfolio.ts` |
| Portfolio data | `lib/data/*.ts` | Typed constants copied from the owner's résumé data and repos (BR-01) |
| Selectors | `lib/portfolio/get-*.ts` | `getCaseStudy`, `getAdjacentCaseStudies`, `getFeaturedCaseStudies`, `getSkillsWithEvidence`, `getRoles` |
| Message schema | `lib/validations/message.ts` | `messageSchema`, shared by client and action |
| Server Action | `lib/actions/send-message.ts` | Validate → bot filter → rate limit → mail → `ActionResult` |
| Mailer | `lib/services/mailer.ts` | Resend REST through `fetch` (no new dependency), `server-only` |
| Rate limit | `lib/services/rate-limit.ts` | In-memory sliding window per instance (best-effort on serverless) |
| Logger | `lib/services/logger.ts` | The only place errors are reported |

`.env.example` additions:

```
RESEND_API_KEY=
CONTACT_TO=emmanueladeribigbe415@gmail.com
CONTACT_FROM=
```

---

## 6. Phase 8 Implementation — Sprint Breakdown

The plan is 4 weeks in 8 half-week sprints. The source is [Phase 8 › Sprint Breakdown](phase-8-implementation-roadmap.md#sprint-breakdown). Update [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) as items move.

### Sprint 1 — Content and data foundation (Week 1, days 1–2)

| Build | Files |
|---|---|
| Portfolio schemas and types | `lib/validations/portfolio.ts`, `lib/types/portfolio.ts`, re-exported from `lib/types/index.ts` |
| Data, sourced only from the owner's résumé data and repos | `lib/data/profile.ts`, `case-studies.ts`, `roles.ts`, `education.ts`, `skills.ts` |
| Selectors and their tests | `lib/portfolio/get-*.ts` and colocated `.test.ts` |
| Constants | `lib/constants.ts` (routes, `SITE_CONFIG`, `MAIN_CONTENT_ID`, `MESSAGE_LIMITS`), `lib/portfolio/constants.ts` (copy, vocabularies, title patterns) |
| Assets | `public/aderibigbe-emmanuel-resume.pdf`, `public/images/headshot.webp` |
| Infrastructure | `components/providers/query-provider.tsx`, `lib/services/logger.ts`, `.env.example` additions |

- **Flows:** F-11, and D-01 for F-04.
- **Exit:** data tests pass. Every fact has a source. **M-1: the owner reviews `lib/data`.**

### Sprint 2 — Direction (Week 1, days 3–5)

| Build | Detail |
|---|---|
| pagecraft | Truth sheet → `draw.mjs --sector "Consulting"` → `docs/DESIGN_BRIEF.md` → `styles/tokens.css` filled |
| stagecraft | Truth sheet → concept cards → storyboard → `lib/home/script.ts` → `docs/STAGE_BRIEF.md` with asset manifest |

- **Exit: M-2.** The owner approves the direction and the concept. Stop and wait.

### Sprint 3 — Styleframes (Week 2, days 1–2)

| Build | Detail |
|---|---|
| pagecraft | Three key screens at final quality, captured headless, graded blind by a separate critic agent |
| stagecraft | Two or three key shots, captured with the skill's shoot tool, graded blind by a separate critic agent |

- **Exit: M-3.** The owner approves the look. Stop and wait. No page is built before this.

### Sprint 4 — Shared layers and resilience (Week 2, days 3–5)

| Build | IDs |
|---|---|
| `ui/` primitives, `brand/`, `patterns/`, `common/` | IC-02, IC-04, IC-09, IC-15 |
| Chrome: `layout/site-nav*`, `layout/site-contact-path` | S-01, S-02, IC-01, IC-03 |
| Root and `(site)` layouts | — |
| `not-found.tsx`, `error.tsx`, `global-error.tsx` | P-06, P-07, S-23, S-24 |
| Redirects in `next.config.ts` | Phase 3 › Fallback Routes |

- **Flows:** F-09, F-10.
- **Exit:** the shared layers are graded Fifth by the pagecraft critic. P-06 and P-07 are built.

### Sprint 5 — Evidence: work (Week 3, days 1–2)

| Build | IDs |
|---|---|
| P-02 | S-08, S-09, IC-10 |
| P-03 | S-10 to S-16, IC-11, IC-16, IC-18 |
| Metadata, `opengraph-image.tsx` per route, `sitemap.ts`, `robots.ts`, `lib/portfolio/structured-data.ts` | F-06 |

- **Exit:** every case study renders. Link previews are verified (QA-092, QA-093).

### Sprint 6 — Evidence: about, and conversion (Week 3, days 3–5)

| Build | IDs |
|---|---|
| P-04 | S-17 to S-20 |
| P-05 | S-21, S-22 |
| Messaging | `lib/validations/message.ts`, `lib/actions/send-message.ts`, `lib/services/mailer.ts`, `lib/services/rate-limit.ts`, `lib/utils/client-ip.ts`, `lib/hooks/use-send-message.ts`, `lib/hooks/use-copy-to-clipboard.ts` |
| Contracts | IC-05, IC-06, IC-07, IC-08, IC-14 |

- **Flows:** F-01, F-03, F-04, F-05, F-08, F-12.
- **Exit: M-5.** A test message reaches the owner. Every IC-05 failure path is exercised.

### Sprint 7 — Home and narrative (Week 4, days 1–2)

| Build | IDs |
|---|---|
| P-01 text sections | S-03, S-05, S-06, S-07 |
| Stage asset production (per the `STAGE_BRIEF` manifest), motion pass, `sections/home-stage.tsx` | S-04, IC-12, IC-13, IC-17 |
| Fallback chain | Poster → video → still. Reduced motion gets the still |

- **Flows:** F-01, F-07.
- **Exit:** the narrative scrubs on the desktop and phone paths. Reduced motion gets the still. The facts are readable without the stage.
- **Risk R-1 mitigation:** Home can launch on the still path while the motion pass converges.

### Sprint 8 — Converge, verify, launch (Week 4, days 3–5)

| Build | Detail |
|---|---|
| Dailies | Capture → critic → three changes → next iteration, until convergence. Logged in the briefs |
| Audits | pagecraft `audit.md` and `verify.md`. stagecraft `verify.md`. Fingerprint rows appended per each skill |
| QA | [Phase 9](phase-9-qa-checklist.md) in full |
| Deploy | [§11](#11-deployment-readiness) |

- **Exit: M-6.** Live on `https://hckerson.vercel.app`.

### Milestones

| ID | Milestone | Sprint | Evidence |
|---|---|---|---|
| M-1 | Facts locked | 1 | Owner has reviewed `lib/data` |
| M-2 | Direction approved | 2 | `DESIGN_BRIEF` and `STAGE_BRIEF` signed off |
| M-3 | Look approved | 3 | Styleframes and critic tables accepted |
| M-4 | Evidence pages on preview | 5–6 | Preview deploy of P-02 to P-05 |
| M-5 | Conversion proven | 6 | Test message received (F-12) |
| M-6 | Launch | 8 | Phase 9 passed. Production deploy |

### Dependencies and sequencing

| Item | Waits on |
|---|---|
| Any page build | M-3 |
| S-04 motion | M-2 concept, M-3 key shots, asset manifest |
| P-05 delivery | Owner provides a Resend account and `RESEND_API_KEY` |
| Analytics (`@vercel/analytics`) | Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1) |
| E2E (Playwright, headless) | Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1) |
| Persistent rate-limit store | Owner approval (R-4) |
| Icon set | Recommended at build, confirmed by the owner before install |
| Keyhold live link | `keyhol.me` resolving (A-2). Fall back to `keyhold-pi.vercel.app` per BR-09 |
| Résumé | `Aderibigbe-Emmanuel-Resume.pdf` (A-3, resolved; owner choice 2026-11-22) |

### Deferred (with revisit triggers)

| Item | Trigger |
|---|---|
| Site search | More than 12 case studies |
| Work filters | More than 8 case studies |
| Writing / notes | Owner decides to publish writing |
| Tidemark case study | Tidemark deployed |
| Persistent rate-limit store | Spam observed, or owner approval |

---

## 7. Phase 9 Implementation — QA Checklist

There are 120 items. The source is [Phase 9](phase-9-qa-checklist.md), which has the full text and traces. An item passes only with evidence. An item not run is **Not run**, never passed.

### 7.1 Pre-launch QA by category

| Category | Items | What must be proven |
|---|---|---|
| Content integrity | QA-001 to QA-012 | Facts sourced (BR-01). Retracted claims absent. No clones (BR-02). Skill evidence (BR-03). Client unnamed (BR-04). Exact channels (BR-06). Live links 2xx (BR-09). Current résumé (BR-10). One availability (BR-11). Narrative facts exist as text (BR-12). No placeholders |
| Accessibility and WCAG 2.2 AA | QA-013 to QA-036 | Skip link. Keyboard-only operation. Visible and unobscured focus. Target size. Headings and landmarks. Alt text. Stage `aria-hidden`. Reduced motion. Labelled fields with described errors. Live-region status. External-link announcement. Disclosure, dialog and navigation ARIA. Contrast. Reflow at 320 px. Text spacing. 200 % zoom. Screen-reader pass |
| Behavioural consistency | QA-037 to QA-044 | The same action behaves the same everywhere. Contact and résumé one step from every page. Labels and dates per Phase 3. Copy from constants. `?type=` preselection |
| Responsiveness | QA-045 to QA-052 | 320–1920 px widths. Portrait and landscape. The narrative's phone path. Correct keyboards. Native channel apps. Swipe in the media viewer. Nothing hover-only. Compact navigation |
| Performance | QA-053 to QA-064 | LCP ≤ 2.5 s, CLS < 0.1, INP < 200 ms. No stage code off Home. Stage lazy, visible-only and adaptive. Asset budgets. `next/image`, `next/font`. Static CDN delivery. Lighthouse ≥ 90 on P-02 to P-05 |
| State coverage | QA-065 to QA-074 | Featured fallback. Empty P-02. Missing optional links and media. Private, Retired and empty skill groups. Every IC-05 state. The sent state's content. Freelance type carried. Narrative tiers |
| Error handling | QA-075 to QA-084 | 404 for unknown routes and slugs. Error boundaries and `global-error`. Provider failure. Network drop. Double submit. Honeypot. Rate limit. Logging, no `console` |
| Loading behaviour | QA-085 to QA-089 | Facts readable without JavaScript. Form posts without JavaScript. Poster equals the opening frame. Reserved media space. Focus on route change |
| SEO readiness | QA-090 to QA-099 | Titles, descriptions and preview images per route. Previews verified in Slack, LinkedIn, X and WhatsApp. Valid JSON-LD. Sitemap, robots, canonical URLs and redirects |
| Cross-browser | QA-100 to QA-106 | Chrome, Safari (macOS and iOS), Firefox, Edge, Samsung Internet. No-WebGPU path. Clipboard fallback |
| Scalability | QA-107 to QA-110 | Adding a case study needs data only. A 20-item fixture. Static spike handling. One-place availability |
| Readiness, DX, maintainability | QA-111 to QA-120 | type-check, lint, test, contract:check and build pass. Files ≤ 150 lines, one component per file. Pages compose only. `.env.example` complete. Starter code untouched. README explains content updates |

### 7.2 Accessibility verification procedure

1. **Automated:** axe runs inside the component tests (and the E2E runs once approved). Zero critical or serious issues.
2. **Keyboard:** complete F-01, F-02, F-03, F-04 and F-09 using only Tab, Shift+Tab, Enter, Space, Escape and arrow keys.
3. **Screen readers:** VoiceOver with Safari (macOS and iOS) and NVDA with Firefox. Complete F-01, F-03 and F-04 (QA-036).
4. **Reduced motion:** with the OS setting on, confirm there is no scroll hijack, the stage shows the still, and anchor navigation jumps without animation (QA-022).
5. **Zoom and reflow:** 200 % zoom and a 320 CSS px width, with every function intact (QA-033, QA-035).
6. **Contrast:** check against the approved tokens once `DESIGN_BRIEF` exists (QA-032).

### 7.3 Performance targets

| Metric | Target | Where |
|---|---|---|
| LCP | ≤ 2.5 s | Phone emulation, 4G, every route |
| CLS | < 0.1 | Every route |
| INP | < 200 ms | Every route |
| Non-Home JS | Framework plus the route's islands. No three, gsap, lenis or stage code | Build output |
| Stage | Never the LCP element. Loads after first paint | P-01 |
| Lighthouse performance | ≥ 90 | P-02 to P-05, phone |

Lighthouse runs headless, one run at a time, after the machine-load check.

### 7.4 Browser compatibility

| Browser | Versions | Flows |
|---|---|---|
| Chrome (desktop and Android) | Latest two | All |
| Safari (macOS and iOS) | Latest two | All |
| Firefox | Latest two | All |
| Edge | Latest | All |
| Samsung Internet, mid-range Android | Latest | F-01, F-03 |
| Any browser without WebGPU | — | The narrative falls back (QA-104) |

### 7.5 Responsive behaviour verification

| Check | Widths / conditions |
|---|---|
| All flows complete | 320, 375, 768, 1024, 1440 and 1920 px |
| Orientation | Portrait and landscape phones |
| Input | Touch only, keyboard only, pointer only |
| Narrative | Desktop real-time path, phone path, reduced-motion still |

### 7.6 Interaction contract completeness

For each of IC-01 to IC-18, confirm every state listed in [Phase 6](phase-6-interaction-contracts.md) has been reached in a test or a recorded manual check. Mark the contract **Verified** in Phase 8 only when that is true.

| Contract | Must-reach states |
|---|---|
| IC-03 | Closed, open, Escape closes, focus returns |
| IC-05 | `idle`, `validating`, `sending`, `sent`, `failed`, `rate-limited`, `offline`, invalid-with-summary |
| IC-08 | Idle, copied, failed with a selectable fallback |
| IC-12 | `poster`, `playing`, `paused-offscreen`, `still`, and each tier `realtime` → `realtime-light` → `video` → `still` |
| IC-16 | Closed, open with focus trapped, navigate, Escape closes, focus returns |
| IC-18 | Collapsed, expanded, with `aria-expanded` bound to state |
| Others | Every state in their Phase 6 tables |

---

## 8. Code Patterns and Standards

The rules come from `.claude/CLAUDE.md` and are enforced by `eslint.config.ts`:

- no comments in TS or TSX;
- no `console`;
- `@/` imports only;
- one component per file, kebab-case;
- files ≤ 150 lines;
- pages compose sections only;
- `lib/` has no JSX;
- IDs from `nanoid`;
- Zod schemas in `lib/validations/`, with types via `z.infer`;
- copy and routes in constants.

The snippets below follow the repo's existing style: 4-space indent, double quotes, trailing commas. They define **structure only**. Markup, class names and any look come from the approved `DESIGN_BRIEF` at build time.

### 8.1 Schema and type pattern

`lib/validations/portfolio.ts`:

```ts
import { z } from "zod";

export const caseStudyStatusSchema = z.enum([
    "live",
    "private",
    "in-development",
    "retired",
]);

export const caseStudySchema = z
    .object({
        slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
        title: z.string().min(1),
        summary: z.string().min(1),
        kind: z.enum(["product", "client", "platform"]),
        status: caseStudyStatusSchema,
        order: z.number().int(),
        featured: z.boolean().default(false),
        links: z.object({
            live: z.string().url().startsWith("https://").optional(),
            source: z.string().url().startsWith("https://").optional(),
        }),
    })
    .refine((study) => study.status !== "private" || !study.links.source);
```

`lib/types/portfolio.ts`:

```ts
import type { z } from "zod";
import type { caseStudySchema } from "@/lib/validations/portfolio";

export type CaseStudy = z.infer<typeof caseStudySchema>;
```

### 8.2 Selector pattern

`lib/portfolio/get-adjacent-case-studies.ts`:

```ts
import { caseStudies } from "@/lib/data/case-studies";
import type { CaseStudy } from "@/lib/types";

export const getAdjacentCaseStudies = (slug: string) => {
    const ordered = [...caseStudies].sort((a, b) => a.order - b.order);
    const index = ordered.findIndex((study) => study.slug === slug);
    const previous: CaseStudy | undefined = ordered[index - 1];
    const next: CaseStudy | undefined = ordered[index + 1];
    return { previous, next };
};
```

### 8.3 Component structure template

A component holds one export. Its file name matches the export in kebab-case, and its props are typed locally. Domain types are imported from `@/lib/types`, never declared in a component (`starter/domain-types-in-lib`).

`components/features/case-study-row.tsx`:

```tsx
import Link from "next/link";
import { workRoute } from "@/lib/constants";
import { STATUS_LABELS } from "@/lib/portfolio/constants";
import type { CaseStudy } from "@/lib/types";

interface Props {
    study: CaseStudy;
}

export default function CaseStudyRow({ study }: Props) {
    return (
        <article aria-labelledby={`study-${study.slug}`}>
            <h3 id={`study-${study.slug}`}>
                <Link href={workRoute(study.slug)}>{study.title}</Link>
            </h3>
            <p>{study.summary}</p>
            <p>{STATUS_LABELS[study.status]}</p>
        </article>
    );
}
```

A client component declares `"use client"` and receives plain serialisable props from its server parent.

### 8.4 Section template

A section does one job ([Phase 5](phase-5-section-blueprints.md)). It reads data through selectors and composes lower layers.

`components/sections/case-study-list.tsx`:

```tsx
import CaseStudyRow from "@/components/features/case-study-row";
import { getOrderedCaseStudies } from "@/lib/portfolio/get-ordered-case-studies";
import { COPY } from "@/lib/portfolio/constants";

export default function CaseStudyList() {
    const studies = getOrderedCaseStudies();

    if (studies.length === 0) return <p>{COPY.noCaseStudies}</p>;

    return (
        <section aria-label={COPY.caseStudies}>
            {studies.map((study) => (
                <CaseStudyRow key={study.slug} study={study} />
            ))}
        </section>
    );
}
```

### 8.5 Page template (composes sections only)

`app/(site)/work/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyOverview from "@/components/sections/case-study-overview";
import CaseStudyProblem from "@/components/sections/case-study-problem";
import CaseStudyDecisions from "@/components/sections/case-study-decisions";
import CaseStudyOutcome from "@/components/sections/case-study-outcome";
import CaseStudyStack from "@/components/sections/case-study-stack";
import CaseStudyMedia from "@/components/sections/case-study-media";
import CaseStudyContinue from "@/components/sections/case-study-continue";
import { caseStudies } from "@/lib/data/case-studies";
import { getCaseStudy } from "@/lib/portfolio/get-case-study";
import { caseStudyMetadata } from "@/lib/portfolio/metadata";

interface Props {
    params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
    caseStudies.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> =>
    caseStudyMetadata(getCaseStudy((await params).slug));

export default async function CaseStudyPage({ params }: Props) {
    const study = getCaseStudy((await params).slug);
    if (!study) notFound();

    return (
        <>
            <CaseStudyOverview study={study} />
            <CaseStudyProblem study={study} />
            <CaseStudyDecisions study={study} />
            <CaseStudyOutcome study={study} />
            <CaseStudyStack study={study} />
            <CaseStudyMedia study={study} />
            <CaseStudyContinue slug={study.slug} />
        </>
    );
}
```

The `starter/page-composes-only` rule enforces this shape.

### 8.6 Server Action pattern

This mirrors `lib/actions/create-user.ts`:

- `"use server"`;
- `safeParse` first;
- a typed `ActionResult<T>` from `lib/types/api.ts`;
- success only on a confirmed upstream 2xx (BR-07).

`lib/validations/message.ts`:

```ts
import { z } from "zod";
import { MESSAGE_LIMITS } from "@/lib/constants";
import { OPPORTUNITY_TYPES } from "@/lib/portfolio/constants";

export const messageSchema = z.object({
    name: z.string().trim().min(1).max(MESSAGE_LIMITS.name),
    email: z.string().trim().email(),
    type: z.enum(OPPORTUNITY_TYPES),
    organisation: z.string().trim().max(MESSAGE_LIMITS.organisation).optional(),
    body: z.string().trim().min(MESSAGE_LIMITS.bodyMin).max(MESSAGE_LIMITS.bodyMax),
    source: z.string(),
    website: z.string().max(0).optional(),
    startedAt: z.coerce.number(),
    attempt: z.string().min(1),
});

export type MessageInput = z.infer<typeof messageSchema>;
```

`lib/actions/send-message.ts`:

```ts
"use server";
import { headers } from "next/headers";
import { messageSchema } from "@/lib/validations/message";
import { sendMail } from "@/lib/services/mailer";
import { rateLimit } from "@/lib/services/rate-limit";
import { logError } from "@/lib/services/logger";
import { clientIp } from "@/lib/utils/client-ip";
import {
    INVALID_REQUEST,
    MESSAGE_LIMITS,
    RATE_LIMITED,
    REQUEST_FAILED,
} from "@/lib/constants";
import type { ActionResult } from "@/lib/types/api";

export const sendMessage = async (
    formData: FormData,
): Promise<ActionResult<{ sentAt: number }>> => {
    const parsed = messageSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
        return { ok: false, status: 400, message: INVALID_REQUEST };
    }

    const message = parsed.data;
    const now = Date.now();
    if (message.website || now - message.startedAt < MESSAGE_LIMITS.minFillMs) {
        return { ok: true, data: { sentAt: now } };
    }

    const ip = clientIp(await headers());
    if (!rateLimit(`${ip}:${message.email}`)) {
        return { ok: false, status: 429, message: RATE_LIMITED };
    }

    const delivered = await sendMail(message);
    if (!delivered.ok) {
        logError("send-message", delivered.status);
        return { ok: false, status: delivered.status, message: REQUEST_FAILED };
    }

    return { ok: true, data: { sentAt: now } };
};
```

Notes:

- The honeypot and fast-fill branch returns a silent fake success (QA-082). It is the only success path that does not deliver, and it never reaches the mailer.
- `Date.now()` here is a timestamp, not an ID. The repo's ID rule only flags `Date.now()` used in ID positions.
- `sendMail` returns `{ ok, status }`. A missing `RESEND_API_KEY` maps to 503 and is logged (BR-07).

### 8.7 Service pattern

`lib/services/mailer.ts`:

```ts
import "server-only";
import type { MessageInput } from "@/lib/validations/message";
import { MAIL_ENDPOINT, OPPORTUNITY_SUBJECT } from "@/lib/portfolio/constants";

export const sendMail = async (message: MessageInput) => {
    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;
    if (!key || !to || !from) return { ok: false, status: 503 };

    const response = await fetch(MAIL_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
            "Idempotency-Key": message.attempt,
        },
        body: JSON.stringify({
            from,
            to,
            reply_to: message.email,
            subject: OPPORTUNITY_SUBJECT(message.type, message.name),
            text: [message.body, message.organisation, message.source]
                .filter(Boolean)
                .join("\n\n"),
        }),
    }).catch(() => null);

    return response?.ok
        ? { ok: true, status: response.status }
        : { ok: false, status: response ? 502 : 503 };
};
```

The `attempt` key (from `nanoid` on the client) makes a retried request deliver once (IC-05 double-submit guard).

### 8.8 Hook pattern

This mirrors `lib/hooks/use-create-user.ts`: a TanStack mutation wrapping the Server Action, throwing on `ok: false` so the mutation's error state carries the failure.

`lib/hooks/use-send-message.ts`:

```ts
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "@/lib/actions/send-message";

export class SendMessageError extends Error {
    constructor(
        message: string,
        readonly status: number,
    ) {
        super(message);
    }
}

export const useSendMessage = () =>
    useMutation({
        mutationFn: async (formData: FormData) => {
            const result = await sendMessage(formData);
            if (!result.ok) throw new SendMessageError(result.message, result.status);
            return result.data;
        },
    });
```

The composer maps mutation state to IC-05 states:

| Mutation | `status` | IC-05 state |
|---|---|---|
| `isPending` | — | `sending` |
| `isSuccess` | — | `sent` |
| `isError` | 400 | `idle` with field errors |
| `isError` | 429 | `rate-limited` |
| `isError` | 502 / 503 | `failed` |
| fetch rejected while `navigator.onLine === false` | — | `offline` |

A plain error thrown by the mutation is a network failure. The composer then checks `navigator.onLine` to tell `offline` apart from `failed`.

`lib/hooks/use-copy-to-clipboard.ts`:

```ts
import { useEffect, useState } from "react";
import { MOTION_DURATION } from "@/lib/constants";

type CopyState = "idle" | "copied" | "failed";

export const useCopyToClipboard = () => {
    const [state, setState] = useState<CopyState>("idle");

    useEffect(() => {
        if (state === "idle") return;
        const reset = setTimeout(() => setState("idle"), MOTION_DURATION.slower * 4000);
        return () => clearTimeout(reset);
    }, [state]);

    const copy = async (value: string) =>
        setState(
            await navigator.clipboard
                ?.writeText(value)
                .then(() => "copied" as const)
                .catch(() => "failed" as const) ?? "failed",
        );

    return { state, copy };
};
```

If the reset duration has a dedicated token in the approved brief, use that token instead of deriving it from `MOTION_DURATION`.

### 8.9 Error pattern

`app/(site)/error.tsx`:

```tsx
"use client";
import { useEffect } from "react";
import ErrorRecovery from "@/components/sections/error-recovery";
import { logError } from "@/lib/services/logger";

interface Props {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function SiteError({ error, reset }: Props) {
    useEffect(() => {
        logError("site-segment", error.digest ?? error.message);
    }, [error]);

    return <ErrorRecovery onRetry={reset} />;
}
```

Rules:

- Never render `error.message` to visitors (P-07).
- `ErrorRecovery` (S-24) always offers the direct channels (static, from `lib/data/profile.ts`) and the retry (IC-15).
- `global-error.tsx` renders its own `<html>` and `<body>` and the same recovery section.
- `lib/services/logger.ts` must be safe to import from client components. It is the only module allowed to report errors.

### 8.10 Loading pattern

- Pages are static, so there are no route-level `loading.tsx` files. Data is in the HTML.
- **Media (S-15):** `next/image` with explicit `width` and `height` (or `fill` with a sized parent) so space is reserved. `loading="lazy"` below the first view. `priority` only for the LCP image.
- **Stage (S-04):**

```tsx
"use client";
import dynamic from "next/dynamic";
import StagePoster from "@/components/features/stage-poster";

const HomeStageCanvas = dynamic(
    () => import("@/components/features/home-stage-canvas"),
    { ssr: false, loading: () => <StagePoster /> },
);
```

  The poster equals the narrative's opening frame (QA-087). The path choice (still, video or real-time) runs before the heavy import. The server-rendered text facts never wait for this chunk (BR-12).
- **Sending (IC-05):** `aria-busy` on the form, a status message from constants through the live region (IC-14), submission locked, and no optimistic success.

### 8.11 Empty pattern

The empty states come from [Phase 3 › Empty Routes](phase-3-information-architecture.md#empty-routes) and [Phase 4](phase-4-page-blueprints.md). Empty is decided in data or selectors, never by hiding broken markup.

| Situation | Where decided | Behaviour |
|---|---|---|
| No featured case study | `getFeaturedCaseStudies` | Falls back to the first three by `order` |
| No case studies | `case-study-list.tsx` | `COPY.noCaseStudies` plus links to About and the résumé. The data test fails the build in production |
| Optional link or media absent | Section | Omitted. The status label explains why (Private, In development) |
| Skill group with no evidence | `getSkillsWithEvidence` | Group dropped (BR-03) |

### 8.12 Metadata and structured data pattern

```ts
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { TITLE_PATTERNS } from "@/lib/portfolio/constants";
import type { CaseStudy } from "@/lib/types";

export const caseStudyMetadata = (study?: CaseStudy): Metadata =>
    study
        ? {
              title: TITLE_PATTERNS.caseStudy(study.title),
              description: study.summary,
              alternates: { canonical: `${SITE_CONFIG.url}/work/${study.slug}` },
          }
        : {};
```

JSON-LD builders in `lib/portfolio/structured-data.ts` return plain objects. `components/common/json-ld.tsx` serialises them into a `<script type="application/ld+json">`.

### 8.13 API integration pattern

- **Content:** imported directly from `lib/data/` in Server Components. There is no fetch.
- **Mutation:** the Server Action only. There are no `app/api/` route handlers in v1.
- **The starter's transport** (`lib/api-client.ts`, `lib/api-server.ts`, `lib/contract/`) is preserved and unused. Do not import it from any new code, and do not edit `lib/contract/` (it is generated).

---

## 9. Testing Strategy

The source is [Phase 8 › Testing Strategy](phase-8-implementation-roadmap.md#testing-strategy) and [Phase 7 › Testing Organisation](phase-7-frontend-architecture.md#testing-organisation).

### 9.1 Unit test coverage targets

| Area | Target | Files |
|---|---|---|
| Data schemas over real data | 100 % of `lib/data/*` parsed | `lib/validations/portfolio.test.ts` |
| Selectors | 100 % branches | `lib/portfolio/*.test.ts` |
| Message schema | Every rule and boundary | `lib/validations/message.test.ts` |
| Server Action | Every result path | `lib/actions/send-message.test.ts` |
| Services | Mailer status mapping, rate-limit window | `lib/services/*.test.ts` |
| Stage script | Compiles. Every actor and layer named exists | `lib/home/script.test.ts` |

### 9.2 Integration test priorities

| Priority | Test | Proves |
|---|---|---|
| 1 | `sendMessage` with the mailer mocked: success, 502, 503 (no key), 429, honeypot, fast fill, invalid input | BR-07, QA-079 to QA-083 |
| 2 | Business rules over real data: BR-02 kinds, BR-03 evidence resolves, BR-04 private has no source, BR-06 channel set, BR-09 `https:` shape, BR-11 availability only on `Profile`, unique slugs and orders | QA-003 to QA-009 |
| 3 | Adjacency over a 20-item fixture | QA-108 |
| 4 | Composer state mapping (IC-05) | QA-071 |
| 5 | Copy hook: success, failure, no Clipboard API | QA-106 |
| 6 | Existing suites (proxy, api-client, ESLint rules, stage) still pass | QA-119 |

### 9.3 E2E test scenarios

Playwright, headless only. **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1).**

| Scenario | Flow |
|---|---|
| Recruiter screen: land, read role and availability, take the résumé | F-01, F-04 |
| Evaluator: Home → case study → next → contact with `?type=` | F-02, F-05 |
| Send a message with the provider mocked: success and failure recovery | F-03 |
| JavaScript disabled: facts readable, form posts | QA-085, QA-086 |
| Unknown route and unknown slug: 404 | F-09 |
| Reduced motion: still, no scroll hijack | F-07, QA-022 |

### 9.4 Accessibility testing

- axe runs in component tests now, and in E2E once approved.
- Manual keyboard and screen-reader passes per [§7.2](#72-accessibility-verification-procedure).
- Results are recorded against QA-013 to QA-036.

### 9.5 Running tests on this machine

Every test run is a heavy job:

1. Check for running heavy jobs and headroom first.
2. Run one file at a time while iterating: `pnpm vitest run lib/actions/send-message.test.ts`.
3. Run the full suite once before merge.
4. Never run two heavy jobs in parallel.

---

## 10. Pre-merge Checklist

Run these in order, one at a time, each after the machine-load check. No git hooks run, so this gate is manual (`.claude/CLAUDE.md` › Before commit).

| # | Check | Command / evidence |
|---|---|---|
| 1 | Types | `pnpm type-check` |
| 2 | Lint, custom `starter/*` rules included | `pnpm lint` |
| 3 | Tests | `pnpm test` |
| 4 | Contract unchanged | `pnpm contract:check` |
| 5 | Build | `pnpm build` (CI also runs it) |
| 6 | No file over 150 lines. One component per file. Pages compose only | Lint output |
| 7 | No new dependency without recorded owner approval | `package.json` diff |
| 8 | No hardcoded routes, channels or repeated copy | Review against `lib/constants.ts` and `lib/portfolio/constants.ts` |
| 9 | Starter code (auth, proxy, contract, tools) untouched | Diff review |
| 10 | `.claude/skills/` untouched | Diff review |
| 11 | The changed page's look matches the approved styleframes. Critic graded it after the change | Capture plus critic table |
| 12 | Phase 8 build status updated for every item touched | [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) |
| 13 | Headless browsers closed. No dev server left running | `pgrep` |

---

## 11. Deployment Readiness

From [Phase 8 › Deployment Readiness](phase-8-implementation-roadmap.md#deployment-readiness):

| # | Item | Done when |
|---|---|---|
| 1 | Vercel project linked. Production domain `hckerson.vercel.app` | The preview and production URLs resolve |
| 2 | Environment set: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` | Present in Vercel production and preview |
| 3 | `NEXT_PUBLIC_API_URL` and `JWT_PUBLIC_KEY` as the starter expects | `proxy.ts` passes public routes through with no session cookie. No redirect on P-01 to P-07 (QA-119) |
| 4 | `metadataBase`, canonical URLs, sitemap and robots point at production | QA-096 to QA-098 |
| 5 | Résumé PDF present and current | QA-008 |
| 6 | Live links resolve (`keyhol.me` first) | QA-007 |
| 7 | Test message delivered from production | M-5 re-run |
| 8 | Link previews checked in Slack, LinkedIn, X and WhatsApp | QA-093 |
| 9 | Phase 9 checklist complete, with no item silently skipped | [Phase 9](phase-9-qa-checklist.md) |
| 10 | Phase 8 status: every launched item **Verified**. Deferred items carry a reason and trigger | [Phase 8](phase-8-implementation-roadmap.md#build-status) |

**Rollback:** Vercel instant rollback to the previous production deployment. Content-only fixes ship as data edits through the same gates (F-11).

---

## 12. Reference Map

| Need | Go to |
|---|---|
| Why does this exist, who is it for | [Phase 1](phase-1-product-vision.md) |
| What does the visitor go through | [Phase 2](phase-2-experience-maps.md) |
| Which pages and routes, slugs, labels, SEO | [Phase 3](phase-3-information-architecture.md) |
| What a page must achieve and its states | [Phase 4](phase-4-page-blueprints.md) |
| What a section is responsible for | [Phase 5](phase-5-section-blueprints.md) |
| How an interactive element behaves | [Phase 6](phase-6-interaction-contracts.md) |
| Where code goes | [Phase 7](phase-7-frontend-architecture.md) |
| What to build next, and current status | [Phase 8](phase-8-implementation-roadmap.md) |
| How to prove it works | [Phase 9](phase-9-qa-checklist.md) |
| First-time orientation | [START_HERE](START_HERE.md) |
| Overview for any role | [README](README.md) |
| Everything that exists | [DESIGN-OS-COMPLETE](DESIGN-OS-COMPLETE.md) |
| Deep index and reading paths | [ARTIFACT_INDEX](ARTIFACT_INDEX.md) |
| Environment and project setup | [SETUP-CHECKLIST](SETUP-CHECKLIST.md) |
| How the look is decided | `.claude/skills/pagecraft/SKILL.md`, `.claude/skills/stagecraft/SKILL.md` (read only) |
| Code rules | `.claude/CLAUDE.md`, `docs/UI_LAYERS.md`, `eslint.config.ts` |

**ID legend:** G- goal · PER- persona · JTBD- job · BR- business rule · F- flow · P-/D- page/document · S- section · IC- interaction contract · M- milestone · R- risk · QA- QA item · A- assumption.
