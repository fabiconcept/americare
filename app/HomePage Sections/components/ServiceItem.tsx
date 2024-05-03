"use client"
import { Parallax } from "react-parallax";
import { useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

export default function ServiceItem() {
    const [parallaxValue, setParallaxValue] = useState<number>(0);
    const [writeUp, isWriteUpInView] = useInView({ threshold: 0.25 });
    const [topPart, isTopPartInView] = useInView({ threshold: 0.25 });
    const [picOne, isPicOneInView] = useInView({ threshold: 0.25 });
    const [picTwo, isPicTwoInView] = useInView({ threshold: 0.25 });
    const [picThree, isPicThreeInView] = useInView({ threshold: 0.25 });
    return (
        <Parallax
            strength={500}
            contentClassName="w-full h-screen items-center relative overflow-visible"
            renderLayer={(percentage) => setParallaxValue(percentage)}
            className="flex py-32 w-full items-center overflow-visible"
        >
            <div ref={topPart} className={clsx(
                "flex px-[12.5vw] gap-12 items-center",
            )}>
                <div className={clsx(
                    "flex-1 smooth",
                    isTopPartInView ? "animate-entrance" : "opacity-0"
                )}>AmeriCare services</div>
                <div className={clsx(
                    "sm:text-[4vw] text-5xl smooth",
                    isTopPartInView ? "animate-entrance" : "opacity-0"
                )}>Skilled Nursing</div>
                <div className="flex-1 flex items-center gap-8 sm:text-[4vw] text-5xl">
                    <div className="h-[2px] bg-black flex-1"></div>
                    <span className={clsx(
                        "smooth",
                        isTopPartInView ? "animate-entrance" : "opacity-0"
                    )}>01</span>
                </div>
            </div>

            <div ref={writeUp} className={clsx(
                "py-24 text-center sm:text-[3vw] leading-[3.5rem] text-4xl max-w-4xl mx-auto duration-500 delay-1000",
                isWriteUpInView ? "animate-entrance" : "opacity-0"

            )}>
                Expert In-Home Medical Care for All Ages and Condition
            </div>

            <div 
                className={clsx(
                    "absolute top-40 h-[30rem] w-[20vw] smooth grid place-items-center rounded-2xl overflow-hidden",
                )}
                style={{ transform: `translateY(-${parallaxValue * 5}rem)` }}
                ref={picOne}
            >
                <Image
                    src={"https://americare.sirv.com/gallery/pexels-kampus-7551583.jpg"}
                    alt={"people smiling together"}
                    height={5636}
                    width={3758}
                    className={clsx(
                        "w-full h-full object-cover duration-1000 delay-1000",
                        isPicOneInView ? "animate-entrance" : "opacity-0"
                    )}
                />
            </div>
            <div 
                className={clsx(
                    "absolute right-0 top-60 h-[30rem] w-[20vw] smooth grid place-items-center rounded-2xl overflow-hidden",
                )}
                style={{ transform: `translateY(-${parallaxValue * 5}rem)` }}
                ref={picTwo}
            >
                <Image
                    src={"https://americare.sirv.com/gallery/pexels-p-loverbashir-18580288.jpg"}
                    alt={"people smiling together"}
                    height={5636}
                    width={3758}
                    className={clsx(
                        "w-full h-full object-cover duration-1000 delay-1000",
                        isPicTwoInView ? "animate-entrance" : "opacity-0"
                    )}
                />
            </div>
            <div 
                className={clsx(
                    "absolute right-1/2 bottom-20 h-[25rem] w-[15vw] smooth grid place-items-center rounded-2xl overflow-hidden",
                )}
                style={{ transform: `translateY(-${parallaxValue * 5}rem)` }}
                ref={picThree}
            >
                <Image
                    src={"https://americare.sirv.com/gallery/pexels-kampus-8949835.jpg"}
                    alt={"people smiling together"}
                    height={5636}
                    width={3758}
                    className={clsx(
                        "w-full h-full object-cover duration-1000 delay-1000",
                        isPicThreeInView ? "animate-entrance" : "opacity-0"
                    )}
                />
            </div>
        </Parallax>
    )
}