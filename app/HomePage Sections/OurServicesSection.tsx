import { OurServicesList } from "@/lib/OurServicesList";
import ServiceItem from "./components/ServiceItem";

export default function OurServicesSection() {
    return (
        <section className="bg-white py-12">
            <h1 className="sm:px-[12.5vw] mb-3 px-3 text-center text-[#6fad45] sm:text-[4vw] text-5xl">
                Our services
            </h1>
            <p className="text-center opacity-60 mb-5 max-w-[15rem] text-lg mx-auto">Services we can offer you</p>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] sm:px-[3vw] px-3">
                {OurServicesList.map((serviceItem, index)=>(
                    <ServiceItem 
                        key={index}
                        title={serviceItem.title}
                        content={serviceItem.content}
                        isOdd={index % 2 === 0}
                    />
                ))}
                <div className="grid place-items-center">
                    <div className="smooth py-4 px-12 hover:text-white cursor-pointer active:scale-90 hover:bg-[#6fad45] bg-transparent text-[#6fad45] border-[#6fad45] w-fit select-none border-2 border-dashed hover:border-transparent">Learn more</div>
                </div>
            </div>
        </section>
    )
}