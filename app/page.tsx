import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";

export default function Homepage() {
    return (
        <div className="relative box-border w-full">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </div>
    );
}
