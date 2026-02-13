import { AnimatedSection } from '../UI/AnimatedSection';
import { education } from '../../data/projects';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const About = () => {
    return (
        <AnimatedSection id="about" className="section relative">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Left Column - About Text */}
                <div>
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] font-semibold tracking-wider text-sm mb-6 border border-[var(--accent-green)]/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        ABOUT ME
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Engineer at heart, <br />
                        <span className="text-gradient">Data Scientist</span> by trade.
                    </h2>

                    <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            My journey began at <strong className="text-[var(--text-primary)]">Politecnico di Milano</strong>,
                            where I built my foundation in Computing Systems Engineering.
                            Currently, I'm deepening my expertise in <strong className="text-[var(--text-primary)]">AI & Data Science</strong> at
                            UnivPM, focusing on how we can extract meaningful insights from potential chaos.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            I'm passionate about the intersection of <strong className="text-[var(--accent-yellow)]">Software Engineering</strong> and
                            <strong className="text-[var(--accent-red)]"> Artificial Intelligence</strong>.
                            Whether it's optimizing an ETL pipeline for massive datasets or fine-tuning a Transformer model for computer vision,
                            I thrive on solving complex technical challenges.
                        </motion.p>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--glass-border)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {[
                            { value: '10+', label: 'Projects' },
                            { value: '2+', label: 'Years Learning' },
                            { value: '∞', label: 'Curiosity' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column - Education Timeline */}
                <motion.div
                    className="glass-card p-8 relative overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-yellow)] opacity-5 blur-[80px] rounded-full" />

                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 rounded-xl bg-[var(--accent-yellow)]/10">
                            <GraduationCap className="w-6 h-6 text-[var(--accent-yellow)]" />
                        </div>
                        <h3 className="text-2xl font-bold">Education</h3>
                    </div>

                    <div className="space-y-8 relative">
                        {/* Timeline line */}
                        <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--accent-yellow)] via-[var(--accent-red)] to-[var(--accent-green)]" />

                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-14"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                {/* Timeline dot */}
                                <motion.span
                                    className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-[3px] border-[var(--bg-secondary)] z-10"
                                    style={{
                                        backgroundColor: index === 0 ? 'var(--accent-yellow)' :
                                            index === 1 ? 'var(--accent-red)' : 'var(--accent-green)'
                                    }}
                                    whileHover={{ scale: 1.2 }}
                                    animate={{
                                        boxShadow: index === 0 ? [
                                            '0 0 0 0 var(--accent-yellow-glow)',
                                            '0 0 20px 5px var(--accent-yellow-glow)',
                                            '0 0 0 0 var(--accent-yellow-glow)'
                                        ] : 'none'
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                <div className="group bg-lightgray">
                                    <h4 className="text-xl font-bold mb-1 group-hover:text-gradient transition-colors cursor-default">
                                        {edu.degree}
                                    </h4>
                                    <div className="flex items-center gap-2 text-[var(--accent-green)] font-medium text-sm mb-2">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {edu.institution}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {edu.period}
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};
