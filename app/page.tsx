import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Results from "@/components/Results";
import Offer from "@/components/Offer";
import LocationSection from "@/components/LocationSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollReveal from "@/components/ScrollReveal";
import { PulseDivider } from "@/components/ui";

// ============================================================
// ANTES DE PUBLICAR — troque estes itens (marcados com EDITAR):
// 1) Número de WhatsApp: lib/whatsapp.ts (um único lugar).
// 2) Depoimentos em components/Results.tsx são exemplos de
//    estrutura/tom — substitua por depoimentos reais de alunos.
// 3) Horário de funcionamento em components/LocationSection.tsx.
// 4) Endereço completo (rua/número), se quiser mais precisão.
// ============================================================

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <PulseDivider tone="dark" />
      <Method />
      <PulseDivider tone="light" />
      <Results />
      <Offer />
      <LocationSection />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
