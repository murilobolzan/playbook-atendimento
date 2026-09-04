/* ═══════════════════════════════════════════════════════════════════════════
   RESPOSTAS RÁPIDAS — a biblioteca de respostas padrão
   ═══════════════════════════════════════════════════════════════════════════

   NÃO É PRECISO EDITAR ESTE ARQUIVO À MÃO.

   O jeito normal de mexer aqui é pela própria tela: no tópico Respostas
   rápidas, use "＋ Nova resposta" para criar e o lápis de cada card para
   editar. Com o acesso configurado, o playbook grava a alteração aqui
   sozinho e o site se atualiza em cerca de 40 segundos.

   Editar na mão funciona, mas foi assim que o arquivo já quebrou uma vez:
   um bloco colado no lugar errado derruba a página inteira. Se for editar
   aqui mesmo, confira as chaves e as vírgulas.

   A estrutura tem dois níveis, aba e sub-aba, e dentro os itens:
     titulo   = a dúvida como o cliente costuma trazer
     tags     = palavras que a busca também deve encontrar
     resposta = uma linha por parágrafo, aceita <strong>negrito</strong>
     imagem   = caminho do print, opcional
     interno  = true marca como procedimento que não vai para o cliente
   ═══════════════════════════════════════════════════════════════════════════ */

const RESPOSTAS = [
  {
    id: "reservas",
    aba: "Reservas",
    subs: [
      { id: "res-visao", sub: "Visão Geral", itens: [] },
      { id: "res-nova", sub: "Nova Reserva", itens: [] },
      { id: "res-proximas", sub: "Próximas Reservas", itens: [] },
      { id: "res-pendentes", sub: "Reservas Pendentes", itens: [] },
      {
        id: "reservas-bloqueio",
        sub: "Bloqueio",
        itens: [
          {
            titulo: "Como faço para bloquear uma área?",
            tags: ["Dúvida", "Reserva", "bloqueio", "bloquear area", "bloquear mesa", "bloquear dia", "fechar agenda", "feriado", "evento privado", "dia inteiro", "intervalo de horario", "nao aceitar reserva", "periodo do bloqueio", "salvar bloqueio"],
            imagem: "img/captura-de-tela-2026-09-01-162222.png",
            resposta: [
              "Para criar um bloqueio na plataforma, basta seguir este passo a passo:",
              "1. Acesse a aba “Reservas” > “Bloqueios”.",
              "2. Clique para adicionar um novo bloqueio e informe um título e, se desejar, uma descrição.",
              "3. Configure o período do bloqueio, selecionando as datas e definindo se deseja bloquear o dia inteiro, apenas um período específico ou um intervalo de horário.",
              "4. Selecione as áreas que serão afetadas pelo bloqueio.",
              "5. Revise todas as informações configuradas.",
              "6. Após a confirmação, salve o bloqueio para que ele fique ativo na plataforma.",
              "Assim, durante o período e nas áreas selecionadas, a plataforma não permitirá novas reservas.",
              "Após isso, basta entrar no link de reservas que você pode obter dentro da aba Links, e tentar efetuar uma reserva para o dia ou o período que você bloqueou. Caso você não consiga, o bloqueio foi efetuado corretamente."
            ]
          }
        ]
      },
      {
        id: "res-areas",
        sub: "Áreas e Mesas",
        itens: [
          {
            titulo: "Tempo de antecedência / Dias de antecedência / Horário limite para fazer uma reserva",
            tags: ["Ajuste", "Reserva", "Configurações gerais", "antecedencia", "dias de antecedencia", "tempo de antecedencia", "horario limite", "configuracoes avancadas", "mesmo dia", "23:59", "areas e mesas", "reserva de ultima hora", "limite geral", "editar horarios da area"],
            imagem: "img/res-areas-antecedencia.png",
            resposta: [
              "Em <strong>Reservas &gt; Áreas e Mesas &gt; Configurações Avançadas</strong>, o horário limite geral para reservas no mesmo dia estava configurado como XX:XX.",
              "Para que a configuração de antecedência das reservas, definida dentro da edição dos horários de cada área, funcione corretamente, é necessário que esse limite geral esteja configurado para <strong>23:59</strong>. Dessa forma, a antecedência definida em cada área será considerada corretamente pela plataforma."
            ]
          },
          {
            titulo: "Reservas pagas: como configurar, taxa e repasse",
            tags: ["Financeiro", "Reserva", "reserva paga", "cobrar reserva", "caucao", "consumacao", "taxa", "10%", "pix", "cartao", "repasse", "D+1", "D+30", "chave pix", "intermediadora", "taxa para o cliente", "valor da reserva"],
            resposta: [
              "Podemos configurar essa questão diretamente em <strong>Reservas &gt; Áreas e Mesas</strong>. Para isso, só preciso que você me informe exatamente como gostaria que essa dinâmica funcionasse, para conseguirmos realizar a configuração corretamente.",
              "Também conseguimos configurar o pagamento como <strong>caução</strong> ou, se preferirem, fazer com que o valor pago seja revertido em <strong>consumação</strong> no estabelecimento. Essa pode ser uma alternativa interessante para tornar a reserva mais atrativa para o cliente.",
              "Sobre os pagamentos realizados pela plataforma, é aplicada uma <strong>taxa de 10%</strong>, tanto para pagamentos via Pix quanto via cartão. O prazo de repasse é de <strong>D+1</strong> para pagamentos via Pix e <strong>D+30</strong> para pagamentos via cartão.",
              "Para receber os valores, basta cadastrar a chave Pix de vocês na plataforma, e os repasses serão realizados diretamente para essa chave. O processo funciona de forma semelhante a uma intermediadora de pagamentos.",
              "Caso prefiram, essa taxa também pode ser repassada ao cliente no momento do pagamento."
            ]
          },
          {
            titulo: "Dias de Antecedencia",
            tags: ["Ajuste", "Reserva", "dias de antecedencia", "antecedencia", "configuracoes avancadas", "areas e mesas", "quantos dias", "liberar dias automaticamente", "periodo de reserva", "agenda aberta", "reservas", "dias", "tempo"],
            imagem: "img/whatsapp-image-2026-09-01-at-17-12-45.png",
            resposta: [
              "Em “Reservas” > “Áreas e Mesas” > “Configurações Avançadas”, você consegue verificar por quantos dias de antecedência os clientes podem realizar uma reserva.",
              "Ao alterar essa quantidade de dias, novos dias vão sendo liberados automaticamente para que os clientes consigam realizar as reservas dentro do período configurado."
            ]
          }
        ]
      },
      {
        id: "res-historico",
        sub: "Histórico",
        itens: [
          {
            titulo: "Como consultar o histórico de reservas",
            tags: ["Dúvida", "Reserva", "Relatórios", "historico", "historico de reservas", "consultar reserva", "buscar reserva", "filtro", "nome telefone email", "periodo", "status da reserva", "confirmada", "cancelada pelo cliente", "cancelada pelo estabelecimento", "salao", "reserva passada", "status", "cancelada"],
            imagem: "img/res-historico.png",
            resposta: [
              "Na aba <strong>Reservas &gt; Histórico</strong>, você consegue consultar o histórico das reservas utilizando diferentes filtros. É possível buscar pelo nome, telefone ou e-mail do cliente, caso ele tenha informado esses dados, além de selecionar o período que deseja consultar.",
              "Nessa mesma aba, também é possível verificar o status de cada reserva passada, como confirmada, cancelada pelo cliente, cancelada pelo estabelecimento, entre outros status disponíveis.",
              "Além disso, você pode utilizar filtros específicos para consultar reservas de um determinado salão ou horário."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "whatsapp",
    aba: "WhatsApp",
    subs: [
      {
        id: "wpp-conectar",
        sub: "Conectar WhatsApp",
        itens: [
          {
            titulo: "Reclamação do erro que aparece na Meta",
            tags: ["Reclamação", "Conexão", "meta", "erro na meta", "portfolio empresarial", "status do numero", "limitacao", "aviso", "qualidade do numero", "painel", "atualizacao", "transparencia", "erro", "status"],
            imagem: "img/wpp-meta.png",
            resposta: [
              "Recentemente, lançamos uma atualização no painel justamente para dar mais transparência sobre a conexão com a Meta. Agora, algumas informações que antes apareciam somente dentro do Portfólio Empresarial de vocês também ficam visíveis diretamente no nosso sistema.",
              "Essa análise já era realizada pela própria Meta. A diferença é que, agora, nós também passamos a exibir esse status para vocês, facilitando o acompanhamento do número e deixando mais claro qualquer aviso ou limitação informada pela Meta."
            ]
          },
          {
            titulo: "A instância do WhatsApp ainda não foi provisionada",
            tags: ["Bug", "Conexão", "Interno", "instancia", "instancia nao provisionada", "provisionar", "zapi", "status zapi", "ativar instancia", "conectar whatsapp", "nao conecta", "provisionada", "conectar"],
            interno: true,
            resposta: [
              "O membro CS terá que ir na aba WhatsApp, conectar o WhatsApp e ativar a instância ao lado do <strong>Status ZApi</strong>.",
              "Essa configuração interna da Dionísio não aparece para o cliente."
            ]
          }
        ]
      },
      {
        id: "whatsapp-conversas",
        sub: "Conversas",
        itens: [
          {
            titulo: "Atendimento Humano",
            tags: ["Dúvida", "Atendimento", "IA", "atendimento humano", "ia parou de responder", "ia interrompe", "assumir conversa", "fila de atendimento", "encaminhamento", "duplicidade", "responder pela rede social", "equipe assume", "ia sem informacao suficiente", "cliente pediu humano", "Conversa", "Humano", "Resposta"],
            imagem: "img/captura-de-tela-2026-09-02-133203.png",
            resposta: [
              "Após o cliente ser encaminhado para o Atendimento Humano, a IA interrompe a conversa e a equipe de vocês assume o atendimento.",
              "Isso pode acontecer quando:",
              "• A IA não possui informações suficientes para responder.",
              "Solução: adicionar a informação em Configuração de IA > Informações.",
              "• O cliente solicita atendimento humano.",
              "Nesse caso, a IA realiza automaticamente o encaminhamento para evitar atritos durante o atendimento.",
              "• Alguém da equipe responde diretamente pela rede social.",
              "A IA identifica que um humano assumiu a conversa e interrompe as respostas para evitar duplicidade.",
              "• A equipe assume a conversa diretamente pela plataforma.",
              "Nesse caso, a IA também interrompe o atendimento para que a equipe possa prosseguir.",
              "O atendimento pode ser realizado tanto pela própria rede social quanto diretamente pela plataforma.",
              "Obs.: dentro da plataforma, os clientes encaminhados para Atendimento Humano ficam identificados e direcionados para a fila de atendimento, facilitando a visualização e o acompanhamento dessas conversas."
            ]
          }
        ]
      },
      {
        id: "whatsapp-erros-whatsapp-meta",
        sub: "Erros WhatsApp / Meta",
        itens: [
          {
            titulo: "Erro de 24h após a última mensagem do cliente",
            tags: ["Bug", "Conexão", "Disparos", "janela de atendimento", "24 horas", "template", "template aprovado", "meta", "nao consigo responder", "retomar conversa", "disparo", "cobranca por categoria", "mensagem nao solicitada", "janela encerrada", "regra da meta", "Erro", "WhatsApp"],
            resposta: [
              "Quando um cliente envia uma mensagem para vocês pelo WhatsApp, é aberta uma janela de atendimento de 24 horas.",
              "Durante esse período, vocês podem responder normalmente ao cliente, sem a necessidade de utilizar um template.",
              "Porém, após 24 horas da última mensagem enviada pelo cliente, a Meta encerra essa janela de atendimento. A partir desse momento, não é possível enviar uma nova mensagem livremente para retomar a conversa.",
              "Para entrar em contato novamente, é necessário utilizar um template de mensagem previamente aprovado pela Meta. Esse envio é considerado um disparo e pode ter cobrança, dependendo da categoria da mensagem utilizada.",
              "Essa é uma regra da própria Meta, criada para evitar que empresas enviem mensagens não solicitadas para os usuários.",
              "Então, mesmo que vocês já tenham conversado anteriormente com o cliente, caso tenham passado mais de 24 horas desde a última mensagem dele, será necessário utilizar um template aprovado para iniciar uma nova interação."
            ]
          },
          {
            titulo: "Verificar Business Manager",
            tags: ["BM", "Portifólio", "Empresarial", "Business Manager", "Erro", "Meta", "Conexão", "WhatsApp"],
            imagem: "img/captura-de-tela-2026-09-04-100248.png",
            resposta: [
              "Para realizar a verificação do Business Manager, siga este passo a passo:",
              "1. Acesse o Business Manager pelo endereço business.facebook.com utilizando uma conta com acesso de administrador.",
              "2. No menu lateral, acesse “Configurações”.",
              "3. Dentro das configurações, procure a seção “Informações da Empresa”, localizada na parte superior da tela.",
              "4. Acesse “Detalhes da Empresa”. Nessa área, ficarão disponíveis os dados cadastrais da empresa.",
              "5. Clique em “Editar” para habilitar a edição das informações.",
              "6. Preencha todas as informações solicitadas, como nome legal da empresa, CNPJ, endereço, telefone e site. É importante que todos os dados estejam completos e corretos.",
              "7. Após preencher as informações, solicite a verificação do negócio. Para isso, clique em “Iniciar verificação”.",
              "A verificação do negócio é obrigatória para registrar números e enviar templates. Por isso, recomendamos preencher todas as informações corretamente para evitar que a solicitação seja reprovada."
            ]
          }
        ]
      },
      {
        id: "whatsapp-etiquetas",
        sub: "Etiquetas",
        itens: [
          {
            titulo: "Etiqueta",
            tags: ["Dúvida", "Atendimento", "CRM", "etiqueta", "etiquetas", "marcar conversa", "criar etiqueta", "filtro de conversa", "nome do cliente", "organizar conversas", "ver so uma etiqueta", "aplicar filtro", "Cliente", "WhatsApp", "Conversa"],
            imagem: "img/captura-de-tela-2026-09-03-111121.png",
            resposta: [
              "Para adicionar uma etiqueta a uma conversa, basta clicar no nome do cliente, na parte superior central da conversa. Ao lado, você encontrará a aba “Etiquetas”.",
              "Ao clicar nessa opção, você poderá selecionar uma etiqueta que já foi criada ou criar uma nova.",
              "Depois, caso queira visualizar apenas as conversas que possuem determinada etiqueta, na parte esquerda da tela, um pouco acima das conversas, você poderá aplicar os filtros! É possível selecionar todas as etiquetas ou apenas a etiqueta específica que deseja utilizar para visualizar os clientes!"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "links",
    aba: "Links",
    subs: [
      {
        id: "links-loja",
        sub: "Links da Loja",
        itens: [
          {
            titulo: "Quais links a loja tem e para que serve cada um",
            tags: ["Dúvida", "CRM", "link rastreavel", "links da loja", "link de reserva", "bio do instagram", "anuncio meta", "origem do cliente", "campanha", "utm", "de onde vem o cliente", "canal", "link simples", "rastrear", "bio instagram", "origem"],
            imagem: "img/links-loja.png",
            resposta: [
              "Na aba <strong>Links &gt; Links da Loja</strong>, você consegue obter links rastreáveis para cada tipo de operação da loja, como, por exemplo, as reservas.",
              "Para as reservas, você pode utilizar diferentes tipos de links: link simples, não rastreável; link específico para a bio do Instagram, rastreável; e link para anúncios da Meta, também rastreável.",
              "Ao utilizar o link específico de cada canal ou campanha, conseguimos identificar a origem dos clientes que estão realizando as ações pela plataforma. Dessa forma, fica mais fácil acompanhar de onde estão vindo os clientes e quais canais estão gerando mais resultados."
            ]
          }
        ]
      },
      {
        id: "links-rastreaveis",
        sub: "Links Rastreáveis",
        itens: [
          {
            titulo: "Como adicionar e organizar links num só lugar",
            tags: ["Dúvida", "linktree", "adicionar link", "organizar links", "pagina de links", "bio do instagram", "divulgacao", "agrupar links", "varios links em um lugar", "bio"],
            imagem: "img/links-rastreaveis.png",
            resposta: [
              "Na aba <strong>Links &gt; Links Rastreáveis</strong>, você consegue adicionar e organizar diferentes links em um único local, funcionando de forma semelhante ao Linktree.",
              "Para adicionar um novo link, basta clicar na opção disponível no canto superior direito. A plataforma irá reunir os links cadastrados em uma única página, que você poderá utilizar para divulgação, por exemplo, na bio do Instagram ou em outros canais de comunicação."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "satisfacao",
    aba: "Satisfação",
    subs: [
      {
        id: "sat-nps",
        sub: "Pesquisas NPS",
        itens: [
          {
            titulo: "Como funcionam as pesquisas de NPS e quando são disparadas",
            tags: ["Dúvida", "Satisfação", "nps", "pesquisa nps", "pesquisa de satisfacao", "analytics", "notificacoes", "disparo", "quando dispara", "3 horas", "fila", "sentado", "criar pesquisa", "editar pergunta", "configurar whatsapp", "reserva finalizada", "pesquisa"],
            imagem: "img/sat-nps.png",
            resposta: [
              "Dentro da aba <strong>Satisfação &gt; Pesquisas NPS</strong>, você consegue visualizar todas as pesquisas que estão sendo enviadas aos clientes em cada tipo de situação.",
              "Ao clicar em uma pesquisa, é possível verificar as perguntas que estão sendo realizadas, as respostas recebidas e também acessar a aba de Analytics, para acompanhar os resultados.",
              "Também é possível criar novas pesquisas com as perguntas que vocês desejarem, além de editar e modificar as perguntas das pesquisas que já foram criadas.",
              "Já na aba <strong>Configurar o WhatsApp</strong>, localizada no canto superior direito, você será direcionado para a página de Notificações. Nessa área, consegue configurar qual pesquisa será enviada em cada situação e definir após quanto tempo ela deverá ser disparada.",
              "No caso das reservas, o período configurado começa a ser contado após <strong>3 horas</strong> do horário de início da reserva, momento em que ela é considerada finalizada pela plataforma. Já no caso da fila, o período começa a ser contado a partir do momento em que o cliente é marcado como <strong>sentado</strong> no estabelecimento."
            ]
          }
        ]
      },
      {
        id: "sat-conversas",
        sub: "Nas Conversas",
        itens: [
          {
            titulo: "Não consigo visualizar esses feedbacks negativos / Como visualizo os feedbacks das conversas?",
            tags: ["Dúvida", "Satisfação", "feedback", "feedback negativo", "elogio", "reclamacao", "nas conversas", "ia identificou", "onde vejo", "nao consigo visualizar", "conversas", "negativo"],
            imagem: "img/sat-conversas.png",
            resposta: [
              "Dentro da aba <strong>Satisfação</strong>, na sub-aba <strong>Nas Conversas</strong>, você consegue visualizar as mensagens de elogios ou reclamações que a IA identificou durante os atendimentos aos clientes. Assim, fica mais fácil acompanhar os principais feedbacks recebidos diretamente nas conversas."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "config-ia",
    aba: "Configuração de IA",
    subs: [
      { id: "ia-identidade", sub: "Identidade", itens: [] },
      {
        id: "ia-canais",
        sub: "Canais Conectados",
        itens: [
          {
            titulo: "Como verificar se WhatsApp e Instagram estão conectados",
            tags: ["Ajuste", "IA", "Conexão", "canais conectados", "ativar ia", "inativar ia", "desligar ia", "whatsapp", "instagram", "identidade", "salvar", "ia nao responde", "verificar conexao", "inativar"],
            imagem: "img/ia-canais.png",
            resposta: [
              "Em <strong>Configuração de IA &gt; Identidade &gt; Canais Conectados</strong>, você consegue verificar se o seu WhatsApp e Instagram estão conectados à plataforma.",
              "Nessa mesma área, também é possível ativar ou inativar a IA para cada canal. Após realizar qualquer alteração, lembre-se sempre de <strong>salvar</strong> as configurações para que ela seja aplicada corretamente."
            ]
          }
        ]
      },
      {
        id: "ia-caracteristicas",
        sub: "Características Geral da IA",
        itens: [
          {
            titulo: "Nome e Gênero, Tamanho das Respostas, Tom de Voz, Recursos",
            tags: ["Dúvida", "IA", "nome da ia", "genero", "tom de voz", "tamanho da resposta", "emoji", "bullet points", "recursos", "identidade", "assistente", "perguntas e respostas", "reagir mensagem", "como a ia fala", "nome"],
            imagem: "img/ia-caracteristicas.png",
            resposta: [
              "Dentro da aba <strong>Configuração de IA &gt; Identidade</strong>, conseguimos configurar diferentes características da assistente, como o nome e gênero da assistente, o tamanho das respostas que ela irá enviar e o tom de voz utilizado durante os atendimentos.",
              "Também dá para escolher os recursos que a IA poderá utilizar, como emojis, bullet points, que ajudam a organizar as informações por tópicos, respostas em formato de perguntas e respostas, além da possibilidade de reagir às mensagens dos clientes.",
              "Essas configurações vão ajudar a definir a forma como a IA irá se comunicar e se comportar durante os atendimentos."
            ]
          }
        ]
      },
      {
        id: "ia-regras",
        sub: "Regras de Comportamento e Gírias e Expressões",
        itens: [
          {
            titulo: "Regras de Comportamento e Gírias e Expressões",
            tags: ["Ajuste", "IA", "regras de comportamento", "girias e expressoes", "girias", "expressoes regionais", "mais vendedora", "mais direta", "menos repetitiva", "mais animada", "mais formal", "emoji autorizado", "identidade", "regras", "comportamento", "expressoes", "vendedora", "formal", "emoji", "regional"],
            imagem: "img/ia-regras.png",
            resposta: [
              "Dentro da aba <strong>Configuração de IA &gt; Identidade</strong>, nos dois últimos tópicos, você encontra as opções <strong>Regras de Comportamento</strong> e <strong>Gírias e Expressões</strong>.",
              "Em Regras de Comportamento, é possível definir como a IA deve se comportar durante os atendimentos, como ser mais vendedora, mais direta, menos repetitiva, mais animada, mais formal, entre outras orientações.",
              "Já em Gírias e Expressões, você consegue definir gírias e expressões regionais que a IA poderá utilizar durante as conversas. Também é possível informar quais emojis a IA está autorizada a utilizar nas mensagens.",
              "Caso tenha qualquer dúvida durante essa configuração, pode me chamar por aqui que te auxilio!"
            ]
          }
        ]
      },
      {
        id: "ia-informacoes",
        sub: "Informações",
        itens: [
          {
            titulo: "Informação para dia específico",
            tags: ["Ajuste", "IA", "informacao", "validade", "dia especifico", "periodo definido", "evento", "programar informacao", "informacao temporaria", "adicionar informacao", "apenas esta semana", "data marcada", "Adicionar", "Específico", "Mensagem"],
            imagem: "img/captura-de-tela-2026-09-02-113546.png",
            resposta: [
              "Dentro da aba “Configuração de IA > Informações”, ao adicionar uma nova informação, você consegue definir uma validade para ela.",
              "Ou seja, é possível programar para que determinada informação fique ativa apenas em um dia específico ou durante um período definido.",
              "Por exemplo, vocês podem configurar uma informação como:",
              "“Durante toda esta semana, teremos o evento X.”",
              "Ou:",
              "“No dia X, teremos a apresentação do artista Y.”",
              "Assim, a IA consegue considerar essas informações apenas durante o período em que elas estiverem programadas para ficar ativas."
            ]
          },
          {
            titulo: "Como cadastrar, categorizar e editar uma informação da IA",
            tags: ["Ajuste", "IA", "informacoes", "adicionar informacao", "cadastrar informacao", "categoria", "validade", "editar informacao", "lapis", "barra de pesquisa", "tempo indeterminado", "data especifica", "base de conhecimento", "ensinar a ia", "adicionar", "editar"],
            imagem: "img/ia-informacoes.png",
            resposta: [
              "Na aba <strong>Configuração de IA &gt; Informações</strong>, você pode clicar no botão Adicionar ou Editar para cadastrar/alterar uma informação, preenchendo o título e o conteúdo referente a ela.",
              "O conteúdo pode ser preenchido de forma simples e objetiva, com as informações necessárias para que a IA consiga entender o assunto e repassá-lo corretamente aos clientes.",
              "A opção de <strong>Categorias</strong> serve apenas para facilitar a organização e a localização das informações dentro da plataforma. Caso vocês tenham muitas informações cadastradas, podem separá-las por categorias para encontrá-las com mais facilidade.",
              "Também é possível definir a <strong>validade</strong> da informação, indicando se ela será válida por tempo indeterminado, para uma data específica ou durante um determinado período.",
              "Caso uma informação já esteja cadastrada, basta pesquisá-la pela barra de pesquisa e clicar no ícone de lápis localizado abaixo do card para editá-la."
            ]
          }
        ]
      },
      {
        id: "config-ia-links-externos",
        sub: "Links Externos",
        itens: [
          {
            titulo: "Links Externos",
            tags: ["Ajuste", "IA", "Cardápio", "links externos", "link externo", "cardapio externo", "google drive", "outra plataforma", "servico externo", "ia envia link", "cadastrar link", "Links"],
            imagem: "img/captura-de-tela-2026-09-02-124210.png",
            resposta: [
              "Na aba Configuração de Links Externos, você pode adicionar links de outras plataformas ou serviços que não utiliza diretamente pela nossa plataforma.",
              "Por exemplo, caso vocês utilizem um cardápio externo, um link do Google Drive ou algum outro serviço, podem cadastrar esse link nessa aba. A partir disso, conseguimos orientar a IA para enviar o link indicado aos clientes sempre que necessário.",
              "Dessa forma, mesmo que determinada funcionalidade não seja utilizada dentro da nossa plataforma, a IA ainda consegue compartilhar o link externo correspondente durante os atendimentos."
            ]
          }
        ]
      },
      {
        id: "config-ia-follow-up",
        sub: "Follow-Up",
        itens: [
          {
            titulo: "Follow-Up",
            tags: ["Dúvida", "IA", "follow up", "fup", "cliente nao responde", "retomar conversa", "atendimento parado", "reativar conversa", "por categoria", "automatico", "intervalo de tempo", "sem resposta", "Follow-Up", "Mensagem"],
            imagem: "img/captura-de-tela-2026-09-02-135930.png",
            resposta: [
              "O Follow Up é uma funcionalidade que permite à IA retomar automaticamente uma conversa quando o cliente não responde, evitando que um atendimento fique parado.",
              "Ele pode ser configurado para enviar novas mensagens após determinados intervalos de tempo, definidos a partir da última mensagem do cliente. Também é possível configurar o Follow Up por categoria, desativando o envio para assuntos específicos ou definindo orientações diferentes para cada situação.",
              "Em resumo, o Follow Up serve para a IA tentar reativar uma conversa que ficou sem resposta, mantendo o contato com o cliente sem que a equipe precise fazer isso manualmente."
            ]
          },
          {
            titulo: "Tempo de Follow Up e Instruções",
            tags: ["Ajuste", "IA", "follow up", "fup", "tempo de follow up", "quando enviar", "intervalo", "por categoria", "instrucoes opcionais", "alterar tempo", "excluir intervalo", "Follow-up", "tempo de fup", "instruções"],
            imagem: "img/captura-de-tela-2026-09-02-143358.png",
            resposta: [
              "Para alterar o tempo do Follow Up, você pode acessar a aba Configuração de IA > Follow Up e, na seção Quando enviar, excluir ou alterar os intervalos de tempo conforme desejado.",
              "Logo abaixo, na seção Por categoria, você também pode adicionar instruções opcionais para cada tipo de Follow Up, personalizando o comportamento da IA de acordo com cada categoria.",
              "Caso tenha alguma dúvida durante a configuração, pode me chamar por aqui que te auxilio."
            ]
          }
        ]
      },
      {
        id: "config-ia-quebra-gelos",
        sub: "Quebra-Gelos",
        itens: [
          {
            titulo: "Quebra-Gelos",
            tags: ["Dúvida", "IA", "quebra-gelos", "quebra gelo", "mensagens prontas", "atalho no chat", "opcoes ao abrir o chat", "primeiro contato", "ativar desativar", "whatsapp meta", "instagram", "direcionar atendimento", "Mensagens Rápidas"],
            imagem: "img/captura-de-tela-2026-09-02-141141.png",
            resposta: [
              "Os Quebra-Gelos são mensagens ou opções prontas que aparecem para o cliente assim que ele abre o chat. Eles funcionam como atalhos, permitindo que o cliente inicie a conversa com apenas um toque, sem precisar digitar uma mensagem.",
              "Por exemplo, vocês podem configurar opções como:",
              "• Quero fazer uma reserva",
              "• Quero fazer um Pedido / Delivery",
              "• Quero saber sobre o cardápio",
              "Ao clicar em uma dessas opções, o cliente inicia a conversa sobre aquele assunto, facilitando o direcionamento do atendimento desde o primeiro contato.",
              "A funcionalidade pode ser ativada ou desativada conforme a preferência de vocês. Para utilizá-la, é necessário ter o WhatsApp Meta ou o Instagram conectado à plataforma."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "minha-loja",
    aba: "Minha Loja",
    subs: [
      { id: "loja-loja", sub: "Loja", itens: [] },
      {
        id: "loja-imagens",
        sub: "Imagens",
        itens: [
          {
            titulo: "Como adicionar uma imagem para a IA enviar?",
            tags: ["Dúvida", "IA", "galeria de imagens", "imagem", "foto", "ia envia imagem", "adicionar imagem", "titulo e descricao", "minha loja", "galeria", "enviar imagem", "cardapio foto"],
            imagem: "img/loja-imagens.png",
            resposta: [
              "Dentro da aba <strong>Minha Loja &gt; Loja</strong>, o último tópico é a <strong>Galeria de Imagens</strong>. Nessa área, você consegue cadastrar imagens para que a IA possa enviá-las aos clientes quando necessário.",
              "Durante o cadastro, você pode adicionar um título e uma breve descrição para orientar a IA sobre em quais situações aquela imagem deve ser utilizada.",
              "Caso tenha qualquer dúvida durante o processo de criação, pode me chamar por aqui que te ajudo!"
            ]
          }
        ]
      },
      {
        id: "loja-pagamento",
        sub: "Formas de Pagamento",
        itens: [
          {
            titulo: "Pagamento de Reservas",
            tags: ["Financeiro", "Reserva", "pagamento de reserva", "pagamento online", "cartao de credito", "caucao", "pagar na reserva", "pagamento antecipado", "formas de pagamento", "fluxo de reserva", "Pagamento", "Reservas"],
            imagem: "img/captura-de-tela-2026-09-02-142021.png",
            resposta: [
              "Na parte de Reservas, o pagamento online permite que o cliente realize o pagamento diretamente durante o processo de reserva.",
              "A opção disponível é o Pagamento com cartão, que permite ao cliente utilizar o cartão de crédito para efetuar o pagamento da reserva pelo próprio fluxo da plataforma.",
              "Essa opção não se aplica a reservas configuradas como caução. Ou seja, quando a reserva utiliza uma caução, o pagamento por cartão não fica disponível nessa configuração.",
              "Em resumo, é uma forma de receber o pagamento da reserva antecipadamente, diretamente pelo fluxo de reserva, sem que o cliente precise realizar o pagamento de outra maneira."
            ]
          }
        ]
      },
      { id: "loja-repasse", sub: "Repasse", itens: [] },
      {
        id: "minha-loja-informacoes-gerais",
        sub: "Informações Gerais",
        itens: [
          {
            titulo: "Informações Gerais",
            tags: ["Ajuste", "Configurações gerais", "informacoes gerais", "descricao da loja", "ticket medio", "slug do menu", "idade minima", "nome do estabelecimento", "dados cadastrais", "endereco personalizado", "restricao de idade", "crianca pode reservar", "Descrição", "Nome", "Slug", "CNPJ"],
            imagem: "img/captura-de-tela-2026-09-02-142635.png",
            resposta: [
              "Essa seção reúne os principais dados cadastrais e comerciais do estabelecimento, que são utilizados tanto pela plataforma quanto pela IA durante os atendimentos. Tendo como principais configurações:",
              "• Descrição da loja: descrição utilizada pela IA quando o cliente pergunta o que é o estabelecimento ou solicita informações gerais sobre ele.",
              "• Ticket Médio: valor médio dos pedidos, utilizado principalmente na geração de relatórios e análises.",
              "• Slug do Menu: define o endereço personalizado utilizado nos links do estabelecimento.",
              "• Idade Mínima: define se existem restrições de idade para realizar reservas, permitindo configurar, por exemplo, se crianças podem ou não realizar reservas."
            ]
          }
        ]
      },
      {
        id: "minha-loja-pagamentos",
        sub: "Pagamentos",
        itens: [
          {
            titulo: "Formas de Pagamento e Rodízio & Buffet",
            tags: ["Ajuste", "Configurações gerais", "Cardápio", "formas de pagamento", "metodos de pagamento", "bandeiras de cartao", "pix", "rodizio", "buffet", "preco de buffet", "regra de preco", "dia da semana", "feriado", "vale refeicao", "ia consulta o preco", "Pagamento", "Bandeiras", "Cartão", "VR"],
            imagem: "img/captura-de-tela-2026-09-02-143128.png",
            resposta: [
              "Na aba MInha Loja > Loja > Pagamentos, você encontra configurações relacionadas aos métodos de pagamento e aos preços de buffet ou rodízio do estabelecimento.",
              "• Métodos de Pagamento: permite selecionar todas as formas de pagamento aceitas pelo estabelecimento, além das bandeiras de cartão disponíveis.",
              "• Regras de Preço de Buffet/Rodízio: permite configurar os valores do buffet ou rodízio de acordo com o dia da semana e o horário, além de definir regras específicas para feriados.",
              "Essas informações também são utilizadas pela IA durante os atendimentos. Ou seja, quando um cliente perguntar quais formas de pagamento o estabelecimento aceita ou qual é o valor do buffet ou rodízio em determinado dia e horário, a IA irá consultar essas configurações para fornecer a resposta."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "membros",
    aba: "Membros",
    subs: [
      {
        id: "membros-membros",
        sub: "Membros",
        itens: [
          {
            titulo: "Convidar Membros",
            tags: ["Ajuste", "Configurações gerais", "membros", "convidar membro", "novo acesso", "permissoes", "funcao", "administrador", "editar acesso", "excluir membro", "gestao da equipe", "quem pode acessar", "Acesso", "Convidar", "Editar"],
            imagem: "img/captura-de-tela-2026-09-02-093724.png",
            resposta: [
              "Para convidar um novo membro para a plataforma, basta acessar a aba “Membros” e clicar no botão “Convidar”, localizado no canto superior direito.",
              "Nessa etapa, você poderá escolher a função e as permissões que a pessoa terá na plataforma.",
              "Caso selecione a função de administrador, a pessoa terá acesso a toda a plataforma. Já na função de membro, você poderá definir quais permissões e áreas da plataforma ela poderá acessar.",
              "Por meio dela, você também consegue realizar a gestão dos membros da equipe, podendo editar os acessos e permissões de cada pessoa ou até mesmo excluir membros que não precisam mais ter acesso à plataforma."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "historico-de-acoes",
    aba: "Histórico de Ações",
    subs: [
      {
        id: "historico-de-acoes-historico-de-acoes",
        sub: "Histórico de Ações",
        itens: [
          {
            titulo: "Histórico de Ações",
            tags: [],
            imagem: "img/captura-de-tela-2026-09-04-002434.png",
            resposta: [
              "O “Histórico de Ações” permite acompanhar as principais movimentações realizadas dentro da plataforma, mostrando o que foi alterado, quem realizou a ação e quando ela aconteceu. É uma ferramenta útil para entender o que aconteceu em determinada situação e identificar a origem de uma alteração.",
              "Para acessar, basta ir em “Histórico de Ações”.",
              "Dentro dessa aba, você consegue visualizar ações como:",
              "* Alterações no status de reservas;",
              "* Criação e cancelamento de reservas;",
              "* Alterações nos dados dos clientes;",
              "* Alterações em filas e configurações;",
              "* Criação ou alteração de grupos;",
              "* Inclusão de membros e permissões;",
              "* Registros de visitas e outras ações realizadas na plataforma.",
              "Também é possível utilizar filtros para encontrar uma ação específica com mais facilidade:",
              "* Período, definindo data e horário inicial e final;",
              "* Quem realizou a ação;",
              "* Domínios e ações, permitindo adicionar filtros específicos relacionados aos registros.",
              "Depois de configurar os filtros desejados, basta clicar em “Aplicar” para visualizar somente os registros correspondentes."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "testes-da-ia",
    aba: "Testes da IA",
    subs: [
      {
        id: "testes-da-ia-testes-da-ia",
        sub: "Testes da IA",
        itens: [
          {
            titulo: "Como faço para testar a IA?",
            tags: ["Dúvida", "IA", "testes da ia", "testar a ia", "simular conversa", "data simulada", "informacoes adicionais", "validade temporal", "como a ia responde", "ajustar durante o teste", "data real", "Teste da IA", "Informações", "Add Infos", "Testes", "Mensagem"],
            imagem: "img/captura-de-tela-2026-09-02-145559.png",
            resposta: [
              "Na aba de Testes da IA, vocês conseguem simular conversas como se fossem clientes do restaurante e verificar, na prática, como a IA está respondendo.",
              "Nessa mesma tela, na parte da direita, também é possível consultar, editar, criar ou excluir as Informações Adicionais cadastradas em “Configuração de IA > Informações”, facilitando os ajustes durante os testes.",
              "Além disso, existe a opção de Data Simulada. Com ela, vocês podem testar informações que possuem validade temporal sem precisar esperar a data real chegar.",
              "Por exemplo, vocês podem simular uma data específica para verificar se a IA está considerando corretamente informações cadastradas para determinado dia, evento ou período.",
              "Se o campo de data for deixado em branco, a IA utilizará a data real."
            ]
          }
        ]
      }
    ]
  }
];
