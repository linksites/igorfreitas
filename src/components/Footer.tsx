"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px 0",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, borderBottom: "1px solid var(--border)", paddingBottom: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo height={26} opacity={0.5} />
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Igor Freitas Advocacia & Consultoria Jurídica
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "WhatsApp", href: "https://wa.me/5591982258399" },
            { label: "E-mail", href: "mailto:contato@igorfreitas.adv.br" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          textAlign: "center",
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: "0.65rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          opacity: 0.5,
        }}
      >
        Desenvolvido por <span style={{ color: "var(--silver)", opacity: 1 }}>TECHLAB</span>
      </div>
    </footer>
  );
}
