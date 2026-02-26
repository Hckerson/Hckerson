import {
    Article,
    Certification,
    Education,
    Navlink,
    PortfolioProject,
    Skill,
    WorkExperience,
} from "../interface";
import { FaBlog } from "react-icons/fa6";
import { LuTags } from "react-icons/lu";
import { BsFolder2Open } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";

const navlinks: Navlink[] = [
    { name: "Projects", link: "/arena", visible: "sm", icon: BsFolder2Open },
    { name: "Pricing", link: "/competitions", visible: "md", icon: LuTags },
    { name: "Blog", link: "/how-it-works", visible: "md", icon: FaBlog },
    {
        name: "Github",
        link: "/national-leaderboard",
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
        image: "dropbox.png",
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
        learnings:
            "Implemented drag-and-drop file uploads, real-time file synchronization, and mastered complex state management for file operations.",
    },
    {
        id: 2,
        title: "One Place Clone",
        description:
            "A comprehensive retail management web application designed for store workers to manage sales, inventory, and customer interactions. Features include product management, sales tracking, and customer service tools.",
        image: "one_place.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Query",
            "Framer Motion",
        ],
        liveUrl: "https://one-place-clone.onrender.com/",
        githubUrl: "https://github.com/hckerson/One_place-clone",
        category: "backend",
        learnings:
            "Developed a user-friendly interface for retail workers, implemented efficient data management for sales and inventory, and created responsive design patterns for various store devices.",
    },
    {
        id: 4,
        title: "Serene Heaven",
        description:
            "A luxury hotel booking platform featuring elegant room displays, real-time availability checking, and seamless booking experience. Includes admin dashboard for managing reservations and room inventory.",
        image: "serene_heaven.png",
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
        learnings:
            "Implemented secure payment processing with Stripe, built a responsive booking system, and created an intuitive admin interface for hotel management.",
    },
    {
        id: 7,
        title: "Cresora - Financial Management Platform",
        description:
            "A comprehensive financial management platform designed for SMEs in Indonesia, featuring AI-powered insights, real-time cash tracking, bill management, and flexible reporting. Built with modern web technologies and interactive data visualization.",
        image: "cresora.png", // You'll need to add this image
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
        learnings:
            "Built an interactive financial dashboard with React Flow for data visualization, implemented complex UI components with Radix UI, and created a responsive design system for financial data presentation. Mastered advanced React patterns for state management and component composition.",
    },
    {
        id: 8,
        title: "OpenLibrary - Academic Resource Platform",
        description:
            "A comprehensive digital library platform designed for Nigerian campus students and lecturers, featuring PDF management, advanced reading tools, and collaborative study features. Includes AI-powered search, PDF annotations, user authentication, and admin dashboard for content management.",
        image: "openlibrary.png",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
            "NextAuth.js",
            "Radix UI",
            "Framer Motion",
        ],
        liveUrl: "https://openlibrary-five.vercel.app/",
        githubUrl: "https://github.com/yourusername/e-library-frontend",
        category: "fullstack",
        learnings:
            "Built a sophisticated PDF management system with advanced reading features including annotations, bookmarks, and search. Implemented role-based authentication with NextAuth.js, created responsive admin dashboard with analytics, and developed a scalable architecture using Prisma ORM with PostgreSQL. Mastered complex state management for PDF viewing, user permissions, and real-time collaboration features.",
    },
    {
        id: 9,
        title: "TixSync",
        description:
            "A full-stack event ticketing platform that enables event organizers to create and manage events, handle ticket sales. Features include seat reservation system, QR code tickets, multiple ticket tiers, and payment processing.",
        image: "logo.jpg",
        tags: [
            "NestJS",
            "GraphQL",
            "TypeScript",
            "PostgreSQL",
            "React",
            "Apollo Client",
        ],
        liveUrl: "https://tixsync.vercel.app",
        githubUrl: "https://github.com/hckerson/TixSync",
        category: "fullstack",
        learnings:
            "Implemented complex seat reservation system with timed holds, built type-safe APIs using GraphQL Code Generator, handled real-time ticket availability updates, and integrated secure payment processing.",
    },
    // {
    //   id: 8,
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    //   image:
    //     "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    //   liveUrl: "https://example.com/project1",
    //   githubUrl: "https://github.com/yourusername/project1",
    //   category: "fullstack",
    //   learnings:
    //     "Implemented Stripe payment integration and webhook handling for a seamless checkout experience.",
    // {
    //   id: 7,
    //   title: "Content Management System",
    //   description:
    //     "A headless CMS with a user-friendly admin interface, content modeling, and API generation.",
    //   image:
    //     "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["Next.js", "GraphQL", "MongoDB", "Docker", "AWS"],
    //   liveUrl: "https://example.com/project6",
    //   githubUrl: "https://github.com/yourusername/project6",
    //   category: "backend",
    //   learnings:
    //     "Designed a flexible content modeling system that allows users to create custom schemas.",
    // },
    // {
    //   id: 8,
    //   title: "Real-time Chat Application",
    //   description:
    //     "A real-time messaging platform with channels, direct messages, and file sharing capabilities.",
    //   image:
    //     "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    //   liveUrl: "https://example.com/project2",
    //   githubUrl: "https://github.com/yourusername/project2",
    //   category: "fullstack",
    //   learnings:
    //     "Learned how to handle real-time data synchronization between multiple clients using WebSockets.",
    // },
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
        company: "Dropbox Clone",
        location: "Remote",
        period: "2023 - Present",
        responsibilities: [
            "Developed a clone of the Dropbox file sharing service using React, Node.js, and Firebase",
            "Created a secure file upload/download functionality with drag-and-drop features",
            "Built an efficient state management system for file operations",
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
    },
    {
        title: "Full Stack Developer",
        company: "Serene Heaven",
        location: "Remote",
        period: "2025 - Present",
        responsibilities: [
            // "Implemented secure payment processing with Stripe integration",
            "Developed responsive booking system with real-time availability",
            "Created admin dashboard for reservation management",
            "Built room inventory management system",
            "Implemented user authentication and authorization",
        ],
    },
    // {
    //   title: "Senior Full-Stack Developer",
    //   company: "Tech Innovators Inc.",
    //   location: "San Francisco, CA",
    //   period: "2021 - Present",
    //   responsibilities: [
    //     "Lead development of a SaaS platform serving over 50,000 users",
    //     "Implemented CI/CD pipelines reducing deployment time by 40%",
    //     "Mentored junior developers and conducted code reviews",
    //     "Optimized database queries resulting in 60% performance improvement",
    //   ],
    // },
    // {
    //   title: "Full-Stack Developer",
    //   company: "Digital Solutions Co.",
    //   location: "Austin, TX",
    //   period: "2019 - 2021",
    //   responsibilities: [
    //     "Developed responsive web applications using React and Node.js",
    //     "Integrated third-party APIs including payment gateways and mapping services",
    //     "Collaborated with UX/UI designers to implement user-friendly interfaces",
    //     "Participated in Agile development process with bi-weekly sprints",
    //   ],
    // },
    // {
    //   title: "Junior Web Developer",
    //   company: "Creative Web Agency",
    //   location: "Seattle, WA",
    //   period: "2018 - 2019",
    //   responsibilities: [
    //     "Built and maintained client websites using JavaScript, HTML, and CSS",
    //     "Created custom WordPress themes and plugins",
    //     "Performed website optimizations to improve load times",
    //     "Assisted with technical support and bug fixes",
    //   ],
    // },
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
