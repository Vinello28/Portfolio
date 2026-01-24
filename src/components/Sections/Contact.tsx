import { AnimatedSection } from '../UI/AnimatedSection';
import { Mail, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
    return (
        <AnimatedSection id="contact" className="section mb-20">
            <div className="bg-[var(--bg-secondary)] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Ready to <span className="text-[var(--accent-green)]">innovate</span>?
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
                        I'm always looking for new challenges in AI, Data Science, and Software Engineering.
                        Feel free to reach out for collaborations or just a chat.
                    </p>

                    <a
                        href="mailto:contact@example.com"
                        className="inline-flex items-center gap-3 bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform mb-12"
                    >
                        Say Hello <Mail className="w-5 h-5" />
                    </a>

                    <div className="flex justify-center gap-8">
                        <a href="https://github.com/Vinello28" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[var(--accent-yellow)] transition-colors">
                            GitHub <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a href="#" className="flex items-center gap-2 font-medium hover:text-[var(--accent-yellow)] transition-colors">
                            LinkedIn <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent-green)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
            </div>
        </AnimatedSection>
    );
};
