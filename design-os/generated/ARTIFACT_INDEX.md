# ARTIFACT_INDEX — Detailed Index

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Entry point: [START_HERE](START_HERE.md) · Overview: [README](README.md) · Master index: [DESIGN-OS-COMPLETE](DESIGN-OS-COMPLETE.md)

Every artifact in this design OS, with what it is, who needs it, when to open it, what it contains and how it connects to the rest. The build-status roll-up at the end is a **view** over [Phase 8](phase-8-implementation-roadmap.md#build-status). Phase 8 remains the only place status is recorded.

## Contents

1. [Phase 1 — Product Vision](#phase-1--product-vision)
2. [Phase 2 — Experience Maps](#phase-2--experience-maps)
3. [Phase 3 — Information Architecture](#phase-3--information-architecture)
4. [Phase 4 — Page Blueprints](#phase-4--page-blueprints)
5. [Phase 5 — Section Blueprints](#phase-5--section-blueprints)
6. [Phase 6 — Interaction Contracts](#phase-6--interaction-contracts)
7. [Phase 7 — Frontend Architecture](#phase-7--frontend-architecture)
8. [Phase 8 — Implementation Roadmap](#phase-8--implementation-roadmap)
9. [Phase 9 — QA Checklist](#phase-9--qa-checklist)
10. [Implementation Files (Phases 7–9) in Detail](#implementation-files-phases-79-in-detail)
11. [Ancillary Documents](#ancillary-documents)
12. [Reading Orders by Role](#reading-orders-by-role)
13. [Search Keywords](#search-keywords)
14. [Build Status Roll-up](#build-status-roll-up)

---

## Phase 1 — Product Vision

**File:** [phase-1-product-vision.md](phase-1-product-vision.md)

**Description.** The founding document. It resolves every placeholder in the master prompt for a personal hiring portfolio: the domain, the reference products used only as flow benchmarks, the core entity "case study", and the transaction "sending a hiring message". It sets five goals, five personas, eight jobs to be done and twelve business rules that decide which facts may appear and how the product must behave. Every later phase cites its IDs.

| Field | Detail |
|---|---|
| Who needs it | Owner, everyone building or reviewing |
| When to reference | Before any decision. When a fact is in doubt. When scope is questioned |
| Key sections | Placeholder Resolution, Business Goals, Personas, Jobs To Be Done, Business Rules, KPIs and North Star, Product Principles, Non-goals, Assumptions |
| Flows to | Phase 2 (personas and jobs become flows), Phase 3 (taxonomy from rules), Phase 9 (content integrity from BR-) |

## Phase 2 — Experience Maps

**File:** [phase-2-experience-maps.md](phase-2-experience-maps.md)

**Description.** Twelve journeys mapped before any page exists. Five primary flows cover the hiring path: screen, evaluate, message, take the résumé, freelance enquiry. Seven supporting flows cover sharing, the scroll-narrative fallback chain, direct channels, recovery from 404 and errors, and the owner's content and message handling. Each flow states its failure and recovery paths, so states in later phases are traceable to a real situation.

| Field | Detail |
|---|---|
| Who needs it | Designers, engineers building states, QA |
| When to reference | Designing a state. Writing an error message. Deciding whether a path is needed |
| Key sections | Flow Inventory, Primary Flows, Role Dashboards (none, with reason), Supporting Flows |
| Flows to | Phase 3 (pages per flow), Phase 4 (states), Phase 6 (contract lifecycles), Phase 9 (state coverage) |

## Phase 3 — Information Architecture

**File:** [phase-3-information-architecture.md](phase-3-information-architecture.md)

**Description.** Structure and reachability. Seven pages and one document sit in a single public route group, and three case-study slugs exist at launch. It fixes the content taxonomy (profile, case study, role, education, skill, capability, message), the labelling vocabulary, cross-linking rules, SEO titles and structured data, breadcrumbs, empty routes, fallback routes and legacy redirects. Search and filtering are deferred with numeric triggers.

| Field | Detail |
|---|---|
| Who needs it | Engineers (routes, data shape), content editor (owner), QA (SEO) |
| When to reference | Adding a route or slug. Naming anything. Writing metadata |
| Key sections | Sitemap, Navigation Hierarchy, Content Taxonomy, Labelling Conventions, Cross-linking, SEO Hierarchy, Empty Routes, Fallback Routes, Future Expansion |
| Flows to | Phase 4 (page IDs), Phase 7 (route files, data types), Phase 9 (SEO and fallback checks) |

## Phase 4 — Page Blueprints

**File:** [phase-4-page-blueprints.md](phase-4-page-blueprints.md)

**Description.** A functional blueprint for every page: purpose, business and user objectives, tasks in the visitor's own words, required data, permissions, device needs, and every state (loading, empty, error, success). It ends with the master prompt's example pages that do not apply to a portfolio, each with its reason, so the absence is a recorded decision.

| Field | Detail |
|---|---|
| Who needs it | Designers starting a page concept. Engineers composing `page.tsx` |
| When to reference | Before a page's styleframe. Before building a page. In QA of states |
| Key sections | Page Inventory, P-01 to P-07, D-01, Excluded Example Pages |
| Flows to | Phase 5 (sections per page), Phase 7 (route implementation notes), Phase 8 (sprint per page) |

## Phase 5 — Section Blueprints

**File:** [phase-5-section-blueprints.md](phase-5-section-blueprints.md)

**Description.** Each page broken into 24 sections by the job each does, from site identity and the sitewide conversion path to the message composer and the recovery sections. Each section has its responsibilities, data requirements, interaction model, device needs, accessibility requirements, states, reuse potential and technical notes. It describes behaviour only.

| Field | Detail |
|---|---|
| Who needs it | Engineers building `components/sections/`. Designers planning a page's composition |
| When to reference | Building or reviewing a section. Checking which contracts a section uses |
| Key sections | Section Inventory, Sitewide Sections, sections per page (P-01 to P-07) |
| Flows to | Phase 6 (contracts used), Phase 7 (one file per section), Phase 8 (status per section) |

## Phase 6 — Interaction Contracts

**File:** [phase-6-interaction-contracts.md](phase-6-interaction-contracts.md)

**Description.** The behaviour of all 18 interactive elements: navigation, skip link, compact navigation disclosure, résumé action, message submission lifecycle, fields, opportunity type, copy, external and internal links, case-study pager, scroll-narrative scrub and skip, status announcements, retry, media viewer, anchor navigation and detail disclosure. Shared rules cover focus, target size, motion, accessible names, no-JS behaviour and analytics events.

| Field | Detail |
|---|---|
| Who needs it | Engineers building primitives and client islands. QA (accessibility) |
| When to reference | Building or testing any interactive element |
| Key sections | Contract Inventory, Shared Rules, Navigation, Conversion, Narrative, Feedback and Recovery, Content |
| Flows to | Phase 7 (primitives and hooks per contract), Phase 9 (accessibility and state checks) |

## Phase 7 — Frontend Architecture

**File:** [phase-7-frontend-architecture.md](phase-7-frontend-architecture.md)

**Description.** The code map on the existing starter. It covers the host repo's binding rules, the full folder and route structure, layouts and providers, the portfolio data layer with schemas that enforce business rules in tests, the messaging pipeline (Server Action → schema → bot filter → rate limit → Resend REST), the Home stage integration, the component file plan per UI layer, code splitting, performance budgets, testing organisation and preserved starter code.

| Field | Detail |
|---|---|
| Who needs it | Engineers, always |
| When to reference | Creating any file. Choosing where state lives. Proposing a dependency |
| Key sections | Ground Rules, Folder Structure, Route Structure, Feature Folders, Component Organisation, Shared Libraries, Code Splitting, Performance Strategy, Preserved Starter Code |
| Flows to | Phase 8 (sprint tasks), [SETUP-CHECKLIST](SETUP-CHECKLIST.md), [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md) |

## Phase 8 — Implementation Roadmap

**File:** [phase-8-implementation-roadmap.md](phase-8-implementation-roadmap.md)

**Description.** The build plan: a priority order with reasons, eight half-week sprints with exit criteria, six milestones (two of them owner approval gates), dependencies, eight risks with mitigations, debt prevention, testing strategy and deployment readiness. It holds the build-status ledger for every page, section, contract and flow, plus the deferred items with revisit triggers.

| Field | Detail |
|---|---|
| Who needs it | Owner (gates), engineers (what's next), anyone asking "what's left" |
| When to reference | Start and end of every sprint. Whenever status changes |
| Key sections | Priority Order, Sprint Breakdown, Milestones, Dependencies, Risk Assessment, Testing Strategy, Deployment Readiness, Build Status |
| Flows to | [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md), this index's roll-up |

## Phase 9 — QA Checklist

**File:** [phase-9-qa-checklist.md](phase-9-qa-checklist.md)

**Description.** 120 functional checks in twelve groups. Content integrity comes first, because a wrong fact is worse than a broken layout. The other groups cover accessibility to WCAG 2.2 AA, behavioural consistency, responsiveness, performance budgets, state coverage, error handling, loading behaviour, SEO, cross-browser, scalability and repo readiness. An item passes only with evidence.

| Field | Detail |
|---|---|
| Who needs it | QA, engineers before merge, owner before launch |
| When to reference | Before marking anything Verified. Before deployment |
| Key sections | Content Integrity, Accessibility and WCAG 2.2 AA, Performance, State Coverage, Error Handling, SEO Readiness, Frontend Readiness |
| Flows to | Phase 8 status (Built → Verified) |

---

## Implementation Files (Phases 7–9) in Detail

| Need | Phase 7 gives | Phase 8 schedules | Phase 9 verifies |
|---|---|---|---|
| Content as data | `lib/data/*`, `lib/validations/portfolio.ts`, selectors | Sprint 1 (M-1) | QA-001–012, QA-107–110 |
| Look decided with owner | Brief locations, layer file plan | Sprints 2–3 (M-2, M-3) | Critic grading (outside this OS) |
| Shared layers and recovery | `components/ui`, `brand`, `common`, `layout`; `not-found`, `error` | Sprint 4 | QA-013–036, QA-075–078 |
| Evidence pages | `(site)/work`, `work/[slug]`, `about`; metadata, previews | Sprints 5–6 | QA-090–099 |
| Conversion | `send-message.ts`, `mailer.ts`, `rate-limit.ts`, `use-send-message.ts` | Sprint 6 (M-5) | QA-071–073, QA-079–083, QA-086 |
| Scroll narrative | `lib/home/script.ts`, `home-stage.tsx`, `public/stage/home/` | Sprint 7 | QA-021–023, QA-047, QA-056–060, QA-074, QA-104 |
| Release | Budgets, testing organisation | Sprint 8 (M-6) | QA-053–064, QA-100–106, QA-111–120 |

---

## Ancillary Documents

| File | Description | Who | When |
|---|---|---|---|
| [START_HERE.md](START_HERE.md) | Entry point, phase checklist, Read → Copy → Execute, quick reference | Anyone new | First visit, start of each session |
| [README.md](README.md) | Five-minute overview, roles, statistics, philosophy | Anyone | Orientation |
| [DESIGN-OS-COMPLETE.md](DESIGN-OS-COMPLETE.md) | Master index, ID scheme, traceability matrix, scope | Owner, leads | Completeness and scope checks |
| [ARTIFACT_INDEX.md](ARTIFACT_INDEX.md) | This file | Anyone looking for a specific artifact | Finding where something lives |
| [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md) | Repo and machine preparation | Engineers | Once before Sprint 1 |
| [IMPLEMENTATION_PROMPT.md](IMPLEMENTATION_PROMPT.md) | Self-contained build prompt | Build session | Every build session |

---

## Reading Orders by Role

| Role | Order | Time |
|---|---|---|
| Owner | Phase 1 → Phase 3 › Sitemap → Phase 8 › Milestones → Phase 8 › Build Status | 20 min |
| Designer | Phase 1 → Phase 2 → Phase 4 → Phase 5 → Phase 6 › Shared Rules | 60 min |
| Engineer (new) | START_HERE → Phase 1 › Business Rules → Phase 3 → Phase 7 → SETUP-CHECKLIST → IMPLEMENTATION_PROMPT | 90 min |
| Engineer (returning) | Phase 8 › Build Status → the current sprint → the relevant Phase 5 and 6 entries | 10 min |
| QA | Phase 1 › Business Rules → Phase 2 (failure paths) → Phase 6 → Phase 9 | 60 min |
| Build session (AI) | IMPLEMENTATION_PROMPT, then any phase it cites | — |

---

## Search Keywords

| Phase | Keywords |
|---|---|
| 1 | vision, goals, personas, recruiter, hiring manager, founder, JTBD, business rules, North Star, KPI, non-goals, assumptions, placeholders |
| 2 | flows, journeys, screen, evaluate, message, résumé, freelance, share, fallback, offline, 404, recovery, owner |
| 3 | sitemap, routes, slugs, taxonomy, labels, cross-links, SEO, structured data, breadcrumbs, redirects, empty routes |
| 4 | pages, Home, Work, Case study, About, Contact, Not found, Error, states, excluded pages |
| 5 | sections, S-01–S-24, composer, channels, decisions, skills evidence, narrative |
| 6 | contracts, keyboard, ARIA, focus, live region, copy, dialog, disclosure, rate limit, honeypot, scrub |
| 7 | folders, `(site)`, providers, `lib/data`, schemas, selectors, Server Action, Resend, stage, layers, budgets, preserved code |
| 8 | sprints, milestones, gates, risks, debt, testing, deployment, status, deferred |
| 9 | QA, WCAG 2.2, Lighthouse, LCP, CLS, INP, cross-browser, content integrity, gates |

---

## Build Status Roll-up

A view over [Phase 8 › Build Status](phase-8-implementation-roadmap.md#build-status), as of 2026-11-21. Phase 8 is authoritative. If this view and Phase 8 differ, Phase 8 is right and this view is stale.

### By category

| Category | Total | Specified | Scheduled | In progress | Built | Verified | Deferred |
|---|---|---|---|---|---|---|---|
| Pages and document | 8 | 0 | 8 | 0 | 0 | 0 | 0 |
| Sections | 24 | 0 | 24 | 0 | 0 | 0 | 0 |
| Interaction contracts | 18 | 0 | 18 | 0 | 0 | 0 | 0 |
| Flows | 12 | 0 | 12 | 0 | 0 | 0 | 0 |
| **Total** | **62** | **0** | **62** | **0** | **0** | **0** | **0** |

### By sprint

| Sprint | Pages | Sections | Contracts | Flows |
|---|---|---|---|---|
| 1 | D-01 | — | — | F-04 (asset), F-11 |
| 2–3 | — (owner gates M-2, M-3) | — | — | — |
| 4 | P-06, P-07 | S-01, S-02, S-23, S-24 | IC-01–IC-04, IC-09, IC-15 | F-09, F-10 |
| 5 | P-02, P-03 | S-08–S-16 | IC-10, IC-11, IC-16, IC-18 | F-02, F-06 |
| 6 | P-04, P-05 | S-17–S-22 | IC-05–IC-08, IC-14 | F-01 (part), F-03, F-05, F-08, F-12 |
| 7 | P-01 | S-03–S-07 | IC-12, IC-13, IC-17 | F-01, F-07 |
| 8 | — (QA, deploy) | — | — | — |

### Deferred features (separate from the 62 above)

| Item | Revisit trigger |
|---|---|
| Site search | More than 12 case studies |
| Work filters | More than 8 case studies |
| Writing / notes section | Owner decides to publish writing |
| Tidemark case study | Tidemark deployed |
| Persistent rate-limit store | Spam observed, or owner approval |
