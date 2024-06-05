import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

type TestimonyProp = {
    testimony: string;
    name: string;
    occupation: string;
    photo: string;
}

export default function SingleTestimony(prop: TestimonyProp) {
    return (
        <div className="border rounded-lg bg-primary/5 border-primary/10 p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div>
                <span className="line-clamp-4">
                    &quot;{prop.testimony}&quot;
                </span>
                <Link href={"#"} className="text-primary active:rotate-6 origin-left font-semibold underline-offset-4 underline">read more</Link>
            </div>
            <div className="flex gap-2">
                <div className="h-11 w-11 items-center overflow-hidden rounded-full border grid place-items-center">
                    <Image
                        src={prop.photo}
                        height={70}
                        width={70}
                        alt={"Reviewer " + prop.name}
                        className="object-cover h-full"
                    />

                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">{prop.name}</span>
                    <span className="text-sm opacity-60">{prop.occupation}</span>
                </div>
            </div>
        </div>
    )
}
