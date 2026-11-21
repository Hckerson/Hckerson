import { projects } from "@/lib/data/portfolio";
import type { PortfolioProject } from "@/lib/types";

export function getAdjacentProjects(
    id: number,
    list: PortfolioProject[] = projects,
) {
    const index = list.findIndex((project) => project.id === id);
    if (index === -1 || list.length < 2) return null;
    return {
        previous: list[(index - 1 + list.length) % list.length],
        next: list[(index + 1) % list.length],
    };
}
