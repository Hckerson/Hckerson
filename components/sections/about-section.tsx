import clsx from "clsx";
import Link from "next/link";
import Button from "../ui/button";
import { initial } from "@/lib/constant";
import { clashDisplay } from "@/public/fonts/font";
import { Link as LinkIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-surface-tertiary flex h-screen w-full items-center justify-center px-6 opacity-90">
            <div className="flex flex-col-reverse items-center gap-10 md:gap-x-20 lg:flex-row xl:gap-x-30">
                <div className="flex size-75 items-center justify-center rounded-xl bg-[repeating-linear-gradient(135deg,#292524,#44403c)] md:rounded-2xl xl:rounded-3xl">
                    <p className=" text-[48px] xl:text-[42px] 2xl:text-[36px] text-text-sub font-bold">{initial}</p>
                </div>
                <div className="flex max-w-[60ch] flex-col gap-y-4">
                    <h2
                        className={clsx(
                            "base-text text-text-primary font-bold",
                            clashDisplay.className,
                        )}
                    >
                        A Full-Stack Engineer Focused on Scalable Design &
                        Experience.
                    </h2>
                    <p className="xs-text text-text-muted font-medium">
                        I’m a{" "}
                        <span className="text-text-secondary font-semibold">
                            Software Engineer
                        </span>{" "}
                        with{"  "}
                        <span className="text-text-secondary font-semibold">
                            2
                        </span>{" "}
                        years of experience building{" "}
                        <span className="text-text-secondary font-semibold">
                            high-performance, scalable digital products
                        </span>
                        . My expertise lies in bridging the gap between complex
                        architecture and intuitive design, using technologies
                        like{" "}
                        <span className="text-text-secondary font-semibold">
                            React, Next.js, and Python
                        </span>{" "}
                        to create systems that are as robust as they are
                        beautiful.
                    </p>
                    <p className="xs-text text-text-muted">
                        My passion is developing{" "}
                        <span className="text-text-secondary font-semibold">
                            design systems
                        </span>{" "}
                        and{" "}
                        <span className="text-text-secondary font-semibold">
                            user experiences
                        </span>{" "}
                        that feel effortless. I believe the best technology is
                        invisible—it simply empowers the user through a
                        seamless,{" "}
                        <span className="text-text-secondary font-semibold">
                            high-performance foundation
                        </span>
                        .
                    </p>
                    <Link href="/about" className="group">
                        <Button
                            size="sm"
                            classname="flex items-center bg-accent-cyan text-background"
                        >
                            <span className="group-hover:text-text-primary flex gap-x-2 transition-colors duration-300 ease-in">
                                <p>Let's Talk</p>
                                <LinkIcon className="size-4" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
