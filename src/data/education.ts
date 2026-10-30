
import type {
  EducationRecord,
  Certification,
} from "../types/education";

export const educationRecords: EducationRecord[] = [
  {
    id: "engineering",
    degree: "Ingeniería en Desarrollo y Gestión de Software",
    institution:
      "Universidad Tecnológica del Norte de Guanajuato",
    startYear: 2024,
    endYear: 2026,
    status: "Título en proceso",
    featured: true,
  },
  {
    id: "tsu",
    degree: "TSU en Desarrollo de Software Multiplataforma",
    institution:
      "Universidad Tecnológica del Norte de Guanajuato",
    startYear: 2022,
    endYear: 2024,
  },
  {
    id: "technician",
    degree: "Técnico en Programación",
    institution: "CBTis No. 148",
    startYear: 2019,
    endYear: 2022,
  },
];

export const certifications: Certification[] = [
  {
    id: "ai-production",
    name: "Desarrollo con IA: de 0 a Producción",
    issuer: "Big School",
    year: 2026,
    category: "IA",
  },
  {
    id: "ai-immersion",
    name: "Inmersión Inteligencia Artificial en la Práctica",
    issuer: "Daxus Latam",
    year: 2026,
    category: "IA",
  },
  {
    id: "powerbi-ai",
    name: "Acelerador de Carrera con Power BI + IA",
    issuer: "Daxus Latam",
    year: 2026,
    category: "Datos",
  },
  {
    id: "ai-development",
    name: "Desarrollo con IA",
    issuer: "Big School",
    year: 2025,
    category: "IA",
  },
  {
    id: "mendix",
    name: "Mendix Rapid Developer",
    issuer: "Mendix",
    year: 2025,
    category: "Desarrollo",
  },
  {
    id: "responsive",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: 2025,
    category: "Desarrollo",
  },
  {
    id: "scrum",
    name: "Scrum Fundamentals Certified",
    issuer: "ScrumStudy",
    year: 2025,
    category: "Metodologías",
  },
  {
    id: "cybersecurity",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: 2024,
    category: "Ciberseguridad",
  },
  {
    id: "aviation-cloud",
    name: "Desarrollo de Software y Tecnologías de Cómputo en la Nube para la Aviación",
    issuer: "Optimen",
    year: 2023,
    category: "Cloud & Sistemas",
  },
  {
    id: "linux",
    name: "NDG Linux Essentials",
    issuer: "Cisco Networking Academy",
    year: 2023,
    category: "Cloud & Sistemas",
  },
  {
    id: "python-iot",
    name: "Python básico para IoT",
    issuer: "Cisco Networking Academy",
    year: 2023,
    category: "Desarrollo",
  },
  {
    id: "javascript-iot",
    name: "JavaScript básico para IoT",
    issuer: "Cisco Networking Academy",
    year: 2023,
    category: "Desarrollo",
  },
  {
    id: "it-essentials",
    name: "IT Essentials",
    issuer: "Cisco Networking Academy",
    year: 2022,
    category: "Cloud & Sistemas",
  },
];