"use client";

const cadenas = [
  {
    nombre: "Carrefour",
    logo: "/images/carrefour.png",
    bg: "bg-white",
  },
  {
    nombre: "Día",
    logo: "/images/dia.png",
    bg: "bg-white",
  },
  {
    nombre: "Toledo",
    logo: "/images/toledo.png",
    bg: "bg-[#0d2240]",
  },
  {
    nombre: "Piantoni",
    logo: "/images/piantoni.png",
    bg: "bg-white",
  },
];

// Triplicamos para que el loop sea fluido
const track = [...cadenas, ...cadenas, ...cadenas];

export default function SupermercadosSection() {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-3 font-body">
          Dónde encontrarnos
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900">
          Presentes en las principales{" "}
          <span className="text-forest-600 italic">cadenas</span>
        </h2>
      </div>

      {/* Carrusel */}
      <div className="relative">
        {/* Fades laterales */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 animate-marquee">
          {track.map((cadena, i) => (
            <div
              key={i}
              className={`shrink-0 flex items-center justify-center rounded-2xl border border-earth-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${cadena.bg}`}
              style={{ width: 180, height: 100 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cadena.logo}
                alt={`Logo ${cadena.nombre}`}
                className="max-h-16 max-w-36 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Texto inferior */}
      <p className="text-center text-earth-400 text-sm font-body mt-10">
        ¿No encontrás nuestros productos en tu sucursal?{" "}
        <a
          href="https://wa.me/5491125417865?text=Hola%2C%20quiero%20saber%20d%C3%B3nde%20encontrar%20los%20productos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest-600 hover:text-forest-500 font-medium underline underline-offset-2 transition-colors"
        >
          Consultanos por WhatsApp
        </a>
      </p>
    </section>
  );
}
