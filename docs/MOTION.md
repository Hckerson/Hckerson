# Motion

Every duration and easing on the site is a token. CSS reads the `--motion-*` custom properties in `app/globals.css`; TypeScript reads their mirrors in `lib/constant.ts`. Change a value in both places in the same commit.

## Library

`motion`, imported from `motion/react`. Never `framer-motion` — it is the same library under its old name. Install it with the first component that animates through it; CSS transitions need nothing.

## Tokens

| Token        | CSS (`app/globals.css`)  | TypeScript (`lib/constant.ts`) | Value                         | Use                                                                           |
| ------------ | ------------------------ | ------------------------------ | ----------------------------- | ----------------------------------------------------------------------------- |
| Fast         | `--motion-duration-fast` | `MOTION_DURATION.fast`         | 150ms                         | Colour and opacity on hover or focus                                          |
| Base         | `--motion-duration-base` | `MOTION_DURATION.base`         | 300ms                         | Disclosure: accordions, menus, small reveals                                  |
| Slow         | `--motion-duration-slow` | `MOTION_DURATION.slow`         | 500ms                         | State changes the eye should follow: the project rail, a card coming forward  |
| Ease out     | `--motion-ease-out`      | `MOTION_EASE.out`              | `cubic-bezier(0, 0, 0.58, 1)` | Anything entering or growing                                                  |
| Ease in      | `--motion-ease-in`       | `MOTION_EASE.in`               | `cubic-bezier(0.42, 0, 1, 1)` | Anything leaving or shrinking                                                 |
| Scene spring | —                        | `SCENE_SPRING`                 | stiffness 70, damping 24      | Scroll progress for scroll-driven scenes; stiffer reads as the wheel stepping |

The TypeScript mirrors are added to `lib/constant.ts` with their first consumer, at the values above: `MOTION_DURATION` in seconds (`{ fast: 0.15, base: 0.3, slow: 0.5 }`), `MOTION_EASE` as cubic-bezier arrays (`{ out: [0, 0, 0.58, 1], in: [0.42, 0, 1, 1] }`).

## Using them

- Tailwind: `duration-(--motion-duration-fast) ease-(--motion-ease-out)`.
- Keyframe animations: a `--animate-*` entry in `@theme inline` built from the tokens, as `--animate-accordion-down` is.
- `motion`: `transition={{ duration: MOTION_DURATION.base, ease: MOTION_EASE.out }}`; scroll scenes pass `SCENE_SPRING` to `useSpring`.
- Animate only `transform`, `opacity` and `clip-path`. Height is the one exception, for accordions.
- Nothing bounces, nothing moves linearly.

Existing utilities that predate the tokens (`duration-150 ease-in` on `Button`, `duration-500 ease-out` on the project rail) move onto them the next time their motion changes.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- No scroll scrubbing, no loops, no autoplay. Show the end state.
- Transitions on colour and opacity stay; transforms go.
- Tailwind: `motion-safe:` and `motion-reduce:` variants. `motion`: `useReducedMotion()`.
