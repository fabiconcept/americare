import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function OurMissionSection() {
    return (
        <>
            <div className="py-24 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 dark:bg-darkBg dark:text-white bg-white">
                <div className="mb-12">
                    <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>Why AmeriCare</h1>
                    <p className="opacity-60 text-[0.97rem] font-semibold">Compassionate Care, Right At Home</p>
                </div>

                <div className="flex gap-12 flex-wrap">
                    <p className="min-w-[20rem] flex-[2] 2xl:text-4xl sm:text-3xl text-lg sm:leading-[2.5rem] opacity-80 relative text-primary">
                        <Image
                            src={"https://americare.sirv.com/icons/quote-icon.svg"}
                            alt="Quote icon"
                            height={300}
                            width={300}
                            priority
                            className={clsx(
                                "w-[8vw] smooth absolute -top-[2.5vw] -left-[4.2vw] -rotate-3 -z-[1] dark:opacity-40"
                            )}
                        />
                        <span>
                            We understand the unique needs and challenges that children and seniors face and
                            we&apos;re here to provide the level of care and support. Our holistic approach encompasses mental and physical well-being to support your entire family.
                        </span>
                        <Image
                            src={"https://americare.sirv.com/icons/quote-icon.svg"}
                            alt="Quote icon"
                            height={300}
                            width={300}
                            priority
                            className={clsx(
                                "w-[8vw] smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1] dark:opacity-40"
                            )}
                        />
                    </p>

                    <p className="min-w-[20rem] flex-1 opacity-70">
                        We understand the unique needs and challenges that children and seniors face, and we&apos;re here to provide the highest level of care and support. Our approach is holistic encompassing mental and physical health to support the entire family through our a leading to the best outcomes.
                    </p>
                </div>
            </div>
        </>
    );
}