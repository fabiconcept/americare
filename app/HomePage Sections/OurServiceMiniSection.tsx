"use client"
import React from 'react';
import { Playfair_Display } from "next/font/google";
import clsx from 'clsx';
import SwiperContainer from './components/SwiperContainer';
import { SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { fadeIn, cardIn, cardInAlt } from "@/lib/AnimationVariants";
import InViewWrapper from '../components/InViewWrapper';
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function OurServiceSection() {

    return (
        <div className="py-24 2xl:px-[10vw] sm:px-[8vw] overflow-x-hidden  px-6 relative z-10 dark:bg-darkBg dark:text-white bg-white grid-bg">
            <InViewWrapper animation={fadeIn}>
                <>
                    <div className="mb-12">
                        <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>We Provide</h1>
                    </div>

                    <div className="sm:block hidden">
                        <SwiperContainer>
                            <SwiperSlide>
                                <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-purple-600/10 hover:bg-purple-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                    <div className='flex flex-col text-center pt-8'>
                                        <span className='text-xl font-semibold'>Personal care</span>
                                        <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                    </div>

                                    <div>
                                        <Image
                                            src={"https://americare.sirv.com/ascendmedicalcom_749290951.png"}
                                            alt="Doctor and patient"
                                            height={400}
                                            width={400}
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-blue-600/10 hover:bg-blue-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                    <div className='flex flex-col text-center pt-8'>
                                        <span className='text-xl font-semibold'>Pediatrics</span>
                                        <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                    </div>

                                    <div>
                                        <Image
                                            src={"https://americare.sirv.com/pediatrics.png"}
                                            alt="pediatrics"
                                            height={500}
                                            width={500}
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-orange-600/10 hover:bg-orange-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                    <div className='flex flex-col text-center pt-8'>
                                        <span className='text-xl font-semibold'>Skilled Nursing</span>
                                        <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                    </div>

                                    <div>
                                        <Image
                                            src={"https://americare.sirv.com/nurse01.png"}
                                            alt="Skilled Nursing"
                                            height={600}
                                            width={600}
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-red-600/10 hover:bg-red-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                    <div className='flex flex-col text-center pt-8'>
                                        <span className='text-xl font-semibold'>Companionship</span>
                                        <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                    </div>

                                    <div>
                                        <Image
                                            src={"https://americare.sirv.com/pngegg.png"}
                                            alt="Companionship"
                                            height={500}
                                            width={500}
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-green-600/10 hover:bg-pink-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                    <div className='flex flex-col text-center pt-8'>
                                        <span className='text-xl font-semibold'>Specialty Care</span>
                                        <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                    </div>

                                    <div>
                                        <Image
                                            src={"https://americare.sirv.com/nurse03.png"}
                                            alt="Specialty Care"
                                            height={800}
                                            width={800}
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </SwiperContainer>
                    </div>

                    <div className='sm:hidden grid gap-3'>
                        <InViewWrapper animation={cardIn}>
                            <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-purple-600/10 hover:bg-purple-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                <div className='flex flex-col text-center pt-8'>
                                    <span className='text-xl font-semibold'>Personal care</span>
                                    <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                </div>

                                <div>
                                    <Image
                                        src={"https://americare.sirv.com/ascendmedicalcom_749290951.png"}
                                        alt="Personal care"
                                        height={400}
                                        width={400}
                                        className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                    />
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper animation={cardInAlt}>
                            <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-blue-600/10 hover:bg-blue-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                <div className='flex flex-col text-center pt-8'>
                                    <span className='text-xl font-semibold'>Pediatrics</span>
                                    <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                </div>

                                <div>
                                    <Image
                                        src={"https://americare.sirv.com/pediatrics.png"}
                                        alt="Pediatrics"
                                        height={500}
                                        width={500}
                                        className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                    />
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper animation={cardIn}>
                            <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-orange-600/10 hover:bg-orange-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                <div className='flex flex-col text-center pt-8'>
                                    <span className='text-xl font-semibold'>Skilled Nursing</span>
                                    <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                </div>

                                <div>
                                    <Image
                                        src={"https://americare.sirv.com/nurse01.png"}
                                        alt="Skilled Nursing"
                                        height={600}
                                        width={600}
                                        className='absolute bottom-0 object-contain left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                    />
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper animation={cardInAlt}>
                            <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-red-600/10 hover:bg-red-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                <div className='flex flex-col text-center pt-8'>
                                    <span className='text-xl font-semibold'>Companionship</span>
                                    <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                </div>

                                <div>
                                    <Image
                                        src={"https://americare.sirv.com/pngegg.png"}
                                        alt="Companionship"
                                        height={500}
                                        width={500}
                                        className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                    />
                                </div>
                            </div>
                        </InViewWrapper>
                        <InViewWrapper animation={cardIn}>
                            <div className="rounded-xl px-7 flex-1 relative min-h-[25rem] bg-pink-600/10 hover:bg-pink-600/15 dark:bg-primary/10 dark:hover:bg-primary/20 active:scale-95 smooth cursor-pointer group overflow-hidden border border-transparent hover:border-primary/50">
                                <div className='flex flex-col text-center pt-8'>
                                    <span className='text-xl font-semibold'>Specialty Care</span>
                                    <Link href={""} className='flex gap-2 items-center justify-center opacity-60 group-hover:text-primary smooth'>Get started <FaArrowRight /></Link>
                                </div>

                                <div>
                                    <Image
                                        src={"https://americare.sirv.com/nurse03.png"}
                                        alt="Specialty Care"
                                        height={800}
                                        width={800}
                                        className='absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:scale-110 smooth'
                                    />
                                </div>
                            </div>
                        </InViewWrapper>
                    </div>
                </>
            </InViewWrapper>
        </div>
    )
}