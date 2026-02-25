// ============================================================
// PONTO DE ENTRADA DO NEXT.JS
// Arquivo: pages/_app.js
//
// Esse arquivo inicializa o app. Você raramente vai mexer aqui.
// A única coisa importante é a importação do CSS global.
// ============================================================

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
