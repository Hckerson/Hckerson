"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FolderClosed } from "lucide-react";
import { Icon } from "@iconify-icon/react";
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

export default function ProjectCard({
    data,
    hidden = false,
    isActive = false,
}: {
    data: PortfolioProject;
    hidden?: boolean;
    isActive?: boolean;
}) {
    const { title, description, image, status } = data;
    const props = projectDefinitions[status];
    return (
        <div
            className={clsx(
                "group relative flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
                hidden
                    ? "min-h-100 min-w-50 rounded-lg md:rounded-xl xl:rounded-2xl"
                    : "min-h-90 min-w-70 rounded-xl md:rounded-2xl xl:rounded-3xl",
                isActive ? "scale-y-100" : "scale-y-80",
            )}
        >
            <div className="absolute inset-0 hidden bg-black opacity-20 transition-all duration-300 ease-in-out hover:translate-y-full"></div>
            {!hidden && (
                <>
                    <span className="absolute -top-10 -left-10 z-20 flex size-9 items-center justify-center rounded-full bg-black transition-all duration-500 ease-in-out group-hover:translate-15">
                        <Icon
                            icon="solar:hamburger-menu-broken"
                            width="24"
                            height="24"
                            className="my-auto flex stroke-2 text-white hover:scale-105"
                        />
                    </span>
                    <span className="absolute -top-10 -right-10 z-20 flex size-9 items-center justify-center rounded-full bg-black transition-all duration-500 ease-in-out group-hover:-translate-x-15 group-hover:translate-y-15">
                        <Icon
                            icon="arcticons:cinexplore"
                            width="24"
                            height="24"
                            className="my-auto flex stroke-2 text-white hover:scale-105"
                        />
                    </span>
                </>
            )}
            <Image
                src={image}
                alt={`Project-${title} thunbnail`}
                width={500}
                height={1000}
                className="size-full bg-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-10 space-y-1 bg-black/20 p-4 leading-[1.1] backdrop-blur-md">
                <p
                    className={clsx(
                        clashDisplay.className,
                        "sm-text font-semibold",
                    )}
                >
                    {title}
                </p>
            </div>
        </div>
    );
}
