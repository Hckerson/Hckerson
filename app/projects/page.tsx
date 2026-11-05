"use client";
import "swiper/css";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { projects } from "@/lib/data/mapped-data";
import type { PortfolioProject } from "@/lib/interface";
import { mobileMediaQuery } from "@/lib/constant";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProjectBackdrop from "@/components/projects/project-backdrop";
import ProjectRail from "@/components/projects/project-rail";
import ProjectDetail from "@/components/projects/project-detail";
import ProjectCarousel from "@/components/projects/project-carousel";

export default function Projects() {
    const [currentProject, setCurrentProject] = useState<PortfolioProject>(
        projects[0],
    );
    const [controlledSwiperInstance, setControlledSwiperInstance] =
        useState<SwiperType | null>(null);
    const isMobile = useMediaQuery(mobileMediaQuery);

    const handleSlideChange = (index: number) => {
        setCurrentProject(projects[index]);
        if (controlledSwiperInstance && !controlledSwiperInstance.destroyed) {
            controlledSwiperInstance.slideToLoop(index);
        }
    };

    return (
        <div className="relative h-screen w-full">
            <ProjectBackdrop
                isMobile={isMobile}
                onSwiper={setControlledSwiperInstance}
            />
            <ProjectRail currentId={currentProject.id} />
            <div className="relative z-40 ml-10 grid h-full overflow-hidden text-white sm:ml-12 md:translate-y-0 md:grid-cols-[45%_auto] xl:ml-24">
                <ProjectDetail project={currentProject} />
                <ProjectCarousel
                    isMobile={isMobile}
                    onSlideChange={handleSlideChange}
                />
            </div>
        </div>
    );
}
