
import {
  ArrowUpRight,
  Download,
  Mail,
  ChevronDown,
} from "lucide-react";

import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Iluminación ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-[550px] w-[550px] rounded-full bg-violet-600/15 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-700/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-4xl animate-fade-up">

          {/* Especialización */}
          <div className="mb-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />

            <span className="text-xs font-semibold tracking-wide text-violet-200">
              {profile.role} · {profile.specialization}
            </span>
          </div>

          {/* Presentación */}
          <p className="mb-5 text-base font-medium text-zinc-300 sm:text-lg">
            Hola, soy {profile.shortName}
            <span className="text-violet-400">.</span>
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Transformo ideas en
            <br className="hidden sm:block" />
            <span className="gradient-text">
              {" "}soluciones digitales.
            </span>
          </h1>

          {/* Descripción profesional */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {profile.description}
          </p>

          {/* Acciones principales */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
            >
              Explorar proyectos
              <ArrowUpRight size={18} />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}${profile.resume}`}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/40 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400"
            >
              Descargar CV
              <Download size={18} />
            </a>
          </div>

          {/* Redes y contacto */}
          <div className="mt-12 flex flex-wrap items-center gap-7">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar GitHub"
                className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-300"
              >
                {/* <Github size={19} /> */}
                GitHub
              </a>
            )}

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar LinkedIn"
              className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-300"
            >
              {/* <Linkedin size={19} /> */}
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.social.email}`}
              className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-300"
            >
              <Mail size={19} />
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de desplazamiento */}
      <a
        href="#sobre-mi"
        aria-label="Desplazarse a Sobre mí"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-500 transition hover:text-violet-300 lg:flex"
      >
        <span className="text-[10px] font-medium tracking-[0.2em]">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}