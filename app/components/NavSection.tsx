"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useAnimation, Variants, motion } from "framer-motion";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavigationComponent({ variation, inViewContainer }: { variation?: "home", inViewContainer?: boolean }) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const controls = useAnimation();

    const nav_Variants: Variants = {
        hidden: { translateX: "100vw" },
        visible: { translateX: "0" },
    }

    useEffect(() => {
        if (isNavOpen) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, isNavOpen]);

    const handleClick = () => {
        setIsNavOpen(!isNavOpen);
    }


    return (
        <>
            <div className={clsx(
                "grid md:grid-cols-[1fr_auto_1fr] grid-cols-[auto_1fr] items-center fixed top-0 left-0 z-50 w-screen py-5 sm:px-9 px-4",
                inViewContainer ? "" : "backdrop-blur bg-white/5"
            )}>
                <Link href={"/"}>
                    <Image
                        src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                        alt="AmeriCare Logo"
                        height={300}
                        width={300}
                        priority
                        className={clsx(
                            "sm:w-20 w-16 smooth",
                            variation && inViewContainer && "invert brightness-0"
                        )}
                    />
                </Link>

                <div className={clsx(
                    "md:flex hidden items-end gap-1 h-fit dark:text-white text-black 2xl:text-lg",
                    variation && inViewContainer ? "text-white" : ""
                )}>
                    <Link className={clsx(
                        "px-7 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-6 hover:text-primary smooth",
                        pathname === "/" ? (inViewContainer ? "font-semibold -rotate-6 border-b-black/70 text-black" : "font-semibold -rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/"}>Home</Link>
                    <Link className={clsx(
                        "px-7 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-3 hover:text-primary smooth",
                        pathname === "/services" ? (inViewContainer ? "font-semibold -rotate-3 border-b-black/70 text-black" : "font-semibold -rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/services"}>Services</Link>
                    <Link className={clsx(
                        "px-7 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        pathname === "/why-us" ? (inViewContainer ? "font-semibold border-b-black/70 text-black" : "font-semibold border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/why-us"}>Why Americare</Link>
                    <Link className={clsx(
                        "px-7 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-3 hover:text-primary smooth",
                        false ? (inViewContainer ? "font-semibold rotate-3 border-b-black/70 text-black" : "font-semibold rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={""}>Testimonials</Link>
                    <Link className={clsx(
                        "px-7 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-6 hover:text-primary smooth",
                        pathname === "/careers" ? (inViewContainer ? "font-semibold rotate-6 border-b-black/70 text-black" : "font-semibold rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/careers"}>Career</Link>
                </div>

                <div className="flex justify-end gap-3 items-center">
                    <CustomBtn
                        text="Contact us"
                        linkHref="#"
                        noBorder={inViewContainer}
                        customClass={clsx(
                            inViewContainer ? "border-transparent outline-white text-white" : ""
                        )}
                    />

                    <div className={clsx(
                        "md:hidden h-5 place-items-center grid gap-2 cursor-pointer active:scale-90 smooth relative",
                        inViewContainer && "invert brightness-0"
                    )}

                        onClick={handleClick}
                    >
                        <div className={clsx(
                            "top-0 origin-left absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "rotate-45 translate-x-1 -translate-y-1 bg-primary" : "dark:bg-white bg-black"
                        )}></div>
                        <div className={clsx("left-0 w-9 h-[3px] smooth", isNavOpen ? "bg-primary translate-x-5 scale-x-[1.5]" : "dark:bg-white bg-black")}></div>
                        <div className={clsx(
                            "bottom-0 origin-right absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "-rotate-45 -translate-x-2 -translate-y-5 bg-primary" : "dark:bg-white bg-black"
                        )}></div>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            <motion.div 
                variants={nav_Variants}
                transition={{ duration: 0.25 }}
                animate={controls}
                initial={"hidden"}
                className="fixed smooth top-0 right-0 z-[49] h-screen w-screen dark:bg-black/50 bg-white/50 backdrop-blur-md md:hidden grid place-items-center dark:text-white text-black"
            >
                <div className="grid gap-3 text-xl">
                <Link className={clsx(
                        "px-7 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-6 hover:text-primary smooth",
                        pathname === "/" ? (inViewContainer ? "font-semibold -rotate-6 border-b-black/70 text-black" : "font-semibold -rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/"}>Home</Link>
                    <Link className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-3 hover:text-primary smooth",
                        pathname === "/services" ? (inViewContainer ? "font-semibold -rotate-3 border-b-black/70 text-black" : "font-semibold -rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/services"}>Services</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        pathname === "/why-us" ? (inViewContainer ? "font-semibold border-b-black/70 text-black" : "font-semibold border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/why-us"}>Why Americare</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-3 hover:text-primary smooth",
                        false ? (inViewContainer ? "font-semibold rotate-3 border-b-black/70 text-black" : "font-semibold rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={""}>Testimonials</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-6 hover:text-primary smooth",
                        pathname === "/careers" ? (inViewContainer ? "font-semibold rotate-6 border-b-black/70 text-black" : "font-semibold rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/careers"}>Career</Link>
                </div>
            </motion.div>
        </>
    )
}
