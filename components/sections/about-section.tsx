import clsx from "clsx";
import Link from "next/link";
import Button from "../ui/button";
import { initial } from "@/lib/constant";
import { clashDisplay } from "@/public/fonts/font";
import { Link as LinkIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="flex h-screen w-full items-center justify-center bg-surface-secondary opacity-90">
            <div className="flex items-center gap-x-10 md:gap-x-20 xl:gap-x-30">
                <div className="flex size-75 items-center justify-center rounded-xl bg-surface-tertiary md:rounded-2xl xl:rounded-3xl">
                    <p className="md-text font-bold text-text-sub">
                        {initial}
                    </p>
                </div>
                <div className="flex max-w-[60ch] flex-col gap-y-4">
                    <h2
                        className={clsx(
                            "base-text font-bold text-text-primary",
                            clashDisplay.className,
                        )}
                    >
                        A Full-Stack Engineer Focused on Scalable Design &
                        Experience.
                    </h2>
                    <p className="xs-text font-medium text-text-muted">
                        I’m a{" "}
                        <span className="font-semibold text-text-secondary">
                            Software Engineer
                        </span>{" "}
                        with{"  "}
                        <span className="font-semibold text-text-secondary">
                            2
                        </span>{" "}
                        years of experience building{" "}
                        <span className="font-semibold text-text-secondary">
                            high-performance, scalable digital products
                        </span>
                        . My expertise lies in bridging the gap between complex
                        architecture and intuitive design, using technologies
                        like{" "}
                        <span className="font-semibold text-text-secondary">
                            React, Next.js, and Python
                        </span>{" "}
                        to create systems that are as robust as they are
                        beautiful.
                    </p>
                    <p className="xs-text text-text-muted">
                        My passion is developing{" "}
                        <span className="font-semibold text-text-secondary">
                            design systems
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-text-secondary">
                            user experiences
                        </span>{" "}
                        that feel effortless. I believe the best technology is
                        invisible—it simply empowers the user through a
                        seamless,{" "}
                        <span className="font-semibold text-text-secondary">
                            high-performance foundation
                        </span>
                        .
                    </p>
                    <Link href="/about" className="group">
                        <Button
                            size="sm"
                            classname="flex items-center bg-accent-cyan text-background"
                        >
                            <span className="flex gap-x-2 transition-colors duration-300 ease-in group-hover:text-text-primary">
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
