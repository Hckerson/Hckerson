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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/yourusername/project1",
    category: "fullstack",
    learnings:
      "Implemented Stripe payment integration and webhook handling for a seamless checkout experience.",
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with channels, direct messages, and file sharing capabilities.",
    image: "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/yourusername/project2",
    category: "fullstack",
    learnings:
      "Learned how to handle real-time data synchronization between multiple clients using WebSockets.",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, task assignments, and deadline tracking.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux", "Express", "PostgreSQL", "Material UI"],
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/yourusername/project3",
    category: "frontend",
    learnings:
      "Implemented complex drag-and-drop functionality with React DnD, and optimized state management with Redux.",
  },
  {
    id: 4,
    title: "Weather API Service",
    description:
      "A RESTful API service that aggregates weather data from multiple sources and provides a unified endpoint for clients.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Node.js", "Express", "Redis", "Docker", "Jest"],
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/yourusername/project4",
    category: "backend",
    learnings:
      "Built a caching layer with Redis to improve performance and reduce external API calls.",
  },
  {
    id: 5,
    title: "Personal Finance Tracker",
    description:
      "A web application to track expenses, income, and financial goals with data visualization and budget planning features.",
    image: "https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "Firebase", "Chart.js", "Vuetify", "PWA"],
    liveUrl: "https://example.com/project5",
    githubUrl: "https://github.com/yourusername/project5",
    category: "frontend",
    learnings:
      "Implemented progressive web app features for offline usage and push notifications.",
  },
  {
    id: 6,
    title: "Content Management System",
    description:
      "A headless CMS with a user-friendly admin interface, content modeling, and API generation.",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "GraphQL", "MongoDB", "Docker", "AWS"],
    liveUrl: "https://example.com/project6",
    githubUrl: "https://github.com/yourusername/project6",
    category: "backend",
    learnings:
      "Designed a flexible content modeling system that allows users to create custom schemas.",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section
      id="projects"
      className="py-24 scroll-mt-24 p-2"
    >
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills and experience in building web applications.
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Key Learning:</strong> {project.learnings}
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