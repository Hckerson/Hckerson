import clsx from "clsx";
import Link from "next/link";
import Slider from "../ui/slider";
import Button from "../ui/button";
import { clashDisplay } from "@/public/fonts/font";

export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">
            {/* <Slider /> */}
            <div className="absolute inset-0">
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="flex max-w-[80ch] flex-col items-center gap-y-4 text-center md:gap-y-5 xl:gap-y-6">
                        <p
                            className={clsx(
                                clashDisplay.className,
                                "md-text w-[15ch] bg-linear-to-b from-text-primary from-20% to-text-muted bg-clip-text text-center leading-none font-bold text-transparent",
                            )}
                        >
                            <span className="block">Creative</span>
                            <span> Software Engineer.</span>
                        </p>
                        <p className="xs-text text-text-muted">
                            {`I’m hckerson, a Full-Stack Engineer building high-performance products at the intersection of design and scalable architecture.`}{" "}
                        </p>
                        <span className="flex space-x-3">
                            <Link href="/contact" className="size-fit focus:outline-">
                                <Button
                                    size="sm"
                                    classname="bg-accent-cyan text-background"
                                >
                                    Contact Me
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
                </div>
            </div>
        </section>
    );
}
