import { keyhold } from "@/lib/data/case-studies/keyhold";
import type { CaseStudy } from "@/lib/types";

export const studyFixture = (
    slug: string,
    order: number,
    featured = false,
): CaseStudy => ({
    ...keyhold,
    slug,
    order,
    featured,
});
