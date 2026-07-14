import { Btn, Eyebrow, Wrap } from "./ui";
import { waLink } from "@/lib/whatsapp";

const items = [
  "Avaliação física completa",
  "Conversa sobre objetivo, lesões ou rotina atual",
  "Aula ou sessão experimental na modalidade certa pra você",
  "Sem compromisso de matrícula",
];

export default function Offer() {
  return (
    <section className="py-[88px]">
      <Wrap>
        <div className="reveal grid items-center gap-9 border border-ink/[0.12] bg-sand2 px-11 py-14 md:grid-cols-[1.3fr_1fr] md:px-14 md:py-16">
          <div>
            <Eyebrow tone="steel">Comece por aqui</Eyebrow>
            <h2 className="mb-4 font-display text-[clamp(1.7rem,3.6vw,2.3rem)] font-bold text-ink">
              Sua primeira aula é uma avaliação, não uma venda.
            </h2>
            <p className="max-w-[44ch] text-[1.02rem] leading-relaxed text-ink/70">
              Você chega, conversa com o time sobre seu objetivo, passa por
              uma avaliação física e sai sabendo exatamente por onde seu
              treino — ou seu tratamento — deveria começar.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[0.94rem] text-ink/[0.72]"
                >
                  <span className="font-bold text-steeldim">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-sand/[0.14] bg-ink px-7 py-8 text-sand">
            <div className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-silver">
              Condição do mês
            </div>
            <div className="my-3.5 font-display text-2xl font-bold">
              Fale com a gente sobre as condições especiais de matrícula.
            </div>
            {/* EDITAR: número de WhatsApp em lib/whatsapp.ts */}
            <Btn
              href={waLink(
                "Oi! Quero saber as condições de matrícula deste mês."
              )}
              className="w-full"
            >
              Ver condições no WhatsApp
            </Btn>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
