import {
    HOME_ROUTE,
    SITE_CONFIG,
    WORK_ROUTE,
    workRoute,
} from "@/lib/constants";
import { COPY } from "@/lib/portfolio/constants";
import type { CaseStudy, Profile } from "@/lib/types";

const absolute = (path: string) => new URL(path, SITE_CONFIG.url).toString();

export const personJsonLd = (person: Profile) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    alternateName: person.handle,
    jobTitle: person.title,
    url: SITE_CONFIG.url,
    image: absolute(person.headshot.src),
    address: { "@type": "PostalAddress", addressLocality: person.location },
    sameAs: person.channels
        .filter((channel) => channel.href.startsWith("https:"))
        .map((channel) => channel.href),
});

export const caseStudyJsonLd = (study: CaseStudy, person: Profile) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: absolute(workRoute(study.slug)),
    author: { "@type": "Person", name: person.name },
    keywords: study.stack.join(", "),
});

export const caseStudyBreadcrumbJsonLd = (study: CaseStudy) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { name: SITE_CONFIG.name, path: HOME_ROUTE },
        { name: COPY.work, path: WORK_ROUTE },
        { name: study.title, path: workRoute(study.slug) },
    ].map(({ name, path }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item: absolute(path),
    })),
});
