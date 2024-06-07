import CustomBtn from "@/app/components/CustomBtn";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function CcspSource() {
    return (
        <>
            <div className="grid place-items-center sm:py-6 py-4 relative z-10">
                <div>
                    <div className="mb-4 mt-5">
                        <h1 className={clsx(FontFamily.className, "sm:text-[3vw] text-4xl text-primary font-semibold")}>What is CCSP/SOURCE?</h1>
                    </div>

                    <div className="flex items-stretch gap-8 flex-wrap dark:mix-blend-screen mix-blend-multiply">
                        <div className="min-w-[20rem] rounded-lg flex-[2] overflow-hidden">
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

                        <p className="sm:min-w-[25rem] min-w-[20rem] flex-1 flex flex-col gap-4">
                            <span className=" h-fit 2xl:text-3xl sm:text-2xl text-xl sm:font-normal font-semibold opacity-80 relative">
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
                                linkHref="#"
                                text="Check Eligibility"

                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}