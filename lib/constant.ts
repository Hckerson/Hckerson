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
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4004",
} as const;

const contactHref = `mailto:${siteConfig.email}`;

const contactHrefFor = (subject: string) =>
    `${contactHref}?subject=${encodeURIComponent(subject)}`;

export { initial, siteConfig, contactHref, contactHrefFor };
