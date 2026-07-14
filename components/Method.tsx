import { Eyebrow, Wrap } from "./ui";

const pillars = [
  {
    idx: "Frente 01–02",
    title: "Academia & Pilates",
    text: "Treino de força estruturado e periodizado, combinado ao Pilates para mobilidade, controle e postura — ajustado conforme seu objetivo evolui.",
    icon: (
      <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
    ),
  },
  {
    idx: "Frente 03–04",
    title: "Fisioterapia & Recovery",
    text: "Reabilitação de lesões e protocolos de recuperação integrados ao treino, para você evoluir sem interromper a rotina por dor ou desgaste.",
    icon: (
      <path d="M12 2C9 6 7 9.5 7 13a5 5 0 0 0 10 0c0-3.5-2-7-5-11zM12 13v9" />
    ),
  },
  {
    idx: "Frente 05",
    title: "Salas clínicas",
    text: "Acompanhamento clínico no mesmo espaço, com reavaliações periódicas e ajustes no plano assim que seu corpo (ou sua rotina) pedir mudança.",
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-[88px]">
      <Wrap>
        <div className="reveal mb-14 max-w-[640px]">
          <Eyebrow tone="steel">O método</Eyebrow>
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold text-ink">
            Cinco frentes. Um único acompanhamento.
          </h2>
          <p className="mt-4 text-[1.04rem] leading-relaxed text-ink/70">
            Academia, Pilates, Fisioterapia, Recovery e Salas Clínicas
            funcionando juntos — não em consultórios separados, com
            profissionais que nunca conversam entre si.
          </p>
        </div>

        <div className="grid gap-px border border-ink/[0.12] bg-ink/[0.12] md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="reveal bg-sand2 px-[34px] py-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                className="mb-5 h-[34px] w-[34px] text-steeldim"
              >
                {p.icon}
              </svg>
              <div className="mb-[22px] font-mono text-[0.78rem] text-silverdim">
                {p.idx}
              </div>
              <h3 className="mb-3 font-display text-[1.3rem] font-bold text-ink">
                {p.title}
              </h3>
              <p className="text-[0.96rem] leading-relaxed text-ink/[0.66]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
