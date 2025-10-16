"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
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

export default function ProjectsSection() {
	const [activeTab, setActiveTab] = useState("all");

	const filteredProjects =
		activeTab === "all"
			? projects
			: projects.filter((project) => project.category === activeTab);

	return (
		<section
			id="projects"
			className="py-24 scroll-mt-24 p-2 flex justify-center"
		>
			<div className="container xl:max-w-[1280px]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Projects
					</h2>
					<p className="text-xl text-muted-foreground  mx-auto">
						A selection of my recent work, showcasing my skills and
						experience in building web applications.
					</p>
				</motion.div>

				<Tabs
					defaultValue="all"
					value={activeTab}
					onValueChange={setActiveTab}
					className="mb-8"
				>
					<div className="flex justify-center ">
						<TabsList>
							<TabsTrigger
								value="all"
								className="md:text-base text-xs"
							>
								All Projects
							</TabsTrigger>
							<TabsTrigger
								value="frontend"
								className="md:text-base text-xs"
							>
								Frontend
							</TabsTrigger>
							<TabsTrigger
								value="backend"
								className="md:text-base text-xs"
							>
								Backend
							</TabsTrigger>
							<TabsTrigger
								value="fullstack"
								className="md:text-base text-xs sm:block hidden"
							>
								Full Stack
							</TabsTrigger>
						</TabsList>
					</div>
				</Tabs>

				<div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<Card className="h-full flex flex-col overflow-hidden group">
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<CardHeader>
									<CardTitle>{project.title}</CardTitle>
									<CardDescription>
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow">
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
											>
												{tag}
											</Badge>
										))}
									</div>
									<p className="text-sm text-muted-foreground">
										<strong>Key Learning:</strong>{" "}
										{project.learnings}
									</p>
								</CardContent>
								<CardFooter className="flex gap-3">
									<Button asChild variant="outline" size="sm">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-2 h-4 w-4" />
											Code
										</a>
									</Button>
									<Button asChild size="sm">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="mr-2 h-4 w-4" />
											Live Demo
										</a>
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
