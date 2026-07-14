"use client";

import { useEffect } from "react";

/**
 * Observa todos os elementos com a classe .reveal e adiciona .in
 * quando entram na viewport — mesma lógica do script original,
 * agora como efeito de ciclo de vida do React.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.14 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
