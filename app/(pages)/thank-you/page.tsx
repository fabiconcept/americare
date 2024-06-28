import InViewWrapper from '@/app/components/InViewWrapper';
import NavigationComponent from '@/app/components/NavSection';
import { fadeIn } from '@/lib/AnimationVariants';
import { generalMetadata } from '@/lib/MetaData';
import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = { ...generalMetadata, title: "Thank you | AmeriCare Atlanta" };


export default function ThankYouPage() {
    return (
        <div className='max-2xl:pt-32'>
            <NavigationComponent />
            <InViewWrapper animation={fadeIn} className="min-h-screen grid place-items-center">
                <div className="relative flex flex-col dark:bg-darkBg sm:max-w-[40rem] max-w-[calc(100vw-4rem)] bg-white overflow-hidden rounded-xl border dark:border-white/25 border-primary/5 shadow-2xl shadow-black/10 py-8">
                    <div className="grid place-items-center relative">
                        <Image
                            src="https://americare.sirv.com/icons/Team%20spirit.png"
                            alt="Team spirit"
                            height={2000}
                            width={2000}
                            priority
                            className="w-[20rem] translate-y-2"
                        />
                    </div>
                    <div className="sm:p-8 p-6 text-center mt-3 max-xl:text-sm">
                        <h2 className="sm:text-4xl text-3xl font-bold p-2 text-primary">Thank You for Booking an Appointment</h2>
                        <p className="dark:text-white text-black">
                            We will get back to you shortly. You will receive a confirmation email soon. For any questions, please contact us. Thank you for choosing our services!
                        </p>
                        <br />
                        <Link href={"/"} className={clsx(
                            "mx-auto mt-5 font-semibold smooth text-primary dark:bg-primary/25 dark:text-white bg-primary/5 sm:py-3 py-2 sm:px-10 whitespace-nowrap px-6 active:rotate-3 hover:text-white cursor-pointer active:scale-90 outline-primary w-fit select-none border-4 dark:border-darkBg border-white outline-2 outline-dashed relative overflow-hidden h-fit",
                            "after:h-2 after:w-2 sm:rounded-xl rounded-lg hover:after:bg-primary hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
                        )}>
                            <span className="relative z-50">Return home</span>

                        </Link>
                    </div>
                </div>
            </InViewWrapper>
        </div>
    )
}
