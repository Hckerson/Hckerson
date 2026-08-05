"use client";

import clsx from "clsx";
import Image from "next/image";
import { Eye, Menu } from "lucide-react";
import { clashDisplay } from "@/lib/fonts";
import { PortfolioProject } from "@/lib/interface";

export default function ProjectCard({
    data,
    hidden = false,
    isActive = false,
}: {
    data: PortfolioProject;
    hidden?: boolean;
    isActive?: boolean;
}) {
    const { title, image } = data;
    return (
        <div
            className={clsx(
                "group relative flex flex-col overflow-hidden transition-all duration-300 ease-in-out",
                hidden
                    ? "min-w-50 rounded-lg md:min-h-80 md:rounded-xl xl:min-h-100 xl:rounded-2xl"
                    : "min-w-70 rounded-xl md:min-h-70 md:rounded-2xl xl:min-h-90 xl:rounded-3xl",
                isActive ? "scale-y-100" : "scale-y-80",
            )}
        >
            <div className="bg-background absolute inset-0 hidden opacity-20 transition-all duration-300 ease-in-out hover:translate-y-full"></div>
            {!hidden && (
                <>
                    <span className="bg-background absolute -top-10 -left-10 z-20 flex size-9 items-center justify-center rounded-full transition-all duration-500 ease-in-out group-hover:translate-15">
                        <Menu
                            className="text-text-primary my-auto flex size-6 hover:scale-105"
                            aria-hidden="true"
                        />
                    </span>
                    <span className="bg-background absolute -top-10 -right-10 z-20 flex size-9 items-center justify-center rounded-full transition-all duration-500 ease-in-out group-hover:-translate-x-15 group-hover:translate-y-15">
                        <Eye
                            className="text-text-primary my-auto flex size-6 hover:scale-105"
                            aria-hidden="true"
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

            <div className="bg-background/20 absolute inset-x-0 bottom-0 h-10 space-y-1 p-4 leading-[1.1] backdrop-blur-md">
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
