"use client";

import clsx from "clsx";
import Image from "next/image";
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
            {/* 531x856 matches the 1062x1712 sources. The old 500x1000
                declared a 1:2 box the images never had, and `bg-cover` is a
                background utility that does nothing to an <img>. */}
            <Image
                src={image}
                alt={`${title} project cover`}
                width={531}
                height={856}
                sizes="(max-width: 768px) 60vw, 320px"
                className="size-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
            />

            {/* The caption sits on arbitrary artwork, so it can't take its
                colours from the theme: `text-primary` went near-black in light
                mode over a 20%-opacity wash and vanished on dark screenshots.
                A dark scrim plus fixed white text reads on any image, and the
                height is content-driven — the old `h-10` was shorter than the
                line box it had to hold. */}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 via-black/55 to-transparent px-4 pt-10 pb-3 leading-[1.1]">
                <p className="font-clash sm-text font-semibold text-white">
                    {title}
                </p>
            </div>
        </div>
    );
}
