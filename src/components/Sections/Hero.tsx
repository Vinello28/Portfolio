import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Linkedin } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
            {/* Animated Floating Orbs */}
            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 20, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-yellow absolute -top-20 -left-20 w-[400px] h-[400px]"
                style={{ opacity: 0.3 }}
            />
            <motion.div
                animate={{
                    x: [0, -40, 30, 0],
                    y: [0, 30, -20, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-red absolute top-1/2 -right-32 w-[350px] h-[350px]"
                style={{ opacity: 0.25 }}
            />
            <motion.div
                animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -20, 40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-green absolute bottom-0 left-1/4 w-[300px] h-[300px]"
                style={{ opacity: 0.2 }}
            />

            {/* Grid Pattern Background Removed */}

            <div className="max-w-4xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] font-semibold tracking-wider text-sm mb-6 border border-[var(--accent-yellow)]/20">
                        👋 HELLO, I'M
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        <span className="text-gradient">Gabriele</span>
                        <motion.span
                            className="text-[var(--accent-red)] inline-block"
                            animate={{ rotate: [0, 14, -8, 14, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                            .
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-secondary)] mb-8">
                        Building intelligent systems <br className="hidden md:block" />
                        driven by <span className="text-gradient-yellow-red">Search & Visual data</span>.
                    </h2>

                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
                        MSc Student in Computer Engineering (AI & Data Science) at UnivPM.
                        Specialized in <strong className="text-[var(--text-primary)]">Machine Learning</strong>,
                        <strong className="text-[var(--text-primary)]"> Computer Vision</strong>, and
                        <strong className="text-[var(--text-primary)]"> Data Engineering</strong>.
                        Building the bridge between complex algorithms and scalable software.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group btn-primary shine"
                    >
                        <span>View Projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://github.com/Vinello28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] transition-all hover:border-[var(--accent-yellow)] hover:shadow-[0_0_20px_var(--accent-yellow-glow)]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] transition-all hover:border-[var(--accent-green)] hover:shadow-[0_0_20px_var(--accent-green-glow)]"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="mailto:contact@example.com"
                            className="p-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] transition-all hover:border-[var(--accent-red)] hover:shadow-[0_0_20px_var(--accent-red-glow)]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-[var(--text-secondary)]/30 flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]"
                        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
