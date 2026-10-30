
export type ExperienceType =
  | "Profesional"
  | "Proyecto"
  | "Formación";

export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  type: ExperienceType;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  relatedProjectId?: string;
  website?: string;
}