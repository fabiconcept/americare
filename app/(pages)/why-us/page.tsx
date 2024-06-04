import TopSection from "./sections/TopSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurMissionSection from "./sections/OurMissionSection";
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
                <OurMissionSection />
                <OurVisionSection />
                <OurProcessSection />
            </div>
        </>
    )
}