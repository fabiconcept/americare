import { FaMinus, FaUserPlus } from "react-icons/fa6";
export default function TopSection() {
    return (
        <div className="dark:bg-darkBg dark:text-white bg-white pt-[10rem] pb-[6rem]">
            <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                <span className="flex items-center gap-2">
                    <FaUserPlus />
                    <span className="whitespace-nowrap">
                        Join AmeriCare
                    </span>
                    <FaUserPlus />
                </span>
                <h1
                 className="text-primary font-semibold 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                    Join our incredible team of <span className="px-4 rounded-[5rem] border border-white/10 dark:bg-white/10 bg-darkBg/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-darkBg/15 smooth">Doctors</span> <span className="dark:text-white text-darkBg">&</span> <span className="px-4 rounded-[5rem] border border-white/10 dark:bg-white/10 bg-darkBg/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-darkBg/15 smooth">Nurses</span>
                </h1> 
                <span className="flex items-center flex-col mt-6">
                    <span>
                    <span className="opacity-70">Our philosophy is simple; </span><span>hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</span>
                    </span>
                </span>
            </div>
        </div>
    )
}