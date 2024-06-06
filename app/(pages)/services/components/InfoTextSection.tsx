import clsx from "clsx";
import Image from "next/image";

export default function InfoTextSection() {
    return (
        <div className="dark:bg-darkBg grid-bg dark:text-white pb-12 sm:px-[12.5vw] px-6 relative z-10 bg-white">
            <div className="flex gap-12 flex-wrap">
                <p className="min-w-[20rem] flex-1 opacity-70">
                    We aim to provide the ideal solution with an informed process. We equip clients and their support systems with information and answers. We assess each situation to provide personal recommendations. We consider the recipient&apos;s unique needs and how to achieve happiness.
                </p>
                <p className="min-w-[20rem] flex-1 opacity-70">
                    Home care helps people remain safely at home and live as independently as possible. We work with you to develop a plan for you, in order to provide the best quality of care for you or your family member
                </p>
            </div>
        </div>
    )
}