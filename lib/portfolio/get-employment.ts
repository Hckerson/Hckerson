import { workExperience } from "@/lib/data/portfolio";
import type { WorkExperience } from "@/lib/types";

export function getEmployment(list: WorkExperience[] = workExperience) {
    return list.filter((entry) => entry.kind === "employment");
}
