"use client"

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from '@studio-freight/lenis'
import Image from "next/image";

export default function Container() {

    const itemRef = useRef<HTMLImageElement>(null);

    const [itemScale, setItemScale] = useState<string>("scale(1)");

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time:number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, []);

    const [containerRef, inViewContainer] = useInView({ threshold: 0.25 });
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const element = itemRef.current;
            if(inViewContainer && element){
                setItemScale(`scale(${(scrollTop * 0.0005) + 1})`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [itemRef, containerRef, inViewContainer]);

    return (
        <>
            <div ref={containerRef} className="h-[300vh] relative">
                <div className="top-0 h-screen grid place-items-center bg-white/25 sticky text-4xl overflow-hidden">
                    <Image
                        src={"https://americare.sirv.com/online-marketing-hIgeoQjS_iE-unsplash.jpg"}
                        alt="background"
                        height={1728}
                        width={3072}
                        ref={itemRef} 
                        style={{transform: itemScale}}
                        className="w-screen"
                    />
                </div>
            </div>
            <div className="h-screen"></div>
        </>
    )
}