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

   As respostas rápidas mudaram de casa: vivem em respostas.js, e o jeito
   normal de mexer nelas é pela própria tela, não editando o arquivo.

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
   OS DOIS MODOS DE ATENDIMENTO, E AS ETAPAS DE CADA UM

   O guia tem dois fluxos, escolhidos pela sub-aba no alto:

     internal  — o ticket chegou pela IA de CS, na Internal
     whatsapp  — a gente responde direto pelo WhatsApp

   Cada modo tem a SUA lista de etapas, com a sua quantidade e os seus nomes.
   Mudar um não mexe no outro.

   ─────────────────────────────────────────────────────────────────────────
   O QUE É UMA ETAPA
   ─────────────────────────────────────────────────────────────────────────

     id      = identificador curto e único DENTRO do modo. Não mude depois de
               criado: é ele que guarda o "já concluí esta etapa".
     titulo  = o nome que aparece no card e na barra da esquerda
     tipo    = o formato da etapa. São seis:

       "par"     Faça assim / Não faça, em duas colunas.
                 Usa: lead, itens[], nunca[], cta, why
       "passos"  Passo a passo numerado, com uma dica no fim.
                 Usa: lead, itens[], dica, cta, why
       "ticket"  O seletor de natureza + módulo, que classifica o ticket.
                 Não tem texto próprio: sai de [6] e [7].
       "guia"    O material do módulo escolhido: casos conhecidos e docs.
                 Não tem texto próprio: sai de [7].
       "doc"     A caixa de perguntar para a IA da documentação.
                 Não tem texto próprio: sai de [10].
       "fup"     O follow-up cronometrado.
                 Não tem texto próprio: sai de [9].

     lead    = frase de abertura, em cinza. Aceita <strong>negrito</strong>
     itens   = a checklist (no "par") ou os passos numerados (no "passos")
     nunca   = a caixa vermelha "Não faça". Só no tipo "par"
     dica    = a linha de dica no fim. Só no tipo "passos"
     cta     = texto do botão que conclui a etapa
     why     = frase pequena ao lado do botão

   Toda etapa é um portão: a seguinte só abre depois do botão. A etapa de
   tipo "ticket" só libera depois de natureza E módulo escolhidos.

   ─────────────────────────────────────────────────────────────────────────
   NÃO PRECISA EDITAR ISTO À MÃO
   ─────────────────────────────────────────────────────────────────────────

   Quem tem token de publicação mexe em tudo isto pela própria tela, no lápis
   de cada etapa: criar, editar, apagar, reordenar e trocar o tipo. O bloco
   abaixo é reescrito pela interface, igual ao respostas.js.
   ═════════════════════════════════════════════════════════════════════════ */

const MODOS = [
  {
    id: "internal",
    rot: "IA CS na Internal",
    dica: "O ticket chegou pela IA de CS. Você entra no meio de uma conversa que já começou.",
    etapas: [
      {
        id: "problema",
        titulo: "Entender o problema do cliente",
        tipo: "par",
        lead: "O cliente descreve uma solução. Você precisa achar a solução para o problema",
        itens: [
          "Separe <strong>a solução que ele apresentou</strong> do <strong>problema</strong>",
          "Caso não tenha 100% de certeza da solução, confirme o ajuste em <strong>uma frase</strong> e espere o cliente confirmar antes de agir",
          "A entrega é sempre dupla: <strong>resolver</strong> e <strong>mostrar ao cliente como se faz</strong> — o caminho na plataforma faz parte da resposta."
        ],
        nunca: [
          "Começar a resolver antes de entender 100% a dor do cliente"
        ],
        dica: "",
        cta: "Entendi e confirmei com o cliente",
        why: "Entendimento equivocado do problema do cliente = solução errada = cliente insatisfeito"
      },
      {
        id: "ia",
        titulo: "Ler a conversa do Cliente",
        tipo: "par",
        lead: "A IA atendeu primeiro. Você está entrando no meio de uma conversa — leia antes de escrever qualquer coisa.",
        itens: [
          "Identifique <strong>qual loja</strong> e <strong>qual usuário</strong> está falando.",
          "Leia do <strong>início</strong>, não só a última mensagem. Leia também o resumo criado pela IA.",
          "Anote <strong>o que a IA já respondeu/alterou</strong>.",
          "Verifique os dados que o <strong>cliente</strong> forneceu e entenda o que ele quer aplicar na plataforma."
        ],
        nunca: [
          "Abrir a conversa e ler somente a última mensagem e responder no escuro.",
          "Prestar atenção para não pedir alguma informação que o cliente já deu para a IA, pois pode ser a principal causa de irritação em atendimento na IA.",
          "Assumir que o assunto é o rótulo que a IA deu."
        ],
        dica: "",
        cta: "Li a conversa inteira",
        why: "Caso não tenha entendido o que o cliente falou, pergunte de forma respeitosa tentando entender a fundo o contexto."
      },
      {
        id: "ticket",
        titulo: "Criar o ticket",
        tipo: "ticket",
        lead: "O ticket vem antes da solução, não depois. Ticket criado no fim vira medição perdida.",
        itens: [
          "<strong>Título</strong>: Descrição breve do que é o ticket",
          "Marque <strong>categoria e módulo iniciais</strong>: marque o motivo e a subcategoria correspondente ao ticket criado"
        ],
        nunca: [
          "Resolver primeiro e criar o ticket depois",
          "Deixar o título como &ldquo;dúvida do cliente&rdquo; ou &ldquo;erro&rdquo;: deixe o título mais explicativo possível."
        ],
        dica: "",
        cta: "Ticket criado",
        why: "Só após a criação do ticket você pode solucionar o problema."
      },
      {
        id: "guia",
        titulo: "Guia de Atendimento",
        tipo: "guia",
        lead: "",
        itens: [],
        nunca: [],
        dica: "",
        cta: "",
        why: ""
      },
      {
        id: "fup",
        titulo: "Follow-up e encerrar",
        tipo: "fup",
        lead: "",
        itens: [],
        nunca: [],
        dica: "",
        cta: "",
        why: ""
      }
    ]
  },
  {
    id: "whatsapp",
    rot: "WhatsApp",
    dica: "A gente responde direto pelo WhatsApp, sem passar pela Internal.",
    etapas: [
      {
        id: "ler",
        titulo: "Ler a conversa no WhatsApp",
        tipo: "par",
        lead: "<strong>Rascunho a revisar.</strong> Aqui você é o primeiro a falar com o cliente — não há resumo de IA para se apoiar.",
        itens: [
          "Identifique <strong>qual loja</strong> e <strong>quem</strong> está falando.",
          "Leia a conversa do <strong>início</strong>, inclusive o que ficou de atendimentos anteriores.",
          "Veja se já existe conversa aberta sobre o mesmo assunto."
        ],
        nunca: [
          "Responder só a última mensagem sem ler o histórico.",
          "Pedir uma informação que o cliente já mandou."
        ],
        dica: "",
        cta: "Li a conversa inteira",
        why: "No WhatsApp o cliente costuma mandar o contexto em várias mensagens curtas."
      },
      {
        id: "duvida",
        titulo: "Entender a dúvida",
        tipo: "par",
        lead: "<strong>Rascunho a revisar.</strong> Separe o que o cliente pediu do que ele precisa.",
        itens: [
          "Confirme a dúvida em <strong>uma frase</strong> antes de agir.",
          "Descubra <strong>em que tela da plataforma</strong> a dúvida acontece."
        ],
        nunca: [
          "Começar a explicar antes de ter certeza do que ele quer."
        ],
        dica: "",
        cta: "Entendi e confirmei com o cliente",
        why: "Entender errado no WhatsApp custa mais: a conversa vira uma sequência de mal-entendidos."
      },
      {
        id: "consultar",
        titulo: "Consultar a documentação",
        tipo: "doc",
        lead: "",
        itens: [],
        nunca: [],
        dica: "",
        cta: "",
        why: ""
      },
      {
        id: "responder",
        titulo: "Responder e confirmar",
        tipo: "passos",
        lead: "<strong>Rascunho a revisar.</strong> A entrega é dupla: resolver e mostrar o caminho.",
        itens: [
          "Use a resposta pronta das <strong>Respostas rápidas</strong> quando existir — ela já está no padrão.",
          "Mande <strong>o caminho na plataforma</strong>, mesmo que você já tenha resolvido.",
          "Pergunte se ficou claro e <strong>espere a confirmação</strong> antes de encerrar."
        ],
        nunca: [],
        dica: "Se a dúvida se repetir com outros clientes, vale criar uma resposta rápida para ela.",
        cta: "Cliente confirmou",
        why: "Resolvido não é o mesmo que confirmado."
      },
      {
        id: "fup",
        titulo: "Follow-up e encerrar",
        tipo: "fup",
        lead: "",
        itens: [],
        nunca: [],
        dica: "",
        cta: "",
        why: ""
      }
    ]
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


/* [9.5] ═══════════════════════════════════════════════════════════════════════
   SINÔNIMOS DA BUSCA — o vocabulário do cliente x o vocabulário da resposta

   O cliente escreve "Conseguem remover esse usuário?" e a resposta certa fala
   em "excluir membros". Não há uma palavra em comum, então a busca por palavra
   não acha — e era exatamente isso que estava falhando.

   Cada linha é um grupo de palavras que valem a mesma coisa nesta operação.
   Buscar por qualquer uma delas encontra as outras, nos dois sentidos.

   COMO CRESCER ESTA LISTA — é o jeito mais barato de melhorar a busca:
   quando uma pergunta real do cliente não achar a resposta certa, veja qual
   palavra ele usou e qual a resposta usa, e coloque as duas no mesmo grupo.

   Escreva tudo em minúsculas e SEM ACENTO. O motor já tira o acento do que
   for digitado antes de comparar.
   ═════════════════════════════════════════════════════════════════════════ */

const SINONIMOS = [
  /* ações */
  ["remover", "excluir", "apagar", "deletar", "tirar", "retirar", "descadastrar"],
  ["adicionar", "incluir", "cadastrar", "criar", "inserir", "colocar", "convidar", "novo", "nova"],
  ["alterar", "mudar", "editar", "trocar", "ajustar", "modificar", "atualizar", "corrigir"],
  ["ver", "visualizar", "consultar", "acompanhar", "conferir", "checar", "olhar", "encontrar", "achar"],
  ["configurar", "configuracao", "definir", "parametrizar", "habilitar", "ativar", "ligar"],
  ["desativar", "desabilitar", "desligar", "pausar", "suspender", "interromper", "parar"],
  ["bloquear", "travar", "fechar", "indisponibilizar", "impedir"],
  ["enviar", "mandar", "disparar", "disparo", "envio"],
  ["conectar", "conexao", "integrar", "integracao", "vincular", "sincronizar", "parear"],

  /* quem */
  ["usuario", "membro", "pessoa", "colaborador", "funcionario", "equipe", "time", "atendente", "operador", "conta"],
  ["cliente", "consumidor", "comensal", "hospede", "convidado"],
  ["permissao", "acesso", "funcao", "cargo", "perfil", "administrador", "admin", "gestor"],

  /* o que */
  ["reserva", "reservas", "agendamento", "agenda", "booking"],
  ["mesa", "area", "ambiente", "setor", "salao", "espaco"],
  ["fila", "espera", "waitlist"],
  ["cardapio", "menu", "produto", "prato", "item"],
  ["delivery", "entrega", "tele-entrega"],
  ["cupom", "desconto", "promocao", "voucher"],
  ["etiqueta", "tag", "marcador", "rotulo"],
  ["link", "url", "endereco", "site"],
  ["loja", "estabelecimento", "restaurante", "unidade", "negocio"],
  ["imagem", "foto", "print", "captura", "banner", "logo"],
  ["informacao", "info", "dado", "conteudo", "texto"],
  ["relatorio", "dados", "metrica", "numero", "estatistica", "resultado"],

  /* IA e canais */
  ["ia", "inteligencia", "robo", "bot", "assistente", "automacao"],
  ["whatsapp", "wpp", "zap", "zapzap", "numero", "instancia"],
  ["instagram", "insta", "direct", "rede", "social"],
  ["conversa", "atendimento", "chat", "ticket", "dialogo", "mensagem"],
  ["quebra-gelo", "quebragelo", "saudacao", "boas-vindas", "abertura"],

  /* satisfação */
  ["avaliacao", "satisfacao", "nps", "feedback", "pesquisa", "nota", "opiniao"],

  /* dinheiro */
  ["pagamento", "pagar", "cobranca", "taxa", "valor", "preco", "repasse", "financeiro"],

  /* tempo */
  ["horario", "hora", "tempo", "periodo", "antecedencia", "prazo", "limite", "duracao"],

  /* problemas */
  ["erro", "problema", "falha", "bug", "defeito", "nao funciona", "quebrado"],
  ["duvida", "pergunta", "questao", "ajuda", "suporte"],

  /* follow-up */
  ["followup", "follow-up", "retorno", "acompanhamento", "resposta"]
];


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

  /* --- busca das respostas rápidas ---
     A lupa fica no topo do conteúdo e filtra a lista ao vivo: a barra da
     esquerda e o painel de leitura não se mexem enquanto você digita. */
  buscaRotulo: "O que o cliente perguntou?",
  buscaGlobalPlaceholder: "Digite uma palavra: cupom, NPS, taxa, antecedência...",
  sideRotulo: "Navegação",
  buscaGlobalDica: "Procura no título, no texto e nas palavras-chave. Atalho: / ou Ctrl+K.",
  buscaLimpar: "Limpar busca",

  /* --- respostas rápidas: a lista à esquerda ---
     A lista é a tela principal deste tópico. Cada linha copia sem abrir e
     pode ser fixada. Quem fica no topo é o que o time usa todo dia. */
  respTodas: "Todas as respostas",
  respFixados: "★ Fixados",
  respRecentes: "↻ Usadas há pouco",
  respFixar: "Fixar no topo da lista",
  respDesfixar: "Tirar dos fixados",
  respCopiarRapido: "Copiar sem abrir",
  respMostrarVazias: "⋯ mostrar sub-abas vazias",
  respOcultarVazias: "⋯ ocultar sub-abas vazias",
  respAbaTudo: "Ver todas as respostas de {aba}",

  /* --- busca por relevância ---
     Cole a pergunta inteira do cliente: em vez de exigir que todas as palavras
     apareçam, a busca pontua cada resposta e mostra as mais relevantes em
     primeiro. Os resultados aparecem numa lista embaixo do campo. */
  buscaColePergunta: "Cole aqui a pergunta do cliente, ou digite uma palavra",
  buscaResultados: "{n} resposta(s) relevante(s)",
  buscaSemRelevante: "Nada relevante para essa pergunta. Tente outras palavras ou pergunte para a IA da documentação.",
  buscaRelevancia: "relevância",
  buscaFechar: "Fechar os resultados",

  /* --- reordenar abas e sub-abas ---
     Muda a ordem em que elas aparecem, para todo o time. Grava no repositório
     pelo mesmo caminho que publica uma resposta. */
  ordemModo: "⇅ Reordenar",
  ordemSair: "Concluir ordenação",
  ordemSubir: "Mover para cima",
  ordemDescer: "Mover para baixo",
  ordemNota: "Arraste pela alça para mudar a ordem. Pelo teclado, use os botões ⌃ ⌄.",
  ordemAlca: "Arraste para mover",
  ordemPendentes: "{n} item(ns) fora da ordem original",
  ordemDesfazer: "Desfazer tudo",
  ordemAbrirSubs: "Abrir as sub-abas para reordenar",
  ordemSalvar: "Salvar nova ordem",
  ordemPublicando: "Salvando a nova ordem...",
  ordemPublicado: "Ordem salva. O site atualiza em cerca de 40 segundos. Recarregando...",
  ordemSemToken: "Configure a publicação para poder mudar a ordem para o time.",
  ordemSemMudanca: "A ordem não mudou.",
  respTagsLimpar: "limpar filtros",
  respTagFiltrar: "Filtrar a lista por “{t}”",
  respTagsMais: "+{n} mais",
  respTagsMenos: "mostrar menos",
  respConta: "{n} de {m} resposta(s)",
  respEscopoBusca: "buscando em todas as abas",
  respEscopoTudo: "biblioteca completa",
  respEscopoTag: "filtrado por palavra-chave",
  respNada: "Nenhuma resposta com esses filtros. Tente outra palavra, limpe os filtros, ou pergunte para a IA da documentação.",
  respAtalhos: "↑ ↓ navega · Enter abre · Ctrl+Enter copia",


  /* --- respostas rápidas: o painel de leitura à direita --- */
  respEscolha: "Escolha uma resposta na lista ao lado para ler aqui.",
  respVazia: "Nenhuma resposta cadastrada nesta sub-aba ainda. Use ＋ Nova resposta na barra da esquerda.",
  respCopiar: "Copiar resposta",
  respCopiarTudo: "Copiar texto + imagem",
  respCopiarSoTexto: "Só o texto",
  respCopiadoTudo: "✓ Texto e imagem copiados",
  respCopiado: "✓ Copiado",
  respInterno: "Interno · não enviar ao cliente",
  respImgAlt: "Print da tela",
  respImgLegenda: "Clique na imagem para ver em tela cheia",
  respImgMostrar: "🖼 Ver print da tela",
  respImgOcultar: "Ocultar print",
  respImgFalta: "O print desta resposta não está no repositório: {nome}. O texto continua pronto para copiar.",

  /* --- criar resposta pela própria tela ---
     O site é estático: o que se cria aqui fica só neste navegador. O botão
     "Gerar código" produz o bloco pronto para colar em [12], que é o que
     torna a resposta oficial para o time todo. */
  editorNovo: "＋ Nova resposta",
  editorExportar: "Exportar {n} rascunho(s)",
  editorTitulo: "Nova resposta rápida",
  editorNota: "Salvar deixa a resposta disponível só neste navegador, para você usar agora. Para valer para o time, use Gerar código e cole o bloco no conteudo.js pelo GitHub.",
  editorAba: "Aba da plataforma",
  editorAbaNova: "＋ criar uma aba nova",
  editorSub: "Sub-aba",
  editorSubNova: "＋ criar uma sub-aba nova",
  editorTituloResposta: "Título da dúvida",
  editorTituloDica: "Como o cliente costuma perguntar. Use barra para separar variações.",
  editorTags: "Palavras-chave",
  editorTagsDica: "Separadas por vírgula. Escreva como as pessoas digitam, inclusive sem acento.",
  editorResposta: "Resposta",
  editorRespostaDica: "Um parágrafo por linha. Aceita <strong>negrito</strong>.",
  editorImagem: "Print da tela (opcional)",
  editorImagemDica: "Fica salvo neste navegador. Para publicar, suba o arquivo na pasta img/ do GitHub.",
  editorImagemArquivo: "No código vai aparecer como img/{nome}",
  editorInterno: "Procedimento interno — não enviar ao cliente",
  editorSalvar: "Salvar neste navegador",
  editorCodigo: "Gerar código",
  editorCancelar: "Cancelar",
  editorFalta: "Preencha aba, sub-aba, título e resposta.",
  editorSemEspaco: "Não consegui salvar neste navegador. Use Gerar código para não perder o texto.",
  editorSeloRascunho: "Rascunho local",
  editorApagar: "Apagar este rascunho",
  editorApagarConfirma: "Apagar este rascunho? Ele existe só neste navegador.",
  editorCodigoTitulo: "Código para colar no conteudo.js",
  editorCodigoNota: "Copie o bloco abaixo e cole na seção [12] do conteudo.js, seguindo o comentário de cada trecho. Depois é só Commit changes: em cerca de 40 segundos a resposta vale para o time inteiro.",
  editorCopiarCodigo: "Copiar código",
  editorAbrirGitHub: "Abrir o respostas.js",

  /* --- publicar direto pela tela --- */
  editorTituloEditar: "Editar resposta",
  editorEditar: "Editar",
  editorRemover: "Remover esta resposta do playbook",
  editorRemoverConfirma: "Remover esta resposta do playbook, para todo o time?",
  editorRemovido: "Removida. A página vai recarregar; o site atualiza em cerca de 40 segundos.",
  editorPublicar: "Salvar e publicar",
  editorConfigurar: "Configurar publicação",
  editorEnviando: "Enviando para o GitHub...",
  editorPublicado: "Publicado. O site atualiza em cerca de 40 segundos. Recarregando...",
  editorErroEnvio: "Não consegui publicar:",
  editorImagemAtual: "Print atual: {nome}. Escolher um novo substitui.",

  /* --- configurar o acesso --- */
  acessoBotao: "🔑 Configurar publicação",
  acessoBotaoOk: "🔑 Publicação ativa",
  acessoTitulo: "Publicar direto pela tela",
  acessoNota: "O site é uma página estática: para uma resposta valer para o time, ela precisa virar um commit no repositório. Com um token do GitHub guardado aqui, o playbook faz isso sozinho e você nunca mais abre o código.",
  acessoPassos: [
    "Clique em Criar token abaixo. O GitHub abre em outra aba.",
    "Em Repository access, escolha Only select repositories e marque playbook-atendimento.",
    "Em Permissions > Repository permissions, coloque Contents em Read and write.",
    "Gere, copie o token e cole no campo aqui embaixo.",
    "Clique em Testar acesso."
  ],
  acessoCriarToken: "Criar token no GitHub ↗",
  acessoCampo: "Token",
  acessoCampoDica: "Fica guardado só neste navegador. Nunca entra no código do site.",
  acessoAviso: "Quem tem esse token pode gravar no repositório. Não use em computador compartilhado, e apague o token antes de emprestar a máquina.",
  acessoTestar: "Testar acesso",
  acessoApagar: "Apagar token",
  acessoApagado: "Token apagado deste navegador.",
  acessoTestando: "Testando...",
  acessoOk: "✓ Funcionando. Agora dá para salvar e publicar direto pela tela.",
  acessoFalhou: "Não deu certo:",
  acessoSemEscrita: "o token não tem permissão de escrita neste repositório.",

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
  etapaFaca: "Faça assim",

  /* --- editar o passo a passo do guia ---
     O lápis só aparece para quem tem token de publicação configurado. Quem
     abre o link sem token não vê o botão, e mesmo que o force, o GitHub
     recusa a gravação — o controle de verdade é a permissão do repositório,
     não a tela. */
  guiaEditar: "✎ Editar esta etapa",
  guiaEditarTitulo: "Editar a etapa {n}",
  guiaEditarNota: "Isto muda o passo a passo para o time inteiro. O texto vai para o conteudo.js do repositório e o site atualiza em cerca de 40 segundos.",
  guiaCampoTitulo: "Título da etapa",
  guiaCampoLead: "Frase de abertura",
  guiaCampoLeadDica: "Aparece em cinza, abaixo do título. Aceita <strong>negrito</strong>.",
  guiaCampoItens: "Faça assim",
  guiaCampoItensDica: "Um item por linha. Aceita <strong>negrito</strong>.",
  guiaCampoNunca: "Não faça",
  guiaCampoNuncaDica: "Um item por linha.",
  guiaCampoCta: "Texto do botão que conclui a etapa",
  guiaCampoWhy: "Frase pequena ao lado do botão",
  guiaFalta: "Título, frase de abertura e texto do botão não podem ficar vazios.",
  guiaSalvar: "Salvar e publicar",
  guiaPublicando: "Publicando o passo a passo...",
  guiaPublicado: "Publicado. O site atualiza em cerca de 40 segundos. Recarregando...",
  guiaSemMudanca: "Nada mudou nesta etapa.",
  guiaErroSintaxe: "Eu montei o arquivo e ele não ficou válido, então NÃO publiquei. Nada foi alterado. Provável causa: uma tag <strong> aberta e não fechada em algum campo.",
  guiaSemToken: "Configure a publicação para poder editar o passo a passo.",

  /* --- os dois modos de atendimento --- */
  modoRotulo: "Modo de atendimento",
  modoTrocar: "Trocar para {rot}",
  guiaEtapaNova: "＋ Nova etapa",
  guiaEtapaApagar: "Apagar esta etapa",
  guiaEtapaApagarConfirma: "Apagar a etapa “{t}”? Isso muda o passo a passo para o time inteiro.",
  guiaEtapaSubir: "Mover esta etapa para antes",
  guiaEtapaDescer: "Mover esta etapa para depois",
  guiaCampoTipo: "Formato da etapa",
  guiaTipoPar: "Faça assim / Não faça",
  guiaTipoPassos: "Passo a passo com dica",
  guiaTipoTicket: "Classificar o ticket (natureza e módulo)",
  guiaTipoGuia: "Guia do módulo (casos e documentação)",
  guiaTipoDoc: "Consultar a documentação",
  guiaTipoFup: "Follow-up cronometrado",
  guiaCampoTipoDica: "Os quatro últimos formatos não têm texto próprio: o conteúdo vem de outras seções do conteudo.js.",
  guiaCampoPassos: "Passo a passo",
  guiaCampoPassosDica: "Um passo por linha, numerados automaticamente. Aceita <strong>negrito</strong>.",
  guiaCampoDica: "Dica no fim da etapa",
  guiaEtapaSemTexto: "Este formato monta o conteúdo sozinho. Só o título e o nome do botão são editáveis.",
  guiaUltimaEtapa: "Não dá para apagar a única etapa do modo.",

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

  /* --- régua de avaliação: rótulos de tela ---
     A régua virou acordeão com trilha 0–5 horizontal: um critério aberto por
     vez, um nível por vez. Só apresentação — os textos dos níveis, os pesos e
     a explicação do cálculo continuam vindo de AVALIACAO, em [11]. */
  avalNivel: "Nível",
  avalNotaRotulo: "Nota",
  avalExtremoBaixo: "não atendeu",
  avalExtremoAlto: "referência",
  avalProximo: "O que falta para o nível {n}",
  avalTopo: "Este é o nível de referência do critério.",
  avalAbrir: "Abrir este critério",
  avalFechar: "Fechar este critério",

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
  observarLabel: "O que avalia",
  comoCalcula: "Os pesos somam 6. A média ponderada é a soma de cada nota multiplicada pelo seu peso, dividida por 6 — então ela sai na mesma escala de 0 a 5.",

  criterios: [
    {
      n: 1,
      nome: "Compreensão do problema",
      peso: 1,
      observar: "Se o CS identificou corretamente a necessidade do cliente antes de orientar ou tomar uma ação.",
      niveis: [
        "Não compreendeu o problema e não tentou investigá-lo.",
        "Interpretou incorretamente e respondeu com base em uma suposição.",
        "Não compreendeu inicialmente, mas fez perguntas para tentar identificar o problema.",
        "Compreendeu o problema principal, mas deixou pontos relevantes sem investigar.",
        "Compreendeu o problema e investigou os principais pontos necessários para solucioná-lo.",
        "Compreendeu completamente o contexto, identificou a causa ou necessidade real e, quando necessário, investigou além da dúvida inicial."
      ]
    },
    {
      n: 2,
      nome: "Resolução e eficácia",
      peso: 2,
      observar: "Se o CS efetivamente resolveu a necessidade do cliente e conduziu o atendimento até uma conclusão adequada.",
      niveis: [
        "Não resolveu e não apresentou um caminho para solução.",
        "Deu uma orientação insuficiente ou apenas parcial, sem direcionar os próximos passos.",
        "Resolveu apenas parte da necessidade, deixando pendências relevantes.",
        "Apresentou uma solução adequada, mas não confirmou se o cliente conseguiu aplicar ou se a necessidade foi resolvida.",
        "Resolveu a necessidade do cliente e orientou corretamente os próximos passos.",
        "Resolveu a necessidade de forma completa, confirmou o resultado ou entendimento do cliente e, quando necessário, antecipou possíveis dúvidas ou próximos passos."
      ]
    },
    {
      n: 3,
      nome: "Qualidade técnica e precisão",
      peso: 2,
      observar: "Se a resposta foi correta, clara, completa e tecnicamente adequada ao caso.",
      niveis: [
        "Informação incorreta ou orientação que pode gerar um problema para o cliente.",
        "Resposta predominantemente incorreta, superficial ou sem fundamento.",
        "Resposta parcialmente correta, mas com informações importantes faltando ou orientação pouco clara.",
        "Resposta correta, porém incompleta ou sem o nível de detalhamento necessário, fazendo o cliente precisar perguntar novamente.",
        "Resposta correta, clara e adequada ao caso, com as informações necessárias para o cliente prosseguir.",
        "Resposta tecnicamente completa e precisa, utilizando o melhor recurso disponível para facilitar o entendimento, como passo a passo, exemplos, prints, vídeos ou outras orientações pertinentes."
      ]
    },
    {
      n: 4,
      nome: "Comunicação e experiência do cliente",
      peso: 1,
      observar: "A forma como o atendimento foi conduzido, considerando clareza, cordialidade, segurança e padrão de comunicação Dionísio.",
      niveis: [
        "Comunicação desrespeitosa, inadequada ou que prejudica claramente a experiência do cliente.",
        "Comunicação seca, ríspida ou pouco profissional.",
        "Comunicação pouco cuidadosa, confusa ou excessivamente informal.",
        "Comunicação adequada, mas com problemas perceptíveis de clareza, organização, escrita ou condução.",
        "Comunicação clara, cordial, profissional e adequada ao contexto.",
        "Comunicação clara, cordial, segura e humanizada, com postura consultiva e proativa, transmitindo domínio do assunto e deixando o cliente seguro sobre a solução."
      ]
    }
  ]
};
