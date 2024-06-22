import InViewWrapper from "@/app/components/InViewWrapper";
import { Variants } from "framer-motion";

export default function InfoTextSection() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="dark:bg-darkBg dark:text-white pb-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 bg-white">
            <div className="flex gap-12 flex-wrap">
                <InViewWrapper animation={fadeIn} className="min-w-[20rem] flex-1 opacity-70">
                    <>At AmeriCare, we don&apos;t just offer jobs; we provide opportunities to make a real difference in people&apos;s lives. You&apos;ll have a fulfilling career providing compassionate care and making a lasting positive impact.</>
                </InViewWrapper>
                <InViewWrapper animation={fadeIn} className="min-w-[20rem] flex-1 opacity-70">
                    <>AmeriCare goes beyond just jobs. We offer a dynamic, diverse, and people-first environment. Our commitment includes ongoing training, career advancement, and fostering an exceptional work environment where you can flourish.</>
                </InViewWrapper>
            </div>
        </div>
    )
}