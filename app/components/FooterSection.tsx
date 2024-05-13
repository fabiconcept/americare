import Image from "next/image";
import clsx from "clsx";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { FaMailBulk, FaPhoneSquare, FaPhoneSquareAlt } from "react-icons/fa";

export default function FooterSection() {
    return (
        <div className={clsx(
            "bg-white text-white sm:text-xl text-base"
        )}>
            <div className="pt-12 pb-6 sm:px-[5vw] px-5 bg-[#222222] rounded-t-[3rem]">

                <div className="border-b border-b-white/25 pb-6 flex flex-wrap justify-between gap-4 items-center">
                    <Image
                        src={"https://americare.sirv.com/icons/logo-png.png"}
                        alt="AmeriCare Logo"
                        height={300}
                        width={300}
                        priority
                        className={clsx(
                            "w-44 sm:-ml-6 smooth sm:mx-0 mx-auto",
                        )}
                    />

                    <div className="flex gap-2 sm:mx-0 mx-auto">
                        <CustomBtn
                            customClass=""
                            linkHref="/careers"
                            text="Join our team"
                        />
                        <CustomBtn
                            customClass="after:h-[105%] after:w-[105%] opacity-100 after:bg-[#6fad45] text-white"
                            linkHref="#"
                            text="Contact us"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap-reverse py-6 gap-3 justify-between">
                    <div className="max-w-md flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="font-semibold">Address</span>
                            <span className="opacity-80">1755 E Park Place Blvd Stone Mountain, GA 30087</span>
                        </div>

                        <div>
                            <span className="mt-6 flex gap-1 group">
                                    <FaPhoneSquareAlt className="text-3xl smooth group-hover:text-[#6fad45]" />
                                Call <Link className="text-[#6fad45]" href={"tel:+1770656-9593"}>(770) 656-9593</Link> For A Free Consultation!
                            </span>
                            <span className="mt-3 flex gap-1 group">
                                <FaMailBulk className="text-3xl smooth group-hover:text-[#6fad45]" />
                                Email: <Link className="text-[#6fad45]" href={"mailto:contact@americareinhome.com"}>contact@americareinhome.com</Link>.
                            </span>
                        </div>
                    </div>

                    <div className="grid gap-3 max-md:text-lg text-white">
                        <Link className="min-w-[10rem] sm:px-3 hover:text-[#6fad45] smooth hover:font-semibold" href="#">About</Link>
                        <Link className="min-w-[10rem] sm:px-3 hover:text-[#6fad45] smooth hover:font-semibold" href="#">Services</Link>
                        <Link className="min-w-[10rem] sm:px-3 hover:text-[#6fad45] smooth hover:font-semibold" href="#">Career</Link>
                        <Link className="min-w-[10rem] sm:px-3 hover:text-[#6fad45] smooth hover:font-semibold" href="#">Contact</Link>
                    </div>

                    <div className="grid sm:grid-cols-1 gap-3 sm:min-w-fit min-w-full grid-cols-4 text-white">
                        <Link href={"#"}>
                            <FaFacebookF className="text-3xl hover:text-[#6fad45]" />
                        </Link>
                        <Link href={"#"}>
                            <FaLinkedin className="text-3xl hover:text-[#6fad45]" />
                        </Link>
                        <Link href={"#"}>
                            <FaMailBulk className="text-3xl hover:text-[#6fad45]" />
                        </Link>
                        <Link href={"#"}>
                            <FaPhoneSquareAlt className="text-3xl hover:text-[#6fad45]" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}