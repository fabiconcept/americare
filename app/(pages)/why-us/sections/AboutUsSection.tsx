import clsx from "clsx";
import { Macondo } from "next/font/google";
import Image from "next/image";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function AboutUsSection() {
    return (
        <>
            <div className="py-12 sm:px-[12.5vw] px-6 relative z-10 bg-white">
                <div className="sm:mb-12 mb-8">
                    <h1 className={clsx(FontFamily.className, "sm:text-[4vw] sm:text-5xl text-4xl text-primary font-semibold")}>
                        About Us - AmeriCare
                    </h1>
                    <p className="opacity-50 text-[0.97rem] font-semibold">
                        Where Care Begins with Compassion
                    </p>
                </div>

                <div className="flex gap-12 flex-wrap">
                    <p className="flex flex-col sm:gap-4 gap-2 relative text-lg">
                        <span className="sm:text-2xl text-xl">
                            At AmeriCare, we believe that care is more than a service; it&apos;s a heartfelt commitment to improving the lives of the elderly and medically fragile children. 
                            <span className="opacity-70"> Founded in 2021, our journey began with a simple yet profound mission—to bring comfort, healing, and compassion to those who need it most.</span>
                        </span>
                        <span className="opacity-70">
                            Our founder, Calvin Wilkinson&apos;s, story is rooted in Atlanta, a city known for its vibrant communities and warm embrace. Raised in this nurturing environment, he learned early the power of healing and the significance of community.
                        </span>
                        <span className="opacity-70">
                            Mr. Wilkinson&apos;s educational pursuits led him to the College of William and Mary, where he earned a degree in Biology. It was during this time that he recognized the transformative impact healthcare could have on individuals and families.
                            His journey continued at Mercer University, where he earned a Master&apos;s in Public Health. Along this path, Mr.Wilkinson encountered stories that would shape the very essence of AmeriCare.
                        </span>
                        <span className="opacity-70">
                            One such story was that of Ms. Davis, an elderly woman yearning for companionship and support. He witnessed firsthand the isolation that can accompany aging and realized that true care extended beyond medical attention—it meant providing genuine companionship, understanding, and a listening ear.
                        </span>
                        <span className="opacity-70">
                            Mr.Wilkinson also crossed paths with the Johnson family, who tirelessly cared for their daughter, Sarah, a medically fragile child. Sarah&apos;s resilience and her family&apos;s unwavering love were inspiring. Calvin recognized the incredible strength and dedication that these families exhibited daily.  These stories became the foundation of AmeriCare—a company that strives to redefine healthcare by focusing not just on physical needs but also on emotional well-being.  AmeriCare is more than a healthcare provider; it is a promise to deliver compassionate,
                            honest, and dependable home healthcare services.
                        </span>
                        <span className="opacity-70">
                            Our story is a testament to the power of empathy, integrity, and unwavering commitment to making a difference in the lives of those who need it most. AmeriCare is an invitation to be part of a community where care begins with compassion.
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src={"https://americare.sirv.com/icons/hole-punch.png"}
                    alt={"Hole Punch"}
                    height={1920}
                    width={1200}
                    className="w-full -mt-1 brightness-105"
                />
            </div>
        </>
    );
}