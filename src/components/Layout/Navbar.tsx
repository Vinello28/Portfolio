import { useState, useEffect } from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';
import { motion } from 'framer-motion';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--bg-secondary)] py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight">
                    G<span className="text-[var(--accent-red)]">.</span>
                </a>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-secondary)]">
                        <li><a href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</a></li>
                        <li><a href="#skills" className="hover:text-[var(--text-primary)] transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</a></li>
                    </ul>
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
};
