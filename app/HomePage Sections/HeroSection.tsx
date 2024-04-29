"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from '@studio-freight/lenis';
import Image from "next/image";
import { Macondo } from "next/font/google";
import clsx from "clsx";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


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
            <Image
                src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                alt="AmeriCare Logo"
                height={300}
                width={300}
                priority
                className={clsx(
                    "w-16 smooth fixed top-5 left-9 z-[60]",
                    inViewContainer && "invert brightness-0"
                )}
            />

            <div className="fixed top-5 right-9 z-[60] rounded-[3rem] shadow cursor-pointer px-8 py-4 bg-white border border-black/25 active:scale-90 smooth select-none active:opacity-50">
                Contact us
            </div>
            <div ref={containerRef} className="h-[330vh] relative">
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
                            className="w-screen lg:object-fill lg:h-auto h-full object-cover"
                        />
                        <div
                            className="absolute h-full w-full top-0 left-0 bg-black/20 backdrop-blur-[1px] z-10"
                            style={{ opacity: itemOpacity }}
                        ></div>
                        <Image
                            src={"https://americare.sirv.com/parallax/main-couple.png"}
                            alt="background-couple"
                            height={1728}
                            width={3072}
                            priority
                            className="w-screen lg:object-fill lg:h-auto h-full object-cover absolute top-0 left-0 z-30"
                        />

                        <div
                            className="absolute sm:top-1/3 top-1/4 left-1/2 -translate-x-1/2 -translate-y-[70%] text-white text-5xl font-semibold scale-110 text-center"
                        >
                            <div
                                className="relative sm:translate-y-0 -translate-y-6"
                                style={{ transform: `scale(${itemScale < 1.2 ? itemScale : 1.2})` }}
                            >
                                <span className={clsx(
                                    "text-[9vw] flex gap-2",
                                    FontFamily.className
                                )}>
                                    AmeriCare
                                    {<Image
                                        src={"https://americare.sirv.com/icons/logo-alone-black.svg"}
                                        alt="AmeriCare Logo"
                                        height={300}
                                        width={300}
                                        priority
                                        className={clsx(
                                            "w-[5vw] invert",
                                        )}
                                    />}
                                </span>
                                <Image
                                    src={"https://americare.sirv.com/icons/path.svg"}
                                    alt="path"
                                    height={200}
                                    width={200}
                                    priority
                                    className="absolute bottom-2 left-6 w-14"
                                />
                                <p className="text-[2.5vw] opacity-60 sm:translate-x-24">
                                    Compassionate Care, Right at Home
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute bottom-10 sm:right-24 text-lg text-white z-40 sm:max-w-md max-w-[20rem]"
                        style={{ transform: `translateY(${itemMove}rem)` }}
                    >
                        <div className="p-4 w-full rounded-lg bg-white/10 hover:bg-black/25 smooth backdrop-blur-md border border-white/25 animate-floating after:h-24 after:w-24 after:rounded-full after:absolute after:-top-5 after:-left-5 after:bg-green-600/10 after:border after:border-green-600/10 after:-z-10">
                            <span>
                                At AmeriCare, we specialize in providing compassionate and dedicated home
                                healthcare services for both the young and the elderly.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}