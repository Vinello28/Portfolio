import { useState, useEffect } from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass py-3 shadow-lg'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative text-2xl font-bold tracking-tight group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">G</span>
                        <motion.span
                            className="text-[var(--accent-red)] relative z-10"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        >
                            .
                        </motion.span>
                        <span className="absolute -inset-2 bg-[var(--accent-yellow)]/0 group-hover:bg-[var(--accent-yellow)]/10 rounded-lg transition-colors duration-300" />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-yellow)] to-[var(--accent-red)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="h-6 w-px bg-[var(--text-secondary)]/20" />

                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <motion.button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)]"
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={mobileOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
                className="fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl md:hidden"
            >
                <motion.div
                    className="flex flex-col items-center justify-center h-full gap-8"
                    initial={false}
                    animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-3xl font-bold text-[var(--text-primary)] hover:text-gradient transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
};
