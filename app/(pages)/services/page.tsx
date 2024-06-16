import Image from "next/image";
import TopSection from "./components/TopSection";
import OurCaregivers from "./components/OurCaregivers";
import MedicarePrograms from "./components/MedicarePrograms";
import InfoTextSection from "./components/InfoTextSection";
import WhatWeCanDoForYouSection from "./components/WhatWeCanDoForYouSection";
import NavigationComponent from "@/app/components/NavSection";
import ServicesOfferedSection from "@/app/HomePage Sections/ServicesOfferedSection";
import { ServiceOffered } from "@/lib/ServiceOffered";

export default function ServicesPage() {
    return (
        <div>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <InfoTextSection />
                <MedicarePrograms />
                <>
                {ServiceOffered.slice(1).map(({ blob, btnText, btnUrl, description, imgAlt, imgSrc, title }) => (
                    <ServicesOfferedSection
                        blob={blob}
                        btnText={btnText}
                        btnUrl={btnUrl}
                        description={description}
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        title={title}
                        key={title}
                    />
                ))}
            </>
                <OurCaregivers />
            </div>
        </div>
    )
}