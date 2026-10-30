
import type { Project } from "../types/project";

export const projects: Project[] = [
        {
        id: "pos-system",
        title: "Sistema de Punto de Venta",
        subtitle: "Plataforma de gestión comercial",
        description:
            "Sistema de punto de venta desarrollado para la gestión de inventario, registro de ventas, usuarios y estadísticas, con integración de activación de licencias.",
        period: "Mayo — Octubre 2026",
        organization: "GDG - Desarrollo y Gestion GH",
        role: "Desarrollador principal",
        category: "Full Stack",
        featured: true,
        technologies: ["JavaScript", "React", "Node.js", "SQLite"],
        features: [
            "Desarrollo de sistema de puntos de venta con submódulos de inventario, historial de ventas, cuentas por cobrar y estadísticas.",
            "Implementación de lector de código de barras, impresión de tickets y respaldo de datos.",
            "Implementación de un módulo de inicio de sesión para la gestión de usuarios por roles.",
            "Integración de activación de licencias con duración determinada por el sistema como función de suscripción.",
        ],
        contribution:
            "Actué como desarrollador principal en la creación del sistema de punto de venta como proyecto personal.",
    },
    {
        id: "water-management",
        title: "Sistema de Gestión de Agua Potable",
        subtitle: "Plataforma administrativa",
        description:
            "Sistema desarrollado para apoyar la administración del Comité de Agua Potable San Gabriel, centralizando información y operaciones administrativas.",
        period: "Mayo — Agosto 2024",
        organization: "Comité de Agua Potable San Gabriel",
        role: "Desarrollador principal",
        category: "Full Stack",
        featured: false,
        technologies: ["Angular", "Firebase"],
        features: [
            "Gestión de usuarios: creación, edición y eliminación.",
            "Almacenamiento de información en la nube.",
            "Registro de asistencia a reuniones del comité.",
            "Módulo de cobro de servicios de agua.",
        ],
        contribution:
            "Participé como desarrollador principal en la creación del sistema y la integración de módulos administrativos.",
    },
    {
        id: "xibermex",
        title: "Desarrollo Web y Rediseño Móvil",
        subtitle: "Sitio corporativo e interfaces móviles",
        description:
            "Desarrollo de una página web corporativa y participación en el rediseño visual de una aplicación móvil para mejorar la presentación de los proyectos de la empresa.",
        period: "Enero — Abril 2026",
        organization: "Xibermex Robotics and Systems de México",
        role: "Desarrollador Frontend",
        category: "Web",
        featured: false,
        technologies: ["React", "TypeScript", "TailwindCSS", "Hostinger"],
        features: [
            "Desarrollo de una página web corporativa.",
            "Creación de módulos personalizados para presentar proyectos.",
            "Rediseño visual de pantallas de una aplicación móvil.",
        ],
        contribution:
            "Desarrollé interfaces web y trabajé en la mejora visual de las pantallas existentes de una aplicación móvil.",
        demo: "https://xiber-mex.vercel.app/",
    },
    {
        id: "minsait",
        title: "Plataforma de Gestión de Vacantes",
        subtitle: "Reclutamiento y evaluación curricular",
        description:
            "Proyecto de gestión de perfiles de vacantes y evaluación curricular para apoyar los procesos de selección de personal.",
        period: "Enero — Abril 2024",
        organization: "Minsait by Indra Company",
        role: "Product Owner",
        category: "Software",
        featured: false,
        technologies: ["Angular", "Spring Boot", "Bootstrap"],
        features: [
            "Administración de perfiles de vacantes.",
            "Publicación de perfiles de trabajo.",
            "Sistema de evaluación curricular.",
            "Evaluación de candidatos según perfiles y habilidades.",
        ],
        contribution:
            "Participé como Product Owner en el proyecto de gestión de vacantes y evaluación curricular.",
    },
];