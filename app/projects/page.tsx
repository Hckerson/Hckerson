"use client";
import clsx from "clsx";
import Image from "next/image";
import "swiper/css/effect-fade";
import { useState } from "react";
import { projects } from "@/lib/data/mapped-data";
import { PortfolioProject } from "@/lib/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import ProjectCard from "@/components/ui/cards/project-card";
import { Autoplay, EffectFade, EffectCoverflow } from "swiper/modules";

export default function Projects() {
    const [currentProject, setCurrentProject] =
        useState<PortfolioProject | null>(projects[0]);
    const projectLength = projects.length;
    const [controlledSwiperInstance, setControlledSwiperInstance] =
        useState<SwiperType | null>(null);

    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 z-10 w-full">
                <div className="relative size-full">
                    <div className="absolute inset-0 bg-black/50">
                        <Swiper
                            slidesPerView={1}
                            className="h-screen w-screen"
                            modules={[EffectFade, EffectCoverflow]}
                            onSwiper={setControlledSwiperInstance}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 30,
                                slideShadows: false,
                            }}
                            loop={true}
                            fadeEffect={{ crossFade: true }}
                            allowTouchMove={false}
                        >
                            {projects.map((project) => {
                                return (
                                    <SwiperSlide key={project.id} className="">
                                        {({ isActive }) => (
                                            <div className="relative size-full">
                                                <Image
                                                    src={project.landscape!}
                                                    alt={project.title}
                                                    fill
                                                    className="bg-cover bg-center"
                                                />
                                                <div className="absolute inset-0 bg-black/50"></div>
                                            </div>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="absolute left-10 z-30 my-auto flex h-full w-2.5">
                <div className="relative flex size-full">
                    <div className="relative my-auto flex h-full max-h-[80%] flex-col items-center justify-between">
                        <div className="absolute inset-y-0 z-0 mx-auto w-px bg-stone-500 opacity-50"></div>
                        {projects.map((project) => {
                            return (
                                <span
                                    key={project.id}
                                    className={clsx(
                                        "z-10 flex size-7 items-center justify-center rounded-full bg-stone-500 transition-all duration-800 ease-in",
                                        project.id === currentProject?.id
                                            ? "scale-100"
                                            : "scale-45",
                                    )}
                                >
                                    <p className="font-bold">{project.id}</p>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="relative z-40 ml-24 grid h-full grid-cols-[45%_auto]">
                <div className="relative flex size-full flex-col items-center justify-center">
                    <span className="absolute">
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
                    <div className="relative my-auto flex w-full overflow-x-auto [scrollbar-width:none]">
                        <Swiper
                            spaceBetween={25}
                            slidesPerView={2.5}
                            className="xl:w-170"
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => {
                                setCurrentProject(projects[swiper.realIndex]);
                                if (
                                    controlledSwiperInstance &&
                                    !controlledSwiperInstance.destroyed
                                ) {
                                    controlledSwiperInstance.slideToLoop(
                                        swiper.realIndex,
                                    );
                                }
                            }}
                        >
                            {projects.map((project) => {
                                return (
                                    <SwiperSlide key={project.id} className="">
                                        {({ isActive }) => (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                            >
                                                <ProjectCard
                                                    hidden
                                                    data={project}
                                                    isActive={isActive}
                                                />
                                            </a>
                                        )}
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
