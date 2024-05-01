"use client"
import Image from "next/image";

export default function HolePunchSection() {
    return (
        <div className="w-full relative z-10">
            <Image
                src={"https://americare.sirv.com/icons/hole-full.png"}
                alt={"Hole Punch"}
                height={1920}
                width={1200}
                className="w-full"
            />
        </div>
    );
}