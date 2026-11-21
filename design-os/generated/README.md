# hckerson.com Design OS — README

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Entry point: [START_HERE](START_HERE.md) · Master index: [DESIGN-OS-COMPLETE](DESIGN-OS-COMPLETE.md) · Build prompt: [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md)

---

## What this is (30 seconds)

A complete, interconnected specification for **hckerson.com**, the hiring portfolio of Aderibigbe Emmanuel (Hckerson), a full-stack software engineer in Lagos.

It is a full specification of behaviour. It covers what the product is for, who uses it, every journey, page, section and interactive element, the architecture on the existing Next.js starter, the build plan and the QA gate.

It deliberately **leaves the look to the build**. No colour, type, layout, placement, imagery or motion is decided here. Each page's look is decided with the owner when it is built, under the repo's `pagecraft` skill. The Home scroll narrative's look is decided under `stagecraft`.

---

## Quick start

- **New here?** Read [START_HERE](START_HERE.md), then [Phase 1](phase-1-product-vision.md).
- **Building?** Run [SETUP-CHECKLIST](SETUP-CHECKLIST.md) once, then copy [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md) into a build session.
- **Checking progress?** [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) is the only place status lives.

---

## Files

### Core phases

| # | File | Purpose |
|---|---|---|
| 1 | [phase-1-product-vision.md](phase-1-product-vision.md) | Placeholder resolution, goals G-1 to G-5, personas PER-1 to PER-5, jobs, business rules BR-01 to BR-12, KPIs and North Star, governance, principles, non-goals, assumptions A-1 to A-5 |
| 2 | [phase-2-experience-maps.md](phase-2-experience-maps.md) | 12 flows: 5 primary (screen, evaluate, message, résumé, freelance) and 7 supporting (share, narrative fallback, direct channel, 404, error and offline, content upkeep, message handling) |
| 3 | [phase-3-information-architecture.md](phase-3-information-architecture.md) | Sitemap, navigation hierarchy, permissions, taxonomy, labelling, cross-links, search and filter decisions, SEO, breadcrumbs, empty and fallback routes, expansion |
| 4 | [phase-4-page-blueprints.md](phase-4-page-blueprints.md) | P-01 Home, P-02 Work, P-03 Case study, P-04 About, P-05 Contact, P-06 Not found, P-07 Error, D-01 Résumé; the master prompt's example pages that were excluded, with reasons |
| 5 | [phase-5-section-blueprints.md](phase-5-section-blueprints.md) | S-01 to S-24, one job each, with states and accessibility requirements |
| 6 | [phase-6-interaction-contracts.md](phase-6-interaction-contracts.md) | IC-01 to IC-18, including message submission, copy, media viewer, scroll narrative and disclosure |
| 7 | [phase-7-frontend-architecture.md](phase-7-frontend-architecture.md) | Routes, layouts, providers, data layer, Server Action messaging through Resend, stage integration, component layers, performance, preserved starter code |
| 8 | [phase-8-implementation-roadmap.md](phase-8-implementation-roadmap.md) | Priority order, 8 sprints, milestones M-1 to M-6, dependencies, risks R-1 to R-8, testing, deployment, build status |
| 9 | [phase-9-qa-checklist.md](phase-9-qa-checklist.md) | QA-001 to QA-120 across content integrity, accessibility, behaviour, responsiveness, performance, states, errors, loading, SEO, browsers, scalability and readiness |

### Navigation and implementation files

| File | Purpose |
|---|---|
| [START_HERE.md](START_HERE.md) | Entry point and quick reference |
| [README.md](README.md) | This overview |
| [DESIGN-OS-COMPLETE.md](DESIGN-OS-COMPLETE.md) | Master index: every deliverable, cross-references, scope |
| [ARTIFACT_INDEX.md](ARTIFACT_INDEX.md) | Deep index, reading orders by role, keywords, build-status roll-up |
| [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) | Preparing this repo and machine for the build |
| [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) | All nine phases turned into engineering steps |

---

## How to use it, by role

### Product (the owner)

- Phase 1 is the source of truth. If a goal, rule or non-goal changes, change it there first, then follow the trace forward.
- Approve at two gates: **M-2** (direction) and **M-3** (look). See [Phase 8 › Milestones](phase-8-implementation-roadmap.md#milestones).
- Review `lib/data/` at **M-1**. Every fact must be yours to publish (BR-01, BR-04).

### Designers

- Read Phases 1–5 for what each page and section must achieve. The look is yours to decide, under `pagecraft` (pages) and `stagecraft` (the Home narrative).
- Phase 6 tells you how every interactive element must behave. Your design must honour it, not redefine it.
- Record decisions in `docs/DESIGN_BRIEF.md` and `docs/STAGE_BRIEF.md`, never here.

### Engineers

- Phase 7 decides where everything goes. `.claude/CLAUDE.md` wins wherever the two differ.
- Phase 6 is the behaviour spec for each interactive element.
- Phase 8 says what to build now. Update its status as you go.
- Gates: `pnpm type-check`, `pnpm lint`, `pnpm test`, `pnpm contract:check`, `pnpm build`.

### QA

- Phase 9 is the release gate. An item is passed only with evidence. Unrun items are **Not run**, never passed.
- Content integrity (QA-001 to QA-012) comes first. A wrong fact is worse than a broken layout.

---

## Key statistics

| Measure | Value |
|---|---|
| Phases | 9 |
| Interaction contracts | 18+ |
| Sections | 24 |
| Pages | 7, plus 1 document |
| Flows | 12 |
| Personas | 5 |
| Timeline | 4 weeks (8 half-week sprints) |
| QA items | 120+ |
| New runtime dependencies required | 2 approved 2026-11-21 (`@vercel/analytics`, `@playwright/test` dev), 1 proposed for later (rate-limit store) |

---

## Getting started (5 minutes)

1. **Minute 1:** read [Phase 1 › Business Vision](phase-1-product-vision.md#business-vision) and [Business Rules](phase-1-product-vision.md#business-rules).
2. **Minute 2:** scan [Phase 2 › Flow Inventory](phase-2-experience-maps.md#flow-inventory).
3. **Minute 3:** read [Phase 3 › Sitemap](phase-3-information-architecture.md#sitemap).
4. **Minute 4:** scan [Phase 7 › Folder Structure](phase-7-frontend-architecture.md#folder-structure).
5. **Minute 5:** open [Phase 8 › Sprint Breakdown](phase-8-implementation-roadmap.md#sprint-breakdown) and find the current sprint.

---

## Philosophy

- **No ambiguity.** Every page, section and contract has an ID, and every ID traces back to a goal, flow or rule.
- **No reinvention.** The repo's starter, stage engine, ESLint rules and conventions are reused, never replaced.
- **No invented facts.** Content comes from the owner's records only.
- **No visual prescription.** Behaviour here, look at build time with the owner.
- **Scope preservation.** A feature that isn't built is *Scheduled* or *Deferred*, never deleted.
- **Production-ready.** Every phase hands off to engineering without further questions.

---

## Context

| Item | Value |
|---|---|
| Repo | `hckerson`, branch `development` |
| Stack | Next.js 16 App Router, React 19, TypeScript, Tailwind 4, TanStack Query, Zod 4, the three, gsap and lenis stage engine |
| Hosting | Vercel, `https://hckerson.vercel.app` |
| Sector (design skills) | Chosen by the pagecraft skill from `docs/economy-coverage-map.md` at build time |
| Seed prompt | `design-os/MASTER_PROMPT_COMPLETE.md` |
