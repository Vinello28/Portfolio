import { AnimatedSection } from '../UI/AnimatedSection';
import { Mail, ArrowUpRight, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Vinello28', icon: Github },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@example.com', icon: Mail },
];

export const Contact = () => {
    return (
        <AnimatedSection id="contact" className="section mb-20">
            <div className="relative overflow-hidden rounded-[3rem]">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 50%, var(--bg-secondary) 100%)',
                        }}
                    />
                    <motion.div
                        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
                        style={{ background: 'var(--accent-yellow)', opacity: 0.08, filter: 'blur(100px)' }}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
                        style={{ background: 'var(--accent-green)', opacity: 0.08, filter: 'blur(100px)' }}
                        animate={{
                            x: [0, -80, 0],
                            y: [0, -40, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full"
                        style={{ background: 'var(--accent-red)', opacity: 0.06, filter: 'blur(100px)' }}
                        animate={{
                            x: [0, -50, 0],
                            y: [0, 30, 0],
                            scale: [1, 0.9, 1],
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 md:p-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent-green)]/10 text-[var(--accent-green)] font-semibold tracking-wider text-sm mb-8 border border-[var(--accent-green)]/20">
                            LET'S CONNECT
                        </span>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to <span className="text-gradient">innovate</span>?
                        </h2>

                        <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
                            I'm always looking for new challenges in AI, Data Science, and Software Engineering.
                            Feel free to reach out for collaborations or just a chat.
                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.a
                        href="mailto:contact@example.com"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Gradient Background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-[var(--accent-yellow)] via-[var(--accent-red)] to-[var(--accent-green)] opacity-100" />

                        {/* Shine Effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                        {/* Content */}
                        <span className="relative z-10 text-[var(--bg-primary)]">Say Hello</span>
                        <Send className="relative z-10 w-5 h-5 text-[var(--bg-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center gap-6 mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-primary)]/50 backdrop-blur-sm border border-[var(--glass-border)] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-yellow)] transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -3 }}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.name}
                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
};
