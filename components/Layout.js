// ============================================================
// COMPONENTE DE LAYOUT
// ============================================================

import { useState } from "react";
import Link from "next/link";
import faqData from "../data/faq.json";

const { config } = faqData;

const whatsappLink = `https://wa.me/${config.whatsappNumero}?text=${encodeURIComponent(
  config.whatsappMensagem
)}`;

export default function Layout({ children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* ── HEADER ── */}
      <header style={{
        background:"var(--escuro)",
        padding: "12px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/logo.png" alt="Solis" style={{ height: "36px" }} />
          <span style={{
            fontFamily: "Sora, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#fff",
          }}>
            · Central de Ajuda do Solis
          </span>
        </Link>
      </header>

      {/* ── CONTEÚDO DA PÁGINA ── */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* ── RODAPÉ ── */}
      <footer style={{
        background: "var(--verde-claro)",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        fontSize: "14px",
        lineHeight: 1.6,
      }}>
        Central de Ajuda ao usuário do Solis<br />Solidaridad Network Brasil · 2026
      </footer>

      {/* ── BOTÃO FLUTUANTE COLAPSÁVEL DO WHATSAPP ── */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}>

        {/* Balão que aparece ao clicar no botão */}
        {aberto && (
          <div style={{
            background: "#fff",
            border: "1px solid var(--borda)",
            borderRadius: "12px",
            padding: "14px 16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            maxWidth: "220px",
          }}>

            {/* Título com botão X para fechar */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4px",
            }}>
              <p style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                color: "var(--escuro)",
              }}>
                Precisa de ajuda?
              </p>
              <button
                onClick={() => setAberto(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "var(--suave)",
                  padding: "0 0 0 8px",
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "12px", color: "var(--suave)", marginBottom: "12px" }}>
              Nossa equipe responde pelo WhatsApp
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                padding: "8px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Enviar uma mensagem
            </a>
          </div>
        )}

        {/* Botão redondo cinza */}
        <button
          onClick={() => setAberto(!aberto)}
          style={{
            background: "#6B6B6B",
            border: "none",
            borderRadius: "50%",
            width: "52px",
            height: "52px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          <img src="/whatsapp.png" alt="WhatsApp" style={{ width: "28px", height: "28px" }} />
        </button>

      </div>

    </div>
  );
}