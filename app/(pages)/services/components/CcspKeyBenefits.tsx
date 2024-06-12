import clsx from "clsx";
import Image from "next/image";
import personalSvg from "./components/health-svgrepo-com.svg";
import supportSvg from "./components/health-care-love-svgrepo-com.svg";
import dayHealthSvg from "./components/health-insurance-premium-svgrepo-com.svg";

const benefitsList: { title: string, content: string, count: number, svg: any }[] = [
    { title: "Personalized Care", content: "Personalized care tailored to individual needs", count: 1, svg: personalSvg },
    { title: "Comprehensive Support", content: "Enhanced quality of life through comprehensive support", count: 2, svg: supportSvg },
    { title: "Wide Range of Services", content: "Services include personal support, adult day health, and more", count: 3, svg: dayHealthSvg },
]

export default function CcspKeyBenefits() {
    return (
        <section className={clsx("sm:py-10 py-6 w-full mb-12")}>
            <div className="flex flex-wrap gap-4 justify-center w-full perspective">
                {benefitsList.map(({ content, count, svg, title }) => (
                    <div key={count} className="md:min-w-[30%] min-w-[20rem] rounded-xl gap-3 flex-1 flex flex-col items-center p-6 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
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
                    </div>
                ))}
            </div>
        </section>
    )
}
