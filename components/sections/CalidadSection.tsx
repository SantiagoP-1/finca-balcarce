"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { Droplets, Leaf, ScanLine, Thermometer, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Sin aceite agregado",
    description:
      "Nuestro proceso de precocción al vapor elimina la necesidad de aceite, reduciendo significativamente la grasa total sin sacrificar sabor ni textura.",
  },
  {
    icon: Leaf,
    title: "Propiedades intactas",
    description:
      "Mantenemos intactas todas las propiedades naturales de la papa. Sin conservantes, sin colorantes. Solo producto puro desde el campo.",
  },
  {
    icon: ScanLine,
    title: "Trazabilidad completa",
    description:
      "Integramos los eslabones de siembra, cosecha, selección, producción y comercialización. Sabés exactamente de dónde viene lo que comés.",
  },
  {
    icon: Thermometer,
    title: "Cadena de frío garantizada",
    description:
      "Tecnología IQF (Individual Quick Freezing) que preserva cada producto a −18°C desde el congelado hasta la entrega.",
  },
];

export default function CalidadSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="calidad"
      className="py-24 lg:py-32 bg-warm-white overflow-hidden"
      aria-labelledby="calidad-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`reveal ${visible ? "visible" : ""}`}
          >
            <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-4 font-body">
              Nuestro compromiso
            </span>
            <h2
              id="calidad-title"
              className="font-display text-4xl sm:text-5xl font-bold text-earth-900 leading-tight mb-8"
            >
              Calidad que se{" "}
              <span className="text-forest-600 italic">ve y se siente</span>
            </h2>

            <div className="space-y-4">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-5 p-5 rounded-2xl hover:bg-forest-50 transition-colors group"
                >
                  <div className="shrink-0 w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center group-hover:bg-forest-200 transition-colors mt-0.5">
                    <Icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-earth-900 mb-1">{title}</h3>
                    <p className="text-earth-500 text-sm leading-relaxed font-body">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image + stats */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest-900/10" style={{height: "380px"}}>
              <Image
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=900&q=80"
                alt="Papas frescas cosechadas - calidad y trazabilidad Finca Balcarce"
                fill
                className="object-cover"
                loading="lazy"
              />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                <p className="font-display font-bold text-earth-900 text-sm mb-3">Certificaciones</p>
                <div className="flex flex-wrap gap-2">
                  {["BPM", "HACCP", "SENASA", "Sin TACC"].map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-1.5 text-xs font-medium text-forest-700 bg-forest-50 border border-forest-200 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "+40", label: "Años de experiencia" },
                { value: "−18°C", label: "Cadena de frío" },
                { value: "100%", label: "Trazabilidad" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-earth-50 rounded-2xl p-4 text-center hover:bg-forest-50 transition-colors"
                >
                  <p className="font-display text-2xl font-bold text-forest-700 mb-1">{stat.value}</p>
                  <p className="text-earth-500 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
