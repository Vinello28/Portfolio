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
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                <div>
                    <span className="text-[var(--accent-yellow)] font-medium tracking-wider mb-4 block">PORTFOLIO</span>
                    <h2 className="text-4xl font-bold">Featured Projects</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/80'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </AnimatedSection>
    );
};
