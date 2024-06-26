import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import TeamMember from "./components/TeamMember";
import { MeetTeamList } from "@/lib/MeetTeamList";
import Image from "next/image";
import arrImg from "@/lib/arrow.svg";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn } from "@/lib/AnimationVariants";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function MeetTeamSection() {
    
    return (
        <div className="dark:bg-darkBg bg-white grid-bg dark:text-white text-black sm:py-24 py-12 2xl:px-[10vw] sm:px-[8vw] px-6 overflow-x-hidden">
            <div>
                <InViewWrapper animation={cardIn} className="mb-12">
                    <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold relative w-fit")}>
                        Meet our team
                        <Image
                            src={arrImg}
                            alt={"Scribble arrow"}
                            height={80}
                            width={80}
                            className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth absolute -top-2 sm:block hidden -right-[25%]"
                        />
                    </h1>
                </InViewWrapper>


                <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
                    {MeetTeamList.map(({ id, name, photo, role }, index) => (
                        <TeamMember
                            name={name}
                            key={id}
                            photo={photo}
                            role={role}
                            isOdd={(index + 1) % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}