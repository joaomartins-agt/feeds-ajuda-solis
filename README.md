# 📱 Central de Ajuda — Feeds Solis

Guia completo de como rodar, editar e publicar esse projeto.

---

## 🗂️ Estrutura de arquivos

```
feeds-ajuda/
│
├── data/
│   └── faq.js          ← ⭐ ARQUIVO PRINCIPAL — edite aqui o conteúdo do FAQ
│
├── pages/
│   ├── _app.js         ← inicialização do app (não mexa)
│   ├── index.js        ← página inicial (home)
│   ├── busca.js        ← página de resultados de busca
│   └── categoria/
│       └── [id].js     ← página de cada categoria
│
├── components/
│   └── Layout.js       ← header, rodapé e botão do WhatsApp
│
├── styles/
│   └── globals.css     ← cores e fontes globais
│
├── package.json        ← dependências do projeto
└── next.config.js      ← configuração do Next.js
```


---

## ✏️ Como adicionar uma nova pergunta

Abra o arquivo `data/faq.js` e encontre a categoria onde a pergunta se encaixa.  
Dentro do array `perguntas`, adicione um novo objeto:

```js
{
  id: "minha-nova-pergunta",      // ← único, sem espaços ou acentos
  pergunta: "Como fazer X?",
  resposta: "Para fazer X, você deve...",

  // OPCIONAL: lista com bullets
  lista: [
    "Primeiro item",
    "Segundo item",
  ],

  // OPCIONAL: passos numerados
  passos: [
    "Passo 1: faça isso",
    "Passo 2: depois isso",
  ],

  // OPCIONAL: caixa de atenção amarela
  dica: "Atenção: lembre-se de salvar antes de sair.",
}
```

Você pode usar `lista`, `passos` e `dica` separados ou combinados.

---

## ➕ Como adicionar uma nova categoria

No arquivo `data/faq.js`, adicione um novo objeto no array `categorias`:

```js
{
  id: "nova-categoria",     // ← sem espaços ou acentos
  emoji: "⭐",
  titulo: "Nome da Categoria",
  perguntas: [
    // suas perguntas aqui
  ],
},
```

A nova categoria vai aparecer automaticamente no grid da home e ter sua própria página em `/categoria/nova-categoria`.

---

## 🔧 Como mudar o número do WhatsApp

Abra `data/faq.js` e vá até o final do arquivo. Edite:

```js
export const config = {
  whatsappNumero: "5511999999999", // ← só números, com DDI e DDD
  whatsappMensagem: "Olá! Preciso de ajuda com o Feeds do Solis.",
  // ...
};
```

---

## 🎨 Como mudar as cores

Abra `styles/globals.css` e edite as variáveis no topo:

```css
:root {
  --verde: #2D6A4F;         /* cor principal */
  --verde-claro: #52B788;   /* destaque e hover */
  --amarelo: #F4A522;       /* botão de ação */
}
```

---

## 🌐 Como publicar no Vercel

1. Crie uma conta grátis em https://vercel.com
2. Instale o Git e suba o projeto para o GitHub
3. No Vercel, clique em "Add New Project" e conecte o repositório
4. Clique em "Deploy" — o Vercel faz tudo automaticamente

Para conectar um domínio próprio (ex: `ajuda.seudominio.com.br`):
1. No painel do Vercel, vá em Settings → Domains
2. Adicione seu domínio
3. No seu provedor de domínio, crie um registro **CNAME** apontando para `cname.vercel-dns.com`

---

## ❓ Perguntas frequentes de desenvolvimento

**P: Preciso rodar `npm install` toda vez?**  
R: Não. Só na primeira vez ou quando alguém adicionar uma dependência nova ao `package.json`.

**P: Como vejo as mudanças em tempo real?**  
R: Com `npm run dev` rodando, qualquer mudança nos arquivos aparece automaticamente no navegador.

**P: O que é o `[id]` na pasta de categoria?**  
R: É uma rota dinâmica do Next.js. O `[id]` vira a parte variável da URL — `/categoria/conta`, `/categoria/postagem` etc. Um único arquivo serve para todas as categorias.

**P: Posso editar o HTML das páginas?**  
R: Sim! Os arquivos em `pages/` são componentes React, que parece muito com HTML. Qualquer coisa dentro de `return (...)` é o que aparece na tela.
