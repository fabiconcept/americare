import Reviews from "@/lib/Reviews";
import SingleTestimony from "./SingleTestimony";

export default function Testimonials() {
    return (
        <div className="bg-white p-6 grid 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] gap-2">
            {Reviews.map(({ name, occupation, photo, testimony }, index)=>(
                <SingleTestimony 
                    key={name}
                    name={name}
                    occupation={occupation}
                    photo={photo}
                    testimony={testimony}
                    isOdd={(index + 1) % 2 === 0}
                 />
            ))}
        </div>
    )
}