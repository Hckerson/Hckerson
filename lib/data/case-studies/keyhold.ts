import type { CaseStudy } from "@/lib/types";

export const keyhold: CaseStudy = {
    slug: "keyhold",
    title: "Keyhold",
    summary:
        "A property marketplace built end to end: listings, search, offers, Stripe escrow and generated purchase agreements across buyer, seller and admin portals.",
    kind: "product",
    status: "live",
    role: "Sole engineer: product design, frontend and API",
    period: { start: "2026-07" },
    problem:
        "A buyer who pays for a property before inspecting it is trusting a stranger with a large sum. The platform has to hold that money, give the buyer a real inspection right, and still guarantee that the seller gets paid.",
    decisions: [
        {
            title: "Who may release an escrow hold",
            choice: "The buyer may release at any time, an admin may release as the dispute path of last resort, and the seller may release only once the inspection window has closed. Nobody else may release, ever.",
            reason: "Failing to release is recoverable and releasing wrongly is not, because there is no undo. But an inspection window that never expires holds the seller's money hostage, so the window is the pivot.",
        },
        {
            title: "Money is stored and computed as Decimal",
            choice: "Monetary columns are Decimal(14, 2), arithmetic stays in Decimal for the whole computation, and conversion happens once at the edge through a single money module.",
            reason: "Floats drift across a sum without bound. Integer minor units everywhere were rejected because one missed conversion is a 100× error in a money field.",
        },
        {
            title: "Writes are sent once and confirmations lock",
            choice: "Mutations are never retried automatically, and a confirmation cannot be dismissed while its request is in flight.",
            reason: "A write that fails is reported once and retried deliberately from the control still in front of the person, and a modal that closed before its result was known made a failed action look like a successful one.",
        },
        {
            title: "External sign-in is native OAuth",
            choice: "Google and Facebook sign-in speak each provider's HTTP API directly, verify tokens against published keys, and seal state, nonce and PKCE verifier in a signed, expiring cookie.",
            reason: "No new dependency, and an identity attaches to an existing account only when both sides have verified the same email, so sign-in cannot be used to take over an account.",
        },
    ],
    outcome:
        "Live at keyhol.me. Property-based, accessibility and acceptance-criteria tests caught an escrow release that could fire twice.",
    learnings: [
        "Who may release money is a product decision. It was first made in an if statement and nowhere else; now it has a record.",
        "Some bugs never fail loudly: on two Decimal values, + concatenates strings and >= compares text. Helpers exist so the wrong code is hard to write.",
    ],
    stack: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Next.js",
        "React Query",
    ],
    capabilities: [
        "payments",
        "auth-identity",
        "admin-tooling",
        "testing",
        "ci-delivery",
    ],
    links: {
        live: "https://keyhol.me",
        source: [
            {
                label: "Frontend",
                href: "https://github.com/Hckerson/keyhold-frontend",
            },
            {
                label: "API",
                href: "https://github.com/Hckerson/keyhold-backend",
            },
        ],
    },
    featured: true,
    order: 0,
};
