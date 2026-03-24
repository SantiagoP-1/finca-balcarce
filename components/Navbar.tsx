"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-forest-900/5 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        <button
          onClick={() => handleNav("#inicio")}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Finca Balcarce - Inicio"
        >
          <div className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${scrolled ? "ring-2 ring-forest-200" : "ring-2 ring-white/30"}`}>
            <Image
              src="/images/logo.jpg"
              alt="Logo Finca Balcarce"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-forest-800" : "text-white"}`}>
            Finca <span className={scrolled ? "text-forest-500" : "text-forest-300"}>Balcarce</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-forest-400 relative group ${scrolled ? "text-earth-700" : "text-white/90"}`}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-forest-400 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav("#contacto")}
            className="bg-forest-600 hover:bg-forest-500 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-600/30 hover:-translate-y-0.5"
          >
            Contactar
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-forest-800 hover:bg-forest-50" : "text-white hover:bg-white/10"}`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-forest-100 px-4 py-6 shadow-xl">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="w-full text-left py-3 px-4 text-earth-700 font-medium rounded-lg hover:bg-forest-50 hover:text-forest-700 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNav("#contacto")}
            className="mt-4 w-full bg-forest-600 text-white py-3 rounded-full font-medium hover:bg-forest-500 transition-colors"
          >
            Contactar
          </button>
        </div>
      </div>
    </header>
  );
}
