import { HEADSHOT_PATH, RESUME_PATH } from "@/lib/constants";
import type { Profile } from "@/lib/types";

export const profile: Profile = {
    name: "Aderibigbe Emmanuel",
    handle: "Hckerson",
    title: "Full-Stack Software Engineer",
    location: "Ikeja, Lagos, Nigeria",
    remoteFit: "Remote: both current roles are remote",
    summary:
        "Full-stack engineer building payments, identity and verification systems in production with TypeScript, NestJS, PostgreSQL, React and Next.js. Owns features from schema to interface and brings automated testing and CI to every codebase.",
    availability: {
        status: "open",
        openTo: ["role", "internship", "freelance"],
    },
    channels: [
        {
            kind: "email",
            label: "Email",
            value: "emmanueladeribigbe415@gmail.com",
            href: "mailto:emmanueladeribigbe415@gmail.com",
        },
        {
            kind: "phone",
            label: "Phone",
            value: "+234 913 246 3467",
            href: "tel:+2349132463467",
        },
        {
            kind: "linkedin",
            label: "LinkedIn",
            value: "in/hckerson",
            href: "https://www.linkedin.com/in/hckerson",
        },
        {
            kind: "github",
            label: "GitHub",
            value: "Hckerson",
            href: "https://github.com/Hckerson",
        },
        {
            kind: "x",
            label: "X",
            value: "@theHckerson",
            href: "https://x.com/theHckerson",
        },
    ],
    headshot: {
        src: HEADSHOT_PATH,
        alt: "Aderibigbe Emmanuel",
        width: 1000,
        height: 1000,
    },
    resume: { path: RESUME_PATH, updated: "2026-11-20" },
};
