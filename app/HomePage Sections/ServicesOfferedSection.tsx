"use client"
import clsx from "clsx";
import Image from "next/image";
import { Parallax, } from "react-parallax";
import CustomBtn from "../components/CustomBtn";
import { Playfair_Display } from "next/font/google";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


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
        <div className="dark:bg-darkBg sm:py-12 py-6 dark:text-white bg-white relative 2xl:box-border box-content sm:h-[100vh] sm:min-h-[fit-content] md:max-h-[70rem] z-20">
            <Image
                src={"https://americare.sirv.com/icons/bbblurry.svg"}
                alt={"blur shape"}
                height={800}
                width={800}
                className="sm:w-[70rem] w-[100rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[6rem] dark:opacity-50"
            />
            <Parallax
                className="sm:py-12 py-6 2xl:px-[10vw] sm:px-[8vw]  px-1 grid place-items-center"
                strength={500}
                renderLayer={(percentage) => (
                    <>
                        <div className="flex sm:gap-12 gap-6 flex-wrap p-6 relative z-10 dark:mix-blend-screen mix-blend-multiply">
                            <div className="sm:min-w-[20rem] min-w-[15rem] flex-[2] flex flex-col gap-8 relative z-10">
                                <span className={clsx(FontFamily.className, "text-primary font-semibold 2xl:text-7xl sm:text-6xl text-4xl sm:pb-3 pb-1")}>
                                    {title}
                                </span>
                                <div className="sm:pt-3 pt-2">
                                    <div className="relative 2xl:text-5xl sm:text-4xl text-base sm:leading-[3rem] text-balance">
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
                                    linkHref="/#check_eligibility"
                                    text={btnText}
                                />
                            </div>
                            <div className="sm:min-w-[20rem] min-w-[15rem] flex-1 flex flex-col gap-12">
                                <span className="opacity-70 flex flex-col gap-4 sm:text-base text-sm" dangerouslySetInnerHTML={description}></span>
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