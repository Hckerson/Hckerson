import type { CaseStudy } from "@/lib/types";

export const sortByOrder = (studies: CaseStudy[]) =>
    [...studies].sort((a, b) => a.order - b.order);
