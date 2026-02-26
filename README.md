# 📱 Central de Ajuda — Feeds Solis

Bem-vindo(a) ao repositório da Central de Ajuda do Solis! Este é um projeto construído em Next.js (React) focado em ser rápido, responsivo e amigável para os usuários.

---

## 💻 Como rodar o projeto no seu computador

Se você acabou de baixar o projeto ou fechou o VS Code, siga estes passos para ver o site funcionando no seu navegador:

1. Abra o terminal do VS Code.
2. (Primeira vez apenas) Digite `npm install` para instalar as dependências.
3. Digite `npm run dev` para ligar o servidor.
4. Abra o navegador e acesse: `http://localhost:3000`

---

## 🗂️ Estrutura de arquivos

Abaixo está o mapa para você se encontrar facilmente no código:

feeds-ajuda/
│
├── data/
│   └── faq.json        ← ⭐ ARQUIVO PRINCIPAL — edite aqui os textos, vídeos e categorias
│
├── pages/
│   ├── _app.js         ← inicialização do app (não mexa)
│   ├── index.js        ← página inicial (home)
│   ├── busca.js        ← página de resultados de busca
│   └── categoria/
│       └── [id].js     ← modelo da página de cada categoria individual
│
├── components/
│   └── Layout.js       ← header, rodapé e configurações globais do site
│
├── styles/
│   └── globals.css     ← cores, grids e fontes globais
│
├── package.json        ← dependências do projeto
└── next.config.js      ← configuração do Next.js


---

## ✏️ Como editar ou adicionar conteúdo

Todo o conteúdo de texto do site vive dentro do arquivo **`data/faq.json`**. Como é um arquivo JSON, lembre-se de usar **aspas duplas** em tudo e não esquecer das vírgulas separando os itens.

### 🪄 Dica de formatação (Negrito)
Em qualquer lugar do texto (respostas, passos, conclusões), você pode colocar palavras em **negrito** colocando dois asteriscos em volta delas.
Exemplo: `"Abra o aplicativo **Solis** e clique em **Entrar**"`

### Como adicionar uma nova pergunta
Encontre a categoria onde a pergunta se encaixa no `faq.json` e adicione um novo bloco como este dentro da lista de `"perguntas"`:

{
  "id": "minha-nova-pergunta",
  "pergunta": "Como fazer X?",
  "resposta": "Para fazer X, você deve seguir estes passos.",
  "introPassos": "Siga o passo a passo abaixo:",
  "passos": [
    "Passo 1: faça isso",
    "Passo 2: depois isso"
  ],
  "dica": "Lembre-se de salvar antes de sair."
}

Você pode usar os campos `"resposta"`, `"lista"`, `"passos"`, `"conclusao"`, `"importante"` e `"dica"` juntos ou separados, o site vai se adaptar automaticamente ao que você preencher.

### Como adicionar uma nova categoria
Adicione um novo bloco no array `"categorias"`:

{
  "id": "nova-categoria",
  "emoji": "/icones/seu-icone.png",
  "titulo": "Nome da Categoria",
  "perguntas": [
    ...
  ]
}

A nova categoria vai aparecer automaticamente na tela inicial e a página dela será gerada sozinha.

---

## 🚀 Como publicar as atualizações no site oficial (Vercel)

O site está conectado à Vercel. Isso significa que qualquer alteração enviada para o GitHub entra no ar automaticamente em cerca de 1 a 2 minutos.

**Pelo VS Code:**
1. Clique no ícone de **Controle do Código-Fonte** na barra lateral esquerda (ou aperte `Cmd + Shift + G`).
2. Passe o mouse sobre "Changes" (Alterações) e clique no botão **`+`** para preparar os arquivos.
3. Na caixa "Message" (Mensagem), digite o que você mudou (Ex: "Adicionei a pergunta X").
4. Clique em **Commit**.
5. Clique no botão azul **Sync Changes** (Sincronizar Alterações).
6. Pronto! A Vercel fará o resto.

---

## ❓ Dúvidas da Estrutura

**P: O que é o `[id].js` na pasta de categoria?** R: É uma rota dinâmica do Next.js. O `[id]` vira a parte variável da URL (ex: `/categoria/conta`, `/categoria/postagem`). Um único arquivo inteligente serve para exibir todas as categorias do site.

**P: Posso editar o design das páginas?** R: Sim! Os arquivos na pasta `pages/` usam React (JSX), que parece muito com HTML. A estrutura visual da página fica dentro do `return (...)` de cada arquivo.