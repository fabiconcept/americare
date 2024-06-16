import Marquee from "react-fast-marquee";
import SingleTestimony from "../(pages)/testimonials/Components/SingleTestimony";
import Reviews from "@/lib/Reviews";

export default function TestimonialMarquee() {
    return (
        <div className="sm:py-8 py-4 relative z-10 dark:bg-darkBg dark:text-white bg-white">
            <Marquee
                className="py-4"
                pauseOnHover
                speed={30}
            >
                <div className="flex items-stretch gap-4 mr-4">
                    {Reviews.map(({ name, occupation, photo, testimony, moreUrl }, index) => (
                        <SingleTestimony
                            key={name}
                            moreUrl={moreUrl}
                            name={name}
                            occupation={occupation}
                            photo={photo}
                            testimony={testimony}
                            isOdd={(index + 1) % 2 === 0}
                            marquee="yes"
                        />
                    ))}
                </div>
            </Marquee>
        </div>
    )
}
