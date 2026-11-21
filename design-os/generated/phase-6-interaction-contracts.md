# Phase 6 — Interaction Contracts

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 5 — Section Blueprints](phase-5-section-blueprints.md) · Next: [Phase 7 — Frontend Architecture](phase-7-frontend-architecture.md)

Every interactive element is defined here by its behaviour: inputs, states, accessibility, keyboard, ARIA, validation, loading, errors and content rules. These contracts never say how or where an element appears. Which components exist, how they are grouped and how they look is decided when each page is built (No Visual Prescription).

The baseline for every contract is WCAG 2.2 AA, including:

- 2.4.7 Focus Visible
- 2.4.11 Focus Not Obscured
- 2.5.8 Target Size (Minimum)
- 3.3.7 Redundant Entry
- 3.3.8 Accessible Authentication (not applicable: there are no accounts)

All visible copy comes from constants (`lib/constants.ts` or `lib/<feature>/constants.ts`). Repeated keys use `nanoid`. A literal `aria-expanded`, `window.confirm` and `window.alert` are lint errors in this repo.

## Contents

1. [Contract Inventory](#contract-inventory)
2. [Shared Rules](#shared-rules)
3. [Navigation](#navigation) — IC-01, IC-02, IC-03, IC-10, IC-11, IC-17
4. [Conversion](#conversion) — IC-04, IC-05, IC-06, IC-07, IC-08, IC-09
5. [Narrative](#narrative) — IC-12, IC-13
6. [Feedback and Recovery](#feedback-and-recovery) — IC-14, IC-15
7. [Content](#content) — IC-16, IC-18

---

## Contract Inventory

| ID | Contract | Used in sections | Flows |
|---|---|---|---|
| IC-01 | Global navigation link set | S-01 | F-01, F-02, F-03, F-09 |
| IC-02 | Skip link | S-01 | All |
| IC-03 | Compact navigation disclosure | S-01 (narrow viewports) | All |
| IC-04 | Résumé download action | S-01, S-02, S-03, S-17 | F-04 |
| IC-05 | Message form submission | S-21 | F-03, F-05, F-12 |
| IC-06 | Text input field | S-21 | F-03, F-05 |
| IC-07 | Opportunity type choice | S-21 | F-03, F-05 |
| IC-08 | Copy-to-clipboard action | S-02, S-22, S-21 (failure recovery) | F-08, F-03 |
| IC-09 | External link | S-02, S-10, S-22 | F-02, F-08 |
| IC-10 | Internal content link | S-05, S-09, S-20, S-23 | F-02, F-09 |
| IC-11 | Previous / next case-study navigation | S-16 | F-02 |
| IC-12 | Scroll narrative scrub | S-04 | F-07 |
| IC-13 | Narrative skip | S-04 | F-07, F-01 |
| IC-14 | Status announcement live region | S-21, S-02, S-22 | F-03, F-08 |
| IC-15 | Retry action | S-24 | F-10 |
| IC-16 | Media viewer dialog | S-15 | F-02 |
| IC-17 | In-page anchor navigation | S-01, S-03, S-04, P-03 | F-01, F-02 |
| IC-18 | Detail disclosure | S-12 | F-02 |

## Shared Rules

These apply to every contract and are not repeated in each one.

| Rule | Definition |
|---|---|
| Focus | Every focusable element has a visible focus indicator. Focus is never hidden by sticky or fixed content (2.4.11). Focus order follows reading order. |
| Targets | Every pointer target meets 2.5.8, by size or by spacing. |
| Motion | Any motion is disabled or reduced when `prefers-reduced-motion: reduce` is set. No meaning is carried by motion alone. |
| Names | Every control has an accessible name that matches its visible label (2.5.3). |
| No-JS | Navigation, links, the résumé and message sending all work without client JavaScript (progressive enhancement, Phase 1 › Product Principles). |
| Copy | Labels, messages and errors come from constants. Errors say what happened and what to do next. |
| Analytics | Conversion contracts (IC-04, IC-05, IC-08, IC-09) emit one cookie-free event on success, with no personal data in the payload. |

---

## Navigation

### IC-01 — Global navigation link set

| Field | Definition |
|---|---|
| Name | Global navigation |
| Purpose | Reach every level-1 destination from any page (Phase 3 › Navigation Hierarchy, Principle 2). |
| Inputs | The ordered destination list (Home through the owner's name, Work, About, Contact, Résumé) from the route constants. The current pathname. |
| States | Default. Current page (an exact match, or a prefix match for `/work/*`). Focused. Hovered. |
| Accessibility | One navigation landmark per page with an accessible name. The current destination is identified by more than colour. |
| Keyboard support | Tab and Shift+Tab move between links. Enter follows. |
| ARIA | `<nav aria-label>` with the label from constants. `aria-current="page"` on the current destination. |
| Interaction patterns | Plain links. No hover-only menus. Résumé delegates to IC-04. |
| Validation rules | Every destination resolves to a route in the Phase 3 sitemap (a test asserts this). |
| Loading behavior | Rendered on the server. Usable before hydration. |
| Error behavior | Present on P-06 and P-07 (F-09, F-10). |
| Content rules | One-word labels from Phase 3 › Labelling Conventions. |
| Do | Keep the same set and order on every page. |
| Don't | Add destinations that aren't in the sitemap. Hide Contact or Résumé on any page. |
| Dependencies | Route constants, IC-03, IC-04. |

### IC-02 — Skip link

| Field | Definition |
|---|---|
| Name | Skip to content |
| Purpose | Let keyboard and screen-reader users bypass repeated navigation (2.4.1). |
| Inputs | The main content target ID (constant). |
| States | Hidden until focused. Focused. Activated. |
| Accessibility | It is the first focusable element on every page. When activated, focus moves to the main region. |
| Keyboard support | First Tab reveals it. Enter activates it. |
| ARIA | Links to `#<main id>`. The target is `<main tabIndex={-1}>`. |
| Interaction patterns | Uses IC-17 for the focus move. |
| Validation rules | The target ID exists on every page (a test asserts this). |
| Loading behavior | Rendered on the server. Works without JS. |
| Error behavior | Present on P-06 and P-07. |
| Content rules | Label from constants. |
| Do | Become perceivable when focused. |
| Don't | Point at an element that can't receive focus. |
| Dependencies | IC-17, root layout. |

### IC-03 — Compact navigation disclosure

| Field | Definition |
|---|---|
| Name | Navigation menu toggle |
| Purpose | Expose IC-01 on narrow viewports where the full set doesn't fit. |
| Inputs | Open state (local). The IC-01 destination list. |
| States | Closed. Open. Focused. |
| Accessibility | The toggle has a name ("Menu" from constants) and reports its state. When open, focus moves to the first destination. When it closes, focus returns to the toggle. |
| Keyboard support | Enter or Space toggles. Escape closes and returns focus. Tab moves through the destinations. Leaving the last destination closes it. |
| ARIA | `<button aria-expanded={open} aria-controls>`. `aria-expanded` is bound to state, never a literal. |
| Interaction patterns | Following a destination closes it. Route changes close it. Resizing to a wide viewport closes it. Background scroll is locked while it is open, only if it covers content. |
| Validation rules | Not applicable. |
| Loading behavior | Without JS, IC-01 is reachable anyway (a no-JS fallback, such as a `<details>` element or always-reachable links). |
| Error behavior | If it fails, IC-01 stays reachable. |
| Content rules | Label from constants. |
| Do | Restore focus when it closes. |
| Don't | Trap focus with no Escape. Animate when reduced motion is set. |
| Dependencies | IC-01, IC-14 (not required), viewport constants. |

### IC-10 — Internal content link

| Field | Definition |
|---|---|
| Name | Content link |
| Purpose | Move between pages: a case study from the list, a skill to its evidence, a not-found page to a real page (BR-03, F-09). |
| Inputs | Destination from route helpers (`workRoute(slug)`). Visible label. Optional description (summary, status). |
| States | Default. Hovered. Focused. Visited (not required). |
| Accessibility | When a whole item is one link, its accessible name is the title, with the summary and status as its description. There are no nested interactive elements inside one link. |
| Keyboard support | Tab and Enter. |
| ARIA | `aria-describedby` for status or summary where the name alone is ambiguous. |
| Interaction patterns | Next.js `Link`, prefetching the visible links. Same tab. |
| Validation rules | Every slug exists in the case-study data (enforced by types and `generateStaticParams`). |
| Loading behavior | Static targets. Navigation feels immediate. |
| Error behavior | A bad target resolves to P-06. A test should prevent this. |
| Content rules | The label names the destination. Never "click here" or "read more" alone. |
| Do | Put the status (Live, Private, In development, Retired) in the accessible description. |
| Don't | Open internal links in a new tab. |
| Dependencies | Route constants, case-study data. |

### IC-11 — Previous / next case-study navigation

| Field | Definition |
|---|---|
| Name | Case-study sequence |
| Purpose | Keep evaluators moving through work (Phase 3 › Cross-linking). |
| Inputs | The current slug and the ordered case-study list (by `order`). |
| States | Has previous and next. First (next only, or wraps). Last (previous only, or wraps). Only one case study (omitted). |
| Accessibility | Each link names its target title as well as its direction. |
| Keyboard support | Tab and Enter. No global arrow-key shortcuts. |
| ARIA | Wrapped in `<nav aria-label>` (label from constants). |
| Interaction patterns | It wraps when there are three or more case studies, so a sequence never dead-ends (F-02). |
| Validation rules | Neighbours are computed from the data by a pure selector, covered by unit tests. |
| Loading behavior | Rendered on the server. |
| Error behavior | Not applicable. |
| Content rules | Direction labels from constants plus the target title. |
| Do | Pair with the conversion path in S-16. |
| Don't | Link to the current case study. |
| Dependencies | `lib/portfolio` selectors, IC-10. |

### IC-17 — In-page anchor navigation

| Field | Definition |
|---|---|
| Name | Anchor jump |
| Purpose | Move to a section on the same page (skip link, narrative skip, section links within a long case study). |
| Inputs | Target element ID. |
| States | Idle. Scrolling. Arrived. |
| Accessibility | On arrival, focus moves to the target (made focusable with `tabIndex={-1}`), so screen readers continue from there. |
| Keyboard support | Enter on the anchor. |
| ARIA | None beyond a correct `href="#id"`. |
| Interaction patterns | Scrolls smoothly through the existing scroll provider (Lenis) when motion is allowed. Jumps instantly when reduced motion is set. Updates the URL hash without adding history spam. |
| Validation rules | The target ID exists. |
| Loading behavior | Works as a native jump without JS. |
| Error behavior | A missing target leaves the visitor in place, with no exception. |
| Content rules | Not applicable. |
| Do | Account for any fixed or sticky element so the target isn't obscured (2.4.11). |
| Don't | Hijack native scroll speed beyond the provider's settings. |
| Dependencies | `StageScrollProvider`, reduced-motion preference. |

---

## Conversion

### IC-04 — Résumé download action

| Field | Definition |
|---|---|
| Name | Download résumé |
| Purpose | Deliver D-01 in one action from anywhere (F-04, JTBD-2). |
| Inputs | Résumé path constant. Résumé date (BR-10). |
| States | Default. Focused. Activated. |
| Accessibility | The name says it is a PDF download and gives its date, for example "Download résumé (PDF, updated Nov 2026)". |
| Keyboard support | Tab and Enter. |
| ARIA | A link with a `download` attribute and a filename. Not a button. |
| Interaction patterns | A link to the static file. Desktop downloads it. Mobile opens the native viewer without replacing the site's history entry. |
| Validation rules | The file exists at build (a test asserts the asset path). |
| Loading behavior | Static file. No spinner. |
| Error behavior | A missing file fails the build, so it can never ship (Phase 4 › D-01). |
| Content rules | Label and date format from constants. |
| Do | Emit the download analytics event. |
| Don't | Gate the file behind a form or email capture. |
| Dependencies | `public/` asset, profile data. |

### IC-05 — Message form submission

| Field | Definition |
|---|---|
| Name | Send message |
| Purpose | Deliver a hiring message to the owner from the page (F-03, F-05, North Star). |
| Inputs | Fields from IC-06 and IC-07. Hidden: honeypot, form start timestamp, source page. The schema is `lib/validations/message.ts` (Zod, with types via `z.infer`). |
| States | `idle` → `validating` → `sending` → one of `sent`, `failed`, `rate-limited`, `offline`. `invalid` returns to `idle` with field errors. |
| Accessibility | When the form is invalid on submit, focus moves to an error summary that links to each invalid field. Status changes are announced through IC-14. The submit control stays focusable while sending and reports that it is busy. |
| Keyboard support | Enter inside a single-line field submits. Enter in the message body inserts a newline. All controls are reachable by Tab. |
| ARIA | `<form aria-describedby>` pointing to the availability note. `aria-busy` on the form while sending. Error summary with `role="alert"`. |
| Interaction patterns | Progressive: a native `<form action={sendMessage}>` posts to the Server Action in `lib/actions/send-message.ts` without JS. With JS, the `useSendMessage` hook (`lib/hooks/use-send-message.ts`, a TanStack mutation that wraps the Server Action, per Phase 7) drives the states. Double-submit guard: submission is ignored while `sending`, and a per-attempt idempotency key (`nanoid`) is passed so a retried request can't deliver twice. Bot filter: a non-empty honeypot or a fill time shorter than the minimum (a constant) is accepted silently and not delivered. Server rate limit per IP (a constant window and count) returns `rate-limited` with a retry time. Offline is detected from `navigator.onLine` and the fetch failure, and nothing is sent. |
| Validation rules | Client and server validate against the same schema. The server is authoritative. Rules are in IC-06 and IC-07. The reply email is checked for format only, never for deliverability. |
| Loading behavior | `sending` announces "Sending…". Inputs stay editable but submission is locked. No optimistic success. |
| Error behavior | `sent` only when the mail provider accepts (BR-07). `failed` keeps every value, explains the failure, and offers F-08 channels plus IC-08 to copy the message text. `rate-limited` names when to retry. `offline` keeps input and offers a retry when the connection returns. The Server Action returns `ActionResult<T>` (from `lib/types/api.ts`). Failures are logged in the service layer, never with `console`. |
| Content rules | Every status message comes from constants. The success message names the reply address and the expected reply time. |
| Do | Reset the form only after `sent`. Set reply-to to the visitor's address (F-12). Include the opportunity type and source page in the delivered message. |
| Don't | Store messages (BR-08). Show a visible CAPTCHA. Report success on a timeout. |
| Dependencies | IC-06, IC-07, IC-08, IC-14, `lib/actions/send-message.ts`, `lib/validations/message.ts`, a hook in `lib/hooks/use-send-message.ts` (if a client wrapper is needed), the mail provider (Phase 7). |

### IC-06 — Text input field

| Field | Definition |
|---|---|
| Name | Message fields |
| Purpose | Collect the sender's details and message with the least effort (F-03). |
| Inputs | Four fields. Name (required). Reply email (required). Organisation (optional). Message (required, multi-line). |
| States | Empty. Filled. Focused. Invalid (after blur or submit). Disabled (never while sending; fields stay editable). |
| Accessibility | A persistent visible label for each field, never placeholder-only. Required fields are marked in text as well as in the attribute. The error message is tied to its field. Supports autofill. |
| Keyboard support | Standard text editing. |
| ARIA | `aria-invalid` when in error. `aria-describedby` pointing to the hint and error. `aria-required` on required fields. |
| Interaction patterns | Validates on blur and on submit, never on every keystroke. Shows a character count for the message as it nears the limit. Never asks for data the visitor already gave in this session (3.3.7). |
| Validation rules | Name: 1–100 characters, trimmed. Email: `z.string().email()`, at most 254 characters. Organisation: at most 120 characters. Message: 20–4,000 characters. All limits are constants. |
| Loading behavior | Not applicable. |
| Error behavior | Each error names the field and the fix ("Enter an email like name@company.com"). |
| Content rules | Labels, hints and errors come from constants. |
| Do | Use `autocomplete="name"`, `autocomplete="email"` and `autocomplete="organization"`. Use `type="email"` and `inputMode` for the correct mobile keyboard. |
| Don't | Clear a field on error. Block pasting. |
| Dependencies | IC-05, message schema. |

### IC-07 — Opportunity type choice

| Field | Definition |
|---|---|
| Name | Opportunity type |
| Purpose | Let the owner triage messages (F-05, F-12). |
| Inputs | Fixed options: Role, Internship, Freelance, Other (Phase 3 › Labelling Conventions). Optional preselection from the `?type=` query param. |
| States | None selected. One selected. Invalid (submitted with none selected). |
| Accessibility | A group with a visible legend. Options are announced with their position in the set. |
| Keyboard support | Tab into the group. Arrow keys move between options and select. Space selects. |
| ARIA | Native `<fieldset>`, `<legend>` and `<input type="radio">`, so no custom roles are needed. |
| Interaction patterns | A `?type=` value that matches an option preselects it. An unknown value is ignored. When availability (BR-11) marks a type as closed, the option stays selectable, and a hint says it's currently closed and that the message will still be read. |
| Validation rules | Required. Must be one of the enum values (`z.enum`), defined once in constants. |
| Loading behavior | Not applicable. |
| Error behavior | Missing selection: "Choose what this is about". |
| Content rules | Option labels from constants. |
| Do | Keep the enum in one place, shared by the schema, the labels and the email subject. |
| Don't | Infer the type from the message text. |
| Dependencies | IC-05, availability value, URL params. |

### IC-08 — Copy-to-clipboard action

| Field | Definition |
|---|---|
| Name | Copy value |
| Purpose | Give visitors the owner's email, phone or handle, or their own unsent message, without retyping (F-08, F-03 recovery). |
| Inputs | The value to copy. Its label ("email", "phone", "message"). |
| States | Idle. Copied (a temporary confirmation, duration from a constant). Failed. |
| Accessibility | The button name includes what it copies ("Copy email address"). The result is announced through IC-14. |
| Keyboard support | Enter or Space. |
| ARIA | `<button>`. The confirmation goes through the shared polite live region (IC-14). |
| Interaction patterns | Uses `navigator.clipboard.writeText`. The value stays visible and selectable in text, so manual copy always works. |
| Validation rules | Not applicable. |
| Loading behavior | Instant. |
| Error behavior | When permission is denied or the API is unavailable, the visitor is told to copy manually and the value text is selected for them. |
| Content rules | Values come from the channel constants (BR-06). Confirmation copy comes from constants. |
| Do | Return to idle after the confirmation duration. |
| Don't | Copy anything the visitor didn't ask to copy. Use `window.alert` for confirmation. |
| Dependencies | IC-14, channel constants. |

### IC-09 — External link

| Field | Definition |
|---|---|
| Name | External link |
| Purpose | Reach live products, public source and social channels (F-02, F-08, BR-09). |
| Inputs | URL, label, kind (live, source, channel). |
| States | Default. Hovered. Focused. |
| Accessibility | The accessible name says it opens in a new tab (the suffix comes from constants). Channel links name the service. |
| Keyboard support | Tab and Enter. |
| ARIA | `target="_blank"` with `rel="noopener noreferrer"`. The new-tab notice is part of the name or description. |
| Interaction patterns | `mailto:`, `tel:` and `https://wa.me/` channel links open the native app, in the same tab for `mailto:` and `tel:`. |
| Validation rules | URLs are validated by the data schema (`z.string().url()`). BR-09 liveness is checked before release (Phase 9). |
| Loading behavior | Not applicable. |
| Error behavior | A link known to be dead is removed or marked through status, never kept as is (BR-09). |
| Content rules | Private-source case studies have no source link (BR-04). |
| Do | Emit the outbound analytics event with the link kind only. |
| Don't | Link to private repositories. Use an external link for internal routes. |
| Dependencies | Profile and case-study data. |

---

## Narrative

### IC-12 — Scroll narrative scrub

| Field | Definition |
|---|---|
| Name | Scroll narrative |
| Purpose | Tell the owner's story as a crafted, memorable sequence driven by scroll (F-07, G-4), without gating content (BR-12). |
| Inputs | The script (`lib/<feature>/script.ts`, compiled by `lib/stage/compile-script.ts`). Scroll progress through its track. Device capability. Measured frame performance. Reduced-motion preference. |
| States | `poster` (before ready) → `playing` (scrubbing). `paused-offscreen`. `still` (reduced motion or final fallback). Fallback tiers: `realtime` → `realtime-light` → `video` → `still`. |
| Accessibility | The canvas is `aria-hidden`. Every beat's meaning exists as server-rendered text in reading order. Nothing flashes more than three times a second (2.3.1). No content needs scrolling within a fixed time. |
| Keyboard support | Page scrolling keys (Space, Page Up and Down, arrow keys, Home, End) move the scrub, because it is bound to document scroll. Tab never lands inside the canvas. |
| ARIA | `aria-hidden="true"` on the stage. The text beats are ordinary content. |
| Interaction patterns | Scroll-driven and fully reversible (`useStageTimeline`). It never traps or slows native scroll beyond the provider's settings, and it never auto-advances. It renders only while visible (`StageCanvas` IntersectionObserver). Resolution adapts to measured performance (`PerformanceMonitor`). Reduced motion seeks to the peak frame and scroll is not hijacked. An opening sequence, if scripted, finishes or is skipped as soon as the visitor scrolls. |
| Validation rules | The script's actors, layers and variants must exist (`lib/stage/context.ts` throws in development). Script data is typed by `lib/types/stage.ts`. |
| Loading behavior | The poster frame (from the real render) shows until the renderer is ready. The stage code loads lazily, after the text content. |
| Error behavior | No WebGPU falls back to WebGL. Renderer failure or sustained low frame rate drops one tier. A script error falls back to `still`. The page never errors because of the stage (Phase 4 › P-01). |
| Content rules | The text that accompanies each beat comes from constants or data, never baked into the render. |
| Do | Keep the identity facts (S-03) readable and reachable without the narrative. |
| Don't | Autoplay sound. Block input during an opening sequence. Hide the scrollbar. |
| Dependencies | `lib/stage/*`, `components/wrappers/stage-canvas.tsx`, `components/providers/stage-scroll-provider.tsx`, `lib/hooks/use-stage-timeline.ts`, `docs/STAGE_BRIEF.md`, IC-13. |

### IC-13 — Narrative skip

| Field | Definition |
|---|---|
| Name | Skip the narrative |
| Purpose | Let anyone pass the narrative's scroll length in one action (F-01, PER-1's time). |
| Inputs | ID of the first section after the narrative. |
| States | Available. Focused. Not shown when the narrative is in `still` (nothing to skip). |
| Accessibility | It is the first focusable element inside S-04. Its name says where it goes. |
| Keyboard support | Tab and Enter. |
| ARIA | An anchor link handled by IC-17. |
| Interaction patterns | Moves focus and scroll to the next section. With reduced motion set, it jumps instantly. |
| Validation rules | The target ID exists. |
| Loading behavior | Rendered on the server. Works before the stage is ready. |
| Error behavior | Not applicable. |
| Content rules | Label from constants. |
| Do | Keep it operable while an opening sequence plays. |
| Don't | Let a skip leave the stage in a mid-transition state when the visitor scrolls back. |
| Dependencies | IC-17, IC-12. |

---

## Feedback and Recovery

### IC-14 — Status announcement live region

| Field | Definition |
|---|---|
| Name | Status announcer |
| Purpose | Tell assistive-tech users about results that don't move focus: sending, sent, copied, rate-limited, offline (4.1.3). |
| Inputs | Message text and its politeness (`polite` or `assertive`). |
| States | Empty. Announcing. Cleared (after the announcement, so the same message can be repeated). |
| Accessibility | One polite and one assertive region exist in the root layout before any message is announced, so announcements are reliable. |
| Keyboard support | Not applicable. It is not focusable. |
| ARIA | `role="status"` (polite) and `role="alert"` (assertive, used only for submit failures and error summaries). |
| Interaction patterns | Exposed through one provider or hook. Components never create their own ad-hoc regions. |
| Validation rules | Not applicable. |
| Loading behavior | Not applicable. |
| Error behavior | If announcing fails, the visible status text still exists. |
| Content rules | Messages come from constants. They are short and say the outcome first. |
| Do | Pair every announcement with visible status text. |
| Don't | Announce on every keystroke or scroll beat. |
| Dependencies | Root layout, a provider in `components/providers/`. |

### IC-15 — Retry action

| Field | Definition |
|---|---|
| Name | Try again |
| Purpose | Recover a failed segment without a full reload (F-10, P-07). |
| Inputs | The `reset` function from the Next.js error boundary. |
| States | Idle. Retrying. Recovered (the segment re-renders). Failed again (stays on P-07). |
| Accessibility | Focus moves to the error heading when the error appears. The retry result is announced through IC-14. |
| Keyboard support | Enter or Space. |
| ARIA | `<button>`. |
| Interaction patterns | Calls `reset()` inside `startTransition` together with `router.refresh()`. The direct channels stay available as static text (F-08). |
| Validation rules | Not applicable. |
| Loading behavior | Announces that a retry is in progress. |
| Error behavior | A repeated failure offers the channels and a link Home. Error details are never shown (Phase 4 › P-07). |
| Content rules | Copy from constants. Plain words, no stack traces. |
| Do | Report the error to the logging service once per occurrence. |
| Don't | Loop retries automatically. |
| Dependencies | `error.tsx`, `global-error.tsx`, IC-14, the logging service (Phase 7). |

---

## Content

### IC-16 — Media viewer dialog

| Field | Definition |
|---|---|
| Name | Media viewer |
| Purpose | Inspect case-study media (screenshots, diagrams, recordings) at full resolution (P-03, F-02). |
| Inputs | The ordered media list for the case study (source, alt text, caption, dimensions). The index that was opened. |
| States | Closed. Open at index *n*. Navigating. Media loading. Media failed. |
| Accessibility | Opening moves focus into the dialog. Focus is trapped while it is open. Closing returns focus to the item that opened it. Every image has alt text from the data. Recordings have captions or are silent. |
| Keyboard support | Escape closes. The horizontal arrow keys move to the previous and next media. Tab cycles through the controls inside the dialog. Home and End go to the first and last media. |
| ARIA | A native `<dialog>` opened as a blocking dialog (`aria-modal="true"`), named by the media caption. The position ("2 of 5") goes to IC-14. |
| Interaction patterns | Opens from any case-study media item. Supports a swipe gesture toward the previous or next item on touch devices. A pinch gesture zooms natively. A background click or tap closes it. Background scroll is locked while it is open. Opening adds no history entry. |
| Validation rules | Every media entry has alt text and dimensions (data schema). |
| Loading behavior | Reserves the media's space so nothing shifts. The neighbouring media is preloaded. |
| Error behavior | A failed media item shows its alt text and caption, and navigation still works. |
| Content rules | Captions come from data. Control labels come from constants. |
| Do | Work without JS by linking each media item to its full-size file. |
| Don't | Autoplay recordings with sound. Trap focus with no Escape. |
| Dependencies | Case-study media data, `next/image`, IC-14. |

### IC-18 — Detail disclosure

| Field | Definition |
|---|---|
| Name | Decision detail |
| Purpose | Keep a case study scannable while letting PER-2 open the reasoning behind each decision (F-02). |
| Inputs | The decision's summary and its detail (from data). Its initial state (collapsed). |
| States | Collapsed. Expanded. |
| Accessibility | The control names the decision. Its state is announced. The detail content stays in reading order after the control. |
| Keyboard support | Enter or Space toggles. |
| ARIA | A native `<details>` and `<summary>`, or a `<button aria-expanded={open} aria-controls>` bound to state. A literal value is never used (a lint rule enforces this). |
| Interaction patterns | Each item toggles independently. Find-in-page reveals the collapsed content (`hidden="until-found"` or native `<details>`). A deep link to a decision (`#decision-id`) opens it. |
| Validation rules | Every decision has a non-empty detail, or it is rendered without a disclosure. |
| Loading behavior | Rendered on the server. Works without JS with native `<details>`. |
| Error behavior | Not applicable. |
| Content rules | The summary states the decision. The detail states the reason and the trade-off (Principle 1, Proof over claims). |
| Do | Keep the decision's statement visible when it is collapsed. |
| Don't | Hide the outcome or any fact a recruiter needs behind a disclosure. |
| Dependencies | Case-study data, IC-17. |
