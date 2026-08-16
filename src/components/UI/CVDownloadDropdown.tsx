import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, FileText, Check } from 'lucide-react';

interface CVOption {
    lang: 'EN' | 'IT';
    label: string;
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
        fileName: 'cv_gabriele_vianello_en.pdf',
        downloadName: 'CV_Gabriele_Vianello_EN.pdf',
        flag: '🇬🇧',
    },
    {
        lang: 'IT',
        label: 'Italiano (IT)',
        fileName: 'cv_gabriele_vianello_it.pdf',
        downloadName: 'CV_Gabriele_Vianello_IT.pdf',
        flag: '🇮🇹',
    },
];

interface CVDownloadDropdownProps {
    variant?: 'hero' | 'navbar';
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

    const isNav = variant === 'navbar';
    const iconSize = isNav ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className={`cv-dd ${className}`} ref={containerRef}>
            <motion.button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`cv-trigger${isNav ? ' cv-trigger--nav' : ''}`}
                whileHover={{ scale: isNav ? 1.05 : 1.03, y: isNav ? 0 : -1 }}
                whileTap={{ scale: isNav ? 0.95 : 0.97 }}
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Download Curriculum Vitae"
            >
                <span className="cv-trigger__icon">
                    {isNav ? <FileText className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                </span>
                <span>{isNav ? 'CV' : 'Download CV'}</span>
                <motion.span
                    className="cv-trigger__chevron"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: isNav ? -8 : 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: isNav ? -8 : 8, scale: 0.95 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className={`cv-menu${isNav ? ' cv-menu--nav' : ''}`}
                        role="menu"
                    >
                        <div className="cv-menu__title">Choose CV edition</div>
                        {cvOptions.map((opt) => (
                            <a
                                key={opt.lang}
                                href={getAssetUrl(opt.fileName)}
                                download={opt.downloadName}
                                onClick={() => handleDownload(opt.lang)}
                                className="cv-item"
                                role="menuitem"
                            >
                                <span className="cv-item__main">
                                    <span className="cv-item__flag">{opt.flag}</span>
                                    <span>
                                        <span className="cv-item__label">{opt.label}</span>
                                        <span className="cv-item__sub">PDF · LaTeX</span>
                                    </span>
                                </span>
                                <span
                                    className={`cv-item__icon${downloadedLang === opt.lang ? ' cv-item__icon--done' : ''}`}
                                >
                                    {downloadedLang === opt.lang ? (
                                        <Check className={iconSize} />
                                    ) : (
                                        <Download className={iconSize} />
                                    )}
                                </span>
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
