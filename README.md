# Life — Saúde e Performance Integrativa

Landing page em Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## O que editar antes de publicar

1. **Número de WhatsApp** — `lib/whatsapp.ts`. É o único lugar; todos os
   botões do site usam essa constante.
2. **Depoimentos** — `components/Results.tsx`. Os textos atuais são
   exemplos de estrutura/tom, não depoimentos reais. Troque por depoimentos
   de alunos reais (com autorização deles).
3. **Horário de funcionamento** — `components/LocationSection.tsx`.
4. **Endereço completo** (rua/número) — hoje o site usa só "Jardim
   Renascença, São Luís – MA".
5. **Logo** — a marca "LIFE" está em texto (`components/Nav.tsx` e
   `components/Footer.tsx`). Quando tiver a logo em arquivo (svg/png),
   troque por um componente `<Image>` do `next/image`.

## Estrutura

```
app/
  layout.tsx      — fontes (next/font) + metadata
  page.tsx         — composição das seções
  globals.css      — Tailwind + os poucos efeitos custom (padrão de
                      azulejo, animação do divisor "pulso")
components/
  ui.tsx           — primitivos (Wrap, Btn, Eyebrow, PulseDivider)
  Nav.tsx, Hero.tsx, Method.tsx, Results.tsx, Offer.tsx,
  LocationSection.tsx, FinalCta.tsx, Footer.tsx, WhatsAppFloat.tsx
  ScrollReveal.tsx — anima elementos .reveal ao entrarem na tela
lib/
  whatsapp.ts      — número de WhatsApp centralizado
tailwind.config.ts — paleta de cores (cinza/branco) e tipografia
```

## Paleta

Monocromática (cinza-chumbo + branco), com pequenos acentos em cinza-claro
("silver") e cinza-médio ("steel") no lugar de cor de destaque.
