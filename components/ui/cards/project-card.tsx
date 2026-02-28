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
        <div className="relative flex h-90 flex-col overflow-hidden rounded-xl md:rounded-2xl xl:rounded-3xl">
            <div className="relative max-h-60 w-full flex-1">
                <div className="absolute inset-0 bg-black opacity-20 transition-all duration-300 ease-in-out hover:translate-y-full"></div>
                <Image
                    src={image}
                    alt={`Project-${title} thunbnail`}
                    width={500}
                    height={500}
                    className="w-full transition-all duration-300 ease-in-out hover:scale-110"
                />
            </div>
            <div className="relative h-30 space-y-1 bg-linear-to-b from-stone-950 to-stone-900 p-4 leading-[1.1] md:p-5">
                <p
                    className={clsx(
                        clashDisplay.className,
                        "base-text font-semibold",
                    )}
                >
                    {title}
                </p>
                <p className="xs-text">{description}</p>
            </div>
        </div>
    );
}
