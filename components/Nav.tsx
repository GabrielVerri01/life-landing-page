import { Btn, Wrap } from "./ui";
import { waLink } from "@/lib/whatsapp";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/[0.14] bg-ink/[0.94] backdrop-blur-md">
      <Wrap className="flex items-center justify-between py-4">
        <div className="flex items-baseline gap-2.5">
          <span className="text-[1.35rem] font-extrabold tracking-tight text-sand">
            LIFE
          </span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.08em] text-sand/70 sm:inline">
            Saúde &amp; Performance Integrativa
          </span>
        </div>
        <nav className="hidden gap-8 text-[0.92rem] text-sand/70 md:flex">
          <a href="#metodo" className="transition-colors hover:text-sand">
            Método
          </a>
          <a href="#resultados" className="transition-colors hover:text-sand">
            Resultados
          </a>
          <a href="#local" className="transition-colors hover:text-sand">
            Localização
          </a>
        </nav>
        {/* EDITAR: número de WhatsApp em lib/whatsapp.ts */}
        <Btn
          href={waLink("Oi! Quero agendar uma aula experimental na Life.")}
          size="sm"
        >
          Falar no WhatsApp
        </Btn>
      </Wrap>
    </header>
  );
}
