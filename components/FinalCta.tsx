import { Btn, Wrap } from "./ui";
import { waLink } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section className="bg-steeldim py-[88px] text-center text-sand2">
      <Wrap>
        <h2 className="reveal mx-auto max-w-[16ch] font-display text-[clamp(1.9rem,4.4vw,2.8rem)] font-bold">
          Marque sua avaliação e conheça o método de perto.
        </h2>
        <p className="reveal mt-[18px] text-[1.05rem] text-sand2/[0.82]">
          Sem compromisso. Você sai sabendo exatamente por onde começar.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3.5">
          {/* EDITAR: número de WhatsApp em lib/whatsapp.ts */}
          <Btn href={waLink("Oi! Quero agendar uma aula experimental grátis.")}>
            Agendar aula experimental grátis
          </Btn>
          <Btn href={waLink("")} variant="ghost">
            Falar no WhatsApp
          </Btn>
        </div>
      </Wrap>
    </section>
  );
}
