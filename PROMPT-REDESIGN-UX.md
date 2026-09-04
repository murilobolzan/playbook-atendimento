# Brief: reestilizar o front do Playbook de Atendimento da Dionísio

> Cole este arquivo inteiro em um chat novo. Ele descreve tudo o que a plataforma
> entrega hoje, o que não pode quebrar, e o que precisa melhorar.

---

## 0. A REGRA QUE VEM ANTES DE TODAS

Este projeto separa **o visual** do **conteúdo**. Você foi chamado para mexer no
visual. O conteúdo é trabalho de meses de um time e **não é seu para reescrever**.

| Arquivo | O que é | O que você pode fazer |
|---|---|---|
| `index.html` | CSS e JS inline — **o visual e o motor** | **reescrever inteiro**, é o seu trabalho |
| `conteudo.js` | processo, régua de avaliação e 160 rótulos | **só acrescentar chave nova em `TEXTOS`** |
| `respostas.js` | as 29 respostas prontas do time | **não abrir, não editar, não regerar** |
| `img/` | 27 prints | **não tocar** |

### Por que o `respostas.js` é intocável

Ele é **escrito pela máquina**. A própria interface publica nele, via API do GitHub,
cada vez que alguém do time cria ou edita uma resposta. Enquanto você trabalha, **o
time continua publicando**. Se você reescrever esse arquivo, você apaga o que eles
publicaram nesse meio-tempo.

E mais: um bloco colado no lugar errado já derrubou o site inteiro uma vez.

### O que fazer quando precisar de um texto novo

Você vai precisar — rótulo de botão, título de seção, mensagem de estado vazio.
Nunca escreva a frase no `index.html`. Faça assim:

1. Acrescente a chave no fim do grupo certo em `TEXTOS`, no `conteudo.js`.
2. Use `TEXTOS.nomeDaChave` no código.

**Acrescentar chave é permitido. Reescrever o arquivo não é.** Se uma chave que você
não criou desapareceu, você errou.

### Trabalhe numa branch

O `main` está no ar e sendo usado agora. Antes da primeira alteração:

```bash
git checkout -b redesign-ux
```

Só volte para o `main` quando a lista de verificação da seção 4 passar inteira.

### Antes de dizer que terminou

Rode isto. Tem que dar zero diferença nos dois arquivos de conteúdo:

```bash
git diff --stat main -- respostas.js img/
```

E isto tem que mostrar **só linhas acrescentadas**, nenhuma removida:

```bash
git diff main -- conteudo.js
```

Se `respostas.js` aparecer no primeiro comando, **pare e desfaça**.

---

## 1. O papel que você vai assumir

Você é **Designer de UI/UX Sênior e engenheiro front-end**, com experiência em
ferramentas internas de atendimento ao cliente — helpdesks, bases de conhecimento e
consoles de operação (Zendesk, Intercom, Front, Notion, Linear).

Sua tarefa é **reestilizar o front do zero**: nova identidade visual, nova hierarquia
tipográfica, novo sistema de componentes, novo layout. A lógica e os dados ficam.

---

## 2. O produto, em uma frase

Um **playbook interno** que o time de Customer Success da Dionísio usa **durante o
atendimento ao cliente**, para saber o que fazer, como ser avaliado, e para copiar
respostas prontas e colar no WhatsApp.

**Dionísio** é um SaaS de gestão para restaurantes: reservas, fila de espera,
delivery, cardápio, CRM, disparos, e uma IA que atende os clientes finais pelo
WhatsApp e Instagram.

### Quem usa, e em que situação

Atendente de CS, no meio de uma conversa com o cliente. Ele está com:

- a conversa do cliente aberta em outra aba,
- o painel da Dionísio aberto em outra,
- e o playbook numa terceira.

Ele tem **segundos**, não minutos. Está com pressa, alternando janelas, e muitas
vezes lendo com a mão já no teclado. Todo pixel de enfeite que atrasa o achar é
custo real.

O produto é **desktop primeiro**. Celular é secundário, mas precisa funcionar.

---

## 3. O que a plataforma entrega hoje

São **três tópicos**, e o usuário está em um de cada vez. Não crie um quarto.

| Tópico | O que é | Uso |
|---|---|---|
| **Guia de atendimento** | Fluxo de 5 etapas, as 3 primeiras travadas em sequência | durante o atendimento |
| **Critérios de avaliação** | Régua de 4 critérios, notas de 0 a 5, média ponderada | consulta e feedback |
| **Respostas rápidas** | Biblioteca de 29 respostas prontas, por aba/sub-aba da plataforma | o tempo todo |

### 3.1 — Guia de atendimento

Cinco etapas, na ordem:

1. **Ler a conversa do Cliente** — checklist de 4 itens + 3 "nunca faça" + botão "Li a conversa inteira"
2. **Entender o problema** — checklist de 3 itens + 1 "nunca faça" + botão "Entendi e confirmei com o cliente"
3. **Criar o ticket** — checklist de 2 itens + 2 "nunca faça" + **o seletor de tema** + botão "Ticket criado"
4. **Guia de Atendimento** — o material do assunto escolhido
5. **Follow-up e encerrar** — o cronômetro de retorno

**As etapas 1, 2 e 3 são portões**: a 4 e a 5 ficam **travadas** até as três primeiras
serem marcadas como feitas. Isso é **deliberado** — foi pedido explicitamente, para
ninguém pular o processo. Mantenha a trava.

**O seletor de tema** (dentro da etapa 3) é uma escolha de dois eixos:

- **Natureza do ticket** — 7 opções: Ajuste, Dúvida, Reclamação, Bug, Sugestão, Financeiro, Outro
- **Módulo da plataforma** — 13 opções: Relatórios, Reserva, Fila, Delivery, Cardápio, Conexão, IA, CRM, Disparos, Cupom, Satisfação, Atendimento, Configurações gerais

A natureza define automaticamente a **severidade**:

| Severidade | Rótulo | Prazo |
|---|---|---|
| **P1** | operação parada | Assuma agora. Contorno em até 15 min e Tech acionado no mesmo momento. |
| **P2** | degradado | Resolver ou encaminhar dentro do turno. |
| **P3** | sem impacto imediato | Resolver em até 24h úteis. |

Mapa atual: Bug → P1. Ajuste, Reclamação, Financeiro → P2. Dúvida, Sugestão, Outro → P3.

**A etapa 4** mostra, para o módulo escolhido:

- **O modo de entrega**, que depende do tempo de plataforma do cliente:
  - até 45 dias → "Executo e mostro para o cliente" (cliente em implantação)
  - mais de 45 dias → "Mostro como faz e só executo se ele pedir" (cliente maduro)
- **Casos conhecidos** do módulo — 34 no total na base, sintoma + causa + link
- **Links de documentação** — 71 no total na base
- Um bloco de "ainda tem dúvida?" que abre a IA da documentação

**A etapa 5** é o follow-up: dois toques cronometrados, **30 minutos** de espera até o
segundo, e **30 minutos** de silêncio depois dele antes de encerrar. A tela calcula e
mostra os horários exatos ("enviar às 14:35", "a partir das 15:05") e traz a mensagem
pronta para copiar.

### 3.2 — Critérios de avaliação

Régua de **4 critérios**, agrupados em 3, com **notas de 0 a 5** e **média ponderada**.
Peso total 10.

| Grupo | Critério | Peso | Níveis |
|---|---|---|---|
| Resolução & Eficácia | 1. Entendeu o problema de fato | ×2 | 0–5 |
| Resolução & Eficácia | 2. Resolveu de fato | ×3 | 0–5 |
| Qualidade Técnica | 3. Qualidade técnica da resposta | ×3 | 0–5 |
| Relacionamento & Comunicação | 4. Tom adequado, empático e no padrão Dionísio | ×2 | 0–5 |

Cada critério tem: um número, um nome, um peso, uma frase de **"o que observar"**, e
**6 níveis** — cada nível é uma frase inteira, não uma palavra.

**Hoje é uma aba só de consulta**: os 4 critérios abrem todos de uma vez, cada um com a
régua 0–5 como lista vertical. **São 24 blocos de texto empilhados numa tela.** Ninguém
lê isso no meio do turno.

### 3.3 — Respostas rápidas

A aba mais usada. Uma biblioteca de respostas padrão organizada em dois níveis, que
espelham as abas do painel da Dionísio.

**8 abas, 31 sub-abas, 29 respostas.** 7 sub-abas ainda estão vazias.

```
Reservas              Visão Geral(0) Nova Reserva(0) Próximas Reservas(0)
                      Reservas Pendentes(0) Bloqueio(1) Áreas e Mesas(3) Histórico(1)
WhatsApp              Conectar WhatsApp(2) Conversas(1) Erros WhatsApp/Meta(1) Etiquetas(1)
Links                 Links da Loja(1) Links Rastreáveis(1)
Satisfação            Pesquisas NPS(1) Nas Conversas(1)
Configuração de IA    Identidade(0) Canais Conectados(1) Características Geral da IA(1)
                      Regras de Comportamento e Gírias(1) Informações(2)
                      Links Externos(1) Follow-Up(2) Quebra-Gelos(1)
Minha Loja            Loja(0) Imagens(1) Formas de Pagamento(1)
                      Repasse(0) Informações Gerais(1) Pagamentos(1)
Membros               Membros(1)
Testes da IA          Testes da IA(1)
```

Cada resposta tem:

- **título** — a dúvida como o cliente costuma trazer ("Como faço para bloquear uma área?")
- **corpo** — de 1 a 12 parágrafos, aceita `<strong>` para negrito
- **palavras-chave** — de 9 a 17 por resposta, **353 distintas** na base
- **print** opcional — 26 das 29 têm imagem
- **flag `interno`** — 1 resposta é procedimento que não vai para o cliente

**As palavras-chave têm três classes semânticas, e a cor as distingue:**

| Cor | Significa | De onde sai |
|---|---|---|
| 🟣 Roxo | Módulo da plataforma | os nomes de `MODULOS` |
| 🔵 Azul | Natureza do ticket | os nomes de `CATEGORIAS` |
| 🟡 Âmbar | Cuidado | a palavra `Interno` |
| ⚪ Cinza | Palavra-chave livre | qualquer outra |

Isso **não é uma tabela fixa** — a classificação é calculada comparando a tag com as
listas do `conteudo.js`. Renomear um módulo lá muda a cor aqui.

**O layout atual é de duas colunas** (implementado recentemente):

```
┌ BARRA ──────────┬ LISTA ───────────────────┬ LEITURA ────────────────────┐
│ [ ＋ Nova ]     │ [Dúvida][IA][Reserva]…  │ Reservas › Bloqueio         │
│ [ 🔑 Publicar ] │ ─────────────────────── │ Como bloquear uma área?     │
│                 │ ★ Bloquear área   ⧉ ★  │                             │
│ ★ Fixados       │   Reservas › Bloqueio   │ [Copiar tudo] [Só texto] ★  │
│  · Bloquear     │ ─────────────────────── │                             │
│                 │ ▸ Etiqueta        ⧉ ☆  │ Para criar um bloqueio…      │
│ ↻ Usadas há     │   WhatsApp › Etiquetas  │                             │
│   pouco         │ ─────────────────────── │ ▸ Ver print da tela          │
│                 │ ▸ Quebra-Gelos    ⧉ ☆  │                             │
│ Reservas     5  │   Config. IA › Quebra…  │ 🔵Dúvida 🟣Reserva bloqueio  │
│ WhatsApp     5  │ ─────────────────────── │                             │
│ Config. IA   9  │ 29 de 29 resposta(s)    │                             │
└─────────────────┴─────────────────────────┴─────────────────────────────┘
```

---

## 4. Comportamentos que precisam sobreviver ao redesenho

Esta é a lista que importa. Perder qualquer um destes é regressão.

### Respostas rápidas

| Comportamento | Detalhe |
|---|---|
| **Copiar sem abrir** | Botão `⧉` em cada linha da lista. Um clique copia. Vira `✓` verde por 2,2s |
| **Copiar texto + imagem juntos** | Quando tem print, usa `ClipboardItem` com `text/plain` + `image/png` no mesmo evento |
| **Copiar só o texto** | Botão separado, porque o WhatsApp costuma pegar a imagem e ignorar o texto |
| **Fallback de clipboard** | Sem `navigator.clipboard`, cai para `textarea` + `execCommand("copy")` |
| **Fixar** | `☆`/`★` em cada linha. Fixados sobem ao topo da lista e aparecem na barra |
| **Usadas há pouco** | As 5 últimas **copiadas** (não abertas). Aparecem na barra |
| **Busca ao vivo** | Filtra a lista a cada letra. **A barra e o painel de leitura não se mexem** |
| **Busca sem acento** | "satisfacao" acha "Satisfação". Normaliza NFD e tira diacríticos |
| **Busca ignora a sub-aba** | Quem digita está atrás de algo que não achou onde estava |
| **Realce do termo** | O que casou vem em `<mark>` no título e no corpo |
| **Chips de filtro** | Só as palavras classificadas (18). As 353 livres filtram pelo pé da resposta |
| **Chips combinam** | Vários ativos = filtro AND |
| **Sub-abas vazias escondidas** | Atrás de "⋯ mostrar sub-abas vazias" |
| **Print sob demanda** | A imagem fica atrás de "Ver print da tela". Máx 300px, clique abre em tela cheia |
| **Nunca dá tela vazia** | O padrão é a biblioteca completa, não "escolha uma aba" |

### Atalhos de teclado

| Tecla | Faz |
|---|---|
| `/` ou `Ctrl+K` | Vai para as respostas e foca a busca |
| `↑` `↓` | Anda na lista, com scroll-into-view |
| `Ctrl+Enter` | Copia a resposta escolhida |
| `Esc` | Limpa a busca; fecha a gaveta de documentação; fecha o menu do celular |

Os atalhos precisam funcionar **com o cursor dentro do campo de busca** — é onde a
mão já está. Só são desligados dentro de `<textarea>` e com modal aberto.

### Editar e publicar pela própria tela

Isto é o coração operacional e **não pode quebrar de jeito nenhum**. O site é
estático, mas o time cria e edita respostas **pela interface**, sem tocar em código.

1. **＋ Nova resposta** e **✎ Editar** abrem um formulário modal com: título, aba
   (existente ou nova), sub-aba (existente ou nova), palavras-chave, corpo, imagem,
   checkbox de "interno".
2. Salvar chama a **API REST do GitHub**: `GET` do `sha` atual, `PUT` do arquivo novo
   em base64.
3. O `respostas.js` é **reescrito inteiro** a partir da estrutura em memória, nunca
   emendado no meio. Isso é o que garante sintaxe válida — antes, um bloco colado no
   lugar errado derrubou o site inteiro.
4. Imagem escolhida no formulário sobe sozinha para `img/` num commit próprio.
5. O **token do GitHub** fica só no `localStorage`, nunca no código publicado. Quem
   abre o site sem token só lê.
6. Uma tela de **🔑 Configurar publicação** explica os 5 passos e testa o acesso.
7. Sem token, dá para salvar como **rascunho local** e **gerar o código** para colar
   à mão. Rascunhos aparecem na lista com um selo.

**Já foram publicadas 29 respostas e 27 imagens por esse caminho.** Se você mudar o
formato do `respostas.js`, o gerador (`gerarArquivoRespostas`) tem que mudar junto, ou
a próxima publicação corrompe o arquivo.

### Guia

| Comportamento | Detalhe |
|---|---|
| **Portões** | Etapas 4 e 5 travadas até 1, 2 e 3 serem marcadas |
| **Etapa 3 exige tema** | O botão de avançar fica desabilitado sem natureza e módulo |
| **Severidade automática** | A natureza escolhida define P1/P2/P3 e o prazo |
| **Modo de entrega** | Os dois caminhos aparecem lado a lado, o escolhido em destaque |
| **Cronômetro do follow-up** | Calcula e mostra os horários reais, 30 + 30 minutos |
| **Botão de recomeçar** | Zera portões, tema, follow-up e escopo das respostas |

### Chassi

| Comportamento | Detalhe |
|---|---|
| **Barra redimensionável** | Arrastar entre 180 e 460px. Duplo clique volta ao padrão. Setas ajustam de 16 em 16. Largura lembrada |
| **Barra recolhível** | Estado lembrado |
| **Gaveta de documentação** | Abre a doc em `<iframe>` por cima, sem perder o estado do atendimento. `Ctrl+clique` e clique do meio ainda abrem em aba nova |
| **Perguntar para a IA** | Monta `?ask=` com a pergunta e abre na gaveta |
| **Topo fixo medido** | Um `ResizeObserver` mede a altura real do cabeçalho e escreve em `--stick`. Não chute esse valor: o texto quebra linha e desalinha |
| **Menu no celular** | Barra vira gaveta com véu |
| **Zoom de imagem** | Overlay em tela cheia, `Esc` ou clique fecha |
| **Rede de segurança** | Se o `conteudo.js` tiver erro de sintaxe, a tela mostra o erro e a linha em vez de ficar branca |

### Estado guardado no navegador

`larguraBarra`, `barraRecolhida`, `tokenGitHub`, `respostasExtras` (rascunhos),
`respFixados`, `respRecentes`. Todos com `try/catch` — modo privado não pode derrubar
a página.

---

## 5. Restrições técnicas — leia antes de propor qualquer coisa

Estas não são preferências. São o que o projeto é.

### 5.1 — Site estático, hospedado no GitHub Pages

- **Sem build.** Não tem npm, bundler, transpilador, nem passo de compilação.
- **Sem framework.** JavaScript puro, DOM direto. Não proponha React, Vue, Svelte,
  Tailwind, nem nada que precise de build.
- **Sem backend.** Nenhum servidor, nenhum banco.
- **Sem requisição externa.** Nada de CDN, nada de fonte remota, nada de biblioteca
  hospedada fora. Tudo tem que estar no repositório.
- **Abre com duplo clique no arquivo.** Precisa funcionar em `file://` também.

### 5.2 — Três arquivos, com papéis separados

| Arquivo | O que tem | Quem mexe |
|---|---|---|
| `index.html` | 3.334 linhas — **todo o CSS e todo o JS inline**. O motor | você |
| `conteudo.js` | 1.062 linhas — etapas, checklists, categorias, módulos, casos, docs, severidades, régua de avaliação, e **160 chaves de texto de interface** | o dono do processo |
| `respostas.js` | 545 linhas — só a biblioteca de respostas | **a própria tela**, via API do GitHub |

**Essa separação é a regra mais importante do projeto.**

- **Nenhuma frase visível ao usuário pode ficar hardcoded no `index.html`.** Todo
  rótulo, título, dica, placeholder e mensagem de erro vem de `TEXTOS`, em
  `conteudo.js`. São 160 chaves hoje. Se seu redesenho precisar de um texto novo,
  crie a chave lá e use `TEXTOS.nomeDaChave`.
- `respostas.js` é **escrito pela máquina**. Não mude o formato sem mudar o gerador.

### 5.3 — Cache do GitHub Pages

Cada arquivo é cacheado uns 10 minutos, **separadamente**. Sem cuidado, dá para pegar
um `index.html` novo com um `conteudo.js` velho — e toda chave de texto recém-criada
vira `undefined`: botão sem legenda, campo sem rótulo. Isso já aconteceu.

A solução em uso: o `index.html` carrega os dois arquivos dinamicamente com uma marca
de minuto na URL (`?t=` do timestamp dividido por 60000), forçando os dois a vir da
mesma leva. **Mantenha esse carregador.**

### 5.4 — Tema claro e escuro

Obrigatórios os dois, com três estados: `prefers-color-scheme`, `[data-theme="dark"]`
e `[data-theme="light"]`. **Toda cor tem que ser token.** Nenhuma cor literal fora do
bloco de tokens.

### 5.5 — Acessibilidade

- Contraste mínimo 4,5:1 para texto, 7:1 onde der.
- Tudo clicável é `<button>` ou `<a>` de verdade, alcançável por `Tab`.
- `aria-expanded` em tudo que abre e fecha, `aria-pressed` em tudo que liga e desliga,
  `role="tablist"` no seletor de tópico, `aria-modal` nos modais.
- `[hidden] { display: none !important; }` é obrigatório: sem isso, uma classe com
  `display` explícito vence o atributo `hidden` e o conteúdo de um tópico **vaza** para
  outro. Isso já aconteceu.

### 5.6 — Responsivo

- Nada de rolagem horizontal na página, em nenhuma largura.
- Conteúdo largo (tabela, diagrama, bloco de código) rola dentro do próprio
  contêiner.
- A tela precisa aguentar **260px de largura de coluna** sem estourar.
- Desktop primeiro, mas celular tem que funcionar.

---

## 6. Design tokens atuais

A marca da Dionísio é o roxo `#BB95D4`, extraído do tema real da documentação do
produto. **Isso é obrigatório manter** — é a identidade da empresa. O resto da paleta
é derivado e você pode repensar.

```css
/* marca e acento */
--brand:        #BB95D4;   /* a cor da marca */
--accent:       #6D3D93;   /* versão legível sobre branco, 7,2:1 */
--accent-forte: #572E77;
--accent-suave: #F1E9F7;
--accent-linha: #DCC9EA;
--accent-sobre: #FFFFFF;

/* superfícies e tinta */
--ground:  #F7F5FA;  --surface:   #FFFFFF;
--surface-2: #FBF9FD; --surface-3: #F4F0F9;
--ink:  #1B1421;  --ink-2: #564B60;  --ink-3: #786783;
--line: #E5DFEC;  --line-forte: #CFC5D9;

/* semânticas — cada uma com par de fundo */
--crit: #B02A21;  --crit-bg: #FBE9E7;   /* P1, erro, remover */
--warn: #855400;  --warn-bg: #FAF0DA;   /* P2, interno, cuidado */
--calm: #1A6349;  --calm-bg: #E2F1EB;   /* P3, feito, copiado */
--info: #1D4FA8;  --info-bg: #E6EEFA;   /* natureza do ticket */

/* escala de espaçamento — tudo na tela usa um destes */
--s1: 4px; --s2: 8px;  --s3: 12px; --s4: 16px;
--s5: 20px; --s6: 24px; --s7: 32px; --s8: 44px;

/* escala tipográfica */
--t-micro: 10.5px; --t-xs: 11.5px; --t-sm: 12.5px;
--t-base: 13.5px;  --t-md: 15px;   --t-lg: 17px; --t-xl: 20px;

--r: 4px;  --r-sm: 3px;
--stick: 108px;   /* altura do topo fixo; o JS mede e corrige */

--font-ui:   "Segoe UI Variable Text","Segoe UI",system-ui,-apple-system,…
--font-mono: "Cascadia Mono","Cascadia Code",Consolas,"SF Mono",ui-monospace,…
```

**Observações sobre o que está aí hoje:**

- A tipografia é **densa de propósito** — 13,5px de corpo, para caber mais na tela.
  Se você aumentar, justifique o que sai da tela em troca.
- O raio é **pequeno de propósito** (4px) — ferramenta de trabalho, não app de
  consumo.
- A fonte mono carrega significado: caminhos (`Aba › Sub-aba`), contadores, tags,
  atalhos de teclado. Não é decoração.
- São **205 classes CSS** hoje. Muitas são de uma versão anterior e podem morrer.

---

## 7. O que está ruim hoje — os problemas para resolver

### Problemas transversais

1. **Cada tópico tem um layout diferente.** O usuário reaprende a tela três vezes.
   Não há um sistema de componentes reconhecível entre eles.
2. **A hierarquia visual é fraca.** Título de card, título de seção e rótulo de grupo
   competem. Em algumas telas não fica claro o que é o assunto e o que é apoio.
3. **205 classes CSS, muitas órfãs**, e nomes de gerações diferentes convivendo
   (`.rcard-*` de uma versão antiga ao lado de `.rleitura-*` da nova).
4. **Falta um estado de foco consistente.** Alguns elementos têm `box-shadow`, outros
   só `border-color`, outros nada além do padrão do navegador.
5. **Sem página de sistema.** Não existe um lugar que mostre a paleta, os
   componentes e os estados.

### Critérios de avaliação — o pior dos três

**Um paredão de 24 blocos de texto.** Os 4 critérios abrem todos de uma vez, e cada
régua 0–5 é uma lista vertical de frases inteiras.

- Não dá para comparar níveis.
- Não dá para ver "onde estou" nem "o que falta para o próximo nível".
- O peso é um número solto, sem mostrar o impacto na nota.
- Não dá para simular uma nota, que é o uso real de um líder dando feedback.

Uma direção já esboçada, que você pode adotar, adaptar ou descartar com argumento:
acordeão por critério, régua 0–5 como **trilha horizontal clicável**, texto de só um
nível por vez, e um painel de nota que recalcula ao vivo.

### Guia de atendimento

- **A checklist e o "nunca faça" empilham e competem.** Deviam ser um par visual em
  duas colunas — é o contraste que faz o trabalho.
- **Os cards de etapa são blocos longos de texto corrido.** Difícil bater o olho.
- **O seletor de tema (7 × 13 opções) está enterrado dentro da etapa 3**, mas é ele
  que define tudo que a etapa 4 mostra. Merece estar sempre visível.
- **Para consultar a etapa 4 é preciso percorrer as três primeiras.** A trava é
  proposital e fica, mas falta um modo de **só leitura** que não registre progresso.
- A severidade e o prazo aparecem como texto, não como o alerta que são.

### Respostas rápidas

A tela de duas colunas é recente e funciona, mas:

- **A densidade da linha não é ajustável.** 71px por linha com título de duas linhas;
  numa tela de 1080px cabem ~11 respostas de 29.
- **Os chips de filtro e o contador brigam por espaço** no topo da lista.
- **O painel de leitura não tem hierarquia** entre o corpo, o print e as tags do pé.
- **Não há indicação de qual print falta.** Uma resposta aponta para uma imagem que
  não existe, e a única pista é o espaço em branco.
- Os botões de editar e remover ficam no meio das ações de copiar, com peso visual
  parecido — perigoso.

---

## 8. O que eu quero que você entregue

Nesta ordem:

### Etapa 1 — Direção visual (antes de qualquer código)

- **Um sistema de design** em tokens: paleta completa clara e escura, escala
  tipográfica com propósito declarado para cada degrau, escala de espaçamento, raios,
  sombras, estados de foco.
- **A justificativa de cada escolha em uma frase.** Não quero "moderno e clean" —
  quero "13,5px porque caber 11 linhas na lista vale mais que conforto de leitura, já
  que o texto real é lido no painel a 15px".
- **O inventário de componentes**: quais componentes o sistema tem, e qual tela usa
  qual. Componente que serve uma tela só é suspeito.

### Etapa 2 — Wireframe em texto das três telas

Para cada tópico: layout, componentes, e o fluxo de navegação. Diga o que muda de
lugar e **por quê** — que atrito específico aquilo remove.

### Etapa 3 — Implementação

- CSS novo e completo, em tokens, dentro do `index.html`.
- As funções de render ajustadas ao markup novo.
- **Nenhuma frase nova hardcoded** — chave em `TEXTOS`.
- **Nenhum comportamento da seção 4 perdido.**
- **O mecanismo de publicação intacto.**

### Como eu vou avaliar

| Critério | Pergunta |
|---|---|
| **Velocidade** | Achar e copiar uma resposta ficou mais rápido, em cliques e em teclas? |
| **Densidade** | Cabe mais informação útil na tela, sem virar sopa? |
| **Consistência** | As três telas parecem o mesmo produto? |
| **Hierarquia** | Bate o olho e sabe o que é o assunto? |
| **Robustez** | Aguenta 260px, tema escuro, teclado, e print faltando? |
| **Regressão** | Perdi algum comportamento da seção 4? |

---

## 9. Como olhar o código

- **No ar:** https://murilobolzan.github.io/playbook-atendimento/
- **Repositório:** https://github.com/murilobolzan/playbook-atendimento
- **Arquivos:** `index.html` (motor), `conteudo.js` (processo e textos),
  `respostas.js` (biblioteca), `img/` (27 prints)
- **README.md** documenta o índice numerado do `conteudo.js` (`[3]` são os portões,
  `[6]` as categorias, `[7]` os módulos, `[8]` as severidades, `[9]` o follow-up,
  `[10]` os textos, `[11]` a régua de avaliação).

Para rodar local, qualquer servidor estático serve. Abrir o `index.html` direto
também funciona.

---

## 10. Três avisos finais

1. **Isto está em produção, sendo usado por um time hoje.** 29 respostas e 27
   imagens foram publicadas pela própria interface. Não é protótipo.

2. **O `respostas.js` é escrito pela máquina.** Se o formato mudar, o gerador muda
   junto — senão a próxima publicação de resposta corrompe o arquivo e derruba o site.
   Já derrubou uma vez, por um bloco colado no lugar errado.

3. **Pergunte antes de remover um comportamento.** Vários deles parecem detalhe e são
   cicatriz de um problema real: a marca de minuto na URL, o `[hidden] !important`, o
   `ResizeObserver` do topo, o "só o texto" ao lado do "texto + imagem". Cada um está
   ali porque a ausência dele quebrou algo.
