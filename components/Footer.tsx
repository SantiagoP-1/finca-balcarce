import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { href: "https://www.instagram.com/fincabalcarce/", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/finca-balcarce/", label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-forest-600">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo Finca Balcarce"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="font-display font-bold text-xl">
                Finca <span className="text-forest-400">Balcarce</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-body mb-6">
              Más de 40 años produciendo alimentos supercongelados de calidad.
              Del campo a tu mesa, desde Balcarce, Buenos Aires, Argentina.
            </p>
            <div className="flex gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-forest-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-forest-300 text-sm font-body transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-5 tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Balcarce, Buenos Aires, Argentina" },
                { icon: Phone, text: "+54 9 11 2541-7865" },
                { icon: Mail, text: "contacto@fincabalcarce.com.ar" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-forest-400 mt-0.5 shrink-0" />
                  <span className="text-white/50 text-sm font-body">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body text-center">
            © {new Date().getFullYear()} Finca Balcarce. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs font-body transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs font-body transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
