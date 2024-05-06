import Image from "next/image";
import clsx from "clsx"

export default function CompanionshipSection() {
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
                    <span className="text-[#6fad45] font-semibold">Companionship Services</span>
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
                                We offer companionship services for emotional support, social interaction, and meaningful human connection.
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
                            Companionship is a fundamental aspect of emotional well-being. Our Companionship services are designed to provide not only practical assistance but also meaningful human connection.
                        </span>
                        <span>
                            Our caregivers are more than just helpers; they are friendly faces, listeners, and companions who provide the warmth of social interaction. Whether it’s engaging in conversation, playing games, or simply sharing a meal, we believe that companionship is vital to enhancing the overall quality of life for our clients.
                        </span>
                        <span>
                            Loneliness should never be a concern when you choose AmeriCare for your home healthcare needs.
                        </span>
                    </span>
                    <Image
                        src={"https://americare.sirv.com/vlad-sargu-ItphH2lGzuI-unsplash.jpg"}
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