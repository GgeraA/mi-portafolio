
export interface Technology {
  name: string;
  level?: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Desarrollo de interfaces y experiencias web.",
    technologies: [
      { name: "Angular" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Lógica de aplicaciones y desarrollo de software.",
    technologies: [
      { name: "Java" },
      { name: "Flask" },
      { name: "COBOL" },
      { name: "Python", level: "Conocimientos básicos" },
    ],
  },
  {
    id: "databases",
    title: "Bases de datos",
    description:
      "Almacenamiento y administración de información.",
    technologies: [
      { name: "SQL Server" },
      { name: "Firebase" },
      { name: "MongoDB" },
    ],
  },
  {
    id: "mobile",
    title: "Multiplataforma",
    description:
      "Conocimientos prácticos en desarrollo móvil.",
    technologies: [
      { name: "Dart" },
      { name: "Kotlin" },
      { name: "Android Studio" },
    ],
  },
];