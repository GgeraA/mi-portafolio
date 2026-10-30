
export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  status?: string;
  featured?: boolean;
}

export type CertificationCategory =
  | "IA"
  | "Desarrollo"
  | "Cloud & Sistemas"
  | "Datos"
  | "Metodologías"
  | "Ciberseguridad";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
  category: CertificationCategory;
  credentialUrl?: string;
  description?: string;
}