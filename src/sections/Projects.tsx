
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import { projects } from "../data/projects";
import type { Project } from "../types/project";

const filters = [
    "Todos",
    "Web",
    "Full Stack",
    "Mobile",
    "Software",
] as const;

type ProjectFilter = (typeof filters)[number];

export default function Projects() {
    const [activeFilter, setActiveFilter] =
        useState<ProjectFilter>("Todos");

    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const filteredProjects = projects.filter(
        (project) =>
            activeFilter === "Todos" ||
            project.category === activeFilter
    );

    const featuredProject = filteredProjects.find(
        (project) => project.featured
    );

    const otherProjects = filteredProjects.filter(
        (project) => project.id !== featuredProject?.id
    );

    return (
        <section
            id="proyectos"
            className="border-t border-white/5 bg-[#09090F] py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <SectionHeading
                        number="03"
                        eyebrow="Proyectos"
                        title="Soluciones que he construido."
                        description="Una selección de proyectos y experiencias de desarrollo, enfocados en resolver necesidades reales mediante software."
                    />

                    <span className="mb-12 hidden items-center gap-2 text-sm text-zinc-500 lg:inline-flex">
                        {projects.length} proyectos
                        <ArrowUpRight size={16} />
                    </span>
                </div>

                {/* Filtros */}
                <div
                    role="group"
                    aria-label="Filtrar proyectos por categoría"
                    className="mb-10 flex flex-wrap gap-2"
                >
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setActiveFilter(filter)}
                                className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                                        ? "border-violet-500 bg-violet-600 text-white"
                                        : "border-white/10 bg-[#14141E] text-zinc-400 hover:border-violet-500/40 hover:text-white"
                                    }`}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                {/* Proyecto principal */}
                {featuredProject && (
                    <div className="mb-6">
                        <ProjectCard
                            project={featuredProject}
                            featured
                            onViewDetails={setSelectedProject}
                        />
                    </div>
                )}

                {/* Proyectos secundarios */}
                {otherProjects.length > 0 && (
                    <div className="grid gap-6 md:grid-cols-2">
                        {otherProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onViewDetails={setSelectedProject}
                            />
                        ))}
                    </div>
                )}

                {/* Sin resultados */}
                {filteredProjects.length === 0 && (
                    <div className="rounded-2xl border border-white/10 bg-[#14141E] px-6 py-16 text-center">
                        <p className="text-lg font-semibold text-zinc-200">
                            No hay proyectos en esta categoría.
                        </p>
                        <p className="mt-3 text-sm text-zinc-500">
                            Prueba con otro filtro para explorar mis trabajos.
                        </p>
                    </div>
                )}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}