"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";

export default function TopSection() {
    return (
        <>
        <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <div className="dark:bg-darkBg grid-bg dark:text-white bg-white pt-[10rem] pb-[6rem]">
                <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                    <InViewWrapper animation={fadeIn}>
                        <h1
                            className="text-primary font-semibold 2xl:max-w-[55vw] md:max-w-[75vw] w-[90vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                            Join our incredible team of <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">Doctors</span> <span className="dark:text-white text-darkBg">&</span> <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">Nurses</span>
                        </h1>
                    </InViewWrapper>
                    <InViewWrapper animation={fadeIn} className="flex items-center flex-col mt-6">
                        <span>
                            <span className="opacity-70">Our philosophy is simple: </span><span>hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</span>
                        </span>
                    </InViewWrapper>

                    <InViewWrapper animation={fadeIn} className="dark:mix-blend-screen">
                        <Image
                            src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                            alt={"Nurse photo 002"}
                            height={480}
                            width={1920}
                            priority
                            className="md:w-[70vw] 2xl:w-[50vw] opacity-70 dark:invert"
                        />
                    </InViewWrapper>
                </div>
            </div>
        </>
    )
}