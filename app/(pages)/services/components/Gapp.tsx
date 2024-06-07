import CustomBtn from "@/app/components/CustomBtn";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function Gapp() {
    return (
        <>
            <div className="grid place-items-center sm:py-6 py-4 relative z-10">
                <div>
                    <div className="mb-4 mt-10">
                        <h1 className={clsx(FontFamily.className, "sm:text-[3vw] text-4xl text-primary font-semibold")}>What is GAPP?</h1>
                    </div>

                    <div className="flex gap-8 flex-wrap dark:mix-blend-screen mix-blend-multiply">
                        <div className="min-w-[20rem] rounded-lg flex-[2] overflow-hidden">
                            <Image
                                src={"https://americare.sirv.com/pexels-mart-production-7162989.jpg"}
                                alt={"Happy teens"}
                                height={3735}
                                width={5602}
                                priority
                                className={clsx(
                                    "w-full object-cover smooth",
                                )}
                            />
                        </div>

                        <p className="sm:min-w-[25rem] min-w-[20rem] flex-1 flex flex-col gap-4">
                            <span className=" h-fit 2xl:text-3xl sm:text-2xl text-xl sm:font-normal font-semibold opacity-80 relative">
                                <span className="sm:text-left text-center">
                                    &quot;The Georgia Pediatric Program (GAPP) offers in-home nursing services for medically fragile children under 21, ensuring continuous, high-quality care.&quot;
                                </span>
                            </span>
                            <span className="opacity-70">
                                The Georgia Pediatric Program (GAPP) provides in-home nursing services for medically fragile
                                children under 21. This program ensures that children with complex medical needs receive
                                continuous, high-quality care in their homes.
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