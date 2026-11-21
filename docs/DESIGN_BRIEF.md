# Design brief: Hckerson portfolio

Roles and choices only; token values live in `styles/tokens.css`. Anything not yet decided is marked **open**.

## Sector, truth sheet and direction

- **Sector:** Consulting (engagements, deliverables, case studies). Interface archetype: page (a long read), type, patterns (contents, figures, citations), rows.
- **World:** `printed-page`, through its consultancy and journal artefacts: the decision record, the report with numbered exhibits, the journal article's numbered sections.
- **Direction:** Direction 1 from `node .claude/skills/pagecraft/tools/draw.mjs --sector "Consulting"` (seed 410471703): editorial, warm neutral, one-hue accent, serif, low density, pill, fill, object as navigation, masthead, economical. Approved by the owner on 2026-11-22. Recommended over Direction 2 (warm utility, mono-led: mono on an engineer's portfolio is that category's template) and Direction 3 (developer tool, expert-high density: too dense for a recruiter's one-minute read, and close to the engineer's Linear-clone template).

| Truth | Answer |
| ----- | ------ |
| What it is | A full-stack engineer who ships payments, identity and verification systems in production, and writes down why each decision was made |
| What it replaces | The résumé line skimmed in six seconds, and the GitHub profile of clones |
| The moment of use | A recruiter or engineering lead deciding, in under a minute, whether to read further |
| The moment of action | Opening a case study, taking the résumé, sending a message |
| The feeling it leaves | "This person makes the decisions I would want made, and can explain them" |

## Product

- **What it does, and for whom:** presents Aderibigbe Emmanuel's work and record to recruiters, engineering leads, founders and freelance clients (Phase 1, PER-1 to PER-5).
- **After five seconds the user must feel:** this is a working engineer with real systems behind him, and he is available.
- **Mood:** exact, considered, unhurried.

## Register

- **Register (marketing and every page):** editorial. There is no app surface.
- **Why it fits:** the owner's strongest evidence is written: decision records, trade-offs and outcomes. The editorial register makes the written record the hero.
- **Core axes:** serif-led type voice with italic as a role; low density with an explicit reading measure; the object as navigation.
- **Free axes:** neutral, accent, shape, elevation, chrome, economy. Each differs from both exemplars (below).

## Surface

- **Marketing:** every page (P-01 to P-07). P-01 carries a stage (`docs/STAGE_BRIEF.md`).
- **Themes:** light only in v1. A dark theme is **open** and not planned.

## Subject-derived cues

| Decision | Choice | Source in the domain | Other candidate sources considered |
| -------- | ------ | -------------------- | ---------------------------------- |
| Accent | One hue, rubric red. Spent on links, the focus ring, exhibit numbers and the current state of a record; never on large fills | Rubrication: the red ink early printed books used for headings and section marks | Editor's blue pencil (reads as the developer-tool blue); newspaper spot colour (no single standard) |
| Neutral temperature | Warm uncoated book stock for the page, a darker stock for the blotter beneath a document, warm near-black ink | Uncoated book paper and carbon ink | Coated white (reads as a SaaS page); newsprint grey (too low contrast for long reads) |
| Status vocabulary | Live: filled ink pill. Private: outlined pill. In development: dashed outline pill. Retired: struck-through label, no pill. The words are always present (`STATUS_LABELS`) | Proof and approval stamps on a document | Coloured dots (colour-only meaning fails without words) |
| Signature device | Each case study is a bound document: a cover with title, number and status that opens into the record. The documents are the navigation on P-01 and P-02 | The consultancy report and the decision record (`worlds/printed-page.md`, Reports and briefs) | A shelf of books (Stripe Press's instance, refused); a contents list alone (no object) |

## Decisions

- **Density:** low. Body text is `base` at reading leading inside `measures-prose`. Section margins step through `margins-section-*`. Rows breathe at `gaps-md` or more.
- **Type voice:** Newsreader (a serif with optical sizes), loaded with `next/font` as `--font-newsreader` in `app/layout.tsx`. Display and body are one family that differs in optical size and weight: display sets at large optical size and regular weight, body at text optical size. Italic is a role for bylines, decision labels ("Decision", "Why") and captions. Figures are tabular in exhibit numbers and periods. `fonts-mono` is reserved for code notation in case studies.
- **Shape language:** square everywhere (`radii-none`) except actions and status stamps, which are pills (`radii-full`). A pill means "you can press this" or "this is a stamp".
- **Spacing:** a 4px base (`spacing-*`) with gaps and paddings as roles.
- **Border treatment:** opaque print rules. `border-light` is a decorative hairline between rows; `border-dark` (ink) is the rule under the masthead and the edge of every form field, which clears 3:1.
- **Elevation:** fill, no shadows (`shadows-*` are `none`). A document sits on `background-alt` (the blotter); a focused document cover lifts by a tone step, never a shadow.
- **Focus indicator:** a 2px rubric outline at a 3px offset (`outline-widths-focus`, `outline-offsets-focus`, `colors-focus`), 5.9:1 on the page and 5.2:1 on the blotter. It differs from resting borders by colour and offset. The root `:focus-visible` rule in `globals.css` applies it everywhere.
- **Forced colours:** pills and stamps keep a 1px border so their shape survives; the focus outline uses `Highlight`.
- **Selected-state recipe:** the current item takes the rubric colour and a rule beneath it. One recipe for nav, filters and tabs.
- **Row anatomy:** case study rows show number, title, one-line summary, status stamp, period. Role rows show company, title, period, mode. Periods align right in tabular figures.
- **Chrome model:** a masthead. The name is set in the display face. A dateline beneath it carries location, availability and the résumé date. Sections (Work, About, Contact, Résumé) are set as type, not as buttons.
- **Value economy:** economical. Two radii, no shadows, one accent.
- **Motion character:** `durations-fast` for hover and press, `durations-normal` for reveals, `durations-slow` for document opening. Easing is named: `timing-functions-out` is "settle", a sheet coming to rest on the bed (fast start, long deceleration); `timing-functions-in` is "lift"; `timing-functions-in-out` is "turn", a page turning.
- **Overlay enter and exit:** no overlays in v1 except the phone menu, which opens with "settle" at `durations-normal` and exits faster at `durations-fast`. On small screens it is full screen.
- **List changes:** a recorded cut. Lists are static.
- **Reduced-motion policy:** the stage shows its peak frame as a still; reveals become instant; the state change on a sent message remains.
- **Casing:** sentence case for titles, buttons and labels.

## Register-wide devices

| Device | Where it recurs | Its logic |
| ------ | --------------- | --------- |
| Print rules | Under the masthead, between rows, around exhibits | Structure comes from rules as on a printed page, not from boxes |
| Exhibit numbering | Case studies, decisions within a case study, figures | A reader can cite "Exhibit 2.3"; the numbers are navigation |
| Italic labels | Bylines, "Decision", "Why", captions | A second voice as a role, never decoration |

## Deliberate exceptions

| Device (older generation) | Reason | Confined to |
| ------------------------- | ------ | ----------- |
| A plain table | Tabular facts read best as a table | The skills evidence table on P-04 |

## References

| Reference | What is borrowed (as a property) |
| --------- | -------------------------------- |
| Stripe Press | Each object has its own identity and is the navigation |
| The Pudding | An explicit reading measure; the essay as the page |

## Fingerprint comparison

Against Stripe Press:

| Axis | Core or free | This build | Stripe Press | Match or differ |
| ---- | ------------ | ---------- | ------------ | --------------- |
| Neutral temperature | Free | One warm book stock for the whole system | A colour pair per book | Differ |
| Accent | Free | One rubric hue on links, focus and numbers | The book's own palette | Differ |
| Type voice | Core | Serif with optical sizes, italic as a role | Ivar family, italic as a role | Match |
| Density | Core | Low with a measure | Low with a measure | Match |
| Shape language | Free | Square plus pill actions and stamps | 0 to 3px | Differ |
| Elevation recipe | Free | Tone steps (fill) | None | Differ |
| Signature device | Core | Bound documents as navigation | A WebGL book shelf | Match (property), differ (device) |
| Chrome model | Free | Masthead with a dateline | No nav bar | Differ |
| Value economy | Free | Economical | Economical | Match |

Against The Pudding:

| Axis | Core or free | This build | The Pudding | Match or differ |
| ---- | ------------ | ---------- | ----------- | --------------- |
| Neutral temperature | Free | Warm book stock | Pure grey ramp | Differ |
| Accent | Free | One rubric hue | Green focus plus role hues | Differ |
| Type voice | Core | Serif, italic role | Tiempos and others | Match |
| Density | Core | Low with a measure | 720px column | Match |
| Shape language | Free | Square plus pills | 2 to 6px | Differ |
| Elevation recipe | Free | Tone steps | A hard small shadow | Differ |
| Signature device | Core | Bound documents | Bespoke scrolling essays | Match (property) |
| Chrome model | Free | Masthead with a dateline | Small header with filter tabs | Differ |
| Value economy | Free | Economical | Moderate | Differ |

Free axes matching: 1 of 6 against Stripe Press, 0 of 6 against The Pudding. Against the developer-tool family: differ on neutral, type, density, shape and chrome. Against Tidemark Receipt (`references/fingerprints.md`): all nine axes differ. **Pass.**

## Fingerprint row

To append after the build is measured: Hckerson portfolio · 2026-11-22 · Consulting · printed-page · consultancy report and decision record · editorial · warm · one-hue · serif · low · pill · fill · object-as-navigation · masthead · economical · measured columns **open**.

## Styleframes and dailies

Key screens for styleframes (Sprint 3): the P-01 masthead with the opening stage shot (marketing band), a P-03 case study at the first decision (the densest screen), and P-02 with a single case study or P-06 (a non-populated state).

| Round | Date | Capture command | Critics' grades by layer | Disputed tells | The three changes | Done |
| ----- | ---- | --------------- | ------------------------ | -------------- | ----------------- | ---- |
