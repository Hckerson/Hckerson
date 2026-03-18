"use client";
import clsx from "clsx";
import { Icon } from "@iconify-icon/react";
import { clashDisplay } from "@/public/fonts/font";

export default function Pricing() {
    return (
        <main className="min-h-screen w-full">
            <div className="flex min-h-screen items-center justify-center">
                <p
                    className={clsx(
                        "large-text font-bold",
                        clashDisplay.className,
                    )}
                >
                    Pricing
                </p>
            </div>
            <div className="large-pady">
                <span className="flex flex-col items-center space-y-2">
                    <p>
                        <Icon icon="akar-icons:tag" width="24" height="24" />
                        <span>
                            <p>pricing</p>
                        </span>
                    </p>
                    <p></p>
                    <p></p>
                </span>
            </div>
        </main>
    );
}
