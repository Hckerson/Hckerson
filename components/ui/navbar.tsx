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
                    "bg-surface-secondary mx-auto h-fit overflow-hidden rounded-full transition-transform duration-300 ease-in-out",
                    scrollDirection === "up"
                        ? "-translate-y-8"
                        : "translate-y-0",
                )}
            >
                <div className="flex items-center p-1 md:p-2">
                    <Link href="/" className="pr-1">
                        <div
                            className={clsx(
                                "hover:border-border hover:bg-surface-tertiary rounded-full p-1.5 hover:border",
                                pathname === "/" &&
                                    "border-border bg-surface-tertiary border",
                            )}
                        >
                            <LiaHomeSolid className="size-3 md:size-4" />
                        </div>
                    </Link>
                    <div className="bg-border mr-1 h-5 w-0.5"></div>
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
                                    "hover:border-border hover:bg-surface-tertiary mx-1 flex w-fit items-center gap-x-0.5 rounded-3xl px-1.5 md:px-2.5 py-1.5 hover:border md:gap-x-2",

                                    pathname === link.link &&
                                        "border-border bg-surface-tertiary border",
                                )}
                            >
                                <span>
                                    <Icon className="size-3 md:size-4" />
                                </span>
                                <p className="xs-text text-text-secondary font-medium">
                                    {link.name}
                                </p>
                            </Link>
                        );
                    })}
                    <div className="bg-border h-5 w-0.5"></div>

                    <div className="hover:border-border hover:bg-surface-tertiary ml-1 flex items-center rounded-full p-1.5 hover:border">
                        <button type="button" onClick={toggleTheme}>
                            {currentTheme === "light" ? (
                                <MdLightMode className="size-3 md:size-4" />
                            ) : (
                                <Moon className="size-3 md:size-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
