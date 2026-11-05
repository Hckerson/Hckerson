# hckerson.com

Personal portfolio — site content (projects, skills, work history, education,
pricing) and SEO metadata routes.

This branch has no UI: no pages, components, styles, fonts or images. It is a
Next.js 16 (App Router) + TypeScript shell around the content, ready for a new
front end.

## Requirements

- Node.js 20+
- pnpm 10+ (the repo has a `pnpm-lock.yaml`; other package managers will drift)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:4004 — serves /robots.txt and /sitemap.xml only
```

## Scripts

| Script              | Does                                       |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Dev server on port 4004                    |
| `pnpm build`        | Production build                           |
| `pnpm start`        | Serve the production build                 |
| `pnpm lint`         | ESLint (flat config, `eslint-config-next`) |
| `pnpm lint:fix`     | ESLint with `--fix`                        |
| `pnpm typecheck`    | `tsc --noEmit`                             |
| `pnpm format`       | Prettier write                             |
| `pnpm format:check` | Prettier check                             |

Before pushing, `pnpm lint && pnpm typecheck && pnpm build` should all pass.

## Environment

| Variable               | Required   | Purpose                                          |
| ---------------------- | ---------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | production | Absolute base for `sitemap.xml` and `robots.txt` |

Without it, `siteConfig.url` falls back to `http://localhost:4004`, which is
fine locally but emits a wrong `sitemap.xml` if deployed. Set it to the
deployed origin, e.g. `https://hckerson.com`.

## Layout

```
app/                 robots.ts, sitemap.ts — metadata routes only
lib/
  constant.ts        siteConfig (name, email, socials, URL), showPricing
  data/              site content (projects, skills, work history, education, pricing)
  interface.ts       content shapes
  types.ts           shared unions
```

## Conventions

- **Content lives in `lib/data/mapped-data.ts`.** `sitemap.xml` derives its
  `/projects/[id]` entries from `projects`.
- `workExperience` entries carry a `kind` of `"employment"` or
  `"personal-project"` — keep personal work out of the `"employment"` bucket.

## Notes

- `app/sitemap.ts` still lists `/`, `/projects` and `/projects/[id]` (plus
  `/pricing` when `showPricing` is on). Those pages are not on this branch, so
  every URL in the sitemap 404s until a front end is added back.
