"use client";
import clsx from "clsx";
import { useState } from "react";
import { projects } from "@/lib/data/mapped-data";
import { PortfolioProject } from "@/lib/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "@/components/ui/cards/project-card";

export default function Projects() {
    const [currentProject, setCurrentProject] =
        useState<PortfolioProject | null>();
    const projectLength = projects.length;

    return (
        <div className="relative h-screen w-full">
            <div className="absolute left-10 my-auto flex h-full w-[10px]">
                <div className="relative flex size-full">
                    <div className="relative my-auto flex h-full max-h-[80%] flex-col items-center justify-between">
                        <div className="absolute inset-y-0 z-0 mx-auto w-px bg-stone-500 opacity-50"></div>
                        {projects.map((project) => {
                            return (
                                <span
                                    key={project.id}
                                    className={clsx(
                                        "z-10 flex size-9 items-center justify-center rounded-full bg-stone-500 transition-all duration-800 ease-in",
                                        project.id === currentProject?.id
                                            ? "scale-100"
                                            : "scale-45",
                                    )}
                                >
                                    <p className="font-semibold">
                                        {project.id}
                                    </p>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="ml-24 grid h-full grid-cols-2">
                <div className="relative flex size-full flex-col items-center justify-center">
                    <span className="absolute px-16">
                        <div className="overflow-hidden">
                            <p className="xxlarge-text font-semibold tracking-tighter">
                                {currentProject?.title}
                            </p>
                        </div>
                        <div className="overflow-hidden">
                            <p>{currentProject?.description}</p>
                        </div>
                    </span>
                </div>
                <div className="flex h-full">
                    <div className="my-auto flex w-full overflow-x-auto [scrollbar-width:none]">
                        {projects.map((project) => {
                            return (
                                <ProjectCard key={project.id} data={project} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
