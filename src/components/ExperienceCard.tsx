
import { useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Layers3,
} from "lucide-react";

import type { Experience } from "../types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

const typeIcons = {
  Profesional: BriefcaseBusiness,
  Proyecto: Layers3,
  Formación: GraduationCap,
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);
  const Icon = typeIcons[experience.type];
  const detailsId = `experience-details-${experience.id}`;

  return (
    <article className="group rounded-2xl border border-white/10 bg-[#14141E] p-6 transition-colors duration-300 hover:border-violet-500/40 sm:p-8">
      {/* Encabezado */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
            <Icon
              size={22}
              className="text-violet-400"
              aria-hidden="true"
            />
          </div>

          <div className="min-w-0">
            <span className="mb-2 inline-block text-xs font-medium text-violet-400">
              {experience.type}
            </span>

            <h3 className="text-xl font-bold tracking-tight text-zinc-100">
              {experience.role}
            </h3>

            <p className="mt-2 text-sm font-medium leading-6 text-zinc-300">
              {experience.company}
            </p>
          </div>
        </div>

        <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
          {experience.period}
        </span>
      </div>

      {/* Resumen */}
      <p className="mt-6 text-sm leading-7 text-zinc-400">
        {experience.summary}
      </p>

      {/* Tecnologías confirmadas */}
      {experience.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Contenido expandible */}
      <div className="mt-7 border-t border-white/10 pt-5">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-zinc-200 transition hover:text-violet-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
        >
          <span>
            {expanded
              ? "Ocultar responsabilidades"
              : "Ver responsabilidades"}
          </span>

          <ChevronDown
            size={18}
            className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <div id={detailsId} className="pt-6" hidden={!expanded}>
            <ul className="space-y-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {experience.relatedProjectId && (
              <a
                href={`#proyecto-${experience.relatedProjectId}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
              >
                Ver proyecto relacionado
                <ExternalLink size={16} />
              </a>
            )}

            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-300"
              >
                Sitio de la organización
                <ExternalLink size={16} />
              </a>
            )}
        </div>
      </div>
    </article>
  );
}