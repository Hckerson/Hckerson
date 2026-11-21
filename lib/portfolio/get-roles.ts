import { roles } from "@/lib/data/roles";
import type { Role } from "@/lib/types";

export const getRoles = (source: Role[] = roles) =>
    [...source].sort((a, b) => b.period.start.localeCompare(a.period.start));
