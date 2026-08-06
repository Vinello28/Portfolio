export interface Project {
    title: string;
    category: 'AI/ML' | 'Data' | 'NLP' | 'Security' | 'Software' | 'Web';
    description: string;
    technologies: string[];
    role: string;
    githubUrl?: string;
    liveUrl?: string;
    teamProject?: boolean;
    featured?: boolean;
}

export type SkillIcon = 'brain' | 'code' | 'server' | 'palette';
export type SkillAccent = 'yellow' | 'red' | 'green' | 'blue';

export interface Skill {
    category: string;
    items: string[];
    /** Keys are checked exhaustively by the maps in the Skills section. */
    icon: SkillIcon;
    accent: SkillAccent;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description?: string;
}
