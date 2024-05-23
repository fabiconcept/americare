"use client"
import { FaHandHoldingMedical } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";

export default function TopSection() {
    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <div className="dark:bg-darkBg dark:text-white bg-white pt-[10rem] pb-[6rem]">
                <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                    <span className="flex items-center gap-2">
                        <FaHandHoldingMedical className="scale-x-[-1] opacity-30" />
                        <span className="whitespace-nowrap">
                            Services
                        </span>
                        <FaHandHoldingMedical className=" opacity-30" />
                    </span>
                    <h1
                        className="text-primary font-semibold 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                        Empowering home healthcare for <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">seniors</span> & <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">children</span>
                    </h1>
                </div>
            </div>
        </>
    )
}