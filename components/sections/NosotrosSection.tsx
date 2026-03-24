"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { MapPin, Award, Sprout } from "lucide-react";

export default function NosotrosSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="nosotros"
      className="py-24 lg:py-32 bg-warm-white overflow-hidden"
      aria-labelledby="nosotros-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`relative reveal ${visible ? "visible" : ""}`}
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl shadow-forest-900/15 bg-earth-100 flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900&q=80"
                alt="Campo de cultivo de papas en Balcarce, Buenos Aires - Finca Balcarce"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-forest-900/10 border border-earth-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <p className="font-display font-semibold text-earth-800 text-sm">Balcarce</p>
                  <p className="text-earth-500 text-xs">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-forest-100 rounded-2xl -z-10 rotate-12" />
          </div>

          {/* Text side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-4 font-body">
                Quiénes somos
              </span>
              <h2
                id="nosotros-title"
                className="font-display text-4xl sm:text-5xl font-bold text-earth-900 leading-tight mb-6"
              >
                Más de{" "}
                <span className="text-forest-600 italic">40 años</span>{" "}
                en el campo
              </h2>
              <p className="text-earth-600 text-lg leading-relaxed font-body">
                Hace más de 40 años sembramos y cosechamos las mejores papas para el mercado
                argentino. Desde Balcarce, la capital nacional de la papa, estamos presentes
                en todos los detalles del proceso productivo.
              </p>
            </div>

            <p className="text-earth-600 leading-relaxed font-body">
              Integramos todos los eslabones de la cadena:{" "}
              <strong className="text-earth-800">siembra, cosecha, selección, producción y comercialización</strong>.
              Nuestra tecnología de congelado IQF nos permite mantener intactas
              todas las propiedades naturales de la papa, sin aceite agregado y sin conservantes.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: Sprout,
                  title: "+40 años",
                  desc: "De experiencia en el cultivo de papa",
                },
                {
                  icon: Award,
                  title: "Proceso propio",
                  desc: "De la siembra a la comercialización",
                },
                {
                  icon: MapPin,
                  title: "Balcarce",
                  desc: "Capital nacional de la papa",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-earth-50 rounded-2xl p-4 hover:bg-forest-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-forest-200 transition-colors">
                    <Icon className="w-5 h-5 text-forest-600" />
                  </div>
                  <h3 className="font-display font-semibold text-earth-800 text-sm mb-1">{title}</h3>
                  <p className="text-earth-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
