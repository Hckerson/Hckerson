import { caseStudies } from "@/lib/data/case-studies";
import { FEATURED_FALLBACK_COUNT } from "@/lib/portfolio/constants";
import { sortByOrder } from "@/lib/portfolio/sort-by-order";
import type { CaseStudy } from "@/lib/types";

export const getFeaturedCaseStudies = (studies: CaseStudy[] = caseStudies) => {
    const ordered = sortByOrder(studies);
    const featured = ordered.filter((study) => study.featured);
    return featured.length
        ? featured
        : ordered.slice(0, FEATURED_FALLBACK_COUNT);
};
