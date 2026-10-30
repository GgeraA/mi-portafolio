
import { GraduationCap, CalendarDays } from "lucide-react";
import type { EducationRecord } from "../types/education";

interface EducationCardProps {
  education: EducationRecord;
}

export default function EducationCard({
  education,
}: EducationCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 transition-colors duration-300 sm:p-7 ${
        education.featured
          ? "border-violet-500/40 bg-violet-500/[0.07]"
          : "border-white/10 bg-[#14141E] hover:border-violet-500/30"
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
          <GraduationCap
            size={24}
            className="text-violet-400"
            aria-hidden="true"
          />
        </div>

        {education.featured && (
          <span className="rounded-full bg-violet-500/15 px-3 py-1.5 text-xs font-medium text-violet-300">
            Formación principal
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold leading-7 text-zinc-100">
        {education.degree}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {education.institution}
      </p>

      <div className="mt-auto pt-7">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <CalendarDays size={16} aria-hidden="true" />
          <span>
            {education.startYear} — {education.endYear}
          </span>
        </div>

        <div className="mt-4 border-t border-white/10 pt-4">
          <span className="text-xs font-medium text-violet-300">
            {education.status}
          </span>
        </div>
      </div>
    </article>
  );
}