
import {
  ArrowUp,
  Code2,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import { profile } from "../data/profile";

const footerNavigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0D0D14]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Contenido principal */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-16 lg:py-20">

          {/* Identidad */}
          <div>
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="inline-flex items-center gap-1 text-2xl font-extrabold tracking-tight"
            >
              <span className="text-white">GH</span>
              <span className="text-violet-400">.</span>
              <span className="font-medium text-zinc-300">
                dev
              </span>
            </a>

            <p className="mt-5 text-sm font-medium text-zinc-200">
              {profile.role} · {profile.specialization}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
              Desarrollo soluciones digitales enfocadas
              en funcionalidad, usabilidad y evolución
              tecnológica.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="mb-6 text-sm font-semibold text-zinc-100">
              Navegación
            </h3>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div>
            <h3 className="mb-6 text-sm font-semibold text-zinc-100">
              Conecta conmigo
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-violet-500/40 hover:text-violet-300"
                >
                  <Code2 size={19} />
                </a>
              )}

              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-violet-500/40 hover:text-violet-300"
                >
                  <BriefcaseBusiness size={19} />
                </a>
              )}

              <a
                href={`mailto:${profile.social.email}`}
                aria-label="Enviar correo electrónico"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:border-violet-500/40 hover:text-violet-300"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-zinc-500">
            © {year} {profile.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <span className="text-xs text-zinc-600">
              Desarrollado con React + TypeScript
            </span>

            <a
              href="#inicio"
              aria-label="Volver al inicio de la página"
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-violet-300"
            >
              Volver arriba
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}