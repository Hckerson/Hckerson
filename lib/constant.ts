const initial = "HK";

const siteConfig = {
    name: "Hckerson",
    title: "Hckerson — Full-Stack Engineer",
    description:
        "Full-Stack Engineer building high-performance products at the intersection of design and scalable architecture.",
    email: "hckerson@gmail.com",
    github: "https://github.com/hckerson",
    twitter: "https://twitter.com/hckerson_jnr",
    linkedin: "https://www.linkedin.com/in/hckerson/",
    // Absolute base for canonical URLs, OpenGraph images and the sitemap.
    // SET NEXT_PUBLIC_SITE_URL FOR PRODUCTION — the localhost fallback keeps
    // local builds correct but will emit unusable share URLs if deployed.
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4004",
} as const;

// There is no /contact route. The hero and about CTAs used to point at
// /contact and /about, both of which 404'd.
const contactHref = `mailto:${siteConfig.email}`;

export { initial, siteConfig, contactHref };
