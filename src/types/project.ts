
export type ProjectCategory =
    | "Web"
    | "Full Stack"
    | "Mobile"
    | "Software";

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    period: string;
    organization?: string;
    role: string;
    category: ProjectCategory;
    featured: boolean;
    image?: string;
    technologies: string[];
    features: string[];
    contribution: string;
    github?: string;
    demo?: string;
}
