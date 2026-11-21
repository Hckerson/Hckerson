import { SITE_CONFIG } from "@/lib/constants";
import type { ProjectStatus } from "@/lib/types";

export const STATUS_LABELS: Record<ProjectStatus, string> = {
    completed: "Completed",
    active: "In progress",
    planned: "Planned",
    backlog: "Backlog",
};

export const PROJECT_NUMBER_PREFIX = "No.";

export const COPY = {
    skipLink: "Skip to content",
    contents: "Contents",
    projects: "Projects",
    index: "Index",
    about: "About",
    contact: "Contact",
    allProjects: "All projects",
    readTheWork: "Read the work",
    emailMe: "Email me",
    liveBuild: "Live build",
    source: "Source",
    stack: "Stack",
    learned: "What I learned",
    previous: "Previous",
    next: "Next",
    moreProjects: "More projects",
    newTab: "(opens in a new tab)",
    nowAt: "Now",
    selectedWork: "Selected work",
    elsewhere: "Elsewhere",
    contactLead: "Hiring, or have something to build?",
    notFoundTitle: "This page is not in the contents",
    notFoundBody:
        "The link may be old or mistyped. Everything that exists is listed below.",
    noProjects: "New work is on the way. Meanwhile, read about my experience.",
} as const;

export const SOCIAL_LINKS = [
    { label: "GitHub", href: SITE_CONFIG.github },
    { label: "LinkedIn", href: SITE_CONFIG.linkedin },
    { label: "X", href: SITE_CONFIG.twitter },
] as const;
