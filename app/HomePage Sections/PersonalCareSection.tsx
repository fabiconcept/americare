import Image from "next/image";
import clsx from "clsx";

export default function PersonalCareSection() {
    return (
        <div className="py-12 sm:min-h-[fit-content] md:max-h-[65rem] sm:px-[12.5vw] px-6 grid place-items-center bg-white relative">
            <Image
                src={"https://americare.sirv.com/icons/bbblurry.svg"}
                alt={"blur shape"}
                height={800}
                width={800}
                className="w-[70rem] absolute -top-[20rem] -left-[20rem]"
            />
            <div className="flex gap-12 flex-wrap p-6 relative z-10 mix-blend-multiply">
                <div className="min-w-[20rem] flex-[2] flex flex-col gap-8 2xl:text-7xl sm:text-6xl text-5xl relative z-10">
                    <span className="text-[#6fad45] font-semibold">Personal Care Services</span>
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
                                Our Personal Care services help you stay safe at home with daily activity assistance.
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
                    </div>
                </div>
                <div className="min-w-[20rem] flex-1 flex flex-col gap-12">
                <span className="opacity-70 flex flex-col gap-4">
                        <span>
                            At AmeriCare, we understand the importance of maintaining independence while staying safe and comfortable at home. Our Personal Care services offer assistance with daily activities such as bathing, dressing, grooming, meal preparation, and mobility support
                        </span>
                        <span>
                            Our compassionate caregivers are dedicated to preserving your dignity and quality of life while providing the essential support you need to thrive in your own environment.
                        </span>
                        <span>
                            We tailor our care to your unique requirements, promoting independence and enhancing your overall well-being.
                        </span>
                    </span>
                    <Image
                        src={"https://americare.sirv.com/cdc-GnLuuG9crEY-unsplash.jpg"}
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