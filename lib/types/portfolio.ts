export type ProjectStatus = "active" | "planned" | "backlog" | "completed";

export type ExperienceKind = "employment" | "personal-project";

export type SkillCategory =
    | "Markup Language"
    | "Styling"
    | "Programming Language"
    | "Frontend Library"
    | "Fullstack Framework"
    | "Animations"
    | "Backend Runtime"
    | "Database"
    | "Auth"
    | "Backend Framework"
    | "Web Framework"
    | "Version Control"
    | "Search Optimization"
    | "other";

export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    tags: string[];
    status: ProjectStatus;
    liveUrl: string;
    githubUrl: string;
    category: string;
    learnings: string;
}

export interface WorkExperience {
    title: string;
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
    start: string;
    end: string;
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
