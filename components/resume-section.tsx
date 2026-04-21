"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {

	Briefcase,

} from "lucide-react";
import { generateResume } from "@/lib/generate-resume";

const workExperience = [
	{
		title: "Full Stack Developer",
		company: "Tekcify",
		location: "Remote",
		period: "2024 - Present",
		responsibilities: [
			"Developed AI-powered products including automation tools, document intelligence systems, and chat-based assistants",
			"Designed responsive frontend interfaces focused on usability and real-time interaction",
			"Architected backend systems supporting AI pipelines, API orchestration, and scalable user operations",
			"Contributed to product decisions, optimizing both performance and user experience",
		],
	},
	{
		title: "Full Stack Developer",
		company: "Vouchmark",
		location: "Remote",
		period: "2024 - Present · Internship",
		responsibilities: [
			"Engineered backend services for a compliance and verification platform focused on risk scoring, due diligence, and business credibility systems",
			"Designed and maintained scalable APIs handling data aggregation and validation workflows",
			"Built internal dashboards and tools for visualizing verification results and risk insights",
			"Worked across the stack to ensure data integrity, performance, and clean UI delivery",
			"Collaborated on systems involving complex business logic, scoring algorithms, and third-party integrations",
		],
	},
];

const projectsData = [
	{
		name: "Dropbox Clone",
		description:
			"A cloud storage application with secure file upload/download, drag-and-drop features, and real-time state management.",
		technologies: ["React", "Node.js", "Firebase", "Tailwind CSS"],
	},
	{
		name: "One Place Clone",
		description:
			"A retail management system with secure user authentication, responsive dashboard, and inventory tracking.",
		technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
	},
	{
		name: "Serene Heaven",
		description:
			"A luxury hotel booking system with real-time availability, secure payments, and a complete admin dashboard.",
		technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
	},
];

const education = [
	{
		degree: "B.S.C in Computer Science",
		institution: "Obafemi Awolowo University",
		year: "2023-now",
		description:
			"Still grinding. Focused on web development, algorithms, and database systems. trying to break into the web3 space",
	},
];

const certifications = [
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

const skills = [
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"NestJS",
	"Node.js",
	"Express",
	"Python",
	"PostgreSQL",
	"MongoDB",
	"Prisma",
	"Git",
	"REST APIs",
];

export default function ResumeSection() {
	const [isDownloading, setIsDownloading] = useState(false);
	const { toast } = useToast();

	const handleDownload = async () => {
		setIsDownloading(true);
		try {
			await generateResume({
				personalInfo: {
					name: "Emmanuel Aderibigbe (Hckerson)",
					email: "hckerson@gmail.com",
					phone: "+234 9125194271",
					location: "Nigeria",
					socialMedia: {
						github: "https://github.com/hckerson",
						linkedin: "https://linkedin.com/in/hckerson",
						portfolio: "https://hckerson.vercel.app",
						twitter: "https://twitter.com/hckerson_jnr", // optional
						email: "hckerson@gmail.com",
					},
				},
				experience: workExperience,
				education,
				skills,
				certifications,
				summary:
					"Passionate Full Stack Developer with a strong foundation in modern web technologies. Experienced in building scalable applications with React, Next.js, and Node.js, and proficient in backend development with NestJS and databases like PostgreSQL and MongoDB. Dedicated to writing clean, maintainable code and delivering high-quality user experiences.",
				projects: projectsData,
				languages: ["English (Fluent)", "Yoruba (Native)"],
				awards: [
					{
						name: "W3Schools Certified Developer",
						year: "2024",
						description:
							"Achieved top scores in JavaScript and React certifications.",
					},
					{
						name: "Hactoberfest Contributor",
						year: "2024",
						description:
							"Contributed to multiple open-source projects during the annual event.",
					},
				],
				interests: [
					"Open Source",
					"Web3",
					"Blockchain",
					"UI/UX Design",
					"Machine Learning",
				],
			});
			toast({
				title: "Resume downloaded successfully",
				description: "Your resume has been downloaded in PDF format.",
			});
		} catch (error) {
			toast({
				title: "Download failed",
				description:
					"There was an error downloading your resume. Please try again.",
				variant: "destructive",
			});
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<section
			id="resume"
			className="py-24 scroll-mt-24 px-3 flex justify-center"
		>

		</section>
	);
}
