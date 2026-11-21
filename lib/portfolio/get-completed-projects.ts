import { projects } from "@/lib/data/portfolio";
import type { PortfolioProject } from "@/lib/types";

export function getCompletedProjects(list: PortfolioProject[] = projects) {
    return list.filter((project) => project.status === "completed");
}
