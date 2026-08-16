import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, FileText, Check } from 'lucide-react';

interface CVOption {
    lang: 'EN' | 'IT';
    label: string;
    description: string;
    fileName: string;
    downloadName: string;
    flag: string;
}

const getAssetUrl = (path: string) => {
    const base = import.meta.env.BASE_URL || '/';
    return base.endsWith('/') ? `${base}${path}` : `${base}/${path}`;
};

const cvOptions: CVOption[] = [
    {
        lang: 'EN',
        label: 'English (EN)',
        description: 'LaTeX PDF • English edition',
        fileName: 'cv_gabriele_vianello_en.pdf',
        downloadName: 'CV_Gabriele_Vianello_EN.pdf',
        flag: '🇬🇧',
    },
    {
        lang: 'IT',
        label: 'Italiano (IT)',
        description: 'LaTeX PDF • Edizione italiana',
        fileName: 'cv_gabriele_vianello_it.pdf',
        downloadName: 'CV_Gabriele_Vianello_IT.pdf',
        flag: '🇮🇹',
    },
];

interface CVDownloadDropdownProps {
    variant?: 'hero' | 'navbar' | 'compact';
    className?: string;
    onItemClick?: () => void;
}

export const CVDownloadDropdown = ({
    variant = 'hero',
    className = '',
    onItemClick,
}: CVDownloadDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [downloadedLang, setDownloadedLang] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleDownload = (lang: 'EN' | 'IT') => {
        setDownloadedLang(lang);
        setTimeout(() => setDownloadedLang(null), 2500);
        setIsOpen(false);
        if (onItemClick) {
            onItemClick();
        }
    };

    if (variant === 'navbar') {
        return (
            <div className={`relative inline-block ${className}`} ref={containerRef}>
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-yellow)] transition-all shadow-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-label="Download CV options"
                >
                    <FileText className="w-3.5 h-3.5 text-[var(--accent-yellow)]" />
                    <span>CV</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-3 h-3 text-[var(--text-secondary)]" />
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            className="absolute right-0 mt-2 w-56 p-2 rounded-2xl glass-card shadow-2xl border border-[var(--glass-border)] z-50 overflow-hidden"
                            role="menu"
                        >
                            <div className="px-2.5 py-1.5 text-[11px] font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
                                Select Language
                            </div>
                            <div className="space-y-1">
                                {cvOptions.map((opt) => (
                                    <a
                                        key={opt.lang}
                                        href={getAssetUrl(opt.fileName)}
                                        download={opt.downloadName}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => handleDownload(opt.lang)}
                                        className="flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]/70 transition-colors group"
                                        role="menuitem"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-base leading-none">{opt.flag}</span>
                                            <div>
                                                <div className="font-semibold">{opt.label}</div>
                                                <div className="text-[10px] text-[var(--text-secondary)]">PDF (LaTeX)</div>
                                            </div>
                                        </div>
                                        {downloadedLang === opt.lang ? (
                                            <Check className="w-3.5 h-3.5 text-[var(--accent-green)]" />
                                        ) : (
                                            <Download className="w-3.5 h-3.5 text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className={`relative inline-block ${className}`} ref={containerRef}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] font-semibold text-sm text-[var(--text-primary)] transition-all hover:border-[var(--accent-yellow)] hover:shadow-[0_0_25px_var(--accent-yellow-glow)] cursor-pointer"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Download Curriculum Vitae"
            >
                <div className="p-1 rounded-full bg-[var(--accent-yellow)]/15 text-[var(--accent-yellow)]">
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
                <span>Download CV</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 sm:left-auto sm:right-0 mt-3 w-64 p-2.5 rounded-2xl glass-card shadow-2xl border border-[var(--glass-border)] z-50"
                        role="menu"
                    >
                        <div className="px-3 py-2 text-xs font-semibold tracking-wider text-[var(--text-secondary)] uppercase border-b border-[var(--glass-border)]/50 mb-1">
                            Choose CV Edition
                        </div>
                        <div className="space-y-1.5 mt-1">
                            {cvOptions.map((opt) => (
                                <a
                                    key={opt.lang}
                                    href={getAssetUrl(opt.fileName)}
                                    download={opt.downloadName}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => handleDownload(opt.lang)}
                                    className="flex items-center justify-between p-2.5 rounded-xl text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-all group border border-transparent hover:border-[var(--glass-border)]"
                                    role="menuitem"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-xl flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-primary)] border border-[var(--glass-border)]">
                                            {opt.flag}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] group-hover:text-gradient transition-colors">
                                                {opt.label}
                                            </div>
                                            <div className="text-[11px] text-[var(--text-secondary)]">
                                                {opt.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] group-hover:border-[var(--accent-yellow)]/30 border border-[var(--glass-border)] transition-colors">
                                        {downloadedLang === opt.lang ? (
                                            <Check className="w-4 h-4 text-[var(--accent-green)]" />
                                        ) : (
                                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
