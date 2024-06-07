import Image from "next/image";
import TopSection from "./components/TopSection";
import OurCaregivers from "./components/OurCaregivers";
import MedicarePrograms from "./components/MedicarePrograms";
import InfoTextSection from "./components/InfoTextSection";
import WhatWeCanDoForYouSection from "./components/WhatWeCanDoForYouSection";
import NavigationComponent from "@/app/components/NavSection";

export default function ServicesPage() {
    return (
        <div>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <InfoTextSection />
                <MedicarePrograms />
                <OurCaregivers />
                <WhatWeCanDoForYouSection />
            </div>
        </div>
    )
}