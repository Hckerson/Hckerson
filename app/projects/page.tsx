import { PortfolioProject } from "@/lib/interface";
import { useState } from "react";

export default function Projects() {
    const [currentProject, setCurrentProject] =
        useState<PortfolioProject | null>(null);
    return <div className="h-screen w-full"></div>;
}
