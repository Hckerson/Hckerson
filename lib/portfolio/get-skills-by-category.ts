import { skills } from "@/lib/data/portfolio";
import type { Skill, SkillCategory } from "@/lib/types";

export function getSkillsByCategory(list: Skill[] = skills) {
    const groups = new Map<SkillCategory, Skill[]>();
    for (const skill of list) {
        for (const category of skill.categories) {
            groups.set(category, [...(groups.get(category) ?? []), skill]);
        }
    }
    return groups;
}
