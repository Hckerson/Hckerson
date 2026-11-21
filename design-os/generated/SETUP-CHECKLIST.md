# SETUP-CHECKLIST — Preparing the Build

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Entry point: [START_HERE](START_HERE.md) · Architecture: [Phase 7](phase-7-frontend-architecture.md) · Build prompt: [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md)

Run this once before [Sprint 1](phase-8-implementation-roadmap.md#sprint-breakdown). The repo is **already initialised**: it is the owner's Next.js starter, mirrored from `next-setup`. There is no `create-next-app` step. You prepare what exists, you don't scaffold anew.

## Contents

1. [Pre-implementation Prerequisites](#1-pre-implementation-prerequisites)
2. [Machine Rules](#2-machine-rules)
3. [Environment Setup](#3-environment-setup)
4. [Project Initialisation](#4-project-initialisation)
5. [Environment Variables](#5-environment-variables)
6. [Folder Structure](#6-folder-structure)
7. [Dependencies](#7-dependencies)
8. [Testing Setup](#8-testing-setup)
9. [Developer Workflow](#9-developer-workflow)
10. [Content and Assets](#10-content-and-assets)
11. [Verification Checklist](#11-verification-checklist)

---

## 1. Pre-implementation Prerequisites

### Read these phases first

- [ ] [Phase 1 — Product Vision](phase-1-product-vision.md), especially **Business Rules BR-01 to BR-12** and **Non-goals**.
- [ ] [Phase 3 — Information Architecture](phase-3-information-architecture.md): the sitemap, slugs, taxonomy and labels.
- [ ] [Phase 7 — Frontend Architecture](phase-7-frontend-architecture.md): every file's location and the host-repo rules.

### Read these repo files

- [ ] `.claude/CLAUDE.md`. Its rules win over this design OS.
- [ ] `docs/UI_LAYERS.md`: the component layers.
- [ ] `eslint.config.ts`: the custom rules you will be held to.

### Understand these concepts

- [ ] **Personas** PER-1 to PER-5, and that no visitor signs in ([Phase 1](phase-1-product-vision.md#personas)).
- [ ] **Navigation**: one `(site)` route group, with contact and résumé one step from every page ([Phase 3](phase-3-information-architecture.md#navigation-hierarchy)).
- [ ] **Interaction contracts**: behaviour is fixed in [Phase 6](phase-6-interaction-contracts.md). The look is not.
- [ ] **Visual Design Hand-off**: no page is built before its look is approved by the owner (milestones M-2 and M-3 in [Phase 8](phase-8-implementation-roadmap.md#milestones)).
- [ ] **Scope Preservation**: nothing is deleted because it isn't built. The starter's auth, proxy and contract code stays untouched ([Phase 7 › Preserved Starter Code](phase-7-frontend-architecture.md#preserved-starter-code)).

---

## 2. Machine Rules

Several agent sessions share the owner's machine. These rules are not optional.

### Heavy jobs: one at a time

Heavy jobs include `tsc --noEmit` (`pnpm type-check`), `vitest` (`pnpm test`), `next build`, a whole-project `eslint`, `pnpm install` / `add` / `dlx`, Playwright or any headless Chrome, and starting a dev server.

Before starting one:

- [ ] Check for running heavy jobs:

  ```bash
  pgrep -fl 'tsc --noEmit|vitest|jest|next build|eslint|prisma (generate|migrate)|pnpm (install|add|dlx)|playwright|puppeteer|headless|shoot\.mjs|docker.compose (up|build)' | grep -vE 'pgrep|Code Helper|copilot'
  ```

- [ ] Check headroom:

  ```bash
  uptime; memory_pressure | tail -1
  ```

- [ ] If a heavy job is running, the 1-minute load is above 32, or free memory is below 20 %: **wait**, then check again. Never skip a required check because something else is running.
- [ ] Run heavy jobs one after another, never in parallel. Scope them narrowly (one test file rather than the suite) where you can.

### Browsers and servers

- [ ] Browsers run **headless only**: screenshots and page checks go through headless Chrome (CDP scripts, or the pagecraft and stagecraft capture tools). No visible browser windows.
- [ ] **Never start a dev server without asking the owner.** If the server you need is down, say so and wait.
- [ ] The dev port is **4004** (`pnpm dev` runs `next dev -p 4004`).
- [ ] Close every headless browser and stop every server you started once you're done.

---

## 3. Environment Setup

- [ ] **Node.js 20** (CI uses Node 20).
- [ ] **pnpm 10** (CI uses pnpm 10). Check with `pnpm -v`.
- [ ] **Git**, with Git LFS if stage assets exceed 1 MB (CI rejects larger files; see [Phase 7 › Asset Organisation](phase-7-frontend-architecture.md#asset-organisation)).
- [ ] **Editor:** TypeScript from the workspace, and ESLint and Prettier extensions reading the repo configs (`eslint.config.ts`, `.prettierrc`, `.editorconfig`).
- [ ] **Platform:** the owner's Mac is Intel macOS with zsh and BSD userland (`sed -i ''`, no GNU flags).

---

## 4. Project Initialisation

The starter is already in place. These steps confirm it rather than create it.

- [ ] On branch `development` with a clean working tree: `git status`.
- [ ] Dependencies installed (heavy job, so follow §2 first):

  ```bash
  pnpm install --frozen-lockfile
  ```

- [ ] **TypeScript configuration:** `tsconfig.json` exists with the `@/` alias. Don't change it.
- [ ] **Next.js configuration:** `next.config.ts` exists. Sprint 4 adds the redirects from [Phase 7 › Route Structure](phase-7-frontend-architecture.md#route-structure), and nothing else yet.
- [ ] **Do not** run `create-next-app`, re-initialise Tailwind, or replace any config file.

---

## 5. Environment Variables

- [ ] Copy `.env.example` to `.env.local` (never commit `.env.local`).
- [ ] Add these to `.env.example` in Sprint 1 ([Phase 7 › Feature Folders › Messaging](phase-7-frontend-architecture.md#messaging)):

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | From the owner's Resend account | Server-only. Missing → the action returns 503 and never reports success (BR-07) |
| `CONTACT_TO` | `emmanueladeribigbe415@gmail.com` | The recipient (BR-06) |
| `CONTACT_FROM` | The sender address Resend allows | With no verified domain, Resend's test sender delivers to the account owner's own address only. That works because the recipient is the owner (R-3) |

- [ ] Existing variables stay as they are: `NEXT_PUBLIC_API_URL` and `JWT_PUBLIC_KEY` belong to the preserved starter code.
- [ ] Confirm the proxy passes public routes when `JWT_PUBLIC_KEY` is unset (Phase 8 › Deployment Readiness).
- [ ] The same variables go into the Vercel project's environment before deployment.

---

## 6. Folder Structure

Create these when the sprint that first needs them starts. Don't create empty files ahead of time. Paths are from [Phase 7 › Folder Structure](phase-7-frontend-architecture.md#folder-structure).

| Path | Sprint | Purpose |
|---|---|---|
| `lib/data/` | 1 | `profile.ts`, `case-studies.ts`, `roles.ts`, `education.ts`, `skills.ts` |
| `lib/portfolio/` | 1 | Selectors, `constants.ts`, `structured-data.ts` |
| `lib/services/` | 1 | `logger.ts`, then `mailer.ts` and `rate-limit.ts` in Sprint 6 |
| `lib/types/portfolio.ts`, `lib/types/message.ts` | 1, 6 | Re-exported from `lib/types/index.ts` |
| `lib/validations/portfolio.ts`, `message.ts` | 1, 6 | Zod schemas |
| `components/providers/query-provider.tsx` | 1 | Mounted in the root layout |
| `public/` | 1 | Résumé PDF, `images/`, `work/<slug>/`, `stage/home/` |
| `components/ui/`, `brand/`, `common/`, `patterns/`, `layout/` | 4 | Per [Phase 7 › Component Organisation](phase-7-frontend-architecture.md#component-organisation) |
| `app/(site)/` and recovery files | 4 | Layout, error, not-found |
| `components/features/`, `components/sections/` | 5–7 | One file per section (S-03 to S-24) |
| `lib/home/script.ts` | 7 | Stage script, content decided under stagecraft |

Rules while creating files:

- [ ] kebab-case filename matching the export, one component per file.
- [ ] Files under 150 lines.
- [ ] `@/` imports only.
- [ ] No comments, no `console.*`.

---

## 7. Dependencies

Under the Library Selection Policy, **no new dependencies are needed to build v1.** Everything required is already in `package.json`: TanStack Query, Zod, motion, gsap, lenis, three, `@react-three/fiber`, drei, date-fns, nanoid, and vitest with fast-check.

| Proposed | For | Status |
|---|---|---|
| `@vercel/analytics` | Cookie-free KPIs (Phase 1) | **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1)** |
| Upstash Redis or Vercel KV client | Global rate-limit store (R-4) | **Needs owner approval**. Deferred |
| `@playwright/test` | Headless E2E (Phase 8 › Testing Strategy) | **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1)** |
| An icon set | One consistent set, chosen at build | **Recommend, then confirm** |

- [ ] Never hand-edit `package.json`. Propose the package and the reason, wait for approval, then run `pnpm add` (a heavy job, so follow §2).
- [ ] The mailer uses Resend's REST API through `fetch`, with no SDK.

---

## 8. Testing Setup

- [ ] **vitest** is configured (`vitest.config.mts`). New tests are colocated as `<file>.test.ts`.
- [ ] The first tests, in Sprint 1, are the data schemas over `lib/data/*` (BR-02, BR-03, BR-04, BR-06, BR-09 shape, BR-11) and the selectors ([Phase 7 › Testing Organisation](phase-7-frontend-architecture.md#testing-organisation)).
- [ ] Run one file at a time while iterating:

  ```bash
  pnpm vitest run lib/portfolio/get-case-study.test.ts
  ```

- [ ] **E2E:** only after Playwright is approved, and headless only.
- [ ] **Accessibility:** axe runs inside the component or E2E tests, plus the manual screen-reader pass from [Phase 9](phase-9-qa-checklist.md).

---

## 9. Developer Workflow

- [ ] **No git hooks exist.** `.claude/CLAUDE.md` says the gates are run by hand before each commit, one at a time, following §2:

  ```bash
  pnpm type-check
  pnpm lint
  pnpm test
  pnpm contract:check
  pnpm build
  ```

- [ ] **Formatting:** `pnpm format` (Prettier with the Tailwind plugin).
- [ ] **CI** (`.github/workflows/ci.yml`) runs a large-file check, `pnpm lint` and `pnpm build`. Type-check, test and contract-check are your responsibility locally.
- [ ] **Git:** the owner handles commits and pushes. Don't commit or push unless asked.
- [ ] **Status:** update [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) as items move.

---

## 10. Content and Assets

Facts come from the owner's records only (BR-01).

- [ ] **Résumé data:** the owner's résumé data file and master résumé, in their documents folder. Copy the PDF to `public/aderibigbe-emmanuel-resume.pdf` and record its date in `profile.ts` (BR-10).
- [ ] **Retracted claims** (WebAuthn passkeys, "promoted from intern") are never used (QA-002).
- [ ] **Headshot:** the owner-provided image, converted to `public/images/headshot.webp`.
- [ ] **Case studies:** facts from the Keyhold repos (docs, ADRs), the Client Education Platform described without the client's name or source (BR-04), and the starter-system repos.
- [ ] **Links:** Keyhold goes to `keyhol.me`. Every live link is checked before release (BR-09).
- [ ] The owner reviews `lib/data/` at **M-1**.

---

## 11. Verification Checklist

Ready to start Sprint 1 when every box is ticked:

- [ ] Phases 1, 3 and 7 read. `.claude/CLAUDE.md` read.
- [ ] Machine rules understood: heavy jobs one at a time, headless only, no dev server without asking, port 4004.
- [ ] Node 20 and pnpm 10 available.
- [ ] `pnpm install --frozen-lockfile` completed cleanly.
- [ ] `.env.local` created. `RESEND_API_KEY` requested from the owner.
- [ ] Baseline gates pass on the untouched starter, run one at a time: `pnpm type-check`, `pnpm lint`, `pnpm test`, `pnpm contract:check`.
- [ ] No new dependency installed without approval.
- [ ] Résumé PDF and headshot located.
- [ ] [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) open and ready to copy into the build session.
