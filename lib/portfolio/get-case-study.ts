import { caseStudies } from "@/lib/data/case-studies";
import type { CaseStudy } from "@/lib/types";

export const getCaseStudy = (
    slug: string,
    studies: CaseStudy[] = caseStudies,
) => studies.find((study) => study.slug === slug);
