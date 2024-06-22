"use client"
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

type PropType = { 
    children: JSX.Element, 
    animation: Variants,
    className?: string 
}
const InViewWrapper = ({ children, animation, className }: PropType) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        rootMargin: "0px",
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animation}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default InViewWrapper;