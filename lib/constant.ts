const initial = "HK";

const siteConfig = {
    name: "Hckerson",
    email: "hckerson@gmail.com",
    github: "https://github.com/hckerson",
    twitter: "https://twitter.com/hckerson_jnr",
    linkedin: "https://www.linkedin.com/in/hckerson/",
} as const;

// There is no /contact route. The hero and about CTAs used to point at
// /contact and /about, both of which 404'd.
const contactHref = `mailto:${siteConfig.email}`;

export { initial, siteConfig, contactHref };
