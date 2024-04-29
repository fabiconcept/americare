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
                setItemOpacity(`${1-(scrollTop * 0.005)}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerRef, inViewContainer]);

    return (
        <div ref={containerRef} className="h-[300vh] relative">
            <div 
                className="h-screen w-full sticky top-0 gird place-items-center overflow-hidden"
                
            >
                <div className="absolute top-0 left-0 flex justify-between items-center">

                </div>
                <div className="relative w-full h-full">
                    <Image
                        src={"https://americare.sirv.com/parallax/main-bg-green.png"}
                        alt="background"
                        height={1728}
                        width={3072}
                        priority
                        style={{ transform: `scale(${itemScale})` }}
                        className="w-screen "
                    />
                    <div 
                        className="absolute h-full w-full top-0 left-0 bg-black/20 backdrop-blur-sm z-10"
                        style={{ opacity: itemOpacity }}
                    ></div>
                    <Image
                        src={"https://americare.sirv.com/parallax/main-couple.png"}
                        alt="background-couple"
                        height={1728}
                        width={3072}
                        priority
                        className="w-screen  absolute top-0 left-0 z-20"
                    />

                    <div
                        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-semibold scale-110 text-center"
                    >
                        <div
                            className="relative"
                            style={{ transform: `scale(${itemScale < 1.2 ? itemScale : 1.2})` }}
                        >
                            <span className={clsx(
                                "xl:text-[10rem] sm:text-[8rem]",
                                FontFamily.className
                            )}>AmeriCare</span>
                            <Image
                                src={"https://americare.sirv.com/icons/path.svg"}
                                alt="background-couple"
                                height={200}
                                width={200}
                                priority
                                className="absolute bottom-2 left-6 w-14"
                            />
                            <p className="xl:text-5xl sm:text-3xl opacity-60 translate-x-24">
                                Compassionate Care, Right at Home
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 right-24 text-lg text-white z-40 max-w-md p-4 rounded-lg bg-white/10 hover:bg-black/25 smooth backdrop-blur-md border border-white/25 floating after:h-24 after:w-24 after:rounded-full after:absolute after:-top-5 after:-left-5 after:bg-green-600/10 after:border after:border-green-600/10 after:-z-10">
                    <span>
                        At AmeriCare, we specialize in providing compassionate and dedicated home
                        healthcare services for both the young and the elderly.
                    </span>
                </div>
            </div>
        </div>
    )
}