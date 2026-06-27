"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-el", { opacity: 0, y: 20 });
      gsap.to(".hero-el", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out", delay: 0.15 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="topo"
      className="flex flex-col justify-center min-h-screen"
      style={{ paddingTop: 100, paddingBottom: 80 }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>

        <p
          className="hero-el"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
          }}
        >
          OAB/PA 36238 — Belém, PA · Atendimento online em todo o Brasil
        </p>

        <h1
          className="hero-el"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            fontSize: "clamp(2.6rem, 6.5vw, 5.8rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}
        >
          Defesa técnica com<br />
          <span style={{ color: "var(--silver)" }}>estratégia</span> e{" "}
          <span style={{ color: "var(--silver)" }}>transparência.</span>
        </h1>

        <div
          className="hero-el"
          style={{ width: 52, height: 3, background: "var(--silver)", borderRadius: 2, marginBottom: "1.5rem" }}
        />

        <p
          className="hero-el"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
            color: "var(--text-muted)",
            lineHeight: 1.8,
            maxWidth: 540,
            marginBottom: "2.5rem",
          }}
        >
          Direito do Trabalho, Previdenciário, Penal, Trânsito e Civil.
          <br />
          Atendimento presencial em Belém e 100% online para todo o Brasil.
        </p>

        <div className="hero-el" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
          <a
            href="https://wa.me/5591982258399?text=Olá%20Dr.%20Igor,%20gostaria%20de%20um%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.05em",
              color: "#0a0a0a",
              background: "var(--silver)",
              padding: "14px 28px",
              borderRadius: "4px",
              display: "inline-block",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Falar no WhatsApp
          </a>
          <button
            onClick={() => document.querySelector("#atuacao")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              background: "none",
              border: "1px solid var(--border-hover)",
              padding: "14px 28px",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--silver)";
              e.currentTarget.style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            Ver áreas de atuação
          </button>
        </div>

        <div className="hero-el" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["OAB/PA 36238", "Situação Regular", "Contratos digitais", "Reunião por vídeo"].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.72rem",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                padding: "5px 14px",
                borderRadius: "999px",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
