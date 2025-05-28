"use client";

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
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
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

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 bg-muted/50 scroll-mt-24 p-2"
    >
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing my knowledge and experiences through technical articles and tutorials.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-between group">
                    <Link href={article.url}>
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}