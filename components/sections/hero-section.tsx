import Link from "next/link";
import Button from "../ui/button";
import { contactHref } from "@/lib/constant";

export default function HeroSection() {
    return (
        <section className="relative box-border h-screen w-full">
            <div className="absolute inset-0">
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="flex max-w-[80ch] flex-col items-center gap-y-4 text-center md:gap-y-5 xl:gap-y-6">
                        <p className="font-clash md-text from-text-primary to-text-muted w-[15ch] bg-linear-to-b from-20% bg-clip-text text-center leading-none font-bold text-transparent">
                            <span className="block">Creative</span>
                            <span> Software Engineer.</span>
                        </p>
                        <p className="xs-text text-text-muted px-3 text-wrap">
                            {`I’m hckerson, a Full-Stack Engineer building high-performance products at the intersection of design and scalable architecture.`}{" "}
                        </p>
                        <span className="flex space-x-3">
                            <a href={contactHref} className="size-fit">
                                <Button
                                    size="sm"
                                    className="bg-accent-cyan text-background"
                                >
                                    Contact Me
                                </Button>
                            </a>
                            <Link href="/projects">
                                <Button
                                    size="sm"
                                    className="text-text-primary border-border border bg-transparent"
                                >
                                    View Projects
                                </Button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
