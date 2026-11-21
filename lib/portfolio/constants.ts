export const CASE_STUDY_KINDS = ["product", "client", "platform"] as const;

export const CASE_STUDY_STATUSES = [
    "live",
    "private",
    "in-development",
    "retired",
] as const;

export const STATUS_LABELS = {
    live: "Live",
    private: "Private",
    "in-development": "In development",
    retired: "Retired",
} as const;

export const OPPORTUNITY_TYPES = {
    role: "Role",
    internship: "Internship",
    freelance: "Freelance",
    other: "Other",
} as const;

export const AVAILABILITY_STATES = ["open", "limited", "closed"] as const;

export const CHANNEL_KINDS = [
    "email",
    "phone",
    "linkedin",
    "github",
    "x",
] as const;

export const CAPABILITIES = {
    payments: "Payments",
    "auth-identity": "Auth and identity",
    "admin-tooling": "Admin tooling",
    testing: "Testing",
    "ci-delivery": "CI and delivery",
    "api-contracts": "API contracts",
    "real-time-3d": "Real-time 3D",
} as const;

export const SKILL_GROUPS = {
    languages: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    testing: "Testing and CI",
    "security-payments": "Security and payments",
    tools: "Tools",
} as const;

export const TITLE_PATTERNS = {
    home: "Aderibigbe Emmanuel · Full-Stack Software Engineer",
    page: (name: string) => `${name} · Hckerson`,
} as const;

export const COPY = {
    work: "Work",
    about: "About",
    contact: "Contact",
    resume: "Résumé",
    caseStudy: "Case study",
    notFound: "Not found",
    error: "Error",
    present: "Present",
    sendMessage: "Send message",
    downloadResume: "Download résumé",
    copyEmail: "Copy email",
} as const;

export const FEATURED_FALLBACK_COUNT = 3;

export const PERIOD_PATTERN = /^\d{4}(-(0[1-9]|1[0-2]))?$/;

export const PERIOD_LABEL_FORMAT = "MMM yyyy";

export const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
