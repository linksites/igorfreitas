"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const diferenciais = [
  { icon: "✦", title: "Atendimento humanizado", desc: "Comunicação clara, sem juridiquês. Você sabe exatamente o que acontece com o seu caso." },
  { icon: "✦", title: "Atuação 100% digital", desc: "Reuniões por vídeo, assinatura eletrônica e contratos digitais. Sem precisar sair de casa." },
  { icon: "✦", title: "Relatórios de andamento", desc: "Acompanhamento objetivo do processo. Prazos controlados e atualizações regulares." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".about-left", { opacity: 0, x: -30 });
      gsap.to(".about-left", { opacity: 1, x: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
      gsap.set(".about-right", { opacity: 0, x: 30 });
      gsap.to(".about-right", { opacity: 1, x: 0, duration: 0.7, delay: 0.15, ease: "power2.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="sobre"
      style={{ borderTop: "1px solid var(--border)", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

        {/* Section heading */}
        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            Por que escolher o escritório?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Técnica jurídica aliada a comunicação clara e presença digital total.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — diferenciais */}
          <div className="about-left">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="flex gap-4 mb-8"
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "6px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--silver)",
                    fontSize: "0.8rem",
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {d.title}
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
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — bio card */}
          <div
            className="about-right"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "1rem",
                fontStyle: "italic",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                borderLeft: "2px solid var(--silver)",
                paddingLeft: "1rem",
              }}
            >
              "Cada cliente merece entender o que acontece com o seu caso — sem juridiquês, sem surpresas, com respostas rápidas e objetivas."
            </p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  marginBottom: "0.25rem",
                }}
              >
                Dr. José Igor Martins de Freitas
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                Situação regular
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Trabalhista", "Previdenciário", "Penal", "Trânsito", "Civil"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    padding: "4px 12px",
                    borderRadius: "999px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
