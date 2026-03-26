"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
  {
    src: "/images/campo1.jpg",
    alt: "Sistema de riego en campos de papa de Finca Balcarce, Balcarce",
    label: "Sistema de riego",
    descripcion: "Tecnología de riego de precisión para garantizar la calidad de cada cosecha.",
  },
  {
    src: "/images/campo2.jpg",
    alt: "Equipo de Finca Balcarce controlando el cultivo de papa en el campo",
    label: "Control de cultivo",
    descripcion: "Cada detalle importa. Nuestro equipo supervisa el crecimiento en el campo.",
  },
  {
    src: "/images/campo3.jpg",
    alt: "Campo de papas en flor en Balcarce, Buenos Aires - Finca Balcarce",
    label: "Cultivo en flor",
    descripcion: "Nuestros campos de papa en plena floración, señal de una cosecha de calidad.",
  },
];

export default function GaleriaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const prev = () => setSelected((s) => ((s ?? 0) - 1 + fotos.length) % fotos.length);
  const next = () => setSelected((s) => ((s ?? 0) + 1) % fotos.length);

  return (
    <section
      id="galeria"
      className="py-24 lg:py-32 bg-earth-900 overflow-hidden"
      aria-labelledby="galeria-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-300 text-sm font-medium tracking-widest uppercase mb-4 font-body">
            Nuestra finca
          </span>
          <h2
            id="galeria-title"
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            El campo que da{" "}
            <span className="text-forest-300 italic">origen</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-body">
            Desde Balcarce, cuidamos cada etapa del cultivo para que llegue lo mejor a tu mesa.
          </p>
        </div>

        {/* Grid — 1 foto grande + 2 chicas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Foto grande — campo en flor */}
          <button
            onClick={() => setSelected(0)}
            className="group relative rounded-3xl overflow-hidden aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-forest-400"
            aria-label="Ver campo en flor en detalle"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotos[0].src}
              alt={fotos[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <ZoomIn className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5">
              <span className="text-white font-display font-bold text-xl drop-shadow-lg">
                {fotos[0].label}
              </span>
              <p className="text-white/70 text-sm font-body mt-1 max-w-xs">{fotos[0].descripcion}</p>
            </div>
          </button>

          {/* Columna derecha — 2 fotos apiladas */}
          <div className="flex flex-col gap-4">
            {fotos.slice(1).map((foto, i) => (
              <button
                key={i}
                onClick={() => setSelected(i + 1)}
                className="group relative rounded-3xl overflow-hidden aspect-[16/9] focus:outline-none focus:ring-2 focus:ring-forest-400"
                aria-label={`Ver ${foto.label} en detalle`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-display font-bold text-lg drop-shadow-lg">
                    {foto.label}
                  </span>
                  <p className="text-white/70 text-xs font-body mt-0.5">{foto.descripcion}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Cerrar */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
            aria-label="Cerrar galería"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Contenido */}
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fotos[selected].src}
              alt={fotos[selected].alt}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="font-display text-xl font-bold text-white">
                {fotos[selected].label}
              </p>
              <p className="text-white/50 text-sm font-body mt-1">
                {fotos[selected].descripcion}
              </p>
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {fotos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selected ? "bg-white w-6" : "bg-white/40"
                }`}
                aria-label={`Ver foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
