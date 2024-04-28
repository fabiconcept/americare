"use client"

export default function NavigationCoponent() {
    return (
        <div className="fixed left-0 top-0 z-50 w-full overflow-hidden flex flex-col items-center">
            <div className="p-12 pt-44 px-32 bg-[#2b2b2b] rounded-b-[3rem] w-full shadow-xl">
                <div className="flex gap-24 justify-center capitalize">
                    <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                        <span className="text-5xl opacity-50">Units</span> 
                        <div className="h-[2px] w-20 bg-white"></div>
                    </div>
                    <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                        <span className="text-5xl opacity-50">facilities</span> 
                        <div className="h-[2px] w-20 bg-white"></div>
                    </div>
                    <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                        <span className="text-5xl opacity-50">About</span> 
                        <div className="h-[2px] w-20 bg-white"></div>
                    </div>
                    <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                        <span className="text-5xl opacity-50">Contact</span> 
                        <div className="h-[2px] w-20 bg-white"></div>
                    </div>
                </div>
            </div>
            <div className="p-3 px-5 bg-[#2b2b2b] rounded-b-xl cursor-pointer grid gap-1 shadow-xl">
                <div className="h-[2px] w-12 bg-white"></div>
                <div className="h-[2px] w-12 bg-white"></div>
                <div className="h-[2px] w-12 bg-white"></div>
            </div>
        </div>
    )
}