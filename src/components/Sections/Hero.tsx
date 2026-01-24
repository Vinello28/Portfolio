import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative overlow-hidden">
            <div className="max-w-4xl z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-[var(--accent-yellow)] font-medium tracking-wider mb-4 block">
                        HELLO, I'M
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        Gabriele<span className="text-[var(--accent-red)]">.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-secondary)] mb-8">
                        Building intelligent systems <br className="hidden md:block" />
                        driven by <span className="text-[var(--accent-green)]">Search & Visual data</span>.
                    </h2>

                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
                        MSc Student in Computer Engineering (AI & Data Science) at UnivPM.
                        Specialized in Machine Learning, Computer Vision, and Data Engineering.
                        Building the bridge between complex algorithms and scalable software.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full font-medium transition-transform hover:scale-105"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/Vinello28" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[var(--accent-yellow)] transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="mailto:contact@example.com" className="p-2 hover:text-[var(--accent-red)] transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-10 dark:opacity-5 pointer-events-none">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-[500px] h-[500px] border-[1px] border-[var(--text-primary)] rounded-full border-dashed"
                />
            </div>
        </section>
    );
};
