import Slider from "@/components/ui/slider";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";

export default function Homepage() {
    return (
        <div className="relative box-border w-full">
     
            <HeroSection />
            <AboutSection />
        </div>
    );
}
