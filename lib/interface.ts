import type { ComponentType } from "react";
import { ExperienceKind, ProjectStatus, SkillCategory } from "./types";

export interface Navlink {
    name: string;
    link: string;
    icon: ComponentType<{ className?: string }>;
    external?: boolean;
}

export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    image: string;
    landscape?: string;
    tags: string[];
    status: ProjectStatus;
    liveUrl: string;
    githubUrl: string;
    category: string;
    learnings: string;
}

export interface WorkExperience {
    title: string;
    /**
     * Paid employment or self-directed work. Personal projects are labelled as
     * such in the UI so they are never mistaken for a job.
     */
    kind: ExperienceKind;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    skills: string[];
    description: string;
    achievements: string[];
}

export interface Education {
    degree: string;
    institution: string;
    /** Start year. */
    start: string;
    /** Graduation year, or the expected one while still enrolled. */
    end: string;
    /** True while enrolled — renders `end` as "Expected <year>". */
    inProgress?: boolean;
    description: string;
    coursework?: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    year: string;
}

export interface Skill {
    name: string;
    icon: string;
    categories: SkillCategory[];
}

export interface PricingPlan {
    name: string;
    price: number | string;
    description: string;
    features: string[];
    isPopular?: boolean;
    starter?: string;
}
