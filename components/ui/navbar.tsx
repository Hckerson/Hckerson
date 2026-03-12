"use client";
import clsx from "clsx";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { navlinks } from "@/lib/data/mapped-data";
import { MdOutlineNightlight } from "react-icons/md";

export default function Navbar() {
    const [animationStarted, setAnimationStarted] = useState<Boolean>(false);
    useEffect(() => {
        const scrollController = (e: Event) => {
            const verticalOffset = window.scrollY;
            if (verticalOffset > 30) {
                setAnimationStarted(true);
            } else {
                setAnimationStarted(false);
            }
        };

        window.addEventListener("scroll", scrollController);

        return () => {
            window.removeEventListener("scroll", scrollController);
        };
    }, []);

    const { currentTheme } = useTheme();
    return (
        <nav
            className={clsx("fixed flex h-25 z-50 w-full items-end bg-transparent")}
        >
            <div
                className={clsx(
                    "mx-auto h-fit overflow-hidden rounded-full bg-stone-950 transition-transform duration-300 ease-in-out",
                    animationStarted ? "-translate-y-8" : "bottom-0",
                )}
            >
                <div className="flex items-center gap-x-4 p-2">
                    <div className="pr-1">
                        <div className="rounded-full bg-stone-800 p-1.5">
                            <LiaHomeSolid className="size-5" />
                        </div>
                    </div>
                    <div className="h-5 w-0.5 bg-stone-800"></div>
                    {navlinks.map((link, idx) => {
                        const Icon = link.icon;

                        return (
                            <div
                                key={`navlink-item-${idx}`}
                                className={clsx(
                                    "flex w-fit items-center gap-x-2 mx-1",
                                    idx === navlinks.length - 1
                                        ? "pr-0"
                                        : "pr-2",
                                )}
                            >
                                <span>
                                    <Icon className="size-5" />
                                </span>
                                <p className="xs-text">{link.name}</p>
                            </div>
                        );
                    })}
                    <div className="h-5 w-0.5 bg-stone-800"></div>

                    <div className="rounded-full p-2">
                        {currentTheme === "light" ? (
                            <MdLightMode />
                        ) : (
                            <MdOutlineNightlight />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
