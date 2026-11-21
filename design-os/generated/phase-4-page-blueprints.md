# Phase 4 — Page Blueprints

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 3 — Information Architecture](phase-3-information-architecture.md) · Next: [Phase 5 — Section Blueprints](phase-5-section-blueprints.md)

These are functional blueprints for every page in the [Phase 3 sitemap](phase-3-information-architecture.md#sitemap). They define what each page must achieve and how it behaves in every state. Appearance, placement and screen content are decided at build time, with the owner.

The master prompt's example pages that do not apply are recorded under [Excluded Example Pages](#excluded-example-pages) with the reason, so the exclusion is a decision rather than an omission.

## Contents

1. [Page Inventory](#page-inventory)
2. [P-01 Home](#p-01--home)
3. [P-02 Work index](#p-02--work-index)
4. [P-03 Case study](#p-03--case-study)
5. [P-04 About](#p-04--about)
6. [P-05 Contact](#p-05--contact)
7. [P-06 Not found](#p-06--not-found)
8. [P-07 Error](#p-07--error)
9. [D-01 Résumé](#d-01--résumé)
10. [Excluded Example Pages](#excluded-example-pages)

---

## Page Inventory

| ID | Page | Route | Sections ([Phase 5](phase-5-section-blueprints.md)) |
|---|---|---|---|
| — | Every page | — | S-01, S-02 |
| P-01 | Home | `/` | S-03, S-04, S-05, S-06, S-07 |
| P-02 | Work index | `/work` | S-08, S-09 |
| P-03 | Case study | `/work/[slug]` | S-10, S-11, S-12, S-13, S-14, S-15, S-16 |
| P-04 | About | `/about` | S-17, S-18, S-19, S-20 |
| P-05 | Contact | `/contact` | S-21, S-22 |
| P-06 | Not found | — | S-23 |
| P-07 | Error | — | S-24 |
| D-01 | Résumé | `/aderibigbe-emmanuel-resume.pdf` | — |

---

## P-01 — Home

| Field | Definition |
|---|---|
| Purpose | Answer "who is this and should I care?" for every persona, and send each one onward. |
| Business objective | G-1, G-3, G-4: pass the screen, be memorable, convert. |
| User objective | PER-1: confirm fit fast. PER-2 and PER-3: find the strongest work. PER-4: something worth forwarding. |
| Primary tasks | "Tell me who you are and whether you're available." "Show me your best work." "Let me take your résumé or reach you." |
| Required data | Profile (name, role, location, remote fit, availability, channels, résumé date), featured case studies (summary, status, capabilities), current roles, stage script and assets. |
| Permissions | Public. |
| Device needs | Phone: identity and availability facts without waiting on the narrative; the narrative on its phone path (F-07). Desktop: the full narrative. Keyboard and screen reader: the same facts in reading order, with the narrative skippable (IC-13). |
| Loading states | The facts are server-rendered and readable at first paint. The narrative shows its poster frame until ready, and the poster equals the narrative's opening frame. |
| Empty states | No featured case study: falls back to the first three by order (Phase 3 › Empty Routes). |
| Error states | Narrative fails or is unsupported: the still path plus text (F-07). The page itself never errors because of the narrative. |
| Success states | The visitor reaches P-03, P-05 or D-01. |
| Dependencies | F-01, F-07, S-01 to S-07, the stage engine, `docs/STAGE_BRIEF.md`. |
| Implementation notes | `page.tsx` composes sections only (`.claude/CLAUDE.md` › Pages). The stage is client-only and loaded lazily. The text facts never come from client code. Metadata includes `Person` structured data. |

## P-02 — Work index

| Field | Definition |
|---|---|
| Purpose | Let evaluators choose which work to examine. |
| Business objective | G-2. |
| User objective | PER-2 and PER-3: pick the case study most relevant to their need. |
| Primary tasks | "What have you built?" "Which one is closest to what we do?" |
| Required data | Every case study: title, summary, kind, status, period, capabilities, slug. |
| Permissions | Public. |
| Device needs | All devices: compare items and open one in a single action. |
| Loading states | Static. None at runtime. |
| Empty states | Phase 3 › Empty Routes (P-02). |
| Error states | Segment error goes to P-07. |
| Success states | A case study is opened. |
| Dependencies | F-02, S-08, S-09. |
| Implementation notes | Order comes from the data's `order` field. Filters are deferred until there are more than 8 case studies (Phase 3 › Filtering Hierarchy). |

## P-03 — Case study

| Field | Definition |
|---|---|
| Purpose | Prove engineering judgement on one real system. |
| Business objective | G-2, G-1 (convert after conviction). |
| User objective | PER-2: assess decisions and ownership. PER-3: confirm they have shipped something similar. |
| Primary tasks | "What was the problem?" "What did you decide and why?" "Did it work?" "Can I see it?" "What next?" |
| Required data | One case study record (all attributes in Phase 3 › Content Taxonomy), media assets, and its previous and next neighbours. |
| Permissions | Public. A private-source item never exposes its source (BR-04). |
| Device needs | Phone: long-form reading with comfortable length, and media viewable at full size (IC-16). Desktop: the same. |
| Loading states | Static. Media loads lazily with reserved space, so nothing shifts. |
| Empty states | Optional attributes (live link, source link, media) are absent, not blank. Their absence is explained by status (Private, In development). |
| Error states | Unknown slug: P-06. A media asset fails: its text alternative stays readable. |
| Success states | The visitor reaches the outcome, then follows a live link, the next case study, or contact. |
| Dependencies | F-02, F-05, F-06, S-10 to S-16. |
| Implementation notes | `generateStaticParams` over the case-study data with `dynamicParams = false`. Per-slug metadata and preview image. `BreadcrumbList` and `CreativeWork` structured data. |

## P-04 — About

| Field | Definition |
|---|---|
| Purpose | Give the full professional record with evidence. |
| Business objective | G-3, G-2. |
| User objective | PER-1: experience, education, skills for the ATS. PER-2: breadth and trajectory. |
| Primary tasks | "Where have you worked and what did you do?" "What's your education?" "What can you work with, and where's the proof?" |
| Required data | Profile summary, headshot, roles, education, skills with evidence, résumé date. |
| Permissions | Public. |
| Device needs | All devices: scan quickly, and follow a skill's evidence to a case study. |
| Loading states | Static. The headshot reserves its space. |
| Empty states | A skill group with no evidenced skills is omitted (BR-03). |
| Error states | Segment error goes to P-07. |
| Success states | Résumé taken (F-04) or contact (F-03). |
| Dependencies | S-17 to S-20, F-01, F-04. |
| Implementation notes | `Person` structured data. Roles are ordered by period, newest first. Only claims in the current résumé data are used (BR-01). |

## P-05 — Contact

| Field | Definition |
|---|---|
| Purpose | Turn intent into a delivered message or a direct-channel contact. |
| Business objective | G-1 (North Star). |
| User objective | Every visitor persona: reach the owner with the least effort, through their preferred channel. |
| Primary tasks | "Send him a message from here." "Give me his email or number." |
| Required data | Channels (BR-06), availability (BR-11), and the opportunity-type vocabulary. |
| Permissions | Public. Rate-limited sending (IC-05). |
| Device needs | Phone: input types that bring up the matching keyboard; channels that open the native app (tel, mail, WhatsApp). Desktop: copy actions. |
| Loading states | Sending: the action is in progress, repeated submits are blocked, and the visitor is told it is sending. |
| Empty states | Not applicable. |
| Error states | Field errors (inline, specific). Delivery failure (BR-07, with direct channels and the message kept for copying). Rate limited (told when they can retry). Offline (told no message can be sent right now, with input kept). |
| Success states | Delivered: confirmation that names the reply address and an expected reply time. Visitors who arrived with intent from a case study are offered a path back. |
| Dependencies | F-03, F-05, F-08, S-21, S-22, IC-05 to IC-08. |
| Implementation notes | The Server Action lives in `lib/actions/send-message.ts`. Zod schema in `lib/validations/message.ts`, shared by client and server. Works without JavaScript through a progressive form post. Query param `?type=` preselects the opportunity type from cross-links. |

## P-06 — Not found

| Field | Definition |
|---|---|
| Purpose | Turn a dead link into a live visit. |
| Business objective | Keep visitors who would leave. |
| User objective | "Where can I go from here?" |
| Primary tasks | Reach a real page, the résumé, or contact. |
| Required data | The sitemap destinations. |
| Permissions | Public. |
| Device needs | All devices. |
| Loading states | None. |
| Empty states | Not applicable. |
| Error states | Not applicable. |
| Success states | The visitor reaches a real destination. |
| Dependencies | F-09, S-23. |
| Implementation notes | `app/not-found.tsx`. HTTP 404. `noindex`. |

## P-07 — Error

| Field | Definition |
|---|---|
| Purpose | Recover from a failure without losing the visitor. |
| Business objective | Protect conversions during faults. |
| User objective | "Can I try again or reach him some other way?" |
| Primary tasks | Retry. Reach a direct channel. |
| Required data | Channels (static, so they are available when the app is not). |
| Permissions | Public. |
| Device needs | All devices. Works if client JavaScript partly failed. |
| Loading states | Retrying: told a retry is in progress. |
| Empty states | Not applicable. |
| Error states | A repeated failure stays on P-07 with the channels. |
| Success states | The segment re-renders, or the visitor uses a channel. |
| Dependencies | F-10, S-24, IC-15. |
| Implementation notes | `error.tsx` per segment and `global-error.tsx`. Errors are reported to the logging service (Phase 7). Error details are never shown to visitors. |

## D-01 — Résumé

| Field | Definition |
|---|---|
| Purpose | Deliver the résumé in the format hiring systems ingest. |
| Business objective | JTBD-2, KPI résumé downloads. |
| Required data | The current master résumé PDF (BR-10). |
| States | Present (served), or missing (a build check fails, so it never ships missing). |
| Implementation notes | `public/aderibigbe-emmanuel-resume.pdf`. The path is a constant. `/resume` and `/cv` redirect to it. |

---

## Excluded Example Pages

The master prompt's example list is written for an enterprise platform. Each exclusion is traced to [Phase 1](phase-1-product-vision.md) and can be revisited.

| Example page | Decision | Reason |
|---|---|---|
| Search | Excluded v1 | Phase 3 › Search Hierarchy |
| Case study List/Map view | Mapped to P-02 | No geography in the domain |
| Saved / Favorites / Compare | Excluded | No accounts (Non-goals) |
| Role profile / Role dashboard | Excluded | `{{ROLE_DASHBOARDS}}` = none |
| Messages / Notifications | Excluded | Messages are sent, never stored (BR-08) |
| Settings / Profile | Excluded | No accounts |
| Domain tool | Mapped to D-01 | `{{DOMAIN_TOOL}}` = résumé |
| Case study submission | Excluded | The owner edits through the repo (F-11) |
| Authentication | Excluded | No accounts. The starter's auth stays in code, unused |
| Domain transaction | Mapped to P-05 | `{{DOMAIN_TRANSACTION}}` = sending a hiring message |
| Payment | Excluded | No pricing (Non-goals) |
| Help Center | Excluded | Not needed for a 7-page site. Recovery is covered by P-06 and P-07 |
| 404 / 500 | Included | P-06 / P-07 |
