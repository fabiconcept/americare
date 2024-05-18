"use client"
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Macondo } from "next/font/google";
import { ChangeEvent, useRef, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaList, FaPaperclip, FaAngleDown, FaStar, FaAsterisk } from "react-icons/fa6";

const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });

enum Positions {
    None = 0,
    Companion = 1,
    HomeMarker = 2,
    PersonalCareWorker = 3,
}

export default function FormSection() {
    const handleClickFileUplaod = () =>{
        if(!fileUploadRef.current) return;
        fileUploadRef.current.click();
    }

    const fileUploadRef = useRef<HTMLInputElement>(null);

    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [phoneText, setPhoneText] = useState<string>("");
    const [coverLetterText, setCoverLetterText] = useState<string>("");
    const [positions, setPositions] = useState<Positions>(Positions.None);
    const [attachFile, setAttachFile] = useState<File | null>(null);

    // Debounced Variables
    const debounceFirstNameText = useDebounce(firstNameText);
    const debounceLastNameText = useDebounce(lastNameText);
    const debounceEmailText = useDebounce(emailText);
    const debouncePhoneText = useDebounce(phoneText);
    const debounceCoverLetterText = useDebounce(coverLetterText);





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
                <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,35vw,40rem),1fr))] sm:gap-[2rem_1rem] gap-4">
                    {/* first name */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                            <FaUser className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="John"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                value={firstNameText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setFirstNameText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* last name */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                            <FaUser className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="Doe"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}

                                value={lastNameText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setLastNameText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">E-mail <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                            <FaEnvelope className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="example@gmail.com"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                value={emailText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setEmailText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* phone number */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                            <FaPhone className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <input 
                                type="text" 
                                placeholder="(555) 555 5555"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}

                                value={phoneText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setPhoneText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Position applying for */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Position applying for <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                            <FaList className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <select 
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent appearance-none",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}

                                value={positions}
                                onChange={(e: ChangeEvent<HTMLSelectElement>)=>setPositions(Number(e.target.value) as Positions)}
                            >
                                <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.None}>Please choose an option</option>
                                <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.Companion}>Companion</option>
                                <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.HomeMarker}>Home maker</option>
                                <option className="dark:bg-darkBg dark:text-white text-black bg-white" value={Positions.PersonalCareWorker}>Personal care worker</option>

                            </select>
                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none right-6 peer-placeholder-shown:opacity-50" />
                        </div>
                    </div>
                    {/* Attach resume */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Attach resume <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50 flex gap-2">
                            <FaPaperclip className="group-focus-within:opacity-100 opacity-50 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50" />
                            <div
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-darkBg/5",
                                    "bg-transparent",
                                    "w-full py-4 px-14 sm:text-lg",
                                )}
                            >
                                <p className="max-w-[70%] truncate">No file selected</p>
                            </div>
                            <input 
                                type="file" 
                                hidden 
                                ref={fileUploadRef}
                            />
                            <span className="z-20 absolute top-1/2 -translate-y-1/2 select-none right-3 px-3 py-2  bg-primary/10 rounded-xl cursor-pointer hover:bg-primary/50 smooth active:scale-90 border dark:border-white/10 hover:dark:border-white/25 border-darkBg/10 hover:border-darkBg/25" onClick={handleClickFileUplaod}>Import file</span>
                        </div>
                    </div>
                </div>
                {/* Cover letter */}
                <div className="flex flex-col gap-2 mt-6">
                    <span className="flex gap-1 sm:text-base text-sm">Cover letter <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                    <div className="relative smooth rounded-xl overflow-hidden border-2 border-white/10 group focus-within:border-white/50">
                        <textarea 
                            className ={clsx(
                                "peer",
                                "dark:bg-white/5 bg-darkBg/5",
                                "bg-transparent",
                                "w-full py-4 px-8 sm:text-lg resize-none outline-none",
                            )}
                            placeholder="Enter cover letter"
                            rows={4}
                            value={coverLetterText}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCoverLetterText(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                {/* Submit button */}
                <div className="flex flex-col gap-2 mt-6 group">
                    <button
                        className={clsx(
                            "smooth active:scale-90",
                            "border-2 border-primary border-dashed hover:border-dotted text-primary bg-transparent hover:bg-primary hover:text-white",
                            "sm:w-fit py-4 px-8 sm:text-lg rounded-lg outline-none",
                        )}
                    >
                        <span className="flex gap-2 items-center justify-center">Send application <FaStar className="group-hover:text-yellow-300" /></span>
                    </button>
                </div>

            </section>
        </form>
    )
}