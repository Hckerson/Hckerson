"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center p-3 justify-center py-24 pt-36 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 text-center lg:text-left"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                  <span className="text-primary">Hckerson</span>
                  <br />
                  Full-Stack Developer
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-4 text-xl text-muted-foreground"
                >
                  Building responsive, accessible web apps with modern JavaScript
                  and Python backends
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg">
                  <Link href="#projects">View My Projects</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#resume">
                    <ArrowDownToLine className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-4 justify-center lg:justify-start"
              >
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/hckerson"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/hckerson"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://twitter.com/hckerson_jnr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative mx-auto lg:mx-0 max-w-sm"
            >
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl mx-auto transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="View full size image"
              >
                <Image
                  src="https://res.cloudinary.com/hckerson/image/upload/f_auto,q_auto/v1/profile/hckerson?_a=BAMABkUq0"
                  alt="Hckerson"
                  fill
                  className="object-cover"
                  priority
                />
              </button>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Available for work</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full aspect-square">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 z-50"
              onClick={() => setIsImageModalOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close modal</span>
            </Button>
            <div className="w-full h-full relative rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/hckerson/image/upload/f_auto,q_auto/v1/profile/hckerson?_a=BAMABkUq0"
                alt="Hckerson"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}  