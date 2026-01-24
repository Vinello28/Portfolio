import { useState } from 'react';
import { AnimatedSection } from '../UI/AnimatedSection';
import { ProjectCard } from '../UI/ProjectCard';
import { projects } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['All', 'AI/ML', 'Data', 'NLP', 'Software'];

export const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(p =>
        filter === 'All' ? true : p.category === filter
    );

    return (
        <AnimatedSection id="projects" className="section">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                <div>
                    <motion.span
                        className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-yellow)]/10 text-[var(--accent-yellow)] font-semibold tracking-wider text-sm mb-6 border border-[var(--accent-yellow)]/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        PORTFOLIO
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)]">
                    {CATEGORIES.map(cat => (
                        <motion.button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'text-[var(--bg-primary)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                            whileHover={{ scale: filter === cat ? 1 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {filter === cat && (
                                <motion.span
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-[var(--text-primary)] rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p className="text-[var(--text-secondary)] text-lg">
                        No projects found in this category.
                    </p>
                </motion.div>
            )}
        </AnimatedSection>
    );
};
