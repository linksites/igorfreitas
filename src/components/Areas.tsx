"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: "Direito do Trabalho",
    desc: "Reclamações trabalhistas, verbas rescisórias, horas extras, assédio e acordos. Defesa para empregados e empregadores.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Direito Previdenciário",
    desc: "Benefícios do INSS, revisões, aposentadorias, BPC/LOAS e ações judiciais com análise técnica.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Direito Penal",
    desc: "Defesa em inquéritos e processos criminais, habeas corpus, audiências de custódia e medidas cautelares.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Trânsito",
    desc: "Defesas e recursos de multas, suspensão e cassação de CNH, acidentes e indenizações.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Direito Civil",
    desc: "Contratos, responsabilidade civil, cobranças, locação, consumidor e mediação de conflitos.",
  },
];

export default function Areas() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".areas-heading", { opacity: 0, y: 20 });
      gsap.to(".areas-heading", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: ".areas-heading", start: "top 88%" } });
      gsap.set(".area-card", { opacity: 0, y: 24 });
      gsap.to(".area-card", { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power2.out", scrollTrigger: { trigger: ".area-card", start: "top 90%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="atuacao"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Section heading */}
        <div className="areas-heading text-center mb-12">
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            Áreas de Atuação
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--text-muted)",
            }}
          >
            Defesa técnica em cinco frentes do direito brasileiro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="area-card"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "28px 24px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ color: "var(--silver)", marginBottom: "1rem" }}>
                {area.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text)",
                  marginBottom: "0.6rem",
                  lineHeight: 1.3,
                }}
              >
                {area.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
