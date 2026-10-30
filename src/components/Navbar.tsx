
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Educación", href: "#educacion" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090F]/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Navegación principal"


      >
        {/* Identidad */}
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-lg bg-violet-600 px-4 py-3 font-semibold text-white focus:not-sr-only"
        >
          Saltar al contenido principal
        </a>

        <a
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-1 text-xl font-extrabold tracking-tight"
        >
          <span className="text-white">GH</span>
          <span className="text-violet-400">.</span>
          <span className="font-medium text-zinc-300 transition group-hover:text-white">
            dev
          </span>
        </a>

        {/* Menú de escritorio */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contacto de escritorio */}
        <a
          href="#contacto"
          className="hidden items-center gap-2 rounded-lg border border-violet-500/30 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:border-violet-400 hover:bg-violet-500/10 lg:inline-flex"
        >
          Contacto
          <ArrowUpRight size={16} />
        </a>

        {/* Control móvil */}
        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((previous) => !previous)}
          className="rounded-lg border border-white/10 p-2 text-zinc-200 transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#09090F] px-6 py-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={closeMenu}
              className="flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-medium text-violet-300"
            >
              Contacto
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}