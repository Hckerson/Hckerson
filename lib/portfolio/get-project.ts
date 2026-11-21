import { projects } from "@/lib/data/portfolio";
import type { PortfolioProject } from "@/lib/types";

export function getProject(id: string, list: PortfolioProject[] = projects) {
    return list.find((project) => String(project.id) === id);
}
