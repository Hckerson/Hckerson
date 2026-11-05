/**
 * Freelance pricing is kept out of the sitemap while applying for roles — a
 * rate card reads as "wants clients, not a job" to a recruiter. Flip this to
 * bring it back.
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
    email: "emmanueladeribigbe415@gmail.com",
    github: "https://github.com/hckerson",
    twitter: "https://twitter.com/hckerson_jnr",
    linkedin: "https://www.linkedin.com/in/hckerson/",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4004",
} as const;

export { siteConfig, showPricing };
