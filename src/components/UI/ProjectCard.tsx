import { Github } from 'lucide-react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-[var(--bg-secondary)] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold tracking-wider text-[var(--accent-red)] uppercase">
                        {project.category}
                    </span>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent-yellow)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-4">
                    {project.role}
                </p>

                <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs font-medium px-2 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-secondary)]">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Hover decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-yellow)] opacity-5 rounded-bl-[100%] -translate-y-full translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
        </motion.div>
    );
};
