"use client";
import clsx from "clsx";
import Image from "next/image";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { projects } from "@/lib/data/mapped-data";
import { PortfolioProject } from "@/lib/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import ProjectCard from "@/components/ui/cards/project-card";
import { Autoplay, EffectFade, EffectCoverflow } from "swiper/modules";
import { clashDisplay } from "@/public/fonts/font";
import Link from "next/link";
import Button from "@/components/ui/button";

export default function Projects() {
    const [currentProject, setCurrentProject] =
        useState<PortfolioProject | null>(projects[0]);
    const projectLength = projects.length;
    const [controlledSwiperInstance, setControlledSwiperInstance] =
        useState<SwiperType | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="relative h-screen w-full">
            <div className="absolute inset-0 z-10 w-full">
                <div className="relative size-full">
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
                                                src={
                                                    isMobile
                                                        ? project.image!
                                                        : project.landscape!
                                                }
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
            <div className="absolute left-1 z-30 my-auto flex h-full w-2.5 sm:left-4 xl:left-10">
                <div className="relative flex size-full">
                    <div className="relative my-auto flex h-full max-h-[80%] flex-col items-center justify-between">
                        <div className="bg-border absolute inset-y-0 z-0 mx-auto w-px opacity-50"></div>
                        {projects.map((project) => {
                            return (
                                <span
                                    key={project.id}
                                    className={clsx(
                                        "bg-surface-tertiary z-10 flex size-7 items-center justify-center rounded-full transition-all duration-800 ease-in",
                                        project.id === currentProject?.id
                                            ? "scale-100"
                                            : "scale-45",
                                    )}
                                >
                                    <p className="text-text-primary font-bold">
                                        {project.id}
                                    </p>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="relative z-40 ml-10 grid h-full  text-white sm:ml-12 md:translate-y-0 md:grid-cols-[45%_auto] xl:ml-24">
                <div className="relative flex size-full flex-col items-center justify-center pr-2 md:pl-0">
                    <span className="absolute">
                        <div className="overflow-hidden">
                            <p
                                className={clsx(
                                    "xxlarge-text font-semibold tracking-tighter",
                                    clashDisplay.className,
                                )}
                            >
                                {currentProject?.title}
                            </p>
                        </div>
                        <div className="sm-text overflow-hidden backdrop-blur-[2px]">
                            <p>{currentProject?.description}</p>
                        </div>
                        <div className="mt-6 block md:hidden">
                            <span className="sm-text flex space-x-3">
                                <Link
                                    href={`/projects/${currentProject?.id}`}
                                    className="focus:outline- size-fit"
                                >
                                    <Button
                                        size="sm"
                                        classname="bg-accent-cyan text-background"
                                    >
                                        View Project
                                    </Button>
                                </Link>
                                <Link href="/projects">
                                    <Button
                                        size="sm"
                                        classname="bg-transparent text-text-primary border border-border"
                                    >
                                        {`Let's Talk`}
                                    </Button>
                                </Link>
                            </span>
                        </div>
                    </span>
                </div>
                <div className=" md:relative absolute md:translate-x-0 translate-x-1000 md:flex md:h-full md:w-full">
                    <div className="relative my-auto flex w-full overflow-x-hidden [scrollbar-width:none]">
                        <Swiper
                            spaceBetween={isMobile ? 12.5 : 25}
                            slidesPerView={isMobile ? 1.75 : 2.5}
                            className="md:h-fit md:w-100 lg:w-130 xl:w-170"
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
