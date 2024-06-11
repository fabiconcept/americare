"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import NavigationComponent from "../components/NavSection";
import CustomBtn from "../components/CustomBtn";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function HeroSection() {

    const [containerRef, inViewContainer] = useInView({ threshold: 0.65 });

    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <NavigationComponent inViewContainer={inViewContainer} variation="home" />
            
            <div ref={containerRef} id="top" className="hero pb-[12vw] pt-[7.5vw] isolate relative z-10 bg-white dark:bg-darkBg dark:text-white text-black after:bg-white dark:after:bg-darkBg">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        src={"https://americare.sirv.com/istockphoto-1830783653-640_adpp_is.mp4"}
                        height={1000}
                        width={1000}
                        className="w-full h-full object-cover opacity-40"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="relative sm:min-h-[calc(48vh)] min-h-[calc(100vh-20rem)] max-w-[1400px] my-0 mx-auto py-0 px-[3em] flex flex-col items-center z-30 justify-center">
                    <span className={clsx(FontFamily.className, "2xl:text-7xl sm:text-6xl text-4xl drop-shadow-md")}>AmeriCare</span>
                    <span className="pt-3 pb-1 2xl:text-4xl sm:text-3xl text-2xl opacity-80 drop-shadow-md">Compassionate Care, Right at Home.</span>
                    <span className="2xl:text-2xl mb-10 sm:text-xl text-lg opacity-60 drop-shadow-md">With AmeriCare, You&apos;ll Never Walk Alone</span>
                    <CustomBtn
                        linkHref=""
                        text="Book an Appointment"
                        noBorder
                        customClass="scale-105"
                    />
                </div>
                <div className="absolute top-[-0.1%] left-0 w-full h-[100.2%] z-10 bg-green-800/25"></div>
            </div>
        </>
    )
}