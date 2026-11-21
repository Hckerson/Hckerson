# Phase 3 — Information Architecture

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 2 — Experience Maps](phase-2-experience-maps.md) · Next: [Phase 4 — Page Blueprints](phase-4-page-blueprints.md)

This document covers structure and reachability only: which pages exist, how they relate, and who can reach them. Page IDs (`P-xx`, `D-xx`) defined here are used by every later phase.

## Contents

1. [Sitemap](#sitemap)
2. [Navigation Hierarchy](#navigation-hierarchy)
3. [Role-based Navigation and Permissions](#role-based-navigation-and-permissions)
4. [Content Taxonomy](#content-taxonomy)
5. [Labelling Conventions](#labelling-conventions)
6. [Cross-linking](#cross-linking)
7. [Search Hierarchy](#search-hierarchy)
8. [Filtering Hierarchy](#filtering-hierarchy)
9. [SEO Hierarchy](#seo-hierarchy)
10. [Breadcrumb Strategy](#breadcrumb-strategy)
11. [Empty Routes](#empty-routes)
12. [Fallback Routes](#fallback-routes)
13. [Future Expansion](#future-expansion)

---

## Sitemap

| ID | Page | Route | Route group | Serves flows | Rendering |
|---|---|---|---|---|---|
| P-01 | Home | `/` | `(site)` | F-01, F-07, F-02 entry, F-03 entry, F-04 | Static |
| P-02 | Work index | `/work` | `(site)` | F-02 | Static |
| P-03 | Case study | `/work/[slug]` | `(site)` | F-02, F-05, F-06 | Static per slug (`generateStaticParams`), no dynamic fallback |
| P-04 | About | `/about` | `(site)` | F-01, F-04 | Static |
| P-05 | Contact | `/contact` | `(site)` | F-03, F-05, F-08 | Static page plus a Server Action |
| P-06 | Not found | any unknown route | root | F-09 | Static, HTTP 404 |
| P-07 | Error | any failing segment | root and `(site)` | F-10 | Client error boundary, HTTP 500 |
| D-01 | Résumé | `/aderibigbe-emmanuel-resume.pdf` | static asset | F-04 | Static file |

**Generated, not pages:** `/robots.txt`, `/sitemap.xml`, the per-route link-preview images, and the site icon (F-06).

**Initial case-study slugs** (BR-02, BR-04):

| Slug | Work | Visibility |
|---|---|---|
| `keyhold` | Keyhold: peer-to-peer property marketplace (frontend and API) | Live, public source |
| `client-education-platform` | Client Education Platform (freelance) | Live product, client unnamed, private source |
| `starter-system` | Cross-language starter system (Next.js, NestJS, Go, .NET) sharing one API contract | Public source, not deployed |
| `pipecraft` | Pipecraft: typed Python data pipeline (CSV to SQLite with run tracking), first stage of a job-postings tool | Public source, in development. Added by owner decision 2026-11-22 as Python evidence (BR-03), overriding the learning-repo exclusion in BR-02 |

Employment at Vouchmark and Tekcify is presented on P-04 as roles, not case studies. Their work is not the owner's to publish in depth.

## Navigation Hierarchy

```
P-01 Home
├── P-02 Work
│   └── P-03 Case study  (one per slug)
├── P-04 About
├── P-05 Contact
└── D-01 Résumé  (document)
```

- **Level 1 (global):** Work, About, Contact, Résumé, and Home through the owner's name. Reachable from every page (Principle 2).
- **Level 2:** Case studies, reachable from P-02, from P-01's selected work, and from each other (previous / next).
- **Persistent conversion paths:** Contact (P-05) and Résumé (D-01) are one step from every page, including P-06 and P-07.
- **Skip path:** every page offers a skip-to-content target as the first focusable stop.

## Role-based Navigation and Permissions

| Role | Can reach | Can do |
|---|---|---|
| PER-1 to PER-4 (anonymous visitors) | All of P-01 to P-07 and D-01 | Read, download the résumé, send a message |
| PER-5 (owner) | The same as visitors on the site. Edits through the repo | Edits content through the repo (F-11). Receives messages by email (F-12) |

No route needs authentication. The starter's protected prefix (`/dashboard`) and auth routes remain configured in `proxy.ts`, but no page of this product sits under them. Rate limiting on message sending is the only access control (Phase 6, IC-05).

## Content Taxonomy

| Type | Defined by | Key attributes | Appears on |
|---|---|---|---|
| Profile | One record | name, handle, role title, location, remote fit, availability (BR-11), channels (BR-06), résumé date (BR-10) | Everywhere it is relevant |
| Case study | One record per slug | slug, title, one-line summary, kind (`product` · `client` · `platform`), status (`live` · `private` · `in-development` · `retired`), role, period, problem, decisions (each with its reason), outcome, learnings, stack, capabilities, links (live, source, both optional), order | P-01, P-02, P-03 |
| Role (employment) | One record per employer | company, title, period, mode (full-time, part-time, remote), summary, achievements | P-01, P-04 |
| Education | One record | degree, institution, period, standing, coursework | P-04 |
| Skill | One record per skill | name, group (languages, backend, frontend, testing, security and payments, tools), evidence (case-study slugs or roles, at least one — BR-03) | P-04, P-03 |
| Capability | A controlled vocabulary | payments, auth and identity, admin tooling, testing, CI and delivery, API contracts, real-time 3D | Case studies, skills (cross-link key) |
| Message | Transient, never stored | sender name, reply address, opportunity type (`role` · `internship` · `freelance` · `other`), organisation (optional), body, source page | F-03, F-12 |

## Labelling Conventions

- **Destinations** use one plain noun: Work, About, Contact, Résumé. "Case study" is the label for a single work item.
- **Actions** are verbs naming their outcome: "Send message", "Download résumé", "Copy email".
- **Status labels** are fixed: Live, Private, In development, Retired.
- **Opportunity types** are fixed: Role, Internship, Freelance, Other.
- **Dates:** a period reads `Sep 2025 – Present`. Months are written short.
- **Names:** the owner is "Aderibigbe Emmanuel" in formal contexts (titles, résumé, preview images) and "Hckerson" as the handle.
- All copy used twice lives in constants (`.claude/CLAUDE.md` › No hardcoding).

## Cross-linking

| From | To | Why |
|---|---|---|
| P-01 selected work | P-03 | F-02 entry |
| P-03 | Previous and next P-03, P-02, P-05 | Keeps evaluators moving. Every case study ends with a conversion path |
| P-03 capabilities | P-04 skills | Evidence travels both ways (BR-03) |
| P-04 skills | The P-03 slugs that evidence them | BR-03 |
| P-04 roles | P-05 | Hiring intent |
| P-05 failure | Direct channels (F-08) | F-03 recovery |
| P-06, P-07 | All of P-01 to P-05 and D-01 | F-09, F-10 |
| Every page | P-05, D-01 | Principle 2 |

## Search Hierarchy

There is no site search in v1, by decision. With at most 7 pages and a handful of case studies, search costs more than it saves. Discovery happens through navigation and cross-links. Revisit when case studies exceed 12 (Future Expansion).

## Filtering Hierarchy

P-02 has no filters in v1, by decision: there are three case studies. Order follows the data's `order` field. When there are more than 8 case studies, P-02 gains filtering by capability, then by kind, with the filter state kept in URL params (`.claude/CLAUDE.md` › State).

## SEO Hierarchy

| Page | Target query intent | Title pattern | Index |
|---|---|---|---|
| P-01 | "Aderibigbe Emmanuel", "Hckerson", "full-stack engineer Lagos" | `Aderibigbe Emmanuel · Full-Stack Software Engineer` | Yes |
| P-02 | "Hckerson projects" | `Work · Hckerson` | Yes |
| P-03 | "<project> case study", "Keyhold" | `<Case study title> · Hckerson` | Yes |
| P-04 | "Aderibigbe Emmanuel experience" | `About · Hckerson` | Yes |
| P-05 | "contact Hckerson" | `Contact · Hckerson` | Yes |
| P-06, P-07 | — | `Not found · Hckerson` / `Error · Hckerson` | No |
| D-01 | The résumé by name | — | Yes (linked from P-04) |

Structured data: `Person` on P-01 and P-04 (name, jobTitle, address locality, sameAs channels), and `CreativeWork` on P-03. Canonical URLs are on `https://hckerson.vercel.app`.

## Breadcrumb Strategy

Only P-03 has depth. It exposes the trail Home › Work › Case study to assistive tech and to search (`BreadcrumbList` structured data). Every other page is one level deep and gets no breadcrumb.

## Empty Routes

| Route | When empty | Behaviour |
|---|---|---|
| P-02 | No case study data (should never ship) | Says that work is being written up, and links to About and Résumé. The build test fails if the list is empty in production |
| P-01 selected work | No case study flagged as featured | Falls back to the first three by `order` |
| P-04 skills group | A group has no evidenced skills | The group is omitted (BR-03) |

## Fallback Routes

| Situation | Resolves to |
|---|---|
| Unknown path | P-06 (404) |
| Unknown `/work/[slug]` | P-06 (404, through `notFound()`), with `dynamicParams = false` |
| Retired case study slug | Stays reachable with status Retired. Never a 404 (stable URLs, F-06) |
| Render failure | P-07 for the segment, with the global error boundary as last resort |
| `/resume`, `/cv` | Permanent redirect to D-01 (common guesses) |
| `/projects`, `/projects/[slug]` | Permanent redirect to `/work`, `/work/[slug]` |

## Future Expansion

| Addition | Where it goes | Structural cost |
|---|---|---|
| Writing / notes | New `(site)/notes` and `notes/[slug]` | New data type. Global navigation gains one destination |
| More case studies | Data only | None until there are 8 (filters) or 12 (search) |
| Tidemark case study | Data entry with status In development | None |
| Localisation | Locale segment in front of `(site)` | Copy constants are already centralised |
| Stored inbox | Behind the same Server Action | None to IA |
