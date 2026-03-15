"use client";
import clsx from "clsx";
import { Link, Moon } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { navlinks } from "@/lib/data/mapped-data";
import { MdOutlineNightlight } from "react-icons/md";

export default function Navbar() {
    const [lastOffsetValue, setLastOffsetValue] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">(
        "down",
    );
    useEffect(() => {
        const scrollController = (e: Event) => {
            const verticalOffset = window.scrollY;
            setLastOffsetValue(verticalOffset);
            if (lastOffsetValue < verticalOffset) {
                setScrollDirection("up");
            } else {
                setScrollDirection("down");
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
            className={clsx(
                "fixed z-50 flex h-25 w-full items-end bg-transparent",
            )}
        >
            <div
                className={clsx(
                    "mx-auto h-fit overflow-hidden rounded-full bg-stone-950 transition-transform duration-300 ease-in-out",
                    scrollDirection === "up"
                        ? "-translate-y-8"
                        : "translate-y-0",
                )}
            >
                <div className="flex items-center gap-x-3 p-2">
                    <Link href="/" className="pr-1">
                        <div className="rounded-full bg-stone-800 p-1.5">
                            <LiaHomeSolid className="size-5" />
                        </div>
                    </Link>
                    <div className="h-5 w-0.5 bg-stone-800"></div>
                    {navlinks.map((link, idx) => {
                        const Icon = link.icon;

                        return (
                            <div
                                key={`navlink-item-${idx}`}
                                className={clsx(
                                    "mx-1 flex w-fit items-center gap-x-2",
                                    idx === navlinks.length - 1
                                        ? "pr-0"
                                        : "pr-2",
                                )}
                            >
                                <span>
                                    <Icon className="size-4" />
                                </span>
                                <p className="xs-text font-medium text-stone-200">
                                    {link.name}
                                </p>
                            </div>
                        );
                    })}
                    <div className="h-5 w-0.5 bg-stone-800"></div>

                    <div className="rounded-full p-2">
                        {currentTheme === "light" ? (
                            <MdLightMode className="size-4" />
                        ) : (
                            <Moon className="size-4" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
