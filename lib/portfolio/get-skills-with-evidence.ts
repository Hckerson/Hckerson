import { caseStudies } from "@/lib/data/case-studies";
import { roles } from "@/lib/data/roles";
import { skills } from "@/lib/data/skills";
import { SKILL_GROUPS } from "@/lib/portfolio/constants";
import type {
    CaseStudy,
    Role,
    Skill,
    SkillGroup,
    SkillGroupWithSkills,
} from "@/lib/types";

export const getSkillsWithEvidence = (
    source: Skill[] = skills,
    studies: CaseStudy[] = caseStudies,
    employers: Role[] = roles,
): SkillGroupWithSkills[] => {
    const known = new Set([
        ...studies.map((study) => study.slug),
        ...employers.map((role) => role.id),
    ]);
    const evidenced = source
        .map((skill) => ({
            ...skill,
            evidence: skill.evidence.filter((id) => known.has(id)),
        }))
        .filter((skill) => skill.evidence.length);
    return (Object.keys(SKILL_GROUPS) as SkillGroup[])
        .map((group) => ({
            group,
            skills: evidenced.filter((skill) => skill.group === group),
        }))
        .filter(({ skills: grouped }) => grouped.length);
};
