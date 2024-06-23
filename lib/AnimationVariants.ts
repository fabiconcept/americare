import { Variants } from "framer-motion";

const cardIn: Variants = {
    hidden: { opacity: 0, translateX: 100, },
    visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
};
const cardInAlt: Variants = {
    hidden: { opacity: 0, translateX: -100, },
    visible: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
};

const fadeIn: Variants = {
    hidden: { opacity: 0, translateY: 50 },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
};

export { cardIn, cardInAlt, fadeIn }