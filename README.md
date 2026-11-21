# hckerson.com

Personal portfolio: site content (projects, skills, work history, education,
pricing) and SEO metadata routes, on the current Next.js App Router starter.

There are no pages yet. The starter's architecture, skills (pagecraft for UI,
stagecraft for a motion-led landing page) and lint rules are in place, ready
for a new front end.

## Requirements

- Node.js 20+
- pnpm 10+ (the repo has a `pnpm-lock.yaml`; other package managers will drift)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:4004 serves /robots.txt and /sitemap.xml only
```

## Scripts

| Script                | Does                                              |
| --------------------- | ------------------------------------------------- |
| `pnpm dev`            | Dev server on port 4004                           |
| `pnpm build`          | Production build                                  |
| `pnpm start`          | Serve the production build                        |
| `pnpm type-check`     | `tsc --noEmit`                                    |
| `pnpm lint`           | ESLint, including the starter's rules in `tools/` |
| `pnpm lint:fix`       | ESLint with `--fix`                               |
| `pnpm test`           | Vitest                                            |
| `pnpm contract`       | Generate `lib/contract/` from the backend OpenAPI |
| `pnpm contract:check` | Check the contract is current                     |
| `pnpm format`         | Prettier write                                    |
| `pnpm format:check`   | Prettier check                                    |

No git hooks run. Before committing: `pnpm type-check`, `pnpm lint`, `pnpm contract:check`.

## Environment

| Variable               | Required   | Purpose                                          |
| ---------------------- | ---------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | production | Absolute base for `sitemap.xml` and `robots.txt` |

Without it, `SITE_CONFIG.url` falls back to `http://localhost:4004`, which is
fine locally but emits a wrong `sitemap.xml` if deployed. Set it to the
deployed origin, e.g. `https://hckerson.com`. The starter's other variables are
in `.env.example`.

## Layout

```
app/                    robots.ts, sitemap.ts, root layout
lib/
  constants.ts          SITE_CONFIG (name, email, socials, URL), SHOW_PRICING
  data/portfolio.ts     site content (projects, skills, work history, education, pricing)
  types/portfolio.ts    content shapes and unions, re-exported from lib/types
styles/tokens.css       design tokens, empty until the design is chosen
```

The rest of the layout and every convention are in `.claude/CLAUDE.md`.

## Content conventions

- **Content lives in `lib/data/portfolio.ts`.** `sitemap.xml` derives its
  `/projects/[id]` entries from `projects`.
- `workExperience` entries carry a `kind` of `"employment"` or
  `"personal-project"`. Keep personal work out of the `"employment"` bucket.
- `Education.end` is the graduation year, or the expected one while
  `inProgress` is true.
- `SHOW_PRICING` is `false` while applying for roles: a rate card reads as
  "wants clients, not a job" to a recruiter. Set it to `true` to put `/pricing`
  back in the sitemap.

## Notes

- `app/sitemap.ts` lists `/`, `/projects` and `/projects/[id]` (plus `/pricing`
  when `SHOW_PRICING` is on). Those pages don't exist yet, so every URL in the
  sitemap 404s until the front end is built.
