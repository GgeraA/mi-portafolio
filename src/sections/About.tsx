
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Layers3,
  Database,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { educationRecords } from "../data/education";

const specialties = [
  {
    icon: Code2,
    title: "Desarrollo web",
    description: "Interfaces y aplicaciones funcionales.",
  },
  {
    icon: Layers3,
    title: "Software multiplataforma",
    description: "Experiencia en soluciones web y móviles.",
  },
  {
    icon: Database,
    title: "Gestión de datos",
    description: "Bases de datos SQL y NoSQL.",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative border-t border-white/5 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          number="01"
          eyebrow="Sobre mí"
          title="Más allá del código."
          description="Mi trayectoria combina formación en ingeniería, desarrollo de aplicaciones y participación en proyectos para organizaciones reales."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">

          {/* Columna izquierda */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-zinc-100">
              Desarrollo con propósito.
            </h3>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                Soy Gerardo Hernández López, desarrollador de
                software con formación en Ingeniería en
                Desarrollo y Gestión de Software.
              </p>

              <p>
                He participado en proyectos de desarrollo
                frontend, rediseño de aplicaciones móviles,
                sistemas de gestión y soluciones orientadas
                a la administración de información.
              </p>

              <p>
                Mi enfoque combina funcionalidad, usabilidad
                y organización del código, buscando crear
                soluciones que respondan a necesidades reales
                y puedan evolucionar con el tiempo.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {specialties.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#14141E] p-5 transition duration-300 hover:border-violet-500/40"
                  >
                    <Icon
                      size={23}
                      className="mb-4 text-violet-400"
                    />

                    <h4 className="text-sm font-semibold text-zinc-100">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#proyectos"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Conoce mis proyectos
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Columna derecha */}
          <div className="rounded-2xl border border-white/10 bg-[#14141E] p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-lg bg-violet-500/10 p-3">
                <GraduationCap
                  size={22}
                  className="text-violet-400"
                />
              </div>

              <div>
                <h3 className="font-semibold text-zinc-100">
                  Formación académica
                </h3>
                <p className="text-xs text-zinc-500">
                  Mi trayectoria educativa
                </p>
              </div>
            </div>

            <div className="relative ml-2 border-l border-violet-500/25 pl-7">
              {educationRecords.map((item, index) => (
                <div
                  key={item.degree}
                  className={
                    index === educationRecords.length - 1
                      ? "relative"
                      : "relative pb-9"
                  }
                >
                  <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-[3px] border-[#14141E] bg-violet-400" />

                  <p className="mb-2 text-xs font-semibold tracking-wide text-violet-400">
                    {item.startYear} — {item.endYear}
                  </p>

                  <h4 className="text-sm font-semibold leading-6 text-zinc-100">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.institution}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="text-sm leading-7 text-zinc-400">
                Formación complementaria en desarrollo web,
                inteligencia artificial, metodologías ágiles,
                Linux y ciberseguridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}