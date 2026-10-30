
import SectionHeading from "../components/SectionHeading";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";

export default function Experience() {
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.startDate.localeCompare(a.startDate)
  );

  return (
    <section
      id="experiencia"
      className="relative border-t border-white/5 bg-[#0D0D14] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          number="04"
          eyebrow="Experiencia"
          title="Mi trayectoria profesional."
          description="Experiencias y proyectos que han contribuido a mi desarrollo como profesional del software."
        />

        <div className="relative">
          {/* Línea continua de la trayectoria */}
          <div
            aria-hidden="true"
            className="absolute bottom-10 left-[7px] top-3 w-px bg-gradient-to-b from-violet-500/80 via-violet-500/30 to-transparent lg:left-[220px]"
          />

          <ol className="space-y-10 lg:space-y-12">
            {sortedExperiences.map((experience) => (
              <li
                key={experience.id}
                className="relative grid grid-cols-[16px_minmax(0,1fr)] gap-5 lg:grid-cols-[200px_16px_minmax(0,1fr)] lg:gap-6"
              >
                {/* Fecha para escritorio */}
                <div className="hidden pt-6 text-right lg:block">
                  <p className="text-base font-semibold text-zinc-200">
                    {experience.startDate.slice(0, 4)}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    {experience.period}
                  </p>
                </div>

                {/* Marcador */}
                <div className="relative z-10 pt-7">
                  <span
                    aria-hidden="true"
                    className="block h-[15px] w-[15px] rounded-full border-[4px] border-[#0D0D14] bg-violet-400 ring-1 ring-violet-500/40"
                  />
                </div>

                {/* Tarjeta */}
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}