"use client";
import clsx from "clsx";
import { Loader2 } from "lucide-react";

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: "default" | "ghost" | "dark";
    size?: "sm" | "md" | "lg" | "custom";
    styles?: string;
    children: React.ReactNode;
}
export default function Button({
    children,
    isLoading,
    size = "custom",
    styles,
    variant,
    ...rest
}: Button) {
    const small = size == "sm" || size == "md";
    const colors = {
        "bg-linear-to-r from-[#6973E7] to-[#3944B8] border border-2 border-[#6973E7]":
            variant == "default",
        "bg-black": variant == "dark",
        "": variant == undefined || "",
    };
    const sizes = {
        "rounded-[8px] xl:w-40 w-30 h-[36px] lg:h-12.5 ": small,
        "xl:rounded-[12px] rounded-[8px] xl:w-50 h-[42px] w-37.5 lg:h-[56px]":
            size == "lg",
        "lg:h-[52px] h-[40px] ": (size = "custom"),
    };
    return (
        <button
            {...rest}
            className={clsx(
                "relative z-0 flex cursor-pointer items-center justify-center overflow-hidden shadow-inner",
                colors,
                sizes,
                styles,
            )}
        >
            {small ? (
                isLoading ? (
                    <Loader2 className="size-6 animate-spin" />
                ) : (
                    <p
                        className={clsx(
                            "xs:text-base absolute inset-0 flex items-center justify-center text-sm transition-colors duration-150 ease-in",
                            styles,
                        )}
                    >
                        {children}
                    </p>
                )
            ) : (
                <div
                    className={clsx(
                        "absolute inset-0 flex h-full items-center justify-center border-none! transition-colors duration-150 ease-in hover:bg-none",
                        colors,
                        styles,
                    )}
                >
                    {isLoading && (
                        <span className="pl-2">
                            <Loader2 className="relative flex size-6 animate-spin items-center justify-center" />
                        </span>
                    )}
                    <p className="xs:text-base flex h-full w-full items-center justify-center text-sm">
                        {children}
                    </p>
                </div>
            )}
        </button>
    );
}
