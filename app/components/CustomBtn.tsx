import clsx from "clsx";
import Link from "next/link";

export default function CustomBtn(btnProps: { customClass?: string, text: string, linkHref: string }) {
    return (
        <Link href={btnProps.linkHref} className={clsx(
            "smooth py-4 px-12 active:rotate-3 hover:text-white cursor-pointer active:scale-90 bg-transparent text-[#6fad45] border-[#6fad45] w-fit select-none border-2 border-dashed hover:border-solid relative overflow-hidden h-fit",
            "after:h-2 after:w-2 hover:after:bg-[#6fad45] hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
            btnProps.customClass ? btnProps.customClass : ""
        )}>
            <span className="relative z-10">{btnProps.text}</span>
        </Link>
    )
}