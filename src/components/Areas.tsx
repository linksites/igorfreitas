"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuBriefcase, LuShield, LuScale, LuCar, LuScrollText } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    icon: LuBriefcase,
    title: "Direito do Trabalho",
    desc: "Reclamações trabalhistas, verbas rescisórias, horas extras, assédio e acordos. Defesa para empregados e empregadores.",
  },
  {
    icon: LuShield,
    title: "Direito Previdenciário",
    desc: "Benefícios do INSS, revisões, aposentadorias, BPC/LOAS e ações judiciais com análise técnica.",
  },
  {
    icon: LuScale,
    title: "Direito Penal",
    desc: "Defesa em inquéritos e processos criminais, habeas corpus, audiências de custódia e medidas cautelares.",
  },
  {
    icon: LuCar,
    title: "Trânsito",
    desc: "Defesas e recursos de multas, suspensão e cassação de CNH, acidentes e indenizações.",
  },
  {
    icon: LuScrollText,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
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
                <Icon size={28} strokeWidth={1.5} />
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
                {title}
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
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
