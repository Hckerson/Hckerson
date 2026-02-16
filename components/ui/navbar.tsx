"use client";
import clsx from "clsx";
import useTheme from "@/hooks/useTheme";
import { ImHome3 } from "react-icons/im";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

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
            className={clsx("fixed flex h-25 w-full items-end bg-transparent")}
        >
            <div
                className={clsx(
                    "mx-auto h-fit overflow-hidden rounded-full bg-stone-950 transition-transform duration-300 ease-in-out",
                    animationStarted ? "-translate-y-10" : "bottom-0",
                )}
            >
                <div className="flex divide-x divide-stone-900 gap-x-2 p-2">
                    <div className="pr-1">
                        <div className="rounded-full bg-stone-800 p-2">
                            <ImHome3 />
                        </div>
                    </div>
                    <div className="w-10"></div>
                    <div className="w-10"></div>
                    <div className="rounded-full p-2">
                        {currentTheme === "light" ? (
                            <MdLightMode />
                        ) : (
                            <MdNightlight />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
