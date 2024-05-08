import BackgroundLayer from "./HomePage Sections/BackgroundLayer";
import ServicesOfferedSection from "./HomePage Sections/ServicesOfferedSection";
import HeroSection from "./HomePage Sections/HeroSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";
import { ServiceOffered } from "@/lib/ServiceOffered";
import OurServicesSection from "./HomePage Sections/OurServicesSection";
import JoinTeamSection from "./HomePage Sections/JoinTeamSection";



export default function page() {
    return (
        <>
            <BackgroundLayer />
            <HeroSection />
            <OurMissionSection />
            <>
                {ServiceOffered.map(({ blob, btnText, btnUrl, description, imgAlt, imgSrc, title }, index) => (
                    <ServicesOfferedSection
                        blob={blob}
                        btnText={btnText}
                        btnUrl={btnUrl}
                        description={description}
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        title={title}
                        key={index}
                    />
                ))}
            </>

            <OurServicesSection />
            <JoinTeamSection />
        </>
    )
}