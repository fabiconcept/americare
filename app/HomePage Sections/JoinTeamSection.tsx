import clsx from "clsx";
import CustomBtn from "../components/CustomBtn";
import Image from "next/image";

export default function JoinTeamSection() {
    return (
        <section className="sm:pt-32 pt-24 sm:px-[12.5vw] px-3 bg-white/80 min-h-screen flex flex-col">
            <div className="flex-1">
                <h1 className={clsx("sm:text-[5vw] sm:leading-[5.25vw] font-black text-[#6fad45] text-4xl text-center mx-auto sm:max-w-[70vw] max-w-[85vw] text-balance")}>
                    <span className="bg-[#6fad45]/80 text-white">Join Our Team</span> and Be Part of Something Special!
                </h1>

                <p className="text-center p-5 sm:text-lg opacity-70 md:max-w-[60vw] mt-3 mx-auto flex flex-col gap-3">
                    <span>At <span className="bg-[#6fad45]/80 text-white">AmeriCare</span>, we don&apos;t just offer jobs; we provide opportunities to make a real difference in people&apos;s lives. If you&apos;re seeking a fulfilling career in a dynamic, diverse, and people-first home care company, you&apos;ve come to the right place. </span>
                    <span>Our commitment to compassionate care, ongoing training, and career advancement creates an exceptional work environment where you can thrive both personally and professionally.</span>
                </p>
                <div className="w-fit mt-3 mx-auto pt-5">
                    <CustomBtn
                        customClass="text-base"
                        linkHref={""}
                        text={"Join us"}
                    />
                </div>
            </div>

            <div className="mt-12">
                <Image
                    src={"https://americare.sirv.com/doctors.png"}
                    alt="Doctors"
                    height={483}
                    width={938}
                    priority
                    className={clsx(
                        "w-[clamp(40rem,50vw,60rem)] object-contain smooth mx-auto"
                    )}
                />
            </div>
        </section>
    )
}