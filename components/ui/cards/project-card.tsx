import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FolderClosed } from "lucide-react";
import { clashDisplay } from "@/public/fonts/font";
import { ProjectStatus, Color } from "@/lib/types";
import { PortfolioProject } from "@/lib/interface";

const projectDefinitions: Record<ProjectStatus, { bg: Color; label: string }> =
    {
        active: { bg: "green", label: "Active" },
        planned: { bg: "ash", label: "Planned" },
        backlog: { bg: "orange", label: "Backlog" },
        completed: { bg: "blue", label: "Completed" },
    };

export default function ProjectCard({ data }: { data: PortfolioProject }) {
    const { title, description, image, status } = data;
    const props = projectDefinitions[status];
    return (
        <div className="flex h-100 overflow-hidden rounded-xl border border-stone-500 p-5 md:rounded-2xl xl:rounded-3xl xl:p-6">
            <div className="h-full w-full">
                <Image
                    src={image}
                    alt={`Project-${title} thunbnail`}
                    fill
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="absolute inset-x-0 z-10 space-y-4 bg-linear-to-b from-stone-950 to-stone-900 p-4 md:p-5 xl:p-6">
                <p
                    className={clsx(
                        clashDisplay.className,
                        "large-text font-semibold",
                    )}
                >
                    {title}
                </p>
                <p className="base-text">{description}</p>
            </div>
        </div>
    );
}
