import type { PricingPlan } from "@/lib/types";

const pricingPlans: PricingPlan[] = [
    {
        name: "MVP Starter",
        price: 300,
        description: "Perfect for validating your idea with a solid MVP.",
        features: [
            "UI/UX Design Direction",
            "Single Platform Development",
            "Core Features Implementation",
            "2 Rounds of Revisions",
            "Deployment & Handover",
        ],
    },
    {
        name: "Full-Stack SaaS",
        price: 500,
        starter: "MVP Starter",
        description: "A complete, scalable SaaS solution from scratch.",
        features: [
            "Full-Stack Development",
            "Complex Database Schema",
            "Stripe/Payment Integration",
            "Advanced Auth & Security",
            "30 Days Post-Launch Support",
        ],
        isPopular: true,
    },
    {
        name: "Custom Enterprise",
        price: "Custom",
        starter: "Full-Stack SaaS",
        description: "Tailored solutions for complex business needs.",
        features: [
            "Dedicated Development Team",
            "Legacy System Integration",
            "High-Performance Optimization",
            "Custom Feature Architecture",
            "Ongoing Maintenance & Support",
        ],
    },
];

export { pricingPlans };
