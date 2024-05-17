import { FaQuestion } from "react-icons/fa6";
import Image from "next/image";

export default function TopSection() {
    return (
        <section className="dark:bg-darkBg dark:text-white min-h-screen h-fit bg-white/90 pb-[5rem]">
            <div className="sm:px-[10rem] px-4 pt-[6rem] pb-[2rem] text-center flex flex-col items-center">
                <span className="flex items-center">
                    <FaQuestion className="scale-x-[-1] scale-y-[-1] opacity-80" />
                    <span className="whitespace-nowrap">
                        Why AmeriCare
                    </span>
                    <FaQuestion />
                </span>
                <h1
                 className="text-primary font-semibold 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                    Where Compassion Meets Care Excellence
                </h1> 
                <span className="flex items-center flex-col">
                    <span>
                        Discover How We Redefine Home Healthcare with Personalized Services and Genuine Support
                    </span>
                </span>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 sm:px-[5vw] px-6 gap-8 justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src={"https://americare.sirv.com/doc01.png"}
                        alt={"blur shape"}
                        height={800}
                        width={800}
                        className="w-[20rem] -mb-32"
                    />
                    <span className="text-right self-end py-1 px-3 rounded-3xl border border-black/25 text-sm">We offer</span>
                    <div className="w-full flex flex-col h-full shadow-lg group smooth hover:-translate-y-1 dark:bg-darkBg">
                        <div className="py-2 px-4 border border-dashed border-primary bg-black/5 backdrop-blur text-lg font-semibold">Compassionate Care</div>
                        <div className="flex-1 py-2 px-4 border border-dashed border-transparent group-hover:border-t-transparent smooth group-hover:border-primary  dark:bg-[#F0F7EC]/25 hover:dark:bg-[#F0F7EC]/10 bg-[#F0F7EC] hover-bg hover:text-darkBg">
                            At AmeriCare, we provide more than just medical services. Our compassionate caregivers offer genuine companionship, understanding, and emotional support to our clients and their families.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 sm:translate-y-6">
                    <Image
                        src={"https://americare.sirv.com/doc02.png"}
                        alt={"blur shape"}
                        height={800}
                        width={800}
                        className="w-[20rem] -mb-12"
                    />
                    <span className="text-right self-end py-1 px-3 rounded-3xl border border-black/25 text-sm">We offer</span>
                    <div className="w-full flex flex-col h-full shadow-lg group smooth hover:-translate-y-1 dark:bg-darkBg bg-white">
                        <div className="py-2 px-4 border border-dashed border-primary bg-black/5 backdrop-blur text-lg font-semibold">Personalized Approach</div>
                        <div className="flex-1 py-2 px-4 border border-dashed border-transparent group-hover:border-t-transparent smooth group-hover:border-primary dark:bg-[#CDE2BE]/25 hover:dark:bg-[#CDE2BE]/10 bg-[#CDE2BE] hover-bg-odd">
                            We understand that every individual has unique needs. That&apos;s why we take the time to assess each client thoroughly and create personalized care plans tailored to their specific requirements.
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image
                        src={"https://americare.sirv.com/doc03.png"}
                        alt={"blur shape"}
                        height={800}
                        width={800}
                        className="w-[15rem] -mb-32"
                    />
                    <span className="text-right py-1 px-3 self-end rounded-3xl border border-black/25 text-sm">We offer</span>
                    <div className="w-full flex flex-col h-full shadow-lg group smooth hover:-translate-y-1 dark:bg-darkBg">
                        <div className="py-2 px-4 border border-dashed border-primary bg-black/5 backdrop-blur text-lg font-semibold">Experienced Team</div>
                        <div className="flex-1 py-2 px-4 border border-dashed border-transparent group-hover:border-t-transparent smooth group-hover:border-primary dark:bg-[#F0F7EC]/25 hover:dark:bg-[#F0F7EC]/10 bg-[#F0F7EC] hover-bg hover:text-darkBg">
                            Our team consists of highly trained and experienced healthcare professionals dedicated to providing the highest quality of care. With AmeriCare, you can trust that you&apos;re in capable hands.
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}