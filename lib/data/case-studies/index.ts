import type { CaseStudy } from "@/lib/types";
import { clientEducationPlatform } from "@/lib/data/case-studies/client-education-platform";
import { keyhold } from "@/lib/data/case-studies/keyhold";
import { pipecraft } from "@/lib/data/case-studies/pipecraft";
import { starterSystem } from "@/lib/data/case-studies/starter-system";

export const caseStudies: CaseStudy[] = [
    keyhold,
    clientEducationPlatform,
    starterSystem,
    pipecraft,
];
