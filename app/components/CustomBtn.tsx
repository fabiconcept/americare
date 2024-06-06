import clsx from "clsx";
import Link from "next/link";

export default function CustomBtn(btnProps: { customClass?: string, text: string, linkHref: string, noBorder?: boolean, external?: boolean }) {
    return (
        <Link 
            href={btnProps.linkHref} 
            target={btnProps.external ? "_blank" : ""}
            className={clsx(
            btnProps.customClass ? btnProps.customClass : "",
            btnProps.noBorder? "border-transparent": "border-white dark:border-darkBg",
            "font-semibold smooth dark:bg-primary/25 dark:text-white bg-primary/5 sm:py-4 py-2 sm:px-12 whitespace-nowrap px-6 active:rotate-3 hover:text-white cursor-pointer active:scale-90 text-primary outline-primary w-fit select-none border-4 outline-2 outline-dashed relative overflow-hidden h-fit",
            "after:h-2 after:w-2 sm:rounded-xl rounded-lg hover:after:bg-primary hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
        )}>
            <span className="relative z-10">{btnProps.text}</span>
        </Link>
    )
}