"use client"
import { motion, AnimatePresence } from 'framer-motion';

export default function PopUp({ closeFunction, isVisible, children }: { closeFunction: () => void, children: JSX.Element, isVisible: boolean }) {
    const handleClosePopUp = () => {
        closeFunction();
    }

    const backdropVariants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    const modalVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },

        },
        hidden: {
            y: 200,
            opacity: 0,
            transition: { duration: 0.3 },

        },
    };


    return (
        <AnimatePresence>
            {isVisible && <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed h-screen w-screen overflow-hidden z-[100] bg-primary/20 backdrop-blur-sm top-0 left-0 grid sm:items-center justify-center items-end"
            >
                <div onClick={handleClosePopUp} className="h-full w-full absolute top-0 left-0 cursor-pointer"></div>
                <AnimatePresence>
                    {isVisible && <motion.div variants={modalVariants} className="relative z-10">
                        {children}
                    </motion.div>}
                </AnimatePresence>
            </motion.div>}
        </AnimatePresence>

    )
}
