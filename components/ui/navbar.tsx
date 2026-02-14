"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [animationStarted, setAnimationStarted] = useState<Boolean>(false);
    useEffect(() => {
        const scrollController = (e: Event) => {
            const verticalOffset = window.scrollY;
            if (verticalOffset > 100) {
                setAnimationStarted(true);
            }
        };

        window.addEventListener("scroll", scrollController);

        return () => {
            window.removeEventListener("scroll", () => {
                setAnimationStarted(false);
            });
        };
    }, []);
    return (
        <nav
            className={clsx("fixed flex h-25 w-full items-end bg-transparent")}
        >
            <div
                className={clsx(
                    "mx-auto h-fit transition-transform duration-300 ease-in-out",
                    animationStarted ? "-translate-y-10" : "bottom-0",
                )}
            >
                sup
            </div>
        </nav>
    );
}
