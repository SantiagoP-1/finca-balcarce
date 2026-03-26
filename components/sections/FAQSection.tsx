"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Los productos contienen aceite agregado?",
    respuesta:
      "No. Toda nuestra línea de productos es precocida al vapor, sin ningún tipo de aceite agregado. Esto permite mantener el sabor natural y reducir significativamente el contenido graso respecto a las papas fritas convencionales.",
  },
  {
    pregunta: "¿Son aptos para celíacos?",
    respuesta:
      "Sí, todos nuestros productos son Sin TACC (Trigo, Avena, Cebada y Centeno) y libres de gluten. Contamos con certificación correspondiente.",
  },
  {
    pregunta: "¿A qué temperatura debo almacenarlos?",
    respuesta:
      "Todos los productos deben almacenarse a −18°C o menos para mantener la cadena de frío y garantizar la calidad. Una vez descongelados, no deben volver a congelarse.",
  },
  {
    pregunta: "¿Cuál es el proceso de cocción de las Papas Crispy?",
    respuesta:
      "Las Papas Crispy se pueden preparar en horno convencional, sartén con mínimo aceite o airfryer. No requieren descongelado previo. En airfryer, aproximadamente 12-15 minutos a 200°C quedan perfectamente crocantes.",
  },
  {
    pregunta: "¿Cómo puedo convertirme en distribuidor?",
    respuesta:
      "Para sumarte como distribuidor necesitás contar con infraestructura para almacenar y transportar productos a −18°C o menos. Podés contactarnos a través del formulario de contacto o por WhatsApp y te contamos todos los detalles.",
  },
  {
    pregunta: "¿Dónde puedo comprar los productos?",
    respuesta:
      "Nuestros productos están disponibles en Carrefour, Día y supermercados Toledo. Si no los encontrás en tu sucursal habitual, podés consultarnos por WhatsApp para indicarte el punto de venta más cercano.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-warm-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-4 font-body">
            Preguntas frecuentes
          </span>
          <h2
            id="faq-title"
            className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6"
          >
            Todo lo que querés{" "}
            <span className="text-forest-600 italic">saber</span>
          </h2>
          <p className="text-earth-500 text-lg font-body">
            Si no encontrás la respuesta que buscás, escribinos por WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "border-forest-300 bg-forest-50 shadow-md shadow-forest-100"
                  : "border-earth-200 bg-white hover:border-forest-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-earth-900 text-base leading-snug">
                  {faq.pregunta}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  open === i ? "bg-forest-600 text-white" : "bg-earth-100 text-earth-500"
                }`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              <div
                className={`transition-all duration-400 ease-in-out ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-5 text-earth-600 text-sm leading-relaxed font-body">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-earth-500 text-sm font-body mb-4">
            ¿Tenés otra consulta?
          </p>
          <a
            href="https://wa.me/5491125417865?text=Hola%2C%20quiero%20información%20sobre%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe59] text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
