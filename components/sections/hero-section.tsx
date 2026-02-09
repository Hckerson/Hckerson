import { clashDisplay } from "@/app/fonts/font";

import clsx from "clsx";

export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-slide-left-to-right absolute inset-0 top-0 left-0 bg-transparent">
                    <div className="flex h-screen w-fit -translate-y-112.5 -rotate-45">
                        <div className="flex h-full -space-x-10">
                            <div className="blury h-full w-62.5"></div>
                            <div className="blury-01 h-full w-62.5"></div>
                        </div>
                    </div>
                </div>
                <div className="animate-slide-right-to-left absolute inset-0 top-0 right-0 bg-transparent font-normal">
                    <div className="relative h-full w-full">
                        <div className="absolute top-0 right-0 flex h-screen w-fit -translate-y-112.5 rotate-45">
                            <div className="flex h-full -space-x-10">
                                <div className="blury-01 h-full w-62.5"></div>
                                <div className="blury h-full w-62.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0">
                <div className="relative flex h-full w-full items-center justify-center">
                    <div>
                        <span className={clsx(clashDisplay.className)}>
                            <p>Creative</p>
                            <p> Software Engineer.</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
