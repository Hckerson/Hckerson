# Phase 2 — Experience Maps

**Product:** hckerson.com · **Version:** 1.0 · **Date:** 2026-11-21

Previous: [Phase 1 — Product Vision](phase-1-product-vision.md) · Next: [Phase 3 — Information Architecture](phase-3-information-architecture.md)

Experiences come before pages. Each flow below has an ID (`F-xx`) that Phases 3–9 refer to. Each flow traces to the personas (`PER-`), jobs (`JTBD-`) and rules (`BR-`) in [Phase 1](phase-1-product-vision.md).

## Contents

1. [Flow Inventory](#flow-inventory)
2. [Primary Flows](#primary-flows) — F-01 to F-05
3. [Role Dashboards](#role-dashboards)
4. [Supporting Flows](#supporting-flows) — F-06 to F-12

---

## Flow Inventory

| ID | Flow | Type | Personas | Jobs |
|---|---|---|---|---|
| F-01 | Screen the candidate | Primary | PER-1 | JTBD-1 |
| F-02 | Evaluate engineering depth | Primary | PER-2, PER-3 | JTBD-3, JTBD-5 |
| F-03 | Send a hiring message | Primary | PER-1, PER-2, PER-3 | JTBD-4 |
| F-04 | Take the résumé | Primary | PER-1 | JTBD-2 |
| F-05 | Start a freelance enquiry | Primary | PER-3 | JTBD-4, JTBD-5 |
| F-06 | Share the site | Supporting | PER-4 | JTBD-6 |
| F-07 | Follow the scroll narrative, or its fallback | Supporting | All | G-4, BR-12 |
| F-08 | Reach a direct channel | Supporting | All | JTBD-2, JTBD-4 |
| F-09 | Recover from a missing page | Supporting | All | — |
| F-10 | Recover from an error or being offline | Supporting | All | — |
| F-11 | Update content | Supporting | PER-5 | JTBD-7 |
| F-12 | Receive and answer a message | Supporting | PER-5 | JTBD-8 |

---

## Primary Flows

### F-01 — Screen the candidate

| Field | Detail |
|---|---|
| User intent | Decide within a minute whether this candidate fits an open role. |
| Trigger | A link in an application, a referral message, or an ATS profile. |
| Entry points | Home (most), any case study (shared deep link), About. |
| Journey | 1. Lands. 2. Learns name, role, location, remote fit and availability without scrolling or interacting. 3. Skims the named employers and strongest work. 4. Either takes the résumé (F-04), messages (F-03), or leaves with a positive memory. |
| Decision points | "Is the role and level a match?" "Are they available for what we hire for?" "Is there anything to verify this?" |
| Emotional state | Hurried and sceptical. Rewarded when answers need no effort. |
| Failure paths | Identity or availability is unclear. The narrative delays the facts. The page is slow on a phone network. |
| Recovery paths | The facts exist as text independent of the narrative (BR-12). Résumé and contact are reachable from every page (Principle 2). |
| System behaviour | The identity and availability facts render on the server and are readable before any script runs. Availability comes from one value (BR-11). |
| Completion criteria | The visitor can state role, location and availability, and knows how to proceed, within 60 s (G-3). |
| Dependencies | Profile data (Phase 7 `lib/data/profile.ts`), F-04, F-03, F-07 fallback. |

### F-02 — Evaluate engineering depth

| Field | Detail |
|---|---|
| User intent | Judge how the candidate thinks: architecture, trade-offs, testing, ownership. |
| Trigger | Passed screening, or a technical lead given the link. |
| Entry points | Home (selected work), Work index, a case study deep link. |
| Journey | 1. Chooses a case study. 2. Reads problem and context. 3. Reads the key decisions with their reasons. 4. Sees the outcome and what was learned. 5. Verifies through the live product or public source where allowed. 6. Moves to the next case study or contacts. |
| Decision points | "Is this original work?" "Did they own it?" "Would I trust them with our system?" |
| Emotional state | Curious and critical. Rewarded by specifics such as numbers, bugs caught and constraints. |
| Failure paths | Generic descriptions. Dead live links. Private work with no proof. A case study that ends with no next step. |
| Recovery paths | Live and source links are checked before release (BR-09). Private work says it is private and why (BR-04). Every case study offers the next case study and contact. |
| System behaviour | Case studies are pre-rendered per slug. An unknown slug resolves to F-09. |
| Completion criteria | The visitor has read at least one case study to its outcome (KPI: read-through ≥ 40 %). |
| Dependencies | Case-study data, F-03, F-09. |

### F-03 — Send a hiring message

| Field | Detail |
|---|---|
| User intent | Start a conversation now, without opening another app. |
| Trigger | Conviction after F-01 or F-02. |
| Entry points | The contact page, plus the "get in touch" path available from every page. |
| Journey | 1. Opens the message path. 2. States who they are, how to reply, the kind of opportunity (role, internship, freelance), and the message. 3. Sends. 4. Is told truthfully that it was delivered and when to expect a reply. |
| Decision points | "Is this worth my time?" (it must be short). "Will this actually reach him?" (it must confirm). |
| Emotional state | Committed but impatient. Any friction loses them. |
| Failure paths | Validation errors. Delivery failure upstream. Network drop mid-send. Spam bots. Double submission. |
| Recovery paths | Errors are specific to the field and keep every entered value. On a delivery failure the message is kept and the direct channels (F-08) are offered with the text ready to copy. A send can't fire twice. |
| System behaviour | Validation runs both client-side and server-side against one schema. Delivery goes through a Server Action. The action reports success only when the mail provider accepts (BR-07). Bots are filtered without a challenge the visitor sees. |
| Completion criteria | The owner received the message with a reply-to address, and the visitor saw the confirmation. |
| Dependencies | Message schema, delivery Server Action, mail provider (Phase 7), F-08, F-12. |

### F-04 — Take the résumé

| Field | Detail |
|---|---|
| User intent | Get the résumé document into their own system. |
| Trigger | The candidate passes the screen. |
| Entry points | Every page, through the persistent résumé path. Also Home and About. |
| Journey | 1. Requests the résumé. 2. Receives the PDF, opening or downloading depending on the device. 3. Returns to the site unchanged. |
| Decision points | "Is this current?" The résumé's date is visible (BR-10). |
| Emotional state | Task-focused. |
| Failure paths | The file is missing or stale. A phone opens it in a way that strands the visitor. |
| Recovery paths | The file has a stable URL and is checked in QA. It opens without replacing the site's history entry. |
| System behaviour | Served as a static asset with a stable, human-readable filename. |
| Completion criteria | The PDF is in the visitor's hands. |
| Dependencies | Résumé asset, profile data (date). |

### F-05 — Start a freelance enquiry

| Field | Detail |
|---|---|
| User intent | Find out whether the owner can build their product, and start scoping. |
| Trigger | A founder sees shipped products similar to what they need. |
| Entry points | A case study, Home, Contact. |
| Journey | 1. Confirms relevant shipped work (F-02). 2. Opens the message path with "freelance" chosen. 3. Describes the project, timeline and budget range, all optional beyond the description. 4. Sends (F-03). |
| Decision points | "Has he shipped payments, auth, admin tools?" "Is he available?" |
| Emotional state | Cautious about money. Reassured by live, named products. |
| Failure paths | Availability says not open to freelance work. No sign of the kind of work they need. |
| Recovery paths | Availability states clearly which kinds of work are open (BR-11). If freelance is closed, the message path still accepts a note and says so. |
| System behaviour | The opportunity type travels with the message, so the owner can triage it. |
| Completion criteria | The same as F-03, with the type set to freelance. |
| Dependencies | F-02, F-03, availability value. |

---

## Role Dashboards

`{{ROLE_DASHBOARDS}}` resolves to **none**, by decision (Phase 1 › Non-goals). No visitor signs in. PER-5's operational view is their email inbox, covered by F-12. The starter's auth layer stays in the repo, unused by this product (Scope Preservation).

---

## Supporting Flows

### F-06 — Share the site

| Field | Detail |
|---|---|
| User intent | Forward the candidate to a colleague in a way that lands. |
| Trigger | A referral or a team discussion. |
| Entry points | Any URL, pasted into Slack, LinkedIn, X, WhatsApp or email. |
| Journey | 1. Copies the URL of the current page. 2. Pastes it. 3. The recipient sees a preview that identifies the person and the page. |
| Failure paths | A generic or missing preview. A deep link that loses its context. |
| Recovery paths | Every route has its own title, description and generated preview image. |
| System behaviour | Metadata and preview images are generated per route at build time. URLs are clean and stable. |
| Completion criteria | The preview names the owner, their role and the specific page (or case study). |
| Dependencies | Metadata per page (Phase 4), preview-image generation (Phase 7). |

### F-07 — Follow the scroll narrative, or its fallback

| Field | Detail |
|---|---|
| User intent | Take in who the owner is through a crafted, memorable experience, or get the same story plainly. |
| Trigger | Arriving on Home. |
| Entry points | Home only. |
| Journey | 1. The narrative starts on arrival. 2. Scrolling moves it forward and back. 3. Each beat pairs with readable text. 4. It ends where the rest of Home continues. |
| Decision points | The system picks the path: full real-time, lighter real-time, pre-rendered video, or a still. Inputs are capability, reduced-motion preference and power or performance signals. |
| Emotional state | Surprised and engaged. The experience must never feel like a wait. |
| Failure paths | No WebGPU or WebGL. Low frame rate. Reduced motion requested. A script fails to load. |
| Recovery paths | Each failure drops to the next path down. The text path always exists (BR-12). Reduced motion gets the still and the text, with no scroll hijack. |
| System behaviour | The stage renders only while on screen. It adapts its resolution to measured performance. Its content mirrors server-rendered text. |
| Completion criteria | Every visitor gets the full message whatever their device. |
| Dependencies | The stage engine in `lib/stage/`, `docs/STAGE_BRIEF.md` (decided by stagecraft at build), F-01. |

### F-08 — Reach a direct channel

| Field | Detail |
|---|---|
| User intent | Use their own channel: email, phone or WhatsApp, LinkedIn, X. |
| Trigger | They prefer their own tools to a form, or F-03 failed. |
| Entry points | Contact page, the footer path on every page, the F-03 failure recovery. |
| Journey | 1. Picks a channel. 2. Opens it in the matching app, or copies the address or number. 3. Gets confirmation that it was copied. |
| Failure paths | No mail client is configured. Copy permission is denied. |
| Recovery paths | Every channel can be copied as well as opened. If copy fails, the value stays selectable. |
| System behaviour | Channel values come from one constant (BR-06). |
| Completion criteria | The visitor has the address or number in hand. |
| Dependencies | Profile data, IC-08 (copy action). |

### F-09 — Recover from a missing page

| Field | Detail |
|---|---|
| User intent | Find what they were looking for after a bad link. |
| Trigger | An unknown route or case-study slug. |
| Journey | 1. Told plainly that the page doesn't exist. 2. Offered every real destination, plus contact and résumé. |
| Failure paths | A dead end. |
| Recovery paths | Every page is reachable from the not-found response. |
| System behaviour | Returns HTTP 404. Is not indexed. |
| Completion criteria | The visitor reaches a real page or a conversion. |
| Dependencies | Sitemap (Phase 3). |

### F-10 — Recover from an error or being offline

| Field | Detail |
|---|---|
| User intent | Continue after something broke. |
| Trigger | A render error, a failed client chunk, or lost connectivity. |
| Journey | 1. Told what happened in plain words. 2. Offered a retry, plus the direct channels, which work without the app. |
| Failure paths | A blank screen. An error that hides contact details. |
| Recovery paths | Error boundaries per route segment. Direct channels are always available as static text. Offline: the visitor is told no message can be sent right now, and anything entered is kept. |
| System behaviour | Returns HTTP 500 for server failures. Errors are reported to the owner through the logging service (Phase 7). |
| Completion criteria | The visitor can retry or reach the owner by another path. |
| Dependencies | Error boundaries, F-08. |

### F-11 — Update content (owner)

| Field | Detail |
|---|---|
| User intent | Reflect a new role, project, availability or résumé. |
| Trigger | A change in career status or new work. |
| Journey | 1. Edits one typed data file, or replaces the résumé asset. 2. Runs the gates (type-check, lint, test). 3. Deploys. 4. Every page that uses the fact updates. |
| Failure paths | A missing field. An invalid URL. A skill without evidence. A dead live link. |
| Recovery paths | Data is validated by schema at build. Tests enforce BR-02, BR-03 and BR-09 where they can be checked. |
| System behaviour | Content is read only from `lib/data/`. Nothing is duplicated in pages. |
| Completion criteria | The fact changes everywhere through one edit (G-5, BR-11). |
| Dependencies | Data schemas (Phase 7), CI. |

### F-12 — Receive and answer a message (owner)

| Field | Detail |
|---|---|
| User intent | See a lead quickly and reply in one step. |
| Trigger | A visitor completes F-03 or F-05. |
| Journey | 1. An email arrives. Its subject names the opportunity type and sender. 2. Replying goes straight to the visitor. |
| Failure paths | The provider is down. The mail lands in spam. |
| Recovery paths | The visitor is told about the failure (BR-07) and given the direct channels. Failures are logged. The sending domain is configured for deliverability. |
| System behaviour | The reply-to address is set to the visitor's address. The opportunity type and source page are included. |
| Completion criteria | The owner replies by hitting reply. |
| Dependencies | Mail provider, delivery Server Action. |
