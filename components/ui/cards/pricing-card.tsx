"use client";
import Button from "../button";
import { Icon } from "@iconify-icon/react";
import { PricingPlan } from "@/lib/interface";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className="box-border h-full flex-1 overflow-hidden rounded-3xl border border-stone-500 xl:rounded-4xl">
            <div className="size-full">
                <div className="grid">
                    <div className="flex items-center justify-between">
                        <p>{plan.name}</p>

                        {plan.isPopular && (
                            <span className="border border-stone-500">
                                Most popular
                            </span>
                        )}
                    </div>
                    <div>
                        <p>{plan.price}</p>
                        <span>per job</span>
                    </div>
                    <Button>Get started</Button>
                    <legend></legend>
                    <p>Everything in {plan.starter}, plus:</p>
                    <ul className="w-full space-y-2">
                        {plan.features.map((feature, index) => (
                            <li className="flex w-full gap-x-2">
                                <Icon
                                    icon="icon-park-outline:check-one"
                                    width="24"
                                    height="24"
                                />
                                <p>
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
