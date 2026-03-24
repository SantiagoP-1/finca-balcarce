import Image from "next/image";
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
}
export default function ProductCard({
  title,
  description,
  imageUrl,
  imageAlt,
  badge,
}: ProductCardProps) {
  return (
    <article className="product-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-forest-900/10 transition-all duration-500 hover:-translate-y-2 border border-earth-100 flex flex-col">
      {/* Image container — altura fija para que todos queden iguales */}
      <div className="relative h-56 overflow-hidden bg-earth-50">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="product-img object-contain p-4 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {badge && (
          <div className="absolute top-3 left-3 bg-forest-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow">
            {badge}
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-earth-900 mb-2 group-hover:text-forest-700 transition-colors">
          {title}
        </h3>
        <p className="text-earth-500 text-sm leading-relaxed font-body flex-1">{description}</p>
        {/* Tag */}
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-forest-600 font-medium bg-forest-50 px-3 py-1.5 rounded-full border border-forest-100">
            <span className="w-1.5 h-1.5 bg-forest-500 rounded-full" />
            Sin TACC · Sin conservantes
          </span>
        </div>
      </div>
    </article>
  );
}