
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import EducationCard from "../components/EducationCard";
import CertificationCard from "../components/CertificationCard";

import {
  educationRecords,
  certifications,
} from "../data/education";

import type {
  CertificationCategory,
} from "../types/education";

type Filter = "Todos" | CertificationCategory;

const filters: Filter[] = [
  "Todos",
  "IA",
  "Desarrollo",
  "Cloud & Sistemas",
  "Datos",
  "Metodologías",
  "Ciberseguridad",
];

const INITIAL_VISIBLE = 6;

export default function Education() {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("Todos");

  const [showAll, setShowAll] = useState(false);

  const filtered = certifications.filter(
    (certification) =>
      activeFilter === "Todos" ||
      certification.category === activeFilter
  );

  const visible = showAll
    ? filtered
    : filtered.slice(0, INITIAL_VISIBLE);

  const hasMore = filtered.length > INITIAL_VISIBLE;

  function changeFilter(filter: Filter) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  return (
    <section
      id="educacion"
      className="border-t border-white/5 bg-[#09090F] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          number="05"
          eyebrow="Educación y certificaciones"
          title="Aprendizaje continuo."
          description="Mi formación académica y preparación complementaria en desarrollo de software, inteligencia artificial, datos y tecnologías de la información."
        />

        {/* Formación académica */}
        <div className="mb-20">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
              Formación académica
            </h3>

            <span className="text-xs text-zinc-500">
              {educationRecords.length} estudios
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {educationRecords.map((education) => (
              <EducationCard
                key={education.id}
                education={education}
              />
            ))}
          </div>
        </div>

        {/* Certificaciones y cursos */}
        <div>
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                Certificaciones y cursos
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                Formación complementaria organizada por áreas
                de conocimiento.
              </p>
            </div>

            <span className="text-xs text-zinc-500">
              {filtered.length} resultados
            </span>
          </div>

          {/* Filtros */}
          <div
            role="group"
            aria-label="Filtrar certificaciones"
            className="mb-9 flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const selected = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => changeFilter(filter)}
                  className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                    selected
                      ? "border-violet-500 bg-violet-600 text-white"
                      : "border-white/10 bg-[#14141E] text-zinc-400 hover:border-violet-500/40 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Cuadrícula */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
              />
            ))}
          </div>

          {/* Mostrar más */}
          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((previous) => !previous)}
                aria-expanded={showAll}
                className="inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/20"
              >
                {showAll
                  ? "Mostrar menos"
                  : `Ver todas (${filtered.length})`}

                {showAll ? (
                  <ChevronUp size={17} />
                ) : (
                  <ChevronDown size={17} />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}