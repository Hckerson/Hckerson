# Phase 7 — Frontend Architecture

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 6 — Interaction Contracts](phase-6-interaction-contracts.md) · Next: [Phase 8 — Implementation Roadmap](phase-8-implementation-roadmap.md)

This document covers code organisation for the product defined in [Phases 1–6](phase-1-product-vision.md). It is built on the existing starter, and `.claude/CLAUDE.md` wins wherever it differs from the master prompt. It names files and folders only. How anything looks is decided at build time, with the owner.

## Contents

1. [Ground Rules from the Host Repo](#ground-rules-from-the-host-repo)
2. [Folder Structure](#folder-structure)
3. [Route Structure](#route-structure)
4. [Layouts](#layouts)
5. [Providers](#providers)
6. [Feature Folders](#feature-folders)
7. [Hooks](#hooks)
8. [Utilities](#utilities)
9. [Constants](#constants)
10. [Contexts and Stores](#contexts-and-stores)
11. [API Organisation](#api-organisation)
12. [Component Organisation](#component-organisation)
13. [Shared Libraries](#shared-libraries)
14. [Asset Organisation](#asset-organisation)
15. [Naming Conventions](#naming-conventions)
16. [Code Splitting and Lazy Loading](#code-splitting-and-lazy-loading)
17. [Performance Strategy](#performance-strategy)
18. [Testing Organisation](#testing-organisation)
19. [Preserved Starter Code](#preserved-starter-code)

---

## Ground Rules from the Host Repo

These come from `.claude/CLAUDE.md` and `eslint.config.ts`. They bind every file below.

| Rule | Effect here |
|---|---|
| No hardcoding | Routes, channels, copy used twice and the résumé path live in constants |
| Single source of truth | Each fact is stored once in `lib/data/` (BR-11, G-5) |
| `page.tsx` composes only | Enforced by `starter/page-composes-only`: pages import sections and hold page-level state only |
| One component per file, kebab-case | Enforced by `starter/one-component-per-file`. Compound primitives are allowed in `components/ui/` |
| Files ≤ 150 lines | Enforced by `max-lines` (tests are exempt) |
| `lib/` has no JSX and never imports `components/` | Enforced by `no-restricted-imports` |
| Components never import the transport | Enforced by `starter/api-access-boundary`. Components use `lib/hooks/use-*.ts` |
| Domain types live in `lib/types/` | Enforced by `starter/domain-types-in-lib` |
| No comments, no `console.*` | `starter/no-comments`, `no-console`. Logging goes through a service |
| IDs from `nanoid` | Enforced by `no-restricted-syntax` |
| `@/` absolute imports | Enforced by the deep-relative pattern ban |

## Folder Structure

New paths are marked **+**. Everything else already exists.

```
app/
  layout.tsx                         root layout (exists; gains metadata, fonts, providers)
+ not-found.tsx                      P-06
+ error.tsx                          P-07 (root segment)
+ global-error.tsx                   P-07 (last resort)
+ robots.ts
+ sitemap.ts
+ icon.(png|svg)                     site icon (asset chosen at build)
+ opengraph-image.tsx                default preview (F-06)
+ (site)/
+   layout.tsx                       site chrome for every public page
+   error.tsx                        P-07 for the group
+   page.tsx                         P-01 Home
+   opengraph-image.tsx
+   work/
+     page.tsx                       P-02
+     opengraph-image.tsx
+     [slug]/
+       page.tsx                     P-03
+       opengraph-image.tsx          per case study
+   about/
+     page.tsx                       P-04
+     opengraph-image.tsx
+   contact/
+     page.tsx                       P-05
+     opengraph-image.tsx
components/
  providers/   stage-scroll-provider.tsx (exists) · + query-provider.tsx
  wrappers/    stage-canvas.tsx and scene wrappers (exist)
+ ui/  + common/  + brand/  + patterns/  + features/  + sections/  + layout/
lib/
  actions/     create-user.ts (exists) · + send-message.ts
  hooks/       existing hooks · + use-send-message.ts · + use-copy-to-clipboard.ts
+ data/        profile.ts · case-studies.ts · roles.ts · education.ts · skills.ts
+ portfolio/   constants.ts · selectors (one file per selector) · structured-data.ts
+ home/        script.ts (stage script for P-01)
+ services/    logger.ts · mailer.ts · rate-limit.ts
  types/       index.ts (exists) · + portfolio.ts · + message.ts
  validations/ existing · + portfolio.ts · + message.ts
  stage/       existing engine (unchanged API, extended only if stagecraft needs a verb)
  constants.ts existing · gains site-wide routes and SITE_CONFIG
+ public/
+   aderibigbe-emmanuel-resume.pdf   D-01
+   images/headshot.webp
+   work/<slug>/                     case-study media
+   stage/home/                      stage assets, poster, fallback video
```

## Route Structure

| Route | File | Page | Static? | Notes |
|---|---|---|---|---|
| `/` | `app/(site)/page.tsx` | P-01 | Static | The stage is client-only and lazy |
| `/work` | `app/(site)/work/page.tsx` | P-02 | Static | |
| `/work/[slug]` | `app/(site)/work/[slug]/page.tsx` | P-03 | SSG | `generateStaticParams` from `lib/data/case-studies.ts`; `dynamicParams = false`; `notFound()` on a miss |
| `/about` | `app/(site)/about/page.tsx` | P-04 | Static | |
| `/contact` | `app/(site)/contact/page.tsx` | P-05 | Static | Server Action `sendMessage`. Reads `?type=` through `searchParams` to preselect the opportunity type |
| unknown | `app/not-found.tsx` | P-06 | Static | HTTP 404, `robots: { index: false }` |
| failure | `app/error.tsx`, `app/(site)/error.tsx`, `app/global-error.tsx` | P-07 | Client | Reports through `lib/services/logger.ts` |
| `/robots.txt` | `app/robots.ts` | — | Static | Disallows nothing public. Points at the sitemap |
| `/sitemap.xml` | `app/sitemap.ts` | — | Static | P-01 to P-05 plus every slug, from data |
| `/aderibigbe-emmanuel-resume.pdf` | `public/` | D-01 | Static | Path held in `RESUME_PATH` |

**Redirects** (`next.config.ts › redirects()`, permanent):

| Source | Destination |
|---|---|
| `/resume`, `/cv` | `RESUME_PATH` |
| `/projects` | `/work` |
| `/projects/:slug` | `/work/:slug` |

The redirect table imports its paths from `lib/constants.ts`, so no route is a literal in two places.

**Metadata:** each `page.tsx` exports `metadata` (or `generateMetadata` for P-03). The values come from the title patterns in [Phase 3 › SEO Hierarchy](phase-3-information-architecture.md#seo-hierarchy), with patterns held in `lib/portfolio/constants.ts`. `metadataBase` is `SITE_CONFIG.url` (`https://hckerson.vercel.app`). JSON-LD (`Person`, `CreativeWork`, `BreadcrumbList`) is built by pure functions in `lib/portfolio/structured-data.ts` and rendered by a `common/` component.

## Layouts

| Layout | Owns | Does not own |
|---|---|---|
| `app/layout.tsx` (root) | `<html lang>`, global CSS, fonts through `next/font` (chosen at build), site-wide `metadata`, `QueryProvider`, analytics mount (when approved) | Any chrome |
| `app/(site)/layout.tsx` | S-01 and S-02 (site chrome), the skip-link target (IC-02), the main landmark | Page sections |

P-06 and P-07 render outside `(site)`. They compose the same `layout/` components directly, so recovery paths work even when the group layout is the thing that failed.

## Providers

| Provider | File | Scope | Why |
|---|---|---|---|
| `QueryProvider` | `components/providers/query-provider.tsx` (**new**) | Root | The starter's hooks use TanStack Query and nothing mounts a client yet. It holds one `QueryClient` per browser session, created in `useState` |
| `StageScrollProvider` | `components/providers/stage-scroll-provider.tsx` (exists) | P-01 only, mounted by the Home stage section | Lenis ↔ ScrollTrigger sync. It already bypasses itself under reduced motion. Other routes keep native scroll |

No auth, theme or i18n provider in v1. Future i18n would add one at the root (Phase 3 › Future Expansion).

## Feature Folders

`lib/` is organised by feature where a feature has more than one file. `components/` is organised by layer (`docs/UI_LAYERS.md`), never by feature.

| Feature | lib/ files | Used by |
|---|---|---|
| Portfolio content | `lib/data/*.ts`, `lib/types/portfolio.ts`, `lib/validations/portfolio.ts`, `lib/portfolio/*` | P-01 to P-05, sitemap, metadata |
| Messaging | `lib/validations/message.ts`, `lib/types/message.ts`, `lib/actions/send-message.ts`, `lib/hooks/use-send-message.ts`, `lib/services/mailer.ts`, `lib/services/rate-limit.ts` | P-05 (S-21) |
| Home stage | `lib/home/script.ts`, `lib/stage/*` (engine), `lib/hooks/use-stage-timeline.ts`, `lib/hooks/use-render-pipeline.ts` | P-01 (S-04) |

### Portfolio content

- **`lib/types/portfolio.ts`**: `Profile`, `Availability`, `Channel`, `CaseStudy`, `CaseStudyKind`, `CaseStudyStatus`, `Decision`, `CaseStudyLinks`, `Role`, `Education`, `Skill`, `SkillGroup`, `Capability`. Each type is `z.infer` of the matching schema in `lib/validations/portfolio.ts` (`.claude/CLAUDE.md` › Validation). It is re-exported from `lib/types/index.ts`.
- **`lib/data/`**, one file per domain, each exporting a typed constant:
  - `profile.ts`: name, handle, role title, location, remote fit, **one** `availability` value (BR-11), channels (BR-06), résumé date (BR-10).
  - `case-studies.ts`: `keyhold`, `client-education-platform`, `starter-system` ([Phase 3 › Sitemap](phase-3-information-architecture.md#sitemap)).
  - `roles.ts`: Vouchmark and Tekcify (BR-05).
  - `education.ts`: OAU.
  - `skills.ts`: each skill with an `evidence` array of case-study slugs or role ids.
- **`lib/validations/portfolio.ts`** holds the schemas. The data tests enforce these rules:

| Rule | Enforcement |
|---|---|
| BR-02 | `CaseStudy.kind` is an enum with no "clone" or "tutorial". Every entry has `role` and `period` |
| BR-03 | Each skill's `evidence` is non-empty, and every id resolves to a case study or role |
| BR-04 | Status `private` forbids `links.source` (schema refinement) |
| BR-06 | Channels are a fixed, closed set |
| BR-09 | `links.live` and `links.source` are `https:` URLs. Liveness itself is a pre-release QA item ([Phase 9](phase-9-qa-checklist.md)) |
| BR-11 | `availability` exists only on `Profile`. No other type declares it |
| Slugs | Unique, kebab-case. `order` values are unique |

- **`lib/portfolio/`** holds pure selectors, one per file, with a colocated test:
  - `get-case-study.ts`: by slug, `undefined` on a miss.
  - `get-adjacent-case-studies.ts`: previous and next by `order`, for IC-11.
  - `get-featured-case-studies.ts`: flagged items, falling back to the first three by `order` (Phase 3 › Empty Routes).
  - `get-skills-with-evidence.ts`: grouped, with empty groups dropped.
  - `get-roles.ts`: newest first.
  - `structured-data.ts`: JSON-LD builders.
  - `constants.ts`: copy, labels, status and opportunity vocabularies, title patterns.

### Messaging

```
S-21 composer (client)
   │  form action={sendMessage}          ← works before hydration (progressive enhancement)
   │  onSubmit → useSendMessage().mutate ← after hydration (pending, error, retry state)
   ▼
lib/actions/send-message.ts ("use server")
   1. messageSchema.safeParse(formData)          lib/validations/message.ts
   2. bot filter: honeypot field + minimum fill time
   3. rateLimit(ip)                              lib/services/rate-limit.ts
   4. mailer.send({ replyTo, subject, body })    lib/services/mailer.ts → Resend REST
   5. ActionResult<{ sentAt }>                   lib/types/api.ts (exists)
```

- **One schema** (`messageSchema`) covers name, reply email, opportunity type (`role · internship · freelance · other`), optional organisation, body, source page, honeypot and start timestamp. The client and the action both use it.
- **`ActionResult`** is reused from `lib/types/api.ts`. `ok: true` only after Resend returns 2xx (BR-07). Failures carry a status: 400 invalid, 429 rate-limited, 502 provider failure, 503 not configured.
- **`useSendMessage`** (`lib/hooks/use-send-message.ts`) is a TanStack `useMutation` wrapping the Server Action, following the host pattern "mutations wrap a Server Action from `lib/actions/`". This mutation is **unauthenticated**, which is the only difference from the pattern. The hook throws on `ok: false`, so the mutation's error state carries the status for IC-05.
- **Mailer:** Resend through its REST API with `fetch`. That means **no new dependency** (Library Selection Policy › reuse first; the owner's Keyhold backend already uses Resend). `lib/services/mailer.ts` is `server-only` and reads `RESEND_API_KEY`, `CONTACT_TO` and `CONTACT_FROM`. The subject names the opportunity type and sender, and `reply_to` is the visitor (F-12).
- **Rate limit, v1:** an in-memory sliding window per server instance, keyed by IP and reply email. Honest limitation: on serverless, each instance has its own memory, so the limit is best-effort, not global. Combined with the honeypot and fill-time check, this is enough at launch volumes. **Upgrade path:** Upstash Redis or Vercel KV behind the same `rateLimit()` signature. That is a new dependency, so it is **proposed and needs owner approval before `pnpm add`**.
- **`.env.example` additions:**

```
RESEND_API_KEY=
CONTACT_TO=emmanueladeribigbe415@gmail.com
CONTACT_FROM=
```

A missing key makes the action return 503 and logs the error. It never reports success (BR-07).

### Home stage

- The engine (`lib/stage/`), canvas (`components/wrappers/stage-canvas.tsx`), scroll sync (`components/providers/stage-scroll-provider.tsx`) and timeline hook (`lib/hooks/use-stage-timeline.ts`) are reused as is.
- `lib/home/script.ts` holds the Home script as data (`Script` from `lib/types/stage.ts`), following the stagecraft convention `lib/<feature>/script.ts`. Its content is decided by stagecraft and recorded in `docs/STAGE_BRIEF.md`.
- New verbs, if the concept needs them, go into `lib/stage/moves/` with tests, through `compile-script.ts`'s switch.

## Hooks

| Hook | Status | Purpose | Contract |
|---|---|---|---|
| `use-send-message.ts` | New | Mutation wrapping `sendMessage` | IC-05 |
| `use-copy-to-clipboard.ts` | New | Clipboard write with a copied, failed or idle state that resets after a token duration | IC-08 |
| `use-stage-timeline.ts` | Exists | Scrubbed timeline plus reduced-motion seek | IC-12 |
| `use-render-pipeline.ts`, `use-pointer-sway.ts`, `use-baked-rigid.ts` | Exist | Stage internals | IC-12 |
| `use-login.ts`, `use-register.ts`, `use-logout.ts`, `use-create-user.ts`, `use-debounced-search.ts` | Exist | Starter examples. Unused by this product, preserved | — |

Hooks never import `components/`. Durations come from `MOTION_DURATION` in `lib/constants.ts`.

## Utilities

| Utility | Status | Use |
|---|---|---|
| `lib/utils/date-formatter.ts`, `date-parser.ts` | Exist | Period labels (`Sep 2025 – Present`), with formats as constants |
| `lib/utils/query-string.ts` | Exists | `?type=` cross-links to P-05 |
| `lib/utils/internal-path.ts` | Exists | Validates internal paths, such as the source page sent with a message |
| `lib/utils/format-period.ts` | New | `{ start, end? }` → label. The single place for the period rule |
| `lib/utils/client-ip.ts` | New, `server-only` | Reads the IP from request headers for the rate limiter |

## Constants

| Constant | File | Contents |
|---|---|---|
| `HOME_ROUTE` (exists), `WORK_ROUTE`, `workRoute(slug)`, `ABOUT_ROUTE`, `CONTACT_ROUTE`, `RESUME_PATH`, `LEGACY_REDIRECTS` | `lib/constants.ts` | Every path appears once and is shared by links, sitemap and redirects |
| `SITE_CONFIG` | `lib/constants.ts` | Product name, URL (`https://hckerson.vercel.app`), default title and description |
| `MAIN_CONTENT_ID` | `lib/constants.ts` | Skip-link target (IC-02) |
| `MESSAGE_LIMITS` | `lib/constants.ts` | Field lengths, minimum fill time, rate-limit window and count |
| `COPY`, `STATUS_LABELS`, `OPPORTUNITY_TYPES`, `CAPABILITIES`, `SKILL_GROUPS`, `TITLE_PATTERNS` | `lib/portfolio/constants.ts` | Fixed vocabularies from [Phase 3 › Labelling](phase-3-information-architecture.md#labelling-conventions) |
| Channels | `lib/data/profile.ts` | Data, not constants: they are facts about the person (BR-06) |
| `MOTION_DURATION`, `MOTION_SPRING`, `STAGE_WEBGL_PARAM` | `lib/constants.ts` (exist) | Unchanged |
| Stage tuning | `lib/stage/constants.ts` (exists) | Unchanged |

## Contexts and Stores

- **No React contexts** beyond the two providers. Page-level state lives in pages or sections (`.claude/CLAUDE.md` › Pages).
- **No global store.** There is no state shared across routes that needs one (`.claude/CLAUDE.md` › State: a store needs a stated reason, and none exists).
- **State by kind:**

| State | Where |
|---|---|
| Message send lifecycle | TanStack mutation (`useSendMessage`) |
| Form field values | Uncontrolled form plus `FormData`, so values survive a no-JS post and a failed send |
| Preselected opportunity type | URL param `?type=` |
| Navigation disclosure open or closed (IC-03), media viewer open (IC-16), disclosure open (IC-18) | Local `useState` in the owning component |
| Copy feedback (IC-08) | `useCopyToClipboard` local state |
| Stage progress | gsap timeline, never React state |

## API Organisation

| Need | Mechanism | Why |
|---|---|---|
| Content reads | Direct imports from `lib/data/` in Server Components | Static content, no request at runtime |
| Message send | Server Action `lib/actions/send-message.ts` | Mutation, progressive enhancement, no public endpoint |
| Mail provider | `lib/services/mailer.ts` → Resend REST | Server-only secret |
| Backend contract (`lib/contract/`), `lib/api-client.ts`, `lib/api-server.ts`, `lib/api-routes.ts` | Exist, **unused by this product** | Preserved (see [Preserved Starter Code](#preserved-starter-code)) |

There are no route handlers under `app/api/` in v1.

## Component Organisation

Files are listed by layer from `docs/UI_LAYERS.md`. Names are working names; final names may change at build, recorded in [Phase 8](phase-8-implementation-roadmap.md). Each file maps to the sections (S-) in [Phase 5](phase-5-section-blueprints.md) and the contracts (IC-) in [Phase 6](phase-6-interaction-contracts.md). Look is decided per layer at build time under pagecraft.

| Layer | Folder | Files | Contracts | Serves |
|---|---|---|---|---|
| Primitive | `ui/` | `button.tsx`, `text-link.tsx`, `text-field.tsx`, `text-area.tsx`, `radio-group.tsx` (compound), `dialog.tsx` (compound), `disclosure.tsx` (compound), `visually-hidden.tsx`, `live-region.tsx` | IC-06, IC-07, IC-09, IC-14, IC-16, IC-18 | All |
| Brand | `brand/` | `wordmark.tsx` | IC-01 | S-01 |
| Shared composition | `common/` | `skip-link.tsx`, `external-link.tsx`, `copy-button.tsx`, `resume-link.tsx`, `json-ld.tsx`, `retry-button.tsx` | IC-02, IC-04, IC-08, IC-09, IC-15 | S-01, S-02, S-22, S-24 |
| Pattern | `patterns/` | `fact-list.tsx`, `period-label.tsx`, `status-label.tsx`, `capability-list.tsx`, `field-error.tsx` | — | S-03, S-10, S-14, S-18, S-21 |
| Mark / row / modal | `features/` | `availability-mark.tsx`, `case-study-row.tsx`, `role-row.tsx`, `education-row.tsx`, `skill-row.tsx`, `decision-row.tsx`, `channel-row.tsx`, `case-study-pager.tsx`, `media-viewer.tsx` | IC-10, IC-11, IC-16, IC-18 | S-05, S-06, S-09, S-12, S-15, S-16, S-18 to S-20, S-22 |
| Section | `sections/` | One file per section: `site-introduction.tsx` (S-03), `home-stage.tsx` (S-04), `selected-work.tsx` (S-05), `current-roles.tsx` (S-06), `home-invitation.tsx` (S-07), `work-introduction.tsx` (S-08), `case-study-list.tsx` (S-09), `case-study-overview.tsx` (S-10), `case-study-problem.tsx` (S-11), `case-study-decisions.tsx` (S-12), `case-study-outcome.tsx` (S-13), `case-study-stack.tsx` (S-14), `case-study-media.tsx` (S-15), `case-study-continue.tsx` (S-16), `profile-summary.tsx` (S-17), `experience.tsx` (S-18), `education.tsx` (S-19), `skills.tsx` (S-20), `message-composer.tsx` (S-21), `direct-channels.tsx` (S-22), `not-found-recovery.tsx` (S-23), `error-recovery.tsx` (S-24) | IC-05, IC-12, IC-13, IC-17 | S-03 to S-24 |
| Chrome | `layout/` | `site-nav.tsx` (S-01), `site-nav-disclosure.tsx` (S-01), `site-contact-path.tsx` (S-02) | IC-01, IC-02, IC-03, IC-04 | S-01, S-02 |
| Wrapper | `wrappers/` | `stage-canvas.tsx` and scene wrappers (exist), plus a new `reveal.tsx` if pagecraft calls for one | IC-12 | S-04 |
| Provider | `providers/` | `query-provider.tsx` (new), `stage-scroll-provider.tsx` (exists) | — | Root, S-04 |

**Boundaries:**

- Sections are Server Components unless they own interaction. The client sections are S-04, S-21 and S-24, and the client components are the disclosure, copy, dialog and pager controls.
- A client component receives plain serialisable props from its server parent.
- A component used by two sections moves down a layer (`.claude/CLAUDE.md` › Components).

## Shared Libraries

All of these are already in `package.json`. Under the Library Selection Policy, nothing is added without approval.

| Need | Library | Status |
|---|---|---|
| Server state, mutations | `@tanstack/react-query` | Exists |
| Validation and types | `zod` | Exists |
| UI animation | `motion` | Exists |
| Scroll narrative | `gsap`, `@gsap/react`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei`, `maath` | Exist |
| Dates | `date-fns` | Exists |
| Images | `next/image` | Framework |
| Fonts | `next/font` | Framework. Choice made at build |
| Preview images | `next/og` (`ImageResponse`) | Framework |
| Icons | **To choose at build**, one set only, under the policy (recommend and confirm) | Pending |
| Analytics | `@vercel/analytics` (cookie-free, Vercel-native) | **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1)** |
| Rate-limit store | Upstash Redis or Vercel KV | **Proposed for later, needs owner approval** |
| E2E tests | Playwright, headless only | **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1)** |
| Charts | None needed | — |

## Asset Organisation

| Asset | Path | Notes |
|---|---|---|
| Résumé (D-01) | `public/aderibigbe-emmanuel-resume.pdf` | Copied from the owner's master résumé. Its date is recorded in `profile.ts` (BR-10) |
| Headshot | `public/images/headshot.webp` | From the owner's provided image, served through `next/image` with explicit dimensions |
| Case-study media | `public/work/<slug>/` | One folder per slug. Alt text lives in the case-study data |
| Stage assets | `public/stage/home/` | Models, textures, baked data, `poster.(avif|webp)`, `fallback.(mp4|webm)`, reduced-motion still. The asset manifest lives in `docs/STAGE_BRIEF.md` |
| Icon and preview images | `app/icon.*`, `app/**/opengraph-image.tsx` | Generated per route (F-06) |
| Fonts | `next/font` | Self-hosted at build. No runtime font requests |

Files over 1 MB are rejected by CI. Large stage assets go through Git LFS or are kept under the limit by compression (`@gltf-transform/cli` is already a dev dependency).

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component file | kebab-case, matching the export | `case-study-row.tsx` → `CaseStudyRow` |
| Hook | `use-<resource>.ts` | `use-send-message.ts` |
| Server Action | verb-noun | `send-message.ts` → `sendMessage` |
| Selector | `get-<thing>.ts` | `get-featured-case-studies.ts` |
| Service | noun | `mailer.ts`, `logger.ts`, `rate-limit.ts` |
| Schema | `<thing>Schema` | `caseStudySchema`, `messageSchema` |
| Type | PascalCase from `z.infer` | `CaseStudy` |
| Constant | SCREAMING_SNAKE | `RESUME_PATH` |
| Route builder | camelCase function | `workRoute(slug)` |
| Slug | kebab-case | `client-education-platform` |
| Test | colocated `<file>.test.ts` | `get-case-study.test.ts` |
| Section ↔ ID | The file is named after the section's job. This table maps it to its S- ID | `case-study-decisions.tsx` = S-12 |

## Code Splitting and Lazy Loading

| What | How |
|---|---|
| Per route | The App Router splits by segment by default. Non-Home routes never pull stage code |
| Home stage (S-04) | `next/dynamic(..., { ssr: false })` from `sections/home-stage.tsx`. The poster renders on the server in the slot first. The canvas, three, gsap and lenis load only on P-01, after the first paint, and only on the real-time paths |
| Stage path choice | Decided on the client before loading the heavy chunk: reduced motion → still; no WebGPU or WebGL, or a low-power signal → video fallback; otherwise real-time. The video loads lazily with `preload="none"` until it is near the viewport |
| Stage assets | Fetched by the stage after mount, never in the HTML |
| Media viewer (IC-16) | Dynamically imported on first open |
| Message composer (S-21) | Client island on P-05 only |
| Analytics | Loaded after hydration (when approved) |
| Images | `next/image` with `loading="lazy"` below the first view. `priority` only for the LCP image (the headshot on P-04, the poster on P-01) |

## Performance Strategy

**Budgets** (Phase 1 › KPIs). These are checked in QA ([Phase 9](phase-9-qa-checklist.md)).

| Metric | Budget | Measured on |
|---|---|---|
| LCP | ≤ 2.5 s | Phone, 4G, every route |
| CLS | < 0.1 | Every route |
| INP | < 200 ms | Every route |
| JS on non-Home routes | Small: framework plus the route's islands only. No stage, three or gsap code | Build output |
| Stage | Off the critical path; LCP is never the canvas | P-01 |

**Tactics:**

1. Static generation everywhere (`generateStaticParams`, no runtime data fetching).
2. Server Components by default. Client islands only where a contract needs one.
3. Facts are server-rendered text (BR-12), so the stage can't delay them.
4. The stage renders only while it is visible (`stage-canvas.tsx` already gates on `IntersectionObserver`), adapts DPR through `PerformanceMonitor`, and uses `frameloop="demand"` under reduced motion.
5. Every image and media slot has its size reserved (CLS).
6. Fonts are self-hosted with `next/font`, subset, with `display: swap`.
7. Long cache headers on hashed assets and on `public/stage/home/` versioned filenames.

## Testing Organisation

| Layer | Tool | Scope |
|---|---|---|
| Data schemas | vitest (exists) | Every `lib/data/*` file parses. BR-02, BR-03, BR-04, BR-06, BR-09 (shape), BR-11 |
| Selectors | vitest | Adjacency wraps or ends correctly, featured fallback, evidence resolution |
| Message | vitest | Schema edges, honeypot and fill time, rate-limit window, mailer failure mapping, never `ok` without a 2xx (BR-07) |
| Stage | vitest (existing tests in `lib/stage/`) | Script compiles. Every actor and layer named in `lib/home/script.ts` exists |
| ESLint rules | vitest (exist) | Unchanged |
| E2E | Playwright, headless | **Approved by owner 2026-11-21; installed 2026-11-22 (`@vercel/analytics` 2.0.1, `@playwright/test` 1.65.1).** Covers F-01 to F-05, F-09 and the no-JS message post |

Heavy runs follow the owner's machine rule: one heavy job at a time, after checking load.

## Preserved Starter Code

These are not part of this product's flows. They stay untouched (Scope Preservation; `.claude/CLAUDE.md` rule 6):

- `proxy.ts` and its tests, `PROTECTED_ROUTE_PREFIXES`, `LOGIN_ROUTE`, and session cookie constants.
- `lib/api-client.ts`, `lib/api-server.ts`, `lib/api-routes.ts`, `lib/utils/session.ts`, `lib/utils/verify-session-token.ts`.
- `lib/contract/` (generated; never edited), `lib/actions/create-user.ts`, auth hooks, `lib/validations/auth.ts`.
- `tools/` (ESLint rules, codemods, contract generator).

`proxy.ts` matches every path. With no session cookie and no protected route in this product, it passes every request through. QA confirms it adds no redirect to P-01 to P-07.
