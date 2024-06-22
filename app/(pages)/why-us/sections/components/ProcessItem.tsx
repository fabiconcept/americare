import InViewWrapper from "@/app/components/InViewWrapper";
import clsx from "clsx";
import { Variants } from "framer-motion";

export default function ProcessItem(prop: { title: string, content: string, isOdd?: boolean, count: number }) {
    const cardIn: Variants = {
        hidden: { opacity: 0, translateX: 100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    };
    const cardInAlt: Variants = {
        hidden: { opacity: 0, translateX: -100, },
        visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
    };
    return (
        <InViewWrapper animation={prop.isOdd ? cardIn : cardInAlt} className={clsx(
            "p-5 flex flex-col gap-3 border-2 border-dotted sm:hover:scale-105 hover:shadow-lg relative hover:z-30 border-transparent smooth hover:border-primary",
            prop.isOdd ? "dark:bg-[#CDE2BE]/25 hover:dark:bg-[#CDE2BE]/5 bg-[#CDE2BE] hover-bg-odd" : "dark:bg-[#F0F7EC]/10 hover:dark:bg-[#F0F7EC]/5 bg-[#F0F7EC] hover-bg"
        )}>
            <>
                <span className="text-lg font-semibold"><span className="text-xl">{prop.count}</span>. {prop.title}</span>
                <p>{prop.content}</p>
            </>
        </InViewWrapper>
    )
}