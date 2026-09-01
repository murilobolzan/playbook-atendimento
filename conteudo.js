/* ═══════════════════════════════════════════════════════════════════════════
   CONTEÚDO DO PLAYBOOK DE ATENDIMENTO
   ═══════════════════════════════════════════════════════════════════════════

   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
   O index.html é o motor — não mexa nele.

   ─────────────────────────────────────────────────────────────────────────
   COMO ACHAR O QUE VOCÊ QUER MUDAR
   ─────────────────────────────────────────────────────────────────────────

   Aperte Ctrl+F e procure o marcador da seção, por exemplo "[6]"

     [1]   ENDEREÇO DA DOCUMENTAÇÃO
     [2]   NOMES DAS 5 ETAPAS ................ os rótulos das abas
     [3]   ETAPAS 1, 2 E 3 ................... checklists, e a classificação
     [4]   TEMPO DE PLATAFORMA ............... quem executa o ajuste
     [6]   AS 7 NATUREZAS DE TICKET .......... ajuste, dúvida, bug...
     [7]   OS 13 MÓDULOS ..................... reserva, delivery, cardápio...
     [8]   SEVERIDADE ........................ hoje fora da tela
     [9]   FOLLOW-UP ......................... tempos e frases do FUP
     [10]  TÍTULOS E AVISOS DA TELA .......... todo o resto do texto fixo
     [11]  AVALIAÇÃO DE ATENDIMENTO .......... a régua, na aba separada

   ─────────────────────────────────────────────────────────────────────────
   QUATRO REGRAS PARA NÃO QUEBRAR
   ─────────────────────────────────────────────────────────────────────────

   1. Toda frase fica entre "aspas duplas", e cada item da lista termina
      com vírgula. A vírgula que falta no meio da lista quebra a página.
   2. Apóstrofo pode. Para aspas dentro do texto use &ldquo; e &rdquo;
   3. <strong>negrito</strong> sempre fecha. Tag aberta desconfigura o bloco.
   4. Nunca mude os id:. Mudar nome: é livre; mudar id: derruba a página.

   Página branca depois de publicar = erro de sintaxe. Aperte F12, aba
   Console, ela aponta a linha. Para voltar: aba Commits do GitHub → Revert.
   ═══════════════════════════════════════════════════════════════════════════ */


/* [1] ═══════════════════════════════════════════════════════════════════════
   ENDEREÇO DA DOCUMENTAÇÃO

   Base de todos os links. Os caminhos nos módulos (mais abaixo) são colados
   depois disso. Só mude se a documentação sair do GitBook.
   ═════════════════════════════════════════════════════════════════════════ */

const D = "https://dionisio.gitbook.io/documentacao-dionisio";


/* [2] ═══════════════════════════════════════════════════════════════════════
   NOMES DAS 5 ETAPAS

   São os rótulos das abas. Mudar o nome não muda a ordem nem o
   comportamento, mas a quantidade de itens define quantas abas existem.
   Hoje o motor sabe montar cinco: três de checklist, o guia e o follow-up.
   ═════════════════════════════════════════════════════════════════════════ */

const ETAPAS = [
  "Ler a conversa do Cliente",
  "Entender o problema",
  "Criar o ticket",
  "Guia de Atendimento",
  "Follow-up e encerrar"
];


/* [3] ═══════════════════════════════════════════════════════════════════════
   ETAPAS 1, 2 E 3 — as travadas em sequência

   São os três cards que abrem a tela. Cada um só libera o próximo depois
   do botão. A etapa 3 traz também a escolha da natureza e do módulo, que
   é o que abre o guia de atendimento. Em cada bloco:

     titulo  = nome do card
     lead    = frase de abertura, em cinza
     itens   = a checklist
     nunca   = a caixa vermelha "Não faça"
     cta     = texto do botão que conclui a etapa
     why     = frase pequena ao lado do botão
   ═════════════════════════════════════════════════════════════════════════ */

const PORTOES = [
  {
    id: "ia",
    titulo: "Ler a conversa do Cliente",
    lead: "A IA atendeu primeiro. Você está entrando no meio de uma conversa — leia antes de escrever qualquer coisa.",
    itens: [
      "Identifique <strong>qual loja</strong> e <strong>qual usuário</strong> está falando.",
      "Leia do <strong>início</strong>, não só a última mensagem. Leia também o resumo criado pela IA.",
      "Anote <strong>o que a IA já respondeu/alterou</strong>.",
      "Verifique os dados que o <strong>cliente</strong> forneceu e entenda o que ele quer aplicar na plataforma.",
    ],
    nunca: [
      "Abrir a conversa e ler somente a última mensagem e responder no escuro.",
      "Prestar atenção para não pedir alguma informação que o cliente já deu para a IA, pois pode ser a principal causa de irritação em atendimento na IA.",
      "Assumir que o assunto é o rótulo que a IA deu.",
    ],
    cta: "Li a conversa inteira",
    why: "Caso não tenha entendido o que o cliente falou, pergunte de forma respeitosa tentando entender a fundo o contexto."
  },
  {
    id: "problema",
    titulo: "Entender o problema do cliente",
    lead: "O cliente descreve uma solução. Você precisa achar a solução para o problema",
    itens: [
      "Separe <strong>a solução que ele apresentou</strong> do <strong>problema</strong>",
      "Caso não tenha 100% de certeza da solução, confirme o ajuste em <strong>uma frase</strong> e espere o cliente confirmar antes de agir",
      "A entrega é sempre dupla: <strong>resolver</strong> e <strong>mostrar ao cliente como se faz</strong> — o caminho na plataforma faz parte da resposta.",
    ],
    nunca: [
      "Começar a resolver antes de entender 100% a dor do cliente",
    ],
    cta: "Entendi e confirmei com o cliente",
    why: "Entendimento equivocado do problema do cliente = solução errada = cliente insatisfeito"
  },
  {
    id: "ticket",
    titulo: "Criar o ticket",
    lead: "O ticket vem antes da solução, não depois. Ticket criado no fim vira medição perdida.",
    itens: [
      "<strong>Título</strong>: Descrição breve do que é o ticket",
      "Marque <strong>categoria e módulo iniciais</strong>: marque o motivo e a subcategoria correspondente ao ticket criado",
    ],
    nunca: [
      "Resolver primeiro e criar o ticket depois",
      "Deixar o título como &ldquo;dúvida do cliente&rdquo; ou &ldquo;erro&rdquo;: deixe o título mais explicativo possível."
    ],
    cta: "Ticket criado",
    why: "Só após a criação do ticket você pode solucionar o problema."
  }
];


/* [4] ═══════════════════════════════════════════════════════════════════════
   TEMPO DE PLATAFORMA — a escada de autonomia

   Os dois botões que aparecem no alto da ETAPA 5. Não mudam o QUE fazer,
   mudam QUEM executa. O texto aparece na caixa "Modo de entrega".

     rot  = texto do botão
     modo = título em negrito da caixa
     txt  = explicação da caixa

   O corte é de 45 dias de plataforma do cliente.
   ═════════════════════════════════════════════════════════════════════════ */

const TEMPOS = [
  {
    id: "novo",
    rot: "Até 45 dias",
    modo: "Executo e mostro para o cliente",
    txt: "Cliente em implantação. Faça a alteração você mesmo, avise o que fez e mostre o caminho na plataforma para consulta futura. Não transfira a tarefa agora."
  },
  {
    id: "velho",
    rot: "Mais de 45 dias",
    modo: "Mostro como faz e só executo se ele pedir",
    txt: "Cliente maduro. Mande o caminho na plataforma e confirme no final que se tiver alguma dúvida, só chamar. Só assuma a execução se ele pedir. Caso peça diariamente, explique que ele precisa ter autonomia na plataforma e peça para tentar executar uma vez que você irá checar se está correto ou não"
  }
];


/* [6] ═══════════════════════════════════════════════════════════════════════
   AS 7 NATUREZAS DE TICKET — eixo 1

   Os cards da etapa 4 e o conteúdo das colunas do resultado (etapa 5).

     id      = NÃO MUDE. Chave interna usada pela severidade e pelas tags.
     nome    = título do card
     trilha  = etiqueta cinza acima do nome
     dono    = pílula azul no resultado
     desc    = linha pequena do card
     escalar = a lista "Quando escalar", na coluna direita
     nunca   = a caixa vermelha "Não faça"
     tags    = tags sugeridas para o ticket

   Para adicionar uma categoria nova: copie um bloco inteiro entre { },
   cole antes do ] final, troque o id por um nome curto sem espaço, e
   adicione esse mesmo id em SEV_POR_CATEGORIA, no bloco [8]
   ═════════════════════════════════════════════════════════════════════════ */

const CATEGORIAS = [
  {
    id: "ajuste",
    nome: "Ajuste",
    trilha: "Solicitação",
    dono: "Atendimentos",
    desc: "Nada quebrado — o cliente quer algo mudado na configuração.",
    escalar: [
      "A ação não existe na interface → <strong>Tech</strong>",
      "O ajuste depende de mudança de plano ou contrato → <strong>Comercial</strong>",
      "O ajuste tem efeito em cobrança → <strong>Financeiro</strong> antes de aplicar"
    ],
    nunca: [
      "Alterar preço, taxa ou política sem confirmação escrita do cliente",
      "Aplicar em loja diferente da que foi pedida"
    ],
    tags: ["tipo:ajuste"]
  },
  {
    id: "duvida",
    nome: "Dúvida",
    trilha: "Orientação",
    dono: "Atendimentos",
    desc: "Como funciona, onde clico, o que esse número significa.",
    escalar: [
      "Não existe artigo cobrindo a dúvida → responda e <strong>sinalize a lacuna de documentação</strong>",
      "A dúvida revela que a plataforma não faz o que ele precisa → registre como <strong>Sugestão</strong> e avise Comercial"
    ],
    nunca: [
      "Mandar só o link sem responder",
      "Inventar comportamento do sistema — se não sabe, confirme com Tech"
    ],
    tags: ["tipo:duvida"]
  },
  {
    id: "reclamacao",
    nome: "Reclamação",
    trilha: "Incidente",
    dono: "Atendimentos",
    desc: "O cliente está insatisfeito. A causa ainda é desconhecida.",
    escalar: [
      "Menção a cancelar, rescindir ou &ldquo;vou avaliar outra ferramenta&rdquo; → <strong>Comercial imediatamente</strong>, no mesmo turno",
      "Reclamação sobre conduta do atendimento ou da IA → <strong>liderança de Atendimentos</strong>",
      "Terceira reclamação do mesmo cliente em 30 dias → <strong>Comercial</strong>, mesmo que cada uma esteja resolvida"
    ],
    nunca: [
      "Prometer compensação, desconto ou crédito — isso é Financeiro/Comercial",
      "Encerrar sem retorno cumprido"
    ],
    tags: ["tipo:reclamacao", "risco:churn?"]
  },
  {
    id: "bug",
    nome: "Bug",
    trilha: "Incidente",
    dono: "Tech",
    desc: "O sistema não faz o que deveria fazer.",
    escalar: [
      "Sempre para <strong>Tech</strong> — mas só com o pacote mínimo reproduzido",
      "Afeta várias lojas ao mesmo tempo → <strong>Tech em caráter crítico</strong> e avise a liderança: pode ser incidente geral, não ticket individual"
    ],
    nunca: [
      "Escalar sem tentar reproduzir",
      "Prometer prazo de correção — quem dá prazo de deploy é Tech"
    ],
    tags: ["tipo:bug", "reproduzido:sim/nao"]
  },
  {
    id: "sugestao",
    nome: "Sugestão",
    trilha: "Solicitação",
    dono: "Comercial",
    desc: "Pedido de algo que a plataforma não faz hoje.",
    escalar: [
      "Encaminhe o registro para <strong>Comercial</strong>, que consolida com produto"
    ],
    nunca: [
      "Prometer que vai ser feito, ou dar qualquer prazo",
      "Deixar o ticket aberto aguardando desenvolvimento"
    ],
    tags: ["tipo:sugestao"]
  },
  {
    id: "financeiro",
    nome: "Financeiro",
    trilha: "Solicitação",
    dono: "Financeiro",
    desc: "Cobrança, fatura, plano, pagamento, recebimento.",
    escalar: [
      "Cobrança, fatura, nota, reembolso → <strong>Financeiro</strong>",
      "Mudança de plano ou renegociação → <strong>Comercial</strong>"
    ],
    nunca: [
      "Negociar valor, prazo ou desconto",
      "Confirmar estorno ou baixa de pagamento sem o Financeiro"
    ],
    tags: ["tipo:financeiro"]
  },
  {
    id: "outro",
    nome: "Outro",
    trilha: "Triagem",
    dono: "Atendimentos",
    desc: "Porta de entrada. Não deve sobreviver até o fechamento.",
    escalar: [
      "Se não conseguir classificar em 2 interações → <strong>liderança de Atendimentos</strong>"
    ],
    nunca: [
      "Encerrar um ticket com a categoria &ldquo;Outro&rdquo;"
    ],
    tags: ["tipo:outro", "revisar:taxonomia"]
  }
];


/* [7] ═══════════════════════════════════════════════════════════════════════
   OS 13 MÓDULOS — eixo 2

   Os cards da etapa 4 e o conteúdo da coluna direita do resultado.

     id      = NÃO MUDE. Vira a tag modulo:xxx
     nome    = título do card
     area    = etiqueta cinza acima do nome
     onde    = o texto de "Onde olhar"
     coletar = a lista "O que coletar antes de agir"
     docs    = os links de documentação
                 t = título que aparece
                 u = caminho, colado depois do endereço do [1]
     casos   = os "Casos conhecidos", que também alimentam a busca do painel
                 s   = sintoma, como o cliente descreve
                 c   = explicação da causa provável
                 d   = caminho do artigo desse caso
                 cat = id da categoria que esse caso costuma ser

   Para adicionar um caso conhecido: copie um bloco { s, c, d, cat }, cole
   e ajuste. A busca por sintoma indexa sozinha, não precisa registrar nada.

   LACUNA CONHECIDA: a documentação cobre Eventos e Links da loja, mas não
   existe módulo para nenhum dos dois. Hoje esses tickets caem em
   "Configurações gerais" ou "Outro" e a medição deles se perde.
   ═════════════════════════════════════════════════════════════════════════ */

const MODULOS = [
  {
    id: "relatorios",
    nome: "Relatórios",
    area: "Desempenho",
    onde: "Relatórios → abas Vendas, Operação e Financeiro.",
    coletar: [
      "Período e filtros aplicados",
      "Qual métrica divergiu e contra qual fonte o cliente está comparando",
      "Print da tela com os filtros visíveis"
    ],
    docs: [
      { t: "Relatórios — visão geral", u: "/relatorios/relatorios" },
      { t: "Dicionário de métricas", u: "/relatorios/relatorios/metricas" },
      { t: "Origem e atribuição de canais", u: "/referencia/origem-atribuicao" }
    ],
    casos: [
      { s: "Número não bate com o sistema do cliente", c: "Quase sempre diferença de recorte: período, fuso, status considerado ou regra de atribuição. Confira o dicionário de métricas antes de tratar como bug.", d: "/relatorios/relatorios/metricas", cat: "duvida" },
      { s: "Métrica não aparece na aba", c: "Parte dos indicadores só aparece sob condições específicas de plano ou módulo ativo.", d: "/relatorios/relatorios/metricas", cat: "duvida" }
    ]
  },
  {
    id: "reserva",
    nome: "Reserva",
    area: "Operações",
    onde: "Operações → Reservas. Verifique áreas e mesas, horários, bloqueios, datas especiais e política de pagamento.",
    coletar: [
      "Data, horário e número de pessoas da tentativa",
      "Área ou experiência escolhida",
      "Se a reserva exige pagamento",
      "ID da reserva quando existir"
    ],
    docs: [
      { t: "Reservas — visão geral", u: "/operacoes/reservas/visao-geral" },
      { t: "Ciclo de vida da reserva", u: "/operacoes/reservas/ciclo-de-vida-da-reserva" },
      { t: "Agir sobre uma reserva", u: "/operacoes/reservas/agir-sobre-uma-reserva" },
      { t: "Áreas e mesas", u: "/operacoes/reservas/areas-e-mesas" },
      { t: "Bloqueios", u: "/operacoes/reservas/bloqueios" },
      { t: "Políticas e pagamentos", u: "/operacoes/reservas/politicas-e-pagamentos" }
    ],
    casos: [
      { s: "Consumidor não consegue reservar", c: "Percorra na ordem: horário configurado, bloqueio ativo, capacidade da área, data especial.", d: "/operacoes/reservas/cliente-nao-consegue-reservar", cat: "bug" },
      { s: "Reserva paga não confirma", c: "Envolve recebimento — confirme a configuração de recebimento antes de escalar.", d: "/operacoes/reservas/reserva-paga-nao-confirma", cat: "bug" },
      { s: "Consumidor não consegue cancelar ou reagendar", c: "Normalmente é a política de cancelamento ou reagendamento restringindo a janela.", d: "/operacoes/reservas/cliente-nao-consegue-cancelar-ou-reagendar", cat: "duvida" }
    ]
  },
  {
    id: "fila",
    nome: "Fila",
    area: "Operações",
    onde: "Operações → Filas. Verifique se a fila está ativa, o link público e as notificações.",
    coletar: [
      "Nome da fila e se está aberta",
      "Como o consumidor tentou entrar: link, QR ou balcão",
      "Se o problema é entrar na fila ou receber o aviso"
    ],
    docs: [
      { t: "Filas — visão geral", u: "/operacoes/filas" },
      { t: "Chamar e acomodar", u: "/operacoes/filas/chamar-e-acomodar" },
      { t: "Link público da fila", u: "/operacoes/filas/link-publico" },
      { t: "Notificações da fila", u: "/operacoes/filas/notificacoes" },
      { t: "Atendimento prioritário", u: "/operacoes/filas/atendimento-prioritario" },
      { t: "Limpar e reativar", u: "/operacoes/filas/limpar-e-reativar" }
    ],
    casos: [
      { s: "Consumidor não consegue entrar na fila", c: "Confira se a fila está ativa e se o link público é o vigente.", d: "/operacoes/filas/cliente-nao-consegue-entrar-na-fila", cat: "bug" },
      { s: "Consumidor não recebe a notificação", c: "Cheque a conexão de WhatsApp antes de tratar como problema da fila — a causa costuma estar em Conexão.", d: "/operacoes/filas/cliente-nao-recebe-notificacao", cat: "bug" }
    ]
  },
  {
    id: "delivery",
    nome: "Delivery",
    area: "Operações",
    onde: "Operações → Pedidos e Configurações → Entrega. Verifique cobertura, horários de entrega, pausas e formas de pagamento.",
    coletar: [
      "ID do pedido e horário",
      "Endereço de entrega e taxa exibida",
      "Status atual do pedido",
      "Se a loja está aberta para entrega neste momento"
    ],
    docs: [
      { t: "Pedidos — visão geral", u: "/operacoes/pedidos" },
      { t: "Acompanhar pedidos", u: "/operacoes/pedidos/acompanhar-pedidos" },
      { t: "Status do pedido", u: "/operacoes/pedidos/status-do-pedido" },
      { t: "Cobertura de entrega", u: "/configuracoes/configuracao-entrega/cobertura-de-entrega" },
      { t: "Horários de entrega", u: "/configuracoes/configuracao-entrega/horarios-de-entrega" },
      { t: "Pausas de entrega", u: "/configuracoes/horarios/pausas-de-entrega" }
    ],
    casos: [
      { s: "Pedidos novos não chegam ao painel", c: "Crítico se a loja está aberta. Contorno imediato: acompanhar pedidos por outra via enquanto Tech investiga.", d: "/operacoes/pedidos/pedidos-novos-nao-chegam", cat: "bug" },
      { s: "Consumidor não consegue finalizar o pedido", c: "Percorra: loja aberta, cobertura do endereço, forma de pagamento habilitada, item disponível.", d: "/operacoes/pedidos/cliente-nao-consegue-finalizar-pedido", cat: "bug" },
      { s: "Taxa de entrega errada", c: "Configuração de cobertura, não bug. Confira as faixas cadastradas.", d: "/configuracoes/configuracao-entrega/taxa-de-entrega-errada", cat: "ajuste" },
      { s: "Endereço fora da área de entrega", c: "Cobertura cadastrada. Ajuste a faixa ou explique o limite ao cliente.", d: "/configuracoes/configuracao-entrega/cliente-fora-da-area-de-entrega", cat: "ajuste" },
      { s: "Não consigo cancelar o pedido", c: "Depende do status atual do pedido.", d: "/operacoes/pedidos/nao-consigo-cancelar-pedido", cat: "duvida" },
      { s: "Feriado não fechou o delivery", c: "Datas especiais e pausas de funcionamento.", d: "/configuracoes/horarios/feriado-nao-fecha-o-delivery", cat: "ajuste" }
    ]
  },
  {
    id: "cardapio",
    nome: "Cardápio",
    area: "Operações",
    onde: "Operações → Cardápios. Verifique categorias, itens, complementos e disponibilidade.",
    coletar: [
      "Nome do item ou categoria",
      "Se está publicado e dentro do horário da categoria",
      "Em qual canal não aparece: link, delivery ou stories"
    ],
    docs: [
      { t: "Cardápios — visão geral", u: "/operacoes/cardapios" },
      { t: "Criar cardápio", u: "/operacoes/cardapios/criar-cardapio" },
      { t: "Categorias", u: "/operacoes/cardapios/categorias" },
      { t: "Itens", u: "/operacoes/cardapios/itens" },
      { t: "Complementos", u: "/operacoes/cardapios/complementos" },
      { t: "Pizza", u: "/operacoes/cardapios/pizza" },
      { t: "Traduções", u: "/operacoes/cardapios/traducoes-do-cardapio" },
      { t: "Modo stories", u: "/operacoes/cardapios/modo-stories" }
    ],
    casos: [
      { s: "Item não aparece no cardápio", c: "O caso mais comum do módulo. Percorra: item ativo, categoria ativa, horário da categoria, cardápio publicado no canal certo.", d: "/operacoes/cardapios/item-nao-aparece", cat: "ajuste" }
    ]
  },
  {
    id: "conexao",
    nome: "Conexão",
    area: "Comunicação",
    onde: "Comunicação → WhatsApp e Instagram. Verifique o status da conexão antes de qualquer outro diagnóstico.",
    coletar: [
      "Canal: WhatsApp Meta, WhatsApp Web ou Instagram",
      "Status exibido na tela de conexão",
      "Quando parou de funcionar",
      "Se alguém trocou senha ou removeu acesso na Meta"
    ],
    docs: [
      { t: "Conectar WhatsApp", u: "/comunicacao/whatsapp/conectar" },
      { t: "Meta x Web — qual usar", u: "/comunicacao/whatsapp/meta-vs-web" },
      { t: "Conectar Instagram", u: "/comunicacao/instagram/conectar" },
      { t: "Números habilitados", u: "/configuracoes/configuracao-ia/numeros-habilitados" }
    ],
    casos: [
      { s: "Problemas na conexão Meta", c: "Raiz frequente de falhas em IA, disparos, fila e satisfação. Verifique aqui antes de abrir bug nos outros módulos.", d: "/comunicacao/whatsapp/conexao-meta-problemas", cat: "bug" },
      { s: "Não consigo conectar o Instagram", c: "Costuma ser permissão da conta ou tipo de perfil.", d: "/comunicacao/instagram/nao-consigo-conectar", cat: "bug" },
      { s: "Mensagem não enviada", c: "Confirme a conexão, depois o template e a janela de envio.", d: "/comunicacao/whatsapp/mensagem-nao-enviada", cat: "bug" }
    ]
  },
  {
    id: "ia",
    nome: "IA",
    area: "Configurações",
    onde: "Configurações → Configuração de IA. Verifique comportamento, informações cadastradas, validade e números habilitados.",
    coletar: [
      "Print da conversa com a resposta errada",
      "Canal: WhatsApp ou DM do Instagram",
      "O que o cliente esperava que a IA respondesse",
      "Se a informação está cadastrada e dentro da validade"
    ],
    docs: [
      { t: "Configuração de IA — visão geral", u: "/configuracoes/configuracao-ia" },
      { t: "Comportamento", u: "/configuracoes/configuracao-ia/comportamento" },
      { t: "Informações", u: "/configuracoes/configuracao-ia/informacoes" },
      { t: "Validade das informações", u: "/configuracoes/configuracao-ia/validade-de-informacoes" },
      { t: "Testes", u: "/configuracoes/configuracao-ia/testes" },
      { t: "Follow-up", u: "/configuracoes/configuracao-ia/follow-up" }
    ],
    casos: [
      { s: "Assistente não responde", c: "Verifique primeiro Conexão e números habilitados. Só depois trate como falha da IA.", d: "/configuracoes/configuracao-ia/assistente-nao-responde", cat: "bug" },
      { s: "Assistente responde errado", c: "Quase sempre informação ausente, desatualizada ou fora da validade — é ajuste de conteúdo, não bug. Use a tela de testes para comprovar.", d: "/configuracoes/configuracao-ia/assistente-responde-errado", cat: "ajuste" },
      { s: "IA não responde as DMs do Instagram", c: "Trate como conexão do Instagram até provar o contrário.", d: "/comunicacao/instagram/ia-nao-responde-as-dms", cat: "bug" }
    ]
  },
  {
    id: "crm",
    nome: "CRM",
    area: "Clientes",
    onde: "Clientes e Fidelidade → Clientes. Verifique perfil, grupos e regras de grupo automático.",
    coletar: [
      "Nome do grupo e as regras configuradas",
      "Quantos contatos a base tem no total",
      "Se o grupo é manual ou automático"
    ],
    docs: [
      { t: "Clientes — visão geral", u: "/clientes-e-fidelidade/clientes/visao-geral" },
      { t: "Perfil do cliente", u: "/clientes-e-fidelidade/clientes/perfil" },
      { t: "Grupos", u: "/clientes-e-fidelidade/clientes/grupos" },
      { t: "Criar grupo", u: "/clientes-e-fidelidade/clientes/grupos/criar-grupo" },
      { t: "Gerenciar grupos", u: "/clientes-e-fidelidade/clientes/grupos/gerenciar-grupos" }
    ],
    casos: [
      { s: "Grupo automático está vazio", c: "Regras restritivas demais para a base atual. Revise os critérios com o cliente.", d: "/clientes-e-fidelidade/clientes/grupos/grupo-automatico-vazio", cat: "ajuste" },
      { s: "Não consigo criar grupo", c: "Verifique permissão do usuário e os campos obrigatórios.", d: "/clientes-e-fidelidade/clientes/grupos/nao-consigo-criar-grupo", cat: "bug" }
    ]
  },
  {
    id: "disparos",
    nome: "Disparos",
    area: "Comunicação",
    onde: "Comunicação → WhatsApp → Disparos e Campanhas. Verifique template, público e conexão.",
    coletar: [
      "Nome do disparo ou campanha e horário do envio",
      "Grupo de destino e tamanho",
      "Template usado e status de aprovação",
      "Quantos enviaram e quantos falharam"
    ],
    docs: [
      { t: "Disparos", u: "/comunicacao/whatsapp/disparos" },
      { t: "Disparos inteligentes", u: "/comunicacao/whatsapp/disparos-inteligentes" },
      { t: "Campanhas", u: "/comunicacao/whatsapp/campanhas" },
      { t: "Templates", u: "/comunicacao/whatsapp/templates" },
      { t: "Histórico de mensagens", u: "/comunicacao/whatsapp/historico-mensagens" }
    ],
    casos: [
      { s: "Mensagem não enviada", c: "Ordem de verificação: conexão ativa, template aprovado, público não vazio, janela de envio permitida.", d: "/comunicacao/whatsapp/mensagem-nao-enviada", cat: "bug" },
      { s: "Disparo saiu para menos gente que o esperado", c: "Normalmente o grupo de destino, não o envio. Confira o CRM.", d: "/clientes-e-fidelidade/clientes/grupos/gerenciar-grupos", cat: "duvida" }
    ]
  },
  {
    id: "cupom",
    nome: "Cupom",
    area: "Clientes",
    onde: "Clientes e Fidelidade → Cupons. Verifique validade, regras de uso e canais habilitados.",
    coletar: [
      "Código do cupom",
      "Regras: validade, valor mínimo, limite de uso, canal",
      "Onde o consumidor tentou aplicar"
    ],
    docs: [
      { t: "Cupons — visão geral", u: "/clientes-e-fidelidade/cupons" },
      { t: "Criar cupom", u: "/clientes-e-fidelidade/cupons/criar-cupom" },
      { t: "Validar cupom", u: "/clientes-e-fidelidade/cupons/validar-cupom" },
      { t: "Criar promoção", u: "/clientes-e-fidelidade/cupons/criar-promocao" }
    ],
    casos: [
      { s: "Consumidor não consegue resgatar o cupom", c: "Confira validade, valor mínimo e limite de uso antes de tratar como falha.", d: "/clientes-e-fidelidade/cupons/cliente-nao-consegue-resgatar-cupom", cat: "duvida" },
      { s: "Cupom de delivery não aplica", c: "Regra de canal ou de valor mínimo do pedido.", d: "/clientes-e-fidelidade/cupons/cupom-de-delivery-nao-aplica", cat: "ajuste" }
    ]
  },
  {
    id: "satisfacao",
    nome: "Satisfação",
    area: "Clientes",
    onde: "Clientes e Fidelidade → Satisfação. Verifique pesquisa ativa, perguntas e envio automático.",
    coletar: [
      "Nome da pesquisa e se está ativa",
      "Canal de envio configurado",
      "Quantos envios e quantas respostas no período"
    ],
    docs: [
      { t: "Satisfação — visão geral", u: "/clientes-e-fidelidade/satisfacao" },
      { t: "O que é NPS", u: "/clientes-e-fidelidade/satisfacao/o-que-e-nps" },
      { t: "Criar pesquisa", u: "/clientes-e-fidelidade/satisfacao/criar-pesquisa" },
      { t: "Envio automático por WhatsApp", u: "/clientes-e-fidelidade/satisfacao/envio-automatico-whatsapp" },
      { t: "Analisar resultados", u: "/clientes-e-fidelidade/satisfacao/analisar-resultados" }
    ],
    casos: [
      { s: "Pesquisa não enviada", c: "Verifique conexão de WhatsApp e a configuração de envio automático.", d: "/clientes-e-fidelidade/satisfacao/pesquisa-nao-enviada", cat: "bug" },
      { s: "Cliente não entende a nota de NPS", c: "Dúvida conceitual — explique o cálculo e mande o artigo.", d: "/clientes-e-fidelidade/satisfacao/o-que-e-nps", cat: "duvida" }
    ]
  },
  {
    id: "atendimento",
    nome: "Atendimento",
    area: "Clientes",
    onde: "Clientes e Fidelidade → Pós-venda, e Comunicação → Conversas. É o módulo de SAC que o próprio cliente usa com os consumidores dele.",
    coletar: [
      "Se o problema é na pergunta de SAC, na resposta ou no ticket",
      "ID do ticket ou da conversa",
      "Print do erro"
    ],
    docs: [
      { t: "Pós-venda — visão geral", u: "/clientes-e-fidelidade/pos-venda" },
      { t: "Perguntas do SAC", u: "/clientes-e-fidelidade/pos-venda/perguntas-do-sac" },
      { t: "Respostas do SAC", u: "/clientes-e-fidelidade/pos-venda/respostas-do-sac" },
      { t: "Tickets de atendimento", u: "/clientes-e-fidelidade/pos-venda/tickets-de-atendimento" },
      { t: "Conversas no WhatsApp", u: "/comunicacao/whatsapp/conversas" }
    ],
    casos: [
      { s: "Não consigo registrar resposta de SAC", c: "Confira permissão do usuário e o estado da pergunta.", d: "/clientes-e-fidelidade/pos-venda/nao-consigo-registrar-resposta-de-sac", cat: "bug" },
      { s: "Erro ao criar pergunta de SAC", c: "Verifique campos obrigatórios antes de escalar.", d: "/clientes-e-fidelidade/pos-venda/erro-ao-criar-pergunta-de-sac", cat: "bug" }
    ]
  },
  {
    id: "config",
    nome: "Configurações gerais",
    area: "Configurações",
    onde: "Configurações → Minha Loja, Horários, Pessoas e Integrações.",
    coletar: [
      "Qual tela e qual campo",
      "Print antes e depois da tentativa de salvar",
      "Papel e permissão do usuário que tentou"
    ],
    docs: [
      { t: "Minha loja", u: "/configuracoes/minha-loja/loja" },
      { t: "Horário da loja", u: "/configuracoes/horarios/horario-da-loja" },
      { t: "Pausas de funcionamento", u: "/configuracoes/horarios/pausas-de-funcionamento" },
      { t: "Formas de pagamento", u: "/configuracoes/minha-loja/formas-de-pagamento" },
      { t: "Impressoras", u: "/configuracoes/minha-loja/impressoras" },
      { t: "Funções e permissões", u: "/configuracoes/pessoas/funcoes-e-permissoes" },
      { t: "Histórico de ações", u: "/configuracoes/pessoas/consultar-historico-de-acoes" },
      { t: "Integrações", u: "/configuracoes/integracoes" }
    ],
    casos: [
      { s: "Alterações não salvam", c: "Verifique campo obrigatório em branco e permissão do usuário.", d: "/configuracoes/minha-loja/alteracoes-nao-salvam", cat: "bug" },
      { s: "Loja abre ou fecha na hora errada", c: "Horário da loja, pausas de funcionamento e fuso.", d: "/configuracoes/horarios/loja-abre-ou-fecha-na-hora-errada", cat: "ajuste" },
      { s: "Não consigo convidar membro", c: "Limite do plano ou e-mail já vinculado.", d: "/configuracoes/pessoas/nao-consigo-convidar-membro", cat: "bug" },
      { s: "Não consigo editar ou remover membro", c: "Hierarquia de permissão — confira funções e permissões.", d: "/configuracoes/pessoas/nao-consigo-editar-ou-remover-membro", cat: "duvida" }
    ]
  }
];


/* [8] ═══════════════════════════════════════════════════════════════════════
   SEVERIDADE E PRAZOS

   SEV = o nome e o prazo de cada nível.
     rot   = texto da pílula colorida
     prazo = frase abaixo do título do resultado
     cls   = a cor. Só três valores válidos:
             "p-crit" vermelho · "p-warn" amarelo · "p-calm" verde

   SEV_POR_CATEGORIA = qual severidade cada natureza de ticket recebe.
     Uma linha por categoria de [6]. Todo id precisa aparecer aqui.

   PENDENTE DE CALIBRAGEM: níveis e prazos vieram de referência de mercado.
   ═════════════════════════════════════════════════════════════════════════ */

const SEV = {
  P1: { rot: "P1 — operação parada",        cls: "p-crit", prazo: "Assuma agora. Contorno em até 15 min e Tech acionado no mesmo momento." },
  P2: { rot: "P2 — degradado",              cls: "p-warn", prazo: "Resolver ou encaminhar dentro do turno." },
  P3: { rot: "P3 — sem impacto imediato",   cls: "p-calm", prazo: "Resolver em até 24h úteis." }
};

/* Qual severidade cada natureza de ticket recebe. Todo id de categoria de [6]
   precisa aparecer aqui.

   PENDENTE DE CALIBRAGEM: antes eram duas listas (loja aberta / fechada).
   Com a pergunta "a casa está aberta?" fora do fluxo, ficou uma só — estes
   valores são proposta e podem ser ajustados livremente. */

const SEV_POR_CATEGORIA = {
  bug: "P1",
  ajuste: "P2",
  reclamacao: "P2",
  financeiro: "P2",
  duvida: "P3",
  outro: "P3",
  sugestao: "P3"
};


/* [9] ═══════════════════════════════════════════════════════════════════════
   FOLLOW-UP — etapa 6

   esperaHoras = quantas horas até o segundo FUP
   limiteHoras = quantas horas de silêncio após o segundo FUP antes de encerrar

   Mudou o número, muda em toda a tela sozinho. Onde o texto precisa citar
   o número, use {espera} e {limite} — o app troca pelo valor.

   PENDENTE DE CALIBRAGEM: 2h e 1h foram propostos, não medidos.
   ═════════════════════════════════════════════════════════════════════════ */

const FUP = {
  /* em MINUTOS. Total máximo do silêncio = espera + limite. */
  esperaMin: 30,
  limiteMin: 30,

  /* --- primeiro follow-up --- */
  f1Nome: "FUP 1",
  f1Quando: "antes de encerrar o atendimento",
  f1Mensagem: "&ldquo;Ficou alguma dúvida sobre o que ajustamos?&rdquo;",
  f1SimTitulo: "Respondeu",
  f1SimTexto: "<strong>Encerre o ticket.</strong> Registre a confirmação do cliente. Sem isso o encerramento não vale como resolvido.",
  f1NaoTitulo: "Sem resposta",
  f1NaoTexto: "<strong>Pergunte mais uma vez {espera} minutos depois.</strong> Deixe o ticket aberto aguardando cliente — não encerre e não fique reenviando no meio.",

  /* --- segundo follow-up --- */
  f2Nome: "FUP 2",
  f2Quando: "{espera} minutos depois do FUP 1",
  f2Mensagem: "&ldquo;Passando pra confirmar se ficou tudo certo. Se eu não tiver retorno, vou encerrar por aqui — e é só chamar de novo que a gente reabre.&rdquo;",
  f2SimTitulo: "Respondeu",
  f2SimTexto: "<strong>Encerre o ticket</strong> com a confirmação registrada.",
  f2NaoTitulo: "Silêncio por {limite} minutos",
  f2NaoTexto: "<strong>Encerre por inatividade</strong>. Deixe escrito no ticket que o cliente pode reabrir a qualquer momento.",

  /* --- botões --- */
  botaoRespondeu: "Cliente respondeu",
  botaoSemResposta: "Sem resposta — agendar FUP 2",
  botaoEncerrar: "Silêncio esgotado — encerrar",
  botaoRefazer: "Refazer o follow-up",
  avisoEncerrar: "Aviso: o aviso de encerramento precisa ter sido enviado antes.",

  /* --- desfechos --- */
  okTitulo: "Encerrado com confirmação",
  okTexto: "Este é o desfecho que conta como resolvido. Antes de fechar: a confirmação do cliente está colada no ticket, a categoria final está correta e as tags estão aplicadas.",
  inativoTitulo: "Encerrado por inatividade",
  inativoTexto: "Encerramento válido, mas <strong>não conta como resolvido</strong>. Marque a tag abaixo — volume alto de encerramento por inatividade normalmente significa que a explicação não ficou clara, não que o cliente não se importa.",
  tituloTags: "Tags de encerramento",

  /* --- resumo da regra, sempre visível --- */
  tituloRegra: "A regra em uma linha",
  regra: [
    ["FUP 1",  "Antes de encerrar, pergunte se ficou dúvida. Respondeu → encerra."],
    ["FUP 2",  "{espera} min depois, se houve silêncio. Respondeu → encerra."],
    ["Limite", "{limite} min de silêncio após o FUP 2 → encerra por inatividade."],
    ["Total",  "Silêncio absoluto encerra em {total} min, no máximo 1 hora."]
  ]
};


/* [10] ══════════════════════════════════════════════════════════════════════
   TÍTULOS E AVISOS DA TELA

   Todo o texto fixo que não pertence a um bloco acima. Está agrupado na
   ordem em que aparece na tela, de cima para baixo.
   ═════════════════════════════════════════════════════════════════════════ */

const TEXTOS = {

  /* --- cabeçalho --- */
  marca: "Dionísio",
  titulo: "Playbook de Atendimento",
  subtitulo: "Uso interno — time de Atendimentos",

  /* --- barra lateral: os títulos dos três grupos --- */
  navGuia: "Guia de atendimento",
  navCriterios: "Critérios de avaliação",
  navRespostas: "Respostas rápidas",
  navEtapas: "As cinco etapas, em ordem",
  navAbasPlataforma: "Abas da plataforma",

  /* --- busca global, a lupa do topo da barra lateral ---
     Procura em título, corpo, tag, nome da aba e da sub-aba, e também nas
     etapas do guia, nos casos conhecidos e nos critérios de avaliação. */
  buscaGlobalPlaceholder: "Buscar resposta, etapa ou critério...",
  buscaGlobalDica: "Busca por palavra-chave em tudo: título, texto e tags. Atalho: / ou Ctrl+K.",
  buscaLimpar: "Limpar busca",
  buscaEyebrow: "Resultado da busca",
  buscaTitulo: "{n} resultado(s) para “{termo}”",
  buscaGrupoRespostas: "Respostas prontas ({n})",
  buscaGrupoOutros: "Também encontrei ({n})",
  buscaCasoEm: "Caso conhecido em",
  buscaNada: "Nada encontrado com essas palavras. Tente outra palavra-chave, ou pergunte para a IA da documentação abaixo.",
  buscaSemSorte: "Não achou o que precisava aqui?",
  buscaTipos: {
    resposta: "Resposta",
    guia: "Etapa do guia",
    caso: "Caso conhecido",
    criterio: "Critério"
  },

  /* --- respostas rápidas --- */
  respEscolha: "Escolha uma aba na barra da esquerda para ver as respostas prontas daquele assunto.",
  respVazia: "Nenhuma resposta cadastrada nesta sub-aba ainda. Para adicionar, veja [12] no conteudo.js.",
  respQuantas: "{n} resposta(s) cadastrada(s)",
  respCopiar: "Copiar resposta",
  respCopiado: "✓ Copiado",
  respInterno: "Interno · não enviar ao cliente",
  respImgAlt: "Print da tela",
  respImgLegenda: "Clique para ampliar",

  /* --- painel de dúvida: o foco da plataforma ---
     Aparece na ETAPA 5, que é onde o atendente resolve de fato. O que ele
     digita vai direto para a IA que vive dentro da documentação, e a resposta
     abre numa gaveta sem tirar ninguém do atendimento. */
  duvidaTag: "Central de dúvidas",
  railBusca: "Dúvida ao solucionar o problema? Pergunte por aqui:",
  buscaHint: "Caso tenha dúvida de como resolver o ticket, acesse a documentação e pergunte para a IA que está dentro dela.",
  buscaPlaceholder: "ex: como configuro a taxa de entrega?",
  buscaBotao: "Perguntar para a IA da documentação",
  buscaCasosTitulo: "Casos conhecidos que combinam",
  buscaVazia: "Nenhum caso conhecido com esse termo. Pergunte para a IA no botão acima.",
  duvidaRodape: "A resposta abre aqui mesmo, por cima do playbook. Você não perde o atendimento em andamento.",

  /* --- navegação entre as abas ---
     {atual} e {total} são trocados pelos números reais. */
  navVoltar: "← Etapa anterior",
  navAvancar: "Próxima etapa →",
  navOnde: "Etapa {atual} de {total}",
  navRegua: "Régua de avaliação · consulta",
  abaTrancada: "Esta etapa abre depois do ticket criado. Voltar para a etapa 3.",
  spineTrancada: "abre depois do ticket criado",
  abaSemTema: "Escolha a natureza e o módulo na etapa 4 para ver o follow-up.",

  /* --- gaveta da documentação --- */
  docTitulo: "Documentação",
  docPergunta: "Pergunta enviada para a IA",
  docNovaAba: "Abrir em nova aba",
  docFechar: "Fechar",
  docCarregando: "Abrindo a documentação...",
  docFalhou: "Se a documentação não aparecer aqui, use o botão \"Abrir em nova aba\".",

  /* --- etapas 1 a 3 --- */
  etapaConcluida: "concluído",
  etapaNaoFaca: "Não faça",

  /* --- etapas ainda não liberadas ---
     Não existe atalho: o atendente passa por todas as etapas, em ordem. */
  bloqueioEyebrow: "Ainda não liberado",
  bloqueioTexto: "Conclua as etapas anteriores para chegar aqui. Não há atalho: cada etapa depende da anterior.",

  /* --- etapa 4 liberada --- */
  eixo1Eyebrow: "",
  eixo1Titulo: "Natureza do ticket",
  eixo1Nota: "Você classifica, não o cliente. Pode reclassificar a qualquer momento.",
  eixo2Eyebrow: "",
  eixo2Titulo: "Módulo da plataforma",
  eixo2Nota: "O assunto do ticket. Define os casos conhecidos e a documentação do guia.",
  eixoVazio: "Escolha {falta} na etapa 3 para abrir o guia de atendimento.",
  eixoTag: "Classifique o ticket",
  eixoFaltaBotao: "Escolha a natureza e o módulo para concluir esta etapa.",
  temaTag: "Ticket classificado como",

  /* --- etapa 5: resultado, coluna esquerda --- */
  resEyebrow: "",
  resPulou: "etapas puladas",
  resTempoLabel: "Quem executa este ajuste?",
  resTempoHint: "O corte é o tempo de plataforma do cliente. Nos dois caminhos, mostre a ele o caminho na plataforma.",
  resModoLabel: "Modo de entrega",
  resCasos: "Casos conhecidos em",
  resCasoLink: "Abrir o guia deste caso",
  resCasoCostuma: "costuma ser",
  resExplicarTitulo: "Explicar ao cliente antes de encerrar",
  resExplicarItens: [
    "Diga <strong>o que era</strong> e <strong>o que você fez</strong>, em uma frase, sem jargão interno.",
    "Se foi configuração, diga <strong>qual</strong> — o cliente precisa saber para não repetir.",
    "Mande <strong>o caminho na plataforma</strong> e o link da documentação, mesmo que você tenha executado.",
    "Se escalou, diga <strong>para quem</strong> e <strong>quando terá retorno</strong>. Nunca deixe o prazo em aberto."
  ],
  resNaoFaca: "Não faça",

  /* --- etapa 5: resultado, coluna direita --- */
  resOndeOlhar: "Onde olhar",
  resColetar: "O que coletar antes de agir",
  resEscalar: "Quando escalar",
  resDocs: "Documentação de",
  resTags: "Registrar no ticket",
  resTagsHint: "Sem essas tags não há como medir tempo de resolução por módulo nem descobrir onde falta documentação.",

  /* --- etapa 6: cabeçalho --- */
  fupEyebrow: "",
  fupTitulo: "O atendimento não termina na explicação",
  fupSubtitulo: "Resolvido não é o mesmo que confirmado. O ticket só encerra com resposta do cliente ou com o silêncio esgotado.",
  fupMandeAssim: "Mande assim",
  fupEnviarAs: "enviar às",
  fupAPartirDas: "a partir das",

  /* --- rodapé --- */
  rodapeBotao: "Reiniciar atendimento",
  rodapeAviso: "<strong>Rascunho para revisão.</strong> O corte de 45 dias e os tempos de follow-up são propostas a calibrar. Os links apontam para a documentação real da plataforma."
};


/* [11] ══════════════════════════════════════════════════════════════════════
   AVALIAÇÃO DE ATENDIMENTO — a aba separada, fora do fluxo das 5 etapas

   É uma aba de consulta: mostra a régua, não dá nota. Quatro critérios,
   notas de 0 a 5, média ponderada pelos pesos.

     grupos    = os blocos temáticos, na ordem em que aparecem
     n         = o número do critério, como ele é conhecido pelo time
     peso      = quanto o critério vale na média ponderada
     observar  = a linha "o que observar"
     niveis    = os textos das notas 0 a 5, nessa ordem

   Somando os pesos dá 10, então a nota máxima possível é 50 pontos.
   ═════════════════════════════════════════════════════════════════════════ */

const AVALIACAO = {
  aba: "Avaliação",
  titulo: "Avaliação de Atendimento — CS Dionísio",
  subtitulo: "Régua de avaliação: 4 critérios, notas de 0 a 5, média ponderada.",
  pesoLabel: "peso",
  observarLabel: "O que observar",
  comoCalcula: "Os pesos somam 10. A média ponderada é a soma de cada nota multiplicada pelo seu peso, dividida por 10 — então ela sai na mesma escala de 0 a 5.",

  grupos: [
    {
      nome: "Resolução & Eficácia",
      criterios: [
        {
          n: 1,
          nome: "Entendeu o problema de fato",
          peso: 2,
          observar: "Investigou antes de responder; não presumiu.",
          niveis: [
            "Não entendeu e não buscou entender.",
            "Não entendeu e respondeu por suposição, sem perguntar nada ao cliente.",
            "Não entendeu o problema do cliente, mas buscou entender.",
            "Entendeu parcialmente o problema do cliente.",
            "Entendeu parcialmente o problema do cliente e buscou entender a fundo.",
            "Entendeu completamente o problema do cliente."
          ]
        },
        {
          n: 2,
          nome: "Resolveu de fato",
          peso: 3,
          observar: "Resolveu e confirmou o entendimento; não empurrou nem fechou prematuro.",
          niveis: [
            "Não conseguiu resolver.",
            "Respondeu parcialmente as dúvidas do cliente e não garantiu que ele entendeu.",
            "Respondeu parcialmente as dúvidas do cliente e garantiu que ele entendeu.",
            "Respondeu o cliente, mas sem garantir que ele entendeu.",
            "Resolveu o problema do cliente.",
            "Resolveu o problema do cliente garantindo que ele entendeu."
          ]
        }
      ]
    },
    {
      nome: "Qualidade Técnica",
      criterios: [
        {
          n: 3,
          nome: "Qualidade técnica da resposta",
          peso: 3,
          observar: "Sem informação errada ou incompleta; profundidade técnica adequada.",
          niveis: [
            "Respondeu de forma equivocada ao cliente.",
            "Resposta abaixo do esperado na qualidade técnica: incompleta e sem clareza.",
            "Resposta correta no geral, mas com informação faltando — o cliente teve que perguntar de novo.",
            "Resposta sem profundidade técnica, porém correta e ajustada ao caso.",
            "Resposta tecnicamente boa, que resolveu o problema do cliente garantindo que ele entendeu.",
            "Resposta tecnicamente excelente, que resolveu o problema do cliente garantindo que ele entendeu."
          ]
        }
      ]
    },
    {
      nome: "Relacionamento & Comunicação",
      criterios: [
        {
          n: 4,
          nome: "Tom adequado, empático e no padrão Dionísio",
          peso: 2,
          observar: "Cordial, humano, escrita cuidada e alinhado à marca.",
          niveis: [
            "Desrespeitou o cliente.",
            "Respondeu de forma seca ou ríspida, sem nenhuma empatia.",
            "Respondeu de forma desleixada.",
            "Respondeu com alguns erros de digitação e pontuação e sem saudação inicial.",
            "Respondeu com alguns erros de digitação e pontuação.",
            "Respondeu de forma cordial e no padrão Dionísio."
          ]
        }
      ]
    }
  ]
};


/* [12] ══════════════════════════════════════════════════════════════════════
   RESPOSTAS RÁPIDAS — a biblioteca de respostas padrão

   Espelha as abas da plataforma Dionísio. Dois níveis: aba e sub-aba.
   A busca do topo encontra por título, corpo, tag, nome da aba e da sub-aba.

   PARA ADICIONAR UMA ABA NOVA
   Copie um bloco { id, aba, subs: [...] } inteiro, cole antes do ] final e
   troque o id por um nome curto, sem espaço nem acento.

   PARA ADICIONAR UMA SUB-ABA
   Dentro de subs, copie um bloco { id, sub, itens: [...] }.

   PARA ADICIONAR UMA RESPOSTA
   Dentro de itens, copie um bloco { titulo, tags, resposta }.
     titulo   = a dúvida como o cliente costuma trazer. Barras separam
                variações da mesma pergunta.
     tags     = palavras-chave extras para a busca achar. Escreva como as
                pessoas digitam, inclusive sem acento ou abreviado.
     resposta = uma linha por parágrafo. Aceita <strong>negrito</strong>.
     interno  = opcional. Com true, marca a resposta como procedimento
                interno, que não deve ser enviado ao cliente.

   Sub-aba com itens: [] aparece como "sem resposta cadastrada". É
   proposital: mostra onde ainda falta preencher.
   ═════════════════════════════════════════════════════════════════════════ */

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
      { id: "loja-pagamento", sub: "Formas de Pagamento", itens: [] },
      { id: "loja-repasse", sub: "Repasse", itens: [] }
    ]
  }
];
