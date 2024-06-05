import NavigationComponent from "@/app/components/NavSection";
import TopSection from "./Components/TopSection";
import Testimonials from "./Components/Testimonials";

export default function page() {
    return (
        <div>
            <NavigationComponent />
            <TopSection />
            <Testimonials />
        </div>
    )
}