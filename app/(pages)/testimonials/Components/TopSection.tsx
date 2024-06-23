"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import ScrollToTop from "react-scroll-to-top";

export default function TopSection() {
    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{ zIndex: 100 }} />
            <InViewWrapper animation={fadeIn} className="dark:bg-darkBg dark:text-white bg-white pt-[10rem] pb-[4rem]">
                <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                    <h1
                        className="text-primary font-semibold 2xl:max-w-[55vw] md:max-w-[75vw] w-[90vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                        Over <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">100<span className="text-yellow-500">+</span></span>  <span>Patients</span> <span>Love</span> <span>Us</span>
                    </h1>
                    <span className="flex items-center flex-col mt-6">
                        <span>
                            <span className="opacity-70">We are proud to share the experiences of those who have worked with us.</span> Our clients&apos; satisfaction is a testament to our commitment to excellence. Hear what they have to say about their journey with us, and discover why we are a trusted partner in delivering outstanding results.
                        </span>
                    </span>
                </div>
            </InViewWrapper>
        </>
    )
}