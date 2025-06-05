import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t py-12 px-2 p-2 2xl:flex justify-center">
      <div className="container max-w-5xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="text-xl font-bold mb-4 inline-block"
              aria-label="Go to homepage"
            >
              Hckerson
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Full-stack developer building accessible, user-friendly web
              applications with modern technologies.
            </p>
            <div className="flex gap-3">
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
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hckerson@gmail.com" aria-label="Email Me">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#resume"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Let's Talk</h3>
            <p className="text-muted-foreground mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Emmanuel Aderibigbe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
