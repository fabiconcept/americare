import { FaQuestion } from "react-icons/fa6";

export default function TopSection() {
    return (
        <section className="min-h-screen h-fit bg-white/90">
            <div className="p-[10rem] text-center flex flex-col items-center">
                <span className="flex items-center">
                    <FaQuestion className="scale-x-[-1] scale-y-[-1] opacity-80" />
                    <span className="whitespace-nowrap">
                        Why AmeriCare
                    </span>
                    <FaQuestion />
                </span>
                <h1
                 className="text-[#6fad45] 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">Join Our Team and Be Part of Something Special!</h1> 
            </div>
        </section>
    )
}