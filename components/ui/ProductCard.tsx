"use client";

import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  peso?: string;
}

export default function ProductCard({
  title,
  description,
  imageUrl,
  imageAlt,
  badge,
  peso,
}: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden border border-earth-100 flex flex-col
                 shadow-sm hover:shadow-2xl hover:shadow-forest-900/10
                 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image */}
      <div className="h-56 bg-earth-50 flex items-center justify-center relative overflow-hidden">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={imageAlt}
            onError={() => setImgError(true)}
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-earth-300">
            <span className="text-4xl">🥔</span>
            <span className="text-xs">Imagen no disponible</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-forest-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            {badge}
          </div>
        )}

        {/* Peso */}
        {peso && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-earth-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-earth-200">
            {peso}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-earth-900 mb-2 group-hover:text-forest-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-earth-500 text-sm leading-relaxed font-body flex-1">
          {description}
        </p>

        {/* Footer tag */}
        <div className="mt-5 pt-4 border-t border-earth-100 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-forest-600 font-medium">
            <span className="w-1.5 h-1.5 bg-forest-500 rounded-full" />
            Sin TACC · Sin conservantes
          </span>
          <span className="text-xs text-earth-400 font-body group-hover:text-forest-500 transition-colors">
            Ver más →
          </span>
        </div>
      </div>
    </article>
  );
}
