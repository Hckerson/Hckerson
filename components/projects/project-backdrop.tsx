"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { EffectCoverflow } from "swiper/modules";
import { projects } from "@/lib/data/mapped-data";

/** Full-bleed project imagery behind the page, slid by the carousel. */
export default function ProjectBackdrop({
    isMobile,
    onSwiper,
}: {
    isMobile: boolean;
    onSwiper: (swiper: SwiperType) => void;
}) {
    return (
        <div className="absolute inset-0 z-10 w-full">
            <div className="relative size-full">
                <Swiper
                    slidesPerView={1}
                    className="h-screen w-screen"
                    modules={[EffectCoverflow]}
                    onSwiper={onSwiper}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 30,
                        slideShadows: false,
                    }}
                    loop={true}
                    allowTouchMove={false}
                >
                    {projects.map((project) => {
                        return (
                            <SwiperSlide key={project.id} className="">
                                {() => (
                                    <div className="relative size-full">
                                        <Image
                                            src={
                                                isMobile
                                                    ? project.image
                                                    : (project.landscape ??
                                                      project.image)
                                            }
                                            alt=""
                                            fill
                                            priority={project.id === 1}
                                            sizes="100vw"
                                            className="object-cover object-center"
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
    );
}
