"use client"
import { isValidName, isValidEmail, isValidPhone } from "@/lib";
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useMemo,  useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaPhone, FaList, FaAngleDown, FaStar, FaAsterisk } from "react-icons/fa6";
import arrImg from "@/lib/arrow.svg";
import { countryList } from "@/lib/CountriesList";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

enum ErrorState {
    IDLE =  "idle",
    GOOD = "good",
    BAD = "bad"
}

interface ErrorStateObj {
    status: ErrorState;
    error: string;
}

interface ErrorObj {
    [key: string]: ErrorStateObj; // Index signature
}

export default function FormSection() {
    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [phoneText, setPhoneText] = useState<string>("");
    const [countries, setCountries] = useState<string>("");

    const [errorObj, setErrorObj] = useState<ErrorObj>({
        firstName: { error: "", status: ErrorState.IDLE },
        lastName: { error: "", status: ErrorState.IDLE },
        email: { error: "", status: ErrorState.IDLE },
        phone: { error: "", status: ErrorState.IDLE },
        country: { error: "", status: ErrorState.IDLE },
    });

    // Debounced Variables
    const debounceFirstNameText = useDebounce(firstNameText);
    const debounceLastNameText = useDebounce(lastNameText);
    const debounceEmailText = useDebounce(emailText);
    const debouncePhoneText = useDebounce(phoneText);

    const goodToGo = useMemo(() => {
               const result = Object.keys(errorObj).every((key) => 
            errorObj[key as keyof ErrorObj].status === ErrorState.GOOD
        );

        return result
    }, [errorObj]);

    // Validate first name
    useEffect(() => {
        if(!debounceFirstNameText) {
            setErrorObj((prev)=>({...prev, firstName: {error: "", status: ErrorState.IDLE}}));
            return;
        }

        if (!isValidName(debounceFirstNameText)) {
            setErrorObj((prev)=>({...prev, firstName: {error: "Invalid first name", status: ErrorState.BAD}}));
            return;
        }

        setErrorObj((prev)=>({...prev, firstName: {error: "", status: ErrorState.GOOD}}));
    }, [debounceFirstNameText]);

    // Validate last name
    useEffect(() => {
        if(!debounceLastNameText) {
            setErrorObj((prev)=>({...prev, lastName: {error: "", status: ErrorState.IDLE}}));
            return;
        }

        if (!isValidName(debounceLastNameText)) {
            setErrorObj((prev)=>({...prev, lastName: {error: "Invalid last name", status: ErrorState.BAD}}));
            return;
        }
        setErrorObj((prev)=>({...prev, lastName: {error: "", status: ErrorState.GOOD}}));
    }, [debounceLastNameText]);
    
    // Validate Email address
    useEffect(() => {
        if(!debounceEmailText) {
            setErrorObj((prev)=>({...prev, email: {error: "", status: ErrorState.IDLE}}));
            return;
        }

        if (!isValidEmail(debounceEmailText)) {
            setErrorObj((prev)=>({...prev, email: {error: "Invalid email address", status: ErrorState.BAD}}));
            return;
        }

        setErrorObj((prev)=>({...prev, email: {error: "", status: ErrorState.GOOD}}));
    }, [debounceEmailText]);
     
    // Validate Phone
    useEffect(() => {
        if(!debouncePhoneText) {
            setErrorObj((prev)=>({...prev, phone: {error: "", status: ErrorState.IDLE}}));
            return;
        }

        if (!isValidPhone(debouncePhoneText)) {
            setErrorObj((prev)=>({...prev, phone: {error: "Invalid phone number", status: ErrorState.BAD}}));
            return;
        }

        setErrorObj((prev)=>({...prev, phone: {error: "", status: ErrorState.GOOD}}));
    }, [debouncePhoneText]);
    
    // Validate Country
    useEffect(() => {
        if(countries === "") {
            setErrorObj((prev)=>({...prev, country: {error: "", status: ErrorState.IDLE}}));
            return;
        }

        setErrorObj((prev)=>({...prev, country: {error: "", status: ErrorState.GOOD}}));
    }, [countries]);

    
    const performSubmit = async () => { 
        const payload = {
            firstName: debounceFirstNameText,
            lastName: debounceLastNameText,
            email: debounceEmailText,
            phone: debouncePhoneText,
            country: countries,
        }
    }

    const handleSubmit = (e: FormEvent) => { 
        e.preventDefault();
        const promise = performSubmit();

        toast.promise(promise, {
            error: "Opps! Failed to submit application",
            loading: "Submitting application...",
            success: "Application submitted ✨✔🚀"
        })
    }

    return (
        <form action="" onSubmit={handleSubmit} className="dark:bg-darkBg dark:text-white py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative bg-white z-40">
            <Image
                src={"https://americare.sirv.com/icons/bbblurry.svg"}
                alt={"blur shape"}
                height={800}
                width={800}
                id="check_eligibility"
                className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
            />
            <div className="sm:mb-12 mb-8">
                <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold relative w-fit")}>
                    Check Eligibility
                    <Image
                        src={arrImg}
                        alt={"Scribble arrow"}
                        height={80}
                        width={80}
                        className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth absolute -top-2 sm:block hidden -right-[25%]"
                    />
                </h1>
                <p className="sm:text-base text-sm py-3 grid">
                    <span>You&apos;re likely to be eligible if you have Medicaid. </span>
                    <span className="opacity-50">
                        Fill out the form below to see haw fast you can get started with pay & benefits.
                    </span>
                </p>
            </div>

            <section>
                {/* Form input area */}
                <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(20rem,35vw,40rem),1fr))] sm:gap-[2rem_1rem] gap-4">
                    {/* first name */}
                    <div className="flex flex-col gap-2 capitalize">
                        <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.firstName.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden", 
                            errorObj.firstName.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaUser className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.firstName.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <input 
                                type="text" 
                                placeholder="John"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="firstName"
                                required
                                value={firstNameText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setFirstNameText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* last name */}
                    <div className="flex flex-col gap-2 capitalize">
                        <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.lastName.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden", 
                            errorObj.lastName.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaUser className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.lastName.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <input 
                                type="text" 
                                placeholder="Doe"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="lastName"
                                required
                                value={lastNameText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setLastNameText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">E-mail <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.email.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden", 
                            errorObj.email.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaEnvelope className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.email.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <input 
                                type="email" 
                                placeholder="example@gmail.com"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="email"
                                required
                                value={emailText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setEmailText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* phone number */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.phone.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden", 
                            errorObj.phone.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaPhone className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.phone.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <input 
                                type="text" 
                                placeholder="(555) 555 5555"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="phoneNumber"
                                required
                                value={phoneText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setPhoneText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Date of Birth */}
                    <div className="flex flex-col gap-2 capitalize">
                        <span className="flex gap-1 sm:text-base text-sm">Date of birth <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.lastName.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden", 
                            errorObj.lastName.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaUser className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.lastName.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <input 
                                type="date" 
                                placeholder="Doe"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent appearance-none",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="lastName"
                                required
                                value={lastNameText}
                                onChange={(e: ChangeEvent<HTMLInputElement>)=>setLastNameText(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* Country of residence */}
                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Country of Residence <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup> <span className="text-red-500"> {errorObj.country.error}</span></span>
                        <div className={clsx(
                            "relative smooth rounded-xl overflow-hidden cursor-pointer", 
                            errorObj.country.status === ErrorState.BAD ?"border-2 border-red-500": "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70"
                        )}>
                            <FaList className={clsx(
                                "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 peer-placeholder-shown:opacity-50 smooth",
                                errorObj.country.status === ErrorState.BAD ? "text-red-600 opacity-100" : "group-focus-within:opacity-100 opacity-50 "
                                )} 
                            />
                            <select 
                                title="Select positon"
                                className={clsx(
                                    "peer",
                                    "dark:bg-white/5 bg-primary/5 outline-none",
                                    "bg-transparent appearance-none",
                                    "w-full py-4 px-12 sm:text-lg",
                                )}
                                name="position"
                                required
                                value={countries}
                                onChange={(e: ChangeEvent<HTMLSelectElement>)=>setCountries(e.target.value)}
                            >
                                <option key={"none"} className="dark:bg-darkBg dark:text-white text-black bg-white" value={""}>--- Select country ---</option>
                                {countryList.map((country)=>{
                                    const countryCode = country[0];
                                    const countryName = country[1];
                                    return (
                                        <option key={countryCode} className="dark:bg-darkBg dark:text-white text-black bg-white" value={countryCode}>{countryName}</option>
                                    )
                                })}

                            </select>
                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none right-6 peer-placeholder-shown:opacity-50" />
                        </div>
                    </div>
                </div>

                {/* Submit button */}
                {<div className="flex flex-col gap-2 mt-6 group sm:w-fit">
                    <button
                        className={clsx(
                            "smooth border-2 border-dashed",
                            "border-primary text-primary bg-transparent",
                            goodToGo ? "grayscale-0 hover:bg-primary hover:text-white hover:border-dotted active:scale-90" : "grayscale cursor-not-allowed",
                            "sm:w-fit py-4 px-8 sm:text-lg rounded-lg outline-none",
                        )}

                        type={goodToGo ? "submit" : "button"}
                    >
                        {goodToGo ? 
                            <span className="flex gap-2 items-center justify-center">Check Eligibility <FaStar className="group-hover:text-yellow-300" /></span> 
                            : 
                            <span className="flex gap-2 items-center justify-center">Fill the form</span>
                        }
                    </button>
                </div>}

            </section>
        </form>
    )
}