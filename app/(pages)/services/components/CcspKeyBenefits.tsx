import clsx from "clsx";
import Image from "next/image";
import personalSvg from "./components/health-svgrepo-com.svg";
import supportSvg from "./components/health-care-love-svgrepo-com.svg";
import dayHealthSvg from "./components/health-insurance-premium-svgrepo-com.svg";
import { Variants } from "framer-motion";
import InViewWrapper from "@/app/components/InViewWrapper";

const benefitsList: { title: string, content: string, count: number, svg: any }[] = [
    { title: "Personalized Care", content: "Personalized care tailored to individual needs", count: 1, svg: personalSvg },
    { title: "Comprehensive Support", content: "Enhanced quality of life through comprehensive support", count: 2, svg: supportSvg },
    { title: "Wide Range of Services", content: "Services include personal support, adult day health, and more", count: 3, svg: dayHealthSvg },
]

export default function CcspKeyBenefits() {
    const cardIn: Variants = {
        hidden: { opacity: 0, translateX: 100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    };
    const cardInAlt: Variants = {
        hidden: { opacity: 0, translateX: -100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    };
    return (
        <section className={clsx("sm:py-10 py-6 w-full mb-12")}>
            <div className="flex flex-wrap gap-4 justify-center w-full perspective overflow-x-hidden">
                {benefitsList.map(({ content, count, svg, title }) => (
                    <InViewWrapper animation={count % 2 === 0 ? cardIn : cardInAlt} key={count} className="md:min-w-[30%] min-w-[20rem] rounded-xl gap-3 flex-1 flex flex-col items-center p-6 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
                        <>
                            <Image
                                src={svg}
                                alt="Icon"
                                height={100}
                                width={100}
                                className="sm:w-24 w-20"
                            />

                            <span className="md:text-2xl sm:text-xl text-primary text-lg font-semibold">{title}</span>
                            <span>
                                {content}
                            </span>
                        </>
                    </InViewWrapper>
                ))}
            </div>
        </section>
    )
}
