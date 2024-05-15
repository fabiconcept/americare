import { OurProcessList } from "@/lib/OurProcess";
import ProcessItem from "./components/ProcessItem";
import { Macondo } from "next/font/google";
import clsx from "clsx";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function OurProcessSection() {
    return (
        <section className={clsx("bg-white py-12")}>
            <h1 className={clsx(FontFamily.className, "sm:px-[12.5vw] sm:font-normal font-semibold mb-3 px-6 text-left text-primary sm:text-[4vw] text-5xl")}>
                Our Process
            </h1>
            <p className="opacity-50 mb-5 sm:text-base text-sm mx-auto sm:px-[12.5vw] px-6">
                AmeriCare&apos;s commitment to excellence is reflected in our structured and comprehensive four-step process, tailored to meet the unique needs of each client in the home healthcare industry:
            </p>
            <div className="grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] sm:px-[3vw] px-3">
                {OurProcessList.map((processItem, index)=>(
                    <ProcessItem 
                        key={index}
                        count={index+1}
                        title={processItem.title}
                        content={processItem.content}
                        isOdd={index % 2 === 0}
                    />
                ))}
            </div>
        </section>
    )
}