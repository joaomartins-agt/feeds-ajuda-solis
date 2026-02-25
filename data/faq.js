// ============================================================
// ARQUIVO DE CONTEÚDO DO FAQ
// ============================================================
// É AQUI que você vai editar e adicionar perguntas/respostas.
// Você não precisa mexer em mais nenhum arquivo pra isso!
//
// ESTRUTURA DE CADA CATEGORIA:
// {
//   id: "identificador-unico",        <- sem espaços, só letras e hífens
//   emoji: "🔑",                      <- emoji que aparece no card
//   titulo: "Nome da categoria",
//   perguntas: [                      <- lista de perguntas
//     {
//       id: "id-da-pergunta",
//       pergunta: "Texto da pergunta?",
//       resposta: "Texto da resposta.",
//       passos: ["Passo 1", "Passo 2"],   <- OPCIONAL: lista numerada
//       lista: ["Item 1", "Item 2"],      <- OPCIONAL: lista com bullets
//       dica: "Texto de aviso importante" <- OPCIONAL: caixa de atencao
//     }
//   ]
// }
// ============================================================

export const categorias = [
  {
    id: "navegacao",
    emoji: "/icones/social-media.png",
    titulo: "O que é o Feeds",
    perguntas: [
      {
        id: "o-que-e-feeds",
        pergunta: "O que é o Feeds?",
        resposta:
          "O Feeds é a rede social do aplicativo Solis, criado pela Fundação Solidaridad Brasil, onde produtores, produtoras e técnicos compartilham vídeos, experiências e conhecimentos do campo.",
        introLista: "No Feeds, você pode:",
          lista: [
          "Assistir vídeos de outros produtores",
          "Publicar seus próprios vídeos, da sua galeria ou de outras redes sociais (Youtube, TikTok, Kawai, entre outras)",
          "Curtir, comentar e compartilhar conteúdos",
          "Aprender boas práticas de produção",
          "Aprender dicas sobre agricultura e agronegócio",
        ],
      },
    ],
  },
  {
    id: "conta",
    emoji: "/icones/cv.png",
    titulo: "Acesso e Conta",
    perguntas: [
      {
        id: "criar-conta",
        pergunta: "Como eu crio uma conta no Feeds? Preciso de senha?",
        resposta:
          "O acesso ao Feeds é simplificado. Ele é feito por um código de verificação enviado para o seu WhatsApp. Não é necessário criar login com e-mail e senha.",
        passos: [
          "Abra o aplicativo Solis",
          "Clique em \"Entrar\"",
          "Informe seu nome e número de celular",
          "Aguarde o código de autenticação enviado por WhatsApp",
          "Digite o código no aplicativo",
          "Role a tela até o final, leia os termos e marque \"Li e aceito os Termos de Condições de Uso e a Política de Privacidade\"",
          "Após isso, clique em \"Continuar\".",
          "Pronto, você está logado no Solis!",
        ],
      },
      {
        id: "codigo-nao-chegou",
        pergunta: "O código de autenticação não chegou no meu WhatsApp.",
        resposta:
          "Se o código não chegou, verifique os itens abaixo antes de tentar novamente:",
        lista: [
          "Se o número foi digitado corretamente, com o DDD do seu estado e os nove dígitos (ex: 11 91234-5678)",
          "Se o número informado tem acesso ao WhatsApp",
          "Se o celular tem sinal de internet",
          "Se o WhatsApp está funcionando normalmente",
        ],
        introPassos: ["O que fazer:"],
        passos: [
          "Aguarde aproximadamente 1 minuto após o erro acontecer",
          "Solicite o envio do código novamente",
          "Caso continue sem receber, feche o Solis e tente de novo",
          "Se o erro continuar, entre em contato com o Service Desk",
        ],
      },
      {
        id: "troquei-numero",
        pergunta: "Troquei de número de celular. Como acesso novamente?",
        resposta:
          "Se você trocou de número, ANSO",
        dica: "ANSO",
      },
    ],
  },
  {
    id: "postagem",
    emoji: "/icones/content.png",
    titulo: "Postagem de Conteúdo",
    perguntas: [
      {
        id: "publicar-video",
        pergunta: "Como eu publico um vídeo no Feeds?",
        
        introPassos: "Para publicar o seu vídeo no Feeds:",
        
        passos: [
          <span>Abra o aplicativo <strong>Solis</strong> no seu celular</span>,
          <span>Acesse o <strong>Feeds</strong></span>,
          <span>Toque no botão <strong>"+"</strong> (publicar)</span>,
          <span>
            A tela traz duas opções:
            <ul style={{ marginTop: "8px", paddingLeft: "4px", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li style={{ display: "flex", gap: "6px" }}><span style={{ color: "var(--suave)" }}>◦</span> <span><strong>Copiar um link de outro aplicativo</strong> e publicar no Solis</span></li>
              <li style={{ display: "flex", gap: "6px" }}><span style={{ color: "var(--suave)" }}>◦</span> <span><strong>Selecionar um vídeo da galeria</strong> do celular, no canto inferior da tela.</span></li>
            </ul>
          </span>,
          <span>Revise o vídeo selecionado, adicionando descrição e tags (separe-as por vírgulas)</span>,
          <span>Toque em <strong>Publicar</strong></span>,
        ],

        conclusao: "Após a conclusão da publicação, o vídeo ficará disponível no Feeds para outros usuários visualizarem, curtirem e comentarem.",
        
        importante: [
          <span>É necessário estar <strong>conectado à internet</strong> para publicar vídeos</span>,
          <span>Vídeos maiores que 30 segundos podem levar mais tempo para carregar, são mostradas mensagens do processo da subida do vídeo.</span>,
          <span>Durante o envio, evite fechar o aplicativo enquanto a mensagem sucesso no compartilhamento aparecer no topo da tela.</span>
        ]
      },
      {
        id: "gravar-pelo-app",
        pergunta: "Como gravar um vídeo direto pelo app?",
        passos: [
          "Toque no botão \"+\" no canto inferior da tela",
          "Escolha \"Escolher da minha galeria\"",
          "Selecione \"Câmera\" (Android) ou \"Gravar Vídeo\" (iOS)",
          "Grave o vídeo - máximo de 3 minutos",
          "Adicione título, descrição e tags",
          "Toque em Enviar e aguarde a mensagem de sucesso",
        ],
        dica: "Aguarde a mensagem de sucesso desaparecer antes de sair do app.",
      },
      {
        id: "video-da-galeria",
        pergunta: "Como postar um vídeo da galeria do celular?",
        passos: [
          "Toque no botão \"+\" no canto inferior da tela",
          "Escolha \"Escolher da minha galeria\"",
          "O app de fotos do celular vai abrir - escolha o vídeo",
          "Use um vídeo de até 3 minutos para evitar problemas no envio",
          "Adicione título, descrição e tags",
          "Toque em Enviar e aguarde a conclusão",
        ],
        dica: "Aguarde a mensagem de sucesso antes de fechar o aplicativo.",
      },
      {
        id: "video-autoral",
        pergunta: "O vídeo precisa ser autoral? Posso postar de outras redes?",
        resposta:
          "Não é obrigatório que o vídeo seja gravado por você. A ideia é compartilhar conteúdo útil para outros produtores. Você pode:",
        lista: [
          "Publicar vídeos gravados por você",
          "Compartilhar vídeos de outras redes (Youtube, TikTok etc.) copiando e colando o link no Feeds",
        ],
        dica: "Os vídeos precisam respeitar as regras de uso da plataforma.",
      },
      {
        id: "apagar-video",
        pergunta: "Como apagar um vídeo que eu publiquei?",
        passos: [
          "No vídeo que você publicou, toque no ícone da lixeira (ao lado das curtidas)",
          "Clique em \"Sim\" para confirmar a exclusão",
          "Pronto! O vídeo será removido do Feeds",
        ],
      },
      {
        id: "video-nao-carregou",
        pergunta: "Meu vídeo não carregou. O que fazer?",
        passos: [
          "Verifique sua conexão com a internet",
          "Aguarde alguns segundos e tente publicar novamente",
          "Se o problema continuar, feche o app e tente novamente após 1 minuto",
          "Caso não resolva, entre em contato com o Service Desk",
        ],
        dica: "Se a mensagem de sucesso não aparecer no topo da tela, o vídeo não foi publicado.",
      },
    ],
  },
  {
    id: "interacoes",
    emoji: "/icones/comment.png",
    titulo: "Curtidas e Comentários",
    perguntas: [
      {
        id: "curtir-comentar",
        pergunta: "Como curtir, comentar ou responder um comentário?",
        resposta: "As interações no Feeds são simples:",
        lista: [
          "Para curtir: toque no ícone de coração no canto direito do vídeo",
          "Para comentar: toque no ícone de balão, escreva no campo \"Digite seu comentário\" e clique no círculo amarelo para enviar",
          "Para responder um comentário: na tela de comentários, encontre o comentário, escreva sua resposta e envie",
        ],
      },
    ],
  },
  {
    id: "compartilhamento",
    emoji: "/icones/network.png",
    titulo: "Compartilhamento",
    perguntas: [
      {
        id: "compartilhar-video",
        pergunta: "Como compartilhar um vídeo com outra pessoa?",
        resposta:
          "Você pode compartilhar qualquer vídeo do Feeds por WhatsApp, SMS ou e-mail:",
        passos: [
          "Abra o vídeo que deseja compartilhar",
          "No canto inferior direito, toque no ícone da seta (compartilhar)",
          "Escolha como enviar: WhatsApp, SMS ou e-mail",
          "Se for por WhatsApp, clique em \"Abrir WhatsApp\" e escolha o contato",
          "Pronto! Conteúdo compartilhado com sucesso",
        ],
      },
    ],
  },
  {
    id: "perfil",
    emoji: "/icones/profile.png",
    titulo: "Perfil",
    perguntas: [
      {
        id: "editar-perfil",
        pergunta: "Como editar o meu perfil?",
        passos: [
          "Acesse seu Perfil pelo ícone no canto inferior direito",
          "Toque em \"Editar perfil\"",
          "Para mudar a foto: clique em \"Alterar foto\" e escolha câmera ou galeria",
          "Para mudar nome ou bio: edite os campos indicados",
          "Para mudar localização: digite o nome da cidade, aguarde a busca e escolha uma opção",
          "Toque em \"Salvar\" para confirmar as alterações",
        ],
      },
      {
        id: "sair-conta",
        pergunta: "Como eu saio da minha conta no Solis?",
        passos: [
          "Acesse seu Perfil pelo ícone no canto inferior direito",
          "Toque em \"Editar perfil\"",
          "Role a tela até o final e clique em \"Sair\"",
          "Confirme clicando em \"Sim\"",
          "Pronto! Você voltou para a tela de login",
        ],
      },
    ],
  },
  {
    id: "regras",
    emoji: "/icones/family.png",
    titulo: "Regras de Uso",
    perguntas: [
      {
        id: "o-que-posso-postar",
        pergunta: "Que tipo de conteúdo posso postar?",
        resposta:
          "O Feeds é voltado para boas práticas agrícolas e compartilhamento de conhecimento. Você pode postar:",
        lista: [
          "Boas práticas de produção da sua cadeia",
          "Suas experiências e vivências no campo",
          "Dicas, aprendizados e histórias reais",
        ],
      },
      {
        id: "o-que-nao-e-permitido",
        pergunta: "O que não é permitido no Feeds?",
        resposta:
          "Para respeitar a integridade de todos os usuários, não é permitido:",
        lista: [
          "Conteúdo ofensivo ou desrespeitoso a outros usuários",
          "Informações falsas, perigosas ou negativas",
          "Conteúdo que não tenha relação com o objetivo do Feeds",
        ],
        dica: "Conteúdos que não seguirem essas regras podem ser removidos pela moderação sem aviso prévio.",
      },
    ],
  },
  {
    id: "ajuda",
    emoji: "/icones/support.png",
    titulo: "Ajuda e Contato",
    perguntas: [
      {
        id: "nao-encontrei-duvida",
        pergunta: "Não encontrei minha dúvida. E agora?",
        resposta:
          "Se sua dúvida não está na Central de Ajuda, você pode entrar em contato com o Service Desk. Nossa equipe recebe dúvidas, sugestões e ajuda usuários das ferramentas digitais da Solidaridad. Após o envio da sua mensagem, um analista vai responder pelo WhatsApp assim que possível.",
      },
    ],
  },
];

// ============================================================
// PERGUNTAS MAIS BUSCADAS
// <- Coloque aqui os IDs das perguntas que aparecem na home
// ============================================================
export const maisPopulares = [
  { categoriaId: "postagem", perguntaId: "publicar-video" },
  { categoriaId: "conta", perguntaId: "codigo-nao-chegou" },
  { categoriaId: "postagem", perguntaId: "apagar-video" },
  { categoriaId: "perfil", perguntaId: "editar-perfil" },
  { categoriaId: "postagem", perguntaId: "video-autoral" },
];

// ============================================================
// CONFIGURAÇÕES GERAIS
// <- Edite aqui o número do WhatsApp e a mensagem padrão
// ============================================================
export const config = {
  whatsappNumero: "5511999999999", // <- coloque o número do Service Desk aqui (só números)
  whatsappMensagem: "Olá! Preciso de ajuda com o Feeds do Solis.",
  nomeApp: "Feeds · Ajuda",
  descricaoApp: "Central de suporte do Solis",
};
