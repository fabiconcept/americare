import TopSection from "./sections/TopSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurMissionSection from "./sections/OurMissionSection";
import MeetTeamSection from "./sections/MeetTeamSection";
import OurVisionSection from "./sections/OurVisionSection";
import OurProcessSection from "./sections/OurProcessSection";
import NavigationComponent from "@/app/components/NavSection";

export default function WhyUsPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <AboutUsSection />
                <MeetTeamSection />
                <OurMissionSection />
                <OurVisionSection />
                <OurProcessSection />
            </div>
        </>
    )
}