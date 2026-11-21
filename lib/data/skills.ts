import type { Skill } from "@/lib/types";

const KEYHOLD = "keyhold";
const CLIENT = "client-education-platform";
const STARTER = "starter-system";
const VOUCHMARK = "vouchmark";
const TEKCIFY = "tekcify";
const PIPECRAFT = "pipecraft";

const ALL = [KEYHOLD, CLIENT, STARTER, VOUCHMARK, TEKCIFY];
const JOBS = [VOUCHMARK, TEKCIFY];

export const skills: Skill[] = [
    { name: "TypeScript", group: "languages", evidence: ALL },
    { name: "JavaScript", group: "languages", evidence: [KEYHOLD, ...JOBS] },
    { name: "Go", group: "languages", evidence: [STARTER] },
    { name: "C#", group: "languages", evidence: [STARTER] },
    { name: "Python", group: "languages", evidence: [PIPECRAFT] },
    { name: "SQL", group: "languages", evidence: [KEYHOLD, CLIENT, ...JOBS] },
    {
        name: "NestJS",
        group: "backend",
        evidence: [KEYHOLD, CLIENT, STARTER, TEKCIFY],
    },
    { name: "Node.js", group: "backend", evidence: ALL },
    {
        name: "REST APIs",
        group: "backend",
        evidence: [KEYHOLD, STARTER, ...JOBS],
    },
    { name: "PostgreSQL", group: "backend", evidence: ALL },
    {
        name: "Prisma",
        group: "backend",
        evidence: [KEYHOLD, CLIENT, STARTER, TEKCIFY],
    },
    { name: "Drizzle", group: "backend", evidence: JOBS },
    { name: "Redis", group: "backend", evidence: JOBS },
    { name: "React", group: "frontend", evidence: [KEYHOLD, STARTER, ...JOBS] },
    { name: "Next.js", group: "frontend", evidence: ALL },
    {
        name: "Tailwind CSS",
        group: "frontend",
        evidence: [KEYHOLD, STARTER, ...JOBS],
    },
    {
        name: "React Query",
        group: "frontend",
        evidence: [KEYHOLD, STARTER, ...JOBS],
    },
    { name: "Zustand", group: "frontend", evidence: [KEYHOLD] },
    { name: "Jest", group: "testing", evidence: [KEYHOLD, ...JOBS] },
    { name: "Vitest", group: "testing", evidence: [KEYHOLD, STARTER, ...JOBS] },
    { name: "Supertest", group: "testing", evidence: [KEYHOLD, ...JOBS] },
    { name: "Testing Library", group: "testing", evidence: [KEYHOLD, ...JOBS] },
    { name: "fast-check", group: "testing", evidence: [KEYHOLD] },
    {
        name: "GitHub Actions",
        group: "testing",
        evidence: [KEYHOLD, CLIENT, ...JOBS],
    },
    {
        name: "OAuth 2.0 / OIDC",
        group: "security-payments",
        evidence: [KEYHOLD, ...JOBS],
    },
    {
        name: "JWT",
        group: "security-payments",
        evidence: [KEYHOLD, STARTER, ...JOBS],
    },
    { name: "RBAC", group: "security-payments", evidence: [KEYHOLD, TEKCIFY] },
    { name: "TOTP MFA", group: "security-payments", evidence: JOBS },
    {
        name: "CSP & CSRF",
        group: "security-payments",
        evidence: [KEYHOLD, VOUCHMARK],
    },
    {
        name: "Paystack",
        group: "security-payments",
        evidence: [VOUCHMARK, CLIENT],
    },
    { name: "Stripe", group: "security-payments", evidence: [KEYHOLD] },
    { name: "Git", group: "tools", evidence: ALL },
    { name: "Docker", group: "tools", evidence: [KEYHOLD, VOUCHMARK] },
    { name: "Vercel", group: "tools", evidence: [KEYHOLD] },
    { name: "Claude Code", group: "tools", evidence: [STARTER] },
];
