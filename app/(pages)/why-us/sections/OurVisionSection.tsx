import clsx from "clsx";
import { Macondo } from "next/font/google";
import Image from "next/image";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function OurVisionSection() {
    return (
        <>
            <div className="dark:bg-darkBg dark:text-white grid place-items-center sm:py-24 py-12 sm:px-[12.5vw] px-6 relative z-10 bg-white">
                <div>
                    <div className="mb-12">
                        <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>Our Vision</h1>
                        <p className="opacity-60 text-[0.97rem] font-semibold">Compassionate Care, Right at Home</p>
                    </div>

                    <div className="flex gap-12 flex-wrap">
                        <p className="min-w-[20rem] flex-[2] h-fit 2xl:text-5xl sm:text-4xl text-2xl sm:font-normal font-semibold opacity-80 relative">
                            <Image
                                src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                alt="Quote icon"
                                height={300}
                                width={300}
                                priority
                                className={clsx(
                                    "w-[8vw] opacity-40 smooth absolute -top-[2.5vw] -left-[6vw] -rotate-3 -z-[1]"
                                )}
                            />
                            <span className="sm:text-left text-center">
                                To lead in compassionate, reliable home healthcare, fostering healthier, happier, and independent living.
                            </span>
                            <Image
                                src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                alt="Quote icon"
                                height={300}
                                width={300}
                                priority
                                className={clsx(
                                    "w-[8vw] opacity-40 smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1]"
                                )}
                            />
                        </p>

                        <p className="min-w-[20rem] flex-1 opacity-70">
                            At AmeriCare Inc, our vision is to redefine the standards of home healthcare. We aspire to be the leading provider of compassionate, reliable, and person-centered care services, fostering a healthier, happier, and more connected community. Our goal is to empower individuals to live their lives to the fullest, with dignity and independence, within the comfort of their homes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}