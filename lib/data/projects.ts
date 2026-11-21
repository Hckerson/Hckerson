import type { PortfolioProject } from "@/lib/types";

const projects: PortfolioProject[] = [
    {
        id: 1,
        title: "Dropbox Website Clone",
        description:
            "A modern clone of the Dropbox website featuring file upload/download, real-time collaboration, and a responsive design that mirrors the original platform's sleek interface.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "React Query",
        ],
        liveUrl: "https://dropbox-clone-seven-psi.vercel.app/",
        githubUrl: "https://github.com/hckerson/dropbox-clone",
        category: "fullstack",
        status: "completed",
        learnings:
            "Implemented drag-and-drop file uploads, real-time file synchronization, and mastered complex state management for file operations.",
    },
    {
        id: 2,
        title: "Playwork DREAMS",
        description:
            'An interactive digital "Playground of Possibility" where students participate in STEM, storytelling, and design competitions. It features a gamified national leaderboard and specialized creator roles.',
        tags: [
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
            "AI Integration",
        ],
        liveUrl: "https://play-sage-nine.vercel.app/",
        githubUrl: "https://github.com/hckerson/play-sage-nine",
        category: "frontend",
        status: "completed",
        learnings:
            "Built an interactive platform with a gamified national leaderboard system, integrated AI tools for instant student feedback, and implemented specialized creator role experiences.",
    },
    {
        id: 3,
        title: "Serene Heaven",
        description:
            "A luxury hotel booking platform featuring elegant room displays, real-time availability checking, and seamless booking experience. Includes admin dashboard for managing reservations and room inventory.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Query",
            "Framer Motion",
            "Stripe",
        ],
        liveUrl: "https://serene-heaven.vercel.app/",
        githubUrl: "https://github.com/hckerson/serene-heaven",
        category: "frontend",
        status: "completed",
        learnings:
            "Implemented secure payment processing with Stripe, built a responsive booking system, and created an intuitive admin interface for hotel management.",
    },
    {
        id: 4,
        title: "Cresora",
        description:
            "A comprehensive financial management platform designed for SMEs in Indonesia, featuring AI-powered insights, real-time cash tracking, bill management, and flexible reporting. Built with modern web technologies and interactive data visualization.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Flow",
            "Framer Motion",
            "Radix UI",
            "Lucide React",
        ],
        liveUrl: "https://cresora.vercel.app",
        githubUrl: "https://github.com/hckerson/cresora",
        category: "frontend",
        status: "completed",
        learnings:
            "Built an interactive financial dashboard with React Flow for data visualization, implemented complex UI components with Radix UI, and created a responsive design system for financial data presentation. Mastered advanced React patterns for state management and component composition.",
    },
];

export { projects };
