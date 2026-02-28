import { IconType } from "react-icons";
import {
    ProjectLevel,
    ProjectStatus,
    ProjectType,
    SkillCategory,
} from "./types";

export interface Navlink {
    name: string;
    link: string;
    icon: IconType;
    visible: string;
}


export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    image: string;
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
