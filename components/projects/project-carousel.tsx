"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProjectCard from "@/components/ui/cards/project-card";
import { projects } from "@/lib/data/mapped-data";
import { projectsAutoplayDelay, routes } from "@/lib/constant";

/** Autoplaying card carousel; each slide change drives the rest of the page. */
export default function ProjectCarousel({
    isMobile,
    onSlideChange,
}: {
    isMobile: boolean;
    onSlideChange: (index: number) => void;
}) {
    return (
        <div className="absolute translate-x-1000 md:relative md:flex md:h-full md:w-full md:translate-x-0">
            <div className="relative my-auto flex w-full overflow-x-hidden [scrollbar-width:none]">
                <Swiper
                    spaceBetween={isMobile ? 12.5 : 25}
                    slidesPerView={isMobile ? 1.75 : 2.5}
                    className="md:h-fit md:w-100 lg:w-130 xl:w-170"
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: projectsAutoplayDelay,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
                >
                    {projects.map((project) => {
                        return (
                            <SwiperSlide key={project.id} className="">
                                {({ isActive }) => (
                                    <Link
                                        href={routes.project(project.id)}
                                        aria-label={`View the ${project.title} project`}
                                    >
                                        <ProjectCard
                                            hidden
                                            data={project}
                                            isActive={isActive}
                                        />
                                    </Link>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
