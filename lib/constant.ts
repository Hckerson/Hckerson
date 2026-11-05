const initial = "HK";

/**
 * Freelance pricing is hidden from the nav and sitemap while applying for
 * roles — a rate card reads as "wants clients, not a job" to a recruiter.
 * The /pricing route still resolves; flip this to bring it back.
 */
const showPricing: boolean = false;

const siteConfig = {
    name: "Hckerson",
    legalName: "Aderibigbe Emmanuel",
    role: "Full-Stack Engineer",
    location: "Lagos, Nigeria",
    university: "Obafemi Awolowo University",
    title: "Hckerson — Full-Stack Engineer",
    description:
        "Full-Stack Engineer building high-performance products at the intersection of design and scalable architecture.",
    email: "hckerson@gmail.com",
    github: "https://github.com/hckerson",
    twitter: "https://twitter.com/hckerson_jnr",
    linkedin: "https://www.linkedin.com/in/hckerson/",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4004",
} as const;

const contactHref = `mailto:${siteConfig.email}`;

const contactHrefFor = (subject: string) =>
    `${contactHref}?subject=${encodeURIComponent(subject)}`;

/** Every internal path the site links to. Build URLs from these, never literals. */
const routes = {
    home: "/",
    projects: "/projects",
    project: (id: number | string) => `/projects/${id}`,
    pricing: "/pricing",
    resume: "/resume.pdf",
} as const;

/** Routes, and everything under them, that render without the site footer. */
const footerHiddenRoutes: string[] = [routes.projects, routes.pricing];

/** File name the resume downloads as, from both the route and the link. */
const resumeFileName = `${siteConfig.name.toLowerCase()}-resume.pdf`;

/** Below Tailwind's `lg` breakpoint the projects page switches to its mobile layout. */
const mobileMediaQuery = "(max-width: 1023px)";

/** Milliseconds each project holds in the /projects carousel before it advances. */
const projectsAutoplayDelay = 2000;

export {
    initial,
    siteConfig,
    showPricing,
    contactHref,
    contactHrefFor,
    routes,
    footerHiddenRoutes,
    resumeFileName,
    mobileMediaQuery,
    projectsAutoplayDelay,
};
