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
            tags: ["Bloqueio", "Reserva"],
            imagem: "img/captura-de-tela-2026-09-01-162222.png",
            resposta: [
              "Para criar um bloqueio na plataforma, basta seguir este passo a passo:",
              "1. Acesse a aba “Reservas” > “Bloqueios”.",
              "2. Clique para adicionar um novo bloqueio e informe um título e, se desejar, uma descrição.",
              "3. Configure o período do bloqueio, selecionando as datas e definindo se deseja bloquear o dia inteiro, apenas um período específico ou um intervalo de horário.",
              "4. Selecione as áreas que serão afetadas pelo bloqueio.",
              "5. Revise todas as informações configuradas.",
              "6. Após a confirmação, salve o bloqueio para que ele fique ativo na plataforma.",
              "Assim, durante o período e nas áreas selecionadas, a plataforma não permitirá novas reservas."
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
            tags: ["antecedencia", "horario limite", "configuracoes avancadas", "mesmo dia", "23:59"],
            imagem: "img/res-areas-antecedencia.png",
            resposta: [
              "Em <strong>Reservas &gt; Áreas e Mesas &gt; Configurações Avançadas</strong>, o horário limite geral para reservas no mesmo dia estava configurado como XX:XX.",
              "Para que a configuração de antecedência das reservas, definida dentro da edição dos horários de cada área, funcione corretamente, é necessário que esse limite geral esteja configurado para <strong>23:59</strong>. Dessa forma, a antecedência definida em cada área será considerada corretamente pela plataforma."
            ]
          },
          {
            titulo: "Reservas pagas: como configurar, taxa e repasse",
            tags: ["reserva paga", "caucao", "consumacao", "taxa", "10%", "pix", "cartao", "repasse", "D+1", "D+30", "chave pix"],
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
            tags: ["reservas", "antecedencia", "dias", "tempo"],
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
            tags: ["historico", "filtro", "buscar reserva", "status", "cancelada", "salao", "periodo"],
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
            tags: ["meta", "erro", "portfolio empresarial", "status", "limitacao", "aviso"],
            imagem: "img/wpp-meta.png",
            resposta: [
              "Recentemente, lançamos uma atualização no painel justamente para dar mais transparência sobre a conexão com a Meta. Agora, algumas informações que antes apareciam somente dentro do Portfólio Empresarial de vocês também ficam visíveis diretamente no nosso sistema.",
              "Essa análise já era realizada pela própria Meta. A diferença é que, agora, nós também passamos a exibir esse status para vocês, facilitando o acompanhamento do número e deixando mais claro qualquer aviso ou limitação informada pela Meta."
            ]
          },
          {
            titulo: "A instância do WhatsApp ainda não foi provisionada",
            tags: ["instancia", "provisionada", "zapi", "status zapi", "interno", "conectar"],
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
            tags: ["Conversa", "Atendimento Humano", "Humano", "IA", "Resposta"],
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
            tags: ["Erro", "Meta", "WhatsApp", "24 horas"],
            resposta: [
              "Quando um cliente envia uma mensagem para vocês pelo WhatsApp, é aberta uma janela de atendimento de 24 horas.",
              "Durante esse período, vocês podem responder normalmente ao cliente, sem a necessidade de utilizar um template.",
              "Porém, após 24 horas da última mensagem enviada pelo cliente, a Meta encerra essa janela de atendimento. A partir desse momento, não é possível enviar uma nova mensagem livremente para retomar a conversa.",
              "Para entrar em contato novamente, é necessário utilizar um template de mensagem previamente aprovado pela Meta. Esse envio é considerado um disparo e pode ter cobrança, dependendo da categoria da mensagem utilizada.",
              "Essa é uma regra da própria Meta, criada para evitar que empresas enviem mensagens não solicitadas para os usuários.",
              "Então, mesmo que vocês já tenham conversado anteriormente com o cliente, caso tenham passado mais de 24 horas desde a última mensagem dele, será necessário utilizar um template aprovado para iniciar uma nova interação."
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
            tags: ["link rastreavel", "bio instagram", "anuncio meta", "origem", "campanha", "utm"],
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
            tags: ["linktree", "adicionar link", "bio", "divulgacao", "pagina de links"],
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
            tags: ["nps", "pesquisa", "analytics", "notificacoes", "disparo", "3 horas", "fila", "sentado"],
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
            tags: ["feedback", "elogio", "reclamacao", "conversas", "negativo"],
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
            tags: ["canais conectados", "ativar ia", "inativar", "whatsapp", "instagram", "salvar"],
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
            tags: ["nome", "genero", "tom de voz", "tamanho da resposta", "emoji", "bullet points", "recursos"],
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
            tags: ["regras", "comportamento", "girias", "expressoes", "vendedora", "formal", "emoji", "regional"],
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
            titulo: "Como cadastrar, categorizar e editar uma informação da IA",
            tags: ["informacoes", "adicionar", "categoria", "validade", "editar", "lapis", "barra de pesquisa"],
            imagem: "img/ia-informacoes.png",
            resposta: [
              "Na aba <strong>Configuração de IA &gt; Informações</strong>, você pode clicar no botão <strong>Adicionar</strong> para cadastrar uma nova informação, preenchendo o título e o conteúdo referente a ela.",
              "O conteúdo pode ser preenchido de forma simples e objetiva, com as informações necessárias para que a IA consiga entender o assunto e repassá-lo corretamente aos clientes.",
              "A opção de <strong>Categorias</strong> serve apenas para facilitar a organização e a localização das informações dentro da plataforma. Caso vocês tenham muitas informações cadastradas, podem separá-las por categorias para encontrá-las com mais facilidade.",
              "Também é possível definir a <strong>validade</strong> da informação, indicando se ela será válida por tempo indeterminado, para uma data específica ou durante um determinado período.",
              "Caso uma informação já esteja cadastrada, basta pesquisá-la pela barra de pesquisa e clicar no ícone de lápis localizado abaixo do card para editá-la."
            ]
          },
          {
            titulo: "Informação para dia específico",
            tags: ["Informação", "Adicionar", "Específico", "IA", "Mensagem"],
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
          }
        ]
      },
      {
        id: "config-ia-links-externos",
        sub: "Links Externos",
        itens: [
          {
            titulo: "Links Externos",
            tags: ["Links", "Cardápio", "Link Externo", "Links Externos"],
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
            tags: ["Follow-Up", "FUP", "Mensagem"],
            imagem: "img/captura-de-tela-2026-09-02-135930.png",
            resposta: [
              "O Follow Up é uma funcionalidade que permite à IA retomar automaticamente uma conversa quando o cliente não responde, evitando que um atendimento fique parado.",
              "Ele pode ser configurado para enviar novas mensagens após determinados intervalos de tempo, definidos a partir da última mensagem do cliente. Também é possível configurar o Follow Up por categoria, desativando o envio para assuntos específicos ou definindo orientações diferentes para cada situação.",
              "Em resumo, o Follow Up serve para a IA tentar reativar uma conversa que ficou sem resposta, mantendo o contato com o cliente sem que a equipe precise fazer isso manualmente."
            ]
          },
          {
            titulo: "Tempo de Follow Up e Instruções",
            tags: ["Follow-up", "tempo de fup", "instruções"],
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
            tags: ["Quebra-Gelos", "Mensagens Rápidas"],
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
            tags: ["imagem", "galeria", "foto", "enviar imagem", "cardapio foto"],
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
            tags: ["Pagamento", "Reservas", "Formas de Pagamento", "Caução"],
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
            tags: ["Descrição", "Nome", "Slug", "Ticket Médio", "CNPJ", "Nome do estabelecimento"],
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
            tags: ["Formas de Pagamento", "Pagamento", "Rodízio", "Buffet", "Bandeiras", "Pix", "Cartão", "VR", "Vale Refeição"],
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
            tags: ["Membros", "Acesso", "Convidar", "Editar", "Permissões"],
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
  }
];
