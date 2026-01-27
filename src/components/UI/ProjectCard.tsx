import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: Project;
}

const categoryColors: Record<string, { bg: string; text: string; glow: string }> = {
    'AI/ML': { bg: 'var(--accent-yellow)', text: 'var(--bg-primary)', glow: 'var(--accent-yellow-glow)' },
    'Data': { bg: 'var(--accent-green)', text: 'var(--bg-primary)', glow: 'var(--accent-green-glow)' },
    'NLP': { bg: 'var(--accent-red)', text: 'var(--bg-primary)', glow: 'var(--accent-red-glow)' },
    'Software': { bg: 'var(--text-primary)', text: 'var(--bg-primary)', glow: 'rgba(128,128,128,0.3)' },
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const colors = categoryColors[project.category] || categoryColors['Software'];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative border-gradient shine"
        >
            {/* Glow effect on hover */}
            <div
                className="absolute -inset-1 rounded-[1.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ background: colors.glow }}
            />

            <div className="relative p-8 h-full flex flex-col bg-[var(--bg-secondary)] rounded-[1.5rem] overflow-hidden z-10">
                {/* Category Badge & Links */}
                <div className="flex justify-between items-start mb-6">
                    <motion.span
                        className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                        style={{
                            backgroundColor: colors.bg,
                            color: colors.text,
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {project.category}
                    </motion.span>
                    <div className="flex items-center gap-2">
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all border border-transparent hover:border-[var(--glass-border)]"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github className="w-4 h-4" />
                            </motion.a>
                        )}
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all border border-transparent hover:border-[var(--glass-border)]"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-gradient">
                    {project.title}
                </h3>

                {/* Role */}
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-4">
                    {project.role}
                </p>

                {/* Description */}
                <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--glass-border)]">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                        <motion.span
                            key={idx}
                            className="tech-badge"
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                    {project.technologies.length > 5 && (
                        <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--bg-primary)] text-[var(--accent-yellow)]">
                            +{project.technologies.length - 5}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
