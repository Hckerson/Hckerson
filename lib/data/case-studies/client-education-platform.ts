import type { CaseStudy } from "@/lib/types";

export const clientEducationPlatform: CaseStudy = {
    slug: "client-education-platform",
    title: "Client Education Platform",
    summary:
        "A freelance education platform with contests and judging, mentoring, school management and an in-app Paystack wallet, serving students, guardians, schools, mentors and judges.",
    kind: "client",
    status: "private",
    role: "Architect; built the backend and admin console",
    period: { start: "2026" },
    problem:
        "One platform had to serve five kinds of user, students among them, so child safety was a requirement of the product rather than a policy page.",
    decisions: [
        {
            title: "Policy requirements are acceptance tests",
            choice: "Guardian consent with age checks, a tamper-proof audit log, data-subject requests and a breach register are implemented, and the client's policy requirements run as automated acceptance tests.",
            reason: "A requirement written as a test fails the build when it regresses. A requirement written in a document does not.",
        },
        {
            title: "Every pull request passes a release gate",
            choice: "End-to-end tests against a real Postgres database, type-check, lint and an API-contract check run on every pull request.",
            reason: "The contract check keeps both frontends in sync with the API, so a breaking change is caught before it merges.",
        },
    ],
    outcome:
        "Pre-launch. The backend and admin console are built, with the compliance requirements and the release gate in place.",
    learnings: [
        "When children are among the users, compliance is a feature with tests, not a document.",
    ],
    stack: [
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Next.js",
        "Paystack",
        "GitHub Actions",
    ],
    capabilities: [
        "payments",
        "auth-identity",
        "admin-tooling",
        "testing",
        "ci-delivery",
        "api-contracts",
    ],
    links: {},
    featured: true,
    order: 1,
};
