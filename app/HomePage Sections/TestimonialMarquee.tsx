import Marquee from "react-fast-marquee";
import SingleTestimony from "../(pages)/testimonials/Components/SingleTestimony";
import Reviews from "@/lib/Reviews";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function TestimonialMarquee() {
    return (
        <div className="sm:py-8 py-4 relative z-10 dark:bg-darkBg dark:text-white bg-white overflow-hidden">
            <div className="pt-24 pb-12 2xl:px-[10vw] sm:px-[8vw] px-6 mb-6">
                <h1 className={clsx(FontFamily.className, "sm:text-[3vw] text-4xl text-primary font-semibold relative z-10")}>Hear From Our Community</h1>
                <h1 className={clsx(FontFamily.className, "absolute top-1/2 -translate-y-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 sm:text-[15vw] text-[25vw] dark:text-[rgba(255,255,255,0.015)] text-[rgba(111,173,69,0.015)] pointer-events-none select-none font-bold")}>Our Community</h1>
            </div>
            <Marquee
                className="py-4 z-10"
                pauseOnHover
                speed={30}
            >
                <div className="flex items-stretch gap-4 mr-4">
                    {Reviews.map(({ name, occupation, photo, testimony, moreUrl }, index) => (
                        <SingleTestimony
                            key={name}
                            moreUrl={moreUrl}
                            name={name}
                            occupation={occupation}
                            photo={photo}
                            testimony={testimony}
                            isOdd={(index + 1) % 2 === 0}
                            marquee="yes"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}
