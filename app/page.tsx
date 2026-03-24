import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import NosotrosSection from "@/components/sections/NosotrosSection";
import ProductosSection from "@/components/sections/ProductosSection";
import ProcesoSection from "@/components/sections/ProcesoSection";
import CalidadSection from "@/components/sections/CalidadSection";
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
        <ProcesoSection />
        <CalidadSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
