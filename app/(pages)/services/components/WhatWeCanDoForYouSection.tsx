import clsx from "clsx";
import WeOffer from "./components/WeOffer";
import { WhatWeOffer } from "@/lib/WhatWeOffer";


export default function WhatWeCanDoForYouSection() {
    return (
        <section className={clsx("dark:bg-darkBg dark:text-white bg-white sm:py-24 py-12")}>
            <h1 className={clsx("sm:px-[12.5vw] sm:font-normal font-semibold mb-3 px-6 text-center text-primary 2xl:text-7xl sm:text-6 text-4xl")}>
                What We Can Do for You
            </h1>
            <div className="grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] sm:px-[3vw] px-2">
                {WhatWeOffer.map((serviceItem, index) => {
                    if ((WhatWeOffer.length - 1) === index) {
                        return (<>
                            <div className="sm:block hidden"></div>
                            <WeOffer
                                key={index}
                                count={index + 1}
                                title={serviceItem.title}
                                content={serviceItem.content}
                                isOdd={true}
                            />
                            <div className="sm:block hidden"></div>
                        </>)
                    }
                    return (<WeOffer
                        key={index}
                        title={serviceItem.title}
                        count={index + 1}
                        content={serviceItem.content}
                        isOdd={index % 2 === 0}
                    />)
                })}
            </div>
        </section >
    )
}