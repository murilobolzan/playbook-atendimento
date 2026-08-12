/* ═══════════════════════════════════════════════════════════════════════════
   CONTEÚDO DO PLAYBOOK DE ATENDIMENTO
   ═══════════════════════════════════════════════════════════════════════════

   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.
   O index.html é o motor — não mexa nele.

   ─────────────────────────────────────────────────────────────────────────
   COMO ACHAR O QUE VOCÊ QUER MUDAR
   ─────────────────────────────────────────────────────────────────────────

   Jeito 1 — pela tela: abra o playbook, clique em "Modo mapa" no topo.
   Cada bloco ganha uma etiqueta com o nome do bloco daqui. Aí você
   procura esse nome neste arquivo.

   Jeito 2 — pelo índice: aperte Ctrl+F e procure o marcador, ex: "[6]"

     [1]   ENDEREÇO DA DOCUMENTAÇÃO
     [2]   NOMES DAS 6 ETAPAS ................ trilha numerada do topo
     [3]   ETAPAS 1, 2 E 3 ................... as etapas travadas em sequência
     [4]   TEMPO DE CASA ..................... quem executa a ação
     [5]   LOJA EM OPERAÇÃO .................. as duas opções do painel
     [6]   AS 7 NATUREZAS DE TICKET .......... ajuste, dúvida, bug...
     [7]   OS 13 MÓDULOS ..................... reserva, delivery, cardápio...
     [8]   SEVERIDADE E PRAZOS ............... P1, P2, P3
     [9]   FOLLOW-UP ......................... tempos e frases do FUP
     [10]  TÍTULOS E AVISOS DA TELA .......... todo o resto do texto fixo

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
   NOMES DAS 6 ETAPAS

   Aparecem na trilha numerada do topo da tela. São só rótulos — mudar o
   nome não muda a ordem nem o comportamento. Mantenha seis itens.
   ═════════════════════════════════════════════════════════════════════════ */

const ETAPAS = [
  "Ler a conversa da IA",
  "Entender o problema",
  "Criar o ticket",
  "Verificar o tema",
  "Agir e explicar",
  "Follow-up e encerrar"
];


/* [3] ═══════════════════════════════════════════════════════════════════════
   ETAPAS 1, 2 E 3 — as travadas em sequência

   São os três cards que abrem a tela. Cada um só libera o próximo depois
   do botão. Em cada bloco:

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
    titulo: "Ler a conversa da IA",
    lead: "A IA atendeu primeiro. Você está entrando no meio de uma conversa — leia antes de escrever qualquer coisa.",
    itens: [
      "Leia do <strong>início</strong>, não só a última mensagem.",
      "Anote <strong>o que a IA já respondeu e já prometeu</strong>. Não repita e nunca contradiga sem explicar a correção.",
      "Verifique se a IA <strong>errou</strong>: informação desatualizada ou fora da validade é ajuste de conteúdo no módulo IA, não bug.",
      "Anote <strong>o que o cliente já tentou</strong> e quais dados ele já forneceu.",
      "Conte <strong>quantas vezes ele voltou ao mesmo assunto</strong>. Reincidência muda a prioridade e o tom.",
      "Identifique <strong>qual loja</strong> e <strong>qual usuário</strong> está falando."
    ],
    nunca: [
      "Abrir a conversa pela última mensagem e responder no escuro.",
      "Pedir informação que o cliente já deu para a IA — é a principal causa de irritação em atendimento herdado.",
      "Assumir que o assunto é o rótulo que a IA deu."
    ],
    cta: "Li a conversa inteira",
    why: "Sem isso você repete pergunta e o cliente reinicia a explicação."
  },
  {
    id: "problema",
    titulo: "Entender o problema do cliente",
    lead: "O cliente descreve uma solução. Você precisa do problema por trás dela — é isso que determina a categoria.",
    itens: [
      "Separe <strong>o pedido</strong> do <strong>problema</strong>: ele pede &ldquo;mudar o botão X&rdquo;, o problema é &ldquo;o consumidor não consegue finalizar&rdquo;.",
      "Confirme o entendimento em <strong>uma frase</strong> e espere o &ldquo;isso&rdquo; antes de agir.",
      "Pergunte <strong>quando começou</strong> e <strong>quanto afetou</strong>: quantos pedidos, reservas ou disparos.",
      "Peça <strong>print ou vídeo</strong> sempre que envolver tela.",
      "Confirme se a <strong>loja está em operação agora</strong> e marque no painel à esquerda — isso define a severidade.",
      "Confirme o <strong>tempo de casa</strong> e marque no painel — isso define quem executa."
    ],
    nunca: [
      "Começar a resolver antes de o cliente confirmar que você entendeu.",
      "Diagnosticar por cima da hipótese do cliente sem verificar."
    ],
    cta: "Entendi e confirmei com o cliente",
    why: "Categoria errada aqui contamina todo o resto do atendimento."
  },
  {
    id: "ticket",
    titulo: "Criar o ticket",
    lead: "O ticket vem antes da solução, não depois. Ticket criado no fim vira medição perdida.",
    itens: [
      "<strong>Título</strong>: o sintoma na linguagem do cliente, não a sua hipótese técnica.",
      "Vincule <strong>loja</strong>, <strong>usuário</strong> e <strong>canal</strong> de entrada.",
      "Cole o <strong>trecho relevante da conversa da IA</strong> e o identificador dela.",
      "Anexe as <strong>evidências</strong>: prints, IDs de pedido, reserva, disparo ou cupom.",
      "Marque <strong>categoria e módulo iniciais</strong> — você pode reclassificar depois sem penalidade.",
      "Registre se a <strong>loja está em operação</strong> e o <strong>tempo de casa</strong>."
    ],
    nunca: [
      "Resolver primeiro e criar o ticket depois — &ldquo;foi rápido, não precisa&rdquo; é como problema recorrente fica invisível.",
      "Deixar o título como &ldquo;dúvida do cliente&rdquo; ou &ldquo;erro&rdquo;: título vago não agrupa e não vira estatística."
    ],
    cta: "Ticket criado",
    why: "É o ticket que libera a verificação por tema."
  }
];


/* [4] ═══════════════════════════════════════════════════════════════════════
   TEMPO DE CASA — a escada de autonomia

   Os três botões do painel esquerdo. Não mudam o QUE fazer, mudam QUEM
   executa. O texto aparece na caixa vinho "Modo de entrega".

     rot  = texto do botão
     modo = título em negrito da caixa
     txt  = explicação da caixa

   PENDENTE DE CALIBRAGEM: os cortes de 30 e 90 dias foram propostos por
   referência de mercado, não pela operação de vocês.
   ═════════════════════════════════════════════════════════════════════════ */

const TEMPOS = [
  {
    id: "novo",
    rot: "Até 30 dias",
    modo: "Executo pelo cliente",
    txt: "Cliente em implantação. Faça a alteração você mesmo, avise o que fez e mande o link da documentação para consulta futura. Não transfira a tarefa agora."
  },
  {
    id: "rampa",
    rot: "30 a 90 dias",
    modo: "Faço junto e mostro",
    txt: "Cliente aprendendo. Conduza na tela — chamada ou passo a passo com print — e deixe o cliente clicar. Confirme no fim que ele sabe repetir sozinho."
  },
  {
    id: "velho",
    rot: "Mais de 90 dias",
    modo: "Oriento e ele executa",
    txt: "Cliente maduro. Mande o caminho na plataforma e o link da documentação. Só assuma a execução se ele pedir explicitamente ou estiver bloqueado."
  }
];


/* [5] ═══════════════════════════════════════════════════════════════════════
   LOJA EM OPERAÇÃO

   Os dois botões do painel esquerdo. "sim" sobe a severidade e cancela o
   modo de ensino. Para mudar QUAL severidade cada situação recebe, veja [8]
   ═════════════════════════════════════════════════════════════════════════ */

const OPER = [
  { id: "sim", rot: "Sim, casa aberta" },
  { id: "nao", rot: "Não / fora do horário" }
];


/* [6] ═══════════════════════════════════════════════════════════════════════
   AS 7 NATUREZAS DE TICKET — eixo 1

   Os cards da etapa 4 e o conteúdo da coluna esquerda do resultado.

     id      = NÃO MUDE. Chave interna usada pela severidade e pelas tags.
     nome    = título do card
     trilha  = etiqueta cinza acima do nome
     dono    = pílula azul no resultado
     desc    = linha pequena do card
     fluxo   = a lista numerada "Sequência de ação"
     escalar = a lista "Quando escalar", na coluna direita
     nunca   = a caixa vermelha "Não faça"
     tags    = tags sugeridas para o ticket

   Para adicionar uma categoria nova: copie um bloco inteiro entre { },
   cole antes do ] final, troque o id por um nome curto sem espaço, e
   adicione esse mesmo id nas DUAS linhas de MATRIZ_SEV em [8]
   ═════════════════════════════════════════════════════════════════════════ */

const CATEGORIAS = [
  {
    id: "ajuste",
    nome: "Ajuste",
    trilha: "Solicitação",
    dono: "Atendimentos",
    desc: "Nada quebrado — o cliente quer algo mudado na configuração.",
    fluxo: [
      "Confirme <strong>qual loja</strong> e <strong>qual tela</strong> exatamente, com print quando houver dúvida.",
      "Verifique se o ajuste é reversível. Se mexe em preço, cobertura de entrega, política de pagamento ou permissão de membro, <strong>peça confirmação explícita por escrito</strong> antes de aplicar.",
      "Aplique o ajuste conforme o modo de entrega indicado acima.",
      "Valide o resultado <strong>na visão do cliente final</strong> — link público, cardápio, app — não só no painel.",
      "Registre no ticket o que foi alterado, de qual valor para qual valor."
    ],
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
    fluxo: [
      "Responda em <strong>uma frase direta</strong> e só depois mande o link da documentação. Link sem resposta parece descaso.",
      "Se a resposta tem mais de três passos, mande o <strong>caminho na plataforma</strong> e o artigo.",
      "Se a IA já tinha respondido certo e o cliente não entendeu, <strong>reformule</strong> — não repita a mesma frase.",
      "Confirme que resolveu antes de encerrar. Dúvida fechada sem confirmação volta como reclamação."
    ],
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
    fluxo: [
      "<strong>Acolha antes de diagnosticar.</strong> Reconheça o impacto na operação dele em uma frase, sem se justificar e sem culpar outro time — inclusive sem culpar a IA.",
      "Separe <strong>fato</strong> de <strong>percepção</strong>: o que aconteceu, quando, em quantos pedidos ou reservas.",
      "Identifique a raiz e reclassifique: falha do sistema → <strong>Bug</strong>; configuração errada → <strong>Ajuste</strong>; expectativa não atendida → segue como reclamação.",
      "Dê um <strong>prazo concreto</strong> mesmo que seja só para o próximo retorno. Silêncio é o que transforma reclamação em cancelamento.",
      "Cumpra o retorno mesmo sem novidade."
    ],
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
    fluxo: [
      "<strong>Reproduza antes de escalar.</strong> Bug que Tech não consegue reproduzir volta para você e o cliente espera o dobro.",
      "Colete o pacote mínimo: <strong>loja, usuário, horário, o que se esperava, o que aconteceu, print ou vídeo</strong> e o ID do pedido / reserva / disparo.",
      "Verifique se é configuração antes de chamar de bug — confira o card do módulo ao lado.",
      "Dê um <strong>contorno ao cliente agora</strong> se existir, mesmo manual, e diga que é temporário.",
      "Escale para Tech com o pacote completo e informe ao cliente que foi escalado, com prazo do próximo retorno."
    ],
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
    fluxo: [
      "Agradeça e registre <strong>o problema por trás do pedido</strong>, não a solução que o cliente imaginou.",
      "Verifique se já existe forma de resolver com o que hoje existe — muitas sugestões são dúvidas disfarçadas.",
      "Registre com o nome da loja e a frequência com que ele tropeça nisso.",
      "Encerre o ticket. Sugestão não fica aberta esperando produto."
    ],
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
    fluxo: [
      "Identifique se é <strong>cobrança da Dionísio ao cliente</strong> ou <strong>recebimento do cliente pelos consumidores dele</strong> — são fluxos completamente diferentes.",
      "Se for recebimento pela plataforma (reserva paga, pedido pago), trate como Ajuste ou Bug no módulo correspondente.",
      "Se for a nossa cobrança, colete CNPJ, competência e print do que ele recebeu, e encaminhe para Financeiro.",
      "Informe ao cliente que Financeiro assume, com prazo do próximo retorno."
    ],
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
    fluxo: [
      "Use apenas enquanto você ainda não sabe o que é.",
      "Faça <strong>uma pergunta aberta</strong>: o que o cliente estava tentando fazer quando isso aconteceu?",
      "Reclassifique para uma das seis categorias antes de encerrar.",
      "Se realmente não couber em nenhuma, escreva o motivo no ticket — é insumo para revisar a taxonomia."
    ],
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

   MATRIZ_SEV = qual severidade cada categoria recebe.
     A linha "sim" vale quando a loja está em operação. A linha "nao",
     quando está fechada. Todo id de categoria precisa aparecer nas duas.

   PENDENTE DE CALIBRAGEM: níveis e prazos vieram de referência de mercado.
   ═════════════════════════════════════════════════════════════════════════ */

const SEV = {
  P1: { rot: "P1 — operação parada",        cls: "p-crit", prazo: "Assuma agora. Contorno em até 15 min e Tech acionado no mesmo momento." },
  P2: { rot: "P2 — degradado",              cls: "p-warn", prazo: "Resolver ou encaminhar dentro do turno." },
  P3: { rot: "P3 — sem impacto imediato",   cls: "p-calm", prazo: "Resolver em até 24h úteis." }
};

const MATRIZ_SEV = {
  sim: { bug: "P1", ajuste: "P1", reclamacao: "P2", financeiro: "P2", duvida: "P2", outro: "P2", sugestao: "P3" },
  nao: { bug: "P2", ajuste: "P2", reclamacao: "P2", financeiro: "P3", duvida: "P3", outro: "P3", sugestao: "P3" }
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
  esperaHoras: 2,
  limiteHoras: 1,

  /* --- primeiro follow-up --- */
  f1Nome: "FUP 1",
  f1Quando: "imediatamente após explicar",
  f1Mensagem: "&ldquo;Consegue conferir aí pra mim? Ficou como você precisava?&rdquo;",
  f1SimTitulo: "Respondeu",
  f1SimTexto: "<strong>Encerre o ticket.</strong> Registre a confirmação do cliente e as tags. Sem isso o encerramento não vale como resolvido.",
  f1NaoTitulo: "Sem resposta",
  f1NaoTexto: "<strong>Agende o FUP 2 para {espera} horas depois.</strong> Deixe o ticket aberto aguardando cliente — não encerre e não fique reenviando no meio.",

  /* --- segundo follow-up --- */
  f2Nome: "FUP 2",
  f2Quando: "{espera} horas depois do FUP 1",
  f2Mensagem: "&ldquo;Passando pra confirmar se ficou tudo certo. Se eu não tiver retorno, vou encerrar por aqui — e é só chamar de novo que a gente reabre.&rdquo;",
  f2SimTitulo: "Respondeu",
  f2SimTexto: "<strong>Encerre o ticket</strong> com a confirmação registrada.",
  f2NaoTitulo: "Silêncio por {limite} hora",
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
    ["FUP 1",  "Assim que explicar. Respondeu → encerra."],
    ["FUP 2",  "{espera}h depois, se houve silêncio. Respondeu → encerra."],
    ["Limite", "{limite}h de silêncio após o FUP 2 → encerra por inatividade."],
    ["Total",  "Silêncio absoluto encerra {total}h após a explicação."]
  ]
};


/* [10] ══════════════════════════════════════════════════════════════════════
   TÍTULOS E AVISOS DA TELA

   Todo o texto fixo que não pertence a um bloco acima. Está agrupado na
   ordem em que aparece na tela, de cima para baixo.
   ═════════════════════════════════════════════════════════════════════════ */

const TEXTOS = {

  /* --- cabeçalho --- */
  marca: "DIO",
  titulo: "Playbook de Atendimento",
  subtitulo: "Uso interno — time de Atendimentos",
  botaoMapa: "Modo mapa",

  /* --- painel esquerdo: contexto --- */
  railContexto: "Contexto do cliente",
  railTempoLabel: "Tempo de casa",
  railTempoHint: "Define quem executa a ação, não o que fazer.",
  railOperLabel: "A loja está em operação agora?",
  railOperHint: "Confirme isso na etapa 2. Casa cheia sobe a severidade e cancela o modo de ensino.",

  /* --- painel esquerdo: busca --- */
  railBusca: "Busca por sintoma",
  buscaPlaceholder: "ex: pedido não chega, cupom, NPS",
  buscaVazia: "Nenhum caso conhecido. Classifique manualmente pelos dois eixos.",

  /* --- etapas 1 a 3 --- */
  etapaAguardando: "aguardando a etapa",
  etapaConcluida: "concluído",
  etapaReabrir: "concluído · reabrir",
  etapaAbrir: "abrir",
  etapaNaoFaca: "Não faça",

  /* --- etapa 4 bloqueada --- */
  bloqueioEyebrow: "Etapa 4 · bloqueada",
  bloqueioTexto: "A verificação por tema abre depois do ticket criado. Assim a classificação fica registrada e mensurável, em vez de viver só na cabeça de quem atendeu.",
  bloqueioBotao: "Emergência: liberar agora",
  bloqueioAviso: "Use só em P1 com a loja parada. O desvio fica marcado no ticket com a tag <code>etapas:puladas</code>.",

  /* --- etapa 4 liberada --- */
  eixo1Eyebrow: "Etapa 4 · eixo 1",
  eixo1Titulo: "Natureza do ticket",
  eixo1Nota: "Você classifica, não o cliente. Pode reclassificar a qualquer momento.",
  eixo2Eyebrow: "Etapa 4 · eixo 2",
  eixo2Titulo: "Módulo da plataforma",
  eixo2Nota: "Onde olhar e qual documentação mandar.",
  eixoVazio: "Selecione {falta} para ver o direcionamento. Ou busque pelo sintoma no painel à esquerda.",

  /* --- etapa 5: resultado, coluna esquerda --- */
  resEyebrow: "Etapa 5 · agir e explicar",
  resPulou: "etapas puladas",
  resModoLabel: "Modo de entrega",
  resModoUrgencia: "sobreposto pela urgência",
  resModoUrgenciaTitulo: "Executo agora, ensino depois",
  resModoUrgenciaTexto: "A loja está em operação e o caso é P1. Não é momento de ensinar: resolva você, e agende o repasse para depois do serviço.",
  resSequencia: "Sequência de ação",
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
  fupEyebrow: "Etapa 6 · follow-up e encerramento",
  fupTitulo: "O atendimento não termina na explicação",
  fupSubtitulo: "Resolvido não é o mesmo que confirmado. O ticket só encerra com resposta do cliente ou com o silêncio esgotado.",
  fupMandeAssim: "Mande assim",
  fupEnviarAs: "enviar às",
  fupAPartirDas: "a partir das",

  /* --- rodapé --- */
  rodapeBotao: "Reiniciar atendimento",
  rodapeAviso: "<strong>Rascunho para revisão.</strong> Severidade, prazos, cortes de tempo de casa e tempos de follow-up são propostas a calibrar. Os links apontam para a documentação real da plataforma."
};
