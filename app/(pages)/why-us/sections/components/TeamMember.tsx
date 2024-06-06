import Image from "next/image";

type TeamMemberProps = {
    name: string;
    role: string;
    photo: string;
}

export default function TeamMember(prop: TeamMemberProps) {
    return (
        <div className="h-[20rem] relative grid place-items-center overflow-hidden rounded-lg group">
            <Image
                src={prop.photo}
                alt={prop.name}
                height={1000}
                width={1000}
                className="h-full object-cover max-md:scale-105 max-md:group-hover:scale-100 smooth"
            />
            <div className="absolute sm:-bottom-7 bottom-3 group-hover:bottom-3 delay-75 smooth sm:rotate-1 group-hover:rotate-0 origin-left bg-white/50 backdrop-blur-lg w-[calc(100%-1.5rem)] p-3 px-5 flex flex-col rounded-md">
                <span className="text-darkBg font-bold">{prop.name}</span>
                <span className="text-black opacity-60 text-sm">{prop.role}</span>
            </div>
        </div>
    )
}