import { Github, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { href: 'https://github.com/Vinello28', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/gabriele-vianello-476a331a1', icon: Linkedin, label: 'LinkedIn' },
];

export const Footer = () => {
    return (
        <footer className="relative py-12 mt-20 border-t border-[var(--glass-border)] overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-[var(--accent-yellow)]/5 to-transparent blur-[80px]" />
            </div>

            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left - Copyright */}
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <span>© {new Date().getFullYear()}</span>
                        <span className="text-gradient font-bold">Gabriele</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart className="w-3.5 h-3.5 text-[var(--accent-red)] fill-[var(--accent-red)]" /> using React + Vite
                        </span>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-yellow)] transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={link.label}
                            >
                                <link.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
