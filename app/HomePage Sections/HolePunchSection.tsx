"use client"
import Image from "next/image";
import { useState } from "react";
import { Parallax } from "react-parallax";

export default function HolePunchSection() {
    const [parallaxValue, setParallaxValue] = useState<number>(0);
    return (
        <Parallax
            strength={500}
            renderLayer={(percentage) => setParallaxValue(percentage)}
            >

            <div
            >
                <Image
                    src={"https://americare.sirv.com/icons/hole-full.png"}
                    alt={"Hole Punch"}
                    height={1920}
                    width={1200}
                    style={{
                        transform: `scale(${parallaxValue > 0.9 ? `${(parallaxValue * 3.5)}` : 1})`,
                        opacity: `${parallaxValue > 1 ? (1.8 - (parallaxValue * 1.1)) : 1}`,
                    }}
                    className="w-full h-full sticky top-0 duration-[0.05s] delay-[0.005s] origin-top"
                />

            </div>
        </Parallax>
    );
}