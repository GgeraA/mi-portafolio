
import {
  BrainCircuit,
  Code2,
  Cloud,
  Database,
  Users,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

import type {
  Certification,
  CertificationCategory,
} from "../types/education";

interface CertificationCardProps {
  certification: Certification;
}

const categoryIcons = {
  IA: BrainCircuit,
  Desarrollo: Code2,
  "Cloud & Sistemas": Cloud,
  Datos: Database,
  Metodologías: Users,
  Ciberseguridad: ShieldCheck,
} satisfies Record<CertificationCategory, typeof Code2>;

export default function CertificationCard({
  certification,
}: CertificationCardProps) {
  const Icon = categoryIcons[certification.category];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#14141E] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#191923] motion-reduce:transform-none sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
          <Icon
            size={23}
            className="text-violet-400"
            aria-hidden="true"
          />
        </div>

        <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
          {certification.year}
        </span>
      </div>

      <span className="mb-3 text-xs font-medium text-violet-400">
        {certification.category}
      </span>

      <h3 className="text-base font-semibold leading-7 text-zinc-100">
        {certification.name}
      </h3>

      <p className="mt-3 text-sm text-zinc-500">
        {certification.issuer}
      </p>

      <div className="mt-auto pt-6">
        {certification.credentialUrl ? (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
          >
            Ver credencial
            <ExternalLink size={16} />
          </a>
        ) : (
          <span className="text-xs text-zinc-600">
            Credencial no enlazada
          </span>
        )}
      </div>
    </article>
  );
}