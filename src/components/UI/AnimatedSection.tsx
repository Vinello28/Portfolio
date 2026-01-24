import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    id?: string;
}

export const AnimatedSection = ({ children, className = '', delay = 0, id }: AnimatedSectionProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.section
            id={id}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1]  // Custom easing for smooth feel
            }}
            className={className}
        >
            {children}
        </motion.section>
    );
};
