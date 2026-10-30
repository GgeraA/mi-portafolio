
import {
  ArrowUpRight,
  Download,
  Code2,
  BriefcaseBusiness,
  Mail,
  MessageSquare,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";

const contactLinks = [
  {
    label: "Correo electrónico",
    value: profile.social.email,
    href: `mailto:${profile.social.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Conectemos profesionalmente",
    href: profile.social.linkedin,
    icon: BriefcaseBusiness,
    external: true,
  },
  ...(profile.social.github
    ? [
        {
          label: "GitHub",
          value: "Explora mis repositorios",
          href: profile.social.github,
          icon: Code2,
          external: true,
        },
      ]
    : []),
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#09090F] py-24 lg:py-36"
    >
      {/* Resplandor ambiental */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          number="06"
          eyebrow="Contacto"
          title="Construyamos algo juntos."
          description="¿Tienes un proyecto, una oportunidad profesional o una idea que quieras desarrollar? Me encantará conocerla."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">

          {/* Columna izquierda */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-2">
              <MessageSquare
                size={15}
                className="text-violet-400"
              />

              <span className="text-xs font-medium text-violet-200">
                Hablemos de tu próximo proyecto
              </span>
            </div>

            <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
              ¿Tienes una idea en mente?
              <span className="mt-2 block text-violet-400">
                Hagámosla realidad.
              </span>
            </h3>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
              Estoy interesado en colaborar en proyectos de
              desarrollo de software, aportar soluciones
              tecnológicas y explorar nuevas oportunidades
              profesionales.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.social.email}?subject=${encodeURIComponent(
                  "Contacto desde tu portafolio"
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700 motion-reduce:transform-none"
              >
                <Mail size={18} />
                Enviar correo
                <ArrowUpRight size={17} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}${profile.resume}`}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/40 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 motion-reduce:transform-none"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="rounded-2xl border border-white/10 bg-[#14141E] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-zinc-100">
              Encuéntrame aquí
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Elige el medio de contacto que prefieras.
            </p>

            <div className="mt-8 space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={
                      link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-violet-500/40 hover:bg-violet-500/[0.06]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
                      <Icon
                        size={20}
                        className="text-violet-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-zinc-100">
                        {link.label}
                      </p>

                      <p className="mt-1 break-all text-xs text-zinc-500">
                        {link.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="shrink-0 text-zinc-500 transition-colors group-hover:text-violet-400"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-7 border-t border-white/10 pt-6 text-xs leading-6 text-zinc-500">
              Puedes escribirme directamente por correo o
              contactarme mediante mis perfiles profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}