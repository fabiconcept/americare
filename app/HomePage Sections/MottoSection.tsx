import Image from "next/image";
import acessibleSvg from "./components/acessible.svg";
import allSvg from "./components/all.svg";
import affordableSvg from "./components/affordable.svg";

export default function MottoSection() {
    return (
        <div className="py-24 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 dark:bg-darkBg dark:text-white bg-white">
            <div className="flex flex-wrap gap-4 justify-center w-full">
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center bg-white/5">
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
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center bg-white/5">
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
                <div className="md:w-[30rem] rounded-xl gap-3 flex flex-col items-center w-[20rem] p-5 text-center bg-white/5">
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
        </div>
    )
}