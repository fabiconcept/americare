"use client"
import { Parallax } from "react-parallax";
import { useState } from "react";

export default function ServiceItem() {
    const [parallaxValue, setParallaxValue] = useState<number>(0);
    return (
        <Parallax 
            strength={500}
            renderLayer={(percentage) => setParallaxValue(percentage)}
            className="flex flex-wrap gap-8 py-32 px-[12.5vw]"
        >
            ServiceItem
        </Parallax>
    )
}