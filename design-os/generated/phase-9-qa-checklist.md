# Phase 9 — QA Checklist

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 8 — Implementation Roadmap](phase-8-implementation-roadmap.md) · Next: [START_HERE](START_HERE.md)

This is a functional QA checklist: 120 items. Visual quality is graded separately when each page is built, by the pagecraft and stagecraft critics. An item passes only with evidence (a test, a capture, or a recorded manual check). An item that was not run is marked **Not run**, never passed.

## Contents

1. [Content Integrity](#content-integrity) (QA-001–012)
2. [Accessibility and WCAG 2.2 AA](#accessibility-and-wcag-22-aa) (QA-013–036)
3. [Behavioural Consistency](#behavioural-consistency) (QA-037–044)
4. [Responsiveness](#responsiveness) (QA-045–052)
5. [Performance](#performance) (QA-053–064)
6. [State Coverage](#state-coverage) (QA-065–074)
7. [Error Handling](#error-handling) (QA-075–084)
8. [Loading Behaviour](#loading-behaviour) (QA-085–089)
9. [SEO Readiness](#seo-readiness) (QA-090–099)
10. [Cross-browser Compatibility](#cross-browser-compatibility) (QA-100–106)
11. [Scalability](#scalability) (QA-107–110)
12. [Frontend Readiness, Developer Experience, Maintainability](#frontend-readiness-developer-experience-maintainability) (QA-111–120)

---

## Content Integrity

| ID | Check | Traces |
|---|---|---|
| QA-001 | Every fact matches the owner's résumé data or repos | BR-01 |
| QA-002 | Retracted claims (WebAuthn passkeys, "promoted from intern") appear nowhere | BR-01 |
| QA-003 | No case study is a clone, template, tutorial or learning repo | BR-02 |
| QA-004 | Every listed skill resolves to at least one case study or role (test) | BR-03 |
| QA-005 | The education-platform client is never named and its source is never linked | BR-04 |
| QA-006 | Channels equal exactly the BR-06 set, from one constant | BR-06 |
| QA-007 | Every live link returns 2xx at release. Keyhold points to `keyhol.me` | BR-09 |
| QA-008 | The résumé PDF is the current master and its date is shown | BR-10 |
| QA-009 | Availability reads identically on every page that shows it | BR-11 |
| QA-010 | Every fact the narrative tells exists as server-rendered text | BR-12 |
| QA-011 | Case-study status labels match reality (Live, Private, In development, Retired) | Principle 6 |
| QA-012 | No placeholder copy ships | BR-01 |

## Accessibility and WCAG 2.2 AA

| ID | Check | Traces |
|---|---|---|
| QA-013 | Skip link is the first focus stop and moves focus to main content | IC-02 |
| QA-014 | Every interactive element is reachable and operable by keyboard alone | All IC |
| QA-015 | Focus is always visible and never obscured by sticky content (2.4.11) | IC-01 |
| QA-016 | Focus order follows reading order on every page | Phase 4 |
| QA-017 | Target size is at least 24×24 CSS px, or spacing exception met (2.5.8) | All IC |
| QA-018 | One `h1` per page. Heading levels never skip | Phase 5 |
| QA-019 | Landmarks: one `main`; navigation labelled | S-01 |
| QA-020 | Every image has a meaningful alt, or empty alt if decorative | S-15, S-17 |
| QA-021 | The stage canvas is `aria-hidden` and its content is available as text | IC-12, BR-12 |
| QA-022 | Reduced motion: no scroll hijack, no scrubbed motion, still shown | IC-12, IC-17 |
| QA-023 | Narrative skip moves focus past the narrative | IC-13 |
| QA-024 | Form fields have programmatic labels and described-by error text | IC-06 |
| QA-025 | Errors are announced and focus moves to the first invalid field on submit | IC-05 |
| QA-026 | Send status (sending, sent, failed) is announced through a live region | IC-14 |
| QA-027 | Copy confirmations are announced | IC-08, IC-14 |
| QA-028 | External links announce that they open a new tab | IC-09 |
| QA-029 | The compact navigation disclosure binds `aria-expanded` to state and Escape closes it | IC-03 |
| QA-030 | The media viewer traps focus, closes on Escape and returns focus | IC-16 |
| QA-031 | The detail disclosure binds `aria-expanded` to state | IC-18 |
| QA-032 | Text contrast meets AA (4.5:1 body, 3:1 large and UI) | WCAG 1.4.3, 1.4.11 |
| QA-033 | Content reflows at 320 CSS px with no horizontal scroll (1.4.10) | — |
| QA-034 | Text spacing overrides don't break content (1.4.12) | — |
| QA-035 | Zoom to 200 % keeps every function | 1.4.4 |
| QA-036 | Screen-reader pass (VoiceOver Safari, NVDA Firefox) completes F-01, F-03, F-04 | Flows |

## Behavioural Consistency

| ID | Check | Traces |
|---|---|---|
| QA-037 | The résumé action behaves identically everywhere | IC-04 |
| QA-038 | Every external link follows IC-09 | IC-09 |
| QA-039 | Every copy action follows IC-08, with the same feedback | IC-08 |
| QA-040 | Contact and résumé are one step from every page, P-06 and P-07 included | Principle 2 |
| QA-041 | Labels follow Phase 3 › Labelling Conventions | Phase 3 |
| QA-042 | Dates use the single period format | Phase 3 |
| QA-043 | All copy used twice comes from constants | CLAUDE.md |
| QA-044 | `?type=` preselects the opportunity type from every cross-link | IC-07 |

## Responsiveness

| ID | Check | Traces |
|---|---|---|
| QA-045 | Every page works at 320, 375, 768, 1024, 1440 and 1920 px widths | Phase 4 |
| QA-046 | Portrait and landscape phones both complete F-01 to F-04 | Flows |
| QA-047 | The narrative takes its phone path on narrow and touch devices | F-07 |
| QA-048 | Inputs bring up the right keyboard (email, text) | IC-06 |
| QA-049 | Phone and email channels open native apps on mobile | F-08 |
| QA-050 | The media viewer supports swipe on touch | IC-16 |
| QA-051 | No interaction depends on hover alone | All IC |
| QA-052 | The compact navigation works at narrow widths with no lost destinations | IC-03 |

## Performance

| ID | Check | Traces |
|---|---|---|
| QA-053 | LCP ≤ 2.5 s, phone on 4G, every page | Phase 1 KPI |
| QA-054 | CLS < 0.1 every page, media included | Phase 7 |
| QA-055 | INP < 200 ms | Phase 7 |
| QA-056 | Non-Home routes ship no stage code | Phase 7 |
| QA-057 | The stage loads lazily and is excluded from the LCP element | IC-12 |
| QA-058 | The stage renders only while visible and pauses off-screen | IC-12 |
| QA-059 | The stage adapts resolution under load (performance monitor) | IC-12 |
| QA-060 | Stage assets meet the manifest's size budgets | STAGE_BRIEF |
| QA-061 | Images go through `next/image` with explicit sizes | Phase 7 |
| QA-062 | Fonts are self-hosted through `next/font`, with no layout shift | Phase 7 |
| QA-063 | Static pages are served from the CDN, with no per-request rendering | Phase 3 |
| QA-064 | Lighthouse performance ≥ 90 on phone for P-02 to P-05 | — |

## State Coverage

| ID | Check | Traces |
|---|---|---|
| QA-065 | P-01 with no featured case study falls back to order | Phase 3 |
| QA-066 | P-02 with no case studies has its empty state and the build test flags it | Phase 3 |
| QA-067 | A case study missing optional links or media reads correctly | P-03 |
| QA-068 | A Private case study explains the missing source | BR-04 |
| QA-069 | A Retired case study stays reachable and is labelled | Phase 3 |
| QA-070 | An empty skill group is omitted | BR-03 |
| QA-071 | IC-05 passes through idle, validating, sending, sent, failed, rate-limited and offline | IC-05 |
| QA-072 | The sent state names the reply address and the expected reply time | P-05 |
| QA-073 | The freelance type is carried into the delivered email | F-05 |
| QA-074 | Narrative fallback paths: real-time, lighter, video, still | F-07 |

## Error Handling

| ID | Check | Traces |
|---|---|---|
| QA-075 | Unknown route returns 404 and P-06 | F-09 |
| QA-076 | Unknown slug returns 404 (`dynamicParams = false`) | P-03 |
| QA-077 | A thrown render error shows P-07, and retry works | F-10 |
| QA-078 | `global-error` catches root layout failures | P-07 |
| QA-079 | Provider failure: not reported as sent, input kept, channels offered | BR-07 |
| QA-080 | Network drop mid-send: told, input kept, retry possible | IC-05 |
| QA-081 | A double submit sends exactly one email | IC-05 |
| QA-082 | Honeypot or too-fast submissions are dropped silently with a fake success, and no email is sent | IC-05 |
| QA-083 | Over the rate limit: told when they can retry | IC-05 |
| QA-084 | Errors reach the logging service. No `console` in components | Phase 7 |

## Loading Behaviour

| ID | Check | Traces |
|---|---|---|
| QA-085 | Facts are readable with JavaScript disabled on every page | BR-12 |
| QA-086 | The contact form submits with JavaScript disabled (progressive post) | IC-05 |
| QA-087 | The narrative poster equals its opening frame (no jump) | F-07 |
| QA-088 | Media reserve their space before load | P-03 |
| QA-089 | Route transitions keep focus management correct | IC-10 |

## SEO Readiness

| ID | Check | Traces |
|---|---|---|
| QA-090 | Titles follow the Phase 3 patterns | Phase 3 |
| QA-091 | Each route has a unique description | Phase 3 |
| QA-092 | Each route has its own preview image (1200×630) | F-06 |
| QA-093 | Pasting a link into Slack, LinkedIn, X or WhatsApp shows the correct preview | F-06 |
| QA-094 | `Person` structured data is valid on P-01 and P-04 | Phase 3 |
| QA-095 | `CreativeWork` and `BreadcrumbList` are valid on P-03 | Phase 3 |
| QA-096 | `sitemap.xml` lists every indexable route and slug | Phase 3 |
| QA-097 | `robots.txt` allows indexing and points at the sitemap | Phase 3 |
| QA-098 | Canonical URLs use `https://hckerson.vercel.app` | Phase 3 |
| QA-099 | `/resume`, `/cv` and `/projects*` permanently redirect correctly | Phase 3 |

## Cross-browser Compatibility

| ID | Check | Traces |
|---|---|---|
| QA-100 | Chrome (latest two) desktop and Android complete every flow | — |
| QA-101 | Safari macOS and iOS (latest two) complete every flow | — |
| QA-102 | Firefox (latest two) completes every flow | — |
| QA-103 | Edge (latest) completes every flow | — |
| QA-104 | No WebGPU: the narrative uses its WebGL or fallback path | IC-12 |
| QA-105 | Samsung Internet on a mid-range Android completes F-01 and F-03 | Phase 1 constraints |
| QA-106 | The Clipboard API being unavailable falls back gracefully | IC-08 |

## Scalability

| ID | Check | Traces |
|---|---|---|
| QA-107 | Adding a case study needs data only (verified by adding a fixture) | F-11 |
| QA-108 | 20 case studies in a fixture: P-02 and adjacency still correct | Phase 3 |
| QA-109 | A traffic spike is served from static output, with nothing rendered per request | Phase 1 |
| QA-110 | Changing availability in one place changes it everywhere | BR-11 |

## Frontend Readiness, Developer Experience, Maintainability

| ID | Check | Traces |
|---|---|---|
| QA-111 | `pnpm type-check` passes | CLAUDE.md |
| QA-112 | `pnpm lint` passes, custom rules included | CLAUDE.md |
| QA-113 | `pnpm test` passes | Phase 8 |
| QA-114 | `pnpm contract:check` passes | CLAUDE.md |
| QA-115 | `pnpm build` passes | CI |
| QA-116 | No file over 150 lines, one component per file | CLAUDE.md |
| QA-117 | Pages compose sections only | CLAUDE.md |
| QA-118 | `.env.example` documents every new variable | Phase 7 |
| QA-119 | Starter features (auth, proxy, contract) are untouched and still pass their tests | Rule 6 |
| QA-120 | `README.md` explains how to update content (F-11) | G-5 |
