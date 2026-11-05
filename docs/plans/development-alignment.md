# Plan — Bring `development` in line with `.claude/CLAUDE.md`

Written against `development` @ `2e9977e` · 2026-11-05 · Status: Done. Executed in `9476bc0`, `158419a`, `e183736`, `d6c61df`, `c2b6851`, the Tekcify entry (D8) and the PDF fixes; verified by the gate and in the browser. The branches were then swapped, so this work now lives on `master`.

## 1. Thesis / Problem Framing

`development` now carries rules it does not yet meet: the resume feature merged at 13:16 cannot compile, and a handful of older files break rules the new `CLAUDE.md` states — so fix the build first, then make the rules true, then make the skill whole.

| Layer     | Question it answers                                        | Primary artifact                                  |
| --------- | ---------------------------------------------------------- | ------------------------------------------------- |
| Build     | Does `development` type-check, lint and build?             | `package.json`, the three resume files            |
| Content   | Is there exactly one source for every fact about Hckerson? | `lib/data/mapped-data.ts`, `lib/constant.ts`      |
| Structure | Does every file sit where `CLAUDE.md` says and do one job? | `components/`, `lib/`, `app/projects/page.tsx`    |
| Skill     | Can `cinematic-web` run its whole workflow here?           | `.claude/skills/cinematic-web/`, `docs/MOTION.md` |
| Rules doc | Does `CLAUDE.md` describe the tree as it is?               | `.claude/CLAUDE.md`                               |

## 2. The Canonical Atom (Data Contract)

### The tracked item

```ts
/** One left item, tracked from finding to done. */
interface LeftItem {
    id: `L${number}`;
    value: string; // the change, in one line
    status: "open" | "your-call" | "deferred" | "done";
    evidence: string[]; // file:line proving the gap, then the commit that closes it
    confidence: "read" | "checked"; // read = from source only; checked = gate or browser run
}
```

Invariants:

- An item reaches `done` only with its closing commit in `evidence`.
- `checked` needs the gate (`pnpm lint`, `pnpm typecheck`, `pnpm build`) or a browser run, and those run only on your go-ahead. Until then a phase reports **Not verified**.
- A `your-call` item does not start until §10 is answered.

### The register

| Id  | Item                                                                              | Evidence                                                                           | Phase                    |
| --- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| L1  | `@react-pdf/renderer` and `file-saver` imported but not declared                  | `lib/generate-resume.tsx:2-3`, `components/resume-pdf.tsx:1-9`                     | 0                        |
| L2  | `useToast()` called but defined nowhere                                           | `components/resume-section.tsx:116`                                                | 0                        |
| L3  | Unused `motion`, `Briefcase`, `Font` imports and caught `error`                   | `resume-section.tsx:3,6,169`, `resume-pdf.tsx:7`                                   | 0                        |
| L4  | Resume files not Prettier-formatted (tabs, 2-space)                               | the three resume files                                                             | 0                        |
| L5  | Skill reference files missing                                                     | `.claude/skills/cinematic-web/references/`                                         | 1                        |
| L6  | `docs/MOTION.md` missing                                                          | `techniques.md:84`                                                                 | 1                        |
| L7  | Motion library undecided: `framer-motion` imported, `motion` assumed by the skill | `resume-section.tsx:3`, `techniques.md:31-42`                                      | 1                        |
| L8  | Resume content duplicated and divergent; `ResumeData` declared twice              | `resume-section.tsx:11-112,121-163`, `generate-resume.tsx:6`, `resume-pdf.tsx:130` | 2                        |
| L9  | `lib/` imports a component; `as any`; `console.error`                             | `generate-resume.tsx:4,61,65`                                                      | 3                        |
| L10 | Resume section renders an empty `<section>` and no page imports it                | `resume-section.tsx:181-188`                                                       | 3                        |
| L11 | Files over ~150 lines                                                             | `resume-pdf.tsx` 375, `resume-section.tsx` 189, `app/projects/page.tsx` 175        | 3, 4                     |
| L12 | Route paths repeated as literals, including the footer-gate list                  | 12 lines in 8 files                                                                | 5                        |
| L13 | Relative imports                                                                  | 13 imports in 10 files                                                             | 5                        |
| L14 | `clsx` imported directly instead of `cn()`                                        | 5 files                                                                            | 5                        |
| L15 | `CLAUDE.md` does not cover the resume feature or the folders this plan adds       | `.claude/CLAUDE.md`                                                                | every phase, closed in 6 |

Removed from the earlier list: the footer's social links. They read from `siteConfig` and render nowhere else, so they break no rule.

### The resume contract

```ts
// lib/interface.ts — the only declaration
export interface ResumeData {
    profile: Pick<
        typeof siteConfig,
        | "legalName"
        | "name"
        | "email"
        | "location"
        | "github"
        | "linkedin"
        | "twitter"
        | "url"
    > & { phone?: string };
    summary: string;
    experience: WorkExperience[];
    education: Education[];
    certifications: Certification[];
    skills: Skill["name"][];
    projects: PortfolioProject[];
    languages: string[];
    awards: Award[];
    interests: string[];
}

export interface Award {
    name: string;
    year: string;
    description?: string;
}
```

Invariants:

- Every value is read from `siteConfig` or an existing `lib/data` array. The only new content is `languages`, `awards`, `interests` and the summary, moved verbatim from the current resume copy.
- Experience keeps `kind`; the PDF labels personal projects as such, the same way the site does.
- Education renders `start`–`end` (or "Expected `end`" while `inProgress`), derived in the PDF, never stored twice.
- `ResumeData` is declared once. Everything that needs it imports it.

## 3. Atomic UI Hierarchy (`Page → Section → Component → Token`)

```
/ (app/page.tsx)
  Hero → About → Projects → Skills → Qualification → Education → Resume   ← new placement
/projects (app/projects/page.tsx)                                          ← state only after the split
  ProjectBackdrop · ProjectRail · ProjectDetail · ProjectCarousel
/resume.pdf (app/resume.pdf/route.ts)                                      ← new, if §10 D1 is accepted
  ResumePdf → PdfSection × n
```

| Component                                                      | Role                                                           | Reads                                             |
| -------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| `ResumeSection` (`components/sections/resume-section.tsx`)     | Heading, one line, a Download button pointing at `/resume.pdf` | `routes.resume`                                   |
| `ResumePdf` (`components/resume/resume-pdf.tsx`)               | The PDF document: page, header, sections in order              | `ResumeData`                                      |
| `PdfSection` (`components/resume/pdf-section.tsx`)             | Section title plus children; every PDF section is built on it  | `pdfStyles`                                       |
| `pdfStyles` (`components/resume/pdf-styles.ts`)                | The `StyleSheet`, moved out of the document                    | —                                                 |
| `ProjectBackdrop` (`components/projects/project-backdrop.tsx`) | Full-bleed image swiper behind the page                        | `projects`, `isMobile`, `onSwiper`                |
| `ProjectRail` (`components/projects/project-rail.tsx`)         | Numbered step rail                                             | `projects`, `currentId`                           |
| `ProjectDetail` (`components/projects/project-detail.tsx`)     | Title, description, mobile calls to action                     | `currentProject`, `contactHref`, `routes.project` |
| `ProjectCarousel` (`components/projects/project-carousel.tsx`) | Autoplay card carousel that drives the page                    | `projects`, `isMobile`, `onSlideChange`           |

Shared atoms, reused rather than rebuilt: `Button` (already supports `href`), `ProjectCard`, `cn()`, `xxlarge-text` / `sm-text`, `font-clash`, the `accent-*` and `surface-*` tokens.

## 4. Pipeline Architecture ("Deterministic Spine, AI Skin")

The resume pipeline, end to end:

```
lib/constant.ts ── siteConfig (+ phone, if published) ──┐
lib/data/mapped-data.ts ── workExperience, education,    ├─► resumeData : ResumeData
   certifications, skills, projects, languages,          │        (lib/data, assembled once)
   awards, interests, resumeSummary ─────────────────────┘
                                                              │
                     build time (force-static)                ▼
app/resume.pdf/route.ts ── renderToBuffer(ResumePdf) ──► application/pdf, cached
                                                              │
components/sections/resume-section.tsx ── <Button href={routes.resume} download> ◄── visitor
```

The work itself splits the same way:

| Spine (deterministic, verified by grep or the gate)                  | Skin (judgment, verified by review or a browser check)                  |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Adding packages, fixing imports, `clsx` → `cn()`, the `routes` sweep | Where the PDF and the projects page split into components               |
| Formatting with Prettier                                             | The resume section's layout                                             |
| Moving content verbatim into `lib/data`                              | Motion token values in `docs/MOTION.md`                                 |
| Deleting the duplicate `ResumeData` and inline arrays once moved     | Which copy wins where the resume and the site disagree → **you decide** |

Boundary: judgment never writes copy. Where texts disagree, the plan lists both and you choose.

## 5. Minimal Additive Data Model

| Layer                     | Change                                                                                                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package.json`            | + `@react-pdf/renderer`; + `file-saver`, `@types/file-saver` in Phase 0, removed in Phase 3 if D1 is accepted; + `motion` when first used                                                                                                                       |
| `lib/interface.ts`        | + `ResumeData`, + `Award`                                                                                                                                                                                                                                       |
| `lib/data/mapped-data.ts` | + `languages`, `awards`, `interests`, `resumeSummary`, + `resumeData` assembled from the existing arrays                                                                                                                                                        |
| `lib/constant.ts`         | + `routes` (`home`, `projects`, `project(id)`, `pricing`, `resume`), + `footerHiddenRoutes`, + projects-page constants (`MOBILE_QUERY`, `PROJECTS_AUTOPLAY_MS`), + motion constants (`MOTION_DURATION`, `SCENE_SPRING`), + `siteConfig.phone` only if published |
| `app/globals.css`         | + `--duration-*` and `--ease-*` tokens; the accordion animations move onto them                                                                                                                                                                                 |
| `app/`                    | + `resume.pdf/route.ts`                                                                                                                                                                                                                                         |
| `components/`             | + `resume/`, `projects/`; `resume-section.tsx` moves into `sections/`                                                                                                                                                                                           |
| `docs/`                   | + `MOTION.md`, `plans/`                                                                                                                                                                                                                                         |
| `.claude/`                | references restored (if D3 is accepted); folder table updated each phase                                                                                                                                                                                        |

What does **not** change: the shapes of `PortfolioProject`, `WorkExperience`, `Education`, `Certification` and `Skill`; project ids and every URL; the theme script and `useTheme`; colour tokens; site metadata and the sitemap's output; the nav data holding icon components; `master`; next-setup.

## 6. Security & Limits Threat Model

| Area             | Rule                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Personal data    | Everything in `ResumeData` is public: the PDF is served to anyone. The phone number goes in only if you say so (D2). Email and links are already public on the site.                       |
| Bundle weight    | `@react-pdf/renderer` never reaches the browser on the recommended path: it runs in the route at build time. On the client-side path it loads only on click, through a dynamic `import()`. |
| Dependencies     | Only the packages named in §5. `pnpm-lock.yaml` changes in the same commit as `package.json`.                                                                                              |
| Copy             | No generated or invented content. Resume text comes only from `lib/data` and `siteConfig`.                                                                                                 |
| Links in the PDF | Built from `siteConfig`, with no tracking parameters.                                                                                                                                      |
| Checks           | The gate and the dev server run only on your go-ahead.                                                                                                                                     |
| Branches         | All work on `development`. Nothing is pushed without asking.                                                                                                                               |

## 7. Vertical-Slice Build Order

**Phase 0 — Build green** (L1–L4)

- `pnpm add @react-pdf/renderer file-saver` and `pnpm add -D @types/file-saver`.
- `resume-section.tsx`: drop the unused `motion` and `Briefcase` imports; replace `useToast` with a local status state shown under the button; `catch (error)` → `catch`.
- `resume-pdf.tsx`: drop the unused `Font` import.
- Prettier on the three resume files.

**Exit criteria:** `pnpm typecheck`, `pnpm lint` and `pnpm build` pass on your go-ahead, with no change outside these three files and `package.json` / `pnpm-lock.yaml`.

**Phase 1 — Skill whole** (L5–L7)

- Restore the four reference files from next-setup's last commit (D3).
- Write `docs/MOTION.md`: duration and easing tokens in `app/globals.css`, their TypeScript mirrors in `lib/constant.ts`, the spring for scroll scenes, the reduced-motion policy. Move the accordion animations onto the tokens.
- Record the motion library choice (D4) in `CLAUDE.md`; install it when first used.

**Exit criteria:** every path the skill names resolves here or is mapped in `CLAUDE.md`; `git status` shows the reference files tracked.

**Phase 2 — One source for resume content** (L8)

- List every place the resume copy and `mapped-data.ts` disagree (education text, project names, job details) for you to settle.
- Add `ResumeData` and `Award` to `lib/interface.ts`; add `languages`, `awards`, `interests`, `resumeSummary` and `resumeData` to `mapped-data.ts`, verbatim.
- Delete the inline arrays from `resume-section.tsx` and both local `ResumeData` declarations — they are now duplicates, not features.

**Exit criteria:** a search for resume content outside `lib/data` and `siteConfig` returns nothing; `ResumeData` is declared once.

**Phase 3 — Resume delivery and UI** (L9–L11)

- Split `resume-pdf.tsx` into `components/resume/` (`resume-pdf.tsx`, `pdf-section.tsx`, `pdf-styles.ts`, one file per PDF section); every file stays under 150 lines.
- Add `app/resume.pdf/route.ts`: static, renders `ResumePdf` with `resumeData`, returns `application/pdf`.
- Rebuild `ResumeSection` in `components/sections/` as a download link to `routes.resume`; render it after Education on the homepage.
- Delete `lib/generate-resume.tsx` and remove `file-saver` — the route now does the generator's job.

**Exit criteria:** `/resume.pdf` downloads a PDF whose jobs, education and projects match the site; the homepage's client JavaScript does not include `@react-pdf/renderer`; gate green on your go-ahead.

**Phase 4 — Projects page split** (L11)

- Move the four JSX blocks into `components/projects/`; the page keeps `currentProject`, the controlled swiper and `isMobile`, nothing else.
- Move the media query and autoplay delay into `lib/constant.ts`.

**Exit criteria:** `page.tsx` under 60 lines; no file over 150; the backdrop still follows the carousel at 1440×900 and 390×844 (browser check on your go-ahead).

**Phase 5 — Rule sweep** (L12–L14)

- Add `routes` and `footerHiddenRoutes` to `lib/constant.ts`; replace the 12 route literals in 8 files (metadata `canonical` values, links, sitemap, nav data, footer gate).
- Rewrite the 13 relative imports to `@/`.
- Swap direct `clsx` for `cn()` in the 5 files.

**Exit criteria:** relative imports return nothing in a search; `clsx` is imported only by `lib/utils.ts`; `"/projects"` and `"/pricing"` appear only in `lib/constant.ts`.

**Phase 6 — Rules doc final pass** (L15)

- `CLAUDE.md` folder table lists `components/resume`, `components/projects`, `app/resume.pdf` and `docs/`; rule 1 names `routes`.

**Exit criteria:** every path `CLAUDE.md` names exists, and every top-level folder appears in its table.

## 8. Differentiator Matrix

| Idea                                    | Impact | Effort | Notes                                                                                                                                 |
| --------------------------------------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Static `/resume.pdf` route              | High   | Medium | A stable link recruiters can open or bookmark, no client JavaScript, cached at build. Replaces the client generator and `file-saver`. |
| Resume generated from site content      | High   | Medium | The PDF can never drift from the site again; editing `mapped-data.ts` updates both.                                                   |
| `motion` instead of `framer-motion`     | Medium | Low    | Same library under its current name; what next-setup and `cinematic-web` use.                                                         |
| `routes` helper with `project(id)`      | Medium | Low    | One place for every URL the site links to.                                                                                            |
| Résumé link in the navbar               | Medium | Low    | One `navlinks` entry once the route exists.                                                                                           |
| Native download instead of `file-saver` | Low    | Low    | Only relevant if the client-side path is kept.                                                                                        |

Recommended: the **static `/resume.pdf` route** and **resume generated from site content**. Together they turn a broken, duplicated feature into a single URL fed by the content that already drives the site.

## 9. Risks & Mitigations Register

| Risk                                                      | Mitigation                                                                                                                                                       |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@react-pdf/renderer` fails in a Next.js 16 route handler | Pin a 4.x release that supports React 19; add it to `serverExternalPackages` in `next.config.js`; fall back to client-side generation with a dynamic `import()`. |
| The resume copy and the site disagree on facts            | Phase 2 lists every difference for you before anything is deleted; the site's data wins unless you say otherwise.                                                |
| The projects split breaks the two-swiper sync             | State stays in the page and only JSX moves; compare before and after at both sizes.                                                                              |
| The `routes` sweep misses a literal                       | The Phase 5 exit search is the check.                                                                                                                            |
| The reference files disappear again                       | Commit them in the same step as the restore and confirm with `git status`.                                                                                       |
| Exit criteria can't be confirmed without running checks   | Each phase reports **Not verified** until you say run.                                                                                                           |

## 10. Recommendation & Open Decisions

Start **Phase 0** now: it is small and unblocks the gate. Then run Phases 2 and 3 together as one resume slice, then 4 and 5. Phase 1 can go at any point, and Phase 6 closes the plan.

Decisions (outcome after "→"):

1. **D1 — Resume delivery.** Static `/resume.pdf` route (recommended) or client-side generation as written. The second keeps `file-saver` and adds `hooks/useResumeDownload.ts` with a dynamic import. → Static route.
2. **D2 — Phone number.** Publish it in the PDF, or leave it out. → Left out: no recommendation was given, and leaving it out is the reversible choice.
3. **D3 — Skill references.** Restore all four from next-setup's last commit (recommended: the fingerprint gate and the reference template depend on them), or leave them out. → Superseded: next-setup dropped three of them on purpose in `4853646` at 13:12; hckerson matches it and keeps only `_template.md`.
4. **D4 — Motion library.** `motion` (recommended) or `framer-motion`. → `motion`, recorded in `CLAUDE.md` and `docs/MOTION.md`; installed with its first consumer.
5. **D5 — Resume placement.** Homepage after Education (recommended), a navbar link, or both. → Homepage after Education.
6. **D6 — New folders.** `components/resume/` and `components/projects/` as named here, or other names. → As named.
7. **D7 — Content conflicts.** The site's data wins (recommended), or you settle each one in Phase 2. → The site's data won.
8. **D8 — Tekcify role.** The old resume copy listed "Full Stack Developer, Tekcify, Remote, 2024 – Present"; the site's data never had it. Adding it to `workExperience` puts it on both the site and the PDF. → Added, from the old copy verbatim. Skills and achievements were never written for it, so the qualification card now hides empty lists.
