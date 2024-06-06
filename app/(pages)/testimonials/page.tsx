import NavigationComponent from "@/app/components/NavSection";
import TopSection from "./Components/TopSection";
import Testimonials from "./Components/Testimonials";

export default function page() {
    return (
        <div className="">
            <NavigationComponent />
            <TopSection />
            <Testimonials />
        </div>
    )
}