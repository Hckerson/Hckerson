import { caseStudies } from "@/lib/data/case-studies";
import { sortByOrder } from "@/lib/portfolio/sort-by-order";
import type { AdjacentCaseStudies, CaseStudy } from "@/lib/types";

export const getAdjacentCaseStudies = (
    slug: string,
    studies: CaseStudy[] = caseStudies,
): AdjacentCaseStudies => {
    const ordered = sortByOrder(studies);
    const index = ordered.findIndex((study) => study.slug === slug);
    if (index < 0) return {};
    return { previous: ordered[index - 1], next: ordered[index + 1] };
};
