"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from '@studio-freight/lenis';
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function HeroSection() {
    const [itemScale, setItemScale] = useState<number>(1);
    const [itemMove, setItemMove] = useState<number>(14);
    const [itemOpacity, setItemOpacity] = useState<string>("1");

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, []);

    const [containerRef, inViewContainer] = useInView({ threshold: 0.25 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (inViewContainer) {
                setItemScale((scrollTop * 0.0005) + 1);
                const adjustY = 14 - (10 * (scrollTop * 0.0015));
                if (adjustY > 0) {
                    setItemMove(adjustY);
                };
                setItemOpacity(`${1 - (scrollTop * 0.005)}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerRef, inViewContainer]);

    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <Image
                src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                alt="AmeriCare Logo"
                height={300}
                width={300}
                priority
                className={clsx(
                    "w-16 smooth fixed top-5 md:left-9 left-4 z-[60]",
                    inViewContainer && "invert brightness-0"
                )}
            />

            <div className={clsx(
                "fixed top-5 sm:right-9 right-4 z-[60] shadow cursor-pointer rounded-xl px-8 py-4 border-4 dark:border-darkBg border-white active:scale-90 smooth select-none active:opacity-50",
                inViewContainer ? "hover:bg-white border-2 border-dotted text-white hover:text-primary" : "bg-transparent outline-2 outline-dashed text-primary outline-primary hover:text-white hover:bg-primary"
            )}>
                Contact us
            </div>
            <div ref={containerRef} id="top" className="sm:h-[330vh] h-[200vh] relative z-10 bg-white">
                <div
                    className="h-screen w-full sticky top-0 grid place-items-center overflow-hidden"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={"https://americare.sirv.com/parallax/main-bg-green.png"}
                            alt="background"
                            height={1728}
                            width={3072}
                            priority
                            style={{ transform: `scale(${itemScale})` }}
                            className="w-screen lg:object-fill lg:h-auto h-full object-cover opacity-70"
                        />
                        <div
                            className="absolute h-full pointer-events-none w-full top-0 left-0 bg-black/20 backdrop-blur-[1px] z-10"
                            style={{ opacity: itemOpacity }}
                        ></div>
                        
                        <div
                            className="absolute 2xl:top-1/3 sm:top-[31%] top-1/3 left-1/2 -translate-x-1/2 md:-translate-y-[90%] -translate-y-[90%] text-white text-5xl font-semibold scale-110 text-center"
                        >
                            <div
                                className="relative delay-75 smooth"
                                style={{ transform: `scale(${itemScale < 1.2 ? itemScale : 1.2})` }}
                            >
                                <span className={clsx(
                                    "sm:text-[7vw] text-[13vw] flex gap-2 items-end",
                                    FontFamily.className
                                )}>
                                    AmeriCare
                                    {<Image
                                        src={"https://americare.sirv.com/icons/logo-alone-black.svg"}
                                        alt="AmeriCare Logo"
                                        height={250}
                                        width={250}
                                        priority
                                        style={{ 
                                            transform: `translateX(${itemMove*2}rem)`,
                                            opacity: `${(5 - (itemMove*2)) * 0.25}`
                                        }}
                                        className={clsx(
                                            "w-[5vw] sm:block hidden invert delay-100 smooth",
                                        )}
                                    />}
                                </span>
                                <Image
                                    src={"https://americare.sirv.com/icons/path.svg"}
                                    alt="path"
                                    height={200}
                                    width={200}
                                    priority
                                    className="absolute sm:bottom-2 -bottom-3 sm:left-6 left-1 w-14"
                                />
                                <p className="md:text-[2vw] text-[3.25vw] mt-2 md:ml-0 ml-4 sm:translate-x-20 flex w-fit flex-col">
                                    <span className="opacity-60">Compassionate Care, Right at Home</span>
                                    <span className="opacity-60">With Us, You&apos;ll Never Walk Alone</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute lg:bottom-10 lg:right-24 sm:text-lg text-sm text-white z-40 sm:max-w-md max-w-[90vw]"
                        style={{ 
                            transform: `translateY(${itemMove}rem)`,
                            opacity: `${(5-itemMove)*0.25}`
                        }}
                    >
                        <div className="p-4 w-full shadow-lg rounded-lg text-white lg:bg-white/10 bg-primary/30 lg:hover:bg-primary/25 hover:bg-primary/50 hover:animate-none smooth backdrop-blur-lg border-2 border-white/50 animate-floating after:h-24 after:w-24 after:rounded-full after:absolute after:-top-5 after:-left-5 after:bg-primary/25 after:border after:border-primary/25 after:-z-10">
                            <span>
                                At AmeriCare, we specialize in providing compassionate and dedicated home
                                healthcare services for both the young and the elderly.
                            </span>
                        </div>
                    </div>

                    <Image
                            src={"https://americare.sirv.com/parallax/happy-group.png"}
                            alt="background-png"
                            height={1728}
                            width={3072}
                            priority
                            className="w-full md:min-h-auto md:h-[90vh] min-h-[80vh] object-cover absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
                        />


                    <div className="absolute bottom-6 left-6 z-50 flex items-center flex-col text-white text-lg">
                        <span>Scroll Down</span>
                        <FaAngleDown className="animate-bounce" />
                    </div>
                </div>
            </div>
        </>
    )
}