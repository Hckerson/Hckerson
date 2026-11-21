# START HERE — hckerson.com Design OS

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Next: [README](README.md) · Index: [DESIGN-OS-COMPLETE](DESIGN-OS-COMPLETE.md) · Deep index: [ARTIFACT_INDEX](ARTIFACT_INDEX.md)

Welcome. This folder holds the complete design operating system for **hckerson.com**. It is the personal engineering portfolio of Aderibigbe Emmanuel (Hckerson), and its job is to get its owner hired. It defines what the product does: who it serves, the journeys, the pages, the behaviour, the architecture and the QA.

It does **not** decide how anything looks. The look of each page is decided when that page is built, with the owner, under the repo's `pagecraft` and `stagecraft` skills.

---

## What's inside

All nine phases are complete:

- [x] **Phase 1 — Product Vision.** Why the site exists, who it serves, the rules it obeys.
- [x] **Phase 2 — Experience Maps.** The 12 journeys (F-01 to F-12), before any page.
- [x] **Phase 3 — Information Architecture.** The pages, the routes, and how they connect.
- [x] **Phase 4 — Page Blueprints.** What each of the 7 pages and 1 document must achieve, in every state.
- [x] **Phase 5 — Section Blueprints.** The 24 sections, each doing one job.
- [x] **Phase 6 — Interaction Contracts.** How each of the 18 interactive elements behaves.
- [x] **Phase 7 — Frontend Architecture.** Files, routes, providers and data, on the existing starter.
- [x] **Phase 8 — Implementation Roadmap.** 8 half-week sprints, milestones, risks, build status.
- [x] **Phase 9 — QA Checklist.** The 120 checks a release must pass.

Plus six navigation documents, including this one.

---

## File listing

| File | Purpose |
|---|---|
| [phase-1-product-vision.md](phase-1-product-vision.md) | Goals (G-), personas (PER-), jobs (JTBD-), business rules (BR-), KPIs, non-goals, assumptions |
| [phase-2-experience-maps.md](phase-2-experience-maps.md) | Primary flows F-01 to F-05, supporting flows F-06 to F-12 |
| [phase-3-information-architecture.md](phase-3-information-architecture.md) | Sitemap (P-01 to P-07, D-01), taxonomy, labels, SEO, fallback routes |
| [phase-4-page-blueprints.md](phase-4-page-blueprints.md) | Functional blueprint per page, plus the excluded example pages |
| [phase-5-section-blueprints.md](phase-5-section-blueprints.md) | S-01 to S-24: purpose, data, interaction model, states |
| [phase-6-interaction-contracts.md](phase-6-interaction-contracts.md) | IC-01 to IC-18: states, keyboard, ARIA, validation, do and don't |
| [phase-7-frontend-architecture.md](phase-7-frontend-architecture.md) | Folder and route structure, data layer, messaging, stage, performance |
| [phase-8-implementation-roadmap.md](phase-8-implementation-roadmap.md) | Sprints, milestones M-1 to M-6, risks R-1 to R-8, build status |
| [phase-9-qa-checklist.md](phase-9-qa-checklist.md) | QA-001 to QA-120 |
| [README.md](README.md) | Five-minute overview |
| [DESIGN-OS-COMPLETE.md](DESIGN-OS-COMPLETE.md) | Master index and summary |
| [ARTIFACT_INDEX.md](ARTIFACT_INDEX.md) | Deep descriptions, reading paths, build-status roll-up |
| [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) | Step-by-step setup in this repo |
| [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) | The self-contained prompt for building the site |

---

## Quick workflow: Read → Copy → Execute

### 1. Read

At least these three, in order:

1. [Phase 1 — Product Vision](phase-1-product-vision.md): the rules BR-01 to BR-12 bind everything.
2. [Phase 3 — Information Architecture](phase-3-information-architecture.md): what exists and where.
3. [Phase 7 — Frontend Architecture](phase-7-frontend-architecture.md): where the code goes.

### 2. Copy

Open [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) and copy it into a fresh build session in this repo.

### 3. Execute

Work through it sprint by sprint, as laid out in [Phase 8](phase-8-implementation-roadmap.md). Two gates stop the build for the owner:

- **M-2, direction approved.** After the pagecraft and stagecraft briefs.
- **M-3, look approved.** After the styleframes. No page is built before this.

---

## Next session

1. Run through [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) once.
2. Copy [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) into the session.
3. Start at Sprint 1 (content and data foundation) unless [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) says otherwise.
4. Update build status in [Phase 8](phase-8-implementation-roadmap.md) as items move: Specified, Scheduled, In progress, Built, Verified.

---

## Quick reference

| I want to… | Go to… |
|---|---|
| Understand why the site exists | [Phase 1 › Business Vision](phase-1-product-vision.md#business-vision) |
| Know which facts may be shown | [Phase 1 › Business Rules](phase-1-product-vision.md#business-rules) |
| See who visits and what they need | [Phase 1 › Personas](phase-1-product-vision.md#personas) |
| Follow a visitor's journey | [Phase 2 — Experience Maps](phase-2-experience-maps.md) |
| Find a route or a slug | [Phase 3 › Sitemap](phase-3-information-architecture.md#sitemap) |
| Know what a page must do in each state | [Phase 4 — Page Blueprints](phase-4-page-blueprints.md) |
| Know one section's job | [Phase 5 — Section Blueprints](phase-5-section-blueprints.md) |
| Build an interactive element correctly | [Phase 6 — Interaction Contracts](phase-6-interaction-contracts.md) |
| Know where a file goes | [Phase 7 › Folder Structure](phase-7-frontend-architecture.md#folder-structure) |
| See how a message is delivered | [Phase 7 › Feature Folders](phase-7-frontend-architecture.md#feature-folders) |
| Know what to build this sprint | [Phase 8 › Sprint Breakdown](phase-8-implementation-roadmap.md#sprint-breakdown) |
| Check what is built | [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) |
| Verify a release | [Phase 9 — QA Checklist](phase-9-qa-checklist.md) |
| Set up my machine | [SETUP-CHECKLIST](SETUP-CHECKLIST.md) |
| Start building | [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md) |

---

## Key numbers

| Item | Count |
|---|---|
| Phases | 9 |
| Personas | 5 |
| Flows | 12 |
| Pages | 7, plus 1 document (the résumé) |
| Sections | 24 |
| Interaction contracts | 18 |
| Sprints | 8 half-week sprints (4 weeks) |
| QA items | 120 |

---

## Three rules to remember

1. **Facts come only from the owner's records** (BR-01). Nothing is invented. Retracted claims never appear.
2. **Nothing is removed because it isn't built.** Status lives in [Phase 8](phase-8-implementation-roadmap.md). Removal needs the owner's explicit instruction.
3. **This OS never decides the look.** Each page gets a visual concept, owner approval, then the build.

## Published links

None yet. The design OS lives in the repo at `design-os/generated/`.
