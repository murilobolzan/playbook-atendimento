# Etapa 2 — Wireframe em texto das três telas

> Companheiro do `PROMPT-REDESIGN-UX.md`. Escopo travado em **layout**:
> conteúdo e funcionalidade congelados, sem feature nova.
> Branch: `redesign-ux`.

---

## O chassi comum

As três telas passam a usar a mesma moldura, com papéis fixos por zona.
Hoje cada tópico tem um layout próprio, e o atendente reaprende a tela três vezes.

```
┌ TOPBAR  marca · título · subtítulo ─────────────────────────────────────┐
├ TRILHO ─────────┬ CONTEÚDO ─────────────────────────────────────────────┤
│ [tópico] [tópico] [tópico]   ← tablist, o que já existe                │
│ ─────────────── │  (a zona muda de preenchimento, nunca de estrutura)  │
│ onde estou      │                                                      │
│ + ações         │                                                      │
└─────────────────┴──────────────────────────────────────────────────────┘
```

| Zona | Papel fixo | Guia | Critérios | Respostas |
|---|---|---|---|---|
| **Trilho** | onde estou · ações | 5 etapas, com trava | 3 grupos | 8 abas / 31 sub-abas, fixados, recentes |
| **Índice** | o conjunto escolhível | — (o guia tem uma etapa por vez) | 4 critérios | 29 respostas |
| **Palco** | a única coisa em foco | a etapa atual | o critério aberto | a resposta aberta |

O guia não tem coluna de índice porque ele é um fluxo de uma etapa por vez —
o trilho já é o índice dele. Forçar três colunas ali seria simetria fake.

---

## Tela 1 — Guia de atendimento

### Etapas 1 a 3 (`renderFlow`)

**Antes:** checklist e "nunca faça" empilhados, competindo. Card de texto corrido.

**Depois:** par de contraste em duas colunas. É o contraste que faz o trabalho —
lado a lado você lê "isto sim / isto não" de uma vez; empilhado, você lê duas listas.

```
┌ ETAPA 1 · Ler a conversa do Cliente ──────────── [✓ concluído] ┐
│ lead: uma frase, 15px                                          │
│                                                                │
│ ┌ FAÇA ASSIM ───────────┐ ┌ NÃO FAÇA ────────────────┐        │
│ │ ✓ item                │ │ ✕ item                   │        │
│ │ ✓ item                │ │ ✕ item                   │        │
│ │ ✓ item                │ │ ✕ item                   │        │
│ │ ✓ item                │ │  (família crit)          │        │
│ │  (família calm)       │ │                          │        │
│ └───────────────────────┘ └──────────────────────────┘        │
│                                                                │
│ [ Li a conversa inteira ]  ← por que isso importa              │
└────────────────────────────────────────────────────────────────┘
```

Abaixo de 820px as duas colunas viram uma, com a de "não faça" embaixo.

**Atrito que remove:** hoje o "nunca faça" tem o mesmo peso visual da checklist
e fica depois dela, então quem varre de cima para baixo lê os dois como
continuação. Em duas colunas com famílias de cor opostas, o par se lê em um golpe.

**Markup:** entra um wrapper `.st-par` entre a `.checklist` e o `.callout.c-stop`.
Nenhum item de conteúdo muda.

### Etapa 3 — o seletor de tema

Fica **onde está**. Ele é a razão de a etapa 3 existir, e mover isso seria
reestruturação, não layout. O que muda é só a grade: `.cards` passa a ter
alvo mínimo de 132px e a densa 108px, então as 7 naturezas cabem em duas
linhas e os 13 módulos em três, sem rolagem interna.

### Etapa 4 (`renderOut`) e Etapa 5 (`renderFup`)

Só tratamento visual. A faixa `blocoTema` continua **só na etapa 4**, como hoje,
e ganha fundo e borda próprios para se ler como identidade do ticket em vez de
texto solto. Os dois caminhos de entrega viram um par segmentado com o escolhido
em destaque; casos conhecidos e documentação ganham o painel padrão.

```
┌ Ticket classificado como ──────────────────────────────────────┐
│  [Bug]  [Reserva]                                              │
└────────────────────────────────────────────────────────────────┘
```

**O que eu NÃO fiz, e por quê:** o brief pede a severidade (P1/P2/P3) e o prazo
como alerta. Mas `SEV` e `SEV_POR_CATEGORIA` existem em [8] do `conteudo.js` e
**nunca chegaram à tela** — não são texto mal formatado, são dado que o motor
nunca leu. Exibi-los seria acrescentar informação, não mudar layout. Ficou de
fora, e está registrado como pergunta em aberto no fim deste documento.

---

## Tela 2 — Critérios de avaliação

**Antes:** os 4 critérios abertos ao mesmo tempo, cada régua 0–5 como lista
vertical de frases inteiras. **24 blocos de texto numa tela.** É o pior dos três,
por confissão do próprio brief.

**Depois:** acordeão de critério + trilha 0–5 horizontal. Um nível por vez.

```
┌ Resolução & Eficácia ──────────────────────────────────────────┐
│                                                                │
│ ┌ ① Entendeu o problema de fato              peso ×2  ▾ ┐     │
│ │ O que observar: Investigou antes de responder.         │     │
│ │                                                        │     │
│ │  [0] [1] [2] [3] [4] [5]        ← trilha, um ativo    │     │
│ │  não atendeu            referência                     │     │
│ │                                                        │     │
│ │  NÍVEL 3                                               │     │
│ │  Entendeu parcialmente o problema do cliente.          │     │
│ │                                                        │     │
│ │  ↑ o que falta: nível 4 →                              │     │
│ │  Entendeu parcialmente e buscou entender a fundo.      │     │
│ └────────────────────────────────────────────────────────┘     │
│                                                                │
│ ┌ ② Resolveu de fato                          peso ×3  ▸ ┐    │
│ └────────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────────┘
```

Regras:

1. **Um critério aberto por vez.** O primeiro abre no boot; clicar em outro
   fecha o anterior. Nenhuma tela começa vazia.
2. **A trilha mostra a nota, não registra.** É um leitor: clicar troca qual
   das 6 frases está visível. **Não calcula média, não guarda nada** — seria
   feature nova.
3. **O nível seguinte aparece embaixo, atenuado.** É a resposta para "o que
   falta para o próximo nível", que o brief diz que não existe hoje. E é o
   mesmo texto de `niveis[n+1]`, sem uma palavra nova.
4. **O peso vira selo**, não número solto: `peso ×2` em mono, na família de acento.
5. Os grupos continuam sendo as três seções, na mesma ordem, com o mesmo nome.

**Atrito que remove:** dá para comparar níveis (a trilha põe os 6 na horizontal),
dá para ver onde estou e o que falta, e a tela cabe sem rolagem em 1080px.

**Conteúdo:** as 24 frases de `AVALIACAO`, na mesma ordem, byte por byte.
`observar`, `peso`, `pesoLabel`, `observarLabel` e `comoCalcula` também.

---

## Tela 3 — Respostas rápidas

A tela que mais funciona hoje. Ela é a **referência** do chassi, não a que se
adapta. Cinco correções, todas de apresentação.

```
┌ BUSCA (fixa, não sai da tela ao rolar) ────────────────────────────────┐
│ 🔍 antecedencia                                          [Ctrl K] [×]  │
└────────────────────────────────────────────────────────────────────────┘
┌ LISTA ─────────────────────┬ LEITURA ──────────────────────────────────┐
│ [Dúvida][Reserva][IA][+3]  │ RESERVAS › ÁREAS E MESAS      ← camada 1  │
│ ─── chips, faixa fixa ───  │ Qual a antecedência mínima?   ← camada 2  │
│ ★ Fixados                  │ ─────────────────────────────             │
│ ▸ Bloquear área       ⧉ ★  │ [Copiar texto+imagem][Só texto] ☆    ✎ ×  │
│ ─────────────────────────  │ ─────────────────────────────  ← camada 3 │
│ Todas                      │                                           │
│ ▸ Antecedência mínima ⧉ ☆  │ A antecedência é configurada por área…    │
│   Reservas › Áreas e Mesas │                              ← camada 4   │
│ ▸ Etiqueta na conversa⧉ ☆  │                                           │
│   WhatsApp › Etiquetas     │ [🖼 Ver print da tela]                    │
│                            │ ───────────────────────────── ← camada 5  │
│ ─── rola só aqui ───────── │ 🔵Dúvida 🟣Reserva ⚪antecedência          │
├ BARRA DE ESTADO (fixa) ────┤                                           │
│ 2 de 29 · filtrado         │                                           │
│ ↑↓ navega · Ctrl+Enter     │                                           │
│ densidade [▪][▪▪][▪▪▪]     │                                           │
└────────────────────────────┴──────────────────────────────────────────┘
```

### 1 · Busca que não foge

`.side-busca` passa a ser `position: sticky` no topo do conteúdo. Hoje ela rola
junto e sai da tela; quem rolou a lista até o fim e quer trocar o termo tem que
voltar ao topo. O atalho passa a aparecer escrito no campo (`Ctrl K`), porque
atalho invisível não é usado.

Sem cirurgia no DOM: o `#caixa-busca` continua no mesmo lugar do HTML, com os
mesmos listeners. Só o CSS muda.

### 2 · Chips e contador cada um no seu lugar

**Antes:** os dois no `.rlista-topo`, brigando pela mesma linha.

**Depois:** chips no topo, contador e escopo na barra de estado do pé — que é
onde se olha para responder "estou vendo tudo ou um pedaço?". O `.rlista-conta`
muda de lugar no `colunaLista`; os textos (`respConta`, `respEscopoTag`,
`respAtalhos`) são os que já existem.

### 3 · Densidade regulável

`--row-h` como token, trocado por `[data-densidade]` no `<html>`:
**40px / 52px / 66px**, contra os 71px fixos de hoje. Na compacta o caminho
`Aba › Sub-aba` sai da linha e vira `title`.

Medido em 1080px de altura: de ~11 respostas visíveis para **~14 na normal e ~19 na
compacta**. A larga fica nas ~11 de hoje, com linha mais alta e alvo de clique maior.
A escolha fica no `localStorage`, junto de `larguraBarra` e `barraRecolhida`.

### 4 · Hierarquia no painel de leitura

Cinco camadas, cada uma num degrau diferente de tipo:
caminho (mono 10,5) → título (19px) → ações (fixas, com borda embaixo) →
corpo (15px/1,6) → pé (tags 12px, com borda em cima).

E dentro das ações, **peso visual separa perigo de rotina**: copiar é botão
cheio, "só o texto" é fantasma, editar e remover viram ícone no canto oposto,
com `✕` na família `crit`.

### 5 · Print que não existe deixa de ser espaço em branco

`img.onerror` troca a figura por um aviso na família `warn` dizendo qual arquivo
faltou. O texto continua copiável. Hoje a única pista é o vazio.

---

## O que não se move

- Os 15 comportamentos da seção 4 do brief, um por um.
- As seis cicatrizes: marca de minuto no `?t=`, `[hidden] !important`,
  `ResizeObserver` do `--stick`, dois botões de copiar, fallback de clipboard,
  rede de segurança de sintaxe.
- `respostas.js` e `img/`: intocados.
- `conteudo.js`: só chaves novas no fim dos grupos de `TEXTOS`.
- O caminho de publicação pela API do GitHub e o `gerarArquivoRespostas`:
  o formato do arquivo não muda, então o gerador não muda.

---

## Rodada 2 — "menos coisas por tela"

Feedback do Murilo sobre a primeira versão: reduzir ao conteúdo e ao título,
tirar chips e filtros de tags, melhorar a navegação das abas e a leitura.

### O que saiu das Respostas rápidas

| Saiu | Custava | Onde estava |
|---|---|---|
| Faixa de 18 chips de filtro | ~74px, duas linhas de lista | topo da coluna da lista |
| Pé de palavras-chave | ~46px, até 17 chips por resposta | rodapé do painel de leitura |
| Barra de estado em 3 linhas | ~72px | pé da coluna da lista |

**~161px de cromo removidos.** A barra de estado virou uma linha de 31px:
contador à esquerda, densidade como `C` / `N` / `L` à direita, com o nome no
`title`. Ganho medido em 1080px: **~17 respostas visíveis na normal** (eram ~14
na rodada 1 e ~11 no original) e **~22 na compacta**.

As 353 palavras-chave continuam em `it.tags` e continuam sendo procuradas pela
busca. O que sumiu foi só o atalho de clicar numa palavra para filtrar por ela —
`faixaChips()`, `classeTag()` e `alternaTag()` foram removidos junto.

### Leitura: bullet e explicação deixam de ser irmãos

O padrão real dos dados é este:

```
Isso pode acontecer quando:
• A IA não possui informações suficientes para responder.
Solução: adicionar a informação em Configuração de IA > Informações.
• O cliente solicita atendimento humano.
Nesse caso, a IA realiza automaticamente o encaminhamento.
```

Cada `•` é um item, e **o parágrafo seguinte explica aquele item**. Renderizados
como parágrafos irmãos, os dois ficam com o mesmo peso e a explicação parece um
item novo. Era isso que deixava a leitura estranha.

`montarCorpo()` agora agrupa: o bullet vira `<li>` de verdade e a explicação
entra dentro dele, recuada e mais quieta. Só o primeiro parágrafo depois de um
bullet é tratado como explicação — o segundo fecha a lista, porque aí já é
conclusão do texto, não do item. Parágrafos que começam com `Obs.:` viram um
aparte com filete lateral.

A resposta "Atendimento Humano" passou de **12 parágrafos chapados para 5 blocos**:
intro → frase que abre a lista → lista de 4 itens com suas explicações →
conclusão → observação.

Mais: o corpo passou de `--ink-2` para `--ink` e a medida caiu de 76ch para 66ch.

**O texto copiado não mudou.** `textoLimpo()` lê de `item.resposta`, então o `•`
continua indo para o WhatsApp exatamente como está cadastrado.

### Navegação das abas da plataforma

1. **Um clique faz as duas coisas.** Clicar em `Reservas` abre a aba **e** mostra
   as 5 respostas dela na lista. Antes era um clique para expandir e outro para
   escolher uma sub-aba — e não havia como ver a aba inteira.
2. **Acordeão: uma aba aberta por vez.** Antes todas podiam ficar abertas e a
   barra virava uma lista de 39 linhas.
3. **O comutador de tópico gruda no topo** da barra, com `position: sticky`.
   Antes ele rolava junto e sumia quando a lista de abas era longa.
4. **As duas ações numa linha de 26px.** `＋ Nova resposta` leva a largura e a
   publicação vira a chave `🔑` com o nome no `title`. Antes eram dois botões de
   largura cheia empilhados.
5. Clicar de novo na aba já aberta fecha e volta para a biblioteca completa.

Estado novo: `state.abaAberta` (acordeão) e `state.abaSel` (escopo por aba).
`itensPlanos()` passou a carregar `abaId` para o escopo por aba funcionar.

---

## Rodada 3 — busca por pergunta, uma coluna só, e ordem editável

Feedback: excluir a coluna de lista, poder mexer na ordem das abas, e ter uma
busca onde se cola a pergunta do cliente e ela devolve o que é relevante.

**Isto é funcionalidade nova, não layout** — o escopo mudou por pedido direto.

### O problema real da busca

A busca exigia que **todas** as palavras aparecessem na resposta. Isso funciona
para uma palavra solta (`cupom`), e falha exatamente no caso que importa: colar
a pergunta inteira do cliente.

> "Oi, boa tarde! Como eu faço pra bloquear uma área no dia 12?"

Nenhuma resposta contém todas essas palavras. A tela vinha vazia.

### Como funciona agora

1. **Tira o ruído** — pontuação, acentos e ~90 palavras que não distinguem nada
   (`oi`, `boa`, `tarde`, `como`, `para`, `gostaria`, `preciso`…).
2. **Pontua cada resposta**, e onde a palavra aparece muda o peso:

   | Onde casou | Pontos | Por quê |
   |---|---|---|
   | Título | 10 | é a pergunta como o cliente costuma trazer |
   | Palavra-chave exata | 8 | foi escolhida à mão pelo time |
   | Palavra-chave parcial | 5 | |
   | Aba › Sub-aba | 4 | |
   | Corpo | 2 | o texto inteiro casa com quase tudo |
   | Frase inteira no título | +30 | o caso perfeito |

3. **Cobertura como multiplicador** — cobrir 4 de 4 termos vale mais que 4 de 9.
4. **Corte de precisão** para perguntas coladas (3+ termos): descarta o que
   pontuou menos de 5 ou menos de 18% do topo. Palavra solta continua sem corte,
   porque aí o que se quer é recall.
5. **Piso de 3 resultados** — mesmo quando só uma resposta se destaca, as duas
   seguintes ficam na mesa. Se a primeira não for a certa, o atendente precisa
   ter para onde olhar sem reescrever a pergunta.

Resultado medido, com perguntas coladas inteiras:

| Pergunta colada | 1º resultado |
|---|---|
| "Oi, boa tarde! Como eu faço pra bloquear uma área no dia 12?" | Como faço para bloquear uma área? |
| "gostaria de saber qual o tempo minimo de antecedencia pra reserva" | Tempo de antecedência / Dias de antecedência… |
| "a IA parou de responder meus clientes, o que houve?" | Atendimento Humano |
| "não estou conseguindo conectar meu whatsapp, dá erro" | Erro de 24h após a última mensagem |
| "quero adicionar uma forma de pagamento nova na loja" | Formas de Pagamento e Rodízio & Buffet |
| "como faço para cadastrar um novo membro na equipe?" | Convidar Membros |

**A barra de relevância é honesta.** Ela mede contra um piso de 30 pontos, não
contra o melhor da vez — senão uma pergunta sem resposta boa mostraria o
primeiro lugar com a barra cheia, dizendo "achei" quando não achou. Uma pergunta
sobre bitcoin devolve 13% e 6%, visivelmente fracos.

### Uma coluna só

```
┌ BUSCA — cole a pergunta do cliente ────────────────────────────────────┐
└────────────────────────────────────────────────────────────────────────┘
┌ RESULTADOS (só enquanto há pergunta) ──────────────────────────────────┐
│ 3 RESPOSTA(S) RELEVANTE(S)                                        [×]  │
│ Como faço para bloquear uma área?      ▓▓▓▓▓▓▓▓▓▓  100%       ⧉ ☆      │
│ Reservas › Bloqueio                                                    │
│ Dias de Antecedencia                   ▓░░░░░░░░░   14%       ⧉ ☆      │
└────────────────────────────────────────────────────────────────────────┘
┌ LEITURA — largura inteira ─────────────────────────────────────────────┐
│ RESERVAS › BLOQUEIO                                                    │
│ Como faço para bloquear uma área?                                      │
│ [Copiar texto + imagem] [Só o texto] ☆                        ✎  ×    │
│ …                                                                      │
└────────────────────────────────────────────────────────────────────────┘
```

O primeiro resultado **já abre**: quem colou a pergunta quer a resposta, não uma
lista. O painel de resultados some quando a busca é limpa. O topo da leitura
gruda, então os botões de copiar ficam ao alcance mesmo no fim de uma resposta
longa.

### A árvore ganhou o terceiro nível

Sem a coluna de lista, navegar acontece na barra: **aba › sub-aba › resposta**.
A sub-aba virou rótulo e quem se clica agora é a resposta. Cada resposta na
árvore tem o `⧉` de copiar sem abrir, que era o ganho principal da lista.

São **dois cliques** até uma resposta, contra três antes.

### Reordenar abas e sub-abas

`⇅ Reordenar` no cabeçalho das abas. Setas `⌃ ⌄` em cada aba e, dentro da aba
aberta, em cada sub-aba. Trabalha sobre uma cópia — nada é gravado enquanto você
arruma — e `Salvar nova ordem` publica.

**Eu não edito o `respostas.js`.** Quem grava é a interface, pela API do GitHub,
com o mesmo `gerarArquivoRespostas()` que já escreve o arquivo quando alguém
cria uma resposta. Só a ordem dos elementos muda; nenhum título, tag, texto ou
imagem é tocado. Verificado: com a ordem trocada, o arquivo gerado continua
sendo JavaScript válido e as 29 respostas continuam lá.

Exige token de publicação, porque vale para o time inteiro.

### Editar

Já existia e continua: `✎ Editar` no painel de leitura abre o formulário com
título, aba, sub-aba, palavras-chave, corpo, imagem e o marcador de interno.
Só aparece com token configurado.

### O que saiu junto

- A coluna de lista permanente, o contador e o rodapé de escopo.
- **O controle de densidade** — ele existia para deixar a lista permanente mais
  densa, e essa lista não existe mais.

---

## Rodada 4 — o vocabulário do cliente

Dois problemas reportados: a leitura cortando o texto, e a busca errando um
caso real.

### O corte da visualização

Eu tinha grudado o cabeçalho da leitura (`position: sticky`) dentro de um
`overflow: hidden`. As duas coisas brigam: o cabeçalho ficava **121px abaixo**
do topo do próprio card, abrindo um vão em branco e cobrindo os primeiros
parágrafos.

Removido o `sticky`. O cabeçalho voltou a encostar no topo do card (169 contra
168 de diferença) e nenhum elemento fica cortado. O custo: numa resposta longa,
rolar tira os botões de copiar da vista — era assim antes também.

### O caso que a busca errava

> Pergunta do cliente: *"Conseguem remover esse usuário? Não faz mais parte do
> Feirinha e recebe atualizações no celular."*
>
> Resposta certa: **Membros › Convidar Membros** — o corpo dela diz "excluir
> membros que não precisam mais ter acesso à plataforma".

A busca trazia *Testes da IA*, *Pagamento de Reservas* e *Erro de 24h*.

**Por quê:** o cliente escreve `remover usuário`, a resposta diz
`excluir membros`. **Nenhuma palavra em comum.** Casar palavra com palavra não
tem como acertar isso. Enquanto isso, `celular` e `atualizações` casavam por
acaso no meio do texto de outras respostas.

Três correções:

#### 1. Sinônimos do domínio — `[9.5]` no `conteudo.js`

35 grupos de palavras que valem a mesma coisa nesta operação:

```js
["remover", "excluir", "apagar", "deletar", "tirar", "retirar"],
["usuario", "membro", "pessoa", "colaborador", "equipe", "atendente"],
["bloquear", "travar", "fechar", "indisponibilizar"],
["mesa", "area", "ambiente", "setor", "salao"],
```

É a alavanca mais barata para melhorar a busca: quando uma pergunta real não
achar a resposta certa, veja a palavra que o cliente usou e a que a resposta
usa, e ponha as duas no mesmo grupo. Achar pelo sinônimo vale 0,8 do que vale
achar pela palavra exata — foi uma ponte que nós construímos, não a palavra do
cliente.

**Cuidado que custou uma iteração:** o mapa é montado na *primeira busca*, não
na carga. O bloco de script é inline no HTML e roda **antes** do `conteudo.js`
chegar — montar cedo deixava o mapa vazio para sempre. Mesma família da
cicatriz da marca de minuto no `?t=`.

#### 2. Peso por raridade

`cadastrar`, `criar` e `editar` aparecem no título de meia biblioteca: dizem
pouco sobre *qual* resposta é a certa. `pagamento` e `membro` dizem muito.

Cada termo passou a pesar pelo inverso de quantas respostas o contêm. Sem isso,
*"quero cadastrar uma nova forma de pagar"* trazia em primeiro **"Como
cadastrar, categorizar e editar uma informação da IA"** — só porque o título
dela tem dois verbos de ação.

#### 3. Sinal forte para pergunta longa

Com 5+ termos, a resposta precisa casar no **título, na palavra-chave ou no
caminho**. Casar só no corpo, numa mensagem colada inteira, quase sempre é
coincidência — era daí que vinham `celular` e `atualizações`.

E a cobertura pesa menos quanto mais longa a pergunta (0,35 acima de 6 termos,
contra 0,65), porque a mensagem do cliente traz muita palavra que não é sobre a
dúvida — *"não faz mais parte do Feirinha"*.

### Resultado medido

| Pergunta colada | 1º resultado |
|---|---|
| "Conseguem remover esse usuário? Não faz mais parte do Feirinha…" | **Convidar Membros** ✓ |
| "preciso tirar uma pessoa da equipe" | Convidar Membros ✓ |
| "como dou acesso de administrador para alguém da equipe?" | Convidar Membros ✓ |
| "quero travar um ambiente do salão para um evento" | Como bloquear uma área ✓ |
| "quero cadastrar uma nova forma de pagar na minha loja" | Formas de Pagamento ✓ |
| "onde vejo a opinião dos clientes sobre o atendimento?" | Feedbacks nas conversas ✓ |
| "não consigo conectar meu zap, aparece um erro na meta" | Reclamação do erro na Meta ✓ |
| "como eu vejo as reservas antigas do meu restaurante?" | Consultar o histórico ✓ |
| "cupom" (não existe na base) | nenhum resultado ✓ |

Nenhuma dessas perguntas tem uma palavra em comum com o título da resposta que
ela acha — todas passam por sinônimo, raiz ou caminho.

---

## Pergunta em aberto

**Severidade do ticket.** `SEV` e `SEV_POR_CATEGORIA` estão definidos em [8] do
`conteudo.js` — os três níveis, os rótulos e os prazos — e o `index.html` nunca
os leu. A severidade automática nunca existiu na tela, apesar de o brief
listá-la como comportamento existente na seção 4.

Exibi-la é acrescentar informação, então não entrou. Se for para entrar, é uma
tarefa de uma linha no `blocoTema`:

```js
const s = SEV[SEV_POR_CATEGORIA[c.id]];
```

E aí o selo P1/P2/P3 usa as famílias `crit` / `warn` / `calm` que já existem.
