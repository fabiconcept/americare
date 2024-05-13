import { OurServicesList } from "@/lib/OurServicesList";
import ServiceItem from "./components/ServiceItem";
import CustomBtn from "../components/CustomBtn";

export default function OurServicesSection() {
    return (
        <section className="bg-white py-12 shadow-lg">
            <h1 className="sm:px-[12.5vw] mb-3 px-3 text-center text-primary sm:text-[4vw] text-5xl">
                Our services
            </h1>
            <p className="text-center opacity-60 mb-5 max-w-[15rem] text-lg mx-auto">Services we can offer you</p>
            <div className="grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] sm:px-[3vw] px-3">
                {OurServicesList.map((serviceItem, index)=>(
                    <ServiceItem 
                        key={index}
                        title={serviceItem.title}
                        content={serviceItem.content}
                        isOdd={index % 2 === 0}
                    />
                ))}
                <div className="grid place-items-center p-8">
                    <CustomBtn 
                        customClass=""
                        linkHref="#"
                        text="Learn more"
                    />
                </div>
            </div>
        </section>
    )
}