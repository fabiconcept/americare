import BackgroundLayer from "./HomePage Sections/BackgroundLayer";
import HolePunchSection from "./HomePage Sections/HolePunchSection";
import Services from "./HomePage Sections/Services";
import HeroSection from "./HomePage Sections/HeroSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";

export default function page() {
    return (
        <>
            <BackgroundLayer />
            <HeroSection />
            <OurMissionSection />
            <HolePunchSection />
            <Services />
            <div className="h-[100vh]"></div>
        </>
    )
}