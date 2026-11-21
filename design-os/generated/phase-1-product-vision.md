# Phase 1 — Product Vision

**Product:** hckerson.com (served at `hckerson.vercel.app`) · **Domain:** personal engineering portfolio, used for hiring · **Version:** 1.0 · **Date:** 2026-11-21

Next: [Phase 2 — Experience Maps](phase-2-experience-maps.md) · Index: [START_HERE](START_HERE.md)

This document is the single source of truth for what the product is for. Every later phase traces back to an ID defined here (`G-`, `PER-`, `JTBD-`, `BR-`, `PR-`).

## Contents

1. [Placeholder Resolution](#placeholder-resolution)
2. [Business Vision](#business-vision)
3. [Product Purpose](#product-purpose)
4. [Business Goals](#business-goals)
5. [Value Proposition](#value-proposition)
6. [Competitive Positioning](#competitive-positioning)
7. [Personas](#personas)
8. [Jobs To Be Done](#jobs-to-be-done)
9. [Business Rules](#business-rules)
10. [Success Metrics, KPIs, North Star](#success-metrics-kpis-north-star)
11. [Governance](#governance)
12. [Platform Constraints](#platform-constraints)
13. [Product Principles](#product-principles)
14. [Implementation Philosophy](#implementation-philosophy)
15. [Non-goals](#non-goals)
16. [Future Scalability](#future-scalability)
17. [Assumptions](#assumptions)

---

## Placeholder Resolution

The master prompt is written for an enterprise platform. These are the values for this product, with the reason for each.

| Placeholder | Value | Why |
|---|---|---|
| `{{PRODUCT_NAME}}` | hckerson.com | The name in the repo's `package.json` description. It is served from `hckerson.vercel.app` (owner's decision). |
| `{{DOMAIN}}` | Personal engineering portfolio for hiring | The owner's stated goal: "people see it and feel the need to get me hired". |
| `{{REFERENCE_PRODUCTS}}` | Read.cv, LinkedIn profile, GitHub profile, Contra | Benchmarks for **flows only**: how a candidate is screened (LinkedIn, Read.cv), how work is proven (GitHub), and how a freelance enquiry starts (Contra). Never benchmarks for look. |
| `{{PERSONAS}}` | PER-1 to PER-5 below | Everyone who hires an engineer, plus the owner. |
| `{{CORE_ENTITY}}` / `{{CORE_ENTITY_PLURAL}}` | case study / case studies | Work proven through problem, decisions and outcome. The Consulting sector archetype is "engagements, deliverables, case studies". |
| `{{PRIMARY_FLOWS}}` | F-01 to F-05 ([Phase 2](phase-2-experience-maps.md)) | Screen, evaluate, contact, take the résumé, enquire about freelance work. |
| `{{SUPPORTING_FLOWS}}` | F-06 to F-12 | Sharing, motion fallback, content upkeep, message handling, recovery. |
| `{{ROLE_DASHBOARDS}}` | None, by decision | No visitor signs in. The owner's "dashboard" is their inbox (BR-08). See Non-goals. |
| `{{ROLE}}` | Any of PER-1 to PER-4 | All visitors share the same permissions. |
| `{{DOMAIN_TOOL}}` | Résumé document | The artefact a recruiter takes into their own system. |
| `{{DOMAIN_TRANSACTION}}` | Sending a hiring message | The conversion. It replaces booking or checkout. |
| `{{DOMAIN_SPECIFIC_LIBS}}` | The stage engine already in the repo (three on WebGPU, gsap, lenis) | Used for the scroll narrative only. Nothing new is needed. |
| `{{SCALE_TARGET}}` | Traffic spikes in the tens of thousands of visits a day when a link is shared; tens of case studies over the years | A shared link can spike traffic. Content grows slowly. |
| `{{COMPONENT_COUNT}}` | 18 interaction contracts | [Phase 6](phase-6-interaction-contracts.md). |
| `{{SECTION_COUNT}}` | 24 sections | [Phase 5](phase-5-section-blueprints.md). |
| `{{PAGE_COUNT}}` | 7 pages plus 1 document | [Phase 4](phase-4-page-blueprints.md). |
| `{{TIMELINE_WEEKS}}` | 4 weeks (8 half-week sprints) | [Phase 8](phase-8-implementation-roadmap.md). |
| `{{QA_ITEM_COUNT}}` | 120 | [Phase 9](phase-9-qa-checklist.md). |
| `{{OUTPUT_DIR}}` | `design-os/generated/` | The prompt's default. |

## Business Vision

Make Aderibigbe Emmanuel (Hckerson), a full-stack engineer in Lagos, an easy hire. A visitor should finish the site convinced that this engineer ships real, money-handling, production software, and should act on that conviction without friction.

## Product Purpose

The site turns a shared link into a hiring conversation. It replaces three weaker channels:

- a résumé PDF read with no proof behind it;
- a GitHub profile read with no story;
- a LinkedIn profile that looks like everyone else's.

## Business Goals

| ID | Goal |
|---|---|
| G-1 | Convert qualified visitors into hiring messages (full-time roles, internships for 2027, freelance builds). |
| G-2 | Prove depth in under five minutes: real systems, real decisions, real outcomes. |
| G-3 | Pass a recruiter's first screen in under 60 seconds: who, what role, where, available, how to reach. |
| G-4 | Be memorable enough to be forwarded within a hiring team. |
| G-5 | Cost the owner near-zero time to keep current. |

## Value Proposition

**For people who hire engineers:** a candidate whose work you can verify. It is live, named, and explained down to the decisions and the bugs caught. Reaching them takes one step.

**For the owner:** one link that does the selling in every application, DM and email signature.

## Competitive Positioning

The competition is every other candidate's link in the same hiring queue.

| Typical candidate link | This product |
|---|---|
| A long list of tutorials and clones | Few case studies, each original, live, and owner-authored (BR-02) |
| Skills listed without evidence | Every skill claim traceable to work (BR-03) |
| "Contact me" that opens a mail client | A message sent from the page, with confirmation (F-03) |
| Same template as thousands of others | A distinct, crafted experience, built under the pagecraft and stagecraft skills |

## Personas

### Primary personas

| ID | Persona | Context | Needs | Time they give |
|---|---|---|---|---|
| PER-1 | Recruiter / talent partner | Screening many candidates; may not be technical | Role, level, location and remote fit, availability, résumé, contact | 30–90 s |
| PER-2 | Hiring manager / engineering lead | Deciding whether to interview; technical | Evidence of judgement: architecture, trade-offs, testing, ownership | 3–10 min |

### Secondary personas

| ID | Persona | Context | Needs |
|---|---|---|---|
| PER-3 | Founder / client | Needs a product built; budget-conscious | Proof of shipped products, scope fit, a way to start the conversation |
| PER-4 | Peer / referrer | An engineer forwarding the owner to their team | Something worth sharing, a link preview that sells itself |

### Internal / operational persona

| ID | Persona | Needs |
|---|---|---|
| PER-5 | Owner (Hckerson) | Edit content in one place, receive messages reliably, never lose a lead |

## Jobs To Be Done

| ID | Persona | When… | I want to… | So I can… |
|---|---|---|---|---|
| JTBD-1 | PER-1 | I open a candidate link from a pipeline | confirm role, level, location and availability at once | move them forward or not |
| JTBD-2 | PER-1 | I decide to advance them | take their résumé and contact details | load them into our ATS |
| JTBD-3 | PER-2 | I'm deciding on an interview | see how they think about a real system | judge seniority beyond keywords |
| JTBD-4 | PER-2, PER-3 | I'm convinced | contact them without leaving the page | start the process before I'm distracted |
| JTBD-5 | PER-3 | I have a product to build | check they have shipped something similar | trust them with money and deadlines |
| JTBD-6 | PER-4 | I recommend them | share a link that previews well | make the referral land |
| JTBD-7 | PER-5 | my work or status changes | update one source | keep every page accurate |
| JTBD-8 | PER-5 | someone writes | get the message with the reply path ready | answer within a day |

## Business Rules

| ID | Rule |
|---|---|
| BR-01 | Every fact shown comes from the owner's own records (résumé data, repos). Nothing is invented. A claim the owner has retracted is never shown. |
| BR-02 | Only original, owner-authored work is a case study. Clones, templates, tutorials and learning repos are excluded. |
| BR-03 | A skill appears only if at least one case study or role demonstrates it. |
| BR-04 | A client who has not agreed to be named is described by what the product does ("Client Education Platform"), never by name. Their private source is never linked. |
| BR-05 | Employers Vouchmark and Tekcify may be named. |
| BR-06 | Public contact channels are exactly: email `emmanueladeribigbe415@gmail.com`, X `@theHckerson`, phone `+234 913 246 3467`, LinkedIn `/in/hckerson`, GitHub `Hckerson`. |
| BR-07 | A message is never reported as sent unless delivery to the owner succeeded. |
| BR-08 | Messages go to the owner's email. There is no stored inbox and no admin UI. |
| BR-09 | Live links point to running products only. A link that stops resolving is removed or marked, never left broken. Keyhold links to `keyhol.me`. |
| BR-10 | The résumé on the site is the owner's current master résumé. Its date is visible to the visitor. |
| BR-11 | Availability (open to roles, internship 2027, freelance) is one value in one place, shown consistently everywhere. |
| BR-12 | The scroll narrative never gates content. Every fact it tells also exists as readable text. |

## Success Metrics, KPIs, North Star

**North Star:** qualified hiring messages per month. A message counts when it comes from PER-1, PER-2 or PER-3 and is about a role or a project.

| KPI | Target | Measures |
|---|---|---|
| Message conversion (sent ÷ visits) | ≥ 2 % | G-1 |
| Case-study read-through (reached the outcome) | ≥ 40 % of openers | G-2 |
| Time to contact details | ≤ 10 s from landing | G-3 |
| Résumé downloads ÷ visits | ≥ 5 % | JTBD-2 |
| Message delivery success | 100 % (alert on any failure) | BR-07 |
| LCP, phone, 4G | ≤ 2.5 s | Platform constraint |
| Accessibility | WCAG 2.2 AA, zero critical axe issues | Principles |

Measured with privacy-respecting, cookie-free analytics (Phase 7 selects the tool under the Library Selection Policy).

## Governance

- **Owner of content and decisions:** PER-5. No other editors.
- **Source of truth for facts:** the files in `lib/data/` (Phase 7). Their content is copied from the owner's résumé data and repos per BR-01.
- **Design authority:** `docs/DESIGN_BRIEF.md` (pagecraft) and `docs/STAGE_BRIEF.md` (stagecraft), written at build time.
- **Engineering authority:** `.claude/CLAUDE.md`. Its rules win over this design OS.
- **Change process:** content edit, then the type-check, lint and test gates, then deploy. A removed feature needs the owner's explicit instruction (Scope Preservation).

## Platform Constraints

- Next.js App Router on the existing starter. No new framework.
- Static by default. The only server work is message delivery and generated link previews.
- Hosted on Vercel at `hckerson.vercel.app`.
- Mostly Nigerian and international visitors on phones, including mid-range Android on slow networks. The scroll narrative must degrade on those devices without losing content (BR-12).
- No database and no visitor accounts.

## Product Principles

1. **Proof over claims.** Every statement leads to evidence.
2. **One step to act.** Contact and résumé are reachable from everywhere, without a detour.
3. **Respect the visitor's time.** The recruiter's answer is immediate. The engineer's depth is opt-in.
4. **Never lie about state.** Sending, sent and failed are reported truthfully (BR-07).
5. **Works for everyone.** Keyboard, screen reader, reduced motion and slow devices all get the full story.
6. **Honest about the work.** Live, retired and private are labelled as such.

## Implementation Philosophy

- Content is data. Pages render from typed files, so a fact changes in one place (G-5, BR-11).
- Server Components by default. Client code only where interaction or the stage demands it.
- Follow `.claude/CLAUDE.md`: no hardcoding, a single source of truth, the existing architecture, minimal LOC.
- Build the look per page with the owner after this OS (Visual Design Hand-off in [IMPLEMENTATION_PROMPT](IMPLEMENTATION_PROMPT.md)).

## Non-goals

- Visitor accounts, comments, a blog CMS, or an admin UI. The starter's auth layer stays in the repo untouched but is unused by this product.
- A stored message inbox (BR-08).
- Listing every repository the owner has.
- Pricing or rate cards.
- Multi-language content in v1.

## Future Scalability

- New case studies are new data entries. No page changes are needed.
- A writing or notes section can be added as a new route group without restructuring.
- The message channel can move from email to a stored inbox if volume demands. That change is behind one Server Action.
- Localisation can be added through the copy constants, which are already centralised.

## Assumptions

| ID | Assumption | Effect if wrong |
|---|---|---|
| A-1 | Resolved 2026-11-21: the owner confirmed the contact form, alongside the direct channels | — |
| A-2 | `keyhol.me` resolves to the live Keyhold frontend | BR-09 applies: fall back to `keyhold-pi.vercel.app` |
| A-3 | Resolved 2026-11-21: D-01 is `Aderibigbe-Emmanuel-Resume.pdf` (the owner chose this variant over v00 on 2026-11-22), from `Documents/Internship Applications 2027/00_Master Documents/Master Resume/` | — |
| A-4 | The Client Education Platform is the owner's freelance Playwork work, shown unnamed | Its case study is described without client details |
| A-5 | Analytics without cookies needs no consent prompt | Revisited if the analytics tool changes |
