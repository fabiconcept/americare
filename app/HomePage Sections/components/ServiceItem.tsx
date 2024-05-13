import clsx from "clsx";

export default function ServiceItem(prop:{ title: string, content: string, isOdd?: boolean }) {
    return (
        <div className={clsx(
            "p-5 flex flex-col gap-3 border-2 border-dotted sm:hover:scale-105 hover:shadow-lg relative hover:z-30 border-transparent smooth hover:border-primary",
            prop.isOdd ? "bg-[#CDE2BE] hover-bg-odd": "bg-[#F0F7EC] hover-bg"
        )}>
            <span className="text-lg font-semibold">{prop.title}</span>
            <p>{prop.content}</p>
        </div>
    )
}