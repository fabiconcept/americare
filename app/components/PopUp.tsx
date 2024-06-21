"use client"

export default function PopUp({ closeFunction, children }: { closeFunction: () => void, children: JSX.Element }) {
    const handleClosePopUp = () => {
        closeFunction();
    }

    return (
        <div className="fixed h-screen w-screen overflow-hidden z-[100] bg-primary/20 backdrop-blur-sm top-0 left-0 grid place-items-center">
            <div onClick={handleClosePopUp} className="h-full w-full absolute top-0 left-0 cursor-pointer"></div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}
