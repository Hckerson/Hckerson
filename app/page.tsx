import HeroSection from "@/components/sections/hero-section";
import SkillSection from "@/components/sections/skill-section";
import AboutSection from "@/components/sections/about-section";
import ProjectSection from "@/components/sections/project-section";
import QualificationSection from "@/components/sections/qualification-section";

export default function Homepage() {
    return (
        <div className="relative box-border w-full">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <SkillSection />
            <QualificationSection />
        </div>
    );
}
