import Reviews from "@/lib/Reviews";
import SingleTestimony from "./SingleTestimony";
import CustomBtn from "@/app/components/CustomBtn";

export default function Testimonials() {
    return (
        <div className="dark:bg-darkBg grid-bg dark:text-white bg-white flex flex-col items-center pb-6">
            <div className="sm:p-6 p-3 grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-2">
                {Reviews.map(({ name, occupation, photo, testimony, moreUrl }, index) => (
                    <SingleTestimony
                        key={name}
                        moreUrl={moreUrl}
                        name={name}
                        occupation={occupation}
                        photo={photo}
                        testimony={testimony}
                        isOdd={(index + 1) % 2 === 0}
                    />
                ))}
            </div>
            
            <CustomBtn
                linkHref="https://www.google.com/maps/place/AmeriCare+Health+Services/@33.8265544,-84.1210675,17z/data=!4m8!3m7!1s0x6c682a6d5e26f38f:0x247a65f9ff9e0b9f!8m2!3d33.82655!4d-84.1184926!9m1!1b1!16s%2Fg%2F11sb2z_s29?hl=en&entry=ttu"
                text="See more"
                customClass="mx-auto"
                external
            />
        </div>
    )
}