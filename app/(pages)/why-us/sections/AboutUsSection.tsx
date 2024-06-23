import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function AboutUsSection() {
    
    return (
        <InViewWrapper animation={fadeIn}>
            <div className="dark:bg-darkBg dark:text-white py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 bg-white">
                <Image
                    src={"https://americare.sirv.com/icons/bbblurry.svg"}
                    alt={"blur shape"}
                    height={800}
                    width={800}
                    className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                />
                <div className="sm:mb-12 mb-8">
                    <h1 className={clsx(FontFamily.className, "sm:text-[4vw] sm:text-5xl text-4xl text-primary font-semibold")}>
                        About Us - AmeriCare
                    </h1>
                    <p className="opacity-50 text-[0.97rem] font-semibold">
                        Where Care Begins with Compassion
                    </p>
                </div>

                <div className="flex gap-12 flex-wrap">
                    <p className="flex flex-col sm:gap-8 gap-4 relative sm:text-lg">
                        <span className="sm:text-2xl md:text-xl text-base">
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
                    </p>
                </div>
            </div>
        </InViewWrapper>
    );
}