# Phase 5 — Section Blueprints

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 4 — Page Blueprints](phase-4-page-blueprints.md) · Next: [Phase 6 — Interaction Contracts](phase-6-interaction-contracts.md)

Every page in [Phase 4](phase-4-page-blueprints.md) is broken into sections, one job per section. Sections describe behaviour only: what each one is responsible for, the data it needs, how it responds and how it fails. What a section shows, how it looks and where it sits are decided at build time, with the owner. Interaction behaviour is defined once in [Phase 6](phase-6-interaction-contracts.md) and referenced here by `IC-xx`.

## Contents

1. [Section Inventory](#section-inventory)
2. [Sitewide Sections](#sitewide-sections) — S-01, S-02
3. [P-01 Home](#p-01-home) — S-03 to S-07
4. [P-02 Work index](#p-02-work-index) — S-08, S-09
5. [P-03 Case study](#p-03-case-study) — S-10 to S-16
6. [P-04 About](#p-04-about) — S-17 to S-20
7. [P-05 Contact](#p-05-contact) — S-21, S-22
8. [P-06 and P-07 Recovery](#p-06-and-p-07-recovery) — S-23, S-24

---

## Section Inventory

| ID | Section | Page(s) | Flows | Contracts used |
|---|---|---|---|---|
| S-01 | Site identity & global navigation | Every page | F-01, F-02, F-04, F-09 | IC-01, IC-02, IC-03, IC-04 |
| S-02 | Sitewide conversion path | Every page | F-03, F-04, F-08 | IC-04, IC-08, IC-09 |
| S-03 | Introduction & availability | P-01 | F-01 | — |
| S-04 | Scroll narrative | P-01 | F-07 | IC-12, IC-13 |
| S-05 | Selected work | P-01 | F-02 | IC-10 |
| S-06 | Current roles snapshot | P-01 | F-01 | IC-10 |
| S-07 | Home contact invitation | P-01 | F-03, F-04, F-05 | IC-04, IC-10 |
| S-08 | Work index introduction | P-02 | F-02 | — |
| S-09 | Case study list | P-02 | F-02 | IC-10 |
| S-10 | Case study overview | P-03 | F-02, F-06 | IC-09 |
| S-11 | Problem & context | P-03 | F-02 | — |
| S-12 | Decisions | P-03 | F-02 | IC-18 |
| S-13 | Outcome & learnings | P-03 | F-02, F-05 | — |
| S-14 | Stack & capabilities | P-03 | F-02, F-05 | IC-10 |
| S-15 | Case study media | P-03 | F-02 | IC-16 |
| S-16 | Continue | P-03 | F-02, F-03, F-05 | IC-10, IC-11 |
| S-17 | Profile summary | P-04 | F-01 | — |
| S-18 | Experience | P-04 | F-01 | IC-09 |
| S-19 | Education | P-04 | F-01 | — |
| S-20 | Skills with evidence | P-04 | F-01, F-02 | IC-10 |
| S-21 | Message composer | P-05 | F-03, F-05 | IC-05, IC-06, IC-07, IC-14 |
| S-22 | Direct channels | P-05 | F-08, F-03 recovery | IC-08, IC-09 |
| S-23 | Not-found recovery | P-06 | F-09 | IC-10, IC-04 |
| S-24 | Error recovery | P-07 | F-10 | IC-15, IC-08, IC-09 |

IC-17 (in-page anchor navigation) applies wherever a section is the target of a skip link or a same-page link (S-01's skip target, S-04's skip destination).

---

## Sitewide Sections

### S-01 — Site identity & global navigation

| Field | Definition |
|---|---|
| Purpose | Let every visitor know whose site this is and reach any Level 1 destination from any page (Phase 3 › Navigation Hierarchy). |
| Responsibilities | Identify the owner. Provide the global destinations (Home, Work, About, Contact) and the résumé (D-01). Mark the current destination. Offer the skip-to-content path. On narrow viewports, collapse destinations into a disclosure without hiding any of them. |
| Data requirements | Owner name and handle (profile), route constants, résumé path constant. No case-study data. |
| Interaction model | IC-02 moves focus to the page's main content. IC-01 navigates. IC-03 opens and closes the destination set on narrow viewports and closes on navigation, on Escape, and when focus leaves it. IC-04 delivers D-01. |
| Device needs | Phone: every destination and the résumé reachable in one disclosure step. Desktop and keyboard: every destination reachable by tabbing, with no disclosure. |
| Accessibility requirements | A `nav` landmark with an accessible name. `aria-current="page"` on the current destination. The skip link is the earliest focusable element. The disclosure follows IC-03 (state announced, focus returned on close). Every target is at least 24×24 CSS px (WCAG 2.2 SC 2.5.8). |
| Loading states | Server-rendered. Works before and without client JavaScript. The disclosure degrades to an always-reachable list when scripts fail. |
| Error states | None of its own. It stays operable inside P-07 so recovery paths survive (F-10). |
| Empty states | Not applicable. The destination set is constant. |
| Reuse potential | Sitewide, rendered once by the `(site)` layout and the root not-found and error boundaries. |
| Technical notes | Destinations come from route constants (`.claude/CLAUDE.md` › No hardcoding). Current-route detection uses the pathname on the client only, so the rest stays a Server Component. |

### S-02 — Sitewide conversion path

| Field | Definition |
|---|---|
| Purpose | Keep contact and the résumé one step away on every page (Principle 2, F-03, F-04, F-08). |
| Responsibilities | Offer the route to P-05. Offer D-01. Expose every public channel (BR-06) so it can be opened or copied. State current availability (BR-11). |
| Data requirements | Profile: channels, availability, résumé date. |
| Interaction model | IC-10 to P-05. IC-04 for D-01. IC-09 opens a channel in its native app (mail, phone, WhatsApp, LinkedIn, X, GitHub). IC-08 copies the email or phone. |
| Device needs | Phone: phone and WhatsApp open the native apps. Desktop: copying is the dependable path when no mail or phone app is configured. |
| Accessibility requirements | A `contentinfo` landmark. External channels announce that they open a new context (IC-09). Copy confirmation is announced through IC-14. |
| Loading states | Server-rendered static values. Usable without client JavaScript (copy actions degrade to selectable text). |
| Error states | Copy denied: the value stays selectable and the visitor is told to copy it manually (IC-08). |
| Empty states | Not applicable. Every channel is required profile data. |
| Reuse potential | Sitewide. The same channel behaviour is reused by S-22 and S-24. |
| Technical notes | Channel values come from one profile source (BR-06). Phone links use the E.164 form `+2349132463467`. Availability is the single value defined for BR-11. |

---

## P-01 Home

### S-03 — Introduction & availability

| Field | Definition |
|---|---|
| Purpose | Answer JTBD-1 without effort: who, what role, where, remote fit, and availability (G-3). |
| Responsibilities | State the owner's identity, role title, location and remote fit. State availability for roles, 2027 internships and freelance work (BR-11). Give the shortest path onward to work and contact. |
| Data requirements | Profile: name, handle, role title, location, remote fit, availability. |
| Interaction model | Read-only. Onward paths use IC-10. |
| Device needs | All devices: readable at initial paint, without scrolling, interaction or waiting on S-04 (F-01). |
| Accessibility requirements | Holds the page's single `h1`. Facts are text, never only inside the narrative or inside images (BR-12). |
| Loading states | None. Server-rendered and present before any script runs. |
| Error states | None of its own. It is unaffected by S-04 failures. |
| Empty states | Not applicable. Profile data is required, and the build fails without it. |
| Reuse potential | The facts it states are reused by S-17 and by link-preview generation (F-06). |
| Technical notes | Server Component. Availability is read from the single source, never restated in copy. The S-04 narrative mirrors these facts. It does not replace them. |

### S-04 — Scroll narrative

| Field | Definition |
|---|---|
| Purpose | Make the visit memorable and forwardable (G-4) by telling the owner's story through a scroll-driven narrative (F-07). |
| Responsibilities | Run the narrative forward and back with scroll. Pick the suitable path for the device (full real-time, lighter real-time, pre-rendered video, or still). Pair every beat with readable text. Hand off to the rest of P-01 when it ends. Let any visitor skip it. |
| Data requirements | The stage script (`Script`, `lib/types/stage.ts`), assets from the stage brief's manifest, per-beat copy from the copy constants, and capability signals (WebGPU or WebGL support, reduced-motion preference, measured performance). |
| Interaction model | IC-12 links narrative progress to scroll. IC-13 skips past it to the next section through IC-17. Nothing in the narrative is required to reach any fact or action. |
| Device needs | Phone: the lighter real-time path or the identical camera path as video. Desktop: full real-time. Reduced motion: the still frame and the text, with no scroll-linked motion and no smooth-scroll override. |
| Accessibility requirements | The rendering surface is `aria-hidden`. Its meaning lives in the paired text. Respects `prefers-reduced-motion`. No flashing beyond WCAG 2.3.1 thresholds. The skip path is keyboard-reachable before the narrative. Scroll position is never trapped. |
| Loading states | The poster frame, identical to the narrative's opening frame, holds until the stage is ready. Text is readable meanwhile. |
| Error states | No WebGPU or WebGL, low frame rate, or script failure: drop to the next path down, ending at the still plus text (F-07). The page never errors because of this section. |
| Empty states | Not applicable. The narrative ships complete or the still path stands in. |
| Reuse potential | Home only. The stage engine (`lib/stage/`) and wrappers are shared infrastructure. |
| Technical notes | Its look (story, form, material, light, camera, motion) is decided by stagecraft in `docs/STAGE_BRIEF.md` at build time. Client-only, lazy-loaded. Renders only while on screen and adapts resolution to measured performance (existing `stage-canvas` behaviour). Copy slots and per-shot tones are handed to pagecraft as the stage brief defines. |

### S-05 — Selected work

| Field | Definition |
|---|---|
| Purpose | Route PER-2 and PER-3 to the strongest evidence (F-02 entry). |
| Responsibilities | Present the featured case studies, each with its summary, status and capabilities, and lead to its P-03. Lead to P-02 for the full set. |
| Data requirements | Case studies flagged as featured: slug, title, summary, kind, status, capabilities, order. |
| Interaction model | IC-10 per case study and to P-02. |
| Device needs | All devices: open a case study in one action. |
| Accessibility requirements | Each case study's link has an accessible name that includes its title. Status is conveyed as text, not by colour alone (WCAG 1.4.1). |
| Loading states | Static. None at runtime. |
| Error states | A featured slug with no record fails the build (data validation), never at runtime. |
| Empty states | None flagged featured: fall back to the three lowest `order` values (Phase 3 › Empty Routes). |
| Reuse potential | The per-case-study summary behaviour is shared with S-09. |
| Technical notes | Uses the case-study selectors in `lib/` (Phase 7). Never inlines case-study data in the page. |

### S-06 — Current roles snapshot

| Field | Definition |
|---|---|
| Purpose | Show that the owner currently works in industry. Named employers are a screening signal for PER-1 (F-01, BR-05). |
| Responsibilities | Name the current employers with role title, period and mode (full-time, part-time, remote). Lead to the full record on P-04. |
| Data requirements | Roles whose period runs to the present: company, title, period, mode. |
| Interaction model | IC-10 to P-04 (Experience). |
| Device needs | All devices: scannable without interaction. |
| Accessibility requirements | Periods are machine-readable (`time` with `datetime`). |
| Loading states | Static. |
| Error states | None at runtime. |
| Empty states | No current role: the section is omitted, and availability in S-03 carries the signal. |
| Reuse potential | Draws from the same role records as S-18. |
| Technical notes | "Current" is derived from the period end being Present, never flagged by hand (single source). |

### S-07 — Home contact invitation

| Field | Definition |
|---|---|
| Purpose | Convert visitors who reach the end of P-01 (G-1). |
| Responsibilities | Invite contact, with the opportunity type preselectable (role, internship, freelance). Offer D-01. Restate availability from the single source. |
| Data requirements | Availability, the opportunity-type vocabulary, the résumé path. |
| Interaction model | IC-10 to P-05 with `?type=` preselection. IC-04 for D-01. |
| Device needs | All devices: one action to reach P-05 or D-01. |
| Accessibility requirements | Link names state the destination and outcome ("Send a message", "Download résumé"). |
| Loading states | Static. |
| Error states | None of its own. |
| Empty states | Not applicable. |
| Reuse potential | Its conversion behaviour is reused by S-16. |
| Technical notes | The `type` value must be a member of the opportunity-type enum in `lib/constants.ts`. P-05 ignores unknown values. |

---

## P-02 Work index

### S-08 — Work index introduction

| Field | Definition |
|---|---|
| Purpose | Set expectations for evaluators: what counts as a case study here (BR-02) and what the statuses mean. |
| Responsibilities | Explain that every item is original, owner-authored work. Define the status vocabulary (Live, Private, In development, Retired) once, for the whole index. |
| Data requirements | The status vocabulary and its explanations from copy constants. |
| Interaction model | Read-only. |
| Device needs | All devices. |
| Accessibility requirements | Holds the page's single `h1`. |
| Loading states | Static. |
| Error states | None. |
| Empty states | Not applicable. |
| Reuse potential | The status explanations are reused wherever status needs clarification (S-10). |
| Technical notes | Copy lives in constants, never inline. |

### S-09 — Case study list

| Field | Definition |
|---|---|
| Purpose | Let PER-2 and PER-3 compare all case studies and open the most relevant (F-02). |
| Responsibilities | Present every case study with its title, summary, kind, status, period and capabilities, ordered by the data's `order` field. Lead to each P-03. |
| Data requirements | All case studies: slug, title, summary, kind, status, period, capabilities, order. |
| Interaction model | IC-10 per item. No filtering in v1 (Phase 3 › Filtering Hierarchy). |
| Device needs | All devices: compare and open in one action. |
| Accessibility requirements | Exposed as a list (`ul` or `ol`) with the item count available to assistive tech. Each item has a single link target, so items aren't nested interactives. |
| Loading states | Static. |
| Error states | None at runtime. Invalid data fails the build. |
| Empty states | Phase 3 › Empty Routes (P-02): told that the work is being written up, with paths to P-04 and D-01. A build test fails if it is empty in production. |
| Reuse potential | Shares its per-item behaviour with S-05. |
| Technical notes | Server Component. Filter state, when introduced past 8 items, goes in URL params. |

---

## P-03 Case study

### S-10 — Case study overview

| Field | Definition |
|---|---|
| Purpose | Orient the evaluator: what this is, its status, the owner's role, when, and where to verify it (F-02, F-06). |
| Responsibilities | State title, one-line summary, kind, status, role and period. Expose the live link and source link when they exist. Explain absent links by status (Private: client confidentiality, BR-04. In development: not yet deployed). Expose the breadcrumb trail (Phase 3 › Breadcrumb Strategy). |
| Data requirements | Case study: slug, title, summary, kind, status, role, period, links (live, source, both optional). |
| Interaction model | IC-09 for live and source links. The breadcrumb uses IC-10. |
| Device needs | All devices. |
| Accessibility requirements | Holds the page's single `h1`. The breadcrumb is a `nav` with an accessible name and `aria-current` on the current item. Status is conveyed in text. |
| Loading states | Static. |
| Error states | Unknown slug: P-06 through `notFound()`. A live link that has stopped resolving is removed or marked before release (BR-09). The check runs in QA (Phase 9). |
| Empty states | Absent links are omitted, never shown as empty or disabled. |
| Reuse potential | Its title and summary feed the per-slug metadata and link-preview image (F-06). |
| Technical notes | `generateStaticParams` with `dynamicParams = false`. `CreativeWork` and `BreadcrumbList` structured data. Never links private source (BR-04). |

### S-11 — Problem & context

| Field | Definition |
|---|---|
| Purpose | Establish what was at stake, so the decisions that follow can be judged (JTBD-3). |
| Responsibilities | State the problem, who it was for, and the constraints the owner worked within. |
| Data requirements | Case study: problem, context, constraints. |
| Interaction model | Read-only. |
| Device needs | Comfortable long-form reading on phones (Phase 4 › P-03). |
| Accessibility requirements | Proper heading structure within the page outline. Text never sits inside images. |
| Loading states | Static. |
| Error states | None. |
| Empty states | Required data. A record without a problem statement fails validation. |
| Reuse potential | Case-study-specific. |
| Technical notes | Text from the data file only (BR-01). Client details are omitted for unnamed clients (BR-04). |

### S-12 — Decisions

| Field | Definition |
|---|---|
| Purpose | Prove judgement. This is the core evidence for PER-2 (G-2, JTBD-3). |
| Responsibilities | Present each key decision with its reason and the trade-off accepted. Allow extended technical detail per decision without forcing it on every reader (Principle 3). |
| Data requirements | Case study: decisions (each with statement, reason, trade-off, optional detail). |
| Interaction model | IC-18 reveals and conceals a decision's extended detail. All detail is also reachable without scripts. |
| Device needs | All devices. Long detail stays collapsible on phones to protect reading flow. |
| Accessibility requirements | Each disclosure exposes its expanded state (`aria-expanded`, bound to state). The full content is in the DOM and findable by in-page search when collapsed (`hidden="until-found"` where supported). |
| Loading states | Static. |
| Error states | None. Without scripts, the detail renders expanded. |
| Empty states | At least one decision is required by validation. Optional detail is simply absent. |
| Reuse potential | The decision-with-reason behaviour is reusable by future writing (Phase 3 › Future Expansion). |
| Technical notes | Decisions stay in authored order. Each decision has a stable anchor so it can be deep-linked (IC-17, F-06). |

### S-13 — Outcome & learnings

| Field | Definition |
|---|---|
| Purpose | Close the argument with results and reflection (F-02 completion criterion). |
| Responsibilities | State measurable outcomes where they exist (bugs caught, systems shipped, numbers). State what the owner learned. Mark the read-through point for the KPI. |
| Data requirements | Case study: outcomes, learnings. |
| Interaction model | Read-only. Reaching it records a read-through analytics event (Phase 1 › KPIs). |
| Device needs | All devices. |
| Accessibility requirements | Numbers come with units and context in text. |
| Loading states | Static. |
| Error states | An analytics failure never affects the page. |
| Empty states | Outcomes are required. Learnings are optional, and the section omits that part if absent. |
| Reuse potential | Case-study-specific. |
| Technical notes | The read-through event fires once per visit per slug, cookie-free (A-5). Only claims from the owner's records (BR-01). |

### S-14 — Stack & capabilities

| Field | Definition |
|---|---|
| Purpose | Connect the case study to skills, both ways (BR-03, Phase 3 › Cross-linking). |
| Responsibilities | State the stack and the capabilities demonstrated. Lead from each capability to its evidence on P-04 (S-20). |
| Data requirements | Case study: stack, capabilities (from the controlled capability vocabulary). |
| Interaction model | IC-10 to S-20 on P-04, anchored to the capability (IC-17). |
| Device needs | All devices. |
| Accessibility requirements | Exposed as a list. Link names identify the capability. |
| Loading states | Static. |
| Error states | A capability outside the vocabulary fails validation. |
| Empty states | Stack is required. Capabilities may be empty, and then that part is omitted. |
| Reuse potential | The capability-link behaviour is shared with S-20 and S-05. |
| Technical notes | The capability vocabulary is an enum in `lib/constants.ts`. Cross-links resolve to stable anchors on P-04. |

### S-15 — Case study media

| Field | Definition |
|---|---|
| Purpose | Let evaluators see the product itself (F-02 verification). |
| Responsibilities | Present the case study's media, each with a text alternative and caption. Allow any item to be viewed at full size. |
| Data requirements | Case study: media (source, width, height, alt text, caption). |
| Interaction model | IC-16 opens an item in a viewer dialog, moves between items, and closes back to the originating item. |
| Device needs | Phone: full-size viewing with pinch-zoom respected. Desktop: keyboard movement between items. |
| Accessibility requirements | Every item has meaningful alt text. A purely decorative item has empty alt. The viewer traps focus, closes on Escape, and returns focus (IC-16). |
| Loading states | Lazy-loaded with reserved dimensions, so there is no layout shift (CLS ≤ 0.1). A placeholder holds the space until the item loads. |
| Error states | An item fails to load: the alt text and caption remain, and the viewer skips it. |
| Empty states | No media (e.g. private products without approved captures): the section is omitted. |
| Reuse potential | The viewer contract is reusable for future writing. |
| Technical notes | Next.js `Image` with explicit dimensions. Assets live in `public/work/<slug>/`. Captures of a client product are used only when the client has agreed (BR-04). |

### S-16 — Continue

| Field | Definition |
|---|---|
| Purpose | Never end a case study in a dead end. Move the evaluator to more evidence or to contact (F-02 recovery, G-1). |
| Responsibilities | Lead to the previous and next case studies by `order`, wrapping at the ends. Lead to P-02. Invite contact with the opportunity type preselectable. Freelance is suggested when the case study's kind is `product` or `client` (F-05). |
| Data requirements | Neighbouring case studies (slug, title), the opportunity-type vocabulary. |
| Interaction model | IC-11 to the neighbours. IC-10 to P-02 and to P-05 with `?type=`. |
| Device needs | All devices. |
| Accessibility requirements | Neighbour links state their direction and title in the accessible name. |
| Loading states | Static. |
| Error states | None. |
| Empty states | Only one case study: neighbour navigation is omitted, and the paths to P-02 and contact remain. |
| Reuse potential | Its conversion behaviour is shared with S-07. |
| Technical notes | Neighbours are computed by a selector in `lib/`, never inside the page. |

---

## P-04 About

### S-17 — Profile summary

| Field | Definition |
|---|---|
| Purpose | Give the professional summary a hiring manager or recruiter would put in their notes (F-01). |
| Responsibilities | State who the owner is and what they do, in their own words, with the headshot and location. Restate availability from the single source. Offer D-01. |
| Data requirements | Profile: name, summary, role title, location, availability, headshot (source, dimensions, alt), résumé path and date. |
| Interaction model | IC-04 for D-01. |
| Device needs | All devices. |
| Accessibility requirements | Holds the page's single `h1`. The headshot has alt text naming the owner. |
| Loading states | The headshot reserves its space and is prioritised as the likely LCP element. |
| Error states | The headshot fails: its alt text remains, and nothing else is affected. |
| Empty states | Not applicable. Required profile data. |
| Reuse potential | Its summary text feeds P-04 metadata and `Person` structured data. |
| Technical notes | The headshot is in `public/` and optimised by Next.js `Image`. Summary text comes from the résumé data (BR-01). |

### S-18 — Experience

| Field | Definition |
|---|---|
| Purpose | Give the employment record PER-1 enters into their system and PER-2 uses to read trajectory. |
| Responsibilities | Present each role with company, title, period, mode, summary and achievements, newest role leading by period (Phase 4 › P-04). Link each named employer's public site where one exists (BR-05). |
| Data requirements | Roles: company, company URL (optional), title, period, mode, summary, achievements. |
| Interaction model | IC-09 for employer sites. IC-18 when a role's achievements exceed what reads comfortably at once. |
| Device needs | All devices: scannable. |
| Accessibility requirements | Periods use `time` with `datetime`. Exposed as a list of roles. |
| Loading states | Static. |
| Error states | None at runtime. |
| Empty states | Required. The owner has current roles. |
| Reuse potential | Shares its records with S-06. |
| Technical notes | Retracted claims are never present in data (BR-01). Achievements are copied from the current résumé data only. |

### S-19 — Education

| Field | Definition |
|---|---|
| Purpose | Answer the education question for PER-1, including the 2027 internship context (G-1). |
| Responsibilities | State degree, institution, period (expected end) and standing, plus relevant coursework. |
| Data requirements | Education: degree, institution, period, standing, coursework. |
| Interaction model | Read-only. |
| Device needs | All devices. |
| Accessibility requirements | An expected end date is stated in text as expected, not only implied. |
| Loading states | Static. |
| Error states | None. |
| Empty states | Coursework is optional and omitted if absent. |
| Reuse potential | P-04 only. |
| Technical notes | Values are copied from the résumé data (BR-01). |

### S-20 — Skills with evidence

| Field | Definition |
|---|---|
| Purpose | Make every skill claim verifiable (BR-03, Principle 1). |
| Responsibilities | Present skills grouped by group. Lead from each skill to the case studies or roles that evidence it. Act as the anchor target for S-14's capability links. |
| Data requirements | Skills: name, group, evidence (case-study slugs or role references). Capability vocabulary for anchors. |
| Interaction model | IC-10 to evidencing case studies. Receives IC-17 anchor navigation from S-14. |
| Device needs | All devices. |
| Accessibility requirements | Exposed as grouped lists with group names as headings. The anchor target receives focus on arrival from a cross-link. |
| Loading states | Static. |
| Error states | A skill with no evidence fails validation (BR-03). |
| Empty states | A group with no evidenced skills is omitted (Phase 3 › Empty Routes). |
| Reuse potential | Its evidence relation is shared with S-14. |
| Technical notes | The evidence relation is validated at build by a test over `lib/data/` (Phase 7, F-11). |

---

## P-05 Contact

### S-21 — Message composer

| Field | Definition |
|---|---|
| Purpose | Deliver a hiring or freelance message to the owner without the visitor leaving the site (F-03, F-05, North Star). |
| Responsibilities | Collect the message data. Validate it with the visitor. Send it through the Server Action. Report sending, sent, failed, rate-limited and offline truthfully (BR-07). Keep everything entered on any failure. Prevent double sends. Filter bots without a visible challenge. |
| Data requirements | Message: sender name, reply address, opportunity type, organisation (optional), body, source page. The opportunity-type vocabulary. A `?type=` preselection from the URL. |
| Interaction model | IC-06 per input. IC-07 for the opportunity type. IC-05 governs submission lifecycle, validation, rate limiting and bot filtering. IC-14 announces sending, success and failure. |
| Device needs | Phone: input types that summon the matching keyboard (email for the reply address) and autocomplete hints. Desktop: full keyboard operation. Both: works without client JavaScript through a progressive form post. |
| Accessibility requirements | Every input has a persistent programmatic label. Errors are tied to their input (`aria-describedby`, `aria-invalid`) and summarised on a failed submit, with focus moved to the summary. Status is announced (IC-14). No time limit. Entry is never cleared on error (WCAG 3.3.1, 3.3.3, 3.3.7). |
| Loading states | Sending: submission blocked, the in-progress state is announced, and input is preserved. |
| Error states | Field invalid: inline, specific, preserved input. Delivery failed: the message is kept, S-22 channels are offered, and the text is ready to copy (F-03 recovery). Rate limited: the visitor is told when they can retry. Offline: told that sending is unavailable, with input kept. |
| Empty states | Not applicable. |
| Reuse potential | P-05 only. The validation schema is shared by client and server. |
| Technical notes | Server Action in `lib/actions/send-message.ts`. Zod schema in `lib/validations/message.ts` with types via `z.infer`. Hook in `lib/hooks/use-send-message.ts` (`.claude/CLAUDE.md` › Async). Reports success only when the mail provider accepts (BR-07). Reply-to is set to the visitor's address and the source page is attached (F-12). |

### S-22 — Direct channels

| Field | Definition |
|---|---|
| Purpose | Let visitors use their own channel, and act as the fallback when S-21 fails (F-08). |
| Responsibilities | Expose every public channel (BR-06) so it can be opened in its native app and, where it makes sense, copied. Restate availability. |
| Data requirements | Profile: channels, availability. |
| Interaction model | IC-09 opens a channel (mailto, tel, WhatsApp, LinkedIn, X, GitHub). IC-08 copies the email or phone and confirms through IC-14. |
| Device needs | Phone: tel and WhatsApp open native apps. Desktop: copy is the dependable path. |
| Accessibility requirements | Each channel's accessible name states the channel and the value. External links announce the new context. |
| Loading states | Static. |
| Error states | Copy denied: the value stays selectable, and the visitor is told to copy manually. |
| Empty states | Not applicable. |
| Reuse potential | Shares channel behaviour with S-02 and S-24. |
| Technical notes | Values come from the single profile source. WhatsApp uses `https://wa.me/2349132463467`. |

---

## P-06 and P-07 Recovery

### S-23 — Not-found recovery

| Field | Definition |
|---|---|
| Purpose | Turn a dead link into a real visit (F-09). |
| Responsibilities | Say plainly that the page does not exist. Offer every real destination, D-01 and contact. |
| Data requirements | Route constants, the case-study list (slug, title), the résumé path. |
| Interaction model | IC-10 to every destination. IC-04 for D-01. |
| Device needs | All devices. |
| Accessibility requirements | Holds the page's single `h1`. The page title states "Not found". |
| Loading states | Static. |
| Error states | Not applicable. |
| Empty states | Not applicable. |
| Reuse potential | P-06 only. |
| Technical notes | `app/not-found.tsx`. HTTP 404. `noindex`. Destinations are derived from constants and data so they never go stale. |

### S-24 — Error recovery

| Field | Definition |
|---|---|
| Purpose | Recover from a failure without losing the visitor (F-10). |
| Responsibilities | Say what happened in plain words without exposing details. Offer a retry. Expose the direct channels as static text that works without the app. |
| Data requirements | Profile channels, imported statically so they are available when data loading has failed. |
| Interaction model | IC-15 retries the segment. IC-09 and IC-08 for channels. |
| Device needs | All devices. Operable when client JavaScript partly failed. |
| Accessibility requirements | Focus moves to the error's heading when shown. The retry's in-progress state is announced (IC-14). |
| Loading states | Retrying: announced. Repeated activation is blocked until the retry settles. |
| Error states | A repeated failure stays here, with channels intact. |
| Empty states | Not applicable. |
| Reuse potential | Shared by every segment's `error.tsx` and by `global-error.tsx`. |
| Technical notes | Errors are reported to the logging service (Phase 7). The visitor never sees stack traces or digests. |
