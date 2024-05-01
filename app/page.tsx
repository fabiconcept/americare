import BackgroundLayer from "./HomePage Sections/BackgroundLayer";
import HolePunchSection from "./HomePage Sections/HolePunchSection";
import HeroSection from "./HomePage Sections/HeroSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";

export default function page() {
    return (
        <>
            <BackgroundLayer />
            <HeroSection />
            <OurMissionSection />
            <HolePunchSection />
            <div className="h-screen"></div>
        </>
    )
}