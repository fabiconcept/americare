import clsx from "clsx";
import { Macondo } from "next/font/google";
import Image from "next/image";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function OurMissionSection() {
    return (
        <div className="py-32 sm:px-32 xl:px-80 relative z-10 bg-white">
            <div className="mb-12">
                <h1 className={clsx(FontFamily.className, "text-8xl text-[#6fad45]")}>AmeriCare</h1>
                <p className="opacity-60 text-[0.97rem]">Compassionate Care, Right at Home</p>
            </div>

            <div className="flex gap-12">
                <p className="xl:max-w-3xl max-w-xl xl:text-5xl text-4xl leading-[3rem] opacity-80 relative">
                    <Image
                        src={"https://americare.sirv.com/icons/quote-icon.svg"}
                        alt="Quote icon"
                        height={300}
                        width={300}
                        priority
                        className={clsx(
                            "w-[8vw] smooth absolute -top-[2.5vw] -left-[4.2vw] -rotate-3 -z-[1]"
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
                            "w-[8vw] smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1]"
                        )}
                    />
                </p>

                <p className="max-w-md opacity-70">
                    We understand the unique needs and challenges that children and seniors face, and we&apos;re here to provide the highest level of care and support. Our approach is holistic encompassing mental and physical health to support the entire family through our a leading to the best outcomes.
                </p>
            </div>
        </div>
    );
}