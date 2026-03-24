# 🥔 Finca Balcarce — Sitio Web Corporativo

Sitio web profesional para **Finca Balcarce**, productora de papas congeladas precocidas sin aceite agregado, ubicada en Balcarce, Buenos Aires, Argentina.

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animaciones)
- **Lucide React** (íconos)

---

## 📦 Instalación y ejecución

### 1. Clonar / copiar el proyecto

```bash
cd finca-balcarce
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

### 4. Build para producción

```bash
npm run build
npm start
```

---

## 📁 Estructura del proyecto

```
finca-balcarce/
├── app/
│   ├── globals.css          # Estilos globales + fuentes
│   ├── layout.tsx           # Layout raíz con SEO metadata
│   └── page.tsx             # Página principal
├── components/
│   ├── Navbar.tsx           # Navbar sticky con menú mobile
│   ├── Footer.tsx           # Footer completo con redes sociales
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero con imagen de fondo
│   │   ├── NosotrosSection.tsx  # Historia y ubicación
│   │   ├── ProductosSection.tsx # Grid de productos
│   │   ├── ProcesoSection.tsx   # Timeline del proceso
│   │   ├── CalidadSection.tsx   # Beneficios y certificaciones
│   │   └── ContactoSection.tsx  # Formulario + Google Maps
│   └── ui/
│       ├── ProductCard.tsx      # Card reutilizable de producto
│       └── WhatsAppButton.tsx   # Botón flotante de WhatsApp
├── lib/
│   └── useReveal.ts         # Hook para animaciones al hacer scroll
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Personalización

### 📱 Número de WhatsApp
En `components/ui/WhatsAppButton.tsx`, reemplazá:
```ts
const WA_NUMBER = "5492266000000"; // ← tu número real con código de país
```

### 🗺️ Google Maps
El embed en `ContactoSection.tsx` apunta a Balcarce, Buenos Aires. Podés generar un embed personalizado desde [Google Maps](https://maps.google.com) → Compartir → Insertar mapa.

### 🖼️ Imágenes
Actualmente se usan imágenes de Unsplash. Para producción, reemplazalas por imágenes propias en `/public/images/` y actualizá los `src` en cada componente.

### 📧 Formulario de contacto
El formulario actualmente simula el envío con `console.log`. Para integrarlo con un backend real, editá la función `handleSubmit` en `ContactoSection.tsx` y conectá con tu API, Resend, EmailJS, etc.

### 🔗 URLs de redes sociales
En `components/Footer.tsx`, actualizá los hrefs de Instagram, Facebook y LinkedIn.

---

## 🔎 SEO implementado

- `<title>` y `<meta description>` optimizados
- Keywords relevantes (papas congeladas, Balcarce, etc.)
- Open Graph para compartir en redes sociales
- Twitter Card
- Etiquetas semánticas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<dl>`, `<dt>`, `<dd>`)
- Jerarquía correcta de headings (`h1` → `h2` → `h3`)
- Atributos `alt` en todas las imágenes
- `aria-label` en elementos interactivos
- `canonical` URL
- `robots` meta tag

---

## 🌐 Deploy en Vercel (recomendado)

```bash
npm install -g vercel
vercel
```

O conectá el repositorio directamente desde [vercel.com](https://vercel.com).

---

## 📄 Licencia

Proyecto privado — Finca Balcarce © 2024
