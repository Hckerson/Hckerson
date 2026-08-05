"use client";
import { pricingPlans } from "@/lib/data/mapped-data";
import PricingCard from "@/components/ui/cards/pricing-card";

export default function Pricing() {
    return (
        <div className="min-h-screen w-full">
            {/* <div className="hidden min-h-screen items-center justify-center">
                <span className="flex flex-col items-center">
                    <span className="flex space-x-2 rounded-4xl bg-stone-800 px-3 py-2 backdrop-blur-2xl">
                        <Icon icon="akar-icons:tag" width="20" height="20" />
                        <span>
                            <p>affordable</p>
                        </span>
                    </span>
                    <p
                        className="large-text font-bold font-clash"
                    >
                        Pricing
                    </p>
                </span>
            </div> */}
            <div className="large-pady flex flex-col items-center justify-center">
                <span className="mt-24 text-center">
                    <p className="base-text font-clash font-semibold">
                        Our Pricing Plans
                    </p>
                    <p className="xs-text text-text-muted">
                        Designed for every state of journey. Start today, no
                        contracts, cancel anytime.
                    </p>
                </span>
                <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
}
