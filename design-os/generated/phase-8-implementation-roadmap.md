# Phase 8 — Implementation Roadmap

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 7 — Frontend Architecture](phase-7-frontend-architecture.md) · Next: [Phase 9 — QA Checklist](phase-9-qa-checklist.md)

The plan is 4 weeks, run as 8 half-week sprints. This file is the only place build status lives (Critical Rules › Scope Preservation).

## Contents

1. [Development Phases and Priority Order](#development-phases-and-priority-order)
2. [Sprint Breakdown](#sprint-breakdown)
3. [Milestones](#milestones)
4. [Dependencies](#dependencies)
5. [Risk Assessment](#risk-assessment)
6. [Technical Debt Prevention](#technical-debt-prevention)
7. [Testing Strategy](#testing-strategy)
8. [Deployment Readiness](#deployment-readiness)
9. [Build Status](#build-status)

---

## Development Phases and Priority Order

| Order | Phase | Why this order |
|---|---|---|
| 1 | Content and data foundation | Every page renders from data (Phase 1 › Implementation Philosophy). Facts first, so nothing is invented later (BR-01) |
| 2 | Visual direction and owner approval | No page is built before its look is approved (Visual Design Hand-off) |
| 3 | Shared layers and resilience pages | Every page depends on the shared layers. P-06 and P-07 protect every later release |
| 4 | Evidence pages (P-02, P-03, P-04) | G-2 and G-3 carry the hiring decision |
| 5 | Conversion (P-05) | The North Star. It depends on the approved primitives |
| 6 | Home and the scroll narrative (P-01, S-04) | It needs everything else to link to, and it is the highest-risk build |
| 7 | QA, audits, deployment | Phase 9 gate |

## Sprint Breakdown

| Sprint | Days | Scope | Pages / flows | Exit criteria |
|---|---|---|---|---|
| 1 | Wk 1, days 1–2 | Portfolio types and Zod schemas. `lib/data/*` filled from the owner's résumé data and repos (BR-01, BR-02, BR-04). Selectors with tests. Constants (routes, channels, copy). Résumé asset and headshot copied in. Query provider. Logger service. `.env.example` additions | F-11 | Data tests pass. Every fact has a source |
| 2 | Wk 1, days 3–5 | **Pagecraft:** truth sheet, `draw.mjs` directions, `docs/DESIGN_BRIEF.md`, tokens filled. **Stagecraft:** truth sheet, concept cards, storyboard, script, `docs/STAGE_BRIEF.md` with asset manifest | — | **Owner approves the direction and concept** |
| 3 | Wk 2, days 1–2 | Pagecraft styleframes (three key screens) and stagecraft look development (two or three key shots). Each graded blind by the critic | — | **Owner approves the styleframes (look gate)** |
| 4 | Wk 2, days 3–5 | `components/ui` primitives, brand, patterns. S-01, S-02. Root and `(site)` layouts. P-06, P-07. Redirects | F-09, F-10 | Shared layers graded Fifth. P-06 and P-07 built |
| 5 | Wk 3, days 1–2 | P-02 (S-08, S-09). P-03 (S-10 to S-16). Per-route metadata, link-preview images, sitemap, robots, structured data | F-02, F-06 | All case studies render. Previews verified |
| 6 | Wk 3, days 3–5 | P-04 (S-17 to S-20). P-05 (S-21, S-22): message schema, Server Action, Resend delivery, rate limit, bot filter, IC-05 to IC-08, IC-14 | F-01, F-03, F-04, F-05, F-08, F-12 | A message is delivered end to end. Every failure path is exercised |
| 7 | Wk 4, days 1–2 | P-01 (S-03, S-05 to S-07). Stage asset production, motion pass, S-04 integration, IC-12, IC-13, IC-17. Fallback chain: poster, video, still | F-01, F-07 | The narrative scrubs on desktop and phone paths. Reduced motion gets the still |
| 8 | Wk 4, days 3–5 | Dailies to convergence. Pagecraft audit and verify. Stagecraft verify. Phase 9 QA. Performance and accessibility passes. Deployment | All | Phase 9 gate passed. Live on `hckerson.vercel.app` |

## Milestones

| ID | Milestone | Sprint | Evidence |
|---|---|---|---|
| M-1 | Facts locked | 1 | `lib/data` reviewed by the owner |
| M-2 | Direction approved | 2 | DESIGN_BRIEF and STAGE_BRIEF signed off |
| M-3 | Look approved | 3 | Styleframes plus critic tables accepted |
| M-4 | Evidence pages live (preview) | 5–6 | Preview deployment of P-02 to P-05 |
| M-5 | Conversion proven | 6 | Test message received by the owner (F-12) |
| M-6 | Launch | 8 | Phase 9 passed. Production deploy |

## Dependencies

| Item | Depends on |
|---|---|
| Any page build | M-3 (look approved) |
| S-04 narrative | M-2 concept, M-3 key shots, the stage asset manifest |
| P-05 delivery | A Resend account and API key from the owner (environment) |
| Analytics | `@vercel/analytics`: Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1) |
| E2E tests | `@playwright/test` (headless only): Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1) |
| Keyhold live link | `keyhol.me` resolving (A-2) |
| Résumé | `Aderibigbe-Emmanuel-Resume.pdf` (A-3, resolved; owner choice 2026-11-22) |

## Risk Assessment

| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R-1 | The scroll narrative overruns its sprint | High | Medium | Pages ship first (Sprints 4–6). The narrative carries a poster, still and video fallback from day one, so Home can launch on the still path while the motion pass converges |
| R-2 | Phones in the visitor base can't run WebGPU or WebGL well | Medium | High | Capability fallback chain (IC-12). Text facts are independent (BR-12) |
| R-3 | Message delivery from a `vercel.app` domain hits sender verification limits | Medium | High | Resend's test sender delivers to the account owner's own address, which is exactly the recipient. Moving to a verified domain later is a single config change. Delivery is verified at M-5 |
| R-4 | The in-memory rate limit doesn't hold across serverless instances | Medium | Low | Honeypot and minimum-fill-time filters carry most of the load. The upgrade path to a KV store needs owner approval |
| R-5 | Stale or retracted facts appear | Low | High | BR-01, schema tests, the owner review at M-1 |
| R-6 | Client confidentiality for the education platform | Low | High | BR-04. Owner review of the S-11 to S-15 copy for that slug |
| R-7 | A live link breaks after launch | Medium | Medium | BR-09. A link check in QA. The status field allows Retired |
| R-8 | Machine overload from concurrent heavy jobs (shared dev machine) | Medium | Medium | Heavy jobs run one at a time, after checking load (global rule) |

## Technical Debt Prevention

- The `.claude/CLAUDE.md` gates run on every change: `pnpm type-check`, `pnpm lint`, `pnpm contract:check`, plus `pnpm test`.
- The custom ESLint rules (page-composes-only, one-component-per-file, no-comments, api-access-boundary, stage-tells) stay at error level.
- Content changes touch `lib/data/` only. A fact found duplicated in a page is a defect.
- Every new dependency goes through the Library Selection Policy. `package.json` is never hand-edited.
- Stubbed or unused starter code is never deleted without the owner's instruction (rule 6).

## Testing Strategy

| Level | Tool | Scope |
|---|---|---|
| Data | vitest | Schemas over `lib/data`: BR-02 (no excluded kinds), BR-03 (skill evidence resolves), BR-09 (URL shape), BR-11 (one availability source), unique slugs, adjacency |
| Unit | vitest | Selectors, message schema, the Server Action with the provider mocked: success, provider error, rate limit, honeypot, invalid input |
| Component | vitest | IC-05 lifecycle, IC-08 copy fallback, IC-18 disclosure state |
| E2E | Playwright, headless | F-01, F-02, F-03 (mocked provider), F-04, F-09. Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1) |
| Visual | pagecraft and stagecraft capture tools, headless | Dailies and critic grading |
| Accessibility | axe in the component and E2E runs, plus a manual screen-reader pass | WCAG 2.2 AA |
| Performance | Lighthouse (headless) on phone emulation | Phase 7 budgets |

## Deployment Readiness

- Vercel project linked. Production domain `hckerson.vercel.app`.
- Environment: `RESEND_API_KEY`, `CONTACT_TO`. `NEXT_PUBLIC_API_URL` and `JWT_PUBLIC_KEY` stay as the starter expects. The proxy must not fail when `JWT_PUBLIC_KEY` is unset on public routes; this is verified in QA.
- `metadataBase`, canonical URLs, sitemap and robots point at production.
- Résumé PDF present and current (BR-10).
- A test message is delivered from production (M-5 re-run).
- Phase 9 checklist signed off.

## Build Status

Statuses use the vocabulary defined in the master prompt. As of 2026-11-21, nothing is built.

### Pages

| ID | Item | Status | Sprint |
|---|---|---|---|
| P-01 | Home | Scheduled | 7 |
| P-02 | Work index | Scheduled | 5 |
| P-03 | Case study | Scheduled | 5 |
| P-04 | About | Scheduled | 6 |
| P-05 | Contact | Scheduled | 6 |
| P-06 | Not found | Scheduled | 4 |
| P-07 | Error | Scheduled | 4 |
| D-01 | Résumé | Scheduled | 1 |

### Sections

| ID | Section | Status | Sprint |
|---|---|---|---|
| S-01 | Site identity and global navigation | Scheduled | 4 |
| S-02 | Sitewide conversion path | Scheduled | 4 |
| S-03 | Introduction and availability | Scheduled | 7 |
| S-04 | Scroll narrative | Scheduled | 7 |
| S-05 | Selected work | Scheduled | 7 |
| S-06 | Current roles snapshot | Scheduled | 7 |
| S-07 | Home contact invitation | Scheduled | 7 |
| S-08 | Work index introduction | Scheduled | 5 |
| S-09 | Case study list | Scheduled | 5 |
| S-10 | Case study overview | Scheduled | 5 |
| S-11 | Problem and context | Scheduled | 5 |
| S-12 | Decisions | Scheduled | 5 |
| S-13 | Outcome and learnings | Scheduled | 5 |
| S-14 | Stack and capabilities | Scheduled | 5 |
| S-15 | Case study media | Scheduled | 5 |
| S-16 | Continue | Scheduled | 5 |
| S-17 | Profile summary | Scheduled | 6 |
| S-18 | Experience | Scheduled | 6 |
| S-19 | Education | Scheduled | 6 |
| S-20 | Skills with evidence | Scheduled | 6 |
| S-21 | Message composer | Scheduled | 6 |
| S-22 | Direct channels | Scheduled | 6 |
| S-23 | Not-found recovery | Scheduled | 4 |
| S-24 | Error recovery | Scheduled | 4 |

### Interaction contracts

| ID | Contract | Status | Sprint |
|---|---|---|---|
| IC-01 | Global navigation link set | Scheduled | 4 |
| IC-02 | Skip link | Scheduled | 4 |
| IC-03 | Compact navigation disclosure | Scheduled | 4 |
| IC-04 | Résumé download action | Scheduled | 4 |
| IC-05 | Message form submission | Scheduled | 6 |
| IC-06 | Text input field | Scheduled | 6 |
| IC-07 | Opportunity type choice | Scheduled | 6 |
| IC-08 | Copy-to-clipboard action | Scheduled | 6 |
| IC-09 | External link | Scheduled | 4 |
| IC-10 | Internal content link | Scheduled | 5 |
| IC-11 | Previous / next case-study navigation | Scheduled | 5 |
| IC-12 | Scroll narrative scrub | Scheduled | 7 |
| IC-13 | Narrative skip | Scheduled | 7 |
| IC-14 | Status announcement | Scheduled | 6 |
| IC-15 | Retry action | Scheduled | 4 |
| IC-16 | Media viewer dialog | Scheduled | 5 |
| IC-17 | In-page anchor navigation | Scheduled | 7 |
| IC-18 | Detail disclosure | Scheduled | 5 |

### Flows

| ID | Flow | Status | Sprint |
|---|---|---|---|
| F-01 | Screen the candidate | Scheduled | 6–7 |
| F-02 | Evaluate engineering depth | Scheduled | 5 |
| F-03 | Send a hiring message | Scheduled | 6 |
| F-04 | Take the résumé | Scheduled | 1, 4 |
| F-05 | Start a freelance enquiry | Scheduled | 6 |
| F-06 | Share the site | Scheduled | 5 |
| F-07 | Scroll narrative or fallback | Scheduled | 7 |
| F-08 | Reach a direct channel | Scheduled | 6 |
| F-09 | Recover from a missing page | Scheduled | 4 |
| F-10 | Recover from an error or being offline | Scheduled | 4 |
| F-11 | Update content | Scheduled | 1 |
| F-12 | Receive and answer a message | Scheduled | 6 |

### Deferred

| Item | Reason | Revisit trigger |
|---|---|---|
| Site search | Not worth it at the current content size (Phase 3) | More than 12 case studies |
| Work filters | Three case studies (Phase 3) | More than 8 case studies |
| Writing / notes section | Not in v1 scope | Owner decides to publish writing |
| Tidemark case study | Not deployed, one day old | Tidemark deployed |
| Persistent rate-limit store | Needs a new dependency (R-4) | Spam observed, or owner approval |
