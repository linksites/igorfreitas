"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Serviços", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: scrolled ? 64 : 76, transition: "height 0.3s" }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 12 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Igor Freitas"
            width={31}
            height={36}
            style={{ display: "block", height: 36, width: "auto" }}
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text)",
                letterSpacing: "0.04em",
                lineHeight: 1.2,
              }}
            >
              IGOR FREITAS
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Advocacia & Consultoria
            </p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://wa.me/5591982258399?text=Olá%20Dr.%20Igor,%20gostaria%20de%20um%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "#0a0a0a",
              background: "var(--silver)",
              padding: "10px 22px",
              borderRadius: "4px",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Chamar no WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label="Menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 1.5,
                  background: "var(--text)",
                  borderRadius: 2,
                  transition: "transform 0.25s, opacity 0.25s",
                  transform:
                    open && i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)" :
                    open && i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0a0a0a", borderTop: "1px solid var(--border)" }}>
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              className="block w-full text-left px-6 py-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
              }}
            >
              {l.label}
            </button>
          ))}
          <div className="p-6">
            <a
              href="https://wa.me/5591982258399?text=Olá%20Dr.%20Igor,%20gostaria%20de%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "#0a0a0a",
                background: "var(--silver)",
                padding: "14px",
                borderRadius: "4px",
              }}
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
