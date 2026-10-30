
import { useEffect, useRef } from "react";
import {
    ArrowUpRight,
    X,
    BriefcaseBusiness,
} from "lucide-react";

import type { Project } from "../types/project";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (project) {
            if (!dialog.open) dialog.showModal();
        } else if (dialog.open) {
            dialog.close();
        }
    }, [project]);

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={(event) => {
                if (event.target === dialogRef.current) {
                    dialogRef.current?.close();
                }
            }}
            aria-labelledby="project-dialog-title"
            className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#14141E] p-0 text-zinc-100 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        >
            {project && (
                <div>
                    <div className="sticky top-0 z-10 flex justify-end border-b border-white/10 bg-[#14141E]/95 px-5 py-4 backdrop-blur">
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Cerrar detalles"
                            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {project.image && (
                        <img
                            src={`${import.meta.env.BASE_URL}${project.image}`}
                            alt={`Captura de ${project.title}`}
                            className="aspect-video w-full object-cover"
                        />
                    )}

                    <div className="space-y-8 p-6 sm:p-10">
                        <div>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
                                {project.category} / {project.period}
                            </p>

                            <h2
                                id="project-dialog-title"
                                className="text-2xl font-bold tracking-tight sm:text-3xl"
                            >
                                {project.title}
                            </h2>

                            <p className="mt-3 text-zinc-400">
                                {project.subtitle}
                            </p>
                        </div>

                        <p className="leading-8 text-zinc-300">
                            {project.description}
                        </p>

                        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BriefcaseBusiness
                                size={20}
                                className="mt-1 shrink-0 text-violet-400"
                            />
                            <div>
                                <p className="font-semibold">{project.role}</p>
                                <p className="mt-1 text-sm text-zinc-400">
                                    {project.organization}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-lg font-semibold">
                                Funcionalidades
                            </h3>

                            <ul className="space-y-3">
                                {project.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-3 text-sm leading-7 text-zinc-400"
                                    >
                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-3 text-lg font-semibold">
                                Mi participación
                            </h3>
                            <p className="text-sm leading-8 text-zinc-400">
                                {project.contribution}
                            </p>
                        </div>

                        {project.technologies.length > 0 && (
                            <div>
                                <h3 className="mb-4 text-lg font-semibold">
                                    Tecnologías utilizadas
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-violet-500/10 px-3 py-2 text-xs text-violet-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(project.github || project.demo) && (
                            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-medium hover:bg-white/10"
                                    >
                                        {/* <Github size={17} /> */}
                                        Ver código
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-3 text-sm font-medium hover:bg-violet-700"
                                    >
                                        Ver demostración
                                        <ArrowUpRight size={17} />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </dialog>
    );
}