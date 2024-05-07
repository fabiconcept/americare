"use client"
import clsx from "clsx";
import Image from "next/image";
import { Parallax, } from "react-parallax";

export default function SkilledNursingSection() {
    return (
        <Parallax
            className="py-12 sm:px-[12.5vw] px-6 grid place-items-center bg-white relative  sm:h-[100vh] sm:min-h-[fit-content] md:max-h-[65rem]"
            strength={500}
            renderLayer={(percentage) => (
                <>
                    <Image
                        src={"https://americare.sirv.com/icons/bbblurry.svg"}
                        alt={"blur shape"}
                        height={800}
                        width={800}
                        className="w-[70rem] absolute -top-[20rem] -left-[20rem]"
                    />
                    <div className="flex gap-12 flex-wrap p-6 relative z-10 mix-blend-multiply">
                        <div className="min-w-[20rem] flex-[2] flex flex-col gap-8 2xl:text-7xl sm:text-6xl text-5xl relative z-10">
                            <span className="text-[#6fad45] font-semibold">Premier In-Home Nursing Care</span>
                            <div>
                                <div className="relative 2xl:text-5xl sm:text-4xl text-3xl">
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
                                        We offer skilled nursing care at home, providing medication, wound, and post-surgical support.
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
                                </div>
                                <Image
                                    src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                                    alt={"Nurse photo 002"}
                                    height={480}
                                    width={1920}
                                    priority
                                    className={clsx(
                                        "md:w-[90%] sm:px-6 pt-7  opacity-50smooth", 
                                    )}

                                    style={{
                                        transform: `translateY(${percentage*2}rem)`
                                    }}
                                />
                            </div>
                        </div>
                        <div className="min-w-[20rem] flex-1 flex flex-col gap-12">
                            <span className="opacity-70 flex flex-col gap-4">
                                <span>
                                    Our Skilled Nursing services at AmeriCare are designed to provide the highest level of medical care within the comfort of your home. Our team of registered nurses and licensed practical nurses are highly trained to meet the specific needs of our clients, whether they are children with complex medical conditions or elderly adults requiring post-operative care.
                                </span>
                                <span>
                                    From medication management and wound care to disease management and post-surgical support, our skilled nurses ensure that you or your loved one receives the best possible care to promote healing, recovery, and overall well-being.
                                </span>
                            </span>
                            <Image
                                src={"https://americare.sirv.com/rusty-watson-yIGinlYA6t8-unsplash.jpg"}
                                alt={"Nurse photo 001"}
                                height={4600}
                                width={7360}
                                priority
                                className={clsx(
                                    "w-full smooth", 
                                    "duration-500 delay-75"
                                )}
                                style={{
                                    transform: `translateY(-${percentage*2}rem)`
                                }}
                            />
                        </div>
                    </div>
                </>
            )}
        >

        </Parallax>
    )
}