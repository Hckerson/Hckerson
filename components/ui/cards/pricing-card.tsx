"use client";
import Button from "../button";
import { Icon } from "@iconify-icon/react";
import { PricingPlan } from "@/lib/interface";
import { clashDisplay } from "@/public/fonts/font";
import clsx from "clsx";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className="border-border box-border h-full flex-1 overflow-hidden rounded-2xl border xl:rounded-3xl">
            <div className="size-full">
                <div className="grid p-4 md:p-5 xl:p-6">
                    <div className="flex items-center justify-between">
                        <p
                            className={clsx(
                                clashDisplay.className,
                                "font-semibold",
                            )}
                        >
                            {plan.name}
                        </p>

                        {plan.isPopular && (
                            <span className="xs-text border-border rounded-lg border px-2 py-1">
                                Most popular
                            </span>
                        )}
                    </div>
                    <div className="my-4 flex items-end gap-x-2">
                        <p
                            className={clsx(
                                "text-[24px] font-semibold xl:text-[28px] 2xl:text-[32px]",
                                clashDisplay.className,
                            )}
                        >
                            {typeof plan.price === "number"
                                ? `$${plan.price}`
                                : plan.price}
                        </p>
                        {typeof plan.price === "number" && (
                            <span className="text-text-muted mb-2.5 xs-text">
                                per job
                            </span>
                        )}
                    </div>
                    <Button
                        size="custom"
                        classname="w-full bg-button-bg text-button-text rounded-xl"
                    >
                        Get started
                    </Button>
                    <legend
                        className={clsx(
                            "mt-2 font-medium",
                            clashDisplay.className,
                        )}
                    >
                        Features
                    </legend>
                    <p className="xs-text text-text-muted mb-4">
                        Everything in {plan.starter}, plus:
                    </p>
                    <ul className="w-full space-y-2">
                        {plan.features.map((feature, index) => (
                            <li
                                key={`${feature}-${index}`}
                                className="flex w-full gap-x-2 items-center"
                            >
                                <Icon
                                    icon="icon-park-solid:check-one"
                                    width="20"
                                    height="20"
                                />
                                <p className="xs-text">
                                    <span key={index}>{feature}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
