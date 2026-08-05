import type { ComponentType } from "react";
import { ProjectStatus, SkillCategory } from "./types";

export interface Navlink {
    name: string;
    link: string;
    // Structural rather than react-icons' IconType, so lucide icons and the
    // local brand SVGs in components/ui/brand-icons.tsx both satisfy it.
    icon: ComponentType<{ className?: string }>;
    visible: string;
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

export interface Article {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    tags: string[];
    url: string;
}

export interface WorkExperience {
    title: string;
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
    year: string;
    description: string;
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
