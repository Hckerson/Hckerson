"use client";
import clsx from "clsx";
import Link from "next/link";
import { Moon } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { navlinks } from "@/lib/data/mapped-data";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">(
        "down",
    );
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const scrollController = () => {
            const verticalOffset = window.scrollY;

            if (verticalOffset > lastScrollY) {
                setScrollDirection("up");
            } else if (verticalOffset < lastScrollY) {
                setScrollDirection("down");
            }

            lastScrollY = verticalOffset;
        };

        window.addEventListener("scroll", scrollController, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrollController);
        };
    }, []);

    const { currentTheme, toggleTheme } = useTheme();
    return (
        <nav
            className={clsx(
                "fixed z-50 flex h-25 w-full items-end bg-transparent",
            )}
        >
            <div
                className={clsx(
                    "mx-auto h-fit overflow-hidden rounded-full bg-surface-secondary transition-transform duration-300 ease-in-out",
                    scrollDirection === "up"
                        ? "-translate-y-8"
                        : "translate-y-0",
                )}
            >
                <div className="flex items-center p-2">
                    <Link href="/" className="pr-1">
                        <div
                            className={clsx(
                                "rounded-full p-1.5 hover:border hover:border-border hover:bg-surface-tertiary",
                                pathname === "/" &&
                                    "border border-border bg-surface-tertiary",
                            )}
                        >
                            <LiaHomeSolid className="size-5" />
                        </div>
                    </Link>
                    <div className="mr-1 h-5 w-0.5 bg-border"></div>
                    {navlinks.map((link, idx) => {
                        const Icon = link.icon;

                        return (
                            <Link
                                href={link.link}
                                key={`navlink-item-${idx}`}
                                target={link.external ? "_blank" : undefined}
                                rel={
                                    link.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                className={clsx(
                                    "mx-1 flex w-fit items-center gap-x-2 rounded-3xl px-2.5 py-1.5 hover:border hover:border-border hover:bg-surface-tertiary",

                                    pathname === link.link &&
                                        "border border-border bg-surface-tertiary",
                                )}
                            >
                                <span>
                                    <Icon className="size-4" />
                                </span>
                                <p className="xs-text font-medium text-text-secondary">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })}
                    <div className="h-5 w-0.5 bg-border"></div>

                    <div className="rounded-full ml-1 p-1.5 flex items-center hover:border hover:border-border hover:bg-surface-tertiary">
                        <button type="button" onClick={toggleTheme}>

                            {currentTheme === "light" ? (
                                <MdLightMode className="size-4" />
                            ) : (
                                <Moon className="size-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
