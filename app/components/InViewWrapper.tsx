import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

type PropType = { 
    children: JSX.Element, 
    animation: Variants, 
    threshold: 0.1, 
    rootMargin: '0px',
}
const InViewWrapper = ({ children, animation, threshold = 0.1, rootMargin = '0px' }: PropType) => {
    const { ref, inView } = useInView({
        threshold,
        rootMargin,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animation}
            className='w-auto'
        >
            {children}
        </motion.div>
    );
};

export default InViewWrapper;