
import { ArrowUpRight, ImageIcon } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
    onViewDetails: (project: Project) => void;
}

export default function ProjectCard({
    project,
    featured = false,
    onViewDetails,
}: ProjectCardProps) {
    return (
        <article
            id={`proyecto-${project.id}`}
            className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14141E] transition-all duration-300 hover:border-violet-500/40 ${featured ? "lg:grid lg:grid-cols-2" : ""
                }`}
        >
            {/* Vista previa */}
            <div className="relative aspect-video overflow-hidden bg-[#1C1C28] lg:group-hover:bg-[#222233]">
                {project.image ? (
                    <img
                        src={`${import.meta.env.BASE_URL}${project.image}`}
                        alt={`Captura del proyecto ${project.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 text-zinc-600">
                        <ImageIcon size={34} strokeWidth={1.3} />
                        <span className="text-xs">
                            Vista previa pendiente
                        </span>
                    </div>
                )}

                <span className="absolute left-5 top-5 rounded-full border border-violet-500/30 bg-[#151021]/90 px-3 py-1.5 text-xs font-medium text-violet-300 backdrop-blur">
                    {project.category}
                </span>
            </div>

            {/* Contenido */}
            <div
                className={`flex flex-1 flex-col p-6 ${featured ? "lg:justify-center lg:p-10" : ""
                    }`}
            >
                {featured && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                        Proyecto destacado
                    </p>
                )}

                <p className="mb-2 text-xs text-zinc-500">
                    {project.organization ?? project.period}
                </p>

                <h3
                    className={`font-bold tracking-tight text-zinc-100 ${featured ? "text-2xl lg:text-3xl" : "text-xl"
                        }`}
                >
                    {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {project.description}
                </p>

                {project.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => onViewDetails(project)}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-violet-400 transition hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
                >
                    Ver detalles
                    <ArrowUpRight size={17} />
                </button>
            </div>
        </article>
    );
}