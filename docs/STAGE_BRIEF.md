# Stage brief: Hckerson portfolio, home (P-01, S-04)

Stagecraft's record of the stage. Type, tokens, primitives and chrome are in `docs/DESIGN_BRIEF.md`; this brief hands it only the tones and copy slots below. Anything undecided is **open**.

## Truth sheet

| Line | Answer |
| ---- | ------ |
| What it is | A full-stack engineer who ships payments, identity and verification systems in production, and writes down why each decision was made |
| What it replaces | The résumé line skimmed in six seconds, and the GitHub profile of clones |
| The moment of use | A recruiter or engineering lead deciding, in under a minute, whether to read further |
| The moment of action | Opening a case study, taking the résumé, sending a message |
| The feeling it leaves | "This person makes the decisions I would want made, and can explain them" |

## Concept

- **Draw:** `node .claude/skills/stagecraft/tools/draw.mjs --sector "Consulting" --kind service`, first deal, Concept 1. The first draw ran with the default kind `physical`, which does not fit a person selling engineering services; the kind is a fact about the client, so it was re-dealt once and the first deal taken. Approved by the owner on 2026-11-22.
- **Logline:** Layers are stripped away until the one true thing is left.
- **Fails if:** the peeling reads as a generic page-turn effect and the surviving lines are not real decisions.
- **Swap test:** passes. Every surviving line is the owner's own decision or result (`lib/data`); another engineer's name makes them false.
- **From the owner's idea:** "people see it and feel the need to hire me". Kept: what survives the stripping is the hiring evidence, and the film ends with the résumé in the slot and the message action.

| Axis | Value | Bound to which truth line |
| ---- | ----- | ------------------------- |
| Arc | reveal-by-removal | What it replaces: the boilerplate is removed until the evidence is left |
| Actor | tool: the printed record | What it is: decisions written down |
| Destination | slot: a filing slot | The moment of action: the résumé is taken |
| Camera | cut-edit | The moment of use: a reader skipping to what matters |
| Time | slow-motion | The feeling: unhurried, considered |
| Set | print-catalogue | The world: the printed page |
| Signature | rack-focus-reveal | What it is: focus lands on the one decision line |

## World rules

| Rule | Decision | Source, or the reason for departing |
| ---- | -------- | ----------------------------------- |
| Material | Uncoated paper sheets printed in carbon ink with rubric headings | The decision record as a printed report |
| Light | None cast. The bed is lit evenly; depth comes from overlap and registration | The print-catalogue set's rule. An earlier pitch to the owner named a raking window light; it was withdrawn because it breaks the set |
| Lens | A fixed, flat, near-orthographic view. Focus racks between overlapping sheets, a shallow depth across the stack only | The set's fixed flat view; the signature needs a focus plane |
| Time | Slow motion: sheets fold and settle at a reader's pace | The feeling line |
| Ground | A press bed of book stock, changing to the blotter tone for the two records and to ink for the slot | The set's rule: paper stock changes between spreads |

## Actors

| Actor | States | Parts named for verbs | Real size | Asset tier |
| ----- | ------ | --------------------- | --------- | ---------- |
| `stack` | Present, stripped | Sheets | A4 stack, about 4cm | **open** (Sprint 3 look development) |
| `boilerplate` | Flat, folded back, gone | One hinge at the top edge | A4 sheets | **open** |
| `draft` | Present, gone | None | A4 sheet | **open** |
| `keyhold-record` | Arriving, in focus, leaving | None | A4 sheet | **open** |
| `vouchmark-record` | Draft ink, rubric ink | Stamp plate | A4 sheet | **open** |
| `resume` | Flat, lifted, in the slot | None | A4 sheet | **open** |

All text on a sheet is DOM tracked to its surface, never baked into a texture. Sheet copy comes from `lib/data`.

## Shot list

The script in `lib/home/script.ts` is the source of truth.

| Shot | Share of scroll | Verbs (with mass) | Camera | Focus | Tone (ground, ink) | Copy slot |
| ---- | --------------- | ----------------- | ------ | ----- | ------------------ | --------- |
| `stack` | 0 to 0.14 | enter (light), hold | `press-wide` | The whole stack | paper, ink | Left third: name and title |
| `strip` | 0.14 to 0.32 | fold (paper), exit | `press-close` | The top sheet | paper, ink | Left third: "Payments, identity and verification, in production" |
| `keyhold` | 0.32 to 0.52 | swap, hold | `focus-line` | Racks from the sheet edge to the escrow decision line | blotter, ink | Right third: the decision and its reason |
| `vouchmark` | 0.52 to 0.70 | travel (paper, no turn), recolour (down) | `focus-line` | The result line | blotter, ink | Right third: "Caught test-mode payments booked as revenue" |
| `resume` | 0.70 to 0.86 | lift (light), hold | `press-close` | The résumé, sharp | paper, ink | Left third: availability and résumé date |
| `slot` | 0.86 to 1 | travel (paper), land | `press-wide` | The slot | ink, paper | Centre bottom: "Download résumé", "Send message" |

**Peak shot:** `resume`. It is the poster and the reduced-motion still.

Waypoints (`lib/home/waypoints.ts`) are placeholders in set units until the set is built in Sprint 3: **open**.

## Handoff to pagecraft

- **Tones:** `--tones-<shot>-ground` and `--tones-<shot>-ink` in `styles/tokens.css`, referencing the colour tokens.
- **Copy slots:** as in the shot list. The camera keeps those thirds clear.

## Asset manifest

| Asset | Role | Source | Licence | Size | Cost | Status |
| ----- | ---- | ------ | ------- | ---- | ---- | ------ |
| Paper stock texture (uncoated, fibres) | Sheet and bed material | `tools/ruled-sheet.mjs --grid 0 --fibres` | Generated, owned | **open** | None | planned |
| Sheet geometry with a top-edge hinge | `boilerplate` fold | Built in code (`lib/stage/fold.ts`) | Owned | Small | None | planned |
| Filing slot | Destination | **open** (modelled in Blender or built in code) | Owned | **open** | None | planned |
| Poster and reduced-motion still | Delivery | Rendered from the `resume` shot | Owned | **open** | None | planned |
| Phone film | Delivery | The same camera path rendered to video | Owned | **open** | None | planned |

## Render and delivery

- **Route:** real-time on the existing engine (three on WebGPU through React Three Fiber, `lib/stage/`). **Open** until look development confirms it.
- **Tone mapping, exposure and grade:** **open** (Sprint 3).
- **Post nodes:** depth of field for the rack focus only.
- **Tiers:** desktop real-time; phone gets the identical camera path as video; low power and reduced motion get the peak still. Budgets **open**.
- **Fallbacks:** every line on screen is DOM text in reading order and also exists in the page's sections (BR-12). The stage is `aria-hidden`.

## Dailies log

| Iteration | Date | Critic's grades by layer | The three changes | Done |
| --------- | ---- | ------------------------ | ----------------- | ---- |

## Fingerprint row

To append after verification, with measured numbers from `tools/shoot.mjs`.
