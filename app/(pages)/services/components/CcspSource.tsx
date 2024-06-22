import CustomBtn from "@/app/components/CustomBtn";
import InViewWrapper from "@/app/components/InViewWrapper";
import clsx from "clsx";
import { Variants } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function CcspSource() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    };

        
    const cardIn: Variants = {
        hidden: { opacity: 0, translateX: 100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 }},
    };
    const cardInAlt: Variants = {
        hidden: { opacity: 0, translateX: 100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 }},
    };

    return (
        <>
            <InViewWrapper animation={fadeIn} className="grid place-items-center sm:py-6 py-4 px-1 relative z-10 overflow-x-hidden">
                <div>
                    <div className="mb-4 mt-5">
                        <h1 className={clsx(FontFamily.className, "sm:text-[3vw] text-4xl text-primary font-semibold")}>What is CCSP/SOURCE?</h1>
                    </div>

                    <div className="flex items-stretch gap-8 flex-wrap dark:mix-blend-screen mix-blend-multiply mt-12">
                        <InViewWrapper animation={cardIn} className="flex-1 sm:min-w-[30rem] min-w-[20rem]">
                            <>
                                <p className="flex flex-col gap-6">
                                    <span className=" h-fit 2xl:text-5xl sm:text-3xl text-xl sm:font-normal font-semibold opacity-80 relative">
                                        <span className="sm:text-left text-center">
                                            &quot;CCSP and SOURCE are Georgia Medicaid programs offering in-home support to help elderly and disabled individuals avoid long-term care facilities.&quot;
                                        </span>
                                    </span>
                                    <span className="opacity-70">
                                        The Community Care Services Program (CCSP) and Service Options Using Resources in a
                                        Community Environment (SOURCE) are Medicaid waiver programs designed to assist elderly
                                        and disabled individuals in Georgia. These programs offer in-home support services to help
                                        avoid long-term care facilities.
                                    </span>
                                    <CustomBtn
                                        linkHref="#check_eligibility"
                                        text="Check Eligibility"

                                    />
                                </p>
                            </>
                        </InViewWrapper>
                        <InViewWrapper animation={cardInAlt} className="flex-1 min-w-[20rem]">
                            <>
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={"https://americare.sirv.com/pexels-rollz-19971193.jpg"}
                                        alt={"Couple in a park"}
                                        height={3735}
                                        width={5602}
                                        priority
                                        className={clsx(
                                            "min-w-full h-full object-cover smooth",
                                        )}
                                    />
                                </div>
                            </>
                        </InViewWrapper>
                    </div>
                </div>
            </InViewWrapper>
        </>
    );
}