import clsx from "clsx";

const benfitsList: { content: string, count: number }[] = [
    {content: "In-home skilled nursing care", count: 1},
    {content: "Care coordination and support services", count: 2},
    {content: "Allows children to stay with their families", count: 3},
]

export default function GappKeyBenefits() {
    return (
        <section className={clsx("sm:pt-10 pt-6 w-full")}>
            <h1 className={clsx("sm:px-[10vw] sm:font-normal font-semibold mb-3 px-6 text-center text-primary 2xl:text-7xl sm:text-6 text-4xl")}>
                Key Benefits
            </h1>
            <div className="grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
                {benfitsList.map((benefitItem, index) => (<Benefits
                        key={index}
                        count={index + 1}
                        content={benefitItem.content}
                        isOdd={index % 2 === 0}
                    />)
                )}
            </div>
        </section>
    )
}


function Benefits(prop:{content: string, isOdd?: boolean, count: number }) {
    return (
        <div className={clsx(
            "p-5 flex flex-col gap-3 border-2 border-dotted sm:hover:scale-105 hover:shadow-lg relative hover:z-30 smooth border-primary",
            prop.isOdd ? "dark:bg-[#CDE2BE]/25 hover:dark:bg-[#CDE2BE]/5 bg-[#CDE2BE]": "dark:bg-[#F0F7EC]/10 hover:dark:bg-[#F0F7EC]/5 bg-[#F0F7EC]"
        )}>
            <p className="text-center">{prop.content}</p>
        </div>
    )
}