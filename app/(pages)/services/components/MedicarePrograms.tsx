import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import CcspSource from "./CcspSource";
import Gapp from "./Gapp";
import CcspKeyBenefits from "./CcspKeyBenefits";
import GappKeyBenefits from "./GappKeyBenefits";
import Link from "next/link";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function MedicarePrograms() {
    return (
        <>
            <div className="dark:bg-darkBg dark:text-white grid place-items-center sm:py-24 py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 bg-white">
                <Image
                    src={"https://americare.sirv.com/icons/bbblurry.svg"}
                    alt={"blur shape"}
                    height={800}
                    width={800}
                    className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                />
                <div>
                    <div className="mb-12">
                        <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>Medicare Programs</h1>
                        <p className="opacity-60 text-[0.97rem] font-semibold">CCSP/SOURCE and GAPP | <Link href={"/"} className="text-primary active:rotate-6 origin-left">AmeriCare</Link> Home Health</p>
                    </div>

                    <div className="">
                        <div className="flex gap-12 flex-wrap">
                            <p className="flex-1 opacity-70">
                                At AmeriCare Home Health, we specialize in providing high-quality home health care services
                                through Medicaid programs like CCSP, SOURCE, and GAPP.
                                Our goal is to help you or your
                                loved ones remain at home while receiving the care and support needed.
                            </p>
                        </div>
                    </div>
                </div>

                <CcspSource />
                <CcspKeyBenefits />
                <Gapp />
                <GappKeyBenefits />
            </div>
        </>
    );
}