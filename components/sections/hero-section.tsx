import { clashDisplay } from "@/app/fonts/font";
import clsx from "clsx";
import Link from "next/link";
import Button from "../ui/button";

export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">
            <div className="absolute inset-0 overflow-hidden">
                <div className="animate-slide-left-to-right absolute inset-0 top-0 left-0 bg-transparent">
                    <div className="flex h-screen w-fit -translate-y-112.5 -rotate-45">
                        <div className="flex h-full -space-x-20">
                            <div className="blury h-full w-62.5"></div>
                            <div className="blury-01 h-full w-62.5"></div>
                        </div>
                    </div>
                </div>
                <div className="animate-slide-right-to-left absolute inset-0 top-0 right-0 bg-transparent font-normal">
                    <div className="relative h-full w-full">
                        <div className="absolute top-0 right-0 flex h-screen w-fit -translate-y-112.5 rotate-45">
                            <div className="flex h-full -space-x-20">
                                <div className="blury-01 h-full w-62.5"></div>
                                <div className="blury h-full w-62.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0">
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="flex max-w-[80ch] flex-col items-center gap-y-4 text-center md:gap-y-5 xl:gap-y-6">
                        <p
                            className={clsx(
                                clashDisplay.className,
                                "md-text w-[15ch] bg-linear-to-b from-white from-20% to-neutral-400 bg-clip-text text-center leading-none font-bold text-transparent",
                            )}
                        >
                            <span className="block">Creative</span>
                            <span> Software Engineer.</span>
                        </p>
                        <p className="xs-text">
                            {`I’m hckerson, I build high-performance web applications. I’m driven by pixel-perfect implementation, scalability, and pushing the boundaries of what the modern web can do.`}{" "}
                        </p>
                        <span>
                            <Link href="/contact">
                                <Button>Contact Me</Button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
