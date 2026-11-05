# Motion

A duration or easing used in more than one place is a `--motion-*` token in `app/globals.css`. A value used once stays a plain Tailwind utility.

## Tokens

| Token    | CSS                      | Value                         | Used by                  |
| -------- | ------------------------ | ----------------------------- | ------------------------ |
| Base     | `--motion-duration-base` | 300ms                         | Accordion open and close |
| Ease out | `--motion-ease-out`      | `cubic-bezier(0, 0, 0.58, 1)` | Accordion open and close |

## Using them

- Tailwind: `duration-(--motion-duration-base) ease-(--motion-ease-out)`.
- Keyframe animations: a `--animate-*` entry in `@theme inline` built from the tokens, as `--animate-accordion-down` is.
- Animate only `transform`, `opacity` and `clip-path`. Height is the one exception, for accordions.
- Nothing bounces, nothing moves linearly.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- No scroll scrubbing, no loops, no autoplay. Show the end state.
- Transitions on colour and opacity stay; transforms go.
- Tailwind: `motion-safe:` and `motion-reduce:` variants.
