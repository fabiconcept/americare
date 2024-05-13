import clsx from "clsx";
import TopSection from "./sections/TopSection";
import Image from "next/image";

export default function WhyUsPage() {
    return (
        <>
            <Image
                src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                alt="AmeriCare Logo"
                height={300}
                width={300}
                priority
                className={clsx(
                    "w-16 smooth fixed top-5 left-9 z-[60]",
                )}
            />

            <div className={clsx(
                "fixed top-5 sm:right-9 right-4 z-[60] shadow cursor-pointer px-8 py-4 border active:scale-90 smooth select-none active:opacity-50",
            )}>
                Contact us
            </div>

            <div className="relative z-10">
                <TopSection />

            </div>
        </>
    )
}