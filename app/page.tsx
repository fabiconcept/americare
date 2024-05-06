import BackgroundLayer from "./HomePage Sections/BackgroundLayer";
import SkilledNursingSection from "./HomePage Sections/SkilledNursingSection";
import PersonalCareSection from "./HomePage Sections/PersonalCareSection";
import CompanionshipSection from "./HomePage Sections/CompanionshipSection";
import HeroSection from "./HomePage Sections/HeroSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";

export default function page() {
    return (
        <>
            <BackgroundLayer />
            <HeroSection />
            <OurMissionSection />
            <SkilledNursingSection />
            <PersonalCareSection />
            <CompanionshipSection />
            {/* <div className="h-[100vh] bg-white"></div> */}
        </>
    )
}