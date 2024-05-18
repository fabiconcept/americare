"use client"
import clsx from "clsx";
import Image from "next/image";
import { Parallax, } from "react-parallax";
import CustomBtn from "../components/CustomBtn";

interface SectionProp { 
    title: string, 
    blob: string, 
    description: { __html: string | TrustedHTML } | undefined, 
    imgSrc: string, 
    imgAlt: string ,
    btnText: string, 
    btnUrl: string
}

export default function ServicesOfferedSection({blob, btnText, btnUrl, description, imgAlt, imgSrc, title}: SectionProp) {
    return (
        <div className="dark:bg-darkBg dark:text-white bg-white relative sm:h-[100vh] sm:min-h-[fit-content] md:max-h-[65rem]">
            <Image
                src={"https://americare.sirv.com/icons/bbblurry.svg"}
                alt={"blur shape"}
                height={800}
                width={800}
                className="w-[70rem] absolute -top-[20rem] -left-[20rem] dark:opacity-50"
            />
            <Parallax
                className="py-12 sm:px-[12.5vw] px-3 grid place-items-center"
                strength={500}
                renderLayer={(percentage) => (
                    <>
                        <div className="flex gap-12 flex-wrap p-6 relative z-10 dark:mix-blend-screen mix-blend-multiply">
                            <div className="min-w-[20rem] flex-[2] flex flex-col gap-8relative z-10">
                                <span className="text-primary font-semibold 2xl:text-7xl sm:text-6xl text-4xl pb-3">
                                    {title}
                                </span>
                                <div className="pt-3">
                                    <div className="relative 2xl:text-5xl sm:text-4xl text-2xl sm:leading-[3rem] sm:text-left text-center text-balance">
                                        <Image
                                            src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                            alt="Quote icon"
                                            height={300}
                                            width={300}
                                            priority
                                            className={clsx(
                                                "w-[8vw] dark:opacity-40 smooth absolute -top-[3.25vw] -left-[6vw] -rotate-3 -z-[1]"
                                            )}
                                        />
                                        <span>
                                            {blob}
                                        </span>
                                        <Image
                                            src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                            alt="Quote icon"
                                            height={300}
                                            width={300}
                                            priority
                                            className={clsx(
                                                "w-[8vw] dark:opacity-40 smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1]"
                                            )}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                                            alt={"Nurse photo 002"}
                                            height={480}
                                            width={1920}
                                            priority
                                            className={clsx(
                                                "sm:visible invisible",
                                                "md:w-[90%] sm:px-6 pt-7  opacity-50 smooth dark:invert",
                                            )}

                                            style={{
                                                transform: `translateY(${percentage * 2}rem)`
                                            }}
                                        />
                                        <Image
                                            src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                                            alt={"Nurse photo 002"}
                                            height={480}
                                            width={1920}
                                            priority
                                            className={clsx(
                                                "sm:invisible visible absolute top-0 left-0",
                                                "md:w-[90%] sm:px-6 pt-7  opacity-50 smooth dark:invert",
                                            )}
                                        />
                                    </div>
                                </div>
                                <CustomBtn
                                    customClass="text-base"
                                    linkHref={btnUrl}
                                    text={btnText}
                                />
                            </div>
                            <div className="min-w-[20rem] flex-1 flex flex-col gap-12">
                                <span className="opacity-70 flex flex-col gap-4" dangerouslySetInnerHTML={description}></span>
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    height={4600}
                                    width={7360}
                                    priority
                                    className={clsx(
                                        "w-full smooth",
                                        "duration-500 delay-75"
                                    )}
                                    style={{
                                        transform: `translateY(-${percentage * 2}rem)`
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )}
            >

            </Parallax>
        </div>
    )
}