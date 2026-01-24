import { AnimatedSection } from '../UI/AnimatedSection';
import { skills } from '../../data/projects';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
    'Languages': <Code2 className="w-6 h-6" />,
    'AI/ML': <Brain className="w-6 h-6" />,
    'Data': <Database className="w-6 h-6" />,
    'Tools': <Wrench className="w-6 h-6" />,
};

const categoryColors: Record<string, string> = {
    'Languages': 'var(--accent-yellow)',
    'AI/ML': 'var(--accent-red)',
    'Data': 'var(--accent-green)',
    'Tools': 'var(--accent-yellow)',
};

export const Skills = () => {
    return (
        <AnimatedSection id="skills" className="section">
            <div className="relative">
                {/* Background Decoration */}
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-[3rem]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-yellow)] opacity-5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent-green)] opacity-5 blur-[100px] rounded-full" />
                </div>

                <div className="glass-card p-10 md:p-16">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-red)]/10 text-[var(--accent-red)] font-semibold tracking-wider text-sm mb-6 border border-[var(--accent-red)]/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            TECH STACK
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Tools & <span className="text-gradient">Technologies</span>
                        </h2>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -5 }}
                                className="group p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)] hover:border-transparent relative overflow-hidden transition-all duration-300"
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${categoryColors[skillGroup.category] || 'var(--accent-yellow)'}20, transparent 70%)`
                                    }}
                                />

                                {/* Icon & Title */}
                                <div className="flex items-center gap-3 mb-6">
                                    <motion.div
                                        className="p-2.5 rounded-xl"
                                        style={{
                                            backgroundColor: `${categoryColors[skillGroup.category] || 'var(--accent-yellow)'}15`,
                                            color: categoryColors[skillGroup.category] || 'var(--accent-yellow)'
                                        }}
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        {categoryIcons[skillGroup.category] || <Code2 className="w-6 h-6" />}
                                    </motion.div>
                                    <h3
                                        className="text-lg font-bold"
                                        style={{ color: categoryColors[skillGroup.category] || 'var(--accent-yellow)' }}
                                    >
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skillIdx}
                                            className="px-3 py-1.5 text-sm font-medium rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--glass-border)] transition-all cursor-default"
                                            whileHover={{
                                                scale: 1.05,
                                                borderColor: categoryColors[skillGroup.category] || 'var(--accent-yellow)',
                                                color: 'var(--text-primary)'
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
