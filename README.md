# hckerson.com

Personal portfolio site — projects, pricing and background.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Requirements

- Node.js 20+
- pnpm 10+ (the repo has a `pnpm-lock.yaml`; other package managers will drift)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:4004
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

| Variable               | Required   | Purpose                                                        |
| ---------------------- | ---------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | production | Absolute base for canonical URLs, OpenGraph images and sitemap |

Without it, `siteConfig.url` falls back to `http://localhost:4004`, which is
fine locally but emits unusable share URLs and a wrong `sitemap.xml` if
deployed. Set it to the deployed origin, e.g. `https://hckerson.com`.

## Layout

```
app/                 routes, layout, globals.css, sitemap/robots/icon
components/
  app-layout.tsx     <body>, navbar, footer
  sections/          homepage sections
  ui/                buttons, cards, navbar, footer, brand icons
hooks/               useTheme, useMediaQuery
lib/
  constant.ts        siteConfig — name, email, socials, URL
  data/              site content (projects, skills, work history, pricing)
  fonts.ts           Clash Display via next/font/local
  interface.ts       content shapes
  types.ts           shared unions
  utils.ts           cn() — clsx + tailwind-merge
public/              images and fonts only, no source
```

## Conventions

- **Content lives in `lib/data/mapped-data.ts`.** Adding a project there is
  enough — `/projects`, the homepage section and the prerendered
  `/projects/[id]` pages all derive from it via `generateStaticParams`.
- **Styling** uses the design tokens in `app/globals.css` (`--surface-*`,
  `--text-*`, `--accent-*`) exposed as Tailwind utilities through
  `@theme inline`. Prefer those over raw colours.
- **Type scale** uses the `xs-text` … `xxlarge-text` helper classes rather than
  per-breakpoint `text-[Npx]` chains.
- **Display font** is the `font-clash` utility, not an import of the font
  object.
- **Merging classes** goes through `cn()` so caller overrides win.
- **Icons** come from `lucide-react`. Brand marks (GitHub, X) live in
  `components/ui/brand-icons.tsx` — lucide has deprecated its brand icons and
  will remove them in v1.0.
- **Theme** is applied to `<html>` pre-paint by an inline script in
  `app/layout.tsx`; `useTheme` treats that class as the source of truth.

## Notes

- `/blog` is a placeholder: no posts, unlinked from the navbar, `noindex`, and
  excluded from the sitemap. The `articles` array in `mapped-data.ts` is sample
  content and is not rendered.
- `education` and `certifications` in `mapped-data.ts` are populated but not
  yet surfaced anywhere.
