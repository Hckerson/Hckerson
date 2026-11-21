import type { CaseStudy } from "@/lib/types";

export const starterSystem: CaseStudy = {
    slug: "starter-system",
    title: "Starter System",
    summary:
        "A cross-language starter system. The NestJS API publishes its contract as openapi.json, the Next.js frontend generates its Zod schemas and typed routes from it, and Go and .NET API starters share the same contract.",
    kind: "platform",
    status: "in-development",
    role: "Author",
    period: { start: "2026-07" },
    problem:
        "Every new project started by rebuilding the same auth, layering and conventions, and the frontend's request shapes drifted from the API as soon as the backend changed.",
    decisions: [
        {
            title: "The API contract is generated, never hand-written",
            choice: "The NestJS API emits openapi.json, and the frontend generates its schemas and endpoints from it. A contract check fails when the two disagree.",
            reason: "One source of truth for every request shape, so drift becomes a failed check instead of a runtime bug.",
        },
        {
            title: "Conventions are lint rules",
            choice: "Custom ESLint rules, each with its own tests, enforce one component per file, pages that only compose, an API access boundary and no code comments. Fixes that span files ship as codemods.",
            reason: "A convention written in a document drifts. A rule that fails the lint run does not.",
        },
        {
            title: "A layered API with thin repositories",
            choice: "Controller, service, repository, then Prisma, with DTOs as the type source.",
            reason: "Business rules and query construction stay apart, so each can be read and tested on its own.",
        },
    ],
    outcome:
        "The Next.js and NestJS starters are public (the Go and .NET starters are private), and this portfolio is built on the frontend starter, including its WebGPU stage engine.",
    learnings: [
        "A convention only holds if something fails when it is broken.",
    ],
    stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zod",
        "three.js",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Vitest",
        "Go",
        "C# / .NET",
    ],
    capabilities: ["api-contracts", "testing", "auth-identity", "real-time-3d"],
    links: {
        source: [
            {
                label: "Frontend starter",
                href: "https://github.com/Hckerson/next-setup",
            },
            {
                label: "API starter",
                href: "https://github.com/Hckerson/nest-setup",
            },
        ],
    },
    featured: true,
    order: 2,
};
