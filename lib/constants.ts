export const DATE_VALUE_FORMAT = "yyyy-MM-dd";

export const SESSION_COOKIE = "session";

export const AUTH_ROUTE_PREFIX = "/auth";

export const LOGIN_ROUTE = `${AUTH_ROUTE_PREFIX}/login`;

export const HOME_ROUTE = "/";

export const PROTECTED_ROUTE_PREFIXES = ["/dashboard"];

export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

export const INVALID_CREDENTIALS = "Email or password is incorrect";

export const INVALID_REQUEST = "The request body is invalid";

export const REQUEST_FAILED = "The request could not be completed";

export const SESSION_UNAVAILABLE = "The account was created but sign-in failed";

export const PASSWORD_MIN_LENGTH = 8;

export const MOTION_DURATION = {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
    slower: 0.8,
} as const;

export const MOTION_SPRING = {
    type: "spring",
    stiffness: 100,
    damping: 30,
} as const;

export const STAGE_WEBGL_PARAM = "webgl";

export const WORK_ROUTE = "/work";

export const workRoute = (slug: string) => `${WORK_ROUTE}/${slug}`;

export const ABOUT_ROUTE = "/about";

export const CONTACT_ROUTE = "/contact";

export const RESUME_PATH = "/aderibigbe-emmanuel-resume.pdf";

export const HEADSHOT_PATH = "/images/headshot.jpg";

export const LEGACY_REDIRECTS = [
    { source: "/resume", destination: RESUME_PATH },
    { source: "/cv", destination: RESUME_PATH },
    { source: "/projects", destination: WORK_ROUTE },
    { source: "/projects/:slug", destination: `${WORK_ROUTE}/:slug` },
] as const;

export const SITE_CONFIG = {
    name: "Hckerson",
    url: "https://hckerson.vercel.app",
    title: "Aderibigbe Emmanuel · Full-Stack Software Engineer",
    description:
        "Full-stack engineer building payments, identity and verification systems in production with TypeScript, NestJS, PostgreSQL, React and Next.js.",
} as const;

export const MAIN_CONTENT_ID = "main-content";

export const MESSAGE_LIMITS = {
    nameMax: 120,
    organisationMax: 160,
    emailMax: 254,
    bodyMin: 20,
    bodyMax: 5000,
    minFillMs: 3000,
    windowMs: 60 * 60 * 1000,
    maxPerWindow: 5,
} as const;
