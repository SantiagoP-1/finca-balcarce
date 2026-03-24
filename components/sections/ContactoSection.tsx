"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const INITIAL: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export default function ContactoSection() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Formulario enviado:", form);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm(INITIAL);
    }, 1200);
  };

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 bg-earth-50"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-forest-600 text-sm font-medium tracking-widest uppercase mb-4 font-body">
            Escribinos
          </span>
          <h2
            id="contacto-title"
            className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6"
          >
            ¿Querés ser nuestro{" "}
            <span className="text-forest-600 italic">distribuidor?</span>
          </h2>
          <p className="text-earth-600 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Para sumarte como distribuidor necesitás estructura para almacenar y transportar
            productos a <strong className="text-earth-800">−18°C o menos</strong>.
            ¡Escribinos y te contamos todo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-forest-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-earth-900 mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-earth-500 mb-8 font-body">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-forest-600 font-medium hover:text-forest-500 transition-colors text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="font-display text-xl font-bold text-earth-900 mb-6">
                  Formulario de contacto
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-earth-700 mb-2">Nombre *</label>
                    <input
                      id="nombre" name="nombre" type="text" required
                      value={form.nombre} onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-earth-700 mb-2">Empresa</label>
                    <input
                      id="empresa" name="empresa" type="text"
                      value={form.empresa} onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm font-body"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-earth-700 mb-2">Email *</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-earth-700 mb-2">Teléfono</label>
                    <input
                      id="telefono" name="telefono" type="tel"
                      value={form.telefono} onChange={handleChange}
                      placeholder="+54 9 ..."
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm font-body"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-earth-700 mb-2">Mensaje *</label>
                  <textarea
                    id="mensaje" name="mensaje" required rows={5}
                    value={form.mensaje} onChange={handleChange}
                    placeholder="Contanos en qué podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-xl border border-earth-200 bg-earth-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition text-sm font-body resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest-600 hover:bg-forest-500 disabled:opacity-60 text-white font-medium py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-forest-600/25 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-earth-100">
              <h3 className="font-display text-xl font-bold text-earth-900 mb-6">
                Información de contacto
              </h3>
              <dl className="space-y-5">
                {[
                  { icon: MapPin, label: "Dirección", value: "Balcarce, Buenos Aires, Argentina" },
                  { icon: Phone, label: "WhatsApp", value: "+54 9 11 2541-7865" },
                  { icon: Mail, label: "Email", value: "contacto@fincabalcarce.com.ar" },
                  { icon: Clock, label: "Horario", value: "Lunes a viernes, 8:00 – 17:00 hs." },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-forest-600" />
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-earth-400 uppercase tracking-wide mb-0.5">{label}</dt>
                      <dd className="text-earth-700 text-sm font-body">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            {/* Google Maps — URL real de Finca Balcarce */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-earth-100 h-64">
              <iframe
                title="Ubicación de Finca Balcarce en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.2172373545277!2d-58.23205038778878!3d-37.808380333614636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959aaf892abd6c17%3A0xec73c497d3a87445!2sFinca%20Balcarce!5e0!3m2!1ses-419!2sar!4v1774315618600!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mapa de ubicación de Finca Balcarce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
