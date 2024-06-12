import clsx from "clsx";
import Image from "next/image";
import acessibleSvg from "@/app/HomePage Sections/components/acessible.svg";
import allSvg from "@/app/HomePage Sections/components/all.svg";
import affordableSvg from "@/app/HomePage Sections/components/affordable.svg";

const benfitsList: { content: string, count: number }[] = [
    { content: "Personalized care tailored to individual needs", count: 1 },
    { content: "Enhanced quality of life through comprehensive support", count: 2 },
    { content: "Services include personal support, adult day health, and more", count: 3 },
]

export default function CcspKeyBenefits() {
    return (
        <section className={clsx("sm:py-10 py-6 w-full")}>
            <div className="flex flex-wrap gap-4 justify-center w-full perspective">
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
                    <Image
                        src={acessibleSvg}
                        alt="Icon"
                        height={100}
                        width={100}
                        className="sm:w-24 w-20"
                    />

                    <span className="md:text-2xl sm:text-xl text-primary text-lg font-semibold">Accessible</span>
                    <span>
                        Same day appointments from the comfort of your home
                    </span>
                </div>
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
                    <Image
                        src={allSvg}
                        alt="Icon"
                        height={100}
                        width={100}
                        className="sm:w-24 w-20"
                    />

                    <span className="md:text-2xl sm:text-xl text-primary text-lg font-semibold">A+ Care</span>
                    <span>
                        Our holistic AmeriCare system keeps you well physically, mentally, and emotionally.
                    </span>
                </div>
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
                    <Image
                        src={affordableSvg}
                        alt="Icon"
                        height={100}
                        width={100}
                        className="sm:w-24 w-20"
                    />

                    <span className="md:text-2xl sm:text-xl text-primary text-lg font-semibold">Affordable</span>
                    <span>
                        Our care team will work to get you FREE quality care with no expenses, just great results.
                    </span>
                </div>
            </div>
        </section>
    )
}


function Benefits(prop: { content: string, isOdd?: boolean, count: number }) {
    return (
        <div className={clsx(
            "p-5 flex flex-col gap-3 border-2 border-dotted sm:hover:scale-105 hover:shadow-lg relative hover:z-30 smooth border-primary",
            prop.isOdd ? "dark:bg-[#CDE2BE]/25 hover:dark:bg-[#CDE2BE]/5 bg-[#CDE2BE]" : "dark:bg-[#F0F7EC]/10 hover:dark:bg-[#F0F7EC]/5 bg-[#F0F7EC]"
        )}>
            <p className="text-center">{prop.content}</p>
        </div>
    )
}