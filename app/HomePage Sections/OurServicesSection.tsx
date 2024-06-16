import { OurServicesList } from "@/lib/OurServicesList";
import ServiceItem from "./components/ServiceItem";
import CustomBtn from "../components/CustomBtn";

export default function OurServicesSection() {
    return (
        <section className="bg-white py-12 shadow-lg dark:bg-darkBg dark:text-white grid-bg">
            <h1 className="sm:px-[10vw] mb-3 px-3 text-center text-primary sm:text-[4vw] text-5xl">
                Our Services
            </h1>
            <div className="grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] sm:px-[3vw] px-3">
                {OurServicesList.map((serviceItem, index)=>{
                    if((OurServicesList.length-1) === index) {
                        return (<>
                        <div key={"aaec1"} className="sm:block hidden"></div>
                            <ServiceItem
                                key={index}
                                title={serviceItem.title}
                                content={serviceItem.content}
                                isOdd={false}
                            />
                        <div key={"ecaee19"} className="sm:block hidden"></div>
                        </>)
                    }
                    return (<ServiceItem 
                        key={index}
                        title={serviceItem.title}
                        content={serviceItem.content}
                        isOdd={index % 2 === 0}
                    />)
                })}
            </div>
            <div className="grid place-items-center p-8">
                <CustomBtn
                    customClass=""
                    linkHref="#"
                    text="Learn more"
                />
            </div>
        </section>
    )
}