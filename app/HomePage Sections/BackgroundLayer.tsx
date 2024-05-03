"use client"

import Image from "next/image"

export default function BackgroundLayer() {
    return (
        <div className="fixed overflow-hidden w-full h-screen left-0 top-0 -z-10">
            <Image
                src={"https://americare.sirv.com/sonny-mauricio-kIr8e-01eAw-unsplash.jpg"}
                alt={"bg01"}
                height={1920}
                width={1200}
                className="w-full h-full object-cover"
            />
        </div>
    )
}