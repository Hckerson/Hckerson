"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Calendar,
  MapPin,
  Building,
  ArrowDownToLine,
  Briefcase,
  GraduationCap,
  Award,
  Loader2,
} from "lucide-react";
import { generateResume } from "@/lib/generate-resume";

const workExperience = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present",
    responsibilities: [
      "Lead development of a SaaS platform serving over 50,000 users",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries resulting in 60% performance improvement",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    location: "Austin, TX",
    period: "2019 - 2021",
    responsibilities: [
      "Developed responsive web applications using React and Node.js",
      "Integrated third-party APIs including payment gateways and mapping services",
      "Collaborated with UX/UI designers to implement user-friendly interfaces",
      "Participated in Agile development process with bi-weekly sprints",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Agency",
    location: "Seattle, WA",
    period: "2018 - 2019",
    responsibilities: [
      "Built and maintained client websites using JavaScript, HTML, and CSS",
      "Created custom WordPress themes and plugins",
      "Performed website optimizations to improve load times",
      "Assisted with technical support and bug fixes",
    ],
  },
];

const education = [
  {
    degree: "B.S. in Computer Science",
    institution: "University Name",
    year: "2018-2022",
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
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
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
          name: "Hckerson",
          email: "hckerson@gmail.com",
          phone: "+234 9125194271",
          location: "Nigeria",
        },
        experience: workExperience,
        education,
        skills,
        certifications,
      });
      toast({
        title: "Resume downloaded successfully",
        description: "Your resume has been downloaded in DOCX format.",
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
    <section id="resume" className="py-24 scroll-mt-24">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and experience in the tech industry.
          </p>
          <div className="mt-6">
            <Button size="lg" onClick={handleDownload} disabled={isDownloading}>
              {isDownloading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Resume...
                </>
              ) : (
                <>
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Download Resume
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-muted pl-6 space-y-8 ml-3">
              {/* {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[37px] h-6 w-6 rounded-full bg-background border-2 border-primary" />
                  <Card>
                    <CardContent className="pt-6">
                      <div className="mb-3">
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center">
                            <Building className="mr-1 h-4 w-4" />
                            {job.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {job.period}
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))} */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="relative border-l-2 border-muted pl-6 space-y-8 ml-3">
                <div className="relative">
                  <div className="absolute -left-[37px] h-6 w-6 rounded-full bg-background border-2 border-primary" />
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="text-lg font-semibold">
                        B.S. in Computer Science
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center">
                          <Building className="mr-1 h-4 w-4" />
                          University Name
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          2018 - 2022
                        </div>
                      </div>
                      <p className="mt-3 text-sm">
                        "Still grinding. Focused on web development, algorithms,
                        and database systems. trying to break into the web3
                        space"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="relative border-l-2 border-muted pl-6 space-y-8 ml-3">
                <div className="relative">
                  <div className="absolute -left-[37px] h-6 w-6 rounded-full bg-background border-2 border-primary" />
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index}>
                          <h4 className="font-medium">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
