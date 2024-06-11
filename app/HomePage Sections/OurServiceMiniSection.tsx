"use client"
import React from 'react';
import { Playfair_Display } from "next/font/google";
import clsx from 'clsx';
import SwiperContainer from './components/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function OurServiceSection() {
    return (
        <div className="py-24 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 dark:bg-darkBg dark:text-white bg-white grid-bg">
            <div className="mb-12">
                <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>We offer</h1>
                <p className="opacity-60 text-[0.97rem] font-semibold">Compassionate Care, Right at Home.</p>
            </div>

            <SwiperContainer>
                <SwiperSlide>
                    <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-purple-600/5 hover:bg-purple-600/15 dark:bg-primary/5 dark:hover:bg-primary/15 active:scale-95 smooth cursor-pointer">
                        <div className='flex flex-col text-center pt-8'>
                            <span className='text-xl font-semibold'>Personal care</span>
                            <Link href={""} className='flex gap-2 items-center justify-center opacity-60'>Get started <FaArrowRight /></Link>
                        </div>

                        <div>
                            <Image
                                src={"https://americare.sirv.com/ascendmedicalcom_749290951.png"}
                                alt=""
                                height={400}
                                width={400}
                                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-blue-600/5 hover:bg-blue-600/15 dark:bg-primary/5 dark:hover:bg-primary/15 active:scale-95 smooth cursor-pointer">
                        <div className='flex flex-col text-center pt-8'>
                            <span className='text-xl font-semibold'>Mental Health</span>
                            <Link href={""} className='flex gap-2 items-center justify-center opacity-60'>Get started <FaArrowRight /></Link>
                        </div>

                        <div>
                            <Image
                                src={"https://americare.sirv.com/ascendmedicalcom_951359535.png"}
                                alt=""
                                height={500}
                                width={500}
                                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-orange-600/5 hover:bg-orange-600/15 dark:bg-primary/5 dark:hover:bg-primary/15 active:scale-95 smooth cursor-pointer">
                        <div className='flex flex-col text-center pt-8'>
                            <span className='text-xl font-semibold'>Mental Health</span>
                            <Link href={""} className='flex gap-2 items-center justify-center opacity-60'>Get started <FaArrowRight /></Link>
                        </div>

                        <div>
                            <Image
                                src={"https://americare.sirv.com/ascendmedicalcom_777071184.png"}
                                alt=""
                                height={500}
                                width={500}
                                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-red-600/5 hover:bg-red-600/15 dark:bg-primary/5 dark:hover:bg-primary/15 active:scale-95 smooth cursor-pointer">
                        <div className='flex flex-col text-center pt-8'>
                            <span className='text-xl font-semibold'>Mental Health</span>
                            <Link href={""} className='flex gap-2 items-center justify-center opacity-60'>Get started <FaArrowRight /></Link>
                        </div>

                        <div>
                            <Image
                                src={"https://americare.sirv.com/ascendmedicalcom_548717604.png"}
                                alt=""
                                height={500}
                                width={500}
                                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-pink-600/5 hover:bg-pink-600/15 dark:bg-primary/5 dark:hover:bg-primary/15 active:scale-95 smooth cursor-pointer">
                        <div className='flex flex-col text-center pt-8'>
                            <span className='text-xl font-semibold'>Mental Health</span>
                            <Link href={""} className='flex gap-2 items-center justify-center opacity-60'>Get started <FaArrowRight /></Link>
                        </div>

                        <div>
                            <Image
                                src={"https://americare.sirv.com/ascendmedicalcom_127873581.png"}
                                alt=""
                                height={500}
                                width={500}
                                className='absolute bottom-0 left-1/2 -translate-x-1/2'
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </SwiperContainer>
        </div>
    )
}