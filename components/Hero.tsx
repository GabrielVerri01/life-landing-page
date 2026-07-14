import { Btn, Eyebrow, Wrap } from "./ui";
import { waLink } from "@/lib/whatsapp";

const stats = [
  {
    num: "5 frentes",
    lbl: "Academia · Pilates · Fisio · Recovery · Salas Clínicas",
  },
  { num: "100%", lbl: "Avaliação física incluída" },
  { num: "Jd. Renascença", lbl: "São Luís – MA" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 pb-[76px] text-sand">
      <div className="tile-pattern absolute inset-0 pointer-events-none" />
      <Wrap className="relative z-[2]">
        <Eyebrow>Jardim Renascença · São Luís – MA</Eyebrow>

        <h1 className="max-w-[15ch] font-display text-[clamp(2.4rem,6vw,4.3rem)] font-bold leading-[1.04] text-sand2">
          Saúde que integra.
          <br />
          <em className="not-italic text-silver">Performance</em> que
          transforma.
        </h1>

        <p className="mt-6 max-w-[46ch] text-[1.14rem] leading-relaxed text-sand/70">
          Academia, Pilates, Fisioterapia e Recovery no mesmo espaço — com um
          time que acompanha seu treino e sua recuperação como parte de um
          único plano.
        </p>

        <div className="mt-10 flex flex-wrap gap-3.5">
          {/* EDITAR: número de WhatsApp em lib/whatsapp.ts */}
          <Btn href={waLink("Oi! Quero agendar uma aula experimental grátis.")}>
            Agendar aula experimental grátis
          </Btn>
          <Btn href="#metodo" variant="ghost">
            Conhecer o método
          </Btn>
        </div>

        <div className="mt-16 grid max-w-[640px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-0 border-t border-sand/[0.14] pt-6 font-mono">
          {stats.map((s) => (
            <div key={s.num} className="pr-5">
              <div className="text-2xl font-semibold text-silver">{s.num}</div>
              <div className="mt-1 text-[0.76rem] uppercase tracking-[0.06em] text-sand/70">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
