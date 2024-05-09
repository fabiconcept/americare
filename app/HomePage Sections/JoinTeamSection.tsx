import clsx from "clsx";
import CustomBtn from "../components/CustomBtn";
import Image from "next/image";

export default function JoinTeamSection() {
    return (
        <section className="sm:pt-32 pt-24 sm:px-[12.5vw] px-3 bg-white/80 min-h-screen">
            <div>
                <h1 className={clsx("sm:text-[5vw] font-black text-[#6fad45] text-5xl text-center mx-auto md:max-w-[60vw] text-balance")}>
                    <span className="bg-[#6fad45]/80 text-white">Join Our Team</span> and Be Part of Something Special!
                </h1>

                <p className="text-center p-5 text-lg md:max-w-[60vw] mx-auto">
                    At AmeriCare, we don&apos;t just offer jobs; we provide opportunities to make a real difference in people’s lives. If you’re seeking a fulfilling career in a dynamic, diverse, and people-first home care company, you’ve come to the right place. Our commitment to compassionate care, ongoing training, and career advancement creates an exceptional work environment where you can thrive both personally and professionally.
                </p>
            </div>
            <div className="w-fit mx-auto pt-5">
                <CustomBtn
                    customClass="text-base"
                    linkHref={""}
                    text={"Join us"}
                />
            </div>

            <div className="mt-12">
                <Image
                    src={"https://americare.sirv.com/doctors.png"}
                    alt="Doctors"
                    height={483}
                    width={938}
                    priority
                    className={clsx(
                        "h-[30rem] w-auto smooth mx-auto"
                    )}
                />
            </div>
        </section>
    )
}