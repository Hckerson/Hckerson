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



