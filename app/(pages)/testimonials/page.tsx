import NavigationComponent from "@/app/components/NavSection";
import TopSection from "./Components/TopSection";
import Testimonials from "./Components/Testimonials";
import { Metadata } from "next";
import { generalMetadata } from "@/lib/MetaData";

export const metadata: Metadata = {...generalMetadata, title: "Testimonials | AmeriCare Atlanta"};

export default function page() {
    return (
        <div className="">
            <NavigationComponent />
            <TopSection />
            <Testimonials />
        </div>
    )
}