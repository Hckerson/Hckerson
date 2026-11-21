import type { WorkExperience } from "@/lib/types";

const workExperience: WorkExperience[] = [
    {
        title: "Full Stack Developer",
        kind: "employment",
        company: "Vouchmark",
        location: "Global/Remote",
        period: "2024 - Present",
        responsibilities: [
            "Leading the design and implementation of both frontend and backend architectures",
            "Developing a robust business verification platform for supplier onboarding and trust scoring",
            "Integrating complex ERP systems like SAP with the Vouchmark platform",
            "Ensuring scalability and security of the entire system architecture",
        ],
        skills: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "System Architecture",
            "ERP Integration",
        ],
        description:
            "Managing the end-to-end technical architecture and development for a business verification platform focused on African markets.",
        achievements: [
            "Architected a scalable full-stack solution from the ground up",
            "Built automated risk-assessment tooling that replaced manual supplier review steps",
        ],
    },
    {
        title: "Serene Heaven: Hotel Booking Platform",
        kind: "personal-project",
        company: "Personal Project",
        location: "Self-directed",
        period: "2025",
        responsibilities: [
            "Developed responsive booking system with real-time availability",
            "Created admin dashboard for reservation management",
            "Built room inventory management system",
            "Implemented user authentication and authorization",
        ],
        skills: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
        ],
        description:
            "A luxury hotel booking platform built end to end, with booking logic, Stripe payments and admin controls.",
        achievements: [
            "Built a real-time room availability checker",
            "Automated reservation emails and confirmation workflows",
        ],
    },
    {
        title: "One Place: Retail Management System",
        kind: "personal-project",
        company: "Personal Project",
        location: "Self-directed",
        period: "2024",
        responsibilities: [
            "Built a retail management system with React, Node.js and PostgreSQL",
            "Created a secure user authentication and authorization system",
            "Built a responsive dashboard for sales and inventory tracking",
            "Developed a market analysis tool and portfolio management features",
        ],
        skills: ["Node.js", "PostgreSQL", "React", "Express", "JWT"],
        description:
            "A retail management backend built to practise data integrity, access control and high-volume inventory modelling.",
        achievements: [
            "Designed a normalised database schema for high-volume inventory tracking",
            "Implemented role-based access control (RBAC) across every API route",
        ],
    },
    {
        title: "Dropbox Clone: Cloud Storage",
        kind: "personal-project",
        company: "Personal Project",
        location: "Self-directed",
        period: "2023",
        responsibilities: [
            "Built a file sharing service with React, Node.js and Firebase",
            "Created secure file upload/download with drag-and-drop support",
            "Designed the state management model for concurrent file operations",
        ],
        skills: ["React", "Node.js", "Firebase", "TypeScript", "Tailwind CSS"],
        description:
            "A cloud storage clone with real-time sync and secure file handling, built to learn complex client-side state.",
        achievements: [
            "Implemented seamless drag-and-drop file uploading",
            "Cut redundant re-renders during file operations by normalising the upload state tree",
        ],
    },
];

export { workExperience };
