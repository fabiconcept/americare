import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

type TestimonyProp = {
    testimony: string;
    name: string;
    occupation: string;
    photo: string;
    isOdd: boolean;
    moreUrl?: string;
    marquee?: "yes",
}

export default function SingleTestimony(prop: TestimonyProp) {
    return (
        <InViewWrapper animation={prop.marquee !== "yes" ? (prop.isOdd ? cardIn : cardInAlt) : {}} className={clsx(
            "border rounded-lg p-4 flex flex-col gap-3 sm:hover:-translate-y-2 smooth",
            prop.marquee === "yes" ? "2xl:w-[30rem] min-h-full sm:w-[25rem] w-[calc(100vw-2rem)]" : "",
            prop.isOdd ? "bg-primary/10 max-md:hover:bg-primary/20 border-primary/15" : "bg-primary/5 max-md:hover:bg-primary/15 border-primary/10"
        )}>
            <>
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
                    {prop.moreUrl && <Link href={prop.moreUrl} className="text-primary active:rotate-6 origin-left font-semibold underline-offset-4 underline">read more</Link>}
                </div>
                <div className="flex gap-2 mt-2">
                    <div className="sm:h-11 h-9 sm:w-11 w-9 items-center overflow-hidden rounded-full border grid place-items-center">
                        <Image
                            src={prop.photo}
                            height={70}
                            width={70}
                            alt={"Reviewer " + prop.name}
                            className="object-cover h-full"
                        />

                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold capitalize">{prop.name}</span>
                        <span className="text-sm opacity-60">{prop.occupation}</span>
                    </div>
                </div>
            </>
        </InViewWrapper>
    )
}
