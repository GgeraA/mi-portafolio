
import SectionHeading from "../components/SectionHeading";
import TechCard from "../components/TechCard";

import { technologyCategories } from "../data/technologies";

export default function TechStack() {
  return (
    <section
      id="tecnologias"
      className="relative border-t border-white/5 bg-[#0D0D14] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          number="02"
          eyebrow="Tecnologías"
          title="Herramientas con las que construyo."
          description="Tecnologías y lenguajes con los que he trabajado durante mi formación y experiencia en desarrollo de software."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologyCategories.map((category) => (
            <TechCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-7 text-zinc-500">
          Continúo ampliando mis conocimientos y explorando
          nuevas herramientas para desarrollar soluciones
          más eficientes y mantenibles.
        </p>
      </div>
    </section>
  );
}