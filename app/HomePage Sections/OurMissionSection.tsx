import clsx from "clsx";
import { Macondo } from "next/font/google";
import Image from "next/image";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function OurMissionSection() {
    return (
        <>
            <div className="py-12 sm:px-[12.5vw] px-3 relative z-10 dark:bg-darkBg dark:text-white bg-white">
                <div className="mb-12">
                    <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>Our Mission</h1>
                    <p className="opacity-60 text-[0.97rem] font-semibold">Compassionate Care, Right at Home</p>
                </div>

                <div className="flex gap-12 flex-wrap">
                    <p className="min-w-[20rem] flex-[2] xl:text-5xl text-4xl leading-[3rem] opacity-80 relative">
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
                            Our mission is to ensure the well-being and happiness of every member of your family, from the youngest to the oldest.
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
            <div className="relative">
                <Image
                    src={"https://americare.sirv.com/icons/hole-punch.png"}
                    alt={"Hole Punch"}
                    height={1920}
                    width={1200}
                    className="w-full -mt-1 brightness-105 dark:invisible"
                />
                <Image
                    src={"https://americare.sirv.com/icons/hole-punch-dark.png"}
                    alt={"Hole Punch"}
                    height={1920}
                    width={1200}
                    className="w-full h-[110%] object-cover -mt-1 brightness-100 absolute top-0 left-0 brigh"
                />
            </div>
        </>
    );
}