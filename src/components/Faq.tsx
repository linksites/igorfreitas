"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "O atendimento é somente presencial?",
    a: "Não. Realizamos atendimento online em todo o Brasil, com assinatura eletrônica e reuniões por vídeo quando necessário.",
  },
  {
    q: "Como começo meu atendimento?",
    a: 'Clique em "Falar no WhatsApp" e envie um breve relato do seu caso. Retornamos com triagem inicial e próxima etapa em até 24 h.',
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Honorários conforme tabela de referência e complexidade do caso. Aceitamos PIX, cartão e parcelamento mediante contrato.",
  },
  {
    q: "Quanto tempo dura um processo trabalhista?",
    a: "Em média, processos de primeiro grau levam de 1 a 2 anos. Acordos extrajudiciais podem resolver a situação em semanas.",
  },
];

function Item({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (open) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(el, {
        height: 0, opacity: 0, duration: 0.25, ease: "power2.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <div
      style={{ borderBottom: "1px solid var(--border)" }}
      className={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
            fontSize: "0.95rem",
            color: open ? "var(--text)" : "var(--silver)",
            transition: "color 0.2s",
            lineHeight: 1.4,
          }}
        >
          {item.q}
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "1.4rem",
            fontWeight: 300,
            color: "var(--text-muted)",
            flexShrink: 0,
            lineHeight: 1,
            transition: "transform 0.25s",
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} style={{ overflow: "hidden", display: "none" }}>
        <p
          className="pb-5"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "0.88rem",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: 620,
          }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".faq-heading", { opacity: 0, y: 20 });
      gsap.to(".faq-heading", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ".faq-heading", start: "top 88%" } });
      faqs.forEach((_, i) => {
        gsap.set(`.faq-item-${i}`, { opacity: 0, y: 16 });
        gsap.to(`.faq-item-${i}`, { opacity: 1, y: 0, duration: 0.5, delay: i * 0.06, ease: "power2.out", scrollTrigger: { trigger: `.faq-item-${i}`, start: "top 90%" } });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="faq"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <div className="faq-heading text-center mb-12">
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            Dúvidas Frequentes
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--text-muted)",
            }}
          >
            Respostas rápidas para as perguntas mais comuns.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" style={{ borderTop: "1px solid var(--border)" }}>
          {faqs.map((item, i) => (
            <Item key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
