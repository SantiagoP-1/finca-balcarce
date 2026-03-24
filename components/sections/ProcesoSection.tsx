"use client";

import { useReveal } from "@/lib/useReveal";
import { Sprout, Tractor, Factory, Snowflake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Sprout,
    title: "Cultivo",
    description:
      "Seleccionamos las mejores semillas y cultivamos en suelos pampeanos ricos en nutrientes. Usamos técnicas de agricultura sustentable que respetan el medioambiente.",
    color: "forest",
  },
  {
    number: "02",
    icon: Tractor,
    title: "Cosecha",
    description:
      "Cosechamos en el momento óptimo de madurez con maquinaria moderna de última generación para preservar la calidad e integridad de cada papa.",
    color: "forest",
  },
  {
    number: "03",
    icon: Factory,
    title: "Procesamiento",
    description:
      "Lavado, pelado, cortado y precocción al vapor en nuestra planta de última generación, cumpliendo con los más altos estándares de higiene y calidad alimentaria.",
    color: "forest",
  },
  {
    number: "04",
    icon: Snowflake,
    title: "Congelado IQF",
    description:
      "Tecnología de congelado individual rápido (IQF) que preserva sabor, textura y valor nutricional, sin aceite ni aditivos, listas para llegar a tu cocina.",
    color: "forest",
  },
];

export default function ProcesoSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="proceso"
      className="py-24 lg:py-32 bg-forest-900 relative overflow-hidden"
      aria-labelledby="proceso-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-500/30 to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 reveal ${visible ? "visible" : ""}`}
        >
          <span className="inline-block text-forest-300 text-sm font-medium tracking-widest uppercase mb-4 font-body">
            Nuestro proceso
          </span>
          <h2
            id="proceso-title"
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Del campo al{" "}
            <span className="text-forest-300 italic">congelador</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Controlamos cada etapa de la producción para garantizar la máxima calidad y
            trazabilidad en cada producto que llega a tu mesa.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-full h-px bg-gradient-to-r from-forest-500/50 to-forest-700/20 z-10" />
                )}

                <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-forest-400/30 rounded-3xl p-7 transition-all duration-500 group-hover:-translate-y-1">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-forest-600/30 group-hover:bg-forest-500/40 rounded-2xl flex items-center justify-center transition-colors">
                      <Icon className="w-7 h-7 text-forest-300" />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm font-body text-center sm:text-left">
            🏆 Proceso certificado bajo normas{" "}
            <strong className="text-white">BPM, HACCP</strong> y{" "}
            <strong className="text-white">SENASA</strong>
          </p>
          <button
            onClick={() =>
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="shrink-0 bg-forest-500 hover:bg-forest-400 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            Solicitar información
          </button>
        </div>
      </div>
    </section>
  );
}
