// No "use client" — this page uses no client-side API. PricingCard declares
// its own, which is what lets this route export metadata.
import type { Metadata } from "next";
import { pricingPlans } from "@/lib/data/mapped-data";
import PricingCard from "@/components/ui/cards/pricing-card";

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Engagement options for MVPs, full-stack SaaS builds and custom enterprise work.",
    alternates: { canonical: "/pricing" },
};

export default function Pricing() {
    return (
        <div className="min-h-screen w-full">
            <div className="large-pady flex flex-col items-center justify-center">
                <span className="mt-24 text-center">
                    <h1 className="base-text font-clash font-semibold">
                        Our Pricing Plans
                    </h1>
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
