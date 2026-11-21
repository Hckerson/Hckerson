import { PROJECT_NUMBER_PREFIX } from "@/lib/portfolio/constants";

export function formatProjectNumber(id: number) {
    return `${PROJECT_NUMBER_PREFIX} ${String(id).padStart(2, "0")}`;
}
