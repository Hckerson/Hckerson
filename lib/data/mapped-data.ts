import {
    Article,
    Certification,
    Education,
    Navlink,
    PortfolioProject,
    Skill,
    WorkExperience,
} from "../interface";
import { LuTags } from "react-icons/lu";
import { FaBlog } from "react-icons/fa6";
import { BsFolder2Open } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";

const navlinks: Navlink[] = [
    { name: "Projects", link: "/projects", visible: "sm", icon: BsFolder2Open },
    { name: "Pricing", link: "/pricing", visible: "md", icon: LuTags },
    { name: "Blog", link: "/blog", visible: "md", icon: FaBlog },
    {
        name: "Github",
        link: "https://github.com/hckerson",
        visible: "md",
        icon: VscGithubAlt,
    },
];

const projects: PortfolioProject[] = [
    {
        id: 1,
        title: "Dropbox Website Clone",
        description:
            "A modern clone of the Dropbox website featuring file upload/download, real-time collaboration, and a responsive design that mirrors the original platform's sleek interface.",
        image: "/images/projects/cover/dropbox.png",
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
            "An interactive digital \"Playground of Possibility\" where students participate in STEM, storytelling, and design competitions. It features a gamified national leaderboard and specialized creator roles.",
        image: "/images/projects/cover/playwork.png",
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
        image: "/images/projects/cover/serene-haven.png",
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
        title: "Cresora - Finance Platform",
        description:
            "A comprehensive financial management platform designed for SMEs in Indonesia, featuring AI-powered insights, real-time cash tracking, bill management, and flexible reporting. Built with modern web technologies and interactive data visualization.",
        image: "/images/projects/cover/cresora.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Flow",
            "Framer Motion",
            "Radix UI",
            "Lucide React",
        ],
        liveUrl: "https://cresora.vercel.app", // Update with your actual URL
        githubUrl: "https://github.com/hckerson/cresora", // Update with your actual repo
        category: "frontend",
        status: "completed",
        learnings:
            "Built an interactive financial dashboard with React Flow for data visualization, implemented complex UI components with Radix UI, and created a responsive design system for financial data presentation. Mastered advanced React patterns for state management and component composition.",
    },
];

const articles: Article[] = [
    {
        id: 1,
        title: "How I Optimized Next.js Page Load by 50%",
        excerpt:
            "A step-by-step guide on how I improved the performance of a Next.js application using various optimization techniques.",
        image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        date: "May 15, 2023",
        readTime: "6 min read",
        tags: ["Next.js", "Performance", "Web Vitals"],
        url: "/blog/optimizing-nextjs",
    },
    {
        id: 2,
        title: "Building a Stripe Subscription System with Supabase",
        excerpt:
            "Learn how to implement a complete subscription system using Stripe and Supabase for your SaaS application.",
        image: "https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        date: "April 22, 2023",
        readTime: "8 min read",
        tags: ["Stripe", "Supabase", "SaaS"],
        url: "/blog/stripe-subscription-system",
    },
    {
        id: 3,
        title: "Lessons from My First Hackathon",
        excerpt:
            "Reflections and key takeaways from participating in my first 48-hour hackathon and what I would do differently next time.",
        image: "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        date: "March 10, 2023",
        readTime: "5 min read",
        tags: ["Hackathon", "Team Collaboration", "Rapid Development"],
        url: "/blog/hackathon-lessons",
    },
];

const workExperience: WorkExperience[] = [
    {
        title: "Full Stack Developer",
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
            "Improved business verification efficiency through automated risk assessment tools",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Dropbox Clone",
        location: "Remote",
        period: "2023 - Present",
        responsibilities: [
            "Developed a clone of the Dropbox file sharing service using React, Node.js, and Firebase",
            "Created a secure file upload/download functionality with drag-and-drop features",
            "Built an efficient state management system for file operations",
        ],
        skills: ["React", "Node.js", "Firebase", "TypeScript", "Tailwind CSS"],
        description:
            "Built a fully functional cloud storage clone with real-time updates and secure file handling.",
        achievements: [
            "Implemented seamless drag-and-drop file uploading",
            "Reduced file operation latency by 30% through optimized state management",
        ],
    },
    {
        title: "Backend Developer",
        company: "One Place Clone",
        location: "Remote",
        period: "2024 - Present",
        responsibilities: [
            "Developed a clone of the One Place retail management system using React, Node.js, and PostgreSQL",
            "Created a secure user authentication and authorization system",
            "Built a responsive dashboard for sales and inventory tracking",
            "Developed a market analysis tool and portfolio management features",
        ],
        skills: ["Node.js", "PostgreSQL", "React", "Express", "JWT"],
        description:
            "Engineered a robust backend for a retail management system focusing on data integrity and security.",
        achievements: [
            "Designed a scalable database schema for high-volume inventory tracking",
            "Implemented role-based access control (RBAC) for enhanced security",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Serene Heaven",
        location: "Remote",
        period: "2025 - Present",
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
            "Lead developer for a luxury hotel booking platform with integrated booking logic and admin controls.",
        achievements: [
            "Built a real-time room availability checker",
            "Automated reservation emails and confirmation workflows",
        ],
    },
];

const education: Education[] = [
    {
        degree: "B.S.C in Computer Science",
        institution: "Obafemi Awolowo University",
        year: "2023-now",
        description:
            "Still grinding. Focused on web development, algorithms, and database systems. trying to break into the web3 space",
    },
];

const certifications: Certification[] = [
    // {
    //   name: "AWS Certified Developer",
    //   issuer: "Amazon Web Services",
    //   year: "2023",
    // },
    // {
    //   name: "Google Cloud Professional Developer",
    //   issuer: "Google",
    //   year: "2022",
    // },
    // {
    //   name: "React Advanced Concepts",
    //   issuer: "Frontend Masters",
    //   year: "2022",
    // },
    {
        name: "W3Schools JavaScript Certification",
        issuer: "W3Schools",
        year: "2024",
    },
    {
        name: "W3Schools React Certification",
        issuer: "W3Schools",
        year: "2024",
    },
];

const skills: Skill[] = [
    {
        name: "HTML",
        icon: "/images/icons/html.webp",
        categories: ["Markup Language"],
    },
    { name: "CSS", icon: "/images/icons/css.webp", categories: ["Styling"] },
    {
        name: "JavaScript",
        icon: "/images/icons/js.webp",
        categories: ["Programming Language"],
    },
    {
        name: "TypeScript",
        icon: "/images/icons/ts.webp",
        categories: ["Programming Language"],
    },
    {
        name: "React.js",
        icon: "/images/icons/react.webp",
        categories: ["Frontend Library"],
    },
    {
        name: "Next.js",
        icon: "/images/icons/nextjs.svg",
        categories: ["Fullstack Framework"],
    },
    {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwind.webp",
        categories: ["Styling"],
    },
    {
        name: "Framer Motion",
        icon: "/images/icons/framer.webp",
        categories: ["Animations"],
    },
    {
        name: "Node.js",
        icon: "/images/icons/nodejs.webp",
        categories: ["Backend Runtime"],
    },
    {
        name: "NestJS",
        icon: "/images/icons/nestjs.svg", // Missing icon
        categories: ["Backend Framework"],
    },
    {
        name: "Go (Fiber)",
        icon: "/images/icons/fiber.svg",
        categories: ["Backend Framework"],
    },
    {
        name: "PostgreSQL",
        icon: "/images/icons/postgres.webp",
        categories: ["Database"],
    },
    {
        name: "Prisma",
        icon: "/images/icons/prisma.svg", // Missing icon
        categories: ["Database"],
    },
    {
        name: "Firebase",
        icon: "/images/icons/firebase.webp",
        categories: ["Database", "Auth"],
    },
    {
        name: "Git & GitHub",
        icon: "/images/icons/git.webp",
        categories: ["Version Control"],
    },
    {
        name: "SEO",
        icon: "/images/icons/seo.webp",
        categories: ["Search Optimization"],
    },
];

export {
    navlinks,
    projects,
    articles,
    workExperience,
    education,
    certifications,
    skills,
};
