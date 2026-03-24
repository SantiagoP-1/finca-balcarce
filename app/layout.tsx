import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finca Balcarce | Papas Congeladas Premium | Balcarce, Argentina",
  description:
    "Finca Balcarce produce papas congeladas precocidas sin aceite agregado en Balcarce, Buenos Aires. Del campo a tu mesa: bastón, rústicas y cubos. Trazabilidad completa, calidad garantizada.",
  keywords: [
    "papas congeladas",
    "papas congeladas sin aceite",
    "producción de papas Argentina",
    "Balcarce",
    "alimentos congelados Argentina",
    "papas precocidas",
    "papas bastón congeladas",
    "papas rústicas",
    "finca Balcarce",
    "papas naturales",
    "Buenos Aires alimentos",
  ],
  authors: [{ name: "Finca Balcarce" }],
  creator: "Finca Balcarce",
  publisher: "Finca Balcarce",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.fincabalcarce.com.ar",
    siteName: "Finca Balcarce",
    title: "Finca Balcarce | Papas Congeladas Premium desde Balcarce",
    description:
      "Producimos papas congeladas precocidas sin aceite agregado, controlando todo el proceso desde el cultivo hasta el producto final en Balcarce, Buenos Aires, Argentina.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601593346740-925612772716?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Finca Balcarce - Papas Congeladas Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finca Balcarce | Papas Congeladas Premium",
    description:
      "Del campo a tu mesa. Papas congeladas sin aceite agregado desde Balcarce, Argentina.",
    images: [
      "https://images.unsplash.com/photo-1601593346740-925612772716?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.fincabalcarce.com.ar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
