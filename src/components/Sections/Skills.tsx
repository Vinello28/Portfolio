import { AnimatedSection } from '../UI/AnimatedSection';
import { skills } from '../../data/projects';
import { motion } from 'framer-motion';

export const Skills = () => {
    return (
        <AnimatedSection id="skills" className="section bg-[var(--bg-secondary)] rounded-[3rem]">
            <div className="text-center mb-16">
                <span className="text-[var(--accent-red)] font-medium tracking-wider mb-4 block">TECH STACK</span>
                <h2 className="text-4xl font-bold">Tools & Technologies</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-[var(--bg-primary)] hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-6 text-[var(--accent-yellow)]">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="px-3 py-1 text-sm font-medium rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--text-secondary)]/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};
