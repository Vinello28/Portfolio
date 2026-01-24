export interface Project {
    title: string;
    category: 'AI/ML' | 'Data' | 'NLP' | 'Software' | 'Web';
    description: string;
    technologies: string[];
    role: string;
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}
