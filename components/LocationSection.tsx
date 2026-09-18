import { Eyebrow, Wrap } from "./ui";

const rows = [
  { k: "Bairro", v: "Jardim Renascença, São Luís – MA" },
  { k: "WhatsApp", v: "(98) 90000-0000" }, // EDITAR
  { k: "Instagram", v: "@life.saudeintegrativa" },
  {
    k: "Horário",
    v: "Segunda a sexta, 6h–22h · Sábado, 7h–13h",
  },
];

export default function LocationSection() {
  return (
    <section id="local" className="py-[88px]">
      <Wrap>
        <div className="reveal mb-14 max-w-[640px]">
          <Eyebrow tone="steel">Localização</Eyebrow>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink">
            No Jardim Renascença, fácil de encaixar na rotina.
          </h2>
        </div>

        <div className="reveal grid border border-ink/[0.12] md:grid-cols-2">
          <div className="bg-sand2 p-11">
            {rows.map((row) => (
              <div
                key={row.k}
                className="flex gap-4 border-b border-ink/[0.12] py-4 last:border-b-0"
              >
                <div className="w-[110px] shrink-0 pt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-silverdim">
                  {row.k}
                </div>
                <div className="text-[0.98rem] leading-relaxed text-ink">
                  {row.v}
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-ink">
            <div className="tile-pattern absolute inset-0" />
            <div className="relative z-[2] text-center text-sand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="mx-auto mb-3.5 h-[38px] w-[38px] text-silver"
              >
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              <div className="mb-2 text-[0.94rem]">
                Jardim Renascença
                <br />
                São Luís – MA
              </div>
              <a
                // href="https://www.google.com/maps/search/?api=1&query=Jardim+Renascença+São+Luís+MA"
                href="https://maps.app.goo.gl/XHqeqaRVrDbNgqTx8"
                target="_blank"
                rel="noopener"
                className="text-[0.86rem] text-silverdim underline underline-offset-4 hover:text-silver"
              >
                Ver no Google Maps →
              </a>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
