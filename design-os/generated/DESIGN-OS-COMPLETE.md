# DESIGN-OS-COMPLETE — Master Index

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Entry point: [START_HERE](START_HERE.md) · Overview: [README](README.md) · Deep index: [ARTIFACT_INDEX](ARTIFACT_INDEX.md)

This is the single source of truth for **what exists** in this design OS. Status of what is built lives only in [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status).

## Contents

1. [Executive Summary](#executive-summary)
2. [Deliverables: Core Phases](#deliverables-core-phases)
3. [Deliverables: Ancillary Documents](#deliverables-ancillary-documents)
4. [Deliverable Statistics](#deliverable-statistics)
5. [ID Scheme](#id-scheme)
6. [How to Use This Document](#how-to-use-this-document)
7. [Cross-references Between Phases](#cross-references-between-phases)
8. [Traceability Matrix](#traceability-matrix)
9. [Included vs Not Included](#included-vs-not-included)
10. [Decisions Recorded Outside This OS](#decisions-recorded-outside-this-os)
11. [Version Information](#version-information)

---

## Executive Summary

You have a complete, 15-file design operating system for **hckerson.com**, the hiring portfolio of Aderibigbe Emmanuel (Hckerson).

**What it does.** It turns a shared link into a hiring conversation. Recruiters pass their screen in under a minute. Engineering leads verify depth through real case studies (Keyhold, a Client Education Platform, a cross-language starter system). Anyone convinced can send a delivered message or take the résumé in one step.

**What it defines.** It defines purpose, personas, rules, journeys, structure, page and section behaviour, interaction contracts, code organisation on the existing starter, the build plan and the QA gate.

**What it leaves open, on purpose.** It leaves the look. Each page's visual concept is made at build time with the owner, under the repo's `pagecraft` (pages) and `stagecraft` (Home scroll narrative) skills.

**Where the build starts.** Sprint 1, the content and data foundation ([Phase 8](phase-8-implementation-roadmap.md#sprint-breakdown)). As of the version date, nothing is built. Every page, section, contract and flow is **Scheduled**.

---

## Deliverables: Core Phases

| # | File | Summary |
|---|---|---|
| 1 | [Product Vision](phase-1-product-vision.md) | Why the product exists and the rules it obeys. It resolves every master-prompt placeholder for a hiring portfolio, sets the North Star (qualified hiring messages per month), and fixes the 12 business rules that govern content and behaviour. |
| 2 | [Experience Maps](phase-2-experience-maps.md) | 12 journeys mapped before any page: intent, trigger, failure and recovery paths, and completion criteria. It records that no role dashboards exist, because no visitor signs in. |
| 3 | [Information Architecture](phase-3-information-architecture.md) | 7 pages and 1 document in one `(site)` route group, the content taxonomy, the labelling vocabulary, cross-link rules, SEO and structured data, and fallback and redirect routes. Search and filters are deferred, with triggers. |
| 4 | [Page Blueprints](phase-4-page-blueprints.md) | A functional blueprint for every page: objectives, tasks, data, device needs, and loading, empty, error and success states. It also lists the excluded master-prompt example pages, with reasons. |
| 5 | [Section Blueprints](phase-5-section-blueprints.md) | 24 sections, each with one job, its data requirements, interaction model, accessibility and states. Behaviour only. |
| 6 | [Interaction Contracts](phase-6-interaction-contracts.md) | 18 contracts: states, keyboard, ARIA, validation, loading and error behaviour, content rules, do and don't. These include the message-submission lifecycle and the scroll-narrative fallback chain. |
| 7 | [Frontend Architecture](phase-7-frontend-architecture.md) | The code map on the existing starter: routes, layouts, providers, data and schemas, Server Action messaging through Resend's REST API (no new dependency), stage integration, component layers, performance budgets and preserved starter code. |
| 8 | [Implementation Roadmap](phase-8-implementation-roadmap.md) | Priority order, 8 half-week sprints, milestones M-1 to M-6 (including the two owner gates), risks R-1 to R-8, testing, deployment readiness, and the build-status ledger. |
| 9 | [QA Checklist](phase-9-qa-checklist.md) | 120 functional checks in 12 groups. Content integrity comes first. An item passes only with evidence. |

---

## Deliverables: Ancillary Documents

| File | Summary |
|---|---|
| [START_HERE.md](START_HERE.md) | Entry point: the phase checklist, the Read → Copy → Execute workflow, and a quick-reference table. |
| [README.md](README.md) | Five-minute overview: file listing, how each role uses the OS, statistics, philosophy. |
| [DESIGN-OS-COMPLETE.md](DESIGN-OS-COMPLETE.md) | This master index. |
| [ARTIFACT_INDEX.md](ARTIFACT_INDEX.md) | Deep descriptions per phase, who needs it and when, reading paths per role, search keywords, build-status roll-up. |
| [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) | Preparing this repo for the build: prerequisites, environment, folders, dependency policy, gates, machine rules. |
| [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) | The self-contained build prompt. It combines all nine phases into engineering actions, sprint by sprint, with the Visual Design Hand-off. |

---

## Deliverable Statistics

| Measure | Value | Source |
|---|---|---|
| Files | 15 | This index |
| Phases | 9 | Phases 1–9 |
| Goals | 5 (G-1 to G-5) | [Phase 1](phase-1-product-vision.md#business-goals) |
| Personas | 5 (PER-1 to PER-5) | [Phase 1](phase-1-product-vision.md#personas) |
| Jobs to be done | 8 (JTBD-1 to JTBD-8) | [Phase 1](phase-1-product-vision.md#jobs-to-be-done) |
| Business rules | 12 (BR-01 to BR-12) | [Phase 1](phase-1-product-vision.md#business-rules) |
| Assumptions | 5 (A-1 to A-5) | [Phase 1](phase-1-product-vision.md#assumptions) |
| Flows | 12 (F-01 to F-12) | [Phase 2](phase-2-experience-maps.md#flow-inventory) |
| Pages | 7 (P-01 to P-07), plus 1 document (D-01) | [Phase 3](phase-3-information-architecture.md#sitemap) |
| Case studies at launch | 3 | [Phase 3](phase-3-information-architecture.md#sitemap) |
| Sections | 24 (S-01 to S-24) | [Phase 5](phase-5-section-blueprints.md) |
| Interaction contracts | 18 (IC-01 to IC-18) | [Phase 6](phase-6-interaction-contracts.md) |
| Sprints | 8 half-week sprints (4 weeks) | [Phase 8](phase-8-implementation-roadmap.md#sprint-breakdown) |
| Milestones | 6 (M-1 to M-6) | [Phase 8](phase-8-implementation-roadmap.md#milestones) |
| Risks | 8 (R-1 to R-8) | [Phase 8](phase-8-implementation-roadmap.md#risk-assessment) |
| QA items | 120 (QA-001 to QA-120) | [Phase 9](phase-9-qa-checklist.md) |
| New runtime dependencies required | 0 | [Phase 7](phase-7-frontend-architecture.md#shared-libraries) |
| Proposed dependencies awaiting approval | 3 (analytics, rate-limit store, E2E runner) | [Phase 7](phase-7-frontend-architecture.md#shared-libraries) |

---

## ID Scheme

| Prefix | Meaning | Defined in |
|---|---|---|
| `G-` | Business goal | Phase 1 |
| `PER-` | Persona | Phase 1 |
| `JTBD-` | Job to be done | Phase 1 |
| `BR-` | Business rule | Phase 1 |
| `PR-` | Product principle (numbered list) | Phase 1 |
| `A-` | Assumption | Phase 1 |
| `F-` | Flow | Phase 2 |
| `P-` / `D-` | Page / document | Phase 3 |
| `S-` | Section | Phase 5 |
| `IC-` | Interaction contract | Phase 6 |
| `M-` | Milestone | Phase 8 |
| `R-` | Risk | Phase 8 |
| `QA-` | QA item | Phase 9 |

IDs are permanent. A renamed or moved item keeps its ID and gets a note recording the change (Scope Preservation).

---

## How to Use This Document

- **As an index:** find the file for a question, then follow the link.
- **As a completeness check:** every deliverable the master prompt requires is listed, and every one exists in this folder.
- **As a scope guard:** [Included vs Not Included](#included-vs-not-included) records what was decided out, so an absence is never mistaken for an omission.
- **For progress:** go to [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status) and [ARTIFACT_INDEX › Build Status Roll-up](ARTIFACT_INDEX.md#build-status-roll-up). Never record status here.

---

## Cross-references Between Phases

| From | Feeds | How |
|---|---|---|
| Phase 1 | All | Goals, personas, rules and principles are cited by ID in every later phase |
| Phase 2 | 3, 4, 5, 6, 8, 9 | Flows decide which pages exist and which states each must handle |
| Phase 3 | 4, 5, 7, 9 | The sitemap fixes page IDs and routes. The taxonomy fixes data attributes. SEO feeds metadata |
| Phase 4 | 5, 7, 8 | Each page lists its sections. Implementation notes feed the route files |
| Phase 5 | 6, 7, 8 | Each section names the contracts it uses. Phase 7 maps each section to a file |
| Phase 6 | 7, 8, 9 | Contracts define states and ARIA that tests and QA verify |
| Phase 7 | 8, SETUP-CHECKLIST, IMPLEMENTATION_PROMPT | The code map is turned into sprint tasks and setup steps |
| Phase 8 | IMPLEMENTATION_PROMPT, ARTIFACT_INDEX | Sprint order and status |
| Phase 9 | IMPLEMENTATION_PROMPT | The pre-launch gate |

---

## Traceability Matrix

| Page | Flows | Sections | Contracts | Key rules | Sprint |
|---|---|---|---|---|---|
| Every page | F-04, F-08 | S-01, S-02 | IC-01–IC-04, IC-08, IC-09 | BR-06, Principle 2 | 4 |
| P-01 Home | F-01, F-07 | S-03–S-07 | IC-10, IC-12, IC-13, IC-17 | BR-11, BR-12 | 7 |
| P-02 Work | F-02 | S-08, S-09 | IC-10 | BR-02 | 5 |
| P-03 Case study | F-02, F-05, F-06 | S-10–S-16 | IC-09, IC-11, IC-16, IC-18 | BR-02, BR-04, BR-09 | 5 |
| P-04 About | F-01, F-04 | S-17–S-20 | IC-10 | BR-01, BR-03, BR-05 | 6 |
| P-05 Contact | F-03, F-05, F-08, F-12 | S-21, S-22 | IC-05–IC-09, IC-14 | BR-06, BR-07, BR-08 | 6 |
| P-06 Not found | F-09 | S-23 | IC-10 | — | 4 |
| P-07 Error | F-10 | S-24 | IC-15 | BR-07 | 4 |
| D-01 Résumé | F-04 | — | IC-04 | BR-10 | 1 |
| (owner) | F-11, F-12 | — | — | BR-01, G-5 | 1, 6 |

---

## Included vs Not Included

### Included

- Every public page, the résumé document, recovery pages, metadata, link previews, sitemap, robots and redirects.
- A delivered contact message with honest status, bot filtering and rate limiting.
- The Home scroll narrative's behaviour and fallback chain. Its look is decided under `stagecraft`.
- The data layer and schemas that enforce the business rules in tests.
- Build plan, risks and QA gate.

### Not included, by decision ([Phase 1 › Non-goals](phase-1-product-vision.md#non-goals))

| Item | Reason | Revisit |
|---|---|---|
| Visitor accounts, admin UI, CMS | Owner edits through the repo (F-11) | — |
| Stored inbox | Messages go to email (BR-08) | Volume demands it |
| Pricing | Non-goal | Owner decides |
| Site search, work filters | Content size ([Phase 3](phase-3-information-architecture.md#search-hierarchy)) | More than 12 / more than 8 case studies |
| Writing / notes | Not in v1 | Owner publishes writing |
| Localisation | Not in v1 | Copy constants are ready |

### Not included, by design rule

- Any visual decision: colour, type, spacing, layout, placement, imagery, motion design. These are decided per page at build time with the owner (No Visual Prescription).
- Screen-content inventories and component shells.

---

## Decisions Recorded Outside This OS

| Decision | Recorded in | When |
|---|---|---|
| Visual direction, tokens, register, sector | `docs/DESIGN_BRIEF.md` (pagecraft) | Sprint 2 |
| Scroll narrative concept, script, asset manifest | `docs/STAGE_BRIEF.md` (stagecraft) | Sprint 2 |
| Styleframe approvals and critic tables | The briefs' logs | Sprint 3 |
| Content facts | `lib/data/*.ts` | Sprint 1 |
| Engineering conventions | `.claude/CLAUDE.md` (wins over this OS) | Existing |

---

## Version Information

| Field | Value |
|---|---|
| Version | 1.0 |
| Date | 2026-11-21 |
| Generated from | `design-os/MASTER_PROMPT_COMPLETE.md` |
| Output directory | `design-os/generated/` |
| Generation mode | First generation (the directory was empty; there was nothing to merge) |
| Repo / branch | `hckerson` / `development` |
