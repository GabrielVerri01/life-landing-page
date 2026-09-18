import { Eyebrow, Wrap } from "./ui";

// Depoimentos de exemplo — substitua por depoimentos reais de alunos
// (com autorização deles) antes de publicar.
const testimonials = [
  '"Treinava sozinho há anos e não via composição corporal mudar. Com o ajuste da alimentação junto do treino, a diferença apareceu em poucos meses."',
  '"O que mudou não foi só o treino — foi ter alguém olhando pra rotina inteira: sono, refeição, carga. Isso fez o resultado ser consistente."',
  '"A avaliação física no início me mostrou onde eu realmente estava. Sem isso eu teria continuado treinando errado."',
];

export default function Results() {
  return (
    <section id="resultados" className="bg-ink py-[88px] text-sand">
      <Wrap>
        <div className="reveal mb-14 max-w-[640px]">
          <Eyebrow>Resultados</Eyebrow>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-sand2">
            O que muda quando treino e nutrição andam juntos.
          </h2>
          <p className="mt-4 text-[1.04rem] leading-relaxed text-sand/70">
            Exemplos do tipo de resultado que o método busca entregar:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((quote, i) => (
            <div
              key={i}
              className="reveal flex flex-col gap-[18px] border border-sand/[0.14] bg-ink2 px-7 py-[30px]"
            >
              <div className="text-base leading-relaxed text-sand2">
                {quote}
              </div>
              <div className="border-t border-sand/[0.14] pt-3.5 text-[0.82rem] text-sand/70">
                <b className="font-semibold text-silver"></b>{" "}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
