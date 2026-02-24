import { IconType } from "react-icons";
import { ProjectLevel, ProjectStatus, ProjectType } from "./types";

export interface Navlink {
    name: string;
    link: string;
    icon: IconType;
    visible: string;
}

export interface Project {
    date: string;
    name: string;
    category: string;
    type: ProjectType;
    thumbnailSrc: string;
    description: string;
    level: ProjectLevel;
    status: ProjectStatus;
}

export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
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
