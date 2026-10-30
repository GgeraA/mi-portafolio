
import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
    {
    id: "pos-system",
    company: "GDG - Desarrollo y Gestion GH",
    role: "Desarrollador principal",
    period: "Mayo — Octubre 2026",
    startDate: "2026-05",
    endDate: "2026-10",
    type: "Proyecto",
    summary:
      "Desarrollo de un sistema de punto de venta con gestión de inventario, historial de ventas, cuentas por cobrar y estadísticas",
    responsibilities: [
      "Desarrollo de sistema de puntos de venta con submódulos de inventario, registro de ventas, usuarios por roles, estadísticas y reportes.",
      "Implementación de módulos de incio de sesión para la gestión de usuarios por roles.",
      "Implementación de lector de código de barras, impresion de tickets y respaldo de datos.",
      "Integración de activación de licencias con duración determnada por el sistema como función de suscripción",
    ],
    technologies: ["JavaScript", "React", "Node.js", "SQLite"],
    relatedProjectId: "pos-system",
  },
  {
    id: "xibermex",
    company: "Xibermex Robotics and Systems de México",
    role: "Desarrollador Frontend",
    period: "Enero — Abril 2026",
    startDate: "2026-01",
    endDate: "2026-04",
    type: "Profesional",
    summary:
      "Desarrollo de una página web corporativa y rediseño visual de una aplicación móvil.",
    responsibilities: [
      "Desarrollo de una página web para fortalecer la identidad digital de la empresa.",
      "Creación de módulos personalizados para presentar proyectos desarrollados.",
      "Rediseño visual de pantallas existentes de una aplicación móvil.",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "Hostinger"],
    relatedProjectId: "xibermex",
  },
  {
    id: "water-committee",
    company: "Comité de Agua Potable San Gabriel",
    role: "Desarrollador principal",
    period: "Mayo — Agosto 2024",
    startDate: "2024-05",
    endDate: "2024-08",
    type: "Proyecto",
    summary:
      "Desarrollo de un sistema administrativo con almacenamiento en la nube y módulos de gestión.",
    responsibilities: [
      "Desarrollo de funcionalidades para crear, editar y eliminar usuarios.",
      "Implementación de almacenamiento de información en la nube.",
      "Integración de un módulo de asistencia a reuniones del comité.",
      "Integración de funcionalidades para el cobro de servicios de agua.",
    ],
    technologies: ["Angular", "Firebase"],
    relatedProjectId: "water-management",
  },
  {
    id: "minsait",
    company: "Minsait by Indra Company",
    role: "Product Owner",
    period: "Enero — Abril 2024",
    startDate: "2024-01",
    endDate: "2024-04",
    type: "Profesional",
    summary:
      "Participación en una plataforma de perfiles de vacantes y evaluación curricular.",
    responsibilities: [
      "Participación en la creación y administración de perfiles de vacantes.",
      "Gestión de funcionalidades para publicar perfiles de trabajo.",
      "Participación en la integración de un sistema de evaluación curricular.",
      "Enfoque en la evaluación de candidatos según perfiles y habilidades.",
    ],
    technologies: ["Angular", "Spring Boot", "Bootstrap"],
    relatedProjectId: "minsait",
  },
  {
    id: "itiva",
    company: "Itiva — Fábrica de Software",
    role: "Capacitación en COBOL",
    period: "Enero — Abril 2024",
    startDate: "2024-01",
    endDate: "2024-04",
    type: "Formación",
    summary:
      "Formación práctica en COBOL y desarrollo de operaciones de gestión de datos.",
    responsibilities: [
      "Aprendizaje de fundamentos del lenguaje COBOL.",
      "Desarrollo de operaciones CRUD.",
      "Práctica de manejo y control de datos.",
      "Ejecución de programas utilizando IDE OpenCobol.",
    ],
    technologies: ["COBOL", "OpenCobolIDE"],
  },
];
