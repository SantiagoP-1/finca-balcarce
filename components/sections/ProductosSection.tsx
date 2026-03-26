"use client";

import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    title: "Papas Crispy",
    description:
      "Papas pre-fritas supercongeladas cortadas en bastones. Más crocantes, menos tiempo. Sin TACC, libres de gluten.",
    imageUrl: "/images/papascrispy.jpg",
    imageAlt: "Papas Crispy Finca Balcarce - papas supercongeladas sin gluten",
    badge: "Más vendido",
    peso: "1 Kg",
  },
  {
    title: "Frutillas Supercongeladas",
    description:
      "Frutillas en su punto óptimo de maduración. Frescura garantizada desde el origen. Sin gluten, listas para consumo directo.",
    imageUrl: "/images/frutillascongeladas.jpg",
    imageAlt: "Frutillas supercongeladas Finca Balcarce",
    peso: "500 g",
  },
  {
    title: "Pinchos de Tortilla",
    description:
      "Tortilla de papa congelada IQF, estilo casero con auténtico sabor. Lista en 15 min al horno o 12 min en airfryer.",
    imageUrl: "/images/pinchostortilla.jpg",
    imageAlt: "Pinchos de Tortilla de papa congelada Finca Balcarce",
    peso: "500 g",
  },
  {
    title: "Espinaca Supercongelada",
    description:
      "Espinaca supercongelada con frescura garantizada desde el origen. Sin gluten, conservando todas sus propiedades nutricionales.",
    imageUrl: "/images/espinaca.jpg",
    imageAlt: "Espinaca supercongelada Finca Balcarce",
    peso: "500 g",
  },
];

export default function ProductosSection() {
  return (
    <section
      id="productos"
      className="py-24 lg:py-32 bg-earth-50"
      aria-labelledby="productos-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-4 font-body">
            Lo que ofrecemos
          </span>
          <h2
            id="productos-title"
            className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6"
          >
            Nuestros{" "}
            <span className="text-forest-600 italic">productos</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Alimentos supercongelados elaborados con las mejores materias primas,
            controlando cada etapa desde el origen en Balcarce, Buenos Aires.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <p className="text-center text-earth-400 text-sm mt-12 font-body">
          Todos nuestros productos son{" "}
          <strong className="text-earth-600">libres de gluten</strong>,{" "}
          <strong className="text-earth-600">sin conservantes</strong> y con{" "}
          <strong className="text-earth-600">trazabilidad completa</strong>.
        </p>
      </div>
    </section>
  );
}
