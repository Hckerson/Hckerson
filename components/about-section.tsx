"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "AWS", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Git", category: "devops" },
];

const education = [
  {
    degree: "B.S. Computer Engineering",
    institution: "Obafemi Awolowo University",
    year: "2023-now",
    description:
      "Graduated with honors. Focused on web development and algorithms.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "Coding Bootcamp",
    year: "2021",
    description:
      "Intensive 12-week program covering modern web development techniques.",
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
export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-muted/50 scroll-mt-24 p-3 flex justify-center"
    >
      <div className="container max-w-5xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for detail and
            a love for clean, efficient code.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I've been coding for over 3 years, starting with simple HTML
                websites and gradually expanding my skillset to encompass the
                entire web development stack.
              </p>
              <p>
                My journey has taken me through startups, agencies, and
                enterprise environments, where I've developed a versatile
                approach to problem-solving and a deep appreciation for
                user-centered design.
              </p>
              <p>
                I'm particularly passionate about creating accessible,
                performant web applications that provide exceptional user
                experiences regardless of device or connection speed.
              </p>
              <p>
                When I'm not coding, you'll find me hiking mountain trails,
                experimenting with new cooking recipes, or contributing to
                open-source projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="skills">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              <TabsContent value="skills" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill.name} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="mt-4">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {education.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <h4 className="font-semibold">{item.degree}</h4>
                          <span className="text-sm text-muted-foreground">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-sm">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="certifications" className="mt-4">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm">{cert.year}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
