import { clashDisplay } from "@/app/fonts/font";
import clsx from "clsx";
import Link from "next/link";
import Button from "../ui/button";

export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">

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
                        <span className="flex space-x-3">
                            <Link href="/contact">
                                <Button
                                    size="sm"
                                    classname="bg-cyan-400 text-black"
                                >
                                    Contact Me
                                </Button>
                            </Link>
                            <Link href="/projects">
                                <Button
                                    size="sm"
                                    classname="bg-transparent text-white border border-white/20"
                                >
                                    {`Let's Talk`}
                                </Button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
