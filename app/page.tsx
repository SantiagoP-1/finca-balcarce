import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import NosotrosSection from "@/components/sections/NosotrosSection";
import ProductosSection from "@/components/sections/ProductosSection";
import SupermercadosSection from "@/components/sections/SupermercadosSection";
import ProcesoSection from "@/components/sections/ProcesoSection";
import CalidadSection from "@/components/sections/CalidadSection";
import GaleriaSection from "@/components/sections/GaleriaSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactoSection from "@/components/sections/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NosotrosSection />
        <ProductosSection />
        <SupermercadosSection />
        <ProcesoSection />
        <CalidadSection />
        <GaleriaSection />
        <FAQSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
