import clsx from "clsx";
import { Macondo } from "next/font/google";
import { FaUser, FaEnvelope, FaPhone, FaList, FaPaperclip, FaAngleDown } from "react-icons/fa6";

const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });

export default function FormSection() {
    return (
        <form action="" className="dark:bg-darkBg dark:text-white py-12 sm:px-[12.5vw] px-6 relative bg-white">
            <div className="sm:mb-12 mb-8">
                <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold")}>
                    Online application
                </h1>
                <p className="sm:text-base text-sm py-3 grid">
                    <span>This section is your chance to shine! </span>
                    <span className="opacity-50">
                        Here, you can tell us about your skills, experience, and why you&apos;d be a great fit for us.
                    </span>
                </p>
            </div>

            <section>
                {/* Form input area */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,35vw,40rem),1fr))] gap-[2rem_1rem]">
                    {/* first name */}
                    <div className="flex flex-col gap-2">
                        <span>First name <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="John"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            />
                        </div>
                    </div>
                    {/* last name */}
                    <div className="flex flex-col gap-2">
                        <span>Last name <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="Doe"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <span>E-mail <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaEnvelope className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="example@gmail.com"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            />
                        </div>
                    </div>
                    {/* phone number */}
                    <div className="flex flex-col gap-2">
                        <span>Phone number <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaPhone className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="(555) 555 5555"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            />
                        </div>
                    </div>
                    {/* Position applying for */}
                    <div className="flex flex-col gap-2">
                        <span>Position applying for <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaList className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <select 
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent appearance-none",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            >
                                <option value="">-- Please choose an option --</option>
                                <option value="1">Companion</option>
                                <option value="2">Home maker</option>
                                <option value="3">Personal care worker</option>

                            </select>
                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none right-6 peer-placeholder-shown:opacity-50" />
                        </div>
                    </div>
                    {/* Attach resume */}
                    <div className="flex flex-col gap-2">
                        <span>Attach resume <span className="text-primary">:</span></span>
                        <div className="relative smooth rounded-2xl overflow-hidden border-2 border-white/10 focus-within:border-white/50">
                            <FaPaperclip className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-6 peer-placeholder-shown:opacity-50" />
                            <div
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 text-lg",
                                )}
                            >
                                <span className="px-3 py-2 dark:bg-white/10 bg-darkBg/10 rounded-xl cursor-pointer hover:dark:bg-white/25 hover:bg-darkBg/25 smooth">Import file</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}