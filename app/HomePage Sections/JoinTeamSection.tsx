import clsx from "clsx";
import CustomBtn from "../components/CustomBtn";
import Image from "next/image";
import arrImg from "@/lib/arrow.svg";
import { Variants } from "framer-motion";
import InViewWrapper from "../components/InViewWrapper";

export default function JoinTeamSection() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    };
    return (
        <section className="dark:bg-darkBg dark:text-white sm:py-32 py-24 2xl:px-[10vw] sm:px-[8vw]  px-3 bg-white/80 flex flex-col grid-bg">
            <InViewWrapper animation={fadeIn} className="flex-1">
                <>
                    <h1 className={clsx("sm:text-6xl 2xl:text-7xl flex flex-col font-black items-center text-primary text-4xl text-center mx-auto sm:max-w-[70vw] max-w-[85vw] text-balance")}>
                        <span className="bg-primary/80 dark:text-darkBg text-white w-fit p-3 rounded-xl relative">
                            Join Our Team
                            <Image
                                src={arrImg}
                                alt={"Scribble arrow"}
                                height={70}
                                width={100}
                                className="h-full object-cover absolute -top-2 sm:block hidden -right-[25%]"
                            />
                        </span>
                        <span className="text-3xl">and Be Part of Something Special!</span>
                    </h1>

                    <p className="text-center p-5 sm:text-lg opacity-70 md:max-w-[60vw] mt-3 mx-auto flex flex-col gap-3">
                        <span>At AmeriCare, we don&apos;t just offer jobs; we provide opportunities to make a real difference in people&apos;s lives. If you&apos;re seeking a fulfilling career in a dynamic, diverse, and people-first home care company, you&apos;ve come to the right place. </span>
                        <span>Our commitment to compassionate care, ongoing training, and career advancement creates an exceptional work environment where you can thrive both personally and professionally.</span>
                        <CustomBtn
                            customClass="text-base border-4 overflow-hidden mx-auto mt-8"
                            linkHref={"/careers"}
                            text={"Join us"}
                        />
                    </p>
                </>
            </InViewWrapper>
        </section>
    )
}