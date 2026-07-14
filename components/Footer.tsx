import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 pb-8 text-[0.86rem] text-sand/70">
      <Wrap>
        <div className="mb-[22px] flex flex-wrap justify-between gap-5 border-b border-sand/[0.14] pb-7">
          <div className="flex items-baseline gap-2.5">
            <span className="text-[1.1rem] font-extrabold text-sand">
              LIFE
            </span>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-sand/70">
              Saúde &amp; Performance Integrativa
            </span>
          </div>
          <div className="flex flex-wrap gap-[22px]">
            <a href="#metodo" className="hover:text-sand">
              Método
            </a>
            <a href="#resultados" className="hover:text-sand">
              Resultados
            </a>
            <a href="#local" className="hover:text-sand">
              Localização
            </a>
            <a
              href="https://instagram.com/life.saudeintegrativa"
              target="_blank"
              rel="noopener"
              className="hover:text-sand"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-[0.78rem] leading-relaxed text-sand/40">
          Jardim Renascença, São Luís – MA. Conteúdo de exemplo gerado para
          revisão — números, depoimentos e contato devem ser conferidos antes
          da publicação.
        </div>
      </Wrap>
    </footer>
  );
}
