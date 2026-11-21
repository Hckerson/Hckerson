import type { z } from "zod";
import type {
    availabilitySchema,
    capabilitySchema,
    caseStudyLinksSchema,
    caseStudySchema,
    channelSchema,
    decisionSchema,
    educationSchema,
    imageSchema,
    periodSchema,
    profileSchema,
    roleSchema,
    skillGroupSchema,
    skillSchema,
} from "@/lib/validations/portfolio";

export type Period = z.infer<typeof periodSchema>;
export type Capability = z.infer<typeof capabilitySchema>;
export type Availability = z.infer<typeof availabilitySchema>;
export type Channel = z.infer<typeof channelSchema>;
export type PortfolioImage = z.infer<typeof imageSchema>;
export type Profile = z.infer<typeof profileSchema>;
export type Decision = z.infer<typeof decisionSchema>;
export type CaseStudyLinks = z.infer<typeof caseStudyLinksSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type CaseStudyKind = CaseStudy["kind"];
export type CaseStudyStatus = CaseStudy["status"];
export type Role = z.infer<typeof roleSchema>;
export type Education = z.infer<typeof educationSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Skill = z.infer<typeof skillSchema>;

export interface SkillGroupWithSkills {
    group: SkillGroup;
    skills: Skill[];
}

export interface AdjacentCaseStudies {
    previous?: CaseStudy;
    next?: CaseStudy;
}
