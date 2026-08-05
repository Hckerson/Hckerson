"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "custom";
    children: React.ReactNode;
}

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-[36px] w-25 rounded-md md:rounded-lg lg:h-[42px] lg:w-30 xl:h-[48px] xl:w-35 xl:rounded-xl",
    md: "h-[40px] w-35 rounded-lg lg:h-[46px] lg:w-40 xl:h-[52px] xl:w-45 xl:rounded-xl",
    lg: "h-[42px] w-37.5 rounded-lg md:rounded-xl lg:h-[56px] lg:w-45 xl:h-[64px] xl:w-50 xl:rounded-3xl",
    xl: "h-[48px] w-45 rounded-xl md:rounded-2xl lg:h-[64px] lg:w-55 xl:h-[72px] xl:w-60 xl:rounded-3xl",
    custom: "h-[40px] lg:h-[50px]",
};

export default function Button({
    children,
    isLoading,
    className,
    size = "custom",
    ...rest
}: ButtonProps) {
    const small = size === "sm" || size === "md";

    return (
        <button
            {...rest}
            className={cn(
                "relative z-0 flex cursor-pointer items-center justify-center overflow-hidden shadow-inner",
                sizeClasses[size],
                className,
            )}
        >
            {small ? (
                isLoading ? (
                    <Loader2 className="size-6 animate-spin" />
                ) : (
                    <span className="absolute inset-0 flex items-center justify-center transition-colors duration-150 ease-in">
                        {children}
                    </span>
                )
            ) : (
                // `className` is deliberately NOT repeated here. It used to be
                // applied to both the button and this overlay, painting the
                // caller's background twice.
                <div className="absolute inset-0 flex h-full items-center justify-center border-none! transition-colors duration-150 ease-in hover:bg-none">
                    {isLoading && (
                        <span className="pl-2">
                            <Loader2 className="relative flex size-6 animate-spin items-center justify-center" />
                        </span>
                    )}
                    <span className="flex h-full w-full items-center justify-center">
                        {children}
                    </span>
                </div>
            )}
        </button>
    );
}
