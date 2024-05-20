export default function TopSection() {
    return (
        <div className="dark:bg-darkBg dark:text-white bg-white pt-[10rem] pb-[6rem]">
            <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                <span className="flex items-center gap-2">
                    <span className="whitespace-nowrap">
                        Services
                    </span>
                </span>
                <h1
                 className="text-primary font-semibold 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                    Empowering home healthcare for <span className="px-4 rounded-[5rem] border border-white/10 dark:bg-white/10 bg-darkBg/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-darkBg/15 smooth">seniors</span> & <span className="px-4 rounded-[5rem] border border-white/10 dark:bg-white/10 bg-darkBg/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-darkBg/15 smooth">children</span>
                </h1> 
            </div>
        </div>
    )
}