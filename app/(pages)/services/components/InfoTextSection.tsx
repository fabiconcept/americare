import InViewWrapper from "@/app/components/InViewWrapper";
import { Variants } from "framer-motion";

export default function InfoTextSection() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, translateY: 50 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    };
    return (
        <div className="dark:bg-darkBg grid-bg dark:text-white pb-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-10 bg-white">
            <div className="flex gap-12 flex-wrap">
                <InViewWrapper className="min-w-[20rem] flex-1 opacity-70" animation={fadeIn}>
                    <p className="">
                        We aim to provide the ideal solution with an informed process. We equip clients and their support systems with information and answers. We assess each situation to provide personal recommendations. We consider the recipient&apos;s unique needs and how to achieve happiness.
                    </p>
                </InViewWrapper>
                <InViewWrapper className="min-w-[20rem] flex-1 opacity-70" animation={fadeIn}>
                    <p className="">
                        Home care helps people remain safely at home and live as independently as possible. We work with you to develop a plan for you, in order to provide the best quality of care for you or your family member
                    </p>
                </InViewWrapper>
            </div>
        </div>
    )
}