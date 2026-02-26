// ============================================================
// PÁGINA INICIAL (HOME)
// ============================================================

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import faqData from "../data/faq.json";

const { categorias, maisPopulares } = faqData;

// Componente que gerencia o clique no vídeo para rodar na tela
function VideoCard({ video }) {
  const [tocando, setTocando] = useState(false);

  return (
    <div style={{
      height: "100%", /* 👈 Altura travada para alinhar com os outros cards */
      background: "var(--branco)",
      border: "1px solid var(--borda)",
      borderRadius: "10px",
      overflow: "hidden",
      transition: "border-color 0.15s, box-shadow 0.15s",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--verde-claro)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(45,106,79,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--borda)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Se clicou em tocar, mostra o player do Youtube. Se não, mostra a imagem. */}
      {tocando ? (
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block", aspectRatio: "9/16" }}
        ></iframe>
      ) : (
        <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setTocando(true)}>
          <img
            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
            alt={video.titulo}
            style={{ width: "100%", display: "block", aspectRatio: "9/16", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.2)",
          }}>
            <div style={{
              background: "rgba(0,0,0,0.8)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ color: "#fff", fontSize: "14px", marginLeft: "2px" }}>▶</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Título do vídeo ajustado */}
      <div style={{ padding: "10px 12px", height: "48px" }}>
        <p style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          color: "var(--escuro)",
          lineHeight: 1.4,
          margin: 0,
          textWrap: "balance",
          wordBreak: "break-word"
        }}>
          {video.titulo}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [busca, setBusca] = useState("");
  const router = useRouter();

  function handleBusca(e) {
    e.preventDefault();
    if (busca.trim()) {
      router.push(`/busca?q=${encodeURIComponent(busca.trim())}`);
    }
  }

  const perguntasPopulares = maisPopulares.map(({ categoriaId, perguntaId }) => {
    const cat = categorias.find((c) => c.id === categoriaId);
    const perg = cat?.perguntas.find((p) => p.id === perguntaId);
    return { ...perg, categoriaId };
  });

  return (
    <Layout>

      {/* ── HERO com busca ── */}
      <div style={{
        background: "url('/cenario.png') center/cover no-repeat",
        padding: "20px 20px 56px", /* 👈 Diminuí o espaço do topo de 48px para 20px para acomodar o link */
        textAlign: "center",
      }}>
        
        {/* 👇 NOVO: Link Voltar ao Feeds */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <a 
            href="https://solisapp.org" 
            style={{
              color: "var(--escuro)",
              textDecoration: "underline",
              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              opacity: 0.7, /* Deixa o link mais clarinho e sutil */
              transition: "opacity 0.2s" /* Animação suave */
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0.7}
          >
            ‹ voltar ao Feeds
          </a>
        </div>

        <h1 style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "clamp(22px, 5vw, 32px)",
          fontWeight: 700,
          color: "#6dc59c",
          marginBottom: "8px",
        }}>
          Como podemos te ajudar?
        </h1>
        <p style={{
          color: "#1e1e1e",
          marginBottom: "28px",
          fontSize: "15px",
        }}>
          Encontre em nossas publicações respostas para você aproveitar ao máximo do Feeds
        </p>

        <form onSubmit={handleBusca} style={{ maxWidth: "480px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="Como eu posto um vídeo no Feeds?"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{
                flex: 1,
                padding: "13px 18px",
                borderRadius: "8px",
                border: "none",
                fontSize: "13px",
                fontFamily: "Arial, sans-serif",
                outline: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#42c16c",
                border: "none",
                borderRadius: "8px",
                padding: "0 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <img src="icones/search.png" alt="Buscar" style={{ width: "18px", height: "18px" }} />
            </button>
          </div>
        </form>
      </div>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 20px" }}>

        {/* Grid de categorias */}
        <h2 style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--suave)",
          marginBottom: "16px",
        }}>
          Categorias
        </h2>

        <div className="grid-4-colunas"> {/* 👈 Nova classe aplicada aqui! */}
          {categorias.map((cat) => (
            <Link key={cat.id} href={`/categoria/${cat.id}`} style={{ textDecoration: "none", display: "block" }}> {/* 👈 Adicionado display: "block" */}
              <div style={{
                height: "100%", /* 👈 Altura travada para alinhar com os outros cards */
                background: "var(--branco)",
                border: "1px solid var(--borda)",
                borderRadius: "10px",
                padding: "18px 16px",
                cursor: "pointer",
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--verde-claro)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(45,106,79,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--borda)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img src={cat.emoji} alt={cat.titulo} style={{ width: "32px", height: "32px", marginBottom: "8px" }} />
                <div style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "var(--escuro)",
                  marginBottom: "4px",
                  lineHeight: 1.3,       
                  textWrap: "balance",  
                  wordBreak: "break-word"
                }}>
                  {cat.titulo}
                </div>
                <div style={{ fontSize: "12px", color: "var(--suave)" }}>
                  {cat.perguntas.length} {cat.perguntas.length === 1 ? "publicação" : "publicações"}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Perguntas mais populares */}
        <h2 style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--suave)",
          marginBottom: "16px",
        }}>
          Publicações mais populares pelos usuários
        </h2>

        <div style={{
          background: "var(--branco)",
          border: "1px solid var(--borda)",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "48px",
        }}>
          {perguntasPopulares.map((perg, i) => (
            <Link
              key={perg.id}
              href={`/categoria/${perg.categoriaId}#${perg.id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px 18px",
                borderBottom: i < perguntasPopulares.length - 1 ? "1px solid var(--borda)" : "none",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--verde-palido)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <span style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  color: "#42c16c",
                  width: "20px",
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: "14px", color: "#4A4A4A", fontWeight: 600, flex: 1 }}>
                  {perg.pergunta}
                </span>
                <span style={{ color: "var(--suave)", fontSize: "16px" }}>›</span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── VÍDEOS QUE PODEM TE AJUDAR ── */}
        <h2 style={{
          fontFamily: "Sora, sans-serif",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--suave)",
          marginBottom: "16px",
          marginTop: "48px",
        }}>
          Vídeos que podem te ajudar
        </h2>

        <div className="grid-4-colunas"> {/* 👈 Nova classe aplicada aqui também! */}
          {faqData.videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </Layout>
  );
}