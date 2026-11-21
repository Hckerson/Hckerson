import type { Role } from "@/lib/types";

export const roles: Role[] = [
    {
        id: "vouchmark",
        company: "Vouchmark",
        title: "Full-Stack Developer",
        period: { start: "2025-09" },
        mode: "Remote",
        summary:
            "Business-verification platform: registry and tax checks, trust scores, vendor monitoring and a prepaid wallet",
        achievements: [
            "Owned the payments and billing system — wallet ledger, Paystack reconciliation, refunds, chargebacks, VAT invoicing and spend controls across 5 paid products. Caught test-mode payments booked as revenue and eliminated duplicate charges at source.",
            "Rebuilt AI document verification for company-registry and tax certificates, moving verdicts from model output into deterministic code, backed by an accuracy evaluation harness and prompt-injection guards.",
            "Established the API's CI pipeline, which had never actually run, and made tests part of every change; restored vendor monitoring after three upstream sources failed, closing a race that could double-charge.",
            "Designed the admin console's shared component system behind its payments, KYB, disputes and compliance screens.",
        ],
    },
    {
        id: "tekcify",
        company: "Tekcify",
        title: "Full-Stack Engineer",
        period: { start: "2025-10" },
        mode: "Remote, part-time",
        summary:
            "Shared identity provider and internal admin platform behind 5 products",
        achievements: [
            "Built two-factor authentication end to end across the identity provider, sign-in UI, account dashboard and admin console: enrollment, email-based recovery, backup codes and support-led reset.",
            "Fixed a session-lifetime flaw in the shared sign-in service, where 30-day sessions renewed on every visit and never expired, adding an absolute cap and max_age; closed two redirect-hijacking paths.",
            "Built admin dashboards for 5 products — users, revenue, analytics and service health — plus role management and incident alerting.",
            "Set up CI across 4 product repositories, including Postgres-backed integration and end-to-end tests for the identity provider.",
        ],
    },
];
