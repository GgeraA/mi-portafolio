
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Layers,
} from "lucide-react";

import type { TechnologyCategory } from "../data/technologies";

interface TechCardProps {
  category: TechnologyCategory;
}

const icons = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  mobile: Smartphone,
} as const;

export default function TechCard({
  category,
}: TechCardProps) {
  const Icon =
    icons[category.id as keyof typeof icons] ?? Layers;

  return (
    <article className="group h-full rounded-2xl border border-white/10 bg-[#14141E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#191923] sm:p-7">

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
        <Icon
          size={23}
          className="text-violet-400"
          aria-hidden="true"
        />
      </div>

      <h3 className="text-xl font-semibold text-zinc-100">
        {category.title}
      </h3>

      <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-500">
        {category.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <span
            key={tech.name}
            title={tech.level ?? tech.name}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors group-hover:border-violet-500/20"
          >
            {tech.name}
            {tech.level && (
              <span className="mt-1 block text-[10px] font-normal text-zinc-500">
                {tech.level}
              </span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}