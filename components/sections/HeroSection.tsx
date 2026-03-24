"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200);
    }
  }, []);

  const scrollToProducts = () => {
    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Bienvenida a Finca Balcarce"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=85"
          alt="Campo de papas en Balcarce, Buenos Aires"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-hero-pattern" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-white/30 to-transparent" />
      </div>

      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/10 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5 opacity-20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="w-2 h-2 bg-forest-300 rounded-full animate-pulse" />
          Balcarce, Buenos Aires · Argentina
        </div>

        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
        >
          Del campo
          <br />
          <span className="hero-gradient-text italic">a tu mesa</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/80 text-lg sm:text-xl lg:text-2xl font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards", opacity: 0 }}
        >
          Producimos papas congeladas precocidas{" "}
          <strong className="text-white font-medium">sin aceite agregado</strong>,
          controlando cada etapa desde el cultivo hasta el producto final.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards", opacity: 0 }}
        >
          <button
            onClick={scrollToProducts}
            className="group bg-forest-500 hover:bg-forest-400 text-white font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-forest-500/40 hover:-translate-y-1 flex items-center gap-2"
          >
            Ver productos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() =>
              document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/40 hover:border-white/70 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
          >
            Conocé nuestra historia
          </button>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards", opacity: 0 }}
        >
          {[
            { value: "100%", label: "Natural" },
            { value: "0", label: "Aceite agregado" },
            { value: "3", label: "Variedades" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
