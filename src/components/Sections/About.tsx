import { AnimatedSection } from '../UI/AnimatedSection';
import { education } from '../../data/projects';

export const About = () => {
    return (
        <AnimatedSection id="about" className="section relative">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <span className="text-[var(--accent-green)] font-medium tracking-wider mb-4 block">ABOUT ME</span>
                    <h2 className="text-4xl font-bold mb-8">Engineer at heart, <br />Data Scientist by trade.</h2>

                    <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                        <p>
                            My journey began at <strong>Politecnico di Milano</strong>, where I built my foundation in Computing Systems Engineering.
                            Currently, I'm deepening my expertise in <strong>AI & Data Science</strong> at UnivPM, focusing on how we can extract meaningful insights from potential chaos.
                        </p>
                        <p>
                            I'm passionate about the intersection of Software Engineering and Artificial Intelligence.
                            Whether it's optimizing an ETL pipeline for massive datasets or fine-tuning a Transformer model for computer vision,
                            I thrive on solving complex technical challenges.
                        </p>
                    </div>
                </div>

                <div className="bg-[var(--bg-secondary)] p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        Education
                    </h3>

                    <div className="space-y-10 border-l-2 border-[var(--text-secondary)]/20 pl-8 ml-2">
                        {education.map((edu, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[39px] top-2 w-4 h-4 rounded-full bg-[var(--accent-yellow)] border-4 border-[var(--bg-secondary)]" />
                                <h4 className="text-xl font-bold">{edu.degree}</h4>
                                <p className="text-[var(--accent-green)] font-medium text-sm mb-2">{edu.institution}</p>
                                <span className="text-sm text-[var(--text-secondary)] block mb-3">{edu.period}</span>
                                <p className="text-[var(--text-secondary)] text-sm">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};
