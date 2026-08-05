"use client";
import Button from "../button";
import { CircleCheck } from "lucide-react";
import { PricingPlan } from "@/lib/interface";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className="border-border box-border h-full flex-1 overflow-hidden rounded-2xl border xl:rounded-3xl">
            <div className="size-full">
                <div className="grid p-4 md:p-5 xl:p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="font-clash font-semibold">
                            {plan.name}
                        </h2>

                        {plan.isPopular && (
                            <span className="xs-text border-border rounded-lg border px-2 py-1">
                                Most popular
                            </span>
                        )}
                    </div>
                    <div className="my-4 flex items-end gap-x-2">
                        <p className="font-clash text-[24px] font-semibold xl:text-[28px] 2xl:text-[32px]">
                            {typeof plan.price === "number"
                                ? `$${plan.price}`
                                : plan.price}
                        </p>
                        {typeof plan.price === "number" && (
                            <span className="text-text-muted xs-text mb-2.5">
                                per job
                            </span>
                        )}
                    </div>
                    {/* `text-button-text` referenced a --color-button-text
                        token that does not exist, so it produced no rule. */}
                    <Button
                        size="custom"
                        className="bg-accent-cyan w-full rounded-lg text-black"
                    >
                        Get started
                    </Button>
                    {/* Was a <legend>, which is only valid inside a
                        <fieldset>. */}
                    <h3 className="font-clash mt-2 font-medium">Features</h3>
                    <p className="xs-text text-text-muted mb-4">
                        Everything in {plan.starter}, plus:
                    </p>
                    <ul className="w-full space-y-2">
                        {plan.features.map((feature, index) => (
                            <li
                                key={`${feature}-${index}`}
                                className="flex w-full items-center gap-x-2"
                            >
                                <CircleCheck
                                    className="text-accent-cyan size-5 shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="xs-text">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
