import TopSection from "./sections/TopSection";
import InfoTextSection from "./sections/InfoTextSection";
import FormSection from "./sections/FormSection";
import { Toaster } from "react-hot-toast"
import NavigationComponent from "@/app/components/NavSection";

export default function CareersPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <InfoTextSection />
                <FormSection />
                <Toaster 
                    position="bottom-right"
                    toastOptions={
                        {
                            style: {
                                background: '#363636',
                                color: '#fff',
                              }
                        }
                    }
                />
            </div>
        </>
    )
}