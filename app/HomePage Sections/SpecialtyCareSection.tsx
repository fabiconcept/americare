import Image from "next/image";
import clsx from "clsx"
import CustomBtn from "../components/CustomBtn";

export default function SpecialtyCareSection() {
    return (
        <div className="py-12 sm:px-[12.5vw] px-6 grid place-items-center bg-white relative sm:min-h-[fit-content] md:max-h-[65rem]">
            <Image
                src={"https://americare.sirv.com/icons/bbblurry.svg"}
                alt={"blur shape"}
                height={800}
                width={800}
                className="w-[70rem] absolute -top-[20rem] -left-[20rem]"
            />
            <div className="flex gap-12 flex-wrap p-6 relative z-10 mix-blend-multiply">
            <div className="min-w-[20rem] flex-[2] flex flex-col gap-8 2xl:text-7xl sm:text-6xl text-5xl relative z-10">
                    <span className="text-[#6fad45] font-semibold">Specialty Care Services</span>
                    <div>
                        <div className="relative 2xl:text-5xl sm:text-4xl text-3xl">
                            <Image
                                src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                alt="Quote icon"
                                height={300}
                                width={300}
                                priority
                                className={clsx(
                                    "w-[8vw] smooth absolute -top-[2.5vw] -left-[4.2vw] -rotate-3 -z-[1]"
                                )}
                            />
                            <span>
                            Our Specialty Care offers expert support for Alzheimer&apos;s, dementia, Parkinson&apos;s, ALS, and similar conditions.
                            </span>
                            <Image
                                src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                alt="Quote icon"
                                height={300}
                                width={300}
                                priority
                                className={clsx(
                                    "w-[8vw] smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1]"
                                )}
                            />
                        </div>
                        <Image
                            src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                            alt={"Nurse photo 002"}
                            height={480}
                            width={1920}
                            priority
                            className="md:w-[90%] sm:px-6 pt-7  opacity-50"
                        />
                        <CustomBtn
                            customClass="text-base"
                            linkHref="#"
                            text="Learn more"
                        />
                    </div>
                </div>
                <div className="min-w-[20rem] flex-1 flex flex-col gap-12">
                    <span className="opacity-70 flex flex-col gap-4">
                        <span>
                            For clients with unique healthcare requirements, AmeriCare offers Specialty Care services that are tailored to address specific conditions and challenges. Whether you or your loved one is dealing with Alzheimer&apos;s, dementia, Parkinson&apos;s disease, ALS, or any other specialized medical condition, our expert caregivers are trained to provide the specialized care and support you need.
                        </span>
                        <span>
                            We understand the nuances of each condition and work closely with you and your healthcare team to develop a care plan that ensures
                            the highest level of comfort, safety, and quality of life
                        </span>
                        <span>
                            Our goal is to make living with these conditions as manageable and comfortable as possible, all within the familiar surroundings of home.
                        </span>
                    </span>
                    <Image
                        src={"https://americare.sirv.com/icons/cdc-T9SwaYf6g40-unsplash.jpg"}
                        alt={"Nurse photo 001"}
                        height={8008}
                        width={12112}
                        priority
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}