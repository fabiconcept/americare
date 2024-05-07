import clsx from "clsx";

export default function ServiceItem(prop:{ title: string, content: string, isOdd?: boolean }) {
    return (
        <div className={clsx(
            "p-5 flex flex-col gap-3",
            prop.isOdd ? "bg-[#6fad45]/35": "bg-[#6fad45]/10"
        )}>
            <span className="text-lg font-semibold">{prop.title}</span>
            <p>{prop.content}</p>
        </div>
    )
}